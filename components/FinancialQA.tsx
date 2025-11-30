
import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import { useLocalization } from '../hooks/useLocalization';
import { askGemini } from '../services/geminiService';
import { useAppContext } from '../context/AppContext';

export const FinancialQA: React.FC = () => {
  const { t, language } = useLocalization();
  const { addToast } = useAppContext();
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!question.trim()) return;

    setIsLoading(true);
    setAnswer('');

    try {
      const response = await askGemini(question, language);
      setAnswer(response);
    } catch (err) {
      addToast(t('qa_error'), 'error');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
      <h3 className="text-xl font-bold text-brand-dark dark:text-white">{t('qa_title')}</h3>
      <p className="text-gray-600 dark:text-gray-300 mb-4">{t('qa_desc')}</p>
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col sm:flex-row gap-2">
          <input
            type="text"
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            placeholder={t('qa_placeholder')}
            className="flex-grow p-2 border border-gray-300 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white"
            disabled={isLoading}
          />
          <button
            type="submit"
            className="bg-brand-cyan text-white font-bold py-2 px-4 rounded-lg hover:bg-brand-cyan-dark transition-colors disabled:bg-gray-400"
            disabled={isLoading || !question.trim()}
          >
            {isLoading ? '...' : t('qa_submit')}
          </button>
        </div>
      </form>
      {isLoading && (
        <div className="mt-4 text-center text-gray-600 dark:text-gray-300">
          <p>{t('qa_loading')}</p>
        </div>
      )}
      {answer && (
        <div className="mt-4 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
            <div className="prose dark:prose-invert max-w-none">
                <ReactMarkdown>{answer}</ReactMarkdown>
            </div>
        </div>
      )}
    </div>
  );
};
