import { GameEvent, GamePhase } from '../../types/stats';

export const fridayNightChoice: GameEvent = {
  id: 'friday_night_001',
  category: 'personal',
  title: 'Friday Night Plans',
  description: 'It\'s been a long week, and you\'ve got competing invites: drinks with tech friends at a trendy SOMA bar or catching up on important work in your quiet office.',
  
  conditions: {
    requiredPhase: GamePhase.BOOTSTRAPPING,
    minimumStats: {
      'founder.skills': {
        networking: 15,
        execution: 15,
        leadership: 0,
        technical: 0,
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
        energy: -5,
        stress: 10,
        health: 0
      }
    }
  },
  
  choices: [
    {
      id: 'networking_night',
      text: 'Join the tech crowd: Network, relax, and maybe learn some industry gossip.',
      impact: {
        founder: {
          wellBeing: {
            energy: -15,
            stress: -10,
            health: -5
          },
          skills: {
            networking: 15,
            leadership: 5,
            execution: -5,
            technical: 0,
            fundraising: 8,
            marketing: 5,
            growth: 5,
            sustainability: -5
          }
        },
        startup: {
          team: {
            size: 0,
            morale: 5,
            productivity: -5,
            culture: 10
          },
          market: {
            brandReputation: 10,
            socialPresence: 15,
            userTraction: 5,
            marketFit: 0,
            userGrowth: 0
          }
        },
        relationships: {
          community: 20,
          investors: 15,
          employees: 5,
          customers: 0
        },
        triggerMilestone: 'social_capital_001'
      }
    },
    {
      id: 'productive_evening',
      text: 'Stay at the office: Focus on work while everyone else is out.',
      impact: {
        founder: {
          wellBeing: {
            energy: -20,
            stress: 15,
            health: -5
          },
          skills: {
            execution: 15,
            technical: 10,
            leadership: 0,
            networking: -5,
            fundraising: 0,
            marketing: 0,
            growth: 5,
            sustainability: -10
          }
        },
        startup: {
          team: {
            size: 0,
            morale: -5,
            productivity: 20,
            culture: -5
          },
          product: {
            mvpProgress: 15,
            quality: 10,
            development: 15,
            innovation: 5,
            marketFit: 5
          }
        },
        relationships: {
          community: -10,
          investors: -5,
          employees: -5,
          customers: 10
        },
        triggerMilestone: 'productivity_boost_001'
      }
    }
  ]
};

export const fundraisingWorkshop: GameEvent = {
  id: 'fundraising_workshop_001',
  category: 'personal',
  title: 'Advanced Fundraising Workshop',
  description: 'A renowned VC firm is hosting an intensive fundraising workshop. It\'s a full-day commitment, but could provide valuable insights and connections.',
  
  conditions: {
    requiredPhase: GamePhase.BOOTSTRAPPING,
    minimumStats: {
      'founder.skills': {
        fundraising: 20,
        networking: 15,
        leadership: 0,
        technical: 0,
        execution: 0,
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
        stress: 5,
        health: 0
      }
    }
  },
  
  choices: [
    {
      id: 'attend_workshop',
      text: 'Invest the day in learning and networking with potential investors.',
      successChance: 85,
      impact: {
        founder: {
          wellBeing: {
            energy: -25,
            stress: 15,
            health: -5
          },
          skills: {
            fundraising: 20,
            networking: 15,
            leadership: 5,
            technical: 0,
            execution: 5,
            marketing: 8,
            growth: 10,
            sustainability: 0
          }
        },
        startup: {
          team: {
            size: 0,
            morale: 0,
            productivity: -10,
            culture: 5
          },
          product: {
            mvpProgress: -5,
            quality: 0,
            development: 0,
            innovation: 0,
            marketFit: 5
          },
          finances: {
            cash: -500,
            revenue: 0,
            burnRate: 0,
            valuation: 200000
          }
        },
        relationships: {
          investors: 25,
          community: 15,
          employees: 0,
          customers: 0
        },
        triggerMilestone: 'fundraising_expertise_001'
      }
    },
    {
      id: 'focus_product',
      text: 'Skip the workshop and maintain momentum on product development.',
      impact: {
        founder: {
          wellBeing: {
            energy: 5,
            stress: -5,
            health: 5
          },
          skills: {
            technical: 10,
            execution: 15,
            leadership: 5,
            networking: -5,
            fundraising: -5,
            marketing: 0,
            growth: 5,
            sustainability: 5
          }
        },
        startup: {
          team: {
            size: 0,
            morale: 10,
            productivity: 20,
            culture: 5
          },
          product: {
            mvpProgress: 15,
            quality: 10,
            development: 15,
            innovation: 10,
            marketFit: 5
          }
        },
        relationships: {
          investors: -10,
          community: -5,
          employees: 10,
          customers: 15
        }
      }
    }
  ]
};

