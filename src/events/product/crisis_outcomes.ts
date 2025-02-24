import { GameEvent, GamePhase } from '../../types/stats';

// Process Improvement Event
export const processReview: GameEvent = {
  id: 'process_review_001',
  category: 'product',
  title: 'Process Review Meeting',
  description: 'After the critical bug incident, the team wants to discuss improving development and QA processes. This could mean significant changes to how you work.',
  
  conditions: {
    requiredPhase: GamePhase.BOOTSTRAPPING,
    activeMilestone: 'crisis_management_001'
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
      id: 'comprehensive_process',
      text: 'Implement comprehensive testing and code review processes, even if it slows development.',
      impact: {
        founder: {
          wellBeing: {
            energy: -20,
            stress: -10,
            health: 5
          },
          skills: {
            technical: 20,
            execution: 15,
            leadership: 15,
            growth: -5,
            marketing: 0,
            networking: 0,
            fundraising: 0,
            sustainability: 20
          }
        },
        startup: {
          product: {
            quality: 30,
            development: 15,
            innovation: 10,
            marketFit: 15,
            mvpProgress: -10
          },
          team: {
            productivity: 20,
            morale: 25,
            culture: 20,
            size: 0
          }
        },
        relationships: {
          customers: 15,
          employees: 25,
          investors: -5,
          community: 10
        },
        triggerMilestone: 'quality_first_001'
      }
    },
    {
      id: 'balanced_approach',
      text: 'Add key safeguards while maintaining development speed.',
      impact: {
        founder: {
          wellBeing: {
            energy: -15,
            stress: 10,
            health: 0
          },
          skills: {
            technical: 15,
            execution: 20,
            leadership: 10,
            growth: 10,
            marketing: 5,
            networking: 0,
            fundraising: 5,
            sustainability: 10
          }
        },
        startup: {
          product: {
            quality: 20,
            development: 20,
            innovation: 15,
            marketFit: 20,
            mvpProgress: 5
          },
          team: {
            productivity: 15,
            morale: 15,
            culture: 15,
            size: 0
          }
        },
        relationships: {
          customers: 20,
          employees: 15,
          investors: 10,
          community: 15
        },
        triggerMilestone: 'balanced_process_001'
      }
    }
  ]
};

// Technical Debt Management
export const technicalDebtCrisis: GameEvent = {
  id: 'technical_debt_001',
  category: 'product',
  title: 'Technical Debt Reckoning',
  description: 'The post-mortem reveals significant technical debt that contributed to the bug. The team is divided on how to address it.',
  
  conditions: {
    requiredPhase: GamePhase.BOOTSTRAPPING,
    activeMilestone: ['quality_first_001', 'balanced_process_001']
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
      id: 'major_refactor',
      text: 'Pause new features for a major codebase refactoring sprint.',
      impact: {
        founder: {
          wellBeing: {
            energy: -25,
            stress: 25,
            health: -10
          },
          skills: {
            technical: 25,
            execution: 20,
            leadership: 15,
            growth: -10,
            marketing: 0,
            networking: 0,
            fundraising: -5,
            sustainability: 25
          }
        },
        startup: {
          product: {
            quality: 35,
            development: 25,
            innovation: 15,
            marketFit: 10,
            mvpProgress: -15
          },
          team: {
            productivity: 25,
            morale: 20,
            culture: 15,
            size: 0
          },
          finances: {
            burnRate: 30000,
            cash: -40000,
            revenue: -10000,
            valuation: -500000
          }
        },
        relationships: {
          customers: -10,
          employees: 25,
          investors: -15,
          community: 5
        },
        triggerMilestone: 'codebase_cleanup_001'
      }
    },
    {
      id: 'gradual_improvement',
      text: 'Address technical debt gradually alongside new features.',
      impact: {
        founder: {
          wellBeing: {
            energy: -15,
            stress: 15,
            health: -5
          },
          skills: {
            technical: 15,
            execution: 20,
            leadership: 10,
            growth: 5,
            marketing: 5,
            networking: 5,
            fundraising: 5,
            sustainability: 15
          }
        },
        startup: {
          product: {
            quality: 20,
            development: 15,
            innovation: 20,
            marketFit: 15,
            mvpProgress: 10
          },
          team: {
            productivity: 15,
            morale: 15,
            culture: 10,
            size: 0
          },
          finances: {
            burnRate: 20000,
            cash: -20000,
            revenue: 5000,
            valuation: 200000
          }
        },
        relationships: {
          customers: 10,
          employees: 15,
          investors: 10,
          community: 10
        },
        triggerMilestone: 'steady_improvement_001'
      }
    }
  ]
};

