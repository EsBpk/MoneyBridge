import React from 'react';

interface ProgressBarProps {
  value: number;
  max: number;
}

export const ProgressBar: React.FC<ProgressBarProps> = ({ value, max }) => {
  const progress = max > 0 ? (value / max) * 100 : 0;
  const clampedProgress = Math.min(100, Math.max(0, progress));

  return (
    <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-2.5">
      <div
        className="bg-accent-yellow h-2.5 rounded-full transition-all duration-500"
        style={{ width: `${clampedProgress}%` }}
      ></div>
    </div>
  );
};
