
import React, { useState } from 'react';
import { AppContextProvider, useAppContext } from './context/AppContext';
import { Onboarding } from './components/Onboarding';
import { Dashboard } from './components/Dashboard';
import { ModuleView } from './components/ModuleView';
import { MODULES } from './constants';
import { ThemeToggle } from './components/ThemeToggle';
import { Notifications } from './components/Notifications';
import { Confetti } from './components/Confetti';
import { ToastContainer } from './components/ToastContainer';
import { UserCircleIcon } from './components/Icons';
import { useLocalization } from './hooks/useLocalization';
import { Auth } from './components/Auth';
import { Logo } from './components/Logo';
import { UserProfile } from './components/UserProfile';
import { Footer } from './components/Footer';
import { LegalModal } from './components/LegalModals';
import { FeedbackModal } from './components/FeedbackModal';
import { SkipLink } from './components/SkipLink';

const AppContent: React.FC = () => {
  const { user, isOnboarded, showConfetti, logout } = useAppContext();
  const [activeModuleId, setActiveModuleId] = useState<string | null>(null);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [legalModalOpen, setLegalModalOpen] = useState<'privacy' | 'terms' | null>(null);
  const [isFeedbackOpen, setIsFeedbackOpen] = useState(false);
  
  const { t } = useLocalization();

  if (!user) {
    return <Auth />;
  }

  if (!isOnboarded) {
    return <Onboarding />;
  }
  
  const activeModule = activeModuleId ? MODULES.find(m => m.id === activeModuleId) : null;

  return (
    <div className="bg-gray-50 dark:bg-gray-900 min-h-screen font-sans text-gray-900 dark:text-gray-100 transition-colors duration-300 flex flex-col">
      <SkipLink />
      <ToastContainer />
      {showConfetti && <Confetti />}
      {isProfileOpen && <UserProfile onClose={() => setIsProfileOpen(false)} />}
      {legalModalOpen && <LegalModal type={legalModalOpen} onClose={() => setLegalModalOpen(null)} />}
      {isFeedbackOpen && <FeedbackModal onClose={() => setIsFeedbackOpen(false)} />}
      
      <header className="bg-white dark:bg-gray-800 shadow-sm sticky top-0 z-10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <div
            className="flex items-center gap-3 cursor-pointer"
            onClick={() => setActiveModuleId(null)}
            role="button"
            aria-label="Back to dashboard"
            tabIndex={0}
            onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') setActiveModuleId(null); }}
          >
            <Logo className="h-10 w-10" />
            <span className="text-2xl font-bold text-brand-dark dark:text-white hidden sm:block">MoneyBridge</span>
          </div>
          <div className="flex items-center gap-2">
            <Notifications />
            <ThemeToggle />
            <button
                onClick={() => setIsProfileOpen(true)}
                className="p-2 ml-1 rounded-full text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-cyan"
                aria-label={t('profile_title')}
                title={t('profile_title')}
            >
                <UserCircleIcon className="w-7 h-7" />
            </button>
          </div>
        </div>
      </header>
      
      <main id="main-content" className="max-w-5xl w-full mx-auto p-4 sm:p-6 lg:p-8 flex-grow">
        {activeModule ? (
          <ModuleView module={activeModule} onBack={() => setActiveModuleId(null)} />
        ) : (
          <Dashboard onSelectModule={setActiveModuleId} />
        )}
      </main>
      
      <Footer 
        onOpenLegal={(type) => setLegalModalOpen(type)} 
        onOpenFeedback={() => setIsFeedbackOpen(true)} 
      />
    </div>
  );
};

const App: React.FC = () => {
  return (
    <AppContextProvider>
      <AppContent />
    </AppContextProvider>
  );
};

export default App;
