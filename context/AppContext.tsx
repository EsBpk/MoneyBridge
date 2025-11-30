
import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';
import { Language, Country, UserProgress, Notification, Goal, UserGamificationState, BadgeId, ModuleProgress, ThemeName, Toast, User } from '../types';
import { ALL_BADGES, MODULES, XP_FOR_LESSON, XP_FOR_QUIZ, XP_FOR_STREAK_DAY, XP_PER_LEVEL } from '../constants';
import { translations } from '../i18n/translations';
import { THEMES } from '../themes';

type ColorScheme = 'light' | 'dark';

interface AppContextType {
  language: Language;
  setLanguage: (language: Language) => void;
  country: Country | null;
  setCountry: (country: Country) => void;
  userProgress: UserProgress;
  trackContentView: (moduleId: string) => void;
  trackSimulationComplete: (moduleId: string) => void;
  handleQuizComplete: (moduleId: string, score: number, totalQuestions: number) => void;
  isOnboarded: boolean;
  setIsOnboarded: (status: boolean) => void;
  notifications: Notification[];
  addNotification: (notification: Omit<Notification, 'id' | 'read'>) => void;
  markAllNotificationsAsRead: () => void;
  colorScheme: ColorScheme;
  toggleColorScheme: () => void;
  activeTheme: ThemeName;
  setActiveTheme: (themeName: ThemeName) => void;
  goals: Goal[];
  addGoal: (goal: Omit<Goal, 'id' | 'currentAmount'> & { currentAmount?: number }) => void;
  updateGoalProgress: (goalId: string, amount: number) => void;
  deleteGoal: (goalId: string) => void;
  userGamification: UserGamificationState;
  dailyCheckIn: () => void;
  showConfetti: boolean;
  toasts: Toast[];
  addToast: (message: string, type: 'success' | 'error') => void;
  removeToast: (id: number) => void;
  clearToasts: () => void;
  user: User | null;
  signUp: (name: string, email: string, password: string) => void;
  login: (email: string, password: string) => boolean;
  logout: () => void;
  updateUser: (name: string, email: string) => void;
  resetApp: () => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

const defaultGamificationState: UserGamificationState = {
  xp: 0,
  level: 1,
  streak: 0,
  lastCheckIn: 0,
  badges: [],
};

export const AppContextProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  // Global Settings (Device specific)
  const [language, setLanguageState] = useState<Language>(() => {
      const savedLang = localStorage.getItem('moneybridge-lang');
      return (savedLang as Language) || 'en';
  });

  const [country, setCountryState] = useState<Country | null>(() => {
      const savedCountry = localStorage.getItem('moneybridge-country');
      return savedCountry ? JSON.parse(savedCountry) : null;
  });

  const [colorScheme, setColorScheme] = useState<ColorScheme>(() => {
      const savedTheme = localStorage.getItem('moneybridge-color-scheme') as ColorScheme;
      if (savedTheme) return savedTheme;
      return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  });
  
  const [activeTheme, setActiveThemeState] = useState<ThemeName>(() => {
    const savedTheme = localStorage.getItem('moneybridge-active-theme') as ThemeName;
    return savedTheme || 'default';
  });

  const [isOnboarded, setIsOnboarded] = useState<boolean>(() => {
      return !!localStorage.getItem('moneybridge-onboarded');
  });

  // User Session
  const [user, setUser] = useState<User | null>(() => {
    const savedUser = localStorage.getItem('moneybridge-current-user');
    return savedUser ? JSON.parse(savedUser) : null;
  });

  // User Specific Data (Initialized to defaults, loaded via useEffect)
  const [userProgress, setUserProgress] = useState<UserProgress>({ moduleProgress: {} });
  const [userGamification, setUserGamification] = useState<UserGamificationState>(defaultGamificationState);
  const [goals, setGoals] = useState<Goal[]>([]);
  const [notifications, setNotifications] = useState<Notification[]>([]);

  // UI State
  const [toasts, setToasts] = useState<Toast[]>([]);
  const [showConfetti, setShowConfetti] = useState(false);

