
import { Language, Country, Module, BadgeInfo } from './types';

export const LANGUAGES: { code: Language; name: string }[] = [
  { code: 'en', name: 'English' },
  { code: 'es', name: 'Español' },
  { code: 'fr', name: 'Français' },
  { code: 'pt', name: 'Português' },
];

export const COUNTRIES: Country[] = [
  { code: 'US', name: 'United States' },
  { code: 'CA', name: 'Canada' },
  { code: 'GB', name: 'United Kingdom' },
  { code: 'AU', name: 'Australia' },
  { code: 'MX', name: 'Mexico' },
  { code: 'ES', name: 'Spain' },
  { code: 'FR', name: 'France' },
];

export const XP_PER_LEVEL = 1000;
export const XP_FOR_LESSON = 100;
export const XP_FOR_QUIZ = 150;
export const XP_FOR_STREAK_DAY = 50;

export const ALL_BADGES: BadgeInfo[] = [
    { id: 'first_steps', nameKey: 'badge_first_steps_name', descKey: 'badge_first_steps_desc', icon: 'Star' },
    { id: 'budget_builder', nameKey: 'badge_budget_builder_name', descKey: 'badge_budget_builder_desc', icon: 'Budget' },
    { id: 'credit_climber', nameKey: 'badge_credit_climber_name', descKey: 'badge_credit_climber_desc', icon: 'Credit' },
    { id: 'consistent_learner', nameKey: 'badge_consistent_learner_name', descKey: 'badge_consistent_learner_desc', icon: 'Flame' },
    { id: 'money_master', nameKey: 'badge_money_master_name', descKey: 'badge_money_master_desc', icon: 'Trophy' },
];

