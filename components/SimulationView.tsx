
import React, { useState, useEffect } from 'react';
import { Simulation, SimulationOption } from '../types';
import { useLocalization } from '../hooks/useLocalization';
import { useAppContext } from '../context/AppContext';
import { ArrowLeftIcon, CheckCircleIcon, XCircleIcon } from './Icons';
import { ProgressBar } from './ProgressBar';

interface SimulationViewProps {
  simulation: Simulation;
  onBack: () => void;
  onComplete: () => void;
}

export const SimulationView: React.FC<SimulationViewProps> = ({ simulation, onBack, onComplete }) => {
  const { t } = useLocalization();
  const { showConfetti } = useAppContext();
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const [isCompleted, setIsCompleted] = useState(false);
  const [selectedOption, setSelectedOption] = useState<SimulationOption | null>(null);
  const [showFeedback, setShowFeedback] = useState(false);

  const currentStep = simulation.steps[currentStepIndex];

  // Reset state when changing steps
  useEffect(() => {
    setSelectedOption(null);
    setShowFeedback(false);
  }, [currentStepIndex]);

  const handleNext = () => {
    if (currentStepIndex < simulation.steps.length - 1) {
      setCurrentStepIndex(prev => prev + 1);
    } else {
      setIsCompleted(true);
    }
  };

  const handleOptionClick = (option: SimulationOption) => {
    if (showFeedback && selectedOption?.isCorrect) return; // Prevent changing if already correct and moving on
    setSelectedOption(option);
    setShowFeedback(true);
  };

  const handleFinish = () => {
      onComplete();
  };

  if (isCompleted) {
      return (
        <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md text-center flex flex-col items-center justify-center min-h-[400px] animate-in fade-in duration-500">
            <div className="bg-green-100 dark:bg-green-900/30 p-4 rounded-full mb-6">
                <CheckCircleIcon className="w-16 h-16 text-green-500" />
            </div>
            <h2 className="text-3xl font-bold text-brand-dark dark:text-white mb-2">{t('simulation_complete')}</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-8 max-w-md">
                {t('simulation_complete_desc')}
            </p>
            <button
                onClick={handleFinish}
                className="bg-brand-cyan text-white font-bold py-3 px-8 rounded-lg hover:bg-brand-cyan-dark transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all"
            >
                {t('back_to_module')}
            </button>
        </div>
      );
  }

  return (
    <div>
      <button onClick={onBack} className="flex items-center gap-2 text-sm font-semibold text-brand-cyan hover:underline mb-4">
        <ArrowLeftIcon className="w-4 h-4" />
        <span>{t('back_to_module')}</span>
      </button>
      
      <div className="bg-white dark:bg-gray-800 p-4 sm:p-6 rounded-lg shadow-md min-h-[60vh] sm:min-h-[500px] flex flex-col transition-all duration-300">
        <div className="mb-6">
            <div className="flex justify-between items-center mb-2">
                <h2 className="text-xl sm:text-2xl font-bold text-brand-dark dark:text-white">{t(simulation.title)}</h2>
                <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
                    {t('simulation_step', { current: currentStepIndex + 1, total: simulation.steps.length })}
                </span>
            </div>
            <ProgressBar value={currentStepIndex + 1} max={simulation.steps.length} />
        </div>

        <div className="flex-grow flex flex-col">
            <div className="bg-gray-50 dark:bg-gray-700/50 p-6 sm:p-8 rounded-xl border border-gray-100 dark:border-gray-600 transition-all duration-300 mb-6">
                <h3 className="text-lg sm:text-xl font-bold text-brand-dark dark:text-white mb-4">{t(currentStep.title)}</h3>
                <p className="text-base sm:text-lg text-gray-700 dark:text-gray-200 leading-relaxed">{t(currentStep.content)}</p>
            </div>

            {currentStep.options && currentStep.options.length > 0 ? (
                <div className="grid gap-4 md:grid-cols-2">
                    {currentStep.options.map((option, idx) => {
                        const isSelected = selectedOption === option;
                        let cardClass = "p-4 rounded-lg border-2 cursor-pointer transition-all hover:shadow-md";
                        
                        if (showFeedback && isSelected) {
                            cardClass += option.isCorrect 
                                ? " bg-green-50 border-green-500 dark:bg-green-900/30 dark:border-green-500" 
                                : " bg-red-50 border-red-500 dark:bg-red-900/30 dark:border-red-500";
                        } else {
                            cardClass += " bg-white dark:bg-gray-700 border-gray-200 dark:border-gray-600 hover:border-brand-cyan";
                        }

                        return (
                            <div 
                                key={idx} 
                                onClick={() => handleOptionClick(option)}
                                className={cardClass}
                            >
                                <p className="font-semibold text-brand-dark dark:text-white">{t(option.text)}</p>
                            </div>
                        );
                    })}
                </div>
            ) : null}

            {showFeedback && selectedOption && (
                <div className={`mt-6 p-4 rounded-lg flex items-start animate-in fade-in slide-in-from-bottom-2 ${selectedOption.isCorrect ? 'bg-green-100 dark:bg-green-900/50 text-green-800 dark:text-green-200' : 'bg-red-100 dark:bg-red-900/50 text-red-800 dark:text-red-200'}`}>
                    {selectedOption.isCorrect ? <CheckCircleIcon className="w-6 h-6 mr-3 mt-0.5 flex-shrink-0" /> : <XCircleIcon className="w-6 h-6 mr-3 mt-0.5 flex-shrink-0" />}
                    <div>
                        <p className="font-bold mb-1">{selectedOption.isCorrect ? t('correct_answer') : t('wrong_answer')}</p>
                        <p>{t(selectedOption.feedback)}</p>
                    </div>
                </div>
            )}
        </div>

        <div className="mt-8 text-center">
            {(!currentStep.options || (showFeedback && selectedOption?.isCorrect)) && (
                <button
                    onClick={handleNext}
                    className="w-full sm:w-auto bg-accent-yellow text-brand-dark font-bold py-3 px-10 rounded-lg hover:bg-accent-yellow-dark transition-colors shadow-md animate-in fade-in"
                >
                    {t(currentStep.actionText || 'Continue')}
                </button>
            )}
        </div>
      </div>
    </div>
  );
};
