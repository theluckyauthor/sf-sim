import { GameEvent, GamePhase } from '../../types/stats';

export const burnoutWarning: GameEvent = {
  id: 'burnout_warning_001',
  category: 'personal',
  title: 'Burnout Warning Signs',
  description: 'You\'ve been working non-stop for weeks. Your body and mind are showing signs of severe fatigue.',
  
  conditions: {
    minimumStats: {
      'founder.wellBeing': {
        energy: 20,
        stress: 80,
        health: 30
      }
    }
  },
  
  impact: {},
  
  choices: [
    {
      id: 'take_break',
      text: 'Take a week off to recover and implement better work-life boundaries',
      impact: {
        founder: {
          wellBeing: {
            health: 30,
            energy: 40,
            stress: -40
          },
          skills: {
            sustainability: 15,
            leadership: 5,
            technical: 0,
            networking: 0,
            fundraising: 0,
            marketing: 0,
            execution: 0,
            growth: 0
          }
        },
        startup: {
          team: {
            culture: 10,
            productivity: -5,
            size: 0,
            morale: 0
          }
        },
        relationships: {
          employees: 10,
          community: 5
        }
      }
    },
    {
      id: 'push_through',
      text: 'Push through with some minor adjustments to your schedule',
      impact: {
        founder: {
          wellBeing: {
            health: -20,
            energy: -15,
            stress: 20
          },
          skills: {
            execution: 5,
            sustainability: -10,
            technical: 0,
            leadership: 0,
            networking: 0,
            fundraising: 0,
            marketing: 0,
            growth: 0
          }
        },
        startup: {
          team: {
            culture: -10,
            productivity: 5,
            size: 0,
            morale: 0
          }
        }
      }
    }
  ]
};

export const wellnessChallenge: GameEvent = {
  id: 'wellness_challenge_001',
  category: 'personal',
  title: 'Startup Wellness Challenge',
  description: 'A local startup community is organizing a month-long wellness challenge combining exercise, meditation, and healthy eating.',
  
  conditions: {
    minimumStats: {
      'founder.wellBeing': {
        energy: 30
      }
    }
  },
  
  impact: {},
  
  choices: [
    {
      id: 'join_challenge',
      text: 'Join the challenge and encourage your team to participate',
      impact: {
        founder: {
          wellBeing: {
            health: 25,
            energy: 20,
            stress: -15
          },
          skills: {
            sustainability: 10,
            leadership: 8,
            technical: 0,
            networking: 0,
            fundraising: 0,
            marketing: 0,
            execution: 0,
            growth: 0
          }
        },
        startup: {
          team: {
            morale: 15,
            culture: 20,
            productivity: 10,
            size: 0
          }
        },
        relationships: {
          employees: 15,
          community: 10
        }
      }
    },
    {
      id: 'personal_routine',
      text: 'Create your own personal wellness routine',
      impact: {
        founder: {
          wellBeing: {
            health: 15,
            energy: 15,
            stress: -10
          },
          skills: {
            sustainability: 5,
            technical: 0,
            leadership: 0,
            networking: 0,
            fundraising: 0,
            marketing: 0,
            execution: 0,
            growth: 0
          }
        }
      }
    }
  ]
};

export const mentalHealthDay: GameEvent = {
  id: 'mental_health_day_001',
  category: 'personal',
  title: 'Mental Health Awareness',
  description: 'Your team suggests implementing regular mental health days and wellness programs.',
  
  conditions: {
    minimumStats: {
      'startup.team': {
        size: 5
      }
    }
  },
  
  impact: {},
  
  choices: [
    {
      id: 'implement_program',
      text: 'Implement a comprehensive wellness program',
      impact: {
        founder: {
          wellBeing: {
            health: 15,
            energy: 10,
            stress: -20
          },
          skills: {
            leadership: 15,
            sustainability: 20,
            technical: 0,
            networking: 0,
            fundraising: 0,
            marketing: 0,
            execution: 0,
            growth: 0
          }
        },
        startup: {
          team: {
            morale: 25,
            culture: 30,
            productivity: 15,
            size: 0
          },
          finances: {
            cash: -10000,
            burnRate: 2000,
            revenue: 0,
            valuation: 0
          }
        },
        relationships: {
          employees: 25,
          community: 15
        }
      }
    },
    {
      id: 'basic_benefits',
      text: 'Offer basic mental health benefits',
      impact: {
        founder: {
          wellBeing: {
            health: 5,
            energy: 5,
            stress: -10
          },
          skills: {
            leadership: 8,
            sustainability: 10,
            technical: 0,
            networking: 0,
            fundraising: 0,
            marketing: 0,
            execution: 0,
            growth: 0
          }
        },
        startup: {
          team: {
            morale: 15,
            culture: 15,
            productivity: 10,
            size: 0
          },
          finances: {
            cash: -5000,
            burnRate: 1000,
            revenue: 0,
            valuation: 0
          }
        },
        relationships: {
          employees: 15
        }
      }
    }
  ]
};

