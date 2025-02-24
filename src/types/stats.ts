// Core Stats
export interface FounderStats {
  // Personal wellbeing (0-100)
  health: number;
  energy: number;
  
  // Core skills (0-100)
  technical: number;
  business: number;
  leadership: number;
  
  // Resources
  cash: number;
  reputation: number;
}

// Company Stats
export interface CompanyStats {
  // Product (0-100)
  productQuality: number;
  marketFit: number;
  userGrowth: number;
  
  // Business
  revenue: number;
  runway: number;
  valuation: number;
  
  // Team
  teamSize: number;
  teamMorale: number; // 0-100
  talent: number; // 0-100
}

// Location
export enum District {
  SOMA = 'SOMA',
  MISSION = 'Mission District',
  HAYES_VALLEY = 'Hayes Valley',
  RICHMOND = 'Richmond District'
}

export interface LocationStats {
  district: District;
  type: 'coworking' | 'office' | 'home';
  networkingScore: number; // 0-100
}

// Game Progress
export interface GameProgress {
  phase: GamePhase;
  day: number;
  month: number;
  year: number;
  completedEvents: string[];
  achievements: Achievement[];
}

// Game Phase
export enum GamePhase {
  SETTLING_IN = 'SETTLING_IN',
  IDEATION = 'IDEATION',
  BOOTSTRAPPING = 'BOOTSTRAPPING',
  FUNDRAISING = 'FUNDRAISING',
  SCALING = 'SCALING'
}

// Event System
export type EventCategory = 
  | 'networking'
  | 'product'
  | 'team'
  | 'funding'
  | 'personal'
  | 'market'
  | 'random'
  | 'sanfran';

export interface Achievement {
  id: string;
  title: string;
  description: string;
  unlockedAt: { day: number; month: number; year: number };
  type: 'business' | 'technical' | 'personal' | 'community';
}

export interface EventConditions {
  requiredPhase?: GamePhase;
  requiredDistrict?: string;
  activeMilestone?: string;
  minimumStats?: {
    founder?: Partial<FounderStats>;
    company?: Partial<CompanyStats>;
  };
}

export interface EventImpact {
  founder?: Partial<FounderStats>;
  company?: Partial<CompanyStats>;
  location?: Partial<LocationStats>;
}

export interface GameEvent {
  id: string;
  category: EventCategory;
  title: string;
  description: string;
  conditions: EventConditions;
  impact: EventImpact;
  choices: GameEventChoice[];
}

export interface GameEventChoice {
  id: string;
  text: string;
  impact: EventImpact;
  successChance?: number; // 0-100, if not provided assumes 100
  requiredStats?: {
    founder?: Partial<FounderStats>;
    company?: Partial<CompanyStats>;
  };
}

// Combined Game State
export interface GameState {
  founder: FounderStats;
  company: CompanyStats;
  location: LocationStats;
  progress: GameProgress;
}