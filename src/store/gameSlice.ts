import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { 
  GameState,
  GamePhase,
  FounderStats,
  CompanyStats,
  LocationStats,
  District
} from '../types/stats';

interface HistoryEntry {
  timestamp: string;
  title: string;
  description: string;
  consequences: {
    text: string;
    type: 'positive' | 'negative' | 'neutral';
  }[];
}

interface ExtendedGameState extends GameState {
  history: HistoryEntry[];
}

const initialState: ExtendedGameState = {
  founder: {
    health: 100,
    energy: 100,
    technical: 50,
    business: 50,
    leadership: 50,
    cash: 10000,
    reputation: 50
  },
  company: {
    productQuality: 0,
    marketFit: 0,
    userGrowth: 0,
    revenue: 0,
    runway: 12,
    valuation: 0,
    teamSize: 1,
    teamMorale: 100,
    talent: 50
  },
  location: {
    district: District.SOMA,
    type: 'home',
    networkingScore: 0
  },
  progress: {
    phase: GamePhase.SETTLING_IN,
    day: 1,
    month: 1,
    year: 2024,
    completedEvents: [],
    achievements: []
  },

  history: []
};

const gameSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {
    updateFounder: (state, action: PayloadAction<Partial<FounderStats>>) => {
      state.founder = { ...state.founder, ...action.payload };
    },
    updateCompany: (state, action: PayloadAction<Partial<CompanyStats>>) => {
      state.company = { ...state.company, ...action.payload };
    },
    updateLocation: (state, action: PayloadAction<Partial<LocationStats>>) => {
      state.location = { ...state.location, ...action.payload };
    },
    advancePhase(state) {
      const phases = Object.values(GamePhase);
      const currentIndex = phases.indexOf(state.progress.phase);
      if (currentIndex < phases.length - 1) {
        state.progress.phase = phases[currentIndex + 1];
      }
    },
    advanceTime(state) {
      state.progress.day += 1;
      if (state.progress.day > 30) {
        state.progress.day = 1;
        state.progress.month += 1;
        if (state.progress.month > 12) {
          state.progress.month = 1;
          state.progress.year += 1;
        }
      }
    },
    addHistoryEntry(state, action: PayloadAction<HistoryEntry>) {
      state.history.unshift(action.payload); // Add new entries at the beginning
    }
  }
});

export const { 
  updateFounder,
  updateCompany,
  updateLocation,
  advancePhase,
  advanceTime,
  addHistoryEntry
} = gameSlice.actions;

export default gameSlice.reducer; 