export const MODULES: Module[] = [
  {
    id: 'banking',
    title: 'module_banking_title',
    description: 'module_banking_desc',
    icon: 'Bank',
    content: [
      { type: 'text', content: 'module_banking_content_1' },
      { type: 'text', content: 'module_banking_content_2' },
      { type: 'text', content: 'module_banking_content_3' },
      { type: 'text', content: 'module_banking_content_4' },
      { type: 'text', content: 'module_banking_content_5' },
      { type: 'text', content: 'module_banking_content_6' },
      { type: 'text', content: 'module_banking_content_7' },
      { type: 'text', content: 'module_banking_content_8' },
      { type: 'component', content: 'RolePlaySimulation_Bank' },
    ],
    simulation: {
      title: 'simulation_banking_title',
      steps: [
        { 
            id: 1, 
            title: 'sim_banking_step1_title', 
            content: 'sim_banking_step1_content', 
            options: [
                { text: 'sim_banking_step1_opt1', feedback: 'sim_banking_step1_feedback1', isCorrect: false },
                { text: 'sim_banking_step1_opt2', feedback: 'sim_banking_step1_feedback2', isCorrect: true },
            ]
        },
        { 
            id: 2, 
            title: 'sim_banking_step2_title', 
            content: 'sim_banking_step2_content', 
            options: [
                { text: 'sim_banking_step2_opt1', feedback: 'sim_banking_step2_feedback1', isCorrect: false },
                { text: 'sim_banking_step2_opt2', feedback: 'sim_banking_step2_feedback2', isCorrect: true },
            ]
        },
        { 
            id: 3, 
            title: 'sim_banking_step3_title', 
            content: 'sim_banking_step3_content', 
            options: [
                { text: 'sim_banking_step3_opt1', feedback: 'sim_banking_step3_feedback1', isCorrect: true },
                { text: 'sim_banking_step3_opt2', feedback: 'sim_banking_step3_feedback2', isCorrect: false },
            ]
        },
        { 
            id: 4, 
            title: 'sim_banking_step4_title', 
            content: 'sim_banking_step4_content', 
            options: [
                { text: 'sim_banking_step4_opt1', feedback: 'sim_banking_step4_feedback1', isCorrect: true },
                { text: 'sim_banking_step4_opt2', feedback: 'sim_banking_step4_feedback2', isCorrect: false },
            ]
        },
        { 
            id: 5, 
            title: 'sim_banking_step5_title', 
            content: 'sim_banking_step5_content', 
            options: [
                { text: 'sim_banking_step5_opt1', feedback: 'sim_banking_step5_feedback1', isCorrect: false },
                { text: 'sim_banking_step5_opt2', feedback: 'sim_banking_step5_feedback2', isCorrect: true },
            ]
        },
        { 
            id: 6, 
            title: 'sim_banking_step6_title', 
            content: 'sim_banking_step6_content', 
            options: [
                { text: 'sim_banking_step6_opt1', feedback: 'sim_banking_step6_feedback1', isCorrect: true },
                { text: 'sim_banking_step6_opt2', feedback: 'sim_banking_step6_feedback2', isCorrect: false },
            ]
        },
        { 
            id: 7, 
            title: 'sim_banking_step7_title', 
            content: 'sim_banking_step7_content', 
            options: [
                { text: 'sim_banking_step7_opt1', feedback: 'sim_banking_step7_feedback1', isCorrect: true },
                { text: 'sim_banking_step7_opt2', feedback: 'sim_banking_step7_feedback2', isCorrect: false },
            ]
        },
        { 
            id: 8, 
            title: 'sim_banking_step8_title', 
            content: 'sim_banking_step8_content', 
            options: [
                { text: 'sim_banking_step8_opt1', feedback: 'sim_banking_step8_feedback1', isCorrect: false },
                { text: 'sim_banking_step8_opt2', feedback: 'sim_banking_step8_feedback2', isCorrect: true },
            ]
        },
        { 
            id: 9, 
            title: 'sim_banking_step9_title', 
            content: 'sim_banking_step9_content', 
            options: [
                { text: 'sim_banking_step9_opt1', feedback: 'sim_banking_step9_feedback1', isCorrect: false },
                { text: 'sim_banking_step9_opt2', feedback: 'sim_banking_step9_feedback2', isCorrect: true },
            ]
        },
        { 
            id: 10, 
            title: 'sim_banking_step10_title', 
            content: 'sim_banking_step10_content', 
            options: [
                { text: 'sim_banking_step10_opt1', feedback: 'sim_banking_step10_feedback1', isCorrect: true },
                { text: 'sim_banking_step10_opt2', feedback: 'sim_banking_step10_feedback2', isCorrect: false },
            ]
        },
      ],
    },
    quiz: [
      {
        question: 'quiz_banking_q1',
        options: ['quiz_banking_q1_op1', 'quiz_banking_q1_op2', 'quiz_banking_q1_op3'],
        correctAnswer: 0,
        feedback: { correct: 'feedback_correct_generic', incorrect: 'feedback_banking_q1_incorrect' },
      },
      {
        question: 'quiz_banking_q2',
        options: ['quiz_banking_q2_op1', 'quiz_banking_q2_op2', 'quiz_banking_q2_op3'],
        correctAnswer: 2,
        feedback: { correct: 'feedback_correct_generic', incorrect: 'feedback_banking_q2_incorrect' },
      },
      {
        question: 'quiz_banking_q3',
        options: ['quiz_banking_q3_op1', 'quiz_banking_q3_op2', 'quiz_banking_q3_op3'],
        correctAnswer: 1,
        feedback: { correct: 'feedback_correct_generic', incorrect: 'feedback_banking_q3_incorrect' },
      },
      {
        question: 'quiz_banking_q4',
        options: ['quiz_banking_q4_op1', 'quiz_banking_q4_op2', 'quiz_banking_q4_op3'],
        correctAnswer: 2,
        feedback: { correct: 'feedback_correct_generic', incorrect: 'feedback_banking_q4_incorrect' },
      },
      {
        question: 'quiz_banking_q5',
        options: ['quiz_banking_q5_op1', 'quiz_banking_q5_op2', 'quiz_banking_q5_op3'],
        correctAnswer: 0,
        feedback: { correct: 'feedback_correct_generic', incorrect: 'feedback_banking_q5_incorrect' },
      },
      {
        question: 'quiz_banking_q6',
        options: ['quiz_banking_q6_op1', 'quiz_banking_q6_op2', 'quiz_banking_q6_op3'],
        correctAnswer: 1,
        feedback: { correct: 'feedback_correct_generic', incorrect: 'feedback_banking_q6_incorrect' },
      },
      {
        question: 'quiz_banking_q7',
        options: ['quiz_banking_q7_op1', 'quiz_banking_q7_op2', 'quiz_banking_q7_op3'],
        correctAnswer: 2,
        feedback: { correct: 'feedback_correct_generic', incorrect: 'feedback_banking_q7_incorrect' },
      },
      {
        question: 'quiz_banking_q8',
        options: ['quiz_banking_q8_op1', 'quiz_banking_q8_op2', 'quiz_banking_q8_op3'],
        correctAnswer: 0,
        feedback: { correct: 'feedback_correct_generic', incorrect: 'feedback_banking_q8_incorrect' },
      },
      {
        question: 'quiz_banking_q9',
        options: ['quiz_banking_q9_op1', 'quiz_banking_q9_op2', 'quiz_banking_q9_op3'],
        correctAnswer: 1,
        feedback: { correct: 'feedback_correct_generic', incorrect: 'feedback_banking_q9_incorrect' },
      },
      {
        question: 'quiz_banking_q10',
        options: ['quiz_banking_q10_op1', 'quiz_banking_q10_op2', 'quiz_banking_q10_op3'],
        correctAnswer: 0,
        feedback: { correct: 'feedback_correct_generic', incorrect: 'feedback_banking_q10_incorrect' },
      },
      {
        question: 'quiz_banking_q11',
        options: ['quiz_banking_q11_op1', 'quiz_banking_q11_op2', 'quiz_banking_q11_op3'],
        correctAnswer: 2,
        feedback: { correct: 'feedback_correct_generic', incorrect: 'feedback_banking_q11_incorrect' },
      },
      {
        question: 'quiz_banking_q12',
        options: ['quiz_banking_q12_op1', 'quiz_banking_q12_op2', 'quiz_banking_q12_op3'],
        correctAnswer: 1,
        feedback: { correct: 'feedback_correct_generic', incorrect: 'feedback_banking_q12_incorrect' },
      },
      {
        question: 'quiz_banking_q13',
        options: ['quiz_banking_q13_op1', 'quiz_banking_q13_op2', 'quiz_banking_q13_op3'],
        correctAnswer: 2,
        feedback: { correct: 'feedback_correct_generic', incorrect: 'feedback_banking_q13_incorrect' },
      },
      {
        question: 'quiz_banking_q14',
        options: ['quiz_banking_q14_op1', 'quiz_banking_q14_op2', 'quiz_banking_q14_op3'],
        correctAnswer: 0,
        feedback: { correct: 'feedback_correct_generic', incorrect: 'feedback_banking_q14_incorrect' },
      },
      {
        question: 'quiz_banking_q15',
        options: ['quiz_banking_q15_op1', 'quiz_banking_q15_op2', 'quiz_banking_q15_op3'],
        correctAnswer: 1,
        feedback: { correct: 'feedback_correct_generic', incorrect: 'feedback_banking_q15_incorrect' },
      },
    ],
  },
  {
    id: 'budgeting',
    title: 'module_budgeting_title',
    description: 'module_budgeting_desc',
    icon: 'Budget',
    content: [
      { type: 'text', content: 'module_budgeting_content_1' },
      { type: 'text', content: 'module_budgeting_content_2' },
      { type: 'text', content: 'module_budgeting_content_3' },
      { type: 'text', content: 'module_budgeting_content_4' },
      { type: 'text', content: 'module_budgeting_content_5' },
      { type: 'text', content: 'module_budgeting_content_6' },
      { type: 'text', content: 'module_budgeting_content_7' },
      { type: 'text', content: 'module_budgeting_content_8' },
      { type: 'text', content: 'module_budgeting_content_9' },
      { type: 'text', content: 'module_budgeting_content_10' },
      { type: 'component', content: 'PersonalizedBudgetingTips' },
    ],
    simulation: {
      title: 'simulation_budgeting_title',
      steps: [
        { 
            id: 1, 
            title: 'sim_budgeting_step1_title', 
            content: 'sim_budgeting_step1_content', 
            options: [
                { text: 'sim_budgeting_step1_opt1', feedback: 'sim_budgeting_step1_feedback1', isCorrect: false },
                { text: 'sim_budgeting_step1_opt2', feedback: 'sim_budgeting_step1_feedback2', isCorrect: true },
            ]
        },
        { 
            id: 2, 
            title: 'sim_budgeting_step2_title', 
            content: 'sim_budgeting_step2_content', 
            options: [
                { text: 'sim_budgeting_step2_opt1', feedback: 'sim_budgeting_step2_feedback1', isCorrect: true },
                { text: 'sim_budgeting_step2_opt2', feedback: 'sim_budgeting_step2_feedback2', isCorrect: false },
            ]
        },
        { 
            id: 3, 
            title: 'sim_budgeting_step3_title', 
            content: 'sim_budgeting_step3_content', 
             options: [
                { text: 'sim_budgeting_step3_opt1', feedback: 'sim_budgeting_step3_feedback1', isCorrect: true },
                { text: 'sim_budgeting_step3_opt2', feedback: 'sim_budgeting_step3_feedback2', isCorrect: false },
            ]
        },
        { 
            id: 4, 
            title: 'sim_budgeting_step4_title', 
            content: 'sim_budgeting_step4_content', 
             options: [
                { text: 'sim_budgeting_step4_opt1', feedback: 'sim_budgeting_step4_feedback1', isCorrect: false },
                { text: 'sim_budgeting_step4_opt2', feedback: 'sim_budgeting_step4_feedback2', isCorrect: true },
            ]
        },
        { 
            id: 5, 
            title: 'sim_budgeting_step5_title', 
            content: 'sim_budgeting_step5_content', 
             options: [
                { text: 'sim_budgeting_step5_opt1', feedback: 'sim_budgeting_step5_feedback1', isCorrect: true },
                { text: 'sim_budgeting_step5_opt2', feedback: 'sim_budgeting_step5_feedback2', isCorrect: false },
            ]
        },
        { 
            id: 6, 
            title: 'sim_budgeting_step6_title', 
            content: 'sim_budgeting_step6_content', 
             options: [
                { text: 'sim_budgeting_step6_opt1', feedback: 'sim_budgeting_step6_feedback1', isCorrect: true },
                { text: 'sim_budgeting_step6_opt2', feedback: 'sim_budgeting_step6_feedback2', isCorrect: false },
            ]
        },
        { 
            id: 7, 
            title: 'sim_budgeting_step7_title', 
            content: 'sim_budgeting_step7_content', 
             options: [
                { text: 'sim_budgeting_step7_opt1', feedback: 'sim_budgeting_step7_feedback1', isCorrect: true },
                { text: 'sim_budgeting_step7_opt2', feedback: 'sim_budgeting_step7_feedback2', isCorrect: false },
            ]
        },
        { 
            id: 8, 
            title: 'sim_budgeting_step8_title', 
            content: 'sim_budgeting_step8_content', 
             options: [
                { text: 'sim_budgeting_step8_opt1', feedback: 'sim_budgeting_step8_feedback1', isCorrect: false },
                { text: 'sim_budgeting_step8_opt2', feedback: 'sim_budgeting_step8_feedback2', isCorrect: true },
            ]
        },
        { 
            id: 9, 
            title: 'sim_budgeting_step9_title', 
            content: 'sim_budgeting_step9_content', 
             options: [
                { text: 'sim_budgeting_step9_opt1', feedback: 'sim_budgeting_step9_feedback1', isCorrect: true },
                { text: 'sim_budgeting_step9_opt2', feedback: 'sim_budgeting_step9_feedback2', isCorrect: false },
            ]
        },
        { 
            id: 10, 
            title: 'sim_budgeting_step10_title', 
            content: 'sim_budgeting_step10_content', 
             options: [
                { text: 'sim_budgeting_step10_opt1', feedback: 'sim_budgeting_step10_feedback1', isCorrect: true },
                { text: 'sim_budgeting_step10_opt2', feedback: 'sim_budgeting_step10_feedback2', isCorrect: false },
            ]
        },
      ],
    },
    quiz: [
      {
        question: 'quiz_budgeting_q1',
        options: ['quiz_budgeting_q1_op1', 'quiz_budgeting_q1_op2', 'quiz_budgeting_q1_op3'],
        correctAnswer: 1,
        feedback: { correct: 'feedback_correct_generic', incorrect: 'feedback_budgeting_q1_incorrect' },
      },
      {
        question: 'quiz_budgeting_q2',
        options: ['quiz_budgeting_q2_op1', 'quiz_budgeting_q2_op2', 'quiz_budgeting_q2_op3'],
        correctAnswer: 2,
        feedback: { correct: 'feedback_correct_generic', incorrect: 'feedback_budgeting_q2_incorrect' },
      },
      {
        question: 'quiz_budgeting_q3',
        options: ['quiz_budgeting_q3_op1', 'quiz_budgeting_q3_op2', 'quiz_budgeting_q3_op3'],
        correctAnswer: 0,
        feedback: { correct: 'feedback_correct_generic', incorrect: 'feedback_budgeting_q3_incorrect' },
      },
      {
        question: 'quiz_budgeting_q4',
        options: ['quiz_budgeting_q4_op1', 'quiz_budgeting_q4_op2', 'quiz_budgeting_q4_op3'],
        correctAnswer: 1,
        feedback: { correct: 'feedback_correct_generic', incorrect: 'feedback_budgeting_q4_incorrect' },
      },
      {
        question: 'quiz_budgeting_q5',
        options: ['quiz_budgeting_q5_op1', 'quiz_budgeting_q5_op2', 'quiz_budgeting_q5_op3'],
        correctAnswer: 2,
        feedback: { correct: 'feedback_correct_generic', incorrect: 'feedback_budgeting_q5_incorrect' },
      },
      {
        question: 'quiz_budgeting_q6',
        options: ['quiz_budgeting_q6_op1', 'quiz_budgeting_q6_op2', 'quiz_budgeting_q6_op3'],
        correctAnswer: 0,
        feedback: { correct: 'feedback_correct_generic', incorrect: 'feedback_budgeting_q6_incorrect' },
      },
      {
        question: 'quiz_budgeting_q7',
        options: ['quiz_budgeting_q7_op1', 'quiz_budgeting_q7_op2', 'quiz_budgeting_q7_op3'],
        correctAnswer: 1,
        feedback: { correct: 'feedback_correct_generic', incorrect: 'feedback_budgeting_q7_incorrect' },
      },
      {
        question: 'quiz_budgeting_q8',
        options: ['quiz_budgeting_q8_op1', 'quiz_budgeting_q8_op2', 'quiz_budgeting_q8_op3'],
        correctAnswer: 2,
        feedback: { correct: 'feedback_correct_generic', incorrect: 'feedback_budgeting_q8_incorrect' },
      },
      {
        question: 'quiz_budgeting_q9',
        options: ['quiz_budgeting_q9_op1', 'quiz_budgeting_q9_op2', 'quiz_budgeting_q9_op3'],
        correctAnswer: 0,
        feedback: { correct: 'feedback_correct_generic', incorrect: 'feedback_budgeting_q9_incorrect' },
      },
      {
        question: 'quiz_budgeting_q10',
        options: ['quiz_budgeting_q10_op1', 'quiz_budgeting_q10_op2', 'quiz_budgeting_q10_op3'],
        correctAnswer: 1,
        feedback: { correct: 'feedback_correct_generic', incorrect: 'feedback_budgeting_q10_incorrect' },
      },
      {
        question: 'quiz_budgeting_q11',
        options: ['quiz_budgeting_q11_op1', 'quiz_budgeting_q11_op2', 'quiz_budgeting_q11_op3'],
        correctAnswer: 2,
        feedback: { correct: 'feedback_correct_generic', incorrect: 'feedback_budgeting_q11_incorrect' },
      },
      {
        question: 'quiz_budgeting_q12',
        options: ['quiz_budgeting_q12_op1', 'quiz_budgeting_q12_op2', 'quiz_budgeting_q12_op3'],
        correctAnswer: 0,
        feedback: { correct: 'feedback_correct_generic', incorrect: 'feedback_budgeting_q12_incorrect' },
      },
      {
        question: 'quiz_budgeting_q13',
        options: ['quiz_budgeting_q13_op1', 'quiz_budgeting_q13_op2', 'quiz_budgeting_q13_op3'],
        correctAnswer: 1,
        feedback: { correct: 'feedback_correct_generic', incorrect: 'feedback_budgeting_q13_incorrect' },
      },
      {
        question: 'quiz_budgeting_q14',
        options: ['quiz_budgeting_q14_op1', 'quiz_budgeting_q14_op2', 'quiz_budgeting_q14_op3'],
        correctAnswer: 2,
        feedback: { correct: 'feedback_correct_generic', incorrect: 'feedback_budgeting_q14_incorrect' },
      },
      {
        question: 'quiz_budgeting_q15',
        options: ['quiz_budgeting_q15_op1', 'quiz_budgeting_q15_op2', 'quiz_budgeting_q15_op3'],
        correctAnswer: 0,
        feedback: { correct: 'feedback_correct_generic', incorrect: 'feedback_budgeting_q15_incorrect' },
      },
    ],
  },
  {
    id: 'credit',
    title: 'module_credit_title',
    description: 'module_credit_desc',
    icon: 'Credit',
    content: [
      { type: 'text', content: 'module_credit_content_1' },
      { type: 'text', content: 'module_credit_content_2' },
      { type: 'text', content: 'module_credit_content_3' },
      { type: 'text', content: 'module_credit_content_4' },
      { type: 'text', content: 'module_credit_content_5' },
      { type: 'text', content: 'module_credit_content_6' },
      { type: 'text', content: 'module_credit_content_7' },
      { type: 'text', content: 'module_credit_content_8' },
      { type: 'text', content: 'module_credit_content_9' },
      { type: 'text', content: 'module_credit_content_10' },
    ],
    simulation: {
      title: 'simulation_credit_title',
      steps: [
        { 
            id: 1, 
            title: 'sim_credit_step1_title', 
            content: 'sim_credit_step1_content', 
            options: [
                { text: 'sim_credit_step1_opt1', feedback: 'sim_credit_step1_feedback1', isCorrect: false },
                { text: 'sim_credit_step1_opt2', feedback: 'sim_credit_step1_feedback2', isCorrect: true },
            ]
        },
        { 
            id: 2, 
            title: 'sim_credit_step2_title', 
            content: 'sim_credit_step2_content', 
            options: [
                { text: 'sim_credit_step2_opt1', feedback: 'sim_credit_step2_feedback1', isCorrect: false },
                { text: 'sim_credit_step2_opt2', feedback: 'sim_credit_step2_feedback2', isCorrect: true },
            ]
        },
        { 
            id: 3, 
            title: 'sim_credit_step3_title', 
            content: 'sim_credit_step3_content', 
            options: [
                { text: 'sim_credit_step3_opt1', feedback: 'sim_credit_step3_feedback1', isCorrect: true },
                { text: 'sim_credit_step3_opt2', feedback: 'sim_credit_step3_feedback2', isCorrect: false },
            ]
        },
        { 
            id: 4, 
            title: 'sim_credit_step4_title', 
            content: 'sim_credit_step4_content', 
            options: [
                { text: 'sim_credit_step4_opt1', feedback: 'sim_credit_step4_feedback1', isCorrect: true },
                { text: 'sim_credit_step4_opt2', feedback: 'sim_credit_step4_feedback2', isCorrect: false },
            ]
        },
        { 
            id: 5, 
            title: 'sim_credit_step5_title', 
            content: 'sim_credit_step5_content', 
            options: [
                { text: 'sim_credit_step5_opt1', feedback: 'sim_credit_step5_feedback1', isCorrect: false },
                { text: 'sim_credit_step5_opt2', feedback: 'sim_credit_step5_feedback2', isCorrect: true },
            ]
        },
        { 
            id: 6, 
            title: 'sim_credit_step6_title', 
            content: 'sim_credit_step6_content', 
            options: [
                { text: 'sim_credit_step6_opt1', feedback: 'sim_credit_step6_feedback1', isCorrect: true },
                { text: 'sim_credit_step6_opt2', feedback: 'sim_credit_step6_feedback2', isCorrect: false },
            ]
        },
        { 
            id: 7, 
            title: 'sim_credit_step7_title', 
            content: 'sim_credit_step7_content', 
            options: [
                { text: 'sim_credit_step7_opt1', feedback: 'sim_credit_step7_feedback1', isCorrect: true },
                { text: 'sim_credit_step7_opt2', feedback: 'sim_credit_step7_feedback2', isCorrect: false },
            ]
        },
        { 
            id: 8, 
            title: 'sim_credit_step8_title', 
            content: 'sim_credit_step8_content', 
            options: [
                { text: 'sim_credit_step8_opt1', feedback: 'sim_credit_step8_feedback1', isCorrect: false },
                { text: 'sim_credit_step8_opt2', feedback: 'sim_credit_step8_feedback2', isCorrect: true },
            ]
        },
        { 
            id: 9, 
            title: 'sim_credit_step9_title', 
            content: 'sim_credit_step9_content', 
            options: [
                { text: 'sim_credit_step9_opt1', feedback: 'sim_credit_step9_feedback1', isCorrect: true },
                { text: 'sim_credit_step9_opt2', feedback: 'sim_credit_step9_feedback2', isCorrect: false },
            ]
        },
        { 
            id: 10, 
            title: 'sim_credit_step10_title', 
            content: 'sim_credit_step10_content', 
            options: [
                { text: 'sim_credit_step10_opt1', feedback: 'sim_credit_step10_feedback1', isCorrect: true },
                { text: 'sim_credit_step10_opt2', feedback: 'sim_credit_step10_feedback2', isCorrect: false },
            ]
        },
      ],
    },
    quiz: [
        {
            question: 'quiz_credit_q1',
            options: ['quiz_credit_q1_op1', 'quiz_credit_q1_op2', 'quiz_credit_q1_op3'],
            correctAnswer: 0,
            feedback: { correct: 'feedback_correct_generic', incorrect: 'feedback_credit_q1_incorrect' },
        },
        {
            question: 'quiz_credit_q2',
            options: ['quiz_credit_q2_op1', 'quiz_credit_q2_op2', 'quiz_credit_q2_op3'],
            correctAnswer: 2,
            feedback: { correct: 'feedback_correct_generic', incorrect: 'feedback_credit_q2_incorrect' },
        },
        {
            question: 'quiz_credit_q3',
            options: ['quiz_credit_q3_op1', 'quiz_credit_q3_op2', 'quiz_credit_q3_op3'],
            correctAnswer: 1,
            feedback: { correct: 'feedback_correct_generic', incorrect: 'feedback_credit_q3_incorrect' },
        },
        {
            question: 'quiz_credit_q4',
            options: ['quiz_credit_q4_op1', 'quiz_credit_q4_op2', 'quiz_credit_q4_op3'],
            correctAnswer: 0,
            feedback: { correct: 'feedback_correct_generic', incorrect: 'feedback_credit_q4_incorrect' },
        },
        {
            question: 'quiz_credit_q5',
            options: ['quiz_credit_q5_op1', 'quiz_credit_q5_op2', 'quiz_credit_q5_op3'],
            correctAnswer: 2,
            feedback: { correct: 'feedback_correct_generic', incorrect: 'feedback_credit_q5_incorrect' },
        },
        {
            question: 'quiz_credit_q6',
            options: ['quiz_credit_q6_op1', 'quiz_credit_q6_op2', 'quiz_credit_q6_op3'],
            correctAnswer: 1,
            feedback: { correct: 'feedback_correct_generic', incorrect: 'feedback_credit_q6_incorrect' },
        },
        {
            question: 'quiz_credit_q7',
            options: ['quiz_credit_q7_op1', 'quiz_credit_q7_op2', 'quiz_credit_q7_op3'],
            correctAnswer: 0,
            feedback: { correct: 'feedback_correct_generic', incorrect: 'feedback_credit_q7_incorrect' },
        },
        {
            question: 'quiz_credit_q8',
            options: ['quiz_credit_q8_op1', 'quiz_credit_q8_op2', 'quiz_credit_q8_op3'],
            correctAnswer: 2,
            feedback: { correct: 'feedback_correct_generic', incorrect: 'feedback_credit_q8_incorrect' },
        },
        {
            question: 'quiz_credit_q9',
            options: ['quiz_credit_q9_op1', 'quiz_credit_q9_op2', 'quiz_credit_q9_op3'],
            correctAnswer: 1,
            feedback: { correct: 'feedback_correct_generic', incorrect: 'feedback_credit_q9_incorrect' },
        },
        {
            question: 'quiz_credit_q10',
            options: ['quiz_credit_q10_op1', 'quiz_credit_q10_op2', 'quiz_credit_q10_op3'],
            correctAnswer: 0,
            feedback: { correct: 'feedback_correct_generic', incorrect: 'feedback_credit_q10_incorrect' },
        },
        {
            question: 'quiz_credit_q11',
            options: ['quiz_credit_q11_op1', 'quiz_credit_q11_op2', 'quiz_credit_q11_op3'],
            correctAnswer: 2,
            feedback: { correct: 'feedback_correct_generic', incorrect: 'feedback_credit_q11_incorrect' },
        },
        {
            question: 'quiz_credit_q12',
            options: ['quiz_credit_q12_op1', 'quiz_credit_q12_op2', 'quiz_credit_q12_op3'],
            correctAnswer: 1,
            feedback: { correct: 'feedback_correct_generic', incorrect: 'feedback_credit_q12_incorrect' },
        },
        {
            question: 'quiz_credit_q13',
            options: ['quiz_credit_q13_op1', 'quiz_credit_q13_op2', 'quiz_credit_q13_op3'],
            correctAnswer: 0,
            feedback: { correct: 'feedback_correct_generic', incorrect: 'feedback_credit_q13_incorrect' },
        },
        {
            question: 'quiz_credit_q14',
            options: ['quiz_credit_q14_op1', 'quiz_credit_q14_op2', 'quiz_credit_q14_op3'],
            correctAnswer: 2,
            feedback: { correct: 'feedback_correct_generic', incorrect: 'feedback_credit_q14_incorrect' },
        },
        {
            question: 'quiz_credit_q15',
            options: ['quiz_credit_q15_op1', 'quiz_credit_q15_op2', 'quiz_credit_q15_op3'],
            correctAnswer: 1,
            feedback: { correct: 'feedback_correct_generic', incorrect: 'feedback_credit_q15_incorrect' },
        },
    ]
  },
  {
      id: 'currency',
      title: 'module_currency_title',
      description: 'module_currency_desc',
      icon: 'Currency',
      content: [
        { type: 'text', content: 'module_currency_content_1' },
        { type: 'text', content: 'module_currency_content_2' },
        { type: 'text', content: 'module_currency_content_3' },
        { type: 'text', content: 'module_currency_content_4' },
        { type: 'text', content: 'module_currency_content_5' },
        { type: 'text', content: 'module_currency_content_6' },
        { type: 'text', content: 'module_currency_content_7' },
        { type: 'text', content: 'module_currency_content_8' },
        { type: 'text', content: 'module_currency_content_9' },
        { type: 'text', content: 'module_currency_content_10' },
        { type: 'component', content: 'CurrencyConverter' },
      ],
      simulation: {
        title: 'simulation_currency_title',
        steps: [
            { 
                id: 1, 
                title: 'sim_currency_step1_title', 
                content: 'sim_currency_step1_content', 
                options: [
                    { text: 'sim_currency_step1_opt1', feedback: 'sim_currency_step1_feedback1', isCorrect: true },
                    { text: 'sim_currency_step1_opt2', feedback: 'sim_currency_step1_feedback2', isCorrect: false },
                ]
            },
            { 
                id: 2, 
                title: 'sim_currency_step2_title', 
                content: 'sim_currency_step2_content', 
                options: [
                    { text: 'sim_currency_step2_opt1', feedback: 'sim_currency_step2_feedback1', isCorrect: false },
                    { text: 'sim_currency_step2_opt2', feedback: 'sim_currency_step2_feedback2', isCorrect: true },
                ]
            },
            { 
                id: 3, 
                title: 'sim_currency_step3_title', 
                content: 'sim_currency_step3_content', 
                options: [
                    { text: 'sim_currency_step3_opt1', feedback: 'sim_currency_step3_feedback1', isCorrect: true },
                    { text: 'sim_currency_step3_opt2', feedback: 'sim_currency_step3_feedback2', isCorrect: false },
                ]
            },
            { 
                id: 4, 
                title: 'sim_currency_step4_title', 
                content: 'sim_currency_step4_content', 
                options: [
                    { text: 'sim_currency_step4_opt1', feedback: 'sim_currency_step4_feedback1', isCorrect: true },
                    { text: 'sim_currency_step4_opt2', feedback: 'sim_currency_step4_feedback2', isCorrect: false },
                ]
            },
            { 
                id: 5, 
                title: 'sim_currency_step5_title', 
                content: 'sim_currency_step5_content', 
                options: [
                    { text: 'sim_currency_step5_opt1', feedback: 'sim_currency_step5_feedback1', isCorrect: false },
                    { text: 'sim_currency_step5_opt2', feedback: 'sim_currency_step5_feedback2', isCorrect: true },
                ]
            },
            { 
                id: 6, 
                title: 'sim_currency_step6_title', 
                content: 'sim_currency_step6_content', 
                options: [
                    { text: 'sim_currency_step6_opt1', feedback: 'sim_currency_step6_feedback1', isCorrect: true },
                    { text: 'sim_currency_step6_opt2', feedback: 'sim_currency_step6_feedback2', isCorrect: false },
                ]
            },
            { 
                id: 7, 
                title: 'sim_currency_step7_title', 
                content: 'sim_currency_step7_content', 
                options: [
                    { text: 'sim_currency_step7_opt1', feedback: 'sim_currency_step7_feedback1', isCorrect: true },
                    { text: 'sim_currency_step7_opt2', feedback: 'sim_currency_step7_feedback2', isCorrect: false },
                ]
            },
            { 
                id: 8, 
                title: 'sim_currency_step8_title', 
                content: 'sim_currency_step8_content', 
                options: [
                    { text: 'sim_currency_step8_opt1', feedback: 'sim_currency_step8_feedback1', isCorrect: true },
                    { text: 'sim_currency_step8_opt2', feedback: 'sim_currency_step8_feedback2', isCorrect: false },
                ]
            },
            { 
                id: 9, 
                title: 'sim_currency_step9_title', 
                content: 'sim_currency_step9_content', 
                options: [
                    { text: 'sim_currency_step9_opt1', feedback: 'sim_currency_step9_feedback1', isCorrect: false },
                    { text: 'sim_currency_step9_opt2', feedback: 'sim_currency_step9_feedback2', isCorrect: true },
                ]
            },
            { 
                id: 10, 
                title: 'sim_currency_step10_title', 
                content: 'sim_currency_step10_content', 
                options: [
                    { text: 'sim_currency_step10_opt1', feedback: 'sim_currency_step10_feedback1', isCorrect: true },
                    { text: 'sim_currency_step10_opt2', feedback: 'sim_currency_step10_feedback2', isCorrect: false },
                ]
            },
        ],
      },
      quiz: [
        {
            question: 'quiz_currency_q1',
            options: ['quiz_currency_q1_op1', 'quiz_currency_q1_op2', 'quiz_currency_q1_op3'],
            correctAnswer: 2,
            feedback: { correct: 'feedback_correct_generic', incorrect: 'feedback_currency_q1_incorrect' },
        },
        {
            question: 'quiz_currency_q2',
            options: ['quiz_currency_q2_op1', 'quiz_currency_q2_op2', 'quiz_currency_q2_op3'],
            correctAnswer: 0,
            feedback: { correct: 'feedback_correct_generic', incorrect: 'feedback_currency_q2_incorrect' },
        },
        {
            question: 'quiz_currency_q3',
            options: ['quiz_currency_q3_op1', 'quiz_currency_q3_op2', 'quiz_currency_q3_op3'],
            correctAnswer: 1,
            feedback: { correct: 'feedback_correct_generic', incorrect: 'feedback_currency_q3_incorrect' },
        },
        {
            question: 'quiz_currency_q4',
            options: ['quiz_currency_q4_op1', 'quiz_currency_q4_op2', 'quiz_currency_q4_op3'],
            correctAnswer: 2,
            feedback: { correct: 'feedback_correct_generic', incorrect: 'feedback_currency_q4_incorrect' },
        },
        {
            question: 'quiz_currency_q5',
            options: ['quiz_currency_q5_op1', 'quiz_currency_q5_op2', 'quiz_currency_q5_op3'],
            correctAnswer: 0,
            feedback: { correct: 'feedback_correct_generic', incorrect: 'feedback_currency_q5_incorrect' },
        },
        {
            question: 'quiz_currency_q6',
            options: ['quiz_currency_q6_op1', 'quiz_currency_q6_op2', 'quiz_currency_q6_op3'],
            correctAnswer: 1,
            feedback: { correct: 'feedback_correct_generic', incorrect: 'feedback_currency_q6_incorrect' },
        },
        {
            question: 'quiz_currency_q7',
            options: ['quiz_currency_q7_op1', 'quiz_currency_q7_op2', 'quiz_currency_q7_op3'],
            correctAnswer: 2,
            feedback: { correct: 'feedback_correct_generic', incorrect: 'feedback_currency_q7_incorrect' },
        },
        {
            question: 'quiz_currency_q8',
            options: ['quiz_currency_q8_op1', 'quiz_currency_q8_op2', 'quiz_currency_q8_op3'],
            correctAnswer: 1,
            feedback: { correct: 'feedback_correct_generic', incorrect: 'feedback_currency_q8_incorrect' },
        },
        {
            question: 'quiz_currency_q9',
            options: ['quiz_currency_q9_op1', 'quiz_currency_q9_op2', 'quiz_currency_q9_op3'],
            correctAnswer: 0,
            feedback: { correct: 'feedback_correct_generic', incorrect: 'feedback_currency_q9_incorrect' },
        },
        {
            question: 'quiz_currency_q10',
            options: ['quiz_currency_q10_op1', 'quiz_currency_q10_op2', 'quiz_currency_q10_op3'],
            correctAnswer: 2,
            feedback: { correct: 'feedback_correct_generic', incorrect: 'feedback_currency_q10_incorrect' },
        },
        {
            question: 'quiz_currency_q11',
            options: ['quiz_currency_q11_op1', 'quiz_currency_q11_op2', 'quiz_currency_q11_op3'],
            correctAnswer: 0,
            feedback: { correct: 'feedback_correct_generic', incorrect: 'feedback_currency_q11_incorrect' },
        },
        {
            question: 'quiz_currency_q12',
            options: ['quiz_currency_q12_op1', 'quiz_currency_q12_op2', 'quiz_currency_q12_op3'],
            correctAnswer: 1,
            feedback: { correct: 'feedback_correct_generic', incorrect: 'feedback_currency_q12_incorrect' },
        },
        {
            question: 'quiz_currency_q13',
            options: ['quiz_currency_q13_op1', 'quiz_currency_q13_op2', 'quiz_currency_q13_op3'],
            correctAnswer: 2,
            feedback: { correct: 'feedback_correct_generic', incorrect: 'feedback_currency_q13_incorrect' },
        },
        {
            question: 'quiz_currency_q14',
            options: ['quiz_currency_q14_op1', 'quiz_currency_q14_op2', 'quiz_currency_q14_op3'],
            correctAnswer: 0,
            feedback: { correct: 'feedback_correct_generic', incorrect: 'feedback_currency_q14_incorrect' },
        },
        {
            question: 'quiz_currency_q15',
            options: ['quiz_currency_q15_op1', 'quiz_currency_q15_op2', 'quiz_currency_q15_op3'],
            correctAnswer: 1,
            feedback: { correct: 'feedback_correct_generic', incorrect: 'feedback_currency_q15_incorrect' },
        },
      ]
  },
  {
    id: 'investing',
    title: 'module_investing_title',
    description: 'module_investing_desc',
    icon: 'ChartPie',
    content: [
        { type: 'text', content: 'module_investing_content_1' },
        { type: 'text', content: 'module_investing_content_2' },
        { type: 'text', content: 'module_investing_content_3' },
        { type: 'text', content: 'module_investing_content_4' },
        { type: 'text', content: 'module_investing_content_5' },
        { type: 'text', content: 'module_investing_content_6' },
        { type: 'text', content: 'module_investing_content_7' },
        { type: 'text', content: 'module_investing_content_8' },
        { type: 'text', content: 'module_investing_content_9' },
        { type: 'text', content: 'module_investing_content_10' },
    ],
    simulation: {
      title: 'simulation_investing_title',
      steps: [
        { 
            id: 1, 
            title: 'sim_investing_step1_title', 
            content: 'sim_investing_step1_content', 
            options: [
                { text: 'sim_investing_step1_opt1', feedback: 'sim_investing_step1_feedback1', isCorrect: false },
                { text: 'sim_investing_step1_opt2', feedback: 'sim_investing_step1_feedback2', isCorrect: true },
            ]
        },
        { 
            id: 2, 
            title: 'sim_investing_step2_title', 
            content: 'sim_investing_step2_content', 
            options: [
                { text: 'sim_investing_step2_opt1', feedback: 'sim_investing_step2_feedback1', isCorrect: true },
                { text: 'sim_investing_step2_opt2', feedback: 'sim_investing_step2_feedback2', isCorrect: false },
            ]
        },
        { 
            id: 3, 
            title: 'sim_investing_step3_title', 
            content: 'sim_investing_step3_content', 
            options: [
                { text: 'sim_investing_step3_opt1', feedback: 'sim_investing_step3_feedback1', isCorrect: true },
                { text: 'sim_investing_step3_opt2', feedback: 'sim_investing_step3_feedback2', isCorrect: false },
            ]
        },
        { 
            id: 4, 
            title: 'sim_investing_step4_title', 
            content: 'sim_investing_step4_content', 
            options: [
                { text: 'sim_investing_step4_opt1', feedback: 'sim_investing_step4_feedback1', isCorrect: true },
                { text: 'sim_investing_step4_opt2', feedback: 'sim_investing_step4_feedback2', isCorrect: false },
            ]
        },
        { 
            id: 5, 
            title: 'sim_investing_step5_title', 
            content: 'sim_investing_step5_content', 
            options: [
                { text: 'sim_investing_step5_opt1', feedback: 'sim_investing_step5_feedback1', isCorrect: false },
                { text: 'sim_investing_step5_opt2', feedback: 'sim_investing_step5_feedback2', isCorrect: true },
            ]
        },
        { 
            id: 6, 
            title: 'sim_investing_step6_title', 
            content: 'sim_investing_step6_content', 
            options: [
                { text: 'sim_investing_step6_opt1', feedback: 'sim_investing_step6_feedback1', isCorrect: true },
                { text: 'sim_investing_step6_opt2', feedback: 'sim_investing_step6_feedback2', isCorrect: false },
            ]
        },
        { 
            id: 7, 
            title: 'sim_investing_step7_title', 
            content: 'sim_investing_step7_content', 
            options: [
                { text: 'sim_investing_step7_opt1', feedback: 'sim_investing_step7_feedback1', isCorrect: true },
                { text: 'sim_investing_step7_opt2', feedback: 'sim_investing_step7_feedback2', isCorrect: false },
            ]
        },
        { 
            id: 8, 
            title: 'sim_investing_step8_title', 
            content: 'sim_investing_step8_content', 
            options: [
                { text: 'sim_investing_step8_opt1', feedback: 'sim_investing_step8_feedback1', isCorrect: false },
                { text: 'sim_investing_step8_opt2', feedback: 'sim_investing_step8_feedback2', isCorrect: true },
            ]
        },
        { 
            id: 9, 
            title: 'sim_investing_step9_title', 
            content: 'sim_investing_step9_content', 
            options: [
                { text: 'sim_investing_step9_opt1', feedback: 'sim_investing_step9_feedback1', isCorrect: true },
                { text: 'sim_investing_step9_opt2', feedback: 'sim_investing_step9_feedback2', isCorrect: false },
            ]
        },
        { 
            id: 10, 
            title: 'sim_investing_step10_title', 
            content: 'sim_investing_step10_content', 
            options: [
                { text: 'sim_investing_step10_opt1', feedback: 'sim_investing_step10_feedback1', isCorrect: true },
                { text: 'sim_investing_step10_opt2', feedback: 'sim_investing_step10_feedback2', isCorrect: false },
            ]
        },
      ],
    },
    quiz: [
        {
            question: 'quiz_investing_q1',
            options: ['quiz_investing_q1_op1', 'quiz_investing_q1_op2', 'quiz_investing_q1_op3'],
            correctAnswer: 1,
            feedback: { correct: 'feedback_correct_generic', incorrect: 'feedback_investing_q1_incorrect' },
        },
        {
            question: 'quiz_investing_q2',
            options: ['quiz_investing_q2_op1', 'quiz_investing_q2_op2', 'quiz_investing_q2_op3'],
            correctAnswer: 0,
            feedback: { correct: 'feedback_correct_generic', incorrect: 'feedback_investing_q2_incorrect' },
        },
        {
            question: 'quiz_investing_q3',
            options: ['quiz_investing_q3_op1', 'quiz_investing_q3_op2', 'quiz_investing_q3_op3'],
            correctAnswer: 2,
            feedback: { correct: 'feedback_correct_generic', incorrect: 'feedback_investing_q3_incorrect' },
        },
        {
            question: 'quiz_investing_q4',
            options: ['quiz_investing_q4_op1', 'quiz_investing_q4_op2', 'quiz_investing_q4_op3'],
            correctAnswer: 1,
            feedback: { correct: 'feedback_correct_generic', incorrect: 'feedback_investing_q4_incorrect' },
        },
        {
            question: 'quiz_investing_q5',
            options: ['quiz_investing_q5_op1', 'quiz_investing_q5_op2', 'quiz_investing_q5_op3'],
            correctAnswer: 0,
            feedback: { correct: 'feedback_correct_generic', incorrect: 'feedback_investing_q5_incorrect' },
        },
        {
            question: 'quiz_investing_q6',
            options: ['quiz_investing_q6_op1', 'quiz_investing_q6_op2', 'quiz_investing_q6_op3'],
            correctAnswer: 2,
            feedback: { correct: 'feedback_correct_generic', incorrect: 'feedback_investing_q6_incorrect' },
        },
        {
            question: 'quiz_investing_q7',
            options: ['quiz_investing_q7_op1', 'quiz_investing_q7_op2', 'quiz_investing_q7_op3'],
            correctAnswer: 1,
            feedback: { correct: 'feedback_correct_generic', incorrect: 'feedback_investing_q7_incorrect' },
        },
        {
            question: 'quiz_investing_q8',
            options: ['quiz_investing_q8_op1', 'quiz_investing_q8_op2', 'quiz_investing_q8_op3'],
            correctAnswer: 0,
            feedback: { correct: 'feedback_correct_generic', incorrect: 'feedback_investing_q8_incorrect' },
        },
        {
            question: 'quiz_investing_q9',
            options: ['quiz_investing_q9_op1', 'quiz_investing_q9_op2', 'quiz_investing_q9_op3'],
            correctAnswer: 2,
            feedback: { correct: 'feedback_correct_generic', incorrect: 'feedback_investing_q9_incorrect' },
        },
        {
            question: 'quiz_investing_q10',
            options: ['quiz_investing_q10_op1', 'quiz_investing_q10_op2', 'quiz_investing_q10_op3'],
            correctAnswer: 0,
            feedback: { correct: 'feedback_correct_generic', incorrect: 'feedback_investing_q10_incorrect' },
        },
        {
            question: 'quiz_investing_q11',
            options: ['quiz_investing_q11_op1', 'quiz_investing_q11_op2', 'quiz_investing_q11_op3'],
            correctAnswer: 1,
            feedback: { correct: 'feedback_correct_generic', incorrect: 'feedback_investing_q11_incorrect' },
        },
        {
            question: 'quiz_investing_q12',
            options: ['quiz_investing_q12_op1', 'quiz_investing_q12_op2', 'quiz_investing_q12_op3'],
            correctAnswer: 2,
            feedback: { correct: 'feedback_correct_generic', incorrect: 'feedback_investing_q12_incorrect' },
        },
        {
            question: 'quiz_investing_q13',
            options: ['quiz_investing_q13_op1', 'quiz_investing_q13_op2', 'quiz_investing_q13_op3'],
            correctAnswer: 0,
            feedback: { correct: 'feedback_correct_generic', incorrect: 'feedback_investing_q13_incorrect' },
        },
        {
            question: 'quiz_investing_q14',
            options: ['quiz_investing_q14_op1', 'quiz_investing_q14_op2', 'quiz_investing_q14_op3'],
            correctAnswer: 1,
            feedback: { correct: 'feedback_correct_generic', incorrect: 'feedback_investing_q14_incorrect' },
        },
        {
            question: 'quiz_investing_q15',
            options: ['quiz_investing_q15_op1', 'quiz_investing_q15_op2', 'quiz_investing_q15_op3'],
            correctAnswer: 2,
            feedback: { correct: 'feedback_correct_generic', incorrect: 'feedback_investing_q15_incorrect' },
        },
    ]
  },
  {
    id: 'taxes',
    title: 'module_taxes_title',
    description: 'module_taxes_desc',
    icon: 'ReceiptPercent',
    content: [
        { type: 'text', content: 'module_taxes_content_1' },
        { type: 'text', content: 'module_taxes_content_2' },
        { type: 'text', content: 'module_taxes_content_3' },
        { type: 'text', content: 'module_taxes_content_4' },
        { type: 'text', content: 'module_taxes_content_5' },
        { type: 'text', content: 'module_taxes_content_6' },
        { type: 'text', content: 'module_taxes_content_7' },
        { type: 'text', content: 'module_taxes_content_8' },
        { type: 'text', content: 'module_taxes_content_9' },
        { type: 'text', content: 'module_taxes_content_10' },
    ],
    simulation: {
      title: 'simulation_taxes_title',
      steps: [
        { 
            id: 1, 
            title: 'sim_taxes_step1_title', 
            content: 'sim_taxes_step1_content', 
            options: [
                { text: 'sim_taxes_step1_opt1', feedback: 'sim_taxes_step1_feedback1', isCorrect: false },
                { text: 'sim_taxes_step1_opt2', feedback: 'sim_taxes_step1_feedback2', isCorrect: true },
            ]
        },
        { 
            id: 2, 
            title: 'sim_taxes_step2_title', 
            content: 'sim_taxes_step2_content', 
            options: [
                { text: 'sim_taxes_step2_opt1', feedback: 'sim_taxes_step2_feedback1', isCorrect: true },
                { text: 'sim_taxes_step2_opt2', feedback: 'sim_taxes_step2_feedback2', isCorrect: false },
            ]
        },
        { 
            id: 3, 
            title: 'sim_taxes_step3_title', 
            content: 'sim_taxes_step3_content', 
            options: [
                { text: 'sim_taxes_step3_opt1', feedback: 'sim_taxes_step3_feedback1', isCorrect: true },
                { text: 'sim_taxes_step3_opt2', feedback: 'sim_taxes_step3_feedback2', isCorrect: false },
            ]
        },
        { 
            id: 4, 
            title: 'sim_taxes_step4_title', 
            content: 'sim_taxes_step4_content', 
            options: [
                { text: 'sim_taxes_step4_opt1', feedback: 'sim_taxes_step4_feedback1', isCorrect: false },
                { text: 'sim_taxes_step4_opt2', feedback: 'sim_taxes_step4_feedback2', isCorrect: true },
            ]
        },
        { 
            id: 5, 
            title: 'sim_taxes_step5_title', 
            content: 'sim_taxes_step5_content', 
            options: [
                { text: 'sim_taxes_step5_opt1', feedback: 'sim_taxes_step5_feedback1', isCorrect: false },
                { text: 'sim_taxes_step5_opt2', feedback: 'sim_taxes_step5_feedback2', isCorrect: true },
            ]
        },
        { 
            id: 6, 
            title: 'sim_taxes_step6_title', 
            content: 'sim_taxes_step6_content', 
            options: [
                { text: 'sim_taxes_step6_opt1', feedback: 'sim_taxes_step6_feedback1', isCorrect: true },
                { text: 'sim_taxes_step6_opt2', feedback: 'sim_taxes_step6_feedback2', isCorrect: false },
            ]
        },
        { 
            id: 7, 
            title: 'sim_taxes_step7_title', 
            content: 'sim_taxes_step7_content', 
            options: [
                { text: 'sim_taxes_step7_opt1', feedback: 'sim_taxes_step7_feedback1', isCorrect: true },
                { text: 'sim_taxes_step7_opt2', feedback: 'sim_taxes_step7_feedback2', isCorrect: false },
            ]
        },
        { 
            id: 8, 
            title: 'sim_taxes_step8_title', 
            content: 'sim_taxes_step8_content', 
            options: [
                { text: 'sim_taxes_step8_opt1', feedback: 'sim_taxes_step8_feedback1', isCorrect: true },
                { text: 'sim_taxes_step8_opt2', feedback: 'sim_taxes_step8_feedback2', isCorrect: false },
            ]
        },
        { 
            id: 9, 
            title: 'sim_taxes_step9_title', 
            content: 'sim_taxes_step9_content', 
            options: [
                { text: 'sim_taxes_step9_opt1', feedback: 'sim_taxes_step9_feedback1', isCorrect: false },
                { text: 'sim_taxes_step9_opt2', feedback: 'sim_taxes_step9_feedback2', isCorrect: true },
            ]
        },
        { 
            id: 10, 
            title: 'sim_taxes_step10_title', 
            content: 'sim_taxes_step10_content', 
            options: [
                { text: 'sim_taxes_step10_opt1', feedback: 'sim_taxes_step10_feedback1', isCorrect: true },
                { text: 'sim_taxes_step10_opt2', feedback: 'sim_taxes_step10_feedback2', isCorrect: false },
            ]
        },
      ],
    },
    quiz: [
        {
            question: 'quiz_taxes_q1',
            options: ['quiz_taxes_q1_op1', 'quiz_taxes_q1_op2', 'quiz_taxes_q1_op3'],
            correctAnswer: 2,
            feedback: { correct: 'feedback_correct_generic', incorrect: 'feedback_taxes_q1_incorrect' },
        },
        {
            question: 'quiz_taxes_q2',
            options: ['quiz_taxes_q2_op1', 'quiz_taxes_q2_op2', 'quiz_taxes_q2_op3'],
            correctAnswer: 0,
            feedback: { correct: 'feedback_correct_generic', incorrect: 'feedback_taxes_q2_incorrect' },
        },
        {
            question: 'quiz_taxes_q3',
            options: ['quiz_taxes_q3_op1', 'quiz_taxes_q3_op2', 'quiz_taxes_q3_op3'],
            correctAnswer: 1,
            feedback: { correct: 'feedback_correct_generic', incorrect: 'feedback_taxes_q3_incorrect' },
        },
        {
            question: 'quiz_taxes_q4',
            options: ['quiz_taxes_q4_op1', 'quiz_taxes_q4_op2', 'quiz_taxes_q4_op3'],
            correctAnswer: 0,
            feedback: { correct: 'feedback_correct_generic', incorrect: 'feedback_taxes_q4_incorrect' },
        },
        {
            question: 'quiz_taxes_q5',
            options: ['quiz_taxes_q5_op1', 'quiz_taxes_q5_op2', 'quiz_taxes_q5_op3'],
            correctAnswer: 2,
            feedback: { correct: 'feedback_correct_generic', incorrect: 'feedback_taxes_q5_incorrect' },
        },
        {
            question: 'quiz_taxes_q6',
            options: ['quiz_taxes_q6_op1', 'quiz_taxes_q6_op2', 'quiz_taxes_q6_op3'],
            correctAnswer: 1,
            feedback: { correct: 'feedback_correct_generic', incorrect: 'feedback_taxes_q6_incorrect' },
        },
        {
            question: 'quiz_taxes_q7',
            options: ['quiz_taxes_q7_op1', 'quiz_taxes_q7_op2', 'quiz_taxes_q7_op3'],
            correctAnswer: 0,
            feedback: { correct: 'feedback_correct_generic', incorrect: 'feedback_taxes_q7_incorrect' },
        },
        {
            question: 'quiz_taxes_q8',
            options: ['quiz_taxes_q8_op1', 'quiz_taxes_q8_op2', 'quiz_taxes_q8_op3'],
            correctAnswer: 2,
            feedback: { correct: 'feedback_correct_generic', incorrect: 'feedback_taxes_q8_incorrect' },
        },
        {
            question: 'quiz_taxes_q9',
            options: ['quiz_taxes_q9_op1', 'quiz_taxes_q9_op2', 'quiz_taxes_q9_op3'],
            correctAnswer: 1,
            feedback: { correct: 'feedback_correct_generic', incorrect: 'feedback_taxes_q9_incorrect' },
        },
        {
            question: 'quiz_taxes_q10',
            options: ['quiz_taxes_q10_op1', 'quiz_taxes_q10_op2', 'quiz_taxes_q10_op3'],
            correctAnswer: 0,
            feedback: { correct: 'feedback_correct_generic', incorrect: 'feedback_taxes_q10_incorrect' },
        },
        {
            question: 'quiz_taxes_q11',
            options: ['quiz_taxes_q11_op1', 'quiz_taxes_q11_op2', 'quiz_taxes_q11_op3'],
            correctAnswer: 2,
            feedback: { correct: 'feedback_correct_generic', incorrect: 'feedback_taxes_q11_incorrect' },
        },
        {
            question: 'quiz_taxes_q12',
            options: ['quiz_taxes_q12_op1', 'quiz_taxes_q12_op2', 'quiz_taxes_q12_op3'],
            correctAnswer: 1,
            feedback: { correct: 'feedback_correct_generic', incorrect: 'feedback_taxes_q12_incorrect' },
        },
        {
            question: 'quiz_taxes_q13',
            options: ['quiz_taxes_q13_op1', 'quiz_taxes_q13_op2', 'quiz_taxes_q13_op3'],
            correctAnswer: 0,
            feedback: { correct: 'feedback_correct_generic', incorrect: 'feedback_taxes_q13_incorrect' },
        },
        {
            question: 'quiz_taxes_q14',
            options: ['quiz_taxes_q14_op1', 'quiz_taxes_q14_op2', 'quiz_taxes_q14_op3'],
            correctAnswer: 2,
            feedback: { correct: 'feedback_correct_generic', incorrect: 'feedback_taxes_q14_incorrect' },
        },
        {
            question: 'quiz_taxes_q15',
            options: ['quiz_taxes_q15_op1', 'quiz_taxes_q15_op2', 'quiz_taxes_q15_op3'],
            correctAnswer: 1,
            feedback: { correct: 'feedback_correct_generic', incorrect: 'feedback_taxes_q15_incorrect' },
        },
    ]
  },
  {
    id: 'protection',
    title: 'module_protection_title',
    description: 'module_protection_desc',
    icon: 'ShieldCheck',
    content: [
        { type: 'text', content: 'module_protection_content_1' },
        { type: 'text', content: 'module_protection_content_2' },
        { type: 'text', content: 'module_protection_content_3' },
        { type: 'text', content: 'module_protection_content_4' },
        { type: 'text', content: 'module_protection_content_5' },
        { type: 'text', content: 'module_protection_content_6' },
        { type: 'text', content: 'module_protection_content_7' },
        { type: 'text', content: 'module_protection_content_8' },
        { type: 'text', content: 'module_protection_content_9' },
        { type: 'text', content: 'module_protection_content_10' },
    ],
    simulation: {
      title: 'simulation_protection_title',
      steps: [
        { 
            id: 1, 
            title: 'sim_protection_step1_title', 
            content: 'sim_protection_step1_content', 
            options: [
                { text: 'sim_protection_step1_opt1', feedback: 'sim_protection_step1_feedback1', isCorrect: false },
                { text: 'sim_protection_step1_opt2', feedback: 'sim_protection_step1_feedback2', isCorrect: true },
            ]
        },
        { 
            id: 2, 
            title: 'sim_protection_step2_title', 
            content: 'sim_protection_step2_content', 
            options: [
                { text: 'sim_protection_step2_opt1', feedback: 'sim_protection_step2_feedback1', isCorrect: false },
                { text: 'sim_protection_step2_opt2', feedback: 'sim_protection_step2_feedback2', isCorrect: true },
            ]
        },
        { 
            id: 3, 
            title: 'sim_protection_step3_title', 
            content: 'sim_protection_step3_content', 
            options: [
                { text: 'sim_protection_step3_opt1', feedback: 'sim_protection_step3_feedback1', isCorrect: true },
                { text: 'sim_protection_step3_opt2', feedback: 'sim_protection_step3_feedback2', isCorrect: false },
            ]
        },
        { 
            id: 4, 
            title: 'sim_protection_step4_title', 
            content: 'sim_protection_step4_content', 
            options: [
                { text: 'sim_protection_step4_opt1', feedback: 'sim_protection_step4_feedback1', isCorrect: true },
                { text: 'sim_protection_step4_opt2', feedback: 'sim_protection_step4_feedback2', isCorrect: false },
            ]
        },
        { 
            id: 5, 
            title: 'sim_protection_step5_title', 
            content: 'sim_protection_step5_content', 
            options: [
                { text: 'sim_protection_step5_opt1', feedback: 'sim_protection_step5_feedback1', isCorrect: false },
                { text: 'sim_protection_step5_opt2', feedback: 'sim_protection_step5_feedback2', isCorrect: true },
            ]
        },
        { 
            id: 6, 
            title: 'sim_protection_step6_title', 
            content: 'sim_protection_step6_content', 
            options: [
                { text: 'sim_protection_step6_opt1', feedback: 'sim_protection_step6_feedback1', isCorrect: true },
                { text: 'sim_protection_step6_opt2', feedback: 'sim_protection_step6_feedback2', isCorrect: false },
            ]
        },
        { 
            id: 7, 
            title: 'sim_protection_step7_title', 
            content: 'sim_protection_step7_content', 
            options: [
                { text: 'sim_protection_step7_opt1', feedback: 'sim_protection_step7_feedback1', isCorrect: true },
                { text: 'sim_protection_step7_opt2', feedback: 'sim_protection_step7_feedback2', isCorrect: false },
            ]
        },
        { 
            id: 8, 
            title: 'sim_protection_step8_title', 
            content: 'sim_protection_step8_content', 
            options: [
                { text: 'sim_protection_step8_opt1', feedback: 'sim_protection_step8_feedback1', isCorrect: true },
                { text: 'sim_protection_step8_opt2', feedback: 'sim_protection_step8_feedback2', isCorrect: false },
            ]
        },
        { 
            id: 9, 
            title: 'sim_protection_step9_title', 
            content: 'sim_protection_step9_content', 
            options: [
                { text: 'sim_protection_step9_opt1', feedback: 'sim_protection_step9_feedback1', isCorrect: true },
                { text: 'sim_protection_step9_opt2', feedback: 'sim_protection_step9_feedback2', isCorrect: false },
            ]
        },
        { 
            id: 10, 
            title: 'sim_protection_step10_title', 
            content: 'sim_protection_step10_content', 
            options: [
                { text: 'sim_protection_step10_opt1', feedback: 'sim_protection_step10_feedback1', isCorrect: true },
                { text: 'sim_protection_step10_opt2', feedback: 'sim_protection_step10_feedback2', isCorrect: false },
            ]
        },
      ],
    },
    quiz: [
        {
            question: 'quiz_protection_q1',
            options: ['quiz_protection_q1_op1', 'quiz_protection_q1_op2', 'quiz_protection_q1_op3'],
            correctAnswer: 2,
            feedback: { correct: 'feedback_correct_generic', incorrect: 'feedback_protection_q1_incorrect' },
        },
        {
            question: 'quiz_protection_q2',
            options: ['quiz_protection_q2_op1', 'quiz_protection_q2_op2', 'quiz_protection_q2_op3'],
            correctAnswer: 1,
            feedback: { correct: 'feedback_correct_generic', incorrect: 'feedback_protection_q2_incorrect' },
        },
        {
            question: 'quiz_protection_q3',
            options: ['quiz_protection_q3_op1', 'quiz_protection_q3_op2', 'quiz_protection_q3_op3'],
            correctAnswer: 0,
            feedback: { correct: 'feedback_correct_generic', incorrect: 'feedback_protection_q3_incorrect' },
        },
        {
            question: 'quiz_protection_q4',
            options: ['quiz_protection_q4_op1', 'quiz_protection_q4_op2', 'quiz_protection_q4_op3'],
            correctAnswer: 2,
            feedback: { correct: 'feedback_correct_generic', incorrect: 'feedback_protection_q4_incorrect' },
        },
        {
            question: 'quiz_protection_q5',
            options: ['quiz_protection_q5_op1', 'quiz_protection_q5_op2', 'quiz_protection_q5_op3'],
            correctAnswer: 1,
            feedback: { correct: 'feedback_correct_generic', incorrect: 'feedback_protection_q5_incorrect' },
        },
        {
            question: 'quiz_protection_q6',
            options: ['quiz_protection_q6_op1', 'quiz_protection_q6_op2', 'quiz_protection_q6_op3'],
            correctAnswer: 0,
            feedback: { correct: 'feedback_correct_generic', incorrect: 'feedback_protection_q6_incorrect' },
        },
        {
            question: 'quiz_protection_q7',
            options: ['quiz_protection_q7_op1', 'quiz_protection_q7_op2', 'quiz_protection_q7_op3'],
            correctAnswer: 2,
            feedback: { correct: 'feedback_correct_generic', incorrect: 'feedback_protection_q7_incorrect' },
        },
        {
            question: 'quiz_protection_q8',
            options: ['quiz_protection_q8_op1', 'quiz_protection_q8_op2', 'quiz_protection_q8_op3'],
            correctAnswer: 1,
            feedback: { correct: 'feedback_correct_generic', incorrect: 'feedback_protection_q8_incorrect' },
        },
        {
            question: 'quiz_protection_q9',
            options: ['quiz_protection_q9_op1', 'quiz_protection_q9_op2', 'quiz_protection_q9_op3'],
            correctAnswer: 0,
            feedback: { correct: 'feedback_correct_generic', incorrect: 'feedback_protection_q9_incorrect' },
        },
        {
            question: 'quiz_protection_q10',
            options: ['quiz_protection_q10_op1', 'quiz_protection_q10_op2', 'quiz_protection_q10_op3'],
            correctAnswer: 2,
            feedback: { correct: 'feedback_correct_generic', incorrect: 'feedback_protection_q10_incorrect' },
        },
        {
            question: 'quiz_protection_q11',
            options: ['quiz_protection_q11_op1', 'quiz_protection_q11_op2', 'quiz_protection_q11_op3'],
            correctAnswer: 1,
            feedback: { correct: 'feedback_correct_generic', incorrect: 'feedback_protection_q11_incorrect' },
        },
        {
            question: 'quiz_protection_q12',
            options: ['quiz_protection_q12_op1', 'quiz_protection_q12_op2', 'quiz_protection_q12_op3'],
            correctAnswer: 0,
            feedback: { correct: 'feedback_correct_generic', incorrect: 'feedback_protection_q12_incorrect' },
        },
        {
            question: 'quiz_protection_q13',
            options: ['quiz_protection_q13_op1', 'quiz_protection_q13_op2', 'quiz_protection_q13_op3'],
            correctAnswer: 2,
            feedback: { correct: 'feedback_correct_generic', incorrect: 'feedback_protection_q13_incorrect' },
        },
        {
            question: 'quiz_protection_q14',
            options: ['quiz_protection_q14_op1', 'quiz_protection_q14_op2', 'quiz_protection_q14_op3'],
            correctAnswer: 1,
            feedback: { correct: 'feedback_correct_generic', incorrect: 'feedback_protection_q14_incorrect' },
        },
        {
            question: 'quiz_protection_q15',
            options: ['quiz_protection_q15_op1', 'quiz_protection_q15_op2', 'quiz_protection_q15_op3'],
            correctAnswer: 0,
            feedback: { correct: 'feedback_correct_generic', incorrect: 'feedback_protection_q15_incorrect' },
        },
    ]
  }
];

