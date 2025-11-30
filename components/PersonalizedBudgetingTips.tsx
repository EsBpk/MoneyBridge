
import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import { useLocalization } from '../hooks/useLocalization';
import { askGemini } from '../services/geminiService';
import { useAppContext } from '../context/AppContext';
import { COUNTRY_CURRENCY_MAP } from '../utils/currency';

const expenseCategories = ['housing', 'groceries', 'dining_out', 'transportation', 'entertainment', 'other'] as const;
type ExpenseCategory = typeof expenseCategories[number];

export const PersonalizedBudgetingTips: React.FC = () => {
  const { t, language } = useLocalization();
  const { country, addToast } = useAppContext();
  const [income, setIncome] = useState('');
  const [expenses, setExpenses] = useState<Record<ExpenseCategory, string>>({
    housing: '',
    groceries: '',
    dining_out: '',
    transportation: '',
    entertainment: '',
    other: '',
  });
  const [tips, setTips] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleExpenseChange = (category: ExpenseCategory, value: string) => {
    setExpenses(prev => ({ ...prev, [category]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!income.trim() || isNaN(parseFloat(income))) {
        addToast(t('error_budget_tips_invalid'), 'error');
        return;
    }

    setIsLoading(true);
    setTips('');

    const currency = country ? COUNTRY_CURRENCY_MAP[country.code] || 'USD' : 'USD';
    const numericIncome = parseFloat(income);
    const numericExpenses = (Object.keys(expenses) as ExpenseCategory[])
      .filter((key) => expenses[key])
      .map((key) => ({
        category: t(`expense_${key}`),
        amount: parseFloat(expenses[key]),
      }));

    const totalExpenses = numericExpenses.reduce((sum, item) => sum + item.amount, 0);

    let prompt = `I am an immigrant in ${country?.name || 'a new country'}. My monthly income is ${numericIncome} ${currency}. My monthly expenses are:\n`;
    numericExpenses.forEach(exp => {
      prompt += `- ${exp.category}: ${exp.amount} ${currency}\n`;
    });
    prompt += `Total expenses are ${totalExpenses} ${currency}. The difference between income and expenses is ${numericIncome - totalExpenses} ${currency}.\n`;
    prompt += `Based on this, provide me with 3-5 simple, actionable, and encouraging budgeting tips. Focus on the largest expense categories. Give me practical advice on how to save money. Keep the tone very supportive for a newcomer who might be feeling overwhelmed.`;

    try {
      const response = await askGemini(prompt, language);
      setTips(response);
    } catch (err) {
      addToast(t('qa_error'), 'error');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="bg-brand-cyan-light dark:bg-gray-700/50 p-6 rounded-lg">
        <h3 className="text-xl font-bold text-brand-dark dark:text-white">{t('budget_tips_title')}</h3>
        <p className="text-gray-600 dark:text-gray-300 mb-4">{t('budget_tips_desc')}</p>
        <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                    <label htmlFor="income" className="block text-sm font-medium text-gray-700 dark:text-gray-300">{t('monthly_income')}</label>
                    <input
                        type="number"
                        id="income"
                        value={income}
                        onChange={(e) => setIncome(e.target.value)}
                        placeholder="e.g., 3000"
                        className="mt-1 w-full p-2 border border-gray-300 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                        required
                        disabled={isLoading}
                    />
                </div>
                {expenseCategories.map(cat => (
                     <div key={cat}>
                        <label htmlFor={cat} className="block text-sm font-medium text-gray-700 dark:text-gray-300">{t(`expense_${cat}`)}</label>
                        <input
                            type="number"
                            id={cat}
                            value={expenses[cat]}
                            onChange={(e) => handleExpenseChange(cat, e.target.value)}
                            placeholder="e.g., 500"
                            className="mt-1 w-full p-2 border border-gray-300 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                            disabled={isLoading}
                        />
                    </div>
                ))}
            </div>
            <button
                type="submit"
                className="mt-6 w-full bg-accent-yellow text-brand-dark font-bold py-2 px-4 rounded-lg hover:bg-accent-yellow-dark transition-colors disabled:bg-gray-400"
                disabled={isLoading || !income}
            >
                {isLoading ? t('budget_tips_loading') : t('budget_tips_submit')}
            </button>
        </form>
        {isLoading && (
            <div className="mt-4 text-center text-gray-600 dark:text-gray-300">
                <p>{t('budget_tips_loading')}</p>
            </div>
        )}
        {tips && (
            <div className="mt-6">
                <h4 className="text-lg font-bold text-brand-dark dark:text-white mb-2">{t('budget_tips_results_title')}</h4>
                <div className="p-4 bg-white dark:bg-gray-800 rounded-lg">
                    <div className="prose dark:prose-invert max-w-none">
                        <ReactMarkdown>{tips}</ReactMarkdown>
                    </div>
                </div>
            </div>
        )}
    </div>
  );
};
