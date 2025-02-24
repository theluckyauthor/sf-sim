import { GameEvent, GamePhase } from '../../types/stats';

// Work-Life Balance Initiative
export const workLifeBalanceInitiative: GameEvent = {
  id: 'work_life_balance_001',
  category: 'personal',
  title: 'Sustainable Work Culture',
  description: 'After recognizing burnout symptoms, you need to establish sustainable work practices for yourself and the team.',
  
  conditions: {
    requiredPhase: GamePhase.BOOTSTRAPPING,
    activeMilestone: 'burnout_warning_001'
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
      id: 'structured_boundaries',
      text: 'Implement strict work hours and communication boundaries for everyone.',
      impact: {
        founder: {
          wellBeing: {
            energy: 25,
            stress: -30,
            health: 20
          },
          skills: {
            leadership: 25,
            execution: 15,
            technical: 10,
            growth: 15,
            marketing: 10,
            networking: 15,
            fundraising: 10,
            sustainability: 35
          }
        },
        startup: {
          team: {
            productivity: 20,
            morale: 35,
            culture: 40,
            size: 0
          },
          product: {
            development: 15,
            quality: 25,
            innovation: 20,
            marketFit: 15,
            mvpProgress: 10
          },
          finances: {
            burnRate: -5000,
            cash: -10000,
            revenue: 15000,
            valuation: 500000
          }
        },
        relationships: {
          employees: 35,
          customers: 15,
          investors: 20,
          community: 25
        },
        triggerMilestone: 'work_boundaries_001'
      }
    },
    {
      id: 'flexible_autonomy',
      text: 'Promote flexible schedules and trust team members to manage their time.',
      impact: {
        founder: {
          wellBeing: {
            energy: 20,
            stress: -25,
            health: 15
          },
          skills: {
            leadership: 30,
            execution: 20,
            technical: 15,
            growth: 20,
            marketing: 15,
            networking: 20,
            fundraising: 15,
            sustainability: 30
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
            development: 20,
            quality: 20,
            innovation: 25,
            marketFit: 20,
            mvpProgress: 15
          },
          finances: {
            burnRate: 0,
            cash: -5000,
            revenue: 20000,
            valuation: 750000
          }
        },
        relationships: {
          employees: 40,
          customers: 20,
          investors: 15,
          community: 30
        },
        triggerMilestone: 'flexible_work_001'
      }
    }
  ]
};

// Team Wellness Program
export const teamWellnessProgram: GameEvent = {
  id: 'team_wellness_001',
  category: 'personal',
  title: 'Team Wellness Initiative',
  description: 'The team needs structured support for maintaining mental and physical health while pursuing ambitious goals.',
  
  conditions: {
    requiredPhase: GamePhase.BOOTSTRAPPING,
    activeMilestone: ['work_boundaries_001', 'flexible_work_001']
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
      id: 'comprehensive_benefits',
      text: 'Invest in comprehensive wellness benefits and mental health support.',
      impact: {
        founder: {
          wellBeing: {
            energy: 20,
            stress: -25,
            health: 25
          },
          skills: {
            leadership: 30,
            execution: 20,
            technical: 10,
            growth: 15,
            marketing: 15,
            networking: 20,
            fundraising: 15,
            sustainability: 35
          }
        },
        startup: {
          team: {
            productivity: 30,
            morale: 40,
            culture: 35,
            size: 0
          },
          finances: {
            burnRate: 25000,
            cash: -35000,
            revenue: 20000,
            valuation: 1000000
          }
        },
        relationships: {
          employees: 45,
          customers: 20,
          investors: 25,
          community: 30
        },
        triggerMilestone: 'wellness_benefits_001'
      }
    },
    {
      id: 'team_activities',
      text: 'Organize regular team wellness activities and workshops.',
      impact: {
        founder: {
          wellBeing: {
            energy: 15,
            stress: -20,
            health: 20
          },
          skills: {
            leadership: 25,
            execution: 15,
            technical: 15,
            growth: 20,
            marketing: 20,
            networking: 25,
            fundraising: 20,
            sustainability: 30
          }
        },
        startup: {
          team: {
            productivity: 25,
            morale: 35,
            culture: 40,
            size: 0
          },
          finances: {
            burnRate: 15000,
            cash: -20000,
            revenue: 25000,
            valuation: 800000
          }
        },
        relationships: {
          employees: 40,
          customers: 25,
          investors: 20,
          community: 35
        },
        triggerMilestone: 'wellness_activities_001'
      }
    }
  ]
};

// Leadership Style Evolution
export const leadershipStyleEvolution: GameEvent = {
  id: 'leadership_evolution_001',
  category: 'personal',
  title: 'Sustainable Leadership',
  description: 'Your leadership style needs to evolve to better support long-term sustainability while maintaining startup momentum.',
  
  conditions: {
    requiredPhase: GamePhase.BOOTSTRAPPING,
    activeMilestone: ['wellness_benefits_001', 'wellness_activities_001']
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
      id: 'empowerment_focus',
      text: 'Focus on empowering the team through delegation and mentorship.',
      impact: {
        founder: {
          wellBeing: {
            energy: 25,
            stress: -30,
            health: 20
          },
          skills: {
            leadership: 35,
            execution: 20,
            technical: 15,
            growth: 25,
            marketing: 20,
            networking: 25,
            fundraising: 20,
            sustainability: 35
          }
        },
        startup: {
          team: {
            productivity: 30,
            morale: 35,
            culture: 40,
            size: 0
          },
          product: {
            development: 25,
            quality: 30,
            innovation: 35,
            marketFit: 25,
            mvpProgress: 20
          }
        },
        relationships: {
          employees: 40,
          customers: 25,
          investors: 30,
          community: 35
        },
        triggerMilestone: 'empowering_leadership_001'
      }
    },
    {
      id: 'balanced_leadership',
      text: 'Develop a balanced approach between hands-on leadership and delegation.',
      impact: {
        founder: {
          wellBeing: {
            energy: 20,
            stress: -25,
            health: 15
          },
          skills: {
            leadership: 30,
            execution: 25,
            technical: 20,
            growth: 20,
            marketing: 15,
            networking: 20,
            fundraising: 25,
            sustainability: 30
          }
        },
        startup: {
          team: {
            productivity: 35,
            morale: 30,
            culture: 35,
            size: 0
          },
          product: {
            development: 30,
            quality: 35,
            innovation: 30,
            marketFit: 30,
            mvpProgress: 25
          }
        },
        relationships: {
          employees: 35,
          customers: 30,
          investors: 35,
          community: 30
        },
        triggerMilestone: 'balanced_leadership_001'
      }
    }
  ]
}; 