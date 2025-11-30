
import { Language } from '../types';

export const COUNTRY_CURRENCY_MAP: Record<string, string> = {
  US: 'USD',
  CA: 'CAD',
  GB: 'GBP',
  AU: 'AUD',
  MX: 'MXN',
  ES: 'EUR',
  FR: 'EUR',
};

export const formatCurrency = (amount: number, countryCode: string, language: Language): string => {
  const currency = COUNTRY_CURRENCY_MAP[countryCode] || 'USD';
  // Use the user's selected language for locale-specific formatting (e.g., commas vs. periods)
  return new Intl.NumberFormat(language, {
    style: 'currency',
    currency: currency,
  }).format(amount);
};
