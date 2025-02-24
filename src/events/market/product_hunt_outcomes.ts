import { GameEvent, GamePhase } from '../../types/stats';

// Event triggered by successful Product Hunt launch
export const viralGrowthSurge: GameEvent = {
  id: 'viral_growth_surge_001',
  category: 'market',
  title: 'Viral Growth Surge',
  description: 'Your Product Hunt launch exceeded expectations. Traffic is growing exponentially, but your infrastructure is starting to strain.',
  
  conditions: {
    requiredPhase: GamePhase.BOOTSTRAPPING,
    activeMilestone: 'product_hunt_success_001'
  },
  
  impact: {
    founder: {
      wellBeing: {
        energy: -15,
        stress: 25,
        health: -5
      }
    }
  },
  
  choices: [
    {
      id: 'scale_infrastructure',
      text: 'Drop everything and scale the infrastructure to handle the growth.',
      impact: {
        founder: {
          wellBeing: {
            energy: -30,
            stress: 35,
            health: -10
          },
          skills: {
            technical: 25,
            execution: 20,
            leadership: 15,
            growth: 15,
            marketing: 5,
            networking: 5,
            fundraising: 10,
            sustainability: -5
          }
        },
        startup: {
          product: {
            quality: 20,
            development: 25,
            innovation: 10,
            marketFit: 15,
            mvpProgress: -5
          },
          market: {
            userTraction: 35,
            userGrowth: 30,
            brandReputation: 20,
            socialPresence: 25,
            marketFit: 15
          },
          finances: {
            burnRate: 40000,
            cash: -50000,
            revenue: 30000,
            valuation: 2000000
          }
        },
        relationships: {
          customers: 25,
          employees: 15,
          investors: 20,
          community: 15
        },
        triggerMilestone: 'infrastructure_scaled_001'
      }
    },
    {
      id: 'controlled_growth',
      text: 'Implement waitlist and throttle signups to maintain stability.',
      impact: {
        founder: {
          wellBeing: {
            energy: -15,
            stress: 20,
            health: -5
          },
          skills: {
            marketing: 15,
            execution: 15,
            technical: 10,
            leadership: 12,
            growth: 8,
            networking: 10,
            fundraising: 15,
            sustainability: 15
          }
        },
        startup: {
          product: {
            quality: 25,
            development: 15,
            innovation: 15,
            marketFit: 20,
            mvpProgress: 10
          },
          market: {
            userTraction: 20,
            userGrowth: 15,
            brandReputation: 25,
            socialPresence: 20,
            marketFit: 25
          },
          finances: {
            burnRate: 20000,
            cash: -20000,
            revenue: 25000,
            valuation: 1500000
          }
        },
        relationships: {
          customers: 20,
          employees: 25,
          investors: 15,
          community: 20
        },
        triggerMilestone: 'controlled_growth_001'
      }
    }
  ]
};

// Media Coverage Event
export const mediaCoverage: GameEvent = {
  id: 'media_coverage_001',
  category: 'market',
  title: 'Media Spotlight',
  description: 'Major tech publications want to cover your Product Hunt success. How will you handle the sudden media attention?',
  
  conditions: {
    requiredPhase: GamePhase.BOOTSTRAPPING,
    activeMilestone: ['infrastructure_scaled_001', 'controlled_growth_001']
  },
  
  impact: {
    founder: {
      wellBeing: {
        energy: -10,
        stress: 15,
        health: -5
      }
    }
  },
  
  choices: [
    {
      id: 'media_blitz',
      text: 'Go all-in on media: Accept all interviews and maximize exposure.',
      impact: {
        founder: {
          wellBeing: {
            energy: -25,
            stress: 30,
            health: -10
          },
          skills: {
            marketing: 25,
            networking: 20,
            leadership: 15,
            fundraising: 15,
            execution: 10,
            technical: 5,
            growth: 20,
            sustainability: -5
          }
        },
        startup: {
          market: {
            brandReputation: 35,
            socialPresence: 30,
            userTraction: 25,
            marketFit: 15,
            userGrowth: 25
          },
          finances: {
            valuation: 3000000,
            cash: -30000,
            revenue: 40000,
            burnRate: 35000
          }
        },
        relationships: {
          investors: 30,
          community: 25,
          customers: 20,
          employees: 10
        },
        triggerMilestone: 'media_success_001'
      }
    },
    {
      id: 'selective_coverage',
      text: 'Be strategic: Focus on in-depth coverage with key publications.',
      impact: {
        founder: {
          wellBeing: {
            energy: -15,
            stress: 20,
            health: -5
          },
          skills: {
            marketing: 15,
            networking: 15,
            leadership: 12,
            fundraising: 10,
            execution: 15,
            technical: 10,
            growth: 15,
            sustainability: 10
          }
        },
        startup: {
          market: {
            brandReputation: 25,
            socialPresence: 20,
            userTraction: 20,
            marketFit: 25,
            userGrowth: 15
          },
          finances: {
            valuation: 2000000,
            cash: -15000,
            revenue: 35000,
            burnRate: 25000
          }
        },
        relationships: {
          investors: 25,
          community: 20,
          customers: 25,
          employees: 15
        },
        triggerMilestone: 'strategic_coverage_001'
      }
    }
  ]
};