// Team Culture Impact
export const teamCultureFallout: GameEvent = {
  id: 'team_culture_crisis_001',
  category: 'product',
  title: 'Team Culture Moment',
  description: 'The bug crisis has sparked discussions about work-life balance and on-call responsibilities. The team needs clear direction.',
  
  conditions: {
    requiredPhase: GamePhase.BOOTSTRAPPING,
    activeMilestone: ['codebase_cleanup_001', 'steady_improvement_001']
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
      id: 'structured_support',
      text: 'Implement structured on-call rotations and clear emergency procedures.',
      impact: {
        founder: {
          wellBeing: {
            energy: -15,
            stress: -10,
            health: 5
          },
          skills: {
            leadership: 25,
            execution: 15,
            technical: 10,
            growth: 5,
            marketing: 0,
            networking: 5,
            fundraising: 5,
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
          product: {
            quality: 20,
            development: 15,
            innovation: 10,
            marketFit: 15,
            mvpProgress: 10
          },
          finances: {
            burnRate: 25000,
            cash: -30000,
            revenue: 10000,
            valuation: 500000
          }
        },
        relationships: {
          employees: 35,
          customers: 20,
          investors: 15,
          community: 20
        },
        triggerMilestone: 'sustainable_culture_001'
      }
    },
    {
      id: 'flexible_approach',
      text: 'Keep things flexible but provide additional compensation for crisis management.',
      impact: {
        founder: {
          wellBeing: {
            energy: -20,
            stress: 20,
            health: -5
          },
          skills: {
            leadership: 15,
            execution: 20,
            technical: 15,
            growth: 10,
            marketing: 5,
            networking: 5,
            fundraising: -5,
            sustainability: 10
          }
        },
        startup: {
          team: {
            productivity: 20,
            morale: 15,
            culture: 20,
            size: 0
          },
          product: {
            quality: 15,
            development: 20,
            innovation: 15,
            marketFit: 10,
            mvpProgress: 15
          },
          finances: {
            burnRate: 35000,
            cash: -40000,
            revenue: 15000,
            valuation: 300000
          }
        },
        relationships: {
          employees: 25,
          customers: 15,
          investors: 10,
          community: 15
        },
        triggerMilestone: 'flexible_culture_001'
      }
    }
  ]
};

// Crisis Prevention System
export const crisisPreventionPlanning: GameEvent = {
  id: 'crisis_prevention_001',
  category: 'product',
  title: 'Crisis Prevention Planning',
  description: 'With processes improving and culture stabilizing, it\'s time to implement systems to prevent future crises.',
  
  conditions: {
    requiredPhase: GamePhase.BOOTSTRAPPING,
    activeMilestone: ['sustainable_culture_001', 'flexible_culture_001']
  },
  
  impact: {
    founder: {
      wellBeing: {
        energy: -10,
        stress: 10,
        health: 0
      }
    }
  },
  
  choices: [
    {
      id: 'automated_systems',
      text: 'Invest in comprehensive monitoring and automated response systems.',
      impact: {
        founder: {
          wellBeing: {
            energy: -20,
            stress: 15,
            health: -5
          },
          skills: {
            technical: 25,
            execution: 20,
            leadership: 15,
            growth: 10,
            marketing: 0,
            networking: 5,
            fundraising: 5,
            sustainability: 20
          }
        },
        startup: {
          product: {
            quality: 30,
            development: 25,
            innovation: 20,
            marketFit: 15,
            mvpProgress: 10
          },
          team: {
            productivity: 25,
            morale: 20,
            culture: 15,
            size: 0
          },
          finances: {
            burnRate: 40000,
            cash: -50000,
            revenue: 20000,
            valuation: 1000000
          }
        },
        relationships: {
          customers: 25,
          employees: 20,
          investors: 15,
          community: 15
        },
        triggerMilestone: 'automated_prevention_001'
      }
    },
    {
      id: 'human_centered',
      text: 'Focus on team training and human-centered prevention strategies.',
      impact: {
        founder: {
          wellBeing: {
            energy: -15,
            stress: 10,
            health: 0
          },
          skills: {
            leadership: 25,
            execution: 15,
            technical: 15,
            growth: 10,
            marketing: 5,
            networking: 10,
            fundraising: 5,
            sustainability: 15
          }
        },
        startup: {
          product: {
            quality: 20,
            development: 15,
            innovation: 25,
            marketFit: 20,
            mvpProgress: 15
          },
          team: {
            productivity: 20,
            morale: 25,
            culture: 30,
            size: 0
          },
          finances: {
            burnRate: 25000,
            cash: -30000,
            revenue: 25000,
            valuation: 800000
          }
        },
        relationships: {
          customers: 20,
          employees: 30,
          investors: 10,
          community: 20
        },
        triggerMilestone: 'human_prevention_001'
      }
    }
  ]
}; 