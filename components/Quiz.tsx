
import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import { QuizQuestion, ModuleIconType } from '../types';
import { useLocalization } from '../hooks/useLocalization';
import { getQuizHint } from '../services/geminiService';
import { CheckCircleIcon, XCircleIcon, BankIcon, BudgetIcon, CreditIcon, CurrencyIcon, LightbulbIcon, ChartPieIcon, ReceiptPercentIcon, ShieldCheckIcon, ArrowLeftIcon } from './Icons';
import { useAppContext } from '../context/AppContext';
import { ProgressRing } from './ProgressRing';
import { Confetti } from './Confetti';

interface QuizProps {
  moduleId: string;
  moduleTitle: string;
  moduleIcon: ModuleIconType;
  questions: QuizQuestion[];
  onComplete: (score: number, totalQuestions: number) => void;
  onBack: () => void;
}

const iconMap = {
    Bank: BankIcon,
    Budget: BudgetIcon,
    Credit: CreditIcon,
    Currency: CurrencyIcon,
    ChartPie: ChartPieIcon,
    ReceiptPercent: ReceiptPercentIcon,
    ShieldCheck: ShieldCheckIcon,
};


export const Quiz: React.FC<QuizProps> = ({ moduleId, moduleTitle, moduleIcon, questions, onComplete, onBack }) => {
  const { t, language } = useLocalization();
  const { addToast } = useAppContext();
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [isAnswerSubmitted, setIsAnswerSubmitted] = useState(false);
  const [isQuizFinished, setIsQuizFinished] = useState(false);
  const [hint, setHint] = useState<string | null>(null);
  const [isHintLoading, setIsHintLoading] = useState(false);
  const [wasHintUsed, setWasHintUsed] = useState(false);

  const currentQuestion = questions[currentQuestionIndex];
  const isCorrect = selectedAnswer === currentQuestion.correctAnswer;

  const handleAnswerSelect = (index: number) => {
    if (isAnswerSubmitted) return;

    setSelectedAnswer(index);
    setIsAnswerSubmitted(true);
    if (index === currentQuestion.correctAnswer) {
      setScore(prev => prev + 1);
    }
  };

  const handleNext = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
      setSelectedAnswer(null);
      setIsAnswerSubmitted(false);
      setHint(null);
      setIsHintLoading(false);
      setWasHintUsed(false);
    } else {
      setIsQuizFinished(true);
      onComplete(score, questions.length);
    }
  };

  const handleGetHint = async () => {
    setIsHintLoading(true);
    setWasHintUsed(true);
    try {
        const translatedQuestion = t(currentQuestion.question);
        const translatedOptions = currentQuestion.options.map(o => t(o));
        const hintText = await getQuizHint(translatedQuestion, translatedOptions, language);
        setHint(hintText);
    } catch (error) {
        console.error("Failed to get hint:", error);
        addToast(t('qa_error'), 'error');
        setHint(null);
    } finally {
        setIsHintLoading(false);
    }
  };


  if (isQuizFinished) {
    const percentage = score / questions.length;
    let messageKey = 'quiz_practice';
    if (percentage === 1) messageKey = 'quiz_perfect';
    else if (percentage >= 0.8) messageKey = 'quiz_great';
    else if (percentage >= 0.5) messageKey = 'quiz_good';
    
    return (
      <div className="flex flex-col items-center p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg relative overflow-hidden">
        {percentage === 1 && <Confetti />}
        
        <h2 className="text-2xl font-bold mb-6 text-brand-dark dark:text-white">{t('quiz_complete_title')}</h2>
        
        <ProgressRing progress={percentage} size={180} stroke={12} />
        
        <div className="mt-6 text-center">
            <h3 className="text-2xl font-bold text-brand-cyan mb-2">{t(messageKey)}</h3>
            <p className="text-lg text-gray-600 dark:text-gray-300">
                {t('quiz_score_message', { score, total: questions.length })}
            </p>
        </div>

        <button 
          onClick={onBack} 
          type="button"
          className="mt-8 w-full bg-brand-cyan text-white font-bold py-3 px-6 rounded-lg hover:bg-brand-cyan-dark transition-colors shadow-md"
        >
          {t('back_to_module')}
        </button>
      </div>
    );
  }

  return (
    <div>
        <button 
          onClick={onBack} 
          type="button"
          className="flex items-center gap-2 text-sm font-semibold text-brand-cyan hover:underline mb-4 cursor-pointer"
        >
            <ArrowLeftIcon className="w-4 h-4" />
            <span>{t('back_to_module')}</span>
        </button>
        
        <div className="p-4 sm:p-6 bg-gray-50 dark:bg-gray-800 rounded-lg shadow-md transition-all duration-300">
          <h2 className="text-xl sm:text-2xl font-bold mb-4 text-brand-dark dark:text-white">{t('quiz_title')}: {moduleTitle}</h2>
          <div className="mb-4">
              <p className="font-semibold text-lg text-gray-800 dark:text-gray-200">{t(currentQuestion.question)}</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">Question {currentQuestionIndex + 1} of {questions.length}</p>
          </div>

          <div className="space-y-3">
              {currentQuestion.options.map((option, index) => (
              <button
                  key={index}
                  onClick={() => handleAnswerSelect(index)}
                  disabled={isAnswerSubmitted}
                  className={`w-full text-left p-3 sm:p-4 rounded-lg border-2 transition-all
                  ${selectedAnswer === index ? (isCorrect ? 'bg-green-100 border-green-500 text-brand-dark' : 'bg-red-100 border-red-500 text-brand-dark') : 'bg-white dark:bg-gray-700 border-gray-200 dark:border-gray-600'}
                  ${isAnswerSubmitted ? 'cursor-not-allowed' : 'hover:border-brand-cyan-dark'}`
                  }
              >
                  {t(option)}
              </button>
              ))}
          </div>
          
          {!isAnswerSubmitted && (
              <div className="mt-6">
                  <button
                      onClick={handleGetHint}
                      disabled={wasHintUsed || isHintLoading}
                      className="w-full flex items-center justify-center gap-2 bg-white dark:bg-gray-700 border-2 border-brand-cyan text-brand-cyan font-bold py-2 px-4 rounded-lg hover:bg-brand-cyan-light dark:hover:bg-gray-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                      <LightbulbIcon className="w-5 h-5" />
                      {isHintLoading ? t('hint_loading') : t('get_hint')}
                  </button>
              </div>
          )}

          {isHintLoading && <p className="mt-4 text-center text-gray-600 dark:text-gray-300">{t('hint_loading')}</p>}
          
          {hint && !isHintLoading && !isAnswerSubmitted && (
              <div className="mt-4 p-3 rounded-lg bg-yellow-100 dark:bg-yellow-900/50 text-yellow-800 dark:text-yellow-200 flex items-start">
                  <LightbulbIcon className="w-5 h-5 mr-2 mt-1 flex-shrink-0" />
                  <div>
                      <p className="font-bold">{t('heres_a_hint')}</p>
                      <div className="prose prose-sm dark:prose-invert max-w-none">
                          <ReactMarkdown>{hint}</ReactMarkdown>
                      </div>
                  </div>
              </div>
          )}

          {isAnswerSubmitted && (
              <div className={`mt-4 p-3 rounded-lg flex items-start animate-in fade-in ${isCorrect ? 'bg-green-100 dark:bg-green-900/50 text-green-800 dark:text-green-200' : 'bg-red-100 dark:bg-red-900/50 text-red-800 dark:text-red-200'}`}>
              {isCorrect ? <CheckCircleIcon className="w-5 h-5 mr-2 mt-1 flex-shrink-0" /> : <XCircleIcon className="w-5 h-5 mr-2 mt-1 flex-shrink-0" />}
              <div>
                  <p className="font-bold">{isCorrect ? t('correct_answer') : t('wrong_answer')}</p>
                  <p className="text-sm">{t(isCorrect ? currentQuestion.feedback.correct : currentQuestion.feedback.incorrect)}</p>
              </div>
              </div>
          )}

          <div className="mt-6">
              {isAnswerSubmitted && (
              <button onClick={handleNext} className="w-full bg-brand-cyan text-white font-bold py-2 px-4 rounded-lg hover:bg-brand-cyan-dark transition-colors shadow-md">
                  {currentQuestionIndex < questions.length - 1 ? t('next_question') : t('quiz_results')}
              </button>
              )}
          </div>
        </div>
    </div>
  );
};
