import React, { useState } from 'react';
import { SignUp } from './SignUp';
import { Login } from './Login';

export const Auth: React.FC = () => {
    const [isLoginView, setIsLoginView] = useState(() => {
        // If an account exists, default to Login view
        return !!localStorage.getItem('moneybridge-mock-account');
    });

    const toggleView = () => {
        setIsLoginView(prev => !prev);
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900">
            {isLoginView ? <Login toggleView={toggleView} /> : <SignUp toggleView={toggleView} />}
        </div>
    );
};