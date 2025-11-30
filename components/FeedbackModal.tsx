
import React, { useState } from 'react';
import { useLocalization } from '../hooks/useLocalization';
import { useAppContext } from '../context/AppContext';
import { XMarkIcon } from './Icons';

interface FeedbackModalProps {
  onClose: () => void;
}

export const FeedbackModal: React.FC<FeedbackModalProps> = ({ onClose }) => {
  const { t } = useLocalization();
  const { addToast } = useAppContext();
  const [feedback, setFeedback] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!feedback.trim()) return;

    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
        setIsSubmitting(false);
        addToast(t('feedback_success'), 'success');
        onClose();
    }, 1000);
  };

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
      role="dialog"
      aria-modal="true"
      onClick={onClose}
    >
      <div
        className="bg-white dark:bg-gray-800 rounded-lg shadow-xl w-full max-w-md flex flex-col"
        onClick={e => e.stopPropagation()}
      >
        <header className="p-4 border-b border-gray-200 dark:border-gray-700 flex justify-between items-center">
          <h2 className="text-lg font-bold text-brand-dark dark:text-white">{t('feedback_title')}</h2>
          <button
            onClick={onClose}
            className="p-1 rounded-full text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700"
            aria-label="Close"
          >
            <XMarkIcon className="w-5 h-5" />
          </button>
        </header>

        <form onSubmit={handleSubmit} className="p-6">
            <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm">{t('feedback_desc')}</p>
            <textarea
                value={feedback}
                onChange={(e) => setFeedback(e.target.value)}
                placeholder={t('feedback_placeholder')}
                className="w-full h-32 p-3 border border-gray-300 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white focus:ring-2 focus:ring-brand-cyan focus:border-transparent resize-none"
                required
            />
            <div className="mt-6 flex justify-end gap-3">
                 <button 
                    type="button"
                    onClick={onClose}
                    className="bg-gray-200 dark:bg-gray-600 text-gray-800 dark:text-white font-semibold py-2 px-4 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-500 transition-colors"
                    disabled={isSubmitting}
                >
                    {t('cancel')}
                </button>
                <button 
                    type="submit"
                    className="bg-brand-cyan text-white font-bold py-2 px-4 rounded-lg hover:bg-brand-cyan-dark transition-colors disabled:bg-gray-400"
                    disabled={!feedback.trim() || isSubmitting}
                >
                    {isSubmitting ? '...' : t('feedback_submit')}
                </button>
            </div>
        </form>
      </div>
    </div>
  );
};
