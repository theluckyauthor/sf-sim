import { 
  FounderStats, 
  CompanyStats, 
  GameState, 
  GameEvent, 
  EventImpact,
  GamePhase
} from '../../types/stats';
import { phaseData } from '../../data/phaseData';
import {
  burnoutCrisis,
  cashCrisis,
  teamRebellion,
  viralProductSuccess,
  acquisitionOffer,
  naturalDisaster,
  competitorBankruptcy,
  marketCrash,
  celebrityEndorsement,
  keyEmployeePoached
} from '../../events';

// Shuffle array implementation
export const shuffle = <T,>(array: T[]): T[] => {
  const newArray = [...array];
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
};

// Format stat changes for display
export const formatStatChange = (stat: string, value: number): string => {
  // Format the stat name to be more readable
  const formattedStat = stat
    .replace(/([A-Z])/g, ' $1') // Add space before capital letters
    .replace(/^./, str => str.toUpperCase()); // Capitalize first letter
  
  // Special cases for certain stats
  if (stat === 'cash') {
    return `${formattedStat}: ${value > 0 ? '+' : ''}$${Math.abs(value)}`;
  }
  
  if (stat === 'runway') {
    return `${formattedStat}: ${value > 0 ? '+' : ''}${value} month${Math.abs(value) !== 1 ? 's' : ''}`;
  }
  
  if (stat === 'valuation') {
    return `${formattedStat}: ${value > 0 ? '+' : ''}$${Math.abs(value).toLocaleString()}`;
  }
  
  if (stat === 'teamSize') {
    return `${formattedStat}: ${value > 0 ? '+' : ''}${value} team member${Math.abs(value) !== 1 ? 's' : ''}`;
  }
  
  // For percentage-based stats (energy, health, etc.)
  if (['energy', 'health', 'technical', 'business', 'leadership', 'reputation', 
       'productQuality', 'marketFit', 'userGrowth', 'teamMorale', 'talent'].includes(stat)) {
    return `${formattedStat}: ${value > 0 ? '+' : ''}${value}%`;
  }
  
  // Default format
  return `${formattedStat}: ${value > 0 ? '+' : ''}${value}`;
};

// Check for special events based on game state
export const checkForSpecialEvents = (gameState: GameState): GameEvent | null => {
  // Check for low stat crisis events
  if (gameState.founder.energy <= 15 && gameState.founder.health <= 20) {
    return burnoutCrisis;
  }
  
  if (gameState.company.runway <= 1) {
    return cashCrisis;
  }
  
  if (gameState.company.teamMorale <= 20 && gameState.company.teamSize >= 3) {
    return teamRebellion;
  }
  
  // Check for high stat success events
  if (gameState.company.productQuality >= 75 && gameState.company.userGrowth >= 60) {
    // Only trigger once
    if (!gameState.progress.completedEvents.includes(viralProductSuccess.id)) {
      return viralProductSuccess;
    }
  }
  
  if (gameState.company.valuation >= 2000000 && gameState.company.marketFit >= 70 && gameState.founder.reputation >= 60) {
    // Only trigger once
    if (!gameState.progress.completedEvents.includes(acquisitionOffer.id)) {
      return acquisitionOffer;
    }
  }
  
  // Random chance for wild events (5% chance each)
  const randomChance = Math.random();
  if (randomChance < 0.05) {
    // Only trigger each wild event once
    if (!gameState.progress.completedEvents.includes(naturalDisaster.id)) {
      return naturalDisaster;
    }
  } else if (randomChance < 0.10) {
    if (gameState.company.productQuality >= 50 && !gameState.progress.completedEvents.includes(competitorBankruptcy.id)) {
      return competitorBankruptcy;
    }
  } else if (randomChance < 0.15) {
    if (!gameState.progress.completedEvents.includes(marketCrash.id)) {
      return marketCrash;
    }
  } else if (randomChance < 0.20) {
    if (gameState.company.productQuality >= 60 && !gameState.progress.completedEvents.includes(celebrityEndorsement.id)) {
      return celebrityEndorsement;
    }
  } else if (randomChance < 0.25) {
    if (gameState.company.teamSize >= 4 && gameState.company.talent >= 70 && !gameState.progress.completedEvents.includes(keyEmployeePoached.id)) {
      return keyEmployeePoached;
    }
  }
  
  return null;
};

// Create phase intro events
export const createPhaseIntroEvent = (phase: GamePhase): GameEvent => {
  const phaseInfo = phaseData[phase];
  
  return {
    id: `phase_intro_${phase.toLowerCase()}`,
    category: 'random',
    title: phaseInfo.name,
    description: phaseInfo.description,
    conditions: {
      requiredPhase: phase
    },
    impact: {},
    choices: [
      {
        id: `begin_${phase.toLowerCase()}`,
        text: `Begin ${phaseInfo.name}`,
        impact: {}
      }
    ]
  };
}; 