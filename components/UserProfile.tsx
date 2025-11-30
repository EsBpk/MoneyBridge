
import React, { useState } from 'react';
import { useAppContext } from '../context/AppContext';
import { useLocalization } from '../hooks/useLocalization';
import { XMarkIcon, UserCircleIcon, PencilIcon } from './Icons';
import { ALL_BADGES } from '../constants';
import { Badge } from './Badge';

interface UserProfileProps {
  onClose: () => void;
}

export const UserProfile: React.FC<UserProfileProps> = ({ onClose }) => {
  const { user, updateUser, addToast, logout, userGamification } = useAppContext();
  const { t } = useLocalization();
  
  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState(user?.name || '');
  const [email, setEmail] = useState(user?.email || '');
  
  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!name.trim() || !email.trim()) {
      addToast(t('error_form_invalid'), 'error');
      return;
    }
    
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      addToast(t('error_email_invalid'), 'error');
      return;
    }

    try {
        updateUser(name, email);
        addToast(t('profile_update_success'), 'success');
        setIsEditing(false);
    } catch (error) {
        addToast(t('error_email_taken'), 'error');
    }
  };

  const handleCancel = () => {
      setName(user?.name || '');
      setEmail(user?.email || '');
      setIsEditing(false);
  };

  const earnedBadges = ALL_BADGES.filter(badge => 
    userGamification.badges.some(earned => earned.id === badge.id)
  );

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
      role="dialog"
      aria-modal="true"
      onClick={onClose}
    >
      <div
        className="bg-white dark:bg-gray-800 rounded-lg shadow-xl w-full max-w-md flex flex-col overflow-hidden animate-in fade-in zoom-in duration-200 max-h-[90vh]"
        onClick={e => e.stopPropagation()}
      >
        <header className="p-4 border-b border-gray-200 dark:border-gray-700 flex justify-between items-center bg-gray-50 dark:bg-gray-700/50 flex-shrink-0">
          <h2 className="text-lg font-bold text-brand-dark dark:text-white">{t('profile_title')}</h2>
          <button
            onClick={onClose}
            className="p-1 rounded-full text-gray-500 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
            aria-label="Close"
          >
            <XMarkIcon className="w-5 h-5" />
          </button>
        </header>

        <div className="p-6 flex flex-col items-center overflow-y-auto">
            <div className="bg-brand-cyan-light dark:bg-gray-700 p-4 rounded-full mb-6 flex-shrink-0">
                <UserCircleIcon className="w-20 h-20 text-brand-cyan" />
            </div>

            {!isEditing ? (
                <div className="w-full text-center space-y-4">
                    <div>
                        <p className="text-sm text-gray-500 dark:text-gray-400 uppercase tracking-wide font-bold mb-1">{t('profile_name')}</p>
                        <p className="text-xl font-semibold text-brand-dark dark:text-white">{user?.name}</p>
                    </div>
                    <div>
                        <p className="text-sm text-gray-500 dark:text-gray-400 uppercase tracking-wide font-bold mb-1">{t('profile_email')}</p>
                        <p className="text-lg text-gray-700 dark:text-gray-200 break-all">{user?.email}</p>
                    </div>

                    <div className="pt-4 border-t border-gray-200 dark:border-gray-700 w-full">
                         <div className="flex justify-center items-center gap-4 mb-4">
                            <div className="bg-accent-yellow/20 text-accent-yellow-dark px-3 py-1 rounded-full font-bold border border-accent-yellow">
                                {t('level')} {userGamification.level}
                            </div>
                             <div className="text-sm text-gray-600 dark:text-gray-300">
                                {userGamification.xp} {t('xp')}
                            </div>
                        </div>

                        {earnedBadges.length > 0 && (
                            <div className="mb-4">
                                <p className="text-sm text-gray-500 dark:text-gray-400 uppercase tracking-wide font-bold mb-3">{t('my_badges')}</p>
                                <div className="flex flex-wrap justify-center gap-2">
                                    {earnedBadges.map(badge => (
                                        <div key={badge.id} className="transform scale-75 origin-top -mb-4">
                                             <Badge 
                                                icon={badge.icon} 
                                                label={t(badge.nameKey)} 
                                                description={t(badge.descKey)} 
                                                isLocked={false} 
                                             />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                    
                    <div className="pt-2 space-y-3 w-full">
                        <button 
                            onClick={() => setIsEditing(true)}
                            className="w-full flex items-center justify-center gap-2 bg-brand-cyan text-white font-bold py-2 px-4 rounded-lg hover:bg-brand-cyan-dark transition-colors shadow-md"
                        >
                            <PencilIcon className="w-4 h-4" />
                            {t('profile_edit')}
                        </button>
                        <button 
                            onClick={() => { logout(); onClose(); }}
                            className="w-full text-red-500 hover:text-red-700 hover:bg-red-50 dark:hover:bg-red-900/20 font-semibold py-2 px-4 rounded-lg transition-colors"
                        >
                            {t('auth_log_out')}
                        </button>
                    </div>
                </div>
            ) : (
                <form onSubmit={handleSave} className="w-full space-y-4">
                    <div>
                        <label htmlFor="profile-name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">{t('profile_name')}</label>
                        <input
                            id="profile-name"
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="w-full p-2 border border-gray-300 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white focus:ring-2 focus:ring-brand-cyan focus:border-transparent"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="profile-email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">{t('profile_email')}</label>
                        <input
                            id="profile-email"
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full p-2 border border-gray-300 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white focus:ring-2 focus:ring-brand-cyan focus:border-transparent"
                            required
                        />
                    </div>
                    <div className="pt-4 flex gap-3">
                        <button 
                            type="button" 
                            onClick={handleCancel}
                            className="flex-1 bg-gray-200 dark:bg-gray-600 text-gray-800 dark:text-white font-semibold py-2 px-4 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-500 transition-colors"
                        >
                            {t('profile_cancel')}
                        </button>
                        <button 
                            type="submit"
                            className="flex-1 bg-accent-yellow text-brand-dark font-bold py-2 px-4 rounded-lg hover:bg-accent-yellow-dark transition-colors shadow-md"
                        >
                            {t('profile_save')}
                        </button>
                    </div>
                </form>
            )}
        </div>
      </div>
    </div>
  );
};