// User Feedback Challenge
export const userFeedbackSurge: GameEvent = {
  id: 'user_feedback_surge_001',
  category: 'market',
  title: 'User Feedback Flood',
  description: 'The Product Hunt community is providing massive amounts of feedback. Some love it, others point out critical issues.',
  
  conditions: {
    requiredPhase: GamePhase.BOOTSTRAPPING,
    activeMilestone: ['media_success_001', 'strategic_coverage_001']
  },
  
  impact: {
    founder: {
      wellBeing: {
        energy: -15,
        stress: 20,
        health: -5
      }
    }
  },
  
  choices: [
    {
      id: 'rapid_iteration',
      text: 'Rapidly iterate: Address key feedback with quick releases.',
      impact: {
        founder: {
          wellBeing: {
            energy: -25,
            stress: 30,
            health: -10
          },
          skills: {
            technical: 25,
            execution: 20,
            leadership: 15,
            marketing: 10,
            growth: 15,
            networking: 5,
            fundraising: 10,
            sustainability: -5
          }
        },
        startup: {
          product: {
            quality: 25,
            development: 30,
            innovation: 20,
            marketFit: 25,
            mvpProgress: 20
          },
          team: {
            productivity: -10,
            morale: -5,
            culture: -5,
            size: 0
          }
        },
        relationships: {
          customers: 30,
          employees: -5,
          investors: 15,
          community: 25
        },
        triggerMilestone: 'rapid_improvement_001'
      }
    },
    {
      id: 'strategic_roadmap',
      text: 'Take a measured approach: Incorporate feedback into strategic roadmap.',
      impact: {
        founder: {
          wellBeing: {
            energy: -15,
            stress: 15,
            health: -5
          },
          skills: {
            leadership: 20,
            execution: 15,
            technical: 15,
            marketing: 12,
            growth: 10,
            networking: 10,
            fundraising: 12,
            sustainability: 15
          }
        },
        startup: {
          product: {
            quality: 20,
            development: 15,
            innovation: 25,
            marketFit: 30,
            mvpProgress: 15
          },
          team: {
            productivity: 15,
            morale: 20,
            culture: 15,
            size: 0
          }
        },
        relationships: {
          customers: 25,
          employees: 20,
          investors: 20,
          community: 15
        },
        triggerMilestone: 'strategic_improvement_001'
      }
    }
  ]
};

// Competition Response Event
export const competitorReaction: GameEvent = {
  id: 'competitor_reaction_001',
  category: 'market',
  title: 'Competitor Response',
  description: 'Your Product Hunt success has caught competitors\' attention. They\'re preparing aggressive responses to your market entry.',
  
  conditions: {
    requiredPhase: GamePhase.BOOTSTRAPPING,
    activeMilestone: ['rapid_improvement_001', 'strategic_improvement_001']
  },
  
  impact: {
    founder: {
      wellBeing: {
        energy: -15,
        stress: 25,
        health: -5
      }
    }
  },
  
  choices: [
    {
      id: 'aggressive_defense',
      text: 'Launch aggressive marketing and feature rollout to maintain momentum.',
      impact: {
        founder: {
          wellBeing: {
            energy: -30,
            stress: 35,
            health: -15
          },
          skills: {
            marketing: 25,
            execution: 20,
            technical: 15,
            leadership: 15,
            growth: 25,
            networking: 15,
            fundraising: 20,
            sustainability: -10
          }
        },
        startup: {
          product: {
            development: 30,
            innovation: 25,
            quality: 15,
            marketFit: 20,
            mvpProgress: 25
          },
          market: {
            userGrowth: 30,
            userTraction: 25,
            brandReputation: 20,
            socialPresence: 25,
            marketFit: 15
          },
          finances: {
            burnRate: 60000,
            cash: -100000,
            revenue: 50000,
            valuation: 4000000
          }
        },
        relationships: {
          customers: 25,
          investors: 30,
          community: 20,
          employees: -5
        },
        triggerMilestone: 'market_defense_001'
      }
    },
    {
      id: 'differentiation_focus',
      text: 'Focus on unique value: Double down on your key differentiators.',
      impact: {
        founder: {
          wellBeing: {
            energy: -20,
            stress: 25,
            health: -10
          },
          skills: {
            growth: 25,
            technical: 20,
            execution: 15,
            leadership: 15,
            marketing: 15,
            networking: 10,
            fundraising: 15,
            sustainability: 10
          }
        },
        startup: {
          product: {
            innovation: 30,
            quality: 25,
            marketFit: 25,
            development: 20,
            mvpProgress: 15
          },
          market: {
            marketFit: 30,
            brandReputation: 25,
            userTraction: 20,
            socialPresence: 15,
            userGrowth: 15
          },
          finances: {
            burnRate: 40000,
            cash: -50000,
            revenue: 45000,
            valuation: 3000000
          }
        },
        relationships: {
          customers: 30,
          employees: 20,
          investors: 25,
          community: 15
        },
        triggerMilestone: 'unique_positioning_001'
      }
    }
  ]
}; 