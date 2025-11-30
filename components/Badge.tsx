import React from 'react';
import { BankIcon, BudgetIcon, CreditIcon, CurrencyIcon, StarIcon, TrophyIcon, FlameIcon, LockIcon } from './Icons';
import { BadgeIconType } from '../types';

interface BadgeProps {
  icon: BadgeIconType;
  label: string;
  description: string;
  isLocked: boolean;
}

const iconMap: { [key in BadgeIconType]: React.FC<{className?: string}> } = {
  Bank: BankIcon,
  Budget: BudgetIcon,
  Credit: CreditIcon,
  Currency: CurrencyIcon,
  Star: StarIcon,
  Trophy: TrophyIcon,
  Flame: FlameIcon,
};

export const Badge: React.FC<BadgeProps> = ({ icon, label, description, isLocked }) => {
  const IconComponent = iconMap[icon];

  return (
    <div className="flex flex-col items-center p-2 text-center" title={description} aria-label={`${label}: ${description}`}>
      <div className={`relative flex items-center justify-center w-16 h-16 rounded-full mb-2 transition-all duration-300 ${isLocked ? 'bg-gray-200 dark:bg-gray-600' : 'bg-accent-yellow text-brand-dark'}`}>
        <IconComponent className={`w-8 h-8 ${isLocked ? 'text-gray-400 dark:text-gray-500' : 'text-brand-dark'}`} />
        {isLocked && (
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30 rounded-full">
                <LockIcon className="w-6 h-6 text-white" />
            </div>
        )}
      </div>
      <span className={`text-sm font-medium ${isLocked ? 'text-gray-500 dark:text-gray-400' : 'text-gray-700 dark:text-gray-300'}`}>{label}</span>
    </div>
  );
};
