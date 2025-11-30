import { AppTheme } from './types';

export const THEMES: AppTheme[] = [
  {
    name: 'default',
    unlockLevel: 1,
    colors: {
      'brand-cyan': '#2DD4BF',
      'accent-yellow': '#FBBF24',
    },
  },
  {
    name: 'oceanic',
    unlockLevel: 5,
    colors: {
      'brand-cyan': '#38bdf8',
      'accent-yellow': '#fde047',
    },
  },
  {
    name: 'sunset',
    unlockLevel: 10,
    colors: {
      'brand-cyan': '#fb923c',
      'accent-yellow': '#fca5a5',
    },
  },
  {
    name: 'forest',
    unlockLevel: 15,
    colors: {
      'brand-cyan': '#4ade80',
      'accent-yellow': '#a3e635',
    },
  },
];
