import { ExchangeRateData } from '../types';

// Mock data, in a real app this would be a fetch call
const MOCK_RATES: ExchangeRateData = {
  base: 'USD',
  rates: {
    USD: 1,
    EUR: 0.93,
    CAD: 1.37,
    GBP: 0.79,
    AUD: 1.51,
    MXN: 16.67,
    JPY: 157.0,
    CNY: 7.24,
    INR: 83.5,
    BRL: 5.15, // For Portuguese
    CHF: 0.90, // For French
  },
};

export const getExchangeRates = async (base: string): Promise<ExchangeRateData> => {
  console.log(`Fetching exchange rates for base: ${base}`);
  // In a real app, you would fetch from an API and handle the base currency.
  // We'll simulate this with a promise that resolves with mock data.
  // For this mock, we are not adjusting rates based on the 'base' parameter.
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(MOCK_RATES);
    }, 500);
  });
};
