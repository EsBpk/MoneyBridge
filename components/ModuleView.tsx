
import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import { Module } from '../types';
import { useLocalization } from '../hooks/useLocalization';
import { useAppContext } from '../context/AppContext';
import { SimulationView } from './SimulationView';
import { Quiz } from './Quiz';
import { PersonalizedBudgetingTips } from './PersonalizedBudgetingTips';
import { CurrencyConverter } from './CurrencyConverter';
import { RolePlaySimulation } from './RolePlaySimulation';
import { ArrowLeftIcon, CheckCircleIcon } from './Icons';

interface ModuleViewProps {
  module: Module;
  onBack: () => void;
}

type ViewState = 'content' | 'simulation' | 'quiz';

const componentMap: { [key: string]: React.FC<any> } = {
  PersonalizedBudgetingTips: PersonalizedBudgetingTips,
  CurrencyConverter: CurrencyConverter,
};

export const ModuleView: React.FC<ModuleViewProps> = ({ module, onBack }) => {
  const { t } = useLocalization();
  const { trackContentView, trackSimulationComplete, handleQuizComplete, userProgress } = useAppContext();
  const [view, setView] = useState<ViewState>('content');

  // FIX: Use optional chaining to safely access progress properties. This prevents
  // errors when a module has no progress recorded yet.
  const isSimulationCompleted = userProgress.moduleProgress[module.id]?.completedSimulation;
  const isQuizCompleted = userProgress.moduleProgress[module.id]?.completedQuiz;

  useEffect(() => {
    trackContentView(module.id);
  }, [module.id, trackContentView]);
  
  const handleSimulationComplete = () => {
    trackSimulationComplete(module.id);
    setView('content');
  };

  const handleQuizSubmit = (score: number, totalQuestions: number) => {
    handleQuizComplete(module.id, score, totalQuestions);
    // The Quiz component shows its own summary screen, so we don't need to change view here.
    // The user will click a button on the summary screen to go back.
  };
  
  if (view === 'simulation' && module.simulation) {
    return <SimulationView simulation={module.simulation} onBack={() => setView('content')} onComplete={handleSimulationComplete} />;
  }
  
  if (view === 'quiz') {
    return <Quiz moduleId={module.id} moduleTitle={t(module.title)} moduleIcon={module.icon} questions={module.quiz} onComplete={handleQuizSubmit} onBack={() => setView('content')} />;
  }
  
  return (
    <div>
        <button onClick={onBack} className="flex items-center gap-2 text-sm font-semibold text-brand-cyan hover:underline mb-4">
            <ArrowLeftIcon className="w-4 h-4" />
            <span>{t('back_to_dashboard')}</span>
        </button>
      <div className="bg-white dark:bg-gray-800 p-4 sm:p-6 rounded-lg shadow-md transition-all duration-300">
        <h1 className="text-2xl sm:text-3xl font-bold text-brand-dark dark:text-white mb-2">{t(module.title)}</h1>
        <p className="text-gray-600 dark:text-gray-300 mb-6">{t(module.description)}</p>

        <div className="prose dark:prose-invert max-w-none space-y-4">
          {module.content.map((item, index) => {
            if (item.type === 'text') {
              return <ReactMarkdown key={index}>{t(item.content)}</ReactMarkdown>;
            }
            if (item.type === 'component') {
              if (item.content.startsWith('RolePlaySimulation')) {
                  const scenarioKey = `role_play_${item.content.split('_')[1].toLowerCase()}_scenario`;
                  const instructionKey = `role_play_${item.content.split('_')[1].toLowerCase()}_instruction`;
                  return <RolePlaySimulation key={index} scenario={t(scenarioKey)} systemInstruction={t(instructionKey)} />
              }
              const Component = componentMap[item.content];
              return Component ? <Component key={index} /> : null;
            }
            return null;
          })}
        </div>

        <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700 space-y-4">
          {module.simulation && (
            <div className={`p-4 rounded-lg flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 ${isSimulationCompleted ? 'bg-green-50 dark:bg-green-900/50' : 'bg-gray-100 dark:bg-gray-700'}`}>
              <div>
                <h3 className="font-bold text-brand-dark dark:text-white">{t('simulation')}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">{t(module.simulation.title)}</p>
              </div>
              {isSimulationCompleted ? (
                 <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-4 w-full sm:w-auto">
                     <div className="flex items-center gap-2 text-green-600 dark:text-green-400 font-semibold">
                        <CheckCircleIcon className="w-6 h-6" />
                        <span>{t('status_completed')}</span> 
                     </div>
                     <button onClick={() => setView('simulation')} className="text-sm font-bold text-brand-cyan hover:text-brand-cyan-dark hover:underline">
                        {t('practice_again')}
                     </button>
                 </div>
              ) : (
                <button onClick={() => setView('simulation')} className="w-full sm:w-auto bg-accent-yellow text-brand-dark font-bold py-2 px-4 rounded-lg hover:bg-accent-yellow-dark transition-colors text-center">
                  {t('start_simulation')}
                </button>
              )}
            </div>
          )}

          <div className={`p-4 rounded-lg flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 ${isQuizCompleted ? 'bg-green-50 dark:bg-green-900/50' : 'bg-gray-100 dark:bg-gray-700'}`}>
            <div>
              <h3 className="font-bold text-brand-dark dark:text-white">{t('quiz')}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">{t('quiz_title')}</p>
            </div>
            {isQuizCompleted ? (
                 <div className="flex items-center gap-2 text-green-600 dark:text-green-400 font-semibold">
                    <CheckCircleIcon className="w-6 h-6" />
                    <span>{t('status_completed')}</span>
                 </div>
              ) : (
                <button onClick={() => setView('quiz')} className="w-full sm:w-auto bg-brand-cyan text-white font-bold py-2 px-4 rounded-lg hover:bg-brand-cyan-dark transition-colors text-center">
                  {t('start_quiz')}
                </button>
              )}
          </div>
        </div>

      </div>
    </div>
  );
};
