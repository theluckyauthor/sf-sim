import { GameEvent, GamePhase } from '../types/stats';
import { morningRoutine } from './personal/wellness';
import { initialTeamPlanning } from './team/hiring';
import { initialFundingStrategy } from './funding/pitches';
import { productBrainstorming } from './product/development';

// Networking Events
export * from './networking/meetups';
export * from './networking/pitching';
export * from './networking/exposure';

// Product Events
export * from './product/development';

// Team Events
export * from './team/hiring';
export * from './team/cofounder';
export * from './team/culture';

// Funding Events
export * from './funding/pitches';
export * from './funding/accelerator';
export * from './funding/yc_outcomes';

// Personal Events
export * from './personal/wellness';
export * from './personal/workspace';
export * from './personal/balance';

// Market Events
export * from './market/launch';

// Random Events
export * from './random/opportunities';

// San Francisco Events
export * from './sanfran/culture';

// Event Categories
export const EVENT_CATEGORIES = [
  'networking',
  'product',
  'team',
  'funding',
  'personal',
  'market',
  'random',
  'sanfran'
] as const;

// Event Phase Requirements
export const PHASE_REQUIREMENTS = {
  networking: {
    SETTLING_IN: ['techMeetupSOMA'],
    IDEATION: ['founderCoffee', 'localDemoPitch', 'pitchFeedback'],
    BOOTSTRAPPING: [
      'startupConference',
      'mediaOpportunity',
      'mediaExposureStrategy',
      'partnershipDevelopment',
      'investorRelationshipBuilding'
    ],
    FUNDRAISING: ['investorNetworking'],
    SCALING: ['industryConference', 'partnershipSummit']
  },
  product: {
    SETTLING_IN: ['initialIdeaValidation'],
    IDEATION: ['productBrainstorming', 'prototypeStrategy', 'userTesting'],
    BOOTSTRAPPING: [
      'mvpCrunch',
      'featurePrioritization',
      'featureValidation',
      'processReview',
      'technicalDebtCrisis',
      'teamCultureFallout',
      'crisisPreventionPlanning',
      'productRoadmapStrategy',
      'userFeedbackIntegration',
      'productScalingStrategy'
    ],
    FUNDRAISING: ['investorDemo', 'productRoadmapPitch', 'scalingChallenge'],
    SCALING: ['productExpansion', 'enterpriseFeatures', 'platformStrategy']
  },
  team: {
    SETTLING_IN: ['initialTeamPlanning'],
    IDEATION: ['potentialCofounder', 'cofounderAlignment', 'cofounderOnboarding'],
    BOOTSTRAPPING: [
      'firstHire',
      'teamCulture',
      'teamConflict',
      'teamBuildingResponse',
      'hackathonOpportunity',
      'strategicVisionConflict',
      'equityRenegotiation',
      'workStyleConflict',
      'partnershipPlanning',
      'teamBuildingInitiative',
      'cultureReinforcement',
      'hiringStrategyAdjustment'
    ],
    FUNDRAISING: ['executiveHiring', 'cultureDuringFundraising'],
    SCALING: ['seniorHiringSpree', 'internationalTeam', 'remoteTeamCulture', 'culturalTransformation']
  },
  funding: {
    SETTLING_IN: ['initialFundingStrategy'],
    IDEATION: ['angelOutreach', 'friendsAndFamily', 'crowdfunding'],
    BOOTSTRAPPING: ['acceleratorApplication', 'acceleratorInterview'],
    FUNDRAISING: [
      'seedPitch',
      'vcPitchPrep',
      'investorFeedback',
      'ycBatchNetworking',
      'ycTeamScaling',
      'ycMarketExpansion',
      'ycDemoDay',
      'postDemoDayFundraising',
      'strategicPitchRefinement',
      'strategicPivot',
      'boardFormation'
    ],
    SCALING: ['seriesB', 'strategicInvestment', 'internationalExpansionFunding']
  },
  personal: {
    SETTLING_IN: ['morningRoutine', 'workspaceDecision', 'healthyHabits', 'lifestyleSetup'],
    IDEATION: ['mentalPreparation', 'passionProject'],
    BOOTSTRAPPING: [
      'burnoutWarning',
      'criticalBugDecision',
      'aftermathReflection',
      'friday_night_001',
      'fundraising_workshop_001',
      'self_care_001',
      'workLifeBalanceInitiative',
      'teamWellnessProgram',
      'leadershipStyleEvolution'
    ],
    FUNDRAISING: ['stressManagement', 'familyTime'],
    SCALING: ['executiveWellness', 'leadershipLifestyle']
  },
  market: {
    SETTLING_IN: ['initialMarketAnalysis'],
    IDEATION: ['marketValidation'],
    BOOTSTRAPPING: [
      'productHunt',
      'marketFeedback',
      'publicDemo',
      'demoFallout',
      'viralGrowthSurge',
      'mediaCoverage',
      'userFeedbackSurge',
      'competitorReaction',
      'marketPositioningStrategy',
      'featureDevelopmentRace',
      'strategicPartnership'
    ],
    FUNDRAISING: ['investorMarketPitch'],
    SCALING: ['marketExpansion']
  },
  random: {
    SETTLING_IN: ['viralTweet', 'serendipitousConnection', 'talentedCandidate', 'marketOpportunity'],
    IDEATION: ['viralTweet', 'serendipitousConnection', 'talentedCandidate', 'marketOpportunity'],
    BOOTSTRAPPING: ['viralTweet', 'serendipitousConnection', 'talentedCandidate', 'techCrisis', 'marketOpportunity', 'competitorAcquisition'],
    FUNDRAISING: ['viralTweet', 'serendipitousConnection', 'talentedCandidate', 'techCrisis', 'marketOpportunity', 'competitorAcquisition'],
    SCALING: ['viralTweet', 'serendipitousConnection', 'talentedCandidate', 'techCrisis', 'marketOpportunity', 'competitorAcquisition']
  },
  sanfran: {
    SETTLING_IN: [
      'foggyMorning',
      'missionWeekend',
      'somaTechScene',
      'housingCrisis',
      'chinatownLunch',
      'touristAttraction'
    ],
    IDEATION: [
      'foggyMorning',
      'missionWeekend',
      'somaTechScene',
      'housingCrisis',
      'haightAshburyEvent',
      'chinatownLunch',
      'bayToBreakers'
    ],
    BOOTSTRAPPING: [
      'foggyMorning',
      'missionWeekend',
      'somaTechScene',
      'housingCrisis',
      'transportationChallenge',
      'sfCulture',
      'castroNightlife',
      'homelessnessImpact',
      'marinHeadlands'
    ],
    FUNDRAISING: [
      'foggyMorning',
      'missionWeekend',
      'somaTechScene',
      'housingCrisis',
      'transportationChallenge',
      'sfCulture',
      'castroNightlife',
      'homelessnessImpact',
      'touristAttraction'
    ],
    SCALING: [
      'foggyMorning',
      'missionWeekend',
      'somaTechScene',
      'housingCrisis',
      'transportationChallenge',
      'sfCulture',
      'castroNightlife',
      'homelessnessImpact',
      'marinHeadlands'
    ]
  }
};

