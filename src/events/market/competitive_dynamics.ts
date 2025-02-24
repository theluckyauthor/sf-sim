import { GameEvent, GamePhase } from '../../types/stats';

// Market Positioning Strategy
export const marketPositioningStrategy: GameEvent = {
  id: 'market_positioning_001',
  category: 'market',
  title: 'Strategic Market Position',
  description: 'In response to competitive pressure, you need to clearly define your market position. This decision will shape your product roadmap and marketing strategy.',
  
  conditions: {
    requiredPhase: GamePhase.BOOTSTRAPPING,
    activeMilestone: 'competitive_response_001'
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
      id: 'premium_segment',
      text: 'Position as a premium solution with higher quality and better service.',
      impact: {
        founder: {
          wellBeing: {
            energy: -20,
            stress: 25,
            health: -10
          },
          skills: {
            leadership: 20,
            execution: 25,
            technical: 15,
            growth: 20,
            marketing: 30,
            networking: 25,
            fundraising: 25,
            sustainability: 20
          }
        },
        startup: {
          team: {
            productivity: 25,
            morale: 20,
            culture: 15,
            size: 0
          },
          product: {
            development: 30,
            quality: 35,
            innovation: 25,
            marketFit: 20,
            mvpProgress: 15
          },
          finances: {
            burnRate: 25000,
            cash: -40000,
            revenue: 35000,
            valuation: 2000000
          }
        },
        relationships: {
          employees: 20,
          customers: 30,
          investors: 35,
          community: 25
        },
        triggerMilestone: 'premium_positioning_001'
      }
    },
    {
      id: 'market_disruption',
      text: 'Disrupt the market with an innovative approach and aggressive pricing.',
      impact: {
        founder: {
          wellBeing: {
            energy: -25,
            stress: 30,
            health: -15
          },
          skills: {
            leadership: 25,
            execution: 30,
            technical: 20,
            growth: 35,
            marketing: 25,
            networking: 20,
            fundraising: 30,
            sustainability: 15
          }
        },
        startup: {
          team: {
            productivity: 30,
            morale: 25,
            culture: 20,
            size: 0
          },
          product: {
            development: 35,
            quality: 25,
            innovation: 35,
            marketFit: 30,
            mvpProgress: 25
          },
          finances: {
            burnRate: 35000,
            cash: -50000,
            revenue: 25000,
            valuation: 2500000
          }
        },
        relationships: {
          employees: 25,
          customers: 35,
          investors: 30,
          community: 30
        },
        triggerMilestone: 'market_disruption_001'
      }
    }
  ]
};

// Feature Development Race
export const featureDevelopmentRace: GameEvent = {
  id: 'feature_race_001',
  category: 'market',
  title: 'Feature Development Strategy',
  description: 'Competitors are rapidly adding features. You need to decide how to evolve your product while maintaining quality and team focus.',
  
  conditions: {
    requiredPhase: GamePhase.BOOTSTRAPPING,
    activeMilestone: ['premium_positioning_001', 'market_disruption_001']
  },
  
  impact: {
    founder: {
      wellBeing: {
        energy: -15,
        stress: 25,
        health: -10
      }
    }
  },
  
  choices: [
    {
      id: 'focused_innovation',
      text: 'Focus on developing unique, innovative features that differentiate your product.',
      impact: {
        founder: {
          wellBeing: {
            energy: -20,
            stress: 25,
            health: -10
          },
          skills: {
            leadership: 20,
            execution: 25,
            technical: 30,
            growth: 20,
            marketing: 15,
            networking: 15,
            fundraising: 20,
            sustainability: 25
          }
        },
        startup: {
          team: {
            productivity: 30,
            morale: 25,
            culture: 20,
            size: 0
          },
          product: {
            development: 35,
            quality: 30,
            innovation: 40,
            marketFit: 25,
            mvpProgress: 30
          }
        },
        relationships: {
          employees: 25,
          customers: 30,
          investors: 35,
          community: 20
        },
        triggerMilestone: 'innovation_focus_001'
      }
    },
    {
      id: 'rapid_parity',
      text: 'Quickly match competitor features while maintaining your core advantages.',
      impact: {
        founder: {
          wellBeing: {
            energy: -25,
            stress: 30,
            health: -15
          },
          skills: {
            leadership: 25,
            execution: 30,
            technical: 25,
            growth: 25,
            marketing: 20,
            networking: 15,
            fundraising: 15,
            sustainability: 15
          }
        },
        startup: {
          team: {
            productivity: 35,
            morale: 20,
            culture: 15,
            size: 0
          },
          product: {
            development: 40,
            quality: 25,
            innovation: 20,
            marketFit: 30,
            mvpProgress: 35
          }
        },
        relationships: {
          employees: 20,
          customers: 25,
          investors: 20,
          community: 15
        },
        triggerMilestone: 'feature_parity_001'
      }
    }
  ]
};

// Strategic Partnership
export const strategicPartnership: GameEvent = {
  id: 'strategic_partnership_001',
  category: 'market',
  title: 'Partnership Opportunity',
  description: 'A potential strategic partnership could strengthen your market position. You need to evaluate the opportunity and its implications.',
  
  conditions: {
    requiredPhase: GamePhase.BOOTSTRAPPING,
    activeMilestone: ['innovation_focus_001', 'feature_parity_001']
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
      id: 'deep_integration',
      text: 'Pursue deep technical integration with a major platform player.',
      impact: {
        founder: {
          wellBeing: {
            energy: -25,
            stress: 30,
            health: -10
          },
          skills: {
            leadership: 25,
            execution: 30,
            technical: 35,
            growth: 25,
            marketing: 20,
            networking: 30,
            fundraising: 25,
            sustainability: 20
          }
        },
        startup: {
          team: {
            productivity: 30,
            morale: 25,
            culture: 20,
            size: 0
          },
          product: {
            development: 35,
            quality: 30,
            innovation: 25,
            marketFit: 35,
            mvpProgress: 30
          },
          finances: {
            burnRate: 30000,
            cash: -45000,
            revenue: 50000,
            valuation: 3000000
          }
        },
        relationships: {
          employees: 25,
          customers: 35,
          investors: 40,
          community: 30
        },
        triggerMilestone: 'platform_integration_001'
      }
    },
    {
      id: 'strategic_alliance',
      text: 'Form a strategic alliance while maintaining product independence.',
      impact: {
        founder: {
          wellBeing: {
            energy: -20,
            stress: 25,
            health: -5
          },
          skills: {
            leadership: 30,
            execution: 25,
            technical: 20,
            growth: 30,
            marketing: 25,
            networking: 35,
            fundraising: 30,
            sustainability: 25
          }
        },
        startup: {
          team: {
            productivity: 25,
            morale: 30,
            culture: 25,
            size: 0
          },
          product: {
            development: 25,
            quality: 25,
            innovation: 30,
            marketFit: 30,
            mvpProgress: 25
          },
          finances: {
            burnRate: 20000,
            cash: -30000,
            revenue: 40000,
            valuation: 2500000
          }
        },
        relationships: {
          employees: 30,
          customers: 30,
          investors: 35,
          community: 35
        },
        triggerMilestone: 'strategic_alliance_001'
      }
    }
  ]
}; 