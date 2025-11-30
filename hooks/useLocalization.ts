

import { useCallback } from 'react';
import { useAppContext } from '../context/AppContext';
import { translations } from '../i18n/translations';

export const useLocalization = () => {
  const { language } = useAppContext();

  const t = useCallback(
    // FIX: Made translation lookup more robust with a fallback to English.
    (key: string, replacements?: { [key: string]: string | number }): string => {
      let translation = (translations[language] && translations[language][key]) || translations['en'][key] || key;
      if (replacements) {
        Object.keys(replacements).forEach(rKey => {
            translation = translation.replace(`{${rKey}}`, String(replacements[rKey]));
        });
      }
      return translation;
    },
    [language]
  );

  return { t, language };
};