// Income Milestones (Monthly Recurring Revenue)
export const MRR_MILESTONES = {
  SETTLING_IN: 0,
  IDEATION: 1000,      // $1K MRR
  BOOTSTRAPPING: 10000, // $10K MRR
  FUNDRAISING: 100000,  // $100K MRR
  SCALING: 1000000     // $1M MRR - Victory!
} as const;

// Company Stats Categories
export const COMPANY_STATS = {
  product: {
    userGrowth: 0,
    retention: 0,
    satisfaction: 0,
    features: 0
  },
  business: {
    mrr: 0,
    runway: 0,
    valuation: 0,
    marketShare: 0
  },
  team: {
    size: 1,
    satisfaction: 100,
    productivity: 100,
    culture: 100
  }
} as const;

// Game Over Conditions
export const GAME_OVER_CONDITIONS = {
  BANKRUPTCY: 'No runway left - Game Over',
  TEAM_COLLAPSE: 'Complete team departure - Game Over',
  PRODUCT_FAILURE: 'Critical product failure with no recovery - Game Over',
  FOUNDER_BURNOUT: 'Founder burnout - Game Over'
};

// Progress Events (Triggered by good stats)
export const PROGRESS_EVENTS = {
  VIRAL_GROWTH: {
    condition: { userGrowth: 90, satisfaction: 85 },
    reward: { mrr: 1.5, valuation: 1.3 }
  },
  TEAM_EXCELLENCE: {
    condition: { satisfaction: 90, culture: 90 },
    reward: { productivity: 1.3, retention: 1.2 }
  },
  MARKET_DOMINANCE: {
    condition: { marketShare: 80, features: 85 },
    reward: { mrr: 1.4, valuation: 1.5 }
  }
};