  // --- Persistence Effects ---

  // 1. Load User Data when User changes
  useEffect(() => {
    if (user) {
        const emailKey = user.email.toLowerCase().trim();
        
        // Progress
        const savedProgress = localStorage.getItem(`moneybridge-progress-${emailKey}`);
        if (savedProgress) {
            setUserProgress(JSON.parse(savedProgress));
        } else {
            setUserProgress({ moduleProgress: {} });
        }

        // Gamification
        const savedGamification = localStorage.getItem(`moneybridge-gamification-${emailKey}`);
        if (savedGamification) {
            setUserGamification(JSON.parse(savedGamification));
        } else {
            setUserGamification(defaultGamificationState);
        }

        // Goals
        const savedGoals = localStorage.getItem(`moneybridge-goals-${emailKey}`);
        if (savedGoals) {
            setGoals(JSON.parse(savedGoals));
        } else {
            setGoals([]);
        }

        // Notifications
        const savedNotifs = localStorage.getItem(`moneybridge-notifications-${emailKey}`);
        if (savedNotifs) {
            setNotifications(JSON.parse(savedNotifs));
        } else {
            setNotifications([]);
        }

    } else {
        // Reset to defaults if no user
        setUserProgress({ moduleProgress: {} });
        setUserGamification(defaultGamificationState);
        setGoals([]);
        setNotifications([]);
    }
  }, [user]);

  // 2. Save User Data when state changes (Only if user exists)
  useEffect(() => {
    if (user) {
        const emailKey = user.email.toLowerCase().trim();
        localStorage.setItem(`moneybridge-progress-${emailKey}`, JSON.stringify(userProgress));
    }
  }, [userProgress, user]);

  useEffect(() => {
    if (user) {
        const emailKey = user.email.toLowerCase().trim();
        localStorage.setItem(`moneybridge-gamification-${emailKey}`, JSON.stringify(userGamification));
    }
  }, [userGamification, user]);

  useEffect(() => {
    if (user) {
        const emailKey = user.email.toLowerCase().trim();
        localStorage.setItem(`moneybridge-goals-${emailKey}`, JSON.stringify(goals));
    }
  }, [goals, user]);

  useEffect(() => {
    if (user) {
        const emailKey = user.email.toLowerCase().trim();
        localStorage.setItem(`moneybridge-notifications-${emailKey}`, JSON.stringify(notifications));
    }
  }, [notifications, user]);


  // --- Other Effects ---

  useEffect(() => {
    if (isOnboarded && user && notifications.length === 0) {
        const timer = setTimeout(() => {
            // Only add welcome if it's a fresh account (empty notifications)
            addNotification({
                title: 'Welcome to MoneyBridge!',
                message: 'Start your financial journey by exploring the "Banking Basics" module.',
            });
        }, 3000);
        return () => clearTimeout(timer);
    }
  }, [isOnboarded, user]); // Depend on user so it runs after login

  useEffect(() => {
    if (colorScheme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('moneybridge-color-scheme', colorScheme);
  }, [colorScheme]);
  
   useEffect(() => {
    document.documentElement.setAttribute('data-theme', activeTheme);
    localStorage.setItem('moneybridge-active-theme', activeTheme);
  }, [activeTheme]);


  const t = (key: string, replacements?: {[key: string]: string | number}) => {
    let translation = (translations[language] && translations[language][key]) || translations['en'][key] || key;
    if (replacements) {
        Object.keys(replacements).forEach(rKey => {
            translation = translation.replace(`{${rKey}}`, String(replacements[rKey]));
        });
    }
    return translation;
  }
  
  const setActiveTheme = (themeName: ThemeName) => {
    setActiveThemeState(themeName);
  }

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('moneybridge-lang', lang);
  };

  const setCountry = (c: Country) => {
    setCountryState(c);
    localStorage.setItem('moneybridge-country', JSON.stringify(c));
  };

  const addNotification = (notification: Omit<Notification, 'id' | 'read'>) => {
    setNotifications(prev => {
        const newNotif = {
            ...notification,
            id: Date.now(),
            read: false,
        };
        return [newNotif, ...prev];
    });
  };

