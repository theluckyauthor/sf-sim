import { GameEvent, GamePhase } from '../../types/stats';

// Strategic Pitch Refinement
export const strategicPitchRefinement: GameEvent = {
  id: 'pitch_refinement_001',
  category: 'funding',
  title: 'Pitch Evolution',
  description: 'Based on investor feedback, you need to refine your pitch strategy. This decision will shape how you position the company to future investors.',
  
  conditions: {
    requiredPhase: GamePhase.FUNDRAISING,
    activeMilestone: 'investor_feedback_001'
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
      id: 'vision_focus',
      text: 'Emphasize the long-term vision and market transformation potential.',
      impact: {
        founder: {
          wellBeing: {
            energy: -20,
            stress: 25,
            health: -10
          },
          skills: {
            leadership: 30,
            execution: 20,
            technical: 15,
            growth: 25,
            marketing: 30,
            networking: 35,
            fundraising: 40,
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
            development: 20,
            quality: 25,
            innovation: 35,
            marketFit: 30,
            mvpProgress: 20
          },
          finances: {
            burnRate: 20000,
            cash: -30000,
            revenue: 25000,
            valuation: 3000000
          }
        },
        relationships: {
          employees: 25,
          customers: 20,
          investors: 40,
          community: 30
        },
        triggerMilestone: 'vision_pitch_001'
      }
    },
    {
      id: 'metrics_focus',
      text: 'Double down on traction metrics and concrete growth indicators.',
      impact: {
        founder: {
          wellBeing: {
            energy: -25,
            stress: 30,
            health: -15
          },
          skills: {
            leadership: 25,
            execution: 35,
            technical: 20,
            growth: 30,
            marketing: 25,
            networking: 30,
            fundraising: 35,
            sustainability: 30
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
            development: 25,
            quality: 30,
            innovation: 25,
            marketFit: 35,
            mvpProgress: 30
          },
          finances: {
            burnRate: 25000,
            cash: -35000,
            revenue: 40000,
            valuation: 2500000
          }
        },
        relationships: {
          employees: 20,
          customers: 35,
          investors: 35,
          community: 25
        },
        triggerMilestone: 'metrics_pitch_001'
      }
    }
  ]
};

// Strategic Direction Pivot
export const strategicPivot: GameEvent = {
  id: 'strategic_pivot_001',
  category: 'funding',
  title: 'Strategic Direction',
  description: 'Investors have highlighted potential opportunities in adjacent markets. You need to decide whether to adjust your strategy.',
  
  conditions: {
    requiredPhase: GamePhase.FUNDRAISING,
    activeMilestone: ['vision_pitch_001', 'metrics_pitch_001']
  },
  
  impact: {
    founder: {
      wellBeing: {
        energy: -20,
        stress: 25,
        health: -10
      }
    }
  },
  
  choices: [
    {
      id: 'market_expansion',
      text: 'Expand into suggested markets while maintaining core focus.',
      impact: {
        founder: {
          wellBeing: {
            energy: -25,
            stress: 30,
            health: -15
          },
          skills: {
            leadership: 30,
            execution: 35,
            technical: 25,
            growth: 40,
            marketing: 35,
            networking: 30,
            fundraising: 35,
            sustainability: 25
          }
        },
        startup: {
          team: {
            productivity: 30,
            morale: 25,
            culture: 20,
            size: 1
          },
          product: {
            development: 35,
            quality: 30,
            innovation: 35,
            marketFit: 40,
            mvpProgress: 30
          },
          finances: {
            burnRate: 35000,
            cash: -50000,
            revenue: 45000,
            valuation: 4000000
          }
        },
        relationships: {
          employees: 25,
          customers: 35,
          investors: 40,
          community: 30
        },
        triggerMilestone: 'expansion_strategy_001'
      }
    },
    {
      id: 'core_focus',
      text: 'Double down on current market with enhanced execution.',
      impact: {
        founder: {
          wellBeing: {
            energy: -20,
            stress: 25,
            health: -10
          },
          skills: {
            leadership: 25,
            execution: 40,
            technical: 30,
            growth: 30,
            marketing: 30,
            networking: 25,
            fundraising: 30,
            sustainability: 35
          }
        },
        startup: {
          team: {
            productivity: 35,
            morale: 30,
            culture: 35,
            size: 1
          },
          product: {
            development: 40,
            quality: 35,
            innovation: 30,
            marketFit: 35,
            mvpProgress: 35
          },
          finances: {
            burnRate: 25000,
            cash: -35000,
            revenue: 50000,
            valuation: 3500000
          }
        },
        relationships: {
          employees: 35,
          customers: 40,
          investors: 30,
          community: 35
        },
        triggerMilestone: 'core_focus_001'
      }
    }
  ]
};

// Board Formation Strategy
export const boardFormation: GameEvent = {
  id: 'board_formation_001',
  category: 'funding',
  title: 'Board Structure',
  description: 'As the company grows, you need to establish a formal board structure. This will shape company governance and future fundraising.',
  
  conditions: {
    requiredPhase: GamePhase.FUNDRAISING,
    activeMilestone: ['expansion_strategy_001', 'core_focus_001']
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
      id: 'strategic_board',
      text: 'Build a board focused on strategic guidance and industry expertise.',
      impact: {
        founder: {
          wellBeing: {
            energy: -20,
            stress: 25,
            health: -10
          },
          skills: {
            leadership: 35,
            execution: 25,
            technical: 20,
            growth: 30,
            marketing: 30,
            networking: 40,
            fundraising: 35,
            sustainability: 30
          }
        },
        startup: {
          team: {
            productivity: 30,
            morale: 25,
            culture: 30,
            size: 0
          },
          product: {
            development: 25,
            quality: 30,
            innovation: 35,
            marketFit: 35,
            mvpProgress: 25
          },
          finances: {
            burnRate: 30000,
            cash: -40000,
            revenue: 55000,
            valuation: 5000000
          }
        },
        relationships: {
          employees: 30,
          customers: 35,
          investors: 45,
          community: 35
        },
        triggerMilestone: 'strategic_board_001'
      }
    },
    {
      id: 'operational_board',
      text: 'Create a board with strong operational and financial oversight.',
      impact: {
        founder: {
          wellBeing: {
            energy: -25,
            stress: 30,
            health: -15
          },
          skills: {
            leadership: 30,
            execution: 35,
            technical: 25,
            growth: 25,
            marketing: 25,
            networking: 35,
            fundraising: 40,
            sustainability: 35
          }
        },
        startup: {
          team: {
            productivity: 35,
            morale: 30,
            culture: 25,
            size: 0
          },
          product: {
            development: 30,
            quality: 35,
            innovation: 30,
            marketFit: 30,
            mvpProgress: 30
          },
          finances: {
            burnRate: 25000,
            cash: -35000,
            revenue: 60000,
            valuation: 4500000
          }
        },
        relationships: {
          employees: 25,
          customers: 30,
          investors: 40,
          community: 30
        },
        triggerMilestone: 'operational_board_001'
      }
    }
  ]
}; 