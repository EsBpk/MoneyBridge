import React from 'react';
import { useLocalization } from '../hooks/useLocalization';
import { useAppContext } from '../context/AppContext';
import { THEMES } from '../themes';
import { XMarkIcon, LockIcon, CheckCircleIcon } from './Icons';
import { ThemeName } from '../types';

interface ThemeSelectorProps {
  onClose: () => void;
}

export const ThemeSelector: React.FC<ThemeSelectorProps> = ({ onClose }) => {
  const { t } = useLocalization();
  const { userGamification, activeTheme, setActiveTheme } = useAppContext();

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
      role="dialog"
      aria-modal="true"
      onClick={onClose}
    >
      <div
        className="bg-white dark:bg-gray-800 rounded-lg shadow-xl w-full max-w-lg flex flex-col"
        onClick={e => e.stopPropagation()}
      >
        <header className="p-4 sm:p-6 border-b border-gray-200 dark:border-gray-700 flex justify-between items-center">
          <div>
            <h2 className="text-xl font-bold text-brand-dark dark:text-white">{t('themes_title')}</h2>
            <p className="text-sm text-gray-500 dark:text-gray-400">{t('themes_desc')}</p>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700"
            aria-label="Close"
          >
            <XMarkIcon className="w-6 h-6" />
          </button>
        </header>

        <main className="p-6 grid grid-cols-2 sm:grid-cols-3 gap-4">
            {THEMES.map((theme) => {
                const isUnlocked = userGamification.level >= theme.unlockLevel;
                const isCurrent = activeTheme === theme.name;
                return (
                    <div key={theme.name} className={`rounded-lg p-4 text-center border-2 ${isCurrent ? 'border-brand-cyan' : 'border-transparent'}`}>
                        <div className="relative w-20 h-14 mx-auto mb-3 rounded-md overflow-hidden shadow-inner flex">
                            <div className="w-1/2 h-full" style={{ backgroundColor: theme.colors['brand-cyan'] }}></div>
                            <div className="w-1/2 h-full" style={{ backgroundColor: theme.colors['accent-yellow'] }}></div>
                            {!isUnlocked && (
                                <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
                                    <LockIcon className="w-6 h-6 text-white" />
                                </div>
                            )}
                        </div>
                        <p className="font-semibold text-brand-dark dark:text-white mb-1 capitalize">{t(`theme_${theme.name}`)}</p>
                        
                        {isUnlocked ? (
                            isCurrent ? (
                                <span className="flex items-center justify-center gap-1 text-sm font-bold text-brand-cyan-dark">
                                    <CheckCircleIcon className="w-4 h-4" />
                                    {t('current_theme')}
                                </span>
                            ) : (
                                <button onClick={() => setActiveTheme(theme.name)} className="text-sm font-semibold text-brand-cyan hover:underline">
                                    {t('apply_theme')}
                                </button>
                            )
                        ) : (
                            <p className="text-xs text-gray-500 dark:text-gray-400">
                                {t('unlocks_at_level', {level: theme.unlockLevel})}
                            </p>
                        )}
                    </div>
                );
            })}
        </main>
      </div>
    </div>
  );
};
