import { GameEvent, GamePhase } from '../../types/stats';

export const potentialCofounder: GameEvent = {
  id: 'potential_cofounder_001',
  category: 'team',
  title: 'Mission District Coffee Connection',
  description: 'At Ritual Coffee Roasters, you hit it off with a talented engineer who\'s looking to join an early-stage startup. They have impressive technical skills and startup experience, but you\'re still getting to know them personally.',
  
  conditions: {
    requiredPhase: GamePhase.IDEATION,
    requiredDistrict: 'Mission',
    minimumStats: {
      'founder.skills': {
        leadership: 20,
        networking: 15,
        technical: 0,
        fundraising: 0,
        marketing: 0,
        execution: 0,
        growth: 0,
        sustainability: 0
      }
    }
  },
  
  impact: {
    founder: {
      wellBeing: {
        energy: -5,
        stress: 10,
        health: 0
      }
    }
  },
  
  choices: [
    {
      id: 'professional_evaluation',
      text: 'Focus on professional compatibility - spend time coding together and discussing technical vision.',
      successChance: 75,
      impact: {
        founder: {
          wellBeing: {
            energy: -15,
            stress: 15,
            health: 0
          },
          skills: {
            leadership: 10,
            technical: 5,
            networking: 3,
            fundraising: 0,
            marketing: 0,
            execution: 5,
            growth: 0,
            sustainability: 0
          }
        },
        startup: {
          team: {
            size: 1,
            morale: 15,
            productivity: 25,
            culture: 10
          },
          product: {
            mvpProgress: 15,
            quality: 20,
            development: 15,
            innovation: 10,
            marketFit: 5
          }
        },
        relationships: {
          community: 10,
          investors: 15,
          employees: 0,
          customers: 0
        },
        triggerMilestone: 'cofounder_technical_001'
      }
    },
    {
      id: 'personal_connection',
      text: 'Prioritize personal rapport - spend time understanding their values and long-term aspirations.',
      successChance: 60,
      impact: {
        founder: {
          wellBeing: {
            energy: -10,
            stress: 10,
            health: 0
          },
          skills: {
            leadership: 15,
            technical: 0,
            networking: 5,
            fundraising: 5,
            marketing: 3,
            execution: 0,
            growth: 3,
            sustainability: 5
          }
        },
        startup: {
          team: {
            size: 1,
            morale: 25,
            productivity: 15,
            culture: 25
          },
          product: {
            mvpProgress: 10,
            quality: 10,
            development: 10,
            innovation: 15,
            marketFit: 8
          }
        },
        relationships: {
          community: 15,
          investors: 10,
          employees: 0,
          customers: 0
        },
        triggerMilestone: 'cofounder_cultural_001'
      }
    }
  ]
};

export const cofounderAlignment: GameEvent = {
  id: 'cofounder_alignment_001',
  category: 'team',
  title: 'Setting Co-Founder Expectations',
  description: 'Time to formalize your co-founder relationship. You need to align on equity split, roles, and decision-making processes.',
  
  conditions: {
    requiredPhase: GamePhase.IDEATION,
    activeMilestone: ['cofounder_technical_001', 'cofounder_cultural_001']
  },
  
  impact: {
    founder: {
      wellBeing: {
        energy: -10,
        stress: 15,
        health: 0
      }
    }
  },
  
  choices: [
    {
      id: 'structured_agreement',
      text: 'Create a detailed co-founder agreement with clear roles, expectations, and vesting schedule.',
      impact: {
        founder: {
          wellBeing: {
            energy: -15,
            stress: -10, // Long-term stress reduction
            health: 0
          },
          skills: {
            leadership: 10,
            technical: 0,
            networking: 0,
            fundraising: 5,
            marketing: 0,
            execution: 8,
            growth: 0,
            sustainability: 5
          }
        },
        startup: {
          team: {
            size: 0,
            morale: 15,
            productivity: 20,
            culture: 15
          },
          finances: {
            cash: 0,
            revenue: 0,
            burnRate: 0,
            valuation: 500000 // Clear structure helps valuation
          }
        },
        relationships: {
          community: 5,
          investors: 15,
          employees: 10,
          customers: 0
        },
        triggerMilestone: 'cofounder_agreement_001'
      }
    },
    {
      id: 'flexible_partnership',
      text: 'Keep the arrangement more flexible and informal, focusing on building trust.',
      successChance: 50,
      impact: {
        founder: {
          wellBeing: {
            energy: -5,
            stress: 5,
            health: 0
          },
          skills: {
            leadership: 5,
            technical: 0,
            networking: 5,
            fundraising: 0,
            marketing: 0,
            execution: 3,
            growth: 3,
            sustainability: 0
          }
        },
        startup: {
          team: {
            size: 0,
            morale: 20,
            productivity: 15,
            culture: 20
          },
          finances: {
            cash: 0,
            revenue: 0,
            burnRate: 0,
            valuation: 300000
          }
        },
        relationships: {
          community: 10,
          investors: 5,
          employees: 15,
          customers: 0
        }
      }
    }
  ]
};

export const cofounderOnboarding: GameEvent = {
  id: 'cofounder_onboarding_001',
  category: 'team',
  title: 'First Week as Co-Founders',
  description: 'Your co-founder is ready to start. How will you begin working together?',
  
  conditions: {
    requiredPhase: GamePhase.IDEATION,
    activeMilestone: 'cofounder_agreement_001'
  },
  
  impact: {
    startup: {
      team: {
        size: 0,
        morale: 10,
        productivity: 10,
        culture: 5
      }
    }
  },
  
  choices: [
    {
      id: 'intensive_sync',
      text: 'Spend the week in intense planning and coding sessions to align on everything.',
      impact: {
        founder: {
          wellBeing: {
            energy: -20,
            stress: 15,
            health: -5
          },
          skills: {
            leadership: 8,
            technical: 10,
            networking: 0,
            fundraising: 0,
            marketing: 0,
            execution: 10,
            growth: 5,
            sustainability: 0
          }
        },
        startup: {
          team: {
            size: 0,
            morale: 15,
            productivity: 25,
            culture: 10
          },
          product: {
            mvpProgress: 20,
            quality: 15,
            development: 20,
            innovation: 10,
            marketFit: 5
          }
        },
        relationships: {
          community: 5,
          investors: 10,
          employees: 0,
          customers: 0
        },
        triggerMilestone: 'cofounder_sync_001'
      }
    },
    {
      id: 'gradual_integration',
      text: 'Take a more measured approach, mixing work sessions with team-building activities.',
      impact: {
        founder: {
          wellBeing: {
            energy: -10,
            stress: 5,
            health: 0
          },
          skills: {
            leadership: 10,
            technical: 5,
            networking: 5,
            fundraising: 3,
            marketing: 3,
            execution: 5,
            growth: 3,
            sustainability: 5
          }
        },
        startup: {
          team: {
            size: 0,
            morale: 25,
            productivity: 15,
            culture: 20
          },
          product: {
            mvpProgress: 10,
            quality: 10,
            development: 15,
            innovation: 15,
            marketFit: 10
          }
        },
        relationships: {
          community: 10,
          investors: 5,
          employees: 0,
          customers: 5
        }
      }
    }
  ]
}; 