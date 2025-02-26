import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { 
  GameState,
  GamePhase,
  FounderStats,
  CompanyStats,
  LocationStats,
  District,
  GameEvent,
  Achievement,
  FounderProfile,
  StartupProfile
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
  currentEvent?: GameEvent;
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
  founderProfile: {
    founderName: 'Anonymous Founder',
    background: 'tech_veteran',
    role: 'technical_founder'
  },
  startupProfile: {
    startupName: 'Unnamed Startup',
    startupType: 'ai_startup',
    catchphrase: 'Making the world a better place'
  },
  history: []
};

const gameSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {
    updateFounder: (state, action: PayloadAction<Partial<FounderStats>>) => {
      // Apply limits to founder stats
      const updatedStats = { ...state.founder, ...action.payload };
      
      // Health and energy should be between 0 and 100
      updatedStats.health = Math.max(0, Math.min(100, updatedStats.health));
      updatedStats.energy = Math.max(0, Math.min(100, updatedStats.energy));
      
      // Skills should be between 0 and 100
      updatedStats.technical = Math.max(0, Math.min(100, updatedStats.technical));
      updatedStats.business = Math.max(0, Math.min(100, updatedStats.business));
      updatedStats.leadership = Math.max(0, Math.min(100, updatedStats.leadership));
      
      // Reputation should be between 0 and 100
      updatedStats.reputation = Math.max(0, Math.min(100, updatedStats.reputation));
      
      state.founder = updatedStats;
    },
    updateCompany: (state, action: PayloadAction<Partial<CompanyStats>>) => {
      // Apply limits to company stats
      const updatedStats = { ...state.company, ...action.payload };
      
      // Product metrics should be between 0 and 100
      updatedStats.productQuality = Math.max(0, Math.min(100, updatedStats.productQuality));
      updatedStats.marketFit = Math.max(0, Math.min(100, updatedStats.marketFit));
      updatedStats.userGrowth = Math.max(0, Math.min(100, updatedStats.userGrowth));
      
      // Team metrics should be between 0 and 100
      updatedStats.teamMorale = Math.max(0, Math.min(100, updatedStats.teamMorale));
      updatedStats.talent = Math.max(0, Math.min(100, updatedStats.talent));
      
      // Team size should be at least 1
      updatedStats.teamSize = Math.max(1, updatedStats.teamSize);
      
      state.company = updatedStats;
    },
    updateLocation: (state, action: PayloadAction<Partial<LocationStats>>) => {
      state.location = { ...state.location, ...action.payload };
    },
    updateFounderProfile: (state, action: PayloadAction<Partial<FounderProfile>>) => {
      state.founderProfile = { ...state.founderProfile, ...action.payload };
    },
    updateStartupProfile: (state, action: PayloadAction<Partial<StartupProfile>>) => {
      state.startupProfile = { ...state.startupProfile, ...action.payload };
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
      
      // Decrease energy slightly each day
      state.founder.energy = Math.max(0, state.founder.energy - 2);
      
      // Decrease runway each month
      if (state.progress.day === 1) {
        state.company.runway = Math.max(0, state.company.runway - 1);
      }
    },
    addHistoryEntry(state, action: PayloadAction<HistoryEntry>) {
      state.history.unshift(action.payload); // Add new entries at the beginning
      
      // Limit history to 50 entries to prevent performance issues
      if (state.history.length > 50) {
        state.history = state.history.slice(0, 50);
      }
    },
    setCurrentEvent: (state, action: PayloadAction<GameEvent>) => {
      state.currentEvent = action.payload;
    },
    addAchievement: (state, action: PayloadAction<Achievement>) => {
      // Check if achievement already exists
      if (!state.progress.achievements.some(a => a.id === action.payload.id)) {
        state.progress.achievements.push(action.payload);
      }
    }
  }
});

export const { 
  updateFounder,
  updateCompany,
  updateLocation,
  updateFounderProfile,
  updateStartupProfile,
  advancePhase,
  advanceTime,
  addHistoryEntry,
  setCurrentEvent,
  addAchievement
} = gameSlice.actions;

export default gameSlice.reducer; 