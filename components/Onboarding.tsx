
import React, { useState } from 'react';
import { Language, Country } from '../types';
import { LANGUAGES, COUNTRIES } from '../constants';
import { useLocalization } from '../hooks/useLocalization';
import { useAppContext } from '../context/AppContext';
import { Logo } from './Logo';

export const Onboarding: React.FC = () => {
  const { language, country, setLanguage, setCountry, setIsOnboarded } = useAppContext();
  const [selectedLang, setSelectedLang] = useState<Language>(language || 'en');
  const [selectedCountry, setSelectedCountry] = useState<Country>(country || COUNTRIES[0]);
  
  // Use a local `t` function because global context isn't fully set
  const { t } = useLocalization();

  const handleStart = () => {
    setLanguage(selectedLang);
    setCountry(selectedCountry);
    setIsOnboarded(true);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900">
      <div className="max-w-md w-full mx-auto p-8 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
        <div className="flex flex-col items-center text-center mb-4">
            <Logo className="h-24 w-24 mb-4" />
            <h1 className="text-3xl font-extrabold text-brand-dark dark:text-white">MoneyBridge</h1>
        </div>
        <p className="text-center text-gray-600 dark:text-gray-300 mb-8">{t('welcome_subtitle')}</p>
        
        <div className="space-y-6">
          <div>
            <label htmlFor="language-select" className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1">{t('select_language')}</label>
            <select
              id="language-select"
              value={selectedLang}
              onChange={(e) => setSelectedLang(e.target.value as Language)}
              className="w-full p-2 border border-gray-300 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white"
            >
              {LANGUAGES.map(lang => (
                <option key={lang.code} value={lang.code}>{lang.name}</option>
              ))}
            </select>
          </div>

          <div>
            <label htmlFor="country-select" className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1">{t('select_country')}</label>
            <select
              id="country-select"
              value={selectedCountry.code}
              onChange={(e) => setSelectedCountry(COUNTRIES.find(c => c.code === e.target.value)!)}
              className="w-full p-2 border border-gray-300 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white"
            >
              {COUNTRIES.map(country => (
                <option key={country.code} value={country.code}>{country.name}</option>
              ))}
            </select>
          </div>
        </div>

        <button
          onClick={handleStart}
          className="w-full mt-8 bg-brand-cyan text-white font-bold py-3 px-4 rounded-lg hover:bg-brand-cyan-dark transition-colors"
        >
          {t('get_started')}
        </button>
      </div>
    </div>
  );
};
