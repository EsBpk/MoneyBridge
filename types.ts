
// Basic types
export type Language = 'en' | 'es' | 'fr' | 'pt';
export type ThemeName = 'default' | 'oceanic' | 'sunset' | 'forest';
export type BadgeIconType = 'Bank' | 'Budget' | 'Credit' | 'Currency' | 'Star' | 'Trophy' | 'Flame';
export type ModuleIconType = 'Bank' | 'Budget' | 'Credit' | 'Currency' | 'ChartPie' | 'ReceiptPercent' | 'ShieldCheck';

// Data structures
export interface Country {
  code: string;
  name: string;
}

export interface User {
  name: string;
  email: string;
}

export interface ModuleProgress {
  viewedContent?: boolean;
  completedSimulation?: boolean;
  completedQuiz?: boolean;
}

export interface UserProgress {
  moduleProgress: { [moduleId: string]: ModuleProgress };
}

export interface Notification {
  id: number;
  title: string;
  message: string;
  read: boolean;
}

export type GoalIconType = 'PiggyBank' | 'House' | 'Car' | 'Education';

export interface Goal {
  id: string;
  name: string;
  targetAmount: number;
  currentAmount: number;
  icon: GoalIconType;
}

export type BadgeId = 'first_steps' | 'budget_builder' | 'credit_climber' | 'consistent_learner' | 'money_master';

export interface EarnedBadge {
    id: BadgeId;
    earnedAt: number;
}

export interface UserGamificationState {
  xp: number;
  level: number;
  streak: number;
  lastCheckIn: number;
  badges: EarnedBadge[];
}

export interface Toast {
  id: number;
  message: string;
  type: 'success' | 'error';
}

export interface ModuleContentItem {
    type: 'text' | 'component';
    content: string;
}

export interface SimulationOption {
    text: string;
    feedback: string;
    isCorrect: boolean;
}

export interface SimulationStep {
    id: number;
    title: string;
    content: string;
    actionText?: string;
    options?: SimulationOption[];
}

export interface Simulation {
    title: string;
    steps: SimulationStep[];
}

export interface QuizQuestion {
    question: string;
    options: string[];
    correctAnswer: number;
    feedback: {
        correct: string;
        incorrect: string;
    };
}

export interface Module {
    id: string;
    title: string;
    description: string;
    icon: ModuleIconType;
    content: ModuleContentItem[];
    simulation?: Simulation;
    quiz: QuizQuestion[];
}

export interface BadgeInfo {
    id: BadgeId;
    nameKey: string;
    descKey: string;
    icon: BadgeIconType;
}

export interface Resource {
    name: string;
    description: string;
    url: string;
}

export interface ResourceCategory {
    title: string;
    icon: 'Government' | 'Bank' | 'NonProfit';
    resources: Resource[];
}

export interface ExchangeRateData {
    base: string;
    rates: { [key: string]: number };
}

export interface AppTheme {
    name: ThemeName;
    unlockLevel: number;
    colors: { [key: string]: string };
}