  const markAllNotificationsAsRead = () => {
    setNotifications(prev => prev.map(n => ({ ...n, read: true })));
  };

  const awardBadge = (badgeId: BadgeId) => {
    setUserGamification(prev => {
        const alreadyHasBadge = prev.badges.some(b => b.id === badgeId);
        if (alreadyHasBadge) return prev;

        const badgeInfo = ALL_BADGES.find(b => b.id === badgeId);
        if(badgeInfo) {
            const badgeName = t(badgeInfo.nameKey);
            addNotification({
                title: t('new_badge_title'),
                message: t('new_badge_message', { badgeName }),
            });
        }
        
        return {
            ...prev,
            badges: [...prev.badges, { id: badgeId, earnedAt: Date.now() }]
        };
    });
  };

  const addXp = (amount: number) => {
    setUserGamification(prev => {
        const newXp = prev.xp + amount;
        const currentLevel = prev.level;
        const newLevel = Math.floor(newXp / XP_PER_LEVEL) + 1;

        if (newLevel > currentLevel) {
            // Level up!
            addNotification({
                title: t('level_up_title'),
                message: t('level_up_message', { level: newLevel })
            });
            setShowConfetti(true);
            setTimeout(() => setShowConfetti(false), 4000); // Confetti lasts for 4 seconds

            // Check for theme unlocks
            const unlockedTheme = THEMES.find(theme => theme.unlockLevel === newLevel);
            if (unlockedTheme) {
                 addNotification({
                    title: t('theme_unlocked_title'),
                    message: t('theme_unlocked_message', { level: newLevel, themeName: t(`theme_${unlockedTheme.name}`) })
                });
            }
        }

        return { ...prev, xp: newXp, level: newLevel };
    });
  };
  
  const updateModuleProgress = (moduleId: string, progress: Partial<ModuleProgress>) => {
    setUserProgress(prev => ({
        ...prev,
        moduleProgress: {
            ...prev.moduleProgress,
            [moduleId]: {
                ...prev.moduleProgress[moduleId],
                ...progress
            }
        }
    }));
  };

  const trackContentView = (moduleId: string) => {
    if (!userProgress.moduleProgress[moduleId]?.viewedContent) {
        updateModuleProgress(moduleId, { viewedContent: true });
    }
  };

  const trackSimulationComplete = (moduleId: string) => {
      if (!userProgress.moduleProgress[moduleId]?.completedSimulation) {
          updateModuleProgress(moduleId, { completedSimulation: true });
      }
  };
  
  const handleQuizComplete = (moduleId: string, score: number, totalQuestions: number) => {
    const wasCompleted = userProgress.moduleProgress[moduleId]?.completedQuiz;
    const percentage = score / totalQuestions;
    let xpEarned = wasCompleted ? 0 : XP_FOR_LESSON;
    let bonusXp = 0;

    if (percentage === 1) { // Perfect score
        bonusXp = Math.round(XP_FOR_QUIZ * 0.5);
        xpEarned += XP_FOR_QUIZ + bonusXp;
        addNotification({ title: 'XP Bonus!', message: t('quiz_xp_bonus_perfect', { bonusXp }) });
    } else if (percentage >= 0.8) { // Good score
        bonusXp = Math.round(XP_FOR_QUIZ * 0.2);
        xpEarned += XP_FOR_QUIZ + bonusXp;
        addNotification({ title: 'XP Bonus!', message: t('quiz_xp_bonus_good', { bonusXp }) });
    } else if (percentage >= 0.5) { // Passing
        xpEarned += XP_FOR_QUIZ;
    } else { // Keep trying
        xpEarned += Math.round(XP_FOR_QUIZ / 2);
    }

    addXp(xpEarned);

    if (!wasCompleted) {
      const completedCount = Object.values(userProgress.moduleProgress).filter((p: ModuleProgress) => p.completedQuiz).length;

      if (completedCount === 0) {
        awardBadge('first_steps');
      }
      if (moduleId === 'budgeting') {
        awardBadge('budget_builder');
      }
      if (completedCount + 1 === MODULES.length) {
        awardBadge('money_master');
      }
    }
    
    if (moduleId === 'credit' && percentage >= 0.8) {
      awardBadge('credit_climber');
    }

    updateModuleProgress(moduleId, { completedQuiz: true });
  };


