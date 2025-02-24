import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { 
  GameState,
  GamePhase,
  FounderState,
  StartupState,
  LocationState,
  RelationshipStats
} from '../types/stats';

const initialState: GameState = {
  founder: {
    name: '',
    background: '',
    role: '',
    catchphrase: '',
    wellBeing: {
      health: 100,
      energy: 100,
      stress: 0
    },
    skills: {
      technical: 0,
      leadership: 0,
      networking: 0,
      fundraising: 0,
      marketing: 0,
      execution: 0,
      growth: 0,
      sustainability: 0
    },
    reputation: {
      personal: 0,
      network: 0
    },
    finances: {
      personalFunds: 0,
      salary: 0,
      investments: 0
    }
  },
  startup: {
    name: '',
    type: '',
    stage: 'ideation',
    product: {
      mvpProgress: 0,
      quality: 0,
      innovation: 0,
      development: 0,
      marketFit: 0
    },
    team: {
      size: 1,
      morale: 100,
      productivity: 0,
      culture: 0
    },
    finances: {
      cash: 0,
      revenue: 0,
      burnRate: 0,
      valuation: 0
    },
    market: {
      userTraction: 0,
      brandReputation: 0,
      socialPresence: 0,
      marketFit: 0,
      userGrowth: 0
    },
    milestones: {
      activeMilestones: [],
      completedMilestones: [],
      achievements: []
    }
  },
  location: {
    district: '',
    type: 'home',
    rent: '',
    networkingPotential: ''
  },
  relationships: {
    investors: 0,
    employees: 0,
    customers: 0,
    community: 0
  },
  currentPhase: GamePhase.SETTLING_IN,
  time: {
    day: 1,
    month: 1,
    year: 2024
  }
};

const gameSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {
    updateFounder(state, action: PayloadAction<Partial<FounderState>>) {
      state.founder = { ...state.founder, ...action.payload };
    },
    updateStartup(state, action: PayloadAction<Partial<StartupState>>) {
      state.startup = { ...state.startup, ...action.payload };
    },
    updateLocation(state, action: PayloadAction<Partial<LocationState>>) {
      state.location = { ...state.location, ...action.payload };
    },
    updateRelationships(state, action: PayloadAction<Partial<RelationshipStats>>) {
      state.relationships = { ...state.relationships, ...action.payload };
    },
    advancePhase(state) {
      const phases = Object.values(GamePhase);
      const currentIndex = phases.indexOf(state.currentPhase);
      if (currentIndex < phases.length - 1) {
        state.currentPhase = phases[currentIndex + 1];
      }
    },
    advanceTime(state) {
      // Simple time advancement logic
      state.time.day += 1;
      if (state.time.day > 30) {
        state.time.day = 1;
        state.time.month += 1;
        if (state.time.month > 12) {
          state.time.month = 1;
          state.time.year += 1;
        }
      }
    }
  }
});

export const { 
  updateFounder,
  updateStartup,
  updateLocation,
  updateRelationships,
  advancePhase,
  advanceTime
} = gameSlice.actions;

export default gameSlice.reducer; 