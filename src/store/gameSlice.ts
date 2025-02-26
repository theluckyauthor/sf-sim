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
    health: 85,
    energy: 90,
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
    runway: 24,
    valuation: 0,
    teamSize: 1,
    teamMorale: 85,
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
      const updatedStats = { ...state.founder };
      
      // Health and energy should be between 0 and 100
      if (action.payload.health !== undefined) {
        updatedStats.health = Math.max(0, Math.min(100, state.founder.health + action.payload.health));
      }
      if (action.payload.energy !== undefined) {
        updatedStats.energy = Math.max(0, Math.min(100, state.founder.energy + action.payload.energy));
      }
      
      // Skills should be between 0 and 100
      if (action.payload.technical !== undefined) {
        updatedStats.technical = Math.max(0, Math.min(100, state.founder.technical + action.payload.technical));
      }
      if (action.payload.business !== undefined) {
        updatedStats.business = Math.max(0, Math.min(100, state.founder.business + action.payload.business));
      }
      if (action.payload.leadership !== undefined) {
        updatedStats.leadership = Math.max(0, Math.min(100, state.founder.leadership + action.payload.leadership));
      }
      
      // Reputation should be between 0 and 100
      if (action.payload.reputation !== undefined) {
        updatedStats.reputation = Math.max(0, Math.min(100, state.founder.reputation + action.payload.reputation));
      }
      
      // Cash can be any value
      if (action.payload.cash !== undefined) {
        updatedStats.cash = Math.max(0, state.founder.cash + action.payload.cash);
      }
      
      state.founder = updatedStats;
    },
    updateCompany: (state, action: PayloadAction<Partial<CompanyStats>>) => {
      // Apply limits to company stats
      const updatedStats = { ...state.company };
      
      // Product metrics should be between 0 and 100
      if (action.payload.productQuality !== undefined) {
        updatedStats.productQuality = Math.max(0, Math.min(100, state.company.productQuality + action.payload.productQuality));
      }
      if (action.payload.marketFit !== undefined) {
        updatedStats.marketFit = Math.max(0, Math.min(100, state.company.marketFit + action.payload.marketFit));
      }
      if (action.payload.userGrowth !== undefined) {
        updatedStats.userGrowth = Math.max(0, Math.min(100, state.company.userGrowth + action.payload.userGrowth));
      }
      
      // Team metrics should be between 0 and 100
      if (action.payload.teamMorale !== undefined) {
        updatedStats.teamMorale = Math.max(0, Math.min(100, state.company.teamMorale + action.payload.teamMorale));
      }
      if (action.payload.talent !== undefined) {
        updatedStats.talent = Math.max(0, Math.min(100, state.company.talent + action.payload.talent));
      }
      
      // Team size should be at least 1 and have a reasonable maximum (50)
      if (action.payload.teamSize !== undefined) {
        updatedStats.teamSize = Math.max(1, Math.min(50, state.company.teamSize + action.payload.teamSize));
      }
      
      // Revenue and valuation can be any positive number
      if (action.payload.revenue !== undefined) {
        updatedStats.revenue = Math.max(0, state.company.revenue + action.payload.revenue);
      }
      
      if (action.payload.valuation !== undefined) {
        updatedStats.valuation = Math.max(0, state.company.valuation + action.payload.valuation);
      }
      
      // Runway can be any positive number
      if (action.payload.runway !== undefined) {
        updatedStats.runway = Math.max(0, state.company.runway + action.payload.runway);
      }
      
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
        
        // Decrease runway every 2 months instead of every month
        if (state.progress.month % 2 === 0) {
          state.company.runway = Math.max(0, state.company.runway - 1);
        }
      }
      
      // Decrease energy slightly each day
      state.founder.energy = Math.max(0, state.founder.energy - 1);
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
    },
    setTeamSize: (state, action: PayloadAction<number>) => {
      state.company.teamSize = action.payload;
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
  addAchievement,
  setTeamSize
} = gameSlice.actions;

// Create a thunk to fix the team size if it's too large
export const fixTeamSize = () => (dispatch: any, getState: any) => {
  const state = getState();
  const teamSize = state.game.company.teamSize;
  
  // If team size is unreasonably large, reset it to a reasonable value
  if (teamSize > 50) {
    // Create a special action to set the absolute value
    dispatch(setTeamSize(10));
    
    // Add a history entry to explain the change
    dispatch(addHistoryEntry({
      timestamp: new Date().toISOString(),
      title: "Team Size Adjustment",
      description: "Your team size has been adjusted to a more realistic level.",
      consequences: [{
        text: `Team Size: adjusted from ${teamSize} to 10 members`,
        type: 'neutral'
      }]
    }));
  }
};

export default gameSlice.reducer; 