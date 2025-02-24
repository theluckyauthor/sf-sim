import { GameEvent, GamePhase } from '../../types/stats';

// Team Building Initiative
export const teamBuildingInitiative: GameEvent = {
  id: 'team_building_initiative_001',
  category: 'team',
  title: 'Rebuilding Team Unity',
  description: 'After the recent conflict, the team needs structured rebuilding efforts. You have to choose how to approach team healing and unity.',
  
  conditions: {
    requiredPhase: GamePhase.BOOTSTRAPPING,
    activeMilestone: 'team_conflict_resolution_001'
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
      id: 'structured_workshops',
      text: 'Invest in professional team-building workshops and conflict resolution training.',
      impact: {
        founder: {
          wellBeing: {
            energy: -20,
            stress: -10,
            health: -5
          },
          skills: {
            leadership: 25,
            execution: 15,
            technical: 5,
            growth: 10,
            marketing: 5,
            networking: 15,
            fundraising: 10,
            sustainability: 20
          }
        },
        startup: {
          team: {
            productivity: 25,
            morale: 30,
            culture: 35,
            size: 0
          },
          finances: {
            burnRate: 15000,
            cash: -25000,
            revenue: 5000,
            valuation: 500000
          }
        },
        relationships: {
          employees: 35,
          customers: 10,
          investors: 15,
          community: 20
        },
        triggerMilestone: 'professional_development_001'
      }
    },
    {
      id: 'organic_activities',
      text: 'Organize informal team activities and create natural bonding opportunities.',
      impact: {
        founder: {
          wellBeing: {
            energy: -15,
            stress: -15,
            health: -5
          },
          skills: {
            leadership: 15,
            execution: 10,
            technical: 5,
            growth: 15,
            marketing: 10,
            networking: 20,
            fundraising: 5,
            sustainability: 15
          }
        },
        startup: {
          team: {
            productivity: 20,
            morale: 25,
            culture: 30,
            size: 0
          },
          finances: {
            burnRate: 5000,
            cash: -10000,
            revenue: 8000,
            valuation: 300000
          }
        },
        relationships: {
          employees: 30,
          customers: 15,
          investors: 10,
          community: 25
        },
        triggerMilestone: 'team_bonding_001'
      }
    }
  ]
};

// Culture Reinforcement
export const cultureReinforcement: GameEvent = {
  id: 'culture_reinforcement_001',
  category: 'team',
  title: 'Culture Code Evolution',
  description: 'The recent conflict highlighted the need for stronger cultural foundations. It\'s time to formalize or adjust company values and practices.',
  
  conditions: {
    requiredPhase: GamePhase.BOOTSTRAPPING,
    activeMilestone: ['professional_development_001', 'team_bonding_001']
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
      id: 'formal_values',
      text: 'Create a detailed culture document with explicit values and practices.',
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
            technical: 5,
            growth: 15,
            marketing: 10,
            networking: 15,
            fundraising: 20,
            sustainability: 25
          }
        },
        startup: {
          team: {
            productivity: 25,
            morale: 20,
            culture: 40,
            size: 0
          },
          product: {
            development: 15,
            quality: 20,
            innovation: 15,
            marketFit: 10,
            mvpProgress: 10
          }
        },
        relationships: {
          employees: 30,
          customers: 15,
          investors: 25,
          community: 20
        },
        triggerMilestone: 'culture_codification_001'
      }
    },
    {
      id: 'lived_values',
      text: 'Focus on demonstrating values through leadership actions and daily practices.',
      impact: {
        founder: {
          wellBeing: {
            energy: -15,
            stress: 15,
            health: -5
          },
          skills: {
            leadership: 25,
            execution: 15,
            technical: 10,
            growth: 20,
            marketing: 15,
            networking: 20,
            fundraising: 15,
            sustainability: 20
          }
        },
        startup: {
          team: {
            productivity: 30,
            morale: 35,
            culture: 35,
            size: 0
          },
          product: {
            development: 20,
            quality: 25,
            innovation: 20,
            marketFit: 15,
            mvpProgress: 15
          }
        },
        relationships: {
          employees: 35,
          customers: 20,
          investors: 15,
          community: 25
        },
        triggerMilestone: 'culture_embodiment_001'
      }
    }
  ]
};

// Hiring Strategy Adjustment
export const hiringStrategyAdjustment: GameEvent = {
  id: 'hiring_strategy_adjustment_001',
  category: 'team',
  title: 'Future Team Building',
  description: 'Learning from past conflicts, you need to adjust your hiring strategy to build a more cohesive team.',
  
  conditions: {
    requiredPhase: GamePhase.BOOTSTRAPPING,
    activeMilestone: ['culture_codification_001', 'culture_embodiment_001']
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
      id: 'culture_first',
      text: 'Prioritize cultural fit and soft skills in hiring, even if technical skills are slightly lower.',
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
            technical: 10,
            growth: 15,
            marketing: 20,
            networking: 25,
            fundraising: 15,
            sustainability: 25
          }
        },
        startup: {
          team: {
            productivity: 20,
            morale: 35,
            culture: 40,
            size: 1
          },
          product: {
            development: 15,
            quality: 20,
            innovation: 25,
            marketFit: 25,
            mvpProgress: 15
          }
        },
        relationships: {
          employees: 35,
          customers: 25,
          investors: 15,
          community: 30
        },
        triggerMilestone: 'culture_hiring_001'
      }
    },
    {
      id: 'skills_first',
      text: 'Focus on technical excellence with enhanced onboarding for cultural integration.',
      impact: {
        founder: {
          wellBeing: {
            energy: -20,
            stress: 25,
            health: -10
          },
          skills: {
            leadership: 25,
            execution: 25,
            technical: 25,
            growth: 20,
            marketing: 15,
            networking: 15,
            fundraising: 20,
            sustainability: 15
          }
        },
        startup: {
          team: {
            productivity: 35,
            morale: 25,
            culture: 25,
            size: 1
          },
          product: {
            development: 30,
            quality: 35,
            innovation: 30,
            marketFit: 20,
            mvpProgress: 25
          }
        },
        relationships: {
          employees: 25,
          customers: 30,
          investors: 25,
          community: 20
        },
        triggerMilestone: 'technical_hiring_001'
      }
    }
  ]
}; 