export const morningRoutine: GameEvent = {
  id: 'morning_routine_001',
  category: 'personal',
  title: 'Establishing Morning Routine',
  description: 'You\'ve been reading about successful founders\' morning routines. Maybe it\'s time to establish your own?',
  
  conditions: {
    requiredPhase: GamePhase.SETTLING_IN,
    minimumStats: {
      'founder.wellBeing': {
        energy: 40,
        stress: 0,
        health: 30
      }
    }
  },
  
  impact: {
    founder: {
      wellBeing: {
        energy: 5,
        stress: 5,
        health: 0
      }
    }
  },
  
  choices: [
    {
      id: 'wellness_focus',
      text: 'Start each day with exercise, meditation, and healthy breakfast.',
      impact: {
        founder: {
          wellBeing: {
            energy: 15,
            stress: -10,
            health: 20
          },
          skills: {
            sustainability: 15,
            leadership: 5,
            technical: 0,
            networking: 0,
            fundraising: 0,
            marketing: 0,
            execution: 0,
            growth: 0
          }
        },
        startup: {
          team: {
            culture: 10,
            productivity: -5,
            size: 0,
            morale: 0
          }
        },
        triggerMilestone: 'healthy_habits_001'
      }
    },
    {
      id: 'work_focus',
      text: 'Use early morning hours for uninterrupted work and planning.',
      impact: {
        founder: {
          wellBeing: {
            energy: 5,
            stress: 5,
            health: -5
          },
          skills: {
            sustainability: 15,
            leadership: 5,
            technical: 3,
            networking: 0,
            fundraising: 0,
            marketing: 0,
            execution: 10,
            growth: 0
          }
        },
        startup: {
          product: {
            development: 5,
            quality: 3,
            mvpProgress: 5,
            innovation: 3,
            marketFit: 0
          }
        }
      }
    }
  ]
};

export const criticalBugDecision: GameEvent = {
  id: 'critical_bug_001',
  category: 'personal',
  title: 'Late Night Bug Alert',
  description: 'A major bug is causing the core feature to crash. Your team just reported it, and an important demo is scheduled for tomorrow morning. Your energy is already low from a long week.',
  
  conditions: {
    requiredPhase: GamePhase.BOOTSTRAPPING,
    minimumStats: {
      'founder.skills': {
        technical: 20,
        execution: 15,
        leadership: 10,
        networking: 0,
        fundraising: 0,
        marketing: 0,
        growth: 0,
        sustainability: 0
      }
    }
  },
  
  impact: {
    founder: {
      wellBeing: {
        energy: -10,
        stress: 20,
        health: 0
      }
    }
  },
  
  choices: [
    {
      id: 'work_through_night',
      text: 'Power through: Order pizza and energy drinks, work until the bug is fixed.',
      successChance: 70,
      impact: {
        founder: {
          wellBeing: {
            energy: -40,
            stress: 30,
            health: -15
          },
          skills: {
            sustainability: 15,
            leadership: 5,
            technical: 15,
            networking: 0,
            fundraising: 0,
            marketing: 0,
            execution: 10,
            growth: 0
          }
        },
        startup: {
          product: {
            mvpProgress: 5,
            quality: 15,
            development: 10,
            innovation: 0,
            marketFit: 0
          },
          team: {
            size: 0,
            morale: -10,
            productivity: -15,
            culture: -5
          }
        },
        relationships: {
          investors: 10,
          customers: 5,
          community: 0
        },
        triggerMilestone: 'crisis_management_001'
      }
    },
    {
      id: 'take_break',
      text: 'Take a break: Get some rest and tackle it fresh in the early morning.',
      impact: {
        founder: {
          wellBeing: {
            energy: 20,
            stress: -15,
            health: 10
          },
          skills: {
            sustainability: 15,
            leadership: 5,
            technical: 5,
            networking: 0,
            fundraising: 0,
            marketing: 0,
            execution: 5,
            growth: 0
          }
        },
        startup: {
          product: {
            mvpProgress: -5,
            quality: 10,
            development: 5,
            innovation: 0,
            marketFit: 0
          },
          team: {
            size: 0,
            morale: 15,
            productivity: 10,
            culture: 15
          }
        },
        relationships: {
          investors: -5,
          customers: 0,
          community: 5
        },
        triggerMilestone: 'work_life_balance_001'
      }
    }
  ]
};

