
import React from 'react';
import { useLocalization } from '../hooks/useLocalization';

export const SkipLink: React.FC = () => {
    const { t } = useLocalization();
    
    return (
        <a 
            href="#main-content"
            className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-50 focus:px-4 focus:py-2 focus:bg-accent-yellow focus:text-brand-dark focus:font-bold focus:rounded-md shadow-lg"
        >
            {t('skip_to_content')}
        </a>
    );
}