// Phase Requirements
export const PHASE_PROGRESSION = {
  SETTLING_IN: {
    mrr: 0,
    minStats: { 'founder.skills.networking': 20 }
  },
  IDEATION: {
    mrr: 1000,
    minStats: {
      'founder.skills.technical': 30,
      'product.satisfaction': 50
    }
  },
  BOOTSTRAPPING: {
    mrr: 10000,
    minStats: {
      'team.size': 5,
      'product.userGrowth': 40,
      'business.runway': 6
    }
  },
  FUNDRAISING: {
    mrr: 100000,
    minStats: {
      'founder.skills.fundraising': 60,
      'business.valuation': 1000000,
      'team.productivity': 70
    }
  },
  SCALING: {
    mrr: 500000,
    minStats: {
      'team.size': 20,
      'product.marketShare': 10,
      'business.runway': 12
    }
  }
};

// Map of events by phase
const eventsByPhase: Record<GamePhase, GameEvent[]> = {
  [GamePhase.SETTLING_IN]: [
    morningRoutine,
    initialTeamPlanning,
    initialFundingStrategy
  ],
  [GamePhase.IDEATION]: [
    productBrainstorming
  ],
  [GamePhase.BOOTSTRAPPING]: [],
  [GamePhase.FUNDRAISING]: [],
  [GamePhase.SCALING]: []
};

// Check if game is over based on stats
export const checkGameOver = (stats: any) => {
  if (stats.startup.finances.cash <= -100000) {
    return GAME_OVER_CONDITIONS.BANKRUPTCY;
  }
  if (stats.founder.wellBeing.stress >= 100) {
    return GAME_OVER_CONDITIONS.FOUNDER_BURNOUT;
  }
  return null;
};

// Get next random event for the current phase
export const getNextEvent = (
  currentPhase: GamePhase,
  usedEventIds: string[],
  stats: any
): GameEvent | null => {
  const availableEvents = eventsByPhase[currentPhase].filter(
    event => !usedEventIds.includes(event.id) && checkEventConditions(event, stats)
  );

  if (availableEvents.length === 0) {
    return null;
  }

  const randomIndex = Math.floor(Math.random() * availableEvents.length);
  return availableEvents[randomIndex];
};

// Check if event conditions are met
const checkEventConditions = (event: GameEvent, stats: any): boolean => {
  if (!event.conditions) return true;

  const { minimumStats } = event.conditions;
  if (!minimumStats) return true;

  // Check each stat requirement
  for (const [statPath, requirements] of Object.entries(minimumStats)) {
    const currentStats = statPath.split('.').reduce((obj, key) => obj[key], stats);
    for (const [stat, minValue] of Object.entries(requirements)) {
      if (currentStats[stat] < minValue) {
        return false;
      }
    }
  }

  return true;
};

// Check if ready to advance to next phase
export const checkPhaseAdvancement = (currentPhase: GamePhase, stats: any): boolean => {
  switch (currentPhase) {
    case GamePhase.SETTLING_IN:
      return stats.founder.skills.execution >= 10;
    case GamePhase.IDEATION:
      return stats.startup.product.mvpProgress >= 50;
    case GamePhase.BOOTSTRAPPING:
      return stats.startup.finances.revenue >= 10000;
    case GamePhase.FUNDRAISING:
      return stats.startup.finances.valuation >= 1000000;
    default:
      return false;
  }
}; 