  const dailyCheckIn = () => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const lastCheck = new Date(userGamification.lastCheckIn);
    lastCheck.setHours(0, 0, 0, 0);

    const diffTime = today.getTime() - lastCheck.getTime();
    const diffDays = diffTime / (1000 * 3600 * 24);

    let newStreak = userGamification.streak;
    if (diffDays === 1) {
        newStreak++;
    } else if (diffDays > 1) {
        newStreak = 1;
    } else { // diffDays is 0 or less, already checked in
        return;
    }

    const xpGained = XP_FOR_STREAK_DAY * newStreak;
    
    setUserGamification(prev => {
        // Calculate new XP and level
        const newXp = prev.xp + xpGained;
        const currentLevel = prev.level;
        const newLevel = Math.floor(newXp / XP_PER_LEVEL) + 1;

        if (newLevel > currentLevel) {
            // Level up!
            addNotification({
                title: t('level_up_title'),
                message: t('level_up_message', { level: newLevel })
            });
            setShowConfetti(true);
            setTimeout(() => setShowConfetti(false), 4000);
        }

        // Return all updates in a single object
        return {
            ...prev,
            xp: newXp,
            level: newLevel,
            streak: newStreak,
            lastCheckIn: Date.now(),
        };
    });

    if (newStreak >= 3) {
        awardBadge('consistent_learner');
    }
  };

  const handleSetIsOnboarded = (status: boolean) => {
      setIsOnboarded(status);
      if (status) {
          localStorage.setItem('moneybridge-onboarded', 'true');
      } else {
          localStorage.removeItem('moneybridge-onboarded');
      }
  };

  const signUp = (name: string, email: string, password: string) => {
    const normalizedEmail = email.trim().toLowerCase();
    const cleanPassword = password.trim();
    const newUser: User = { name: name.trim(), email: normalizedEmail };
    
    // Multi-user storage
    const usersDb = JSON.parse(localStorage.getItem('moneybridge-users-db') || '{}');
    usersDb[normalizedEmail] = { ...newUser, password: cleanPassword };
    localStorage.setItem('moneybridge-users-db', JSON.stringify(usersDb));

    // Remember this user for "Remember Me"
    localStorage.setItem('moneybridge-last-user', JSON.stringify({ email: normalizedEmail, password: cleanPassword }));

    // Set current session
    localStorage.setItem('moneybridge-current-user', JSON.stringify(newUser));
    setUser(newUser);
    clearToasts();
  };

  const login = (email: string, password: string): boolean => {
    const normalizedEmail = email.trim().toLowerCase();
    const cleanPassword = password.trim();
    const usersDb = JSON.parse(localStorage.getItem('moneybridge-users-db') || '{}');
    const account = usersDb[normalizedEmail];

    if (account) {
        if (account.password === cleanPassword) {
            const user: User = { name: account.name, email: account.email };
            localStorage.setItem('moneybridge-current-user', JSON.stringify(user));
            // Remember this user
            localStorage.setItem('moneybridge-last-user', JSON.stringify({ email: normalizedEmail, password: cleanPassword }));
            setUser(user);
            clearToasts();
            return true;
        }
    }
    return false;
  };

  const logout = () => {
    localStorage.removeItem('moneybridge-current-user');
    setUser(null);
  };

  const updateUser = (name: string, email: string) => {
    if (!user) return;
    const oldEmail = user.email;
    const newEmailLower = email.trim().toLowerCase();
    const newName = name.trim();

    const usersDb = JSON.parse(localStorage.getItem('moneybridge-users-db') || '{}');

    if (newEmailLower !== oldEmail && usersDb[newEmailLower]) {
        throw new Error('error_email_taken');
    }

    // Update User DB
    const currentUserData = usersDb[oldEmail];
    
    // If email changed, we need to migrate keys
    if (newEmailLower !== oldEmail) {
        delete usersDb[oldEmail];
        
        // Migrate data in local storage synchronously to prevent data loss
        const suffixes = ['progress', 'gamification', 'goals', 'notifications'];
        suffixes.forEach(suffix => {
            const oldKey = `moneybridge-${suffix}-${oldEmail}`;
            const newKey = `moneybridge-${suffix}-${newEmailLower}`;
            const data = localStorage.getItem(oldKey);
            if (data) {
                localStorage.setItem(newKey, data);
                localStorage.removeItem(oldKey);
            }
        });
    }
    
    // Save updated user info to DB
    const updatedUserData = { ...currentUserData, name: newName, email: newEmailLower };
    usersDb[newEmailLower] = updatedUserData;
    localStorage.setItem('moneybridge-users-db', JSON.stringify(usersDb));

    // Update Last User (Remember Me) if it was the current user
    const lastUser = JSON.parse(localStorage.getItem('moneybridge-last-user') || '{}');
    if (lastUser.email === oldEmail) {
        localStorage.setItem('moneybridge-last-user', JSON.stringify({ ...lastUser, email: newEmailLower }));
    }

    // Update Current Session
    const updatedUser = { name: newName, email: newEmailLower };
    localStorage.setItem('moneybridge-current-user', JSON.stringify(updatedUser));
    
    // Update state - this triggers effects to reload data from the (now migrated) keys
    setUser(updatedUser);
  };

  const resetApp = () => {
    // Allows user to go back to Onboarding/Setup screen without clearing their data or logging out
    localStorage.removeItem('moneybridge-onboarded');
    setIsOnboarded(false);
  };

  const toggleColorScheme = () => {
    setColorScheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  const addGoal = (goal: Omit<Goal, 'id' | 'currentAmount'> & { currentAmount?: number }) => {
    setGoals(prev => {
        const newGoal = {
            ...goal,
            id: Date.now().toString(),
            currentAmount: goal.currentAmount || 0,
        };
        const newGoals = [...prev, newGoal];
        
        addNotification({
            title: 'New Goal Set!',
            message: `You're on your way to saving for your ${goal.name}.`,
        });
        return newGoals;
    });
  };

  const updateGoalProgress = (goalId: string, amount: number) => {
    setGoals(prev => {
        const newGoals = prev.map(g => {
            if (g.id === goalId) {
                const updatedAmount = g.currentAmount + amount;
                if (updatedAmount >= g.targetAmount && g.currentAmount < g.targetAmount) {
                     addNotification({
                        title: 'Goal Reached!',
                        message: `Congratulations! You've reached your goal for "${g.name}".`,
                    });
                }
                return { ...g, currentAmount: updatedAmount };
            }
            return g;
        });
        return newGoals;
    });
  };

  const deleteGoal = (goalId: string) => {
    setGoals(prev => prev.filter(g => g.id !== goalId));
  };
  
  const removeToast = (id: number) => {
    setToasts(prev => prev.filter(toast => toast.id !== id));
  };

  const addToast = (message: string, type: 'success' | 'error') => {
      const id = Date.now();
      setToasts(prev => [...prev, { id, message, type }]);
  };

  const clearToasts = () => {
      setToasts([]);
  };


  return (
    <AppContext.Provider value={{ language, setLanguage, country, setCountry, userProgress, trackContentView, trackSimulationComplete, handleQuizComplete, isOnboarded, setIsOnboarded: handleSetIsOnboarded, notifications, addNotification, markAllNotificationsAsRead, colorScheme, toggleColorScheme, activeTheme, setActiveTheme, goals, addGoal, updateGoalProgress, deleteGoal, userGamification, dailyCheckIn, showConfetti, toasts, addToast, removeToast, clearToasts, user, signUp, login, logout, updateUser, resetApp }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error('useAppContext must be used within an AppContextProvider');
  }
  return context;
};
