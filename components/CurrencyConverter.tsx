
import React, { useState, useEffect } from 'react';
import { useLocalization } from '../hooks/useLocalization';
import { useAppContext } from '../context/AppContext';
import { getExchangeRates } from '../services/exchangeRateService';
import { ExchangeRateData } from '../types';
import { COUNTRY_CURRENCY_MAP } from '../utils/currency';

export const CurrencyConverter: React.FC = () => {
    const { t } = useLocalization();
    const { country, addToast } = useAppContext();
    const [ratesData, setRatesData] = useState<ExchangeRateData | null>(null);
    const [error, setError] = useState('');
    const [amount, setAmount] = useState<number | string>(100);
    const [fromCurrency, setFromCurrency] = useState(country ? COUNTRY_CURRENCY_MAP[country.code] || 'USD' : 'USD');
    const [toCurrency, setToCurrency] = useState('EUR');
    const [result, setResult] = useState<string | null>(null);
    
    useEffect(() => {
        const fetchRates = async () => {
            try {
                setError('');
                const data = await getExchangeRates(fromCurrency);
                setRatesData(data);
            } catch (err) {
                const errorMessage = t('error_fetching_rates');
                setError(errorMessage);
                addToast(errorMessage, 'error');
            }
        };
        fetchRates();
    }, [fromCurrency, t, addToast]);
    
    useEffect(() => {
        if (ratesData && amount) {
            const rateFrom = ratesData.rates[fromCurrency];
            const rateTo = ratesData.rates[toCurrency];
            if (rateFrom && rateTo) {
                const convertedAmount = (Number(amount) / rateFrom) * rateTo;
                setResult(convertedAmount.toFixed(2));
            }
        } else {
            setResult(null);
        }
    }, [amount, fromCurrency, toCurrency, ratesData]);
    
    return (
        <div className="bg-brand-cyan-light dark:bg-gray-700/50 p-6 rounded-lg mt-4 transition-colors duration-300">
            <h4 className="text-lg font-bold text-brand-dark dark:text-white mb-2">{t('currency_converter_title')}</h4>
            <p className="text-gray-600 dark:text-gray-300 mb-4">{t('currency_converter_desc')}</p>
            
            {error && <p className="text-red-500 text-center mb-4">{error}</p>}

            {!ratesData && !error && <p className="text-center">{t('qa_loading')}</p>}
            
            {ratesData && !error && (
                <>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-end">
                        <div>
                            <label htmlFor="amount" className="block text-sm font-medium text-gray-700 dark:text-gray-300">{t('amount')}</label>
                            <input
                                type="number"
                                id="amount"
                                value={amount}
                                onChange={(e) => setAmount(parseFloat(e.target.value) || '')}
                                className="mt-1 w-full p-2 border border-gray-300 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                            />
                        </div>
                        <div>
                             <label htmlFor="from" className="block text-sm font-medium text-gray-700 dark:text-gray-300">{t('from')}</label>
                            <select
                                id="from"
                                value={fromCurrency}
                                onChange={(e) => setFromCurrency(e.target.value)}
                                 className="mt-1 w-full p-2 border border-gray-300 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                            >
                                {Object.keys(ratesData.rates).map(c => <option key={c} value={c}>{c}</option>)}
                            </select>
                        </div>
                         <div>
                             <label htmlFor="to" className="block text-sm font-medium text-gray-700 dark:text-gray-300">{t('to')}</label>
                            <select
                                id="to"
                                value={toCurrency}
                                onChange={(e) => setToCurrency(e.target.value)}
                                 className="mt-1 w-full p-2 border border-gray-300 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                            >
                                {Object.keys(ratesData.rates).map(c => <option key={c} value={c}>{c}</option>)}
                            </select>
                        </div>
                    </div>
                    {result && (
                        <div className="mt-6 text-center p-4 bg-white dark:bg-gray-800 rounded-lg shadow-sm">
                            <p className="text-lg text-gray-700 dark:text-gray-200">{amount} {fromCurrency} =</p>
                            <p className="text-2xl sm:text-3xl font-bold text-brand-dark dark:text-white">{result} {toCurrency}</p>
                        </div>
                    )}
                </>
            )}
        </div>
    )
}