export const selfCareDecision: GameEvent = {
  id: 'self_care_001',
  category: 'personal',
  title: 'Wellness Investment',
  description: 'Your advisor suggests taking better care of yourself. There\'s a highly-rated meditation studio nearby, and several founders swear by the new boutique gym.',
  
  conditions: {
    requiredPhase: GamePhase.BOOTSTRAPPING,
    minimumStats: {
      'founder.wellBeing': {
        energy: 30,
        stress: 70,
        health: 40
      }
    }
  },
  
  impact: {
    founder: {
      wellBeing: {
        energy: -5,
        stress: 5,
        health: 0
      }
    }
  },
  
  choices: [
    {
      id: 'meditation_practice',
      text: 'Join the meditation studio: Focus on mental clarity and stress management.',
      impact: {
        founder: {
          wellBeing: {
            energy: 20,
            stress: -25,
            health: 10
          },
          skills: {
            leadership: 10,
            execution: 8,
            technical: 0,
            networking: 5,
            fundraising: 0,
            marketing: 0,
            growth: 0,
            sustainability: 15
          }
        },
        startup: {
          team: {
            size: 0,
            morale: 15,
            productivity: 10,
            culture: 15
          },
          finances: {
            cash: -1200,
            revenue: 0,
            burnRate: 100,
            valuation: 0
          }
        },
        relationships: {
          employees: 15,
          investors: 5,
          community: 10,
          customers: 5
        },
        triggerMilestone: 'wellness_practice_001'
      }
    },
    {
      id: 'fitness_routine',
      text: 'Sign up for the gym: Build physical stamina and network with other founders.',
      impact: {
        founder: {
          wellBeing: {
            energy: 25,
            stress: -15,
            health: 25
          },
          skills: {
            networking: 10,
            leadership: 5,
            execution: 5,
            technical: 0,
            fundraising: 5,
            marketing: 0,
            growth: 5,
            sustainability: 10
          }
        },
        startup: {
          team: {
            size: 0,
            morale: 10,
            productivity: 15,
            culture: 10
          },
          finances: {
            cash: -2000,
            revenue: 0,
            burnRate: 150,
            valuation: 0
          }
        },
        relationships: {
          investors: 15,
          community: 15,
          employees: 10,
          customers: 0
        },
        triggerMilestone: 'fitness_routine_001'
      }
    }
  ]
};

