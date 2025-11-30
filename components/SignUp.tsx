
import React, { useState } from 'react';
import { useLocalization } from '../hooks/useLocalization';
import { useAppContext } from '../context/AppContext';
import { Logo } from './Logo';

interface SignUpProps {
  toggleView: () => void;
}

export const SignUp: React.FC<SignUpProps> = ({ toggleView }) => {
  const { t } = useLocalization();
  const { signUp, addToast } = useAppContext();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const validateEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const trimmedName = name.trim();
    const trimmedEmail = email.trim();

    if (!trimmedName || !trimmedEmail || !password.trim()) {
        addToast(t('error_form_invalid'), 'error');
        return;
    }
    if (!validateEmail(trimmedEmail)) {
        addToast(t('error_email_invalid'), 'error');
        return;
    }
    if (password.length < 8) {
        addToast(t('error_password_short'), 'error');
        return;
    }
    if (password !== confirmPassword) {
      addToast(t('error_password_mismatch'), 'error');
      return;
    }
    signUp(trimmedName, trimmedEmail, password);
  };

  return (
    <div className="max-w-md w-full mx-auto p-8 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
      <div className="flex flex-col items-center text-center mb-4">
        <Logo className="h-20 w-20 mx-auto mb-4" />
        <h1 className="text-3xl font-extrabold text-brand-dark dark:text-white">{t('auth_create_account')}</h1>
      </div>
      <p className="text-center text-gray-600 dark:text-gray-300 mb-8">{t('welcome_subtitle')}</p>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-200">{t('auth_full_name')}</label>
          <input
            id="name"
            name="name"
            type="text"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="mt-1 w-full p-2 border border-gray-300 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white"
          />
        </div>
        <div>
          <label htmlFor="email-signup" className="block text-sm font-medium text-gray-700 dark:text-gray-200">{t('auth_email')}</label>
          <input
            id="email-signup"
            name="email"
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="mt-1 w-full p-2 border border-gray-300 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white"
          />
        </div>
        <div>
          <label htmlFor="password-signup" className="block text-sm font-medium text-gray-700 dark:text-gray-200">{t('auth_password')}</label>
          <input
            id="password-signup"
            name="password"
            type="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="mt-1 w-full p-2 border border-gray-300 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white"
          />
        </div>
        <div>
          <label htmlFor="confirm-password" className="block text-sm font-medium text-gray-700 dark:text-gray-200">{t('auth_confirm_password')}</label>
          <input
            id="confirm-password"
            name="confirm-password"
            type="password"
            required
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="mt-1 w-full p-2 border border-gray-300 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-brand-cyan text-white font-bold py-3 px-4 rounded-lg hover:bg-brand-cyan-dark transition-colors"
        >
          {t('auth_sign_up')}
        </button>
      </form>
      <p className="mt-6 text-center text-sm text-gray-600 dark:text-gray-300">
        {t('auth_have_account')}{' '}
        <button onClick={toggleView} className="font-medium text-brand-cyan hover:text-brand-cyan-dark">
          {t('auth_log_in')}
        </button>
      </p>
    </div>
  );
};
