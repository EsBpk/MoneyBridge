import React, { useState, useMemo } from 'react';
import { useLocalization } from '../hooks/useLocalization';
import { GLOSSARY_TERMS } from '../constants';
import { XMarkIcon } from './Icons';

interface GlossaryProps {
  onClose: () => void;
}

export const Glossary: React.FC<GlossaryProps> = ({ onClose }) => {
  const { t } = useLocalization();
  const [searchTerm, setSearchTerm] = useState('');

  const translatedTerms = useMemo(() => {
    return GLOSSARY_TERMS.map(term => ({
      ...term,
      name: t(term.termKey),
      definition: t(term.definitionKey),
    })).sort((a, b) => a.name.localeCompare(b.name));
  }, [t]);

  const filteredTerms = useMemo(() => {
    if (!searchTerm.trim()) {
      return translatedTerms;
    }
    const lowercasedFilter = searchTerm.toLowerCase();
    return translatedTerms.filter(term =>
      term.name.toLowerCase().includes(lowercasedFilter)
    );
  }, [searchTerm, translatedTerms]);

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
      role="dialog"
      aria-modal="true"
      onClick={onClose}
    >
      <div
        className="bg-white dark:bg-gray-800 rounded-lg shadow-xl w-full max-w-2xl h-[90vh] flex flex-col"
        onClick={e => e.stopPropagation()}
      >
        <header className="p-4 sm:p-6 border-b border-gray-200 dark:border-gray-700 flex justify-between items-center flex-shrink-0">
          <div>
            <h2 className="text-xl font-bold text-brand-dark dark:text-white">{t('glossary_title')}</h2>
            <p className="text-sm text-gray-500 dark:text-gray-400">{t('glossary_desc')}</p>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700"
            aria-label="Close glossary"
          >
            <XMarkIcon className="w-6 h-6" />
          </button>
        </header>

        <div className="p-4 sm:p-6 flex-shrink-0">
          <input
            type="search"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder={t('glossary_search_placeholder')}
            className="w-full p-2 border border-gray-300 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white focus:ring-2 focus:ring-brand-cyan focus:outline-none transition"
            aria-label={t('glossary_search_placeholder')}
          />
        </div>

        <main className="flex-grow overflow-y-auto px-4 sm:px-6 pb-6">
          {filteredTerms.length > 0 ? (
            <dl>
              {filteredTerms.map(term => (
                <div key={term.termKey} className="mb-4 pb-4 border-b border-gray-100 dark:border-gray-700 last:border-b-0">
                  <dt className="font-bold text-lg text-brand-dark dark:text-white">{term.name}</dt>
                  <dd className="mt-1 text-gray-600 dark:text-gray-300">{term.definition}</dd>
                </div>
              ))}
            </dl>
          ) : (
            <p className="text-center text-gray-500 dark:text-gray-400 py-4">
              {t('glossary_no_results', { searchTerm })}
            </p>
          )}
        </main>
      </div>
    </div>
  );
};