export const aftermathReflection: GameEvent = {
  id: 'bug_aftermath_001',
  category: 'personal',
  title: 'Morning After',
  description: 'The critical bug situation is resolved, but the experience has sparked team discussions about sustainable work practices.',
  
  conditions: {
    requiredPhase: GamePhase.BOOTSTRAPPING,
    activeMilestone: 'crisis_management_001'
  },
  
  impact: {
    startup: {
      team: {
        size: 0,
        morale: 5,
        productivity: 5,
        culture: 5
      }
    }
  },
  
  choices: [
    {
      id: 'establish_guidelines',
      text: 'Create clear emergency protocols and work-life boundaries for the team.',
      impact: {
        founder: {
          wellBeing: {
            energy: 10,
            stress: -15,
            health: 5
          },
          skills: {
            sustainability: 15,
            leadership: 15,
            technical: 0,
            networking: 0,
            fundraising: 0,
            marketing: 0,
            execution: 10,
            growth: 5
          }
        },
        startup: {
          team: {
            size: 0,
            morale: 20,
            productivity: 15,
            culture: 25
          },
          product: {
            mvpProgress: 0,
            quality: 5,
            development: 10,
            innovation: 5,
            marketFit: 0
          }
        },
        relationships: {
          investors: 5,
          customers: 0,
          community: 15
        },
        triggerMilestone: 'sustainable_culture_001'
      }
    },
    {
      id: 'maintain_flexibility',
      text: 'Keep things informal - the team should handle crises as they come.',
      impact: {
        founder: {
          wellBeing: {
            energy: -5,
            stress: 10,
            health: 0
          },
          skills: {
            sustainability: 15,
            leadership: 5,
            technical: 5,
            networking: 0,
            fundraising: 0,
            marketing: 0,
            execution: 5,
            growth: 10
          }
        },
        startup: {
          team: {
            size: 0,
            morale: -5,
            productivity: 10,
            culture: -10
          },
          product: {
            mvpProgress: 5,
            quality: 0,
            development: 5,
            innovation: 10,
            marketFit: 0
          }
        },
        relationships: {
          investors: 10,
          customers: 5,
          community: -5
        }
      }
    }
  ]
};

export const healthyHabits: GameEvent = {
  id: 'healthy_habits_001',
  category: 'personal',
  title: 'Establishing Healthy Habits',
  description: 'As you settle into startup life, it\'s time to establish sustainable habits. How will you approach your personal well-being?',
  
  conditions: {
    requiredPhase: GamePhase.SETTLING_IN,
    minimumStats: {
      'founder.wellBeing': {
        energy: 50,
        stress: 0,
        health: 50
      }
    }
  },
  
  impact: {
    founder: {
      wellBeing: {
        energy: 5,
        stress: -5,
        health: 5
      }
    }
  },
  
  choices: [
    {
      id: 'structured_routine',
      text: 'Create a structured daily routine with dedicated time for exercise and meditation',
      successChance: 75,
      impact: {
        founder: {
          wellBeing: {
            energy: 20,
            stress: -15,
            health: 15
          },
          skills: {
            sustainability: 15,
            leadership: 5,
            technical: 0,
            networking: 0,
            fundraising: 0,
            marketing: 0,
            execution: 10,
            growth: 3
          }
        },
        startup: {
          team: {
            morale: 5,
            productivity: 8,
            culture: 5,
            size: 0
          }
        }
      }
    },
    {
      id: 'flexible_approach',
      text: 'Keep it flexible - exercise when possible and maintain work-life boundaries',
      impact: {
        founder: {
          wellBeing: {
            energy: 12,
            stress: -8,
            health: 8
          },
          skills: {
            sustainability: 15,
            leadership: 5,
            technical: 0,
            networking: 5,
            fundraising: 0,
            marketing: 0,
            execution: 5,
            growth: 5
          }
        },
        startup: {
          team: {
            morale: 8,
            productivity: 5,
            culture: 8,
            size: 0
          }
        }
      }
    }
  ]
};

export const mentalPreparation: GameEvent = {
  id: 'mental_preparation_001',
  category: 'personal',
  title: 'Mental Preparation',
  description: 'The ideation phase is mentally demanding. How will you prepare yourself for the challenges ahead?',
  
  conditions: {
    requiredPhase: GamePhase.IDEATION,
    minimumStats: {
      'founder.wellBeing': {
        energy: 40,
        stress: 20,
        health: 40
      }
    }
  },
  
  impact: {
    founder: {
      wellBeing: {
        energy: 8,
        stress: -5,
        health: 5
      }
    }
  },
  
  choices: [
    {
      id: 'mindfulness_practice',
      text: 'Start a daily mindfulness practice and join a founder support group',
      successChance: 80,
      impact: {
        founder: {
          wellBeing: {
            energy: 15,
            stress: -20,
            health: 10
          },
          skills: {
            sustainability: 15,
            leadership: 5,
            technical: 0,
            networking: 10,
            fundraising: 5,
            marketing: 0,
            execution: 0,
            growth: 5
          }
        },
        relationships: {
          community: 15,
          investors: 5,
          employees: 0
        }
      }
    },
    {
      id: 'physical_focus',
      text: 'Focus on physical exercise and outdoor activities to maintain mental clarity',
      impact: {
        founder: {
          wellBeing: {
            energy: 20,
            stress: -15,
            health: 15
          },
          skills: {
            sustainability: 15,
            leadership: 5,
            technical: 0,
            networking: 3,
            fundraising: 0,
            marketing: 0,
            execution: 10,
            growth: 3
          }
        },
        relationships: {
          community: 8,
          investors: 0,
          employees: 5
        }
      }
    }
  ]
};

