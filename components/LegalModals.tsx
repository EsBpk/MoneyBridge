
import React from 'react';
import { useLocalization } from '../hooks/useLocalization';
import { XMarkIcon } from './Icons';

interface LegalModalProps {
  type: 'privacy' | 'terms';
  onClose: () => void;
}

export const LegalModal: React.FC<LegalModalProps> = ({ type, onClose }) => {
  const { t } = useLocalization();
  const titleKey = type === 'privacy' ? 'privacy_title' : 'terms_title';
  const contentKey = type === 'privacy' ? 'privacy_content' : 'terms_content';

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
      role="dialog"
      aria-modal="true"
      onClick={onClose}
    >
      <div
        className="bg-white dark:bg-gray-800 rounded-lg shadow-xl w-full max-w-lg flex flex-col max-h-[90vh]"
        onClick={e => e.stopPropagation()}
      >
        <header className="p-4 border-b border-gray-200 dark:border-gray-700 flex justify-between items-center bg-gray-50 dark:bg-gray-700/50 rounded-t-lg">
          <h2 className="text-lg font-bold text-brand-dark dark:text-white">{t(titleKey)}</h2>
          <button
            onClick={onClose}
            className="p-1 rounded-full text-gray-500 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
            aria-label="Close"
          >
            <XMarkIcon className="w-5 h-5" />
          </button>
        </header>

        <div className="p-6 overflow-y-auto">
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                {t(contentKey)}
            </p>
            
            <div className="mt-6 pt-6 border-t border-gray-100 dark:border-gray-700">
                <p className="text-sm text-gray-500 dark:text-gray-400">
                   MoneyBridge v1.0.0
                </p>
            </div>
        </div>
        
        <footer className="p-4 border-t border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-700/50 rounded-b-lg flex justify-end">
             <button 
                onClick={onClose}
                className="bg-brand-cyan text-white font-bold py-2 px-4 rounded-lg hover:bg-brand-cyan-dark transition-colors"
            >
                {t('cancel')}
            </button>
        </footer>
      </div>
    </div>
  );
};