export const GLOSSARY_TERMS = [
    { termKey: 'glossary_apr_term', definitionKey: 'glossary_apr_def' },
    { termKey: 'glossary_asset_term', definitionKey: 'glossary_asset_def' },
    { termKey: 'glossary_budget_term', definitionKey: 'glossary_budget_def' },
    { termKey: 'glossary_compound_interest_term', definitionKey: 'glossary_compound_interest_def' },
    { termKey: 'glossary_credit_score_term', definitionKey: 'glossary_credit_score_def' },
    { termKey: 'glossary_debt_term', definitionKey: 'glossary_debt_def' },
    { termKey: 'glossary_deductible_term', definitionKey: 'glossary_deductible_def'},
    { termKey: 'glossary_direct_deposit_term', definitionKey: 'glossary_direct_deposit_def' },
    { termKey: 'glossary_diversification_term', definitionKey: 'glossary_diversification_def' },
    { termKey: 'glossary_emergency_fund_term', definitionKey: 'glossary_emergency_fund_def' },
    { termKey: 'glossary_exchange_rate_term', definitionKey: 'glossary_exchange_rate_def' },
    { termKey: 'glossary_fixed_expense_term', definitionKey: 'glossary_fixed_expense_def' },
    { termKey: 'glossary_inflation_term', definitionKey: 'glossary_inflation_def' },
    { termKey: 'glossary_interest_term', definitionKey: 'glossary_interest_def' },
    { termKey: 'glossary_liability_term', definitionKey: 'glossary_liability_def' },
    { termKey: 'glossary_net_worth_term', definitionKey: 'glossary_net_worth_def' },
    { termKey: 'glossary_overdraft_fee_term', definitionKey: 'glossary_overdraft_fee_def' },
    { termKey: 'glossary_phishing_term', definitionKey: 'glossary_phishing_def' },
    { termKey: 'glossary_premium_term', definitionKey: 'glossary_premium_def' },
    { termKey: 'glossary_remittance_term', definitionKey: 'glossary_remittance_def' },
    { termKey: 'glossary_stock_term', definitionKey: 'glossary_stock_def'},
    { termKey: 'glossary_tax_credit_term', definitionKey: 'glossary_tax_credit_def'},
    { termKey: 'glossary_variable_expense_term', definitionKey: 'glossary_variable_expense_def' },
    { termKey: 'glossary_wire_transfer_term', definitionKey: 'glossary_wire_transfer_def' },
    // New terms
    { termKey: 'glossary_mortgage_term', definitionKey: 'glossary_mortgage_def' },
    { termKey: 'glossary_down_payment_term', definitionKey: 'glossary_down_payment_def' },
    { termKey: 'glossary_principal_term', definitionKey: 'glossary_principal_def' },
    { termKey: 'glossary_foreclosure_term', definitionKey: 'glossary_foreclosure_def' },
    { termKey: 'glossary_health_insurance_term', definitionKey: 'glossary_health_insurance_def' },
    { termKey: 'glossary_auto_insurance_term', definitionKey: 'glossary_auto_insurance_def' },
    { termKey: 'glossary_renters_insurance_term', definitionKey: 'glossary_renters_insurance_def' },
    { termKey: 'glossary_life_insurance_term', definitionKey: 'glossary_life_insurance_def' },
    { termKey: 'glossary_401k_term', definitionKey: 'glossary_401k_def' },
    { termKey: 'glossary_ira_term', definitionKey: 'glossary_ira_def' },
    { termKey: 'glossary_etf_term', definitionKey: 'glossary_etf_def' },
    { termKey: 'glossary_mutual_fund_term', definitionKey: 'glossary_mutual_fund_def' },
    { termKey: 'glossary_dividend_term', definitionKey: 'glossary_dividend_def' },
    { termKey: 'glossary_capital_gain_term', definitionKey: 'glossary_capital_gain_def' },
    { termKey: 'glossary_credit_limit_term', definitionKey: 'glossary_credit_limit_def' },
    { termKey: 'glossary_minimum_payment_term', definitionKey: 'glossary_minimum_payment_def' },
    { termKey: 'glossary_checking_account_term', definitionKey: 'glossary_checking_account_def' },
    { termKey: 'glossary_savings_account_term', definitionKey: 'glossary_savings_account_def' },
    { termKey: 'glossary_beneficiary_term', definitionKey: 'glossary_beneficiary_def' },
    { termKey: 'glossary_cosigner_term', definitionKey: 'glossary_cosigner_def' },
];
