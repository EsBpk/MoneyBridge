
import React, { useState, useEffect } from 'react';
import { useLocalization } from '../hooks/useLocalization';
import { useAppContext } from '../context/AppContext';
import { getDailyFinancialFact } from '../services/geminiService';
import { XMarkIcon, LightbulbIcon } from './Icons';
import { XP_FOR_STREAK_DAY } from '../constants';

interface DailyBonusModalProps {
  onClose: () => void;
}

export const DailyBonusModal: React.FC<DailyBonusModalProps> = ({ onClose }) => {
  const { t, language } = useLocalization();
  const { dailyCheckIn, userGamification, addToast } = useAppContext();
  const [fact, setFact] = useState<string>('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchFact = async () => {
      setIsLoading(true);
      try {
        const dailyFact = await getDailyFinancialFact(language);
        setFact(dailyFact);
      } catch (error) {
        console.error("Failed to fetch daily fact:", error);
        addToast(t('qa_error'), 'error');
        onClose();
      } finally {
        setIsLoading(false);
      }
    };
    fetchFact();
  }, [language, t, addToast, onClose]);

  const handleClaim = () => {
    dailyCheckIn();
    onClose();
  };
  
  const xpToGain = XP_FOR_STREAK_DAY * (userGamification.streak + 1);

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
      role="dialog"
      aria-modal="true"
      onClick={onClose}
    >
      <div
        className="bg-white dark:bg-gray-800 rounded-lg shadow-xl w-full max-w-md"
        onClick={e => e.stopPropagation()}
      >
        <header className="p-4 border-b border-gray-200 dark:border-gray-700 flex justify-between items-center">
          <h2 className="text-lg font-bold text-brand-dark dark:text-white">{t('daily_bonus_title')}</h2>
          <button
            onClick={onClose}
            className="p-1 rounded-full text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700"
            aria-label="Close"
          >
            <XMarkIcon className="w-5 h-5" />
          </button>
        </header>
        
        <main className="p-6">
          <h3 className="font-semibold text-brand-dark dark:text-white mb-2">{t('financial_fact_of_the_day')}</h3>
          <div className="bg-brand-cyan-light dark:bg-gray-700/50 p-4 rounded-lg min-h-[80px] flex items-center justify-center">
            {isLoading ? (
              <p className="text-gray-600 dark:text-gray-300">{t('fetching_fact')}</p>
            ) : (
              <div className="flex items-start">
                <LightbulbIcon className="w-6 h-6 text-accent-yellow-dark mr-3 mt-1 flex-shrink-0" />
                <p className="text-gray-700 dark:text-gray-200">{fact}</p>
              </div>
            )}
          </div>
        </main>
        
        <footer className="bg-gray-50 dark:bg-gray-700/50 px-6 py-4">
            <button
              onClick={handleClaim}
              disabled={isLoading}
              className="w-full bg-accent-yellow text-brand-dark font-bold py-3 px-4 rounded-lg hover:bg-accent-yellow-dark transition-colors disabled:bg-gray-300 disabled:cursor-not-allowed"
            >
              {t('claim_reward', { xp: xpToGain })}
            </button>
        </footer>
      </div>
    </div>
  );
};