export const lifestyleSetup: GameEvent = {
  id: 'lifestyle_setup_001',
  category: 'personal',
  title: 'Lifestyle Setup',
  description: 'As you begin your startup journey, it\'s time to set up your new lifestyle in San Francisco. How will you structure your personal life?',
  
  conditions: {
    requiredPhase: GamePhase.SETTLING_IN,
    minimumStats: {
      'founder.wellBeing': {
        energy: 60,
        stress: 0,
        health: 50
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
      id: 'community_focus',
      text: 'Join local communities and establish social connections in the startup ecosystem',
      successChance: 80,
      impact: {
        founder: {
          wellBeing: {
            energy: 15,
            stress: -10,
            health: 10
          },
          skills: {
            networking: 12,
            leadership: 8,
            technical: 0,
            fundraising: 5,
            marketing: 5,
            execution: 0,
            growth: 5,
            sustainability: 8
          }
        },
        relationships: {
          community: 20,
          investors: 10,
          employees: 5
        }
      }
    },
    {
      id: 'personal_space',
      text: 'Focus on creating a comfortable personal space and routine outside of work',
      impact: {
        founder: {
          wellBeing: {
            energy: 20,
            stress: -15,
            health: 15
          },
          skills: {
            execution: 10,
            leadership: 5,
            technical: 0,
            networking: 0,
            fundraising: 0,
            marketing: 0,
            growth: 3,
            sustainability: 12
          }
        },
        startup: {
          team: {
            morale: 5,
            productivity: 10,
            culture: 8,
            size: 0
          }
        }
      }
    }
  ]
};

export const passionProject: GameEvent = {
  id: 'passion_project_001',
  category: 'personal',
  title: 'Side Project Opportunity',
  description: 'You have an idea for a small side project that could help you stay creative during the ideation phase. How will you approach it?',
  
  conditions: {
    requiredPhase: GamePhase.IDEATION,
    minimumStats: {
      'founder.wellBeing': {
        energy: 50,
        stress: 30,
        health: 40
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
      id: 'weekend_project',
      text: 'Work on it during weekends as a creative outlet',
      successChance: 75,
      impact: {
        founder: {
          wellBeing: {
            energy: 10,
            stress: -5,
            health: 5
          },
          skills: {
            technical: 10,
            execution: 8,
            leadership: 0,
            networking: 5,
            fundraising: 0,
            marketing: 5,
            growth: 8,
            sustainability: 5
          }
        },
        startup: {
          product: {
            innovation: 10,
            quality: 5,
            development: 8,
            marketFit: 5,
            mvpProgress: 0
          }
        },
        relationships: {
          community: 15,
          customers: 8,
          investors: 5
        }
      }
    },
    {
      id: 'put_aside',
      text: 'Put it aside and maintain complete focus on the startup',
      impact: {
        founder: {
          wellBeing: {
            energy: -5,
            stress: 8,
            health: 0
          },
          skills: {
            execution: 12,
            leadership: 5,
            technical: 5,
            networking: 0,
            fundraising: 5,
            marketing: 0,
            growth: 5,
            sustainability: 0
          }
        },
        startup: {
          product: {
            innovation: 5,
            quality: 10,
            development: 12,
            marketFit: 8,
            mvpProgress: 10
          }
        }
      }
    }
  ]
};

export const familyTime: GameEvent = {
  id: 'family_time_001',
  category: 'personal',
  title: 'Family Commitments',
  description: 'Important family events are coming up during a critical fundraising period. How will you balance these commitments?',
  
  conditions: {
    requiredPhase: GamePhase.FUNDRAISING,
    minimumStats: {
      'founder.wellBeing': {
        energy: 40,
        stress: 40,
        health: 40
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
      id: 'prioritize_family',
      text: 'Make time for family events while managing investor meetings around them',
      successChance: 70,
      impact: {
        founder: {
          wellBeing: {
            energy: 20,
            stress: -15,
            health: 10
          },
          skills: {
            leadership: 10,
            execution: 8,
            technical: 0,
            networking: 5,
            fundraising: 5,
            marketing: 0,
            growth: 5,
            sustainability: 12
          }
        },
        startup: {
          team: {
            morale: 15,
            productivity: 8,
            culture: 12,
            size: 0
          }
        },
        relationships: {
          investors: 8,
          employees: 15,
          community: 10
        }
      }
    },
    {
      id: 'focus_fundraising',
      text: 'Postpone family commitments to focus on closing the funding round',
      impact: {
        founder: {
          wellBeing: {
            energy: -10,
            stress: 15,
            health: -5
          },
          skills: {
            fundraising: 15,
            execution: 12,
            leadership: 5,
            technical: 0,
            networking: 8,
            marketing: 5,
            growth: 10,
            sustainability: 0
          }
        },
        startup: {
          finances: {
            cash: 200000,
            burnRate: 0,
            revenue: 0,
            valuation: 1000000
          }
        },
        relationships: {
          investors: 20,
          employees: 5,
          community: -5
        }
      }
    }
  ]
};

export const leadershipLifestyle: GameEvent = {
  id: 'leadership_lifestyle_001',
  category: 'personal',
  title: 'Leadership Lifestyle Balance',
  description: 'As a startup leader scaling a company, you need to find a sustainable way to manage your increasing responsibilities and personal life.',
  
  conditions: {
    requiredPhase: GamePhase.SCALING,
    minimumStats: {
      'founder.wellBeing': {
        energy: 50,
        stress: 40,
        health: 50
      },
      'founder.skills': {
        leadership: 45,
        execution: 40
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
      id: 'delegate_balance',
      text: 'Delegate more responsibilities and create structured personal time',
      successChance: 80,
      impact: {
        founder: {
          wellBeing: {
            energy: 25,
            stress: -20,
            health: 15
          },
          skills: {
            leadership: 15,
            execution: 10,
            technical: 0,
            networking: 8,
            fundraising: 5,
            marketing: 5,
            growth: 12,
            sustainability: 15
          }
        },
        startup: {
          team: {
            morale: 20,
            productivity: 15,
            culture: 18,
            size: 2
          },
          finances: {
            cash: -100000,
            burnRate: 20000,
            revenue: 0,
            valuation: 0
          }
        },
        relationships: {
          employees: 25,
          investors: 15,
          community: 10
        }
      }
    },
    {
      id: 'integrated_approach',
      text: 'Integrate personal activities with business networking and team events',
      impact: {
        founder: {
          wellBeing: {
            energy: 15,
            stress: -10,
            health: 10
          },
          skills: {
            networking: 15,
            leadership: 12,
            technical: 0,
            fundraising: 8,
            marketing: 8,
            execution: 5,
            growth: 10,
            sustainability: 8
          }
        },
        startup: {
          team: {
            morale: 15,
            productivity: 12,
            culture: 15,
            size: 0
          }
        },
        relationships: {
          employees: 20,
          investors: 20,
          community: 15
        }
      }
    }
  ]
}; 