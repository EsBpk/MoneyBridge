
import React from 'react';
import { useLocalization } from '../hooks/useLocalization';
import { Logo } from './Logo';

interface FooterProps {
  onOpenLegal: (type: 'privacy' | 'terms') => void;
  onOpenFeedback: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenLegal, onOpenFeedback }) => {
  const { t } = useLocalization();

  return (
    <footer className="bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 mt-auto">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <Logo className="h-8 w-8 grayscale opacity-70" />
            <span className="text-sm font-semibold text-gray-500 dark:text-gray-400">MoneyBridge</span>
          </div>
          
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-gray-600 dark:text-gray-300">
             <button onClick={() => onOpenLegal('terms')} className="hover:text-brand-cyan transition-colors">
                {t('footer_terms')}
             </button>
             <button onClick={() => onOpenLegal('privacy')} className="hover:text-brand-cyan transition-colors">
                {t('footer_privacy')}
             </button>
             <button onClick={onOpenFeedback} className="hover:text-brand-cyan transition-colors">
                {t('footer_feedback')}
             </button>
          </div>
          
          <div className="text-xs text-gray-400 dark:text-gray-500">
            {t('footer_copyright')}
          </div>
        </div>
      </div>
    </footer>
  );
};
