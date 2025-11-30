
import React from 'react';
import { useAppContext } from '../context/AppContext';
import { SunIcon, MoonIcon } from './Icons';

export const ThemeToggle: React.FC = () => {
  const { colorScheme, toggleColorScheme } = useAppContext();

  return (
    <button
      onClick={toggleColorScheme}
      className="p-2 rounded-full text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-cyan"
      aria-label="Toggle theme"
    >
      {colorScheme === 'light' ? (
        <MoonIcon className="w-6 h-6" />
      ) : (
        <SunIcon className="w-6 h-6" />
      )}
    </button>
  );
};