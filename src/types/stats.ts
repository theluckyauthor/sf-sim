// Core Stats
export interface WellBeingStats {
  health: number; // 0-100
  energy: number; // 0-100
  stress: number; // 0-100
}

export interface SkillStats {
  technical: number; // 0-100
  leadership: number; // 0-100
  networking: number; // 0-100
  fundraising: number; // 0-100
  marketing: number; // 0-100
  execution: number; // 0-100
  growth: number; // 0-100
  sustainability: number; // 0-100
}

export interface ReputationStats {
  personal: number; // 0-100
  network: number; // 0-100
}

export interface FinancialStats {
  personalFunds: number;
  salary: number;
  investments: number;
}

// Founder State
export interface FounderState {
  name: string;
  background: string;
  role: string;
  catchphrase: string;
  wellBeing: WellBeingStats;
  skills: SkillStats;
  reputation: ReputationStats;
  finances: FinancialStats;
}

// Startup State
export interface ProductStats {
  mvpProgress: number; // 0-100
  quality: number; // 0-100
  innovation: number; // 0-100
  development: number; // 0-100
  marketFit: number; // 0-100
}

export interface TeamStats {
  size: number;
  morale: number; // 0-100
  productivity: number; // 0-100
  culture: number; // 0-100
}

export interface StartupFinancials {
  cash: number;
  revenue: number;
  burnRate: number;
  valuation: number;
}

export interface MarketStats {
  userTraction: number; // 0-100
  brandReputation: number; // 0-100
  socialPresence: number; // 0-100
  marketFit: number; // 0-100
  userGrowth: number; // 0-100
}

// Co-Founder State
export interface CoFounderStats {
  technical: number; // 0-100
  leadership: number; // 0-100
  compatibility: number; // 0-100
  commitment: number; // 0-100
}

export interface CoFounderState {
  name: string;
  background: string;
  role: string;
  equity: number; // Percentage of equity owned
  joinedDate: TimeState;
  stats: CoFounderStats;
  relationship: number; // 0-100, represents working relationship quality
}

// Milestone & Achievement System
export interface Milestone {
  id: string;
  title: string;
  description: string;
  completed: boolean;
  dateCompleted?: TimeState;
  type: 'product' | 'team' | 'funding' | 'market' | 'personal';
  reward?: {
    founder?: Partial<FounderState>;
    startup?: Partial<StartupState>;
  };
}

export interface Achievement {
  id: string;
  title: string;
  description: string;
  unlockedAt: TimeState;
  type: 'business' | 'technical' | 'personal' | 'community' | 'random';
  rarity: 'common' | 'uncommon' | 'rare' | 'legendary';
}

export interface MilestoneSystem {
  activeMilestones: Milestone[];
  completedMilestones: Milestone[];
  achievements: Achievement[];
}

export interface StartupState {
  name: string;
  type: string;
  stage: 'ideation' | 'mvp' | 'growth' | 'scale';
  product: ProductStats;
  team: TeamStats;
  finances: StartupFinancials;
  market: MarketStats;
  coFounder?: CoFounderState;
  milestones: MilestoneSystem;
}

// Location State
export interface LocationState {
  district: string;
  type: 'coworking' | 'office' | 'home';
  rent: string;
  networkingPotential: string;
}

// Relationships State
export interface RelationshipStats {
  investors: number; // 0-100
  employees: number; // 0-100
  customers: number; // 0-100
  community: number; // 0-100
}

// Game Phase
export enum GamePhase {
  SETTLING_IN = 'SETTLING_IN',
  IDEATION = 'IDEATION',
  BOOTSTRAPPING = 'BOOTSTRAPPING',
  FUNDRAISING = 'FUNDRAISING',
  SCALING = 'SCALING'
}

// Time State
export interface TimeState {
  day: number;
  month: number;
  year: number;
}

// Combined Game State
export interface GameState {
  founder: FounderState;
  startup: StartupState;
  location: LocationState;
  relationships: RelationshipStats;
  currentPhase: GamePhase;
  time: TimeState;
}

// Event System
export type EventCategory = 
  | 'networking'
  | 'product'
  | 'team'
  | 'funding'
  | 'personal'
  | 'market'
  | 'random';

export interface EventConditions {
  requiredPhase?: GamePhase;
  requiredDistrict?: string;
  minimumStats?: Partial<{
    'founder.skills': Partial<SkillStats>;
    'founder.wellBeing': Partial<WellBeingStats>;
    'startup.team': Partial<TeamStats>;
    'startup.product': Partial<ProductStats>;
    'startup.market': Partial<MarketStats>;
    'startup.finances': Partial<StartupFinancials>;
  }>;
  activeMilestone?: string | string[]; // ID of milestone(s) that triggers this event
}

export interface EventImpact {
  founder?: Partial<FounderState>;
  startup?: Partial<StartupState>;
  relationships?: Partial<RelationshipStats>;
  triggerMilestone?: string; // ID of milestone to trigger
  completeMilestone?: string; // ID of milestone to complete
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
  requiredStats?: Partial<{
    'founder.skills': Partial<SkillStats>;
    'founder.wellBeing': Partial<WellBeingStats>;
  }>;
}

// Example Tech Meetup Event Type (as a reference)
export interface NetworkingEvent extends GameEvent {
  venue?: string;
  attendees?: number;
  potentialContacts?: number;
}

export interface RandomEvent extends GameEvent {
  probability: number; // Probability of this event occurring (0-1)
  gameOver?: GameOverCondition;
}

export interface GameOverCondition {
  type: string;
  message: string;
}

export interface EventChoice {
  id: string;
  text: string;
  successChance?: number;
  requiredStats?: Partial<{
    'founder.skills': Partial<SkillStats>;
    'founder.wellBeing': Partial<WellBeingStats>;
  }>;
  impact: EventImpact;
} 