export const stressManagement: GameEvent = {
  id: 'stress_management_001',
  category: 'personal',
  title: 'Fundraising Stress Management',
  description: 'The intense pressure of fundraising is taking its toll. How will you manage the stress while maintaining peak performance?',
  
  conditions: {
    requiredPhase: GamePhase.FUNDRAISING,
    minimumStats: {
      'founder.wellBeing': {
        energy: 30,
        stress: 60,
        health: 30
      }
    }
  },
  
  impact: {
    founder: {
      wellBeing: {
        energy: -5,
        stress: 10,
        health: -3
      }
    }
  },
  
  choices: [
    {
      id: 'professional_support',
      text: 'Seek professional support through therapy and executive coaching',
      successChance: 85,
      impact: {
        founder: {
          wellBeing: {
            energy: 25,
            stress: -30,
            health: 15
          },
          skills: {
            sustainability: 15,
            leadership: 12,
            technical: 0,
            networking: 5,
            fundraising: 10,
            marketing: 0,
            execution: 8,
            growth: 5
          }
        },
        startup: {
          team: {
            morale: 10,
            productivity: 15,
            culture: 12,
            size: 0
          }
        },
        relationships: {
          investors: 15,
          employees: 10,
          community: 5
        }
      }
    },
    {
      id: 'peer_support',
      text: 'Build a support network of fellow founders going through fundraising',
      impact: {
        founder: {
          wellBeing: {
            energy: 15,
            stress: -20,
            health: 10
          },
          skills: {
            sustainability: 15,
            leadership: 5,
            technical: 0,
            networking: 15,
            fundraising: 12,
            marketing: 0,
            execution: 5,
            growth: 8
          }
        },
        startup: {
          team: {
            morale: 8,
            productivity: 10,
            culture: 8,
            size: 0
          }
        },
        relationships: {
          community: 20,
          investors: 10,
          employees: 5
        }
      }
    }
  ]
};

export const executiveWellness: GameEvent = {
  id: 'executive_wellness_001',
  category: 'personal',
  title: 'Executive Wellness Program',
  description: 'As the company scales rapidly, you need to maintain your health and effectiveness as a leader. How will you prioritize your well-being?',
  
  conditions: {
    requiredPhase: GamePhase.SCALING,
    minimumStats: {
      'founder.wellBeing': {
        energy: 40,
        stress: 50,
        health: 40
      },
      'founder.skills': {
        leadership: 40,
        execution: 35
      }
    }
  },
  
  impact: {
    founder: {
      wellBeing: {
        energy: 5,
        stress: -8,
        health: 5
      }
    }
  },
  
  choices: [
    {
      id: 'comprehensive_program',
      text: 'Invest in a comprehensive executive wellness program with personal trainers and health monitoring',
      successChance: 80,
      impact: {
        founder: {
          wellBeing: {
            energy: 30,
            stress: -25,
            health: 25
          },
          skills: {
            sustainability: 15,
            leadership: 12,
            technical: 0,
            networking: 8,
            fundraising: 5,
            marketing: 5,
            execution: 10,
            growth: 15
          }
        },
        startup: {
          team: {
            morale: 15,
            productivity: 20,
            culture: 15,
            size: 0
          },
          finances: {
            cash: -50000,
            burnRate: 5000,
            revenue: 0,
            valuation: 0
          }
        },
        relationships: {
          employees: 20,
          investors: 15,
          community: 10
        }
      }
    },
    {
      id: 'work_life_integration',
      text: 'Focus on work-life integration and lead by example in maintaining boundaries',
      impact: {
        founder: {
          wellBeing: {
            energy: 20,
            stress: -20,
            health: 15
          },
          skills: {
            sustainability: 15,
            leadership: 20,
            technical: 0,
            networking: 5,
            fundraising: 0,
            marketing: 0,
            execution: 8,
            growth: 8
          }
        },
        startup: {
          team: {
            morale: 25,
            productivity: 15,
            culture: 25,
            size: 0
          }
        },
        relationships: {
          employees: 25,
          investors: 10,
          community: 15
        }
      }
    }
  ]
}; 