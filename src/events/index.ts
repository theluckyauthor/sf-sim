import { GameEvent, GamePhase, EventCategory, FounderStats, CompanyStats } from '../types/stats';

// Personal Events
import { morningRoutine, wellnessChallenge, burnoutWarning } from './personal/wellness';
import { workspaceDecision } from './personal/workspace';
import { fridayNightChoice, fundraisingWorkshop } from './personal/balance';

// Team Events
import { initialTeamPlanning, firstHire, executiveHiring } from './team/hiring';
import { potentialCofounder, cofounderAlignment } from './team/cofounder';
import { teamConflict, teamBuildingResponse } from './team/culture';

// Funding Events
import { initialFundingStrategy, angelOutreach, seedPitch } from './funding/pitches';
import { acceleratorApplication, acceleratorInterview } from './funding/accelerator';

// Product Events
import { productBrainstorming, mvpCrunch, featurePrioritization } from './product/development';

// Market Events
import { initialMarketAnalysis, marketValidation } from './market/launch';

// Networking Events
import { techMeetupSOMA, founderCoffee } from './networking/meetups';
import { localDemoPitch, pitchFeedback } from './networking/pitching';

// San Francisco Events
import { foggyMorning, missionWeekend, somaTechScene } from './sanfran/culture';

// Random Events
import { viralTweet, serendipitousConnection } from './random/opportunities';

// Special Events
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
} from './special/stat_triggered';

// Export all event modules
export * from './networking/meetups';
export * from './networking/pitching';
export * from './networking/exposure';
export * from './product/development';
export * from './team/hiring';
export * from './team/cofounder';
export * from './team/culture';
export * from './funding/pitches';
export * from './funding/accelerator';
export * from './funding/yc_outcomes';
export * from './personal/wellness';
export * from './personal/workspace';
export * from './personal/balance';
export * from './market/launch';
export * from './random/opportunities';
export * from './sanfran/culture';
export * from './special/stat_triggered';

// Collect all events
const allEvents: GameEvent[] = [
  // Personal Events
  morningRoutine,
  wellnessChallenge,
  burnoutWarning,
  workspaceDecision,
  fridayNightChoice,
  fundraisingWorkshop,

  // Team Events
  initialTeamPlanning,
  firstHire,
  executiveHiring,
  potentialCofounder,
  cofounderAlignment,
  teamConflict,
  teamBuildingResponse,

  // Funding Events
  initialFundingStrategy,
  angelOutreach,
  seedPitch,
  acceleratorApplication,
  acceleratorInterview,

  // Product Events
  productBrainstorming,
  mvpCrunch,
  featurePrioritization,

  // Market Events
  initialMarketAnalysis,
  marketValidation,

  // Networking Events
  techMeetupSOMA,
  founderCoffee,
  localDemoPitch,
  pitchFeedback,

  // San Francisco Events
  foggyMorning,
  missionWeekend,
  somaTechScene,

  // Random Events
  viralTweet,
  serendipitousConnection,
  
  // Special Events
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
];

// Event Categories
export const EVENT_CATEGORIES: EventCategory[] = [
  'networking',
  'product',
  'team',
  'funding',
  'personal',
  'market',
  'random',
  'sanfran'
];

