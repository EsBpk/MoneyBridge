
import React, { useState, Fragment } from 'react';
import { useAppContext } from '../context/AppContext';
import { useLocalization } from '../hooks/useLocalization';
import { Goal, GoalIconType } from '../types';
import { ProgressBar } from './ProgressBar';
import { TargetIcon, PiggyBankIcon, HouseIcon, CarIcon, EducationIcon, TrashIcon, XCircleIcon } from './Icons';
import { formatCurrency } from '../utils/currency';

const goalIcons: { [key in GoalIconType]: React.FC<{className?: string}> } = {
  PiggyBank: PiggyBankIcon,
  House: HouseIcon,
  Car: CarIcon,
  Education: EducationIcon,
};

const goalIconOptions: GoalIconType[] = ['PiggyBank', 'House', 'Car', 'Education'];

export const FinancialGoals: React.FC = () => {
    const { goals, addGoal, updateGoalProgress, deleteGoal, country, language, addToast } = useAppContext();
    const { t } = useLocalization();
    const [modal, setModal] = useState<{type: 'add' | 'progress' | 'delete', goal?: Goal} | null>(null);
    const [name, setName] = useState('');
    const [targetAmount, setTargetAmount] = useState('');
    const [currentAmount, setCurrentAmount] = useState('');
    const [icon, setIcon] = useState<GoalIconType>('PiggyBank');
    const [progressAmount, setProgressAmount] = useState('');

    const openAddModal = () => {
        setName('');
        setTargetAmount('');
        setCurrentAmount('');
        setIcon('PiggyBank');
        setModal({ type: 'add' });
    };

    const openProgressModal = (goal: Goal) => {
        setProgressAmount('');
        setModal({ type: 'progress', goal });
    };

    const openDeleteModal = (goal: Goal) => {
        setModal({ type: 'delete', goal });
    };

    const closeModal = () => {
        setModal(null);
    };

    const handleAddGoal = (e: React.FormEvent) => {
        e.preventDefault();
        const target = parseFloat(targetAmount);
        const current = currentAmount ? parseFloat(currentAmount) : 0;
        if (name.trim() && !isNaN(target) && target > 0 && !isNaN(current) && current >= 0) {
            addGoal({ name, targetAmount: target, currentAmount: current, icon });
            closeModal();
        } else {
            addToast(t('error_add_goal_invalid'), 'error');
        }
    };

    const handleAddProgress = (e: React.FormEvent) => {
        e.preventDefault();
        const amount = parseFloat(progressAmount);
        if (modal?.goal && !isNaN(amount) && amount > 0) {
            updateGoalProgress(modal.goal.id, amount);
            closeModal();
        } else {
            addToast(t('error_add_progress_invalid'), 'error');
        }
    };

    const handleDeleteGoal = () => {
        if (modal?.goal) {
            deleteGoal(modal.goal.id);
            closeModal();
        }
    };

    const displayCurrency = (amount: number) => {
        if (!country) return amount.toString();
        return formatCurrency(amount, country.code, language);
    }

    return (
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
            <div className="flex flex-wrap items-center justify-between mb-4 gap-4">
                <div className="flex items-center">
                    <TargetIcon className="w-6 h-6 text-brand-cyan mr-3 flex-shrink-0" />
                    <div>
                        <h2 className="text-xl font-bold text-brand-dark dark:text-white">{t('goals_title')}</h2>
                        <p className="text-sm text-gray-500 dark:text-gray-400">{t('goals_desc')}</p>
                    </div>
                </div>
                <button onClick={openAddModal} className="bg-brand-cyan text-white font-bold py-2 px-4 rounded-lg hover:bg-brand-cyan-dark transition-colors text-sm">
                    {t('add_goal')}
                </button>
            </div>

            {goals.length === 0 ? (
                <p className="text-center text-gray-500 dark:text-gray-400 py-4">{t('No goals yet. Add one to get started!')}</p>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {goals.map(goal => {
                        const GoalIcon = goalIcons[goal.icon];
                        return (
                            <div key={goal.id} className="bg-gray-50 dark:bg-gray-700/50 p-4 rounded-lg">
                                <div className="flex items-center justify-between mb-2">
                                    <div className="flex items-center flex-1 min-w-0 mr-2">
                                        <GoalIcon className="w-8 h-8 text-accent-yellow mr-3 flex-shrink-0" />
                                        <span className="font-bold text-brand-dark dark:text-white truncate" title={goal.name}>{goal.name}</span>
                                    </div>
                                    <button onClick={() => openDeleteModal(goal)} className="text-gray-400 hover:text-red-500 flex-shrink-0">
                                        <TrashIcon className="w-5 h-5" />
                                    </button>
                                </div>
                                <ProgressBar value={goal.currentAmount} max={goal.targetAmount} />
                                <div className="text-sm text-gray-600 dark:text-gray-300 mt-2 flex justify-between items-center">
                                    <span>{displayCurrency(goal.currentAmount)} {t('of')} {displayCurrency(goal.targetAmount)}</span>
                                    <button onClick={() => openProgressModal(goal)} className="text-brand-cyan font-semibold hover:underline text-xs whitespace-nowrap ml-2">
                                        {t('add_progress')}
                                    </button>
                                </div>
                            </div>
                        )
                    })}
                </div>
            )}
            
            {/* Modal */}
            {modal && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4" role="dialog" aria-modal="true" onClick={closeModal}>
                    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl w-full max-w-md max-h-[90vh] overflow-y-auto" onClick={e => e.stopPropagation()}>
                        {modal.type === 'add' && (
                            <form onSubmit={handleAddGoal}>
                                <div className="p-6">
                                    <h3 className="text-lg font-bold text-brand-dark dark:text-white mb-4">{t('add_goal')}</h3>
                                    <div className="space-y-4">
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">{t('goal_name')}</label>
                                            <input type="text" value={name} onChange={e => setName(e.target.value)} required className="mt-1 block w-full p-2 border border-gray-300 rounded-md dark:bg-gray-700 dark:border-gray-600 dark:text-white"/>
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">{t('target_amount')}</label>
                                            <input type="number" value={targetAmount} onChange={e => setTargetAmount(e.target.value)} required min="1" step="any" className="mt-1 block w-full p-2 border border-gray-300 rounded-md dark:bg-gray-700 dark:border-gray-600 dark:text-white"/>
                                        </div>
                                         <div>
                                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">{t('current_amount')}</label>
                                            <input type="number" value={currentAmount} onChange={e => setCurrentAmount(e.target.value)} min="0" step="any" placeholder="0" className="mt-1 block w-full p-2 border border-gray-300 rounded-md dark:bg-gray-700 dark:border-gray-600 dark:text-white"/>
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">{t('select_icon')}</label>
                                            <div className="flex gap-2 flex-wrap">
                                                {goalIconOptions.map(iconName => {
                                                    const IconComponent = goalIcons[iconName];
                                                    return (
                                                        <button type="button" key={iconName} onClick={() => setIcon(iconName)} className={`p-3 rounded-lg ${icon === iconName ? 'bg-brand-cyan-light ring-2 ring-brand-cyan' : 'bg-gray-100 dark:bg-gray-700'}`}>
                                                            <IconComponent className="w-6 h-6 text-brand-dark dark:text-gray-200" />
                                                        </button>
                                                    )
                                                })}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="bg-gray-50 dark:bg-gray-700 px-6 py-3 flex justify-end gap-3">
                                    <button type="button" onClick={closeModal} className="py-2 px-4 rounded-lg bg-gray-200 dark:bg-gray-600 text-gray-800 dark:text-gray-100 hover:bg-gray-300 dark:hover:bg-gray-500 font-semibold">{t('cancel')}</button>
                                    <button type="submit" className="py-2 px-4 rounded-lg bg-accent-yellow hover:bg-accent-yellow-dark font-bold text-brand-dark">{t('save_goal')}</button>
                                </div>
                            </form>
                        )}
                         {modal.type === 'progress' && modal.goal && (
                            <form onSubmit={handleAddProgress}>
                                <div className="p-6">
                                    <h3 className="text-lg font-bold text-brand-dark dark:text-white mb-1">{t('add_progress')}</h3>
                                    <p className="text-gray-600 dark:text-gray-300 mb-4">{modal.goal.name}</p>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">{t('amount_to_add')}</label>
                                        <input type="number" value={progressAmount} onChange={e => setProgressAmount(e.target.value)} required min="0.01" step="any" autoFocus className="mt-1 block w-full p-2 border border-gray-300 rounded-md dark:bg-gray-700 dark:border-gray-600 dark:text-white"/>
                                    </div>
                                </div>
                                <div className="bg-gray-50 dark:bg-gray-700 px-6 py-3 flex justify-end gap-3">
                                    <button type="button" onClick={closeModal} className="py-2 px-4 rounded-lg bg-gray-200 dark:bg-gray-600 text-gray-800 dark:text-gray-100 hover:bg-gray-300 dark:hover:bg-gray-500 font-semibold">{t('cancel')}</button>
                                    <button type="submit" className="py-2 px-4 rounded-lg bg-accent-yellow hover:bg-accent-yellow-dark font-bold text-brand-dark">{t('update_progress')}</button>
                                </div>
                            </form>
                        )}
                         {modal.type === 'delete' && modal.goal && (
                            <div>
                                <div className="p-6 text-center">
                                    <XCircleIcon className="w-12 h-12 text-red-500 mx-auto mb-4" />
                                    <h3 className="text-lg font-bold text-brand-dark dark:text-white mb-2">{t('confirm_delete_goal_title')}</h3>
                                    <p className="text-gray-600 dark:text-gray-300">{t('confirm_delete_goal_message')}</p>
                                </div>
                                <div className="bg-gray-50 dark:bg-gray-700 px-6 py-3 flex justify-end gap-3">
                                    <button type="button" onClick={closeModal} className="py-2 px-4 rounded-lg bg-gray-200 dark:bg-gray-600 text-gray-800 dark:text-gray-100 hover:bg-gray-300 dark:hover:bg-gray-500 font-semibold">{t('cancel')}</button>
                                    <button type="button" onClick={handleDeleteGoal} className="py-2 px-4 rounded-lg bg-red-600 hover:bg-red-700 font-bold text-white">{t('delete')}</button>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
};
