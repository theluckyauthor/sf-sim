import { GameEvent, GamePhase } from '../../types/stats';

export const acceleratorApplication: GameEvent = {
  id: 'accelerator_application_001',
  category: 'funding',
  title: 'Accelerator Opportunity',
  description: 'Applications are open for Y Combinator\'s next batch. Getting in could supercharge your startup, but the process is highly competitive and requires significant preparation.',
  
  conditions: {
    requiredPhase: GamePhase.BOOTSTRAPPING,
    minimumStats: {
      'founder.skills': {
        fundraising: 20,
        execution: 15,
        technical: 0,
        leadership: 0,
        networking: 0,
        marketing: 0,
        growth: 0,
        sustainability: 0
      },
      'startup.product': {
        mvpProgress: 40,
        quality: 30,
        development: 0,
        innovation: 0,
        marketFit: 0
      }
    }
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
      id: 'all_in_application',
      text: 'Go all-in: Pause other work to perfect the application and prepare extensively for interviews.',
      successChance: 30, // YC is highly competitive
      impact: {
        founder: {
          wellBeing: {
            energy: -25,
            stress: 25,
            health: -5
          },
          skills: {
            fundraising: 15,
            execution: 10,
            technical: 5,
            leadership: 8,
            networking: 5,
            marketing: 5,
            growth: 5,
            sustainability: 0
          },
          reputation: {
            personal: 20,
            network: 15
          }
        },
        startup: {
          product: {
            mvpProgress: -5, // Development slows during preparation
            quality: 5,
            development: 0,
            innovation: 8,
            marketFit: 10
          },
          finances: {
            cash: 125000, // YC standard investment
            revenue: 0,
            burnRate: 15000, // Increased during program
            valuation: 2000000
          },
          market: {
            brandReputation: 25,
            socialPresence: 20,
            userTraction: 15,
            marketFit: 20,
            userGrowth: 15
          }
        },
        relationships: {
          community: 25,
          investors: 30,
          employees: 10,
          customers: 15
        },
        triggerMilestone: 'yc_acceptance_001'
      }
    },
    {
      id: 'balanced_approach',
      text: 'Take a balanced approach: Apply while maintaining product development momentum.',
      successChance: 15,
      impact: {
        founder: {
          wellBeing: {
            energy: -15,
            stress: 15,
            health: 0
          },
          skills: {
            fundraising: 8,
            execution: 5,
            technical: 3,
            leadership: 3,
            networking: 3,
            marketing: 3,
            growth: 3,
            sustainability: 0
          },
          reputation: {
            personal: 10,
            network: 8
          }
        },
        startup: {
          product: {
            mvpProgress: 5,
            quality: 3,
            development: 5,
            innovation: 5,
            marketFit: 5
          },
          finances: {
            cash: 125000,
            revenue: 0,
            burnRate: 15000,
            valuation: 1500000
          },
          market: {
            brandReputation: 15,
            socialPresence: 12,
            userTraction: 10,
            marketFit: 15,
            userGrowth: 10
          }
        },
        relationships: {
          community: 15,
          investors: 20,
          employees: 5,
          customers: 10
        },
        triggerMilestone: 'yc_acceptance_001'
      }
    },
    {
      id: 'apply_later',
      text: 'Focus on growth now and apply in a future batch when better prepared.',
      impact: {
        founder: {
          wellBeing: {
            energy: 5,
            stress: -5,
            health: 5
          },
          skills: {
            fundraising: 3,
            execution: 8,
            technical: 5,
            leadership: 0,
            networking: 0,
            marketing: 0,
            growth: 5,
            sustainability: 5
          }
        },
        startup: {
          product: {
            mvpProgress: 15,
            quality: 10,
            development: 10,
            innovation: 5,
            marketFit: 8
          }
        },
        relationships: {
          community: 5,
          investors: -5,
          employees: 5,
          customers: 8
        },
        triggerMilestone: 'growth_focus_001'
      }
    }
  ]
};

export const acceleratorInterview: GameEvent = {
  id: 'accelerator_interview_001',
  category: 'funding',
  title: 'YC Interview Preparation',
  description: 'Your application impressed YC partners and you\'ve been invited for an interview. You have one week to prepare for the most important 10 minutes of your startup journey.',
  
  conditions: {
    requiredPhase: GamePhase.BOOTSTRAPPING,
    activeMilestone: 'yc_acceptance_001'
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
      id: 'intensive_prep',
      text: 'Conduct intensive mock interviews with experienced founders and refine your pitch.',
      successChance: 70,
      impact: {
        founder: {
          wellBeing: {
            energy: -25,
            stress: 25,
            health: -5
          },
          skills: {
            fundraising: 20,
            execution: 10,
            technical: 5,
            leadership: 10,
            networking: 10,
            marketing: 8,
            growth: 8,
            sustainability: 0
          }
        },
        startup: {
          product: {
            mvpProgress: 0,
            quality: 5,
            development: 0,
            innovation: 5,
            marketFit: 15
          },
          market: {
            brandReputation: 10,
            socialPresence: 5,
            userTraction: 0,
            marketFit: 10,
            userGrowth: 5
          }
        },
        relationships: {
          community: 15,
          investors: 25,
          employees: 5,
          customers: 10
        },
        triggerMilestone: 'yc_interview_success_001'
      }
    },
    {
      id: 'focus_product',
      text: 'Focus on improving your product demo while maintaining basic interview preparation.',
      successChance: 50,
      impact: {
        founder: {
          wellBeing: {
            energy: -15,
            stress: 15,
            health: 0
          },
          skills: {
            fundraising: 10,
            execution: 15,
            technical: 10,
            leadership: 5,
            networking: 5,
            marketing: 5,
            growth: 5,
            sustainability: 0
          }
        },
        startup: {
          product: {
            mvpProgress: 15,
            quality: 15,
            development: 10,
            innovation: 10,
            marketFit: 8
          },
          market: {
            brandReputation: 5,
            socialPresence: 0,
            userTraction: 5,
            marketFit: 5,
            userGrowth: 3
          }
        },
        relationships: {
          community: 8,
          investors: 15,
          employees: 10,
          customers: 15
        }
      }
    }
  ]
}; 