// Event Phase Requirements
export const PHASE_REQUIREMENTS: Record<EventCategory, Partial<Record<GamePhase, string[]>>> = {
  networking: {
    [GamePhase.SETTLING_IN]: ['techMeetupSOMA'],
    [GamePhase.IDEATION]: ['founderCoffee', 'localDemoPitch', 'pitchFeedback'],
    [GamePhase.BOOTSTRAPPING]: [
      'startupConference',
      'mediaOpportunity',
      'mediaExposureStrategy',
      'partnershipDevelopment',
      'investorRelationshipBuilding'
    ],
    [GamePhase.FUNDRAISING]: ['investorNetworking'],
    [GamePhase.SCALING]: ['industryConference', 'partnershipSummit']
  },
  product: {
    [GamePhase.SETTLING_IN]: ['initialIdeaValidation'],
    [GamePhase.IDEATION]: ['productBrainstorming', 'prototypeStrategy', 'userTesting'],
    [GamePhase.BOOTSTRAPPING]: [
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
    [GamePhase.FUNDRAISING]: ['investorDemo', 'productRoadmapPitch', 'scalingChallenge'],
    [GamePhase.SCALING]: ['productExpansion', 'enterpriseFeatures', 'platformStrategy']
  },
  team: {
    [GamePhase.SETTLING_IN]: ['initialTeamPlanning'],
    [GamePhase.IDEATION]: ['potentialCofounder', 'cofounderAlignment', 'cofounderOnboarding'],
    [GamePhase.BOOTSTRAPPING]: [
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
    [GamePhase.FUNDRAISING]: ['executiveHiring', 'cultureDuringFundraising'],
    [GamePhase.SCALING]: ['seniorHiringSpree', 'internationalTeam', 'remoteTeamCulture', 'culturalTransformation']
  },
  funding: {
    [GamePhase.SETTLING_IN]: ['initialFundingStrategy'],
    [GamePhase.IDEATION]: ['angelOutreach', 'friendsAndFamily', 'crowdfunding'],
    [GamePhase.BOOTSTRAPPING]: ['acceleratorApplication', 'acceleratorInterview'],
    [GamePhase.FUNDRAISING]: [
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
    [GamePhase.SCALING]: ['seriesB', 'strategicInvestment', 'internationalExpansionFunding']
  },
  personal: {
    [GamePhase.SETTLING_IN]: ['morningRoutine', 'workspaceDecision', 'healthyHabits', 'lifestyleSetup'],
    [GamePhase.IDEATION]: ['mentalPreparation', 'passionProject'],
    [GamePhase.BOOTSTRAPPING]: [
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
    [GamePhase.FUNDRAISING]: ['stressManagement', 'familyTime'],
    [GamePhase.SCALING]: ['executiveWellness', 'leadershipLifestyle']
  },
  market: {
    [GamePhase.SETTLING_IN]: ['initialMarketAnalysis'],
    [GamePhase.IDEATION]: ['marketValidation'],
    [GamePhase.BOOTSTRAPPING]: [
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
    [GamePhase.FUNDRAISING]: ['investorMarketPitch'],
    [GamePhase.SCALING]: ['marketExpansion']
  },
  random: {
    [GamePhase.SETTLING_IN]: ['viralTweet', 'serendipitousConnection', 'talentedCandidate', 'marketOpportunity'],
    [GamePhase.IDEATION]: ['viralTweet', 'serendipitousConnection', 'talentedCandidate', 'marketOpportunity'],
    [GamePhase.BOOTSTRAPPING]: ['viralTweet', 'serendipitousConnection', 'talentedCandidate', 'techCrisis', 'marketOpportunity', 'competitorAcquisition'],
    [GamePhase.FUNDRAISING]: ['viralTweet', 'serendipitousConnection', 'talentedCandidate', 'techCrisis', 'marketOpportunity', 'competitorAcquisition'],
    [GamePhase.SCALING]: ['viralTweet', 'serendipitousConnection', 'talentedCandidate', 'techCrisis', 'marketOpportunity', 'competitorAcquisition']
  },
  sanfran: {
    [GamePhase.SETTLING_IN]: [
      'foggyMorning',
      'missionWeekend',
      'somaTechScene',
      'housingCrisis',
      'chinatownLunch',
      'touristAttraction'
    ],
    [GamePhase.IDEATION]: [
      'foggyMorning',
      'missionWeekend',
      'somaTechScene',
      'housingCrisis',
      'haightAshburyEvent',
      'chinatownLunch',
      'bayToBreakers'
    ],
    [GamePhase.BOOTSTRAPPING]: [
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
    [GamePhase.FUNDRAISING]: [
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
    [GamePhase.SCALING]: [
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
export const MRR_MILESTONES: Record<GamePhase, number> = {
  [GamePhase.SETTLING_IN]: 0,
  [GamePhase.IDEATION]: 1000,      // $1K MRR
  [GamePhase.BOOTSTRAPPING]: 10000, // $10K MRR
  [GamePhase.FUNDRAISING]: 100000,  // $100K MRR
  [GamePhase.SCALING]: 1000000     // $1M MRR - Victory!
};

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
} as const;

// Progress Events (Triggered by good stats)
export const PROGRESS_EVENTS = {
  VIRAL_GROWTH: {
    condition: {
      company: {
        userGrowth: 90,
        productQuality: 85
      }
    },
    impact: {
      company: {
        revenue: 50000,
        valuation: 1000000
      }
    }
  },
  TEAM_EXCELLENCE: {
    condition: {
      company: {
        teamMorale: 90,
        talent: 90
      }
    },
    impact: {
      company: {
        productQuality: 10,
        teamMorale: 10
      }
    }
  },
  MARKET_DOMINANCE: {
    condition: {
      company: {
        marketFit: 80,
        productQuality: 85
      }
    },
    impact: {
      company: {
        revenue: 100000,
        valuation: 2000000
      }
    }
  }
};

// Phase Requirements
export const PHASE_PROGRESSION: Record<GamePhase, { 
  revenue: number, 
  minStats: { 
    founder?: Partial<FounderStats>, 
    company?: Partial<CompanyStats> 
  } 
}> = {
  [GamePhase.SETTLING_IN]: {
    revenue: 0,
    minStats: {
      founder: {
        technical: 15,
        business: 15
      }
    }
  },
  [GamePhase.IDEATION]: {
    revenue: 500,
    minStats: {
      founder: {
        technical: 20
      },
      company: {
        productQuality: 30
      }
    }
  },
  [GamePhase.BOOTSTRAPPING]: {
    revenue: 5000,
    minStats: {
      company: {
        teamSize: 3,
        userGrowth: 30,
        runway: 3
      }
    }
  },
  [GamePhase.FUNDRAISING]: {
    revenue: 50000,
    minStats: {
      founder: {
        business: 40
      },
      company: {
        valuation: 500000,
        teamMorale: 50
      }
    }
  },
  [GamePhase.SCALING]: {
    revenue: 200000,
    minStats: {
      company: {
        teamSize: 10,
        marketFit: 40,
        runway: 6
      }
    }
  }
};

// Map of events by phase
export const eventsByPhase: Record<GamePhase, GameEvent[]> = {
  [GamePhase.SETTLING_IN]: [
    morningRoutine,
    initialTeamPlanning,
    initialFundingStrategy,
    workspaceDecision,
    techMeetupSOMA,
    initialMarketAnalysis,
    foggyMorning,
    missionWeekend,
    somaTechScene,
    viralTweet,
    serendipitousConnection,
    naturalDisaster,
    marketCrash
  ],
  [GamePhase.IDEATION]: [
    productBrainstorming,
    founderCoffee,
    localDemoPitch,
    pitchFeedback,
    potentialCofounder,
    cofounderAlignment,
    angelOutreach,
    marketValidation,
    viralTweet,
    serendipitousConnection,
    foggyMorning,
    missionWeekend,
    naturalDisaster,
    marketCrash,
    burnoutCrisis
  ],
  [GamePhase.BOOTSTRAPPING]: [
    mvpCrunch,
    featurePrioritization,
    teamConflict,
    teamBuildingResponse,
    acceleratorApplication,
    acceleratorInterview,
    burnoutWarning,
    fridayNightChoice,
    fundraisingWorkshop,
    viralTweet,
    serendipitousConnection,
    foggyMorning,
    missionWeekend,
    somaTechScene,
    naturalDisaster,
    marketCrash,
    burnoutCrisis,
    cashCrisis,
    teamRebellion,
    celebrityEndorsement
  ],
  [GamePhase.FUNDRAISING]: [
    seedPitch,
    executiveHiring,
    wellnessChallenge,
    viralTweet,
    serendipitousConnection,
    foggyMorning,
    missionWeekend,
    somaTechScene,
    teamConflict,
    teamBuildingResponse,
    burnoutWarning,
    naturalDisaster,
    marketCrash,
    burnoutCrisis,
    cashCrisis,
    teamRebellion,
    viralProductSuccess,
    celebrityEndorsement,
    competitorBankruptcy
  ],
  [GamePhase.SCALING]: [
    firstHire,
    viralTweet,
    serendipitousConnection,
    foggyMorning,
    missionWeekend,
    somaTechScene,
    teamConflict,
    teamBuildingResponse,
    burnoutWarning,
    executiveHiring,
    wellnessChallenge,
    naturalDisaster,
    marketCrash,
    burnoutCrisis,
    cashCrisis,
    teamRebellion,
    viralProductSuccess,
    acquisitionOffer,
    celebrityEndorsement,
    competitorBankruptcy,
    keyEmployeePoached
  ]
};

interface GameStats {
  founder: FounderStats;
  company: CompanyStats;
}

// Check if game is over based on stats
export const checkGameOver = (stats: GameStats): string | null => {
  if (stats.company.runway <= 0) {
    return GAME_OVER_CONDITIONS.BANKRUPTCY;
  }
  if (stats.founder.energy <= 0) {
    return GAME_OVER_CONDITIONS.FOUNDER_BURNOUT;
  }
  return null;
};

// Get next random event for the current phase
export const getNextEvent = (
  currentPhase: GamePhase,
  usedEventIds: string[],
  stats: GameStats
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
const checkEventConditions = (event: GameEvent, stats: GameStats): boolean => {
  if (!event.conditions) return true;

  const { minimumStats } = event.conditions;
  if (!minimumStats) return true;

  if (minimumStats.founder) {
    for (const [stat, value] of Object.entries(minimumStats.founder)) {
      if ((stats.founder[stat as keyof FounderStats] ?? 0) < value) {
        return false;
      }
    }
  }

  if (minimumStats.company) {
    for (const [stat, value] of Object.entries(minimumStats.company)) {
      if ((stats.company[stat as keyof CompanyStats] ?? 0) < value) {
        return false;
      }
    }
  }

  return true;
};

// Check if ready to advance to next phase
export const checkPhaseAdvancement = (currentPhase: GamePhase, stats: GameStats): boolean => {
  const requirements = PHASE_PROGRESSION[currentPhase];
  if (!requirements) return false;

  if (stats.company.revenue < requirements.revenue) return false;

  const { minStats } = requirements;
  if (minStats.founder) {
    for (const [stat, value] of Object.entries(minStats.founder)) {
      if ((stats.founder[stat as keyof FounderStats] ?? 0) < value) {
        return false;
      }
    }
  }

  if (minStats.company) {
    for (const [stat, value] of Object.entries(minStats.company)) {
      if ((stats.company[stat as keyof CompanyStats] ?? 0) < value) {
        return false;
      }
    }
  }

  return true;
}; 