
import React, { useState } from 'react';
import { useLocalization } from '../hooks/useLocalization';
import { useAppContext } from '../context/AppContext';
import { MODULES } from '../constants';
import { Module } from '../types';
import { FinancialQA } from './FinancialQA';
import { LocalizedResources } from './LocalizedResources';
import { GamificationDashboard } from './GamificationDashboard';
import { FinancialGoals } from './FinancialGoals';
import { Glossary } from './Glossary';
import { ProgressBar } from './ProgressBar';
import { BankIcon, BudgetIcon, CreditIcon, CurrencyIcon, CheckCircleIcon, BookOpenIcon, ChartPieIcon, ReceiptPercentIcon, ShieldCheckIcon } from './Icons';

interface ModuleCardProps {
  module: Module;
  onSelect: (id: string) => void;
  isCompleted: boolean;
  progress: number;
}

const iconMap = {
  Bank: BankIcon,
  Budget: BudgetIcon,
  Credit: CreditIcon,
  Currency: CurrencyIcon,
  ChartPie: ChartPieIcon,
  ReceiptPercent: ReceiptPercentIcon,
  ShieldCheck: ShieldCheckIcon,
};

const ModuleCard: React.FC<ModuleCardProps> = ({ module, onSelect, isCompleted, progress }) => {
  const { t } = useLocalization();
  const Icon = iconMap[module.icon];

  return (
    <div className={`bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col justify-between ${isCompleted ? 'opacity-90' : ''}`}>
      <div>
        <div className="flex items-center mb-4">
          <div className="bg-accent-yellow p-3 rounded-full mr-4">
            <Icon className="w-6 h-6 text-brand-dark" />
          </div>
          <h3 className="text-xl font-bold text-brand-dark dark:text-white">{t(module.title)}</h3>
        </div>
        <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm">{t(module.description)}</p>
        
        <div className="mb-4">
            <div className="flex justify-between items-center mb-1">
                <span className="text-xs font-medium text-gray-500 dark:text-gray-400">{progress}%</span>
            </div>
            <ProgressBar value={progress} max={100} />
        </div>
      </div>
      <div className="flex justify-between items-center mt-auto pt-2">
        <button
          onClick={() => onSelect(module.id)}
          className="bg-brand-cyan text-white font-bold py-2 px-4 rounded-lg hover:bg-brand-cyan-dark transition-colors"
        >
          {t(isCompleted ? 'continue_learning' : 'start_learning')}
        </button>
        {isCompleted && <CheckCircleIcon className="w-6 h-6 text-green-500" />}
      </div>
    </div>
  );
};

interface DashboardProps {
  onSelectModule: (id: string) => void;
}

export const Dashboard: React.FC<DashboardProps> = ({ onSelectModule }) => {
  const { t } = useLocalization();
  const { userProgress } = useAppContext();
  const [isGlossaryOpen, setGlossaryOpen] = useState(false);

  // Helper to calculate progress
  const calculateProgress = (moduleId: string, hasSimulation: boolean) => {
    const mProgress = userProgress.moduleProgress[moduleId];
    if (!mProgress) return 0;
    
    let progress = 0;

    if (hasSimulation) {
        // Weighted breakdown:
        // Viewed Content: 10%
        // Simulation: 45%
        // Quiz: 45%
        if (mProgress.viewedContent) progress += 10;
        if (mProgress.completedSimulation) progress += 45;
        if (mProgress.completedQuiz) progress += 45;
    } else {
        // No simulation breakdown:
        // Viewed Content: 20%
        // Quiz: 80%
        if (mProgress.viewedContent) progress += 20;
        if (mProgress.completedQuiz) progress += 80;
    }

    return Math.min(progress, 100);
  };

  // Find the next module to suggest
  const nextModule = MODULES.find(m => !userProgress.moduleProgress[m.id]?.completedQuiz);

  return (
    <>
      {isGlossaryOpen && <Glossary onClose={() => setGlossaryOpen(false)} />}
      <div className="space-y-8">
        <GamificationDashboard />

        {nextModule && (
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-bold text-brand-dark dark:text-white mb-2">{t('next_up')}</h2>
            <ModuleCard 
              module={nextModule} 
              onSelect={onSelectModule}
              isCompleted={!!userProgress.moduleProgress[nextModule.id]?.completedQuiz}
              progress={calculateProgress(nextModule.id, !!nextModule.simulation)}
            />
          </div>
        )}

        <div>
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-bold text-brand-dark dark:text-white">{t('modules_title')}</h2>
            <button 
              onClick={() => setGlossaryOpen(true)}
              className="flex items-center gap-2 text-sm font-semibold text-brand-cyan hover:underline"
            >
              <BookOpenIcon className="w-5 h-5" />
              <span>{t('glossary_title')}</span>
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {MODULES.map(module => (
              <ModuleCard
                key={module.id}
                module={module}
                onSelect={onSelectModule}
                isCompleted={!!userProgress.moduleProgress[module.id]?.completedQuiz}
                progress={calculateProgress(module.id, !!module.simulation)}
              />
            ))}
          </div>
        </div>

        <FinancialGoals />
        <FinancialQA />
        <LocalizedResources />
      </div>
    </>
  );
};
