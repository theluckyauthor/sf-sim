export interface GameState {
  founder: {
    name: string;
    background: string;
    catchphrase: string;
    role: string;
    skills: {
      product: number;
      fundraising: number;
      marketing: number;
      execution: number;
      growth: number;
      sustainability: number;
    };
    network: number;
  };
  cash: number;
  reputation: number;
  stress: number;
  time: {
    day: number;
    month: number;
    year: number;
  };
  company: {
    name: string;
    type: string;
    stage: 'ideation' | 'mvp' | 'growth' | 'scale';
    employees: number;
    fundingPotential: string;
    marketHype: string;
    difficulty: string;
    product: {
      development: number;
      marketFit: number;
    };
    metrics: {
      userGrowth: number;
      revenue: number;
      burnRate: number;
    };
  };
  relationships: {
    investors: number;
    employees: number;
    customers: number;
    community: number;
  };
  location: {
    district: string;
    type: 'coworking' | 'office' | 'home';
    rent: string;
    networkingPotential: string;
  };
}

export interface GameEvent {
  id: string;
  title: string;
  description: string;
  choices: Choice[];
  conditions?: EventCondition;
}

export interface Choice {
  id: string;
  text: string;
  outcomes: Outcome[];
}

export interface Outcome {
  type: 'cash' | 'reputation' | 'stress' | 'company' | 'relationships';
  value: number;
  message: string;
}

export interface EventCondition {
  cash?: { min?: number; max?: number };
  reputation?: { min?: number; max?: number };
  stress?: { min?: number; max?: number };
  stage?: string[];
  district?: string[];
} 