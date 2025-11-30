
import React, { useState, useEffect } from 'react';
import { useLocalization } from '../hooks/useLocalization';
import { useAppContext } from '../context/AppContext';
import { XCircleIcon, EyeIcon, EyeSlashIcon } from './Icons';
import { Logo } from './Logo';

interface LoginProps {
  toggleView: () => void;
}

export const Login: React.FC<LoginProps> = ({ toggleView }) => {
  const { t } = useLocalization();
  const { login, addToast, clearToasts } = useAppContext();
  
  const getLastUser = () => {
      try {
          const lastUser = localStorage.getItem('moneybridge-last-user');
          return lastUser ? JSON.parse(lastUser) : null;
      } catch (e) {
          return null;
      }
  };

  const lastUser = getLastUser();

  // Initialize email and password from localStorage to "remember" the user
  const [email, setEmail] = useState(lastUser?.email || '');
  const [password, setPassword] = useState(lastUser?.password || '');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');

  // Clear toasts when the component unmounts (e.g. user navigates to Sign Up or logs in)
  useEffect(() => {
      return () => {
          clearToasts();
      };
  }, [clearToasts]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError(''); // Clear previous errors
    
    if (!email.trim() || !password) {
        const msg = t('error_form_invalid');
        setError(msg);
        addToast(msg, 'error');
        return;
    }
    
    const success = login(email, password);
    if (!success) {
        const msg = t('error_login_failed');
        setError(msg);
        addToast(msg, 'error');
    }
  };

  return (
    <div className="max-w-md w-full mx-auto p-8 bg-white dark:bg-gray-800 rounded-lg shadow-lg animate-in fade-in zoom-in duration-300">
      <div className="flex flex-col items-center text-center mb-4">
        <Logo className="h-20 w-20 mx-auto mb-4" />
        <h1 className="text-3xl font-extrabold text-brand-dark dark:text-white">{t('auth_welcome_back')}</h1>
      </div>
       <p className="text-center text-gray-600 dark:text-gray-300 mb-8">{t('welcome_subtitle')}</p>

      <form onSubmit={handleSubmit} className="space-y-6">
        {error && (
            <div className="bg-red-50 dark:bg-red-900/30 border border-red-200 dark:border-red-800 rounded-lg p-3 flex items-start gap-2 text-red-700 dark:text-red-200 text-sm">
                <XCircleIcon className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <span>{error}</span>
            </div>
        )}

        <div>
          <label htmlFor="email-login" className="block text-sm font-medium text-gray-700 dark:text-gray-200">{t('auth_email')}</label>
          <input
            id="email-login"
            name="email"
            type="email"
            autoComplete="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="mt-1 w-full p-2 border border-gray-300 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white focus:ring-2 focus:ring-brand-cyan focus:border-transparent transition-shadow"
          />
        </div>
        <div>
          <label htmlFor="password-login" className="block text-sm font-medium text-gray-700 dark:text-gray-200">{t('auth_password')}</label>
          <div className="relative mt-1">
            <input
                id="password-login"
                name="password"
                type={showPassword ? "text" : "password"}
                autoComplete="current-password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full p-2 pr-10 border border-gray-300 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white focus:ring-2 focus:ring-brand-cyan focus:border-transparent transition-shadow"
            />
            <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute inset-y-0 right-0 px-3 flex items-center text-gray-500 dark:text-gray-400 hover:text-brand-cyan focus:outline-none"
            >
                {showPassword ? (
                    <EyeSlashIcon className="h-5 w-5" />
                ) : (
                    <EyeIcon className="h-5 w-5" />
                )}
            </button>
          </div>
        </div>
        <button
          type="submit"
          className="w-full bg-brand-cyan text-white font-bold py-3 px-4 rounded-lg hover:bg-brand-cyan-dark transition-colors shadow-md hover:shadow-lg transform active:scale-[0.98]"
        >
          {t('auth_log_in')}
        </button>
      </form>
      <p className="mt-6 text-center text-sm text-gray-600 dark:text-gray-300">
        {t('auth_no_account')}{' '}
        <button onClick={toggleView} className="font-medium text-brand-cyan hover:text-brand-cyan-dark underline hover:no-underline">
          {t('auth_sign_up')}
        </button>
      </p>
    </div>
  );
};
