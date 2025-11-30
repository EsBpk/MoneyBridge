
import React, { useState, useMemo } from 'react';
import { useAppContext } from '../context/AppContext';
import { useLocalization } from '../hooks/useLocalization';
import { RESOURCES } from '../i18n/resources';
import { BankIcon, GovernmentIcon, NonProfitIcon } from './Icons';
import { ResourceCategory } from '../types';

const iconMap = {
    Government: GovernmentIcon,
    Bank: BankIcon,
    NonProfit: NonProfitIcon,
};

export const LocalizedResources: React.FC = () => {
  const { country } = useAppContext();
  const { t } = useLocalization();
  const [searchTerm, setSearchTerm] = useState('');

  if (!country) return null;

  const countryResources: ResourceCategory[] | undefined = RESOURCES[country.code];

  const filteredResources = useMemo(() => {
    if (!countryResources) return [];
    if (!searchTerm.trim()) {
      return countryResources;
    }

    const lowercasedFilter = searchTerm.toLowerCase();

    return countryResources
      .map(category => {
        const filtered = category.resources.filter(
          resource =>
            (t(resource.name) || resource.name).toLowerCase().includes(lowercasedFilter) ||
            t(resource.description).toLowerCase().includes(lowercasedFilter)
        );
        return { ...category, resources: filtered };
      })
      .filter(category => category.resources.length > 0);
  }, [searchTerm, countryResources, t]);

  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
      <h3 className="text-xl font-bold text-brand-dark dark:text-white">{t('resources_title')}</h3>
      <p className="text-gray-600 dark:text-gray-300 mb-4">{t('resources_desc')}</p>
      
      <div className="mb-6">
        <input
          type="search"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder={t('resources_search_placeholder')}
          className="w-full p-2 border border-gray-300 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white focus:ring-2 focus:ring-brand-cyan focus:outline-none transition"
          aria-label={t('resources_search_placeholder')}
        />
      </div>

      {!countryResources || countryResources.length === 0 ? (
        <p className="text-gray-500 dark:text-gray-400">{t('resources_no_data')}</p>
      ) : filteredResources.length > 0 ? (
        <div className="space-y-6">
          {filteredResources.map(category => {
            const Icon = iconMap[category.icon];
            return (
              <div key={category.title}>
                <div className="flex items-center mb-3">
                  <Icon className="w-6 h-6 text-brand-cyan mr-3 flex-shrink-0" />
                  <h4 className="text-lg font-semibold text-brand-dark dark:text-white">{t(category.title)}</h4>
                </div>
                <ul className="space-y-3 pl-9">
                  {category.resources.map(resource => (
                    <li key={resource.url}>
                      <a 
                        href={resource.url} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="font-semibold text-brand-cyan hover:underline break-words"
                      >
                        {t(resource.name) || resource.name}
                      </a>
                      <p className="text-sm text-gray-600 dark:text-gray-400">{t(resource.description)}</p>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      ) : (
        <p className="text-center text-gray-500 dark:text-gray-400 py-4">
          {t('resources_no_results', { searchTerm })}
        </p>
      )}
    </div>
  );
};
