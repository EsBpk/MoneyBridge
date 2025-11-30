
import React, { useState } from 'react';
import { useAppContext } from '../context/AppContext';
import { useLocalization } from '../hooks/useLocalization';
import { ALL_BADGES, MODULES, XP_FOR_STREAK_DAY, XP_PER_LEVEL } from '../constants';
import { Badge } from './Badge';
import { ProgressRing } from './ProgressRing';
import { FlameIcon, PaintBrushIcon } from './Icons';
import { ModuleProgress } from '../types';
import { DailyBonusModal } from './DailyBonusModal';
import { ThemeSelector } from './ThemeSelector';

export const GamificationDashboard: React.FC = () => {
  const { t } = useLocalization();
  const { userProgress, userGamification } = useAppContext();
  const [isBonusModalOpen, setBonusModalOpen] = useState(false);
  const [isThemeSelectorOpen, setThemeSelectorOpen] = useState(false);

  const { xp, level, streak, lastCheckIn, badges } = userGamification;
  const completedCount = Object.values(userProgress.moduleProgress).filter((p: ModuleProgress) => p.completedQuiz).length;
  const totalModules = MODULES.length;
  const moduleProgress = totalModules > 0 ? completedCount / totalModules : 0;
  
  const xpForCurrentLevel = xp % XP_PER_LEVEL;

  const hasCheckedInToday = () => {
    const today = new Date();
    const last = new Date(lastCheckIn);
    return today.toDateString() === last.toDateString();
  };
  const checkedIn = hasCheckedInToday();

  return (
    <>
      {isBonusModalOpen && <DailyBonusModal onClose={() => setBonusModalOpen(false)} />}
      {isThemeSelectorOpen && <ThemeSelector onClose={() => setThemeSelectorOpen(false)} />}
      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
        <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold text-brand-dark dark:text-white">{t('gamification_title')}</h2>
            <button
                onClick={() => setThemeSelectorOpen(true)}
                className="flex items-center gap-2 text-sm font-semibold text-brand-cyan hover:underline"
                aria-label={t('customize_themes')}
            >
                <PaintBrushIcon className="w-5 h-5" />
                <span>{t('customize_themes')}</span>
            </button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          {/* Progress Ring and Level */}
          <div className="flex flex-col sm:flex-row items-center justify-center sm:justify-start gap-6 md:col-span-2 p-2">
            <ProgressRing progress={moduleProgress} size={100} stroke={8} />
            <div className="text-center sm:text-left flex-1">
              <p className="text-4xl font-bold text-brand-dark dark:text-white">{t('level')} {level}</p>
              <div className="w-full max-w-[200px] mt-2 mx-auto sm:mx-0">
                 <div className="flex justify-between text-xs text-gray-500 dark:text-gray-400">
                     <span>{xpForCurrentLevel} / {XP_PER_LEVEL} {t('xp')}</span>
                     <span>{t('level')} {level + 1} &rarr;</span>
                 </div>
                 <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 mt-1">
                   <div
                     className="bg-accent-yellow h-2 rounded-full transition-all duration-500"
                     style={{ width: `${(xpForCurrentLevel / XP_PER_LEVEL) * 100}%` }}
                   ></div>
                 </div>
              </div>
            </div>
          </div>

          {/* Daily Check-in */}
          <div className="flex flex-col items-center justify-center bg-brand-cyan-light dark:bg-gray-700/50 p-4 rounded-lg h-full">
              <h3 className="font-bold text-brand-dark dark:text-white mb-2">{t('daily_check_in')}</h3>
              {streak > 0 && (
                  <div className="flex items-center text-accent-yellow-dark font-bold mb-2">
                      <FlameIcon className="w-5 h-5 mr-1"/> {streak}-day streak!
                  </div>
              )}
              <button
                  onClick={() => setBonusModalOpen(true)}
                  disabled={checkedIn}
                  className="w-full bg-brand-cyan text-white font-bold py-2 px-4 rounded-lg hover:bg-brand-cyan-dark transition-colors disabled:bg-gray-400 dark:disabled:bg-gray-500 disabled:cursor-not-allowed"
                  aria-label={checkedIn ? t('checked_in_today') : t('check_in_cta')}
              >
                  {checkedIn ? t('checked_in_today') : t('check_in_cta')}
              </button>
          </div>
        </div>

        {/* Badges */}
        <div className="mt-6 pt-4 border-t border-gray-200 dark:border-gray-700">
          <h3 className="font-bold text-brand-dark dark:text-white mb-4">{t('my_badges')}</h3>
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-4 justify-items-center">
            {ALL_BADGES.map(badgeInfo => {
              const earnedBadge = badges.find(b => b.id === badgeInfo.id);
              return (
                <Badge
                  key={badgeInfo.id}
                  icon={badgeInfo.icon}
                  label={t(badgeInfo.nameKey)}
                  description={t(badgeInfo.descKey)}
                  isLocked={!earnedBadge}
                />
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};
