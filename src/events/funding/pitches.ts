import { GameEvent, GamePhase } from '../../types/stats';

export const initialFundingStrategy: GameEvent = {
  id: 'initial_funding_strategy_001',
  category: 'funding',
  title: 'Initial Funding Strategy',
  description: 'Time to plan your initial funding approach. How will you finance your startup in its early stages?',
  
  conditions: {
    requiredPhase: GamePhase.SETTLING_IN,
    minimumStats: {
      'founder.wellBeing': {
        energy: 30,
        stress: 0,
        health: 0
      }
    }
  },
  
  impact: {
    founder: {
      skills: {
        technical: 0,
        execution: 2,
        leadership: 0,
        networking: 1,
        fundraising: 3,
        marketing: 0,
        growth: 0,
        sustainability: 0
      },
      wellBeing: {
        energy: -5,
        stress: 8,
        health: 0
      }
    }
  },
  
  choices: [
    {
      id: 'bootstrap_focus',
      text: 'Focus on bootstrapping - Plan to use personal savings and early revenue',
      impact: {
        founder: {
          skills: {
            technical: 0,
            execution: 5,
            leadership: 2,
            networking: 0,
            fundraising: 2,
            marketing: 0,
            growth: 0,
            sustainability: 3
          },
          wellBeing: {
            energy: -8,
            stress: 10,
            health: 0
          }
        },
        startup: {
          finances: {
            cash: 10000,
            burnRate: -2000,
            revenue: 0,
            valuation: 0
          }
        }
      }
    },
    {
      id: 'investor_preparation',
      text: 'Prepare for early investors - Start building pitch deck and financial projections',
      impact: {
        founder: {
          skills: {
            technical: 0,
            execution: 3,
            leadership: 0,
            networking: 3,
            fundraising: 5,
            marketing: 2,
            growth: 2,
            sustainability: 0
          },
          wellBeing: {
            energy: -10,
            stress: 12,
            health: 0
          }
        },
        relationships: {
          investors: 5,
          community: 3
        }
      }
    }
  ]
};

export const seedPitch: GameEvent = {
  id: 'seed_pitch_001',
  category: 'funding',
  title: 'Seed Round Pitch Meeting',
  description: 'A prominent VC firm has agreed to hear your pitch. This could be your chance to secure seed funding.',
  
  conditions: {
    requiredPhase: GamePhase.FUNDRAISING,
    minimumStats: {
      'founder.skills': {
        fundraising: 30,
        leadership: 20,
        networking: 0,
        technical: 0,
        marketing: 0,
        execution: 0,
        growth: 0,
        sustainability: 0
      },
      'startup.team': {
        productivity: 60,
        morale: 70,
        size: 0,
        culture: 0
      }
    }
  },
  
  impact: {
    relationships: {
      investors: 5,
      community: 0,
      employees: 0,
      customers: 0
    }
  },
  
  choices: [
    {
      id: 'focus_traction',
      text: 'Focus your pitch on current traction and growth metrics.',
      successChance: 80,
      requiredStats: {
        'founder.skills': {
          fundraising: 40,
          marketing: 30,
          networking: 0,
          technical: 0,
          leadership: 0,
          execution: 0,
          growth: 0,
          sustainability: 0
        }
      },
      impact: {
        startup: {
          finances: {
            cash: 1000000,
            revenue: 0,
            burnRate: 50000,
            valuation: 5000000
          },
          market: {
            brandReputation: 20,
            socialPresence: 15,
            userTraction: 0,
            marketFit: 0,
            userGrowth: 0
          }
        },
        founder: {
          wellBeing: {
            energy: -20,
            stress: 15,
            health: 0
          },
          skills: {
            fundraising: 8,
            marketing: 5,
            networking: 0,
            technical: 0,
            leadership: 0,
            execution: 0,
            growth: 0,
            sustainability: 0
          }
        },
        relationships: {
          investors: 20,
          community: 0,
          employees: 0,
          customers: 0
        },
        triggerMilestone: 'seed_funding_secured_001'
      }
    },
    {
      id: 'focus_vision',
      text: 'Emphasize your long-term vision and market potential.',
      successChance: 60,
      impact: {
        startup: {
          finances: {
            cash: 500000,
            revenue: 0,
            burnRate: 30000,
            valuation: 3000000
          },
          market: {
            brandReputation: 10,
            socialPresence: 5,
            userTraction: 0,
            marketFit: 0,
            userGrowth: 0
          }
        },
        founder: {
          wellBeing: {
            energy: -15,
            stress: 10,
            health: 0
          },
          skills: {
            fundraising: 5,
            leadership: 3,
            networking: 0,
            technical: 0,
            marketing: 0,
            execution: 0,
            growth: 0,
            sustainability: 0
          }
        },
        relationships: {
          investors: 10,
          community: 0,
          employees: 0,
          customers: 0
        }
      }
    }
  ]
};

export const vcPitchPrep: GameEvent = {
  id: 'vc_pitch_prep_001',
  category: 'funding',
  title: 'Sand Hill Road Pitch Prep',
  description: 'A top-tier VC firm on Sand Hill Road agreed to hear your pitch next week. You have limited time to prepare - focus on a polished deck or your natural storytelling?',
  
  conditions: {
    requiredPhase: GamePhase.FUNDRAISING,
    minimumStats: {
      'founder.skills': {
        fundraising: 25,
        leadership: 20,
        execution: 15,
        technical: 0,
        networking: 0,
        marketing: 0,
        growth: 0,
        sustainability: 0
      },
      'startup.product': {
        mvpProgress: 60,
        quality: 40,
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
        stress: 20,
        health: 0
      }
    }
  },
  
  choices: [
    {
      id: 'polish_deck',
      text: 'Spend days perfecting your pitch deck with detailed metrics, competitive analysis, and professional design.',
      successChance: 75,
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
            leadership: 5,
            technical: 0,
            networking: 5,
            marketing: 8,
            growth: 5,
            sustainability: 0
          }
        },
        startup: {
          product: {
            mvpProgress: -5,
            quality: 0,
            development: 0,
            innovation: 0,
            marketFit: 10
          },
          team: {
            size: 0,
            morale: -5,
            productivity: -10,
            culture: 0
          },
          finances: {
            cash: -2000,
            revenue: 0,
            burnRate: 0,
            valuation: 0
          }
        },
        relationships: {
          investors: 20,
          community: 5,
          customers: 0
        },
        triggerMilestone: 'polished_pitch_001'
      }
    },
    {
      id: 'authentic_approach',
      text: 'Focus on storytelling and product demo, letting your passion and domain expertise shine through.',
      successChance: 60,
      impact: {
        founder: {
          wellBeing: {
            energy: -15,
            stress: 15,
            health: 0
          },
          skills: {
            fundraising: 10,
            execution: 5,
            leadership: 10,
            technical: 5,
            networking: 10,
            marketing: 5,
            growth: 8,
            sustainability: 5
          }
        },
        startup: {
          product: {
            mvpProgress: 5,
            quality: 5,
            development: 5,
            innovation: 5,
            marketFit: 5
          },
          team: {
            size: 0,
            morale: 10,
            productivity: 5,
            culture: 10
          },
          finances: {
            cash: -500,
            revenue: 0,
            burnRate: 0,
            valuation: 0
          }
        },
        relationships: {
          investors: 15,
          community: 15,
          customers: 5
        },
        triggerMilestone: 'authentic_pitch_001'
      }
    }
  ]
};

export const investorFeedback: GameEvent = {
  id: 'investor_feedback_001',
  category: 'funding',
  title: 'VC Partner Feedback',
  description: 'After your pitch, a partner offers detailed feedback over coffee. This could be valuable insight or just their personal opinion.',
  
  conditions: {
    requiredPhase: GamePhase.FUNDRAISING,
    activeMilestone: ['polished_pitch_001', 'authentic_pitch_001']
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
      id: 'embrace_feedback',
      text: 'Take detailed notes and commit to implementing their suggestions before the next pitch.',
      impact: {
        founder: {
          wellBeing: {
            energy: -15,
            stress: 15,
            health: 0
          },
          skills: {
            fundraising: 20,
            execution: 10,
            leadership: 5,
            technical: 0,
            networking: 10,
            marketing: 5,
            growth: 5,
            sustainability: 0
          }
        },
        startup: {
          product: {
            mvpProgress: 0,
            quality: 5,
            development: 5,
            innovation: 5,
            marketFit: 15
          },
          team: {
            size: 0,
            morale: 5,
            productivity: 10,
            culture: 5
          },
          finances: {
            cash: 0,
            revenue: 0,
            burnRate: 0,
            valuation: 500000
          }
        },
        relationships: {
          investors: 25,
          community: 10,
          customers: 5
        },
        triggerMilestone: 'vc_mentorship_001'
      }
    },
    {
      id: 'selective_implementation',
      text: 'Listen politely but stay true to your vision - incorporate only what aligns with your strategy.',
      impact: {
        founder: {
          wellBeing: {
            energy: -5,
            stress: 5,
            health: 0
          },
          skills: {
            fundraising: 10,
            execution: 5,
            leadership: 15,
            technical: 0,
            networking: 5,
            marketing: 0,
            growth: 10,
            sustainability: 10
          }
        },
        startup: {
          product: {
            mvpProgress: 5,
            quality: 5,
            development: 5,
            innovation: 10,
            marketFit: 5
          },
          team: {
            size: 0,
            morale: 15,
            productivity: 5,
            culture: 15
          },
          finances: {
            cash: 0,
            revenue: 0,
            burnRate: 0,
            valuation: 200000
          }
        },
        relationships: {
          investors: 10,
          community: 15,
          customers: 10
        }
      }
    }
  ]
};

export const angelOutreach: GameEvent = {
  id: 'angel_outreach_001',
  category: 'funding',
  title: 'Angel Investor Outreach',
  description: 'You have the opportunity to pitch to angel investors early. How will you approach early-stage funding?',
  
  conditions: {
    requiredPhase: GamePhase.IDEATION,
    minimumStats: {
      'founder.skills': {
        networking: 20,
        fundraising: 15,
        leadership: 0,
        technical: 0,
        marketing: 0,
        execution: 0,
        growth: 0,
        sustainability: 0
      }
    }
  },
  
  impact: {
    startup: {
      finances: {
        cash: 0,
        burnRate: 1000,
        revenue: 0,
        valuation: 50000
      }
    }
  },
  
  choices: [
    {
      id: 'targeted_angels',
      text: 'Focus on angels with domain expertise in your market',
      successChance: 70,
      impact: {
        founder: {
          skills: {
            networking: 10,
            fundraising: 15,
            leadership: 5,
            technical: 0,
            marketing: 5,
            execution: 5,
            growth: 8,
            sustainability: 0
          },
          wellBeing: {
            energy: -15,
            stress: 12,
            health: 0
          }
        },
        startup: {
          finances: {
            cash: 100000,
            burnRate: 5000,
            revenue: 0,
            valuation: 1000000
          }
        },
        relationships: {
          investors: 25,
          community: 15,
          customers: 10
        }
      }
    },
    {
      id: 'wide_network',
      text: 'Cast a wide net through angel networks and platforms',
      impact: {
        founder: {
          skills: {
            networking: 15,
            fundraising: 10,
            leadership: 3,
            technical: 0,
            marketing: 8,
            execution: 3,
            growth: 5,
            sustainability: 0
          },
          wellBeing: {
            energy: -20,
            stress: 15,
            health: 0
          }
        },
        startup: {
          finances: {
            cash: 150000,
            burnRate: 8000,
            revenue: 0,
            valuation: 800000
          }
        },
        relationships: {
          investors: 15,
          community: 20,
          customers: 5
        }
      }
    }
  ]
};

export const friendsAndFamily: GameEvent = {
  id: 'friends_and_family_001',
  category: 'funding',
  title: 'Friends and Family Round',
  description: 'Consider raising initial capital from friends and family. How will you structure this sensitive investment round?',
  
  conditions: {
    requiredPhase: GamePhase.IDEATION,
    minimumStats: {
      'founder.skills': {
        networking: 15,
        fundraising: 10,
        leadership: 0,
        technical: 0,
        marketing: 0,
        execution: 0,
        growth: 0,
        sustainability: 0
      }
    }
  },
  
  impact: {
    startup: {
      finances: {
        cash: 0,
        burnRate: 500,
        revenue: 0,
        valuation: 25000
      }
    }
  },
  
  choices: [
    {
      id: 'formal_terms',
      text: 'Set up formal investment terms and documentation',
      successChance: 80,
      impact: {
        founder: {
          skills: {
            networking: 5,
            fundraising: 12,
            leadership: 8,
            technical: 0,
            marketing: 0,
            execution: 8,
            growth: 3,
            sustainability: 10
          },
          wellBeing: {
            energy: -10,
            stress: 15,
            health: 0
          }
        },
        startup: {
          finances: {
            cash: 50000,
            burnRate: 3000,
            revenue: 0,
            valuation: 500000
          }
        },
        relationships: {
          investors: 20,
          community: 10,
          customers: 0
        }
      }
    },
    {
      id: 'flexible_approach',
      text: 'Keep it informal with flexible payback options',
      impact: {
        founder: {
          skills: {
            networking: 8,
            fundraising: 5,
            leadership: 5,
            technical: 0,
            marketing: 0,
            execution: 5,
            growth: 0,
            sustainability: 5
          },
          wellBeing: {
            energy: -5,
            stress: 20,
            health: 0
          }
        },
        startup: {
          finances: {
            cash: 30000,
            burnRate: 2000,
            revenue: 0,
            valuation: 300000
          }
        },
        relationships: {
          investors: 10,
          community: 15,
          customers: 0
        }
      }
    }
  ]
};

export const crowdfunding: GameEvent = {
  id: 'crowdfunding_001',
  category: 'funding',
  title: 'Crowdfunding Campaign',
  description: 'Launch a crowdfunding campaign to validate market interest and raise initial capital.',
  
  conditions: {
    requiredPhase: GamePhase.IDEATION,
    minimumStats: {
      'founder.skills': {
        marketing: 25,
        networking: 20,
        fundraising: 15,
        leadership: 0,
        technical: 0,
        execution: 0,
        growth: 0,
        sustainability: 0
      }
    }
  },
  
  impact: {
    startup: {
      finances: {
        cash: 0,
        burnRate: 2000,
        revenue: 0,
        valuation: 100000
      }
    }
  },
  
  choices: [
    {
      id: 'reward_based',
      text: 'Launch a reward-based campaign with product pre-orders',
      successChance: 65,
      impact: {
        founder: {
          skills: {
            marketing: 15,
            networking: 10,
            fundraising: 8,
            leadership: 5,
            technical: 0,
            execution: 8,
            growth: 10,
            sustainability: 5
          },
          wellBeing: {
            energy: -20,
            stress: 18,
            health: 0
          }
        },
        startup: {
          finances: {
            cash: 200000,
            burnRate: 10000,
            revenue: 50000,
            valuation: 1500000
          }
        },
        relationships: {
          customers: 30,
          community: 25,
          investors: 15
        }
      }
    },
    {
      id: 'equity_crowdfunding',
      text: 'Set up an equity crowdfunding campaign',
      impact: {
        founder: {
          skills: {
            marketing: 10,
            networking: 12,
            fundraising: 15,
            leadership: 8,
            technical: 0,
            execution: 5,
            growth: 8,
            sustainability: 8
          },
          wellBeing: {
            energy: -25,
            stress: 20,
            health: 0
          }
        },
        startup: {
          finances: {
            cash: 300000,
            burnRate: 15000,
            revenue: 0,
            valuation: 2000000
          }
        },
        relationships: {
          investors: 25,
          community: 20,
          customers: 15
        }
      }
    }
  ]
};

export const seriesB: GameEvent = {
  id: 'series_b_001',
  category: 'funding',
  title: 'Series B Fundraising',
  description: 'With strong growth metrics, it\'s time for Series B. How will you position the company for this major funding round?',
  
  conditions: {
    requiredPhase: GamePhase.SCALING,
    minimumStats: {
      'founder.skills': {
        fundraising: 45,
        leadership: 40,
        execution: 35,
        networking: 0,
        technical: 0,
        marketing: 0,
        growth: 0,
        sustainability: 0
      },
      'startup.finances': {
        revenue: 500000,
        valuation: 10000000
      }
    }
  },
  
  impact: {
    startup: {
      finances: {
        cash: 0,
        burnRate: 50000,
        revenue: 50000,
        valuation: 1000000
      }
    }
  },
  
  choices: [
    {
      id: 'growth_metrics',
      text: 'Focus pitch on growth metrics and market expansion plans',
      successChance: 75,
      impact: {
        founder: {
          skills: {
            fundraising: 15,
            leadership: 12,
            execution: 10,
            networking: 10,
            technical: 0,
            marketing: 8,
            growth: 15,
            sustainability: 5
          },
          wellBeing: {
            energy: -25,
            stress: 20,
            health: 0
          }
        },
        startup: {
          finances: {
            cash: 15000000,
            burnRate: 500000,
            revenue: 200000,
            valuation: 50000000
          }
        },
        relationships: {
          investors: 25,
          employees: 15,
          community: 10
        }
      }
    },
    {
      id: 'profitability_path',
      text: 'Emphasize path to profitability and sustainable growth',
      impact: {
        founder: {
          skills: {
            fundraising: 12,
            leadership: 10,
            execution: 15,
            networking: 8,
            technical: 0,
            marketing: 5,
            growth: 10,
            sustainability: 15
          },
          wellBeing: {
            energy: -20,
            stress: 15,
            health: 0
          }
        },
        startup: {
          finances: {
            cash: 10000000,
            burnRate: 300000,
            revenue: 300000,
            valuation: 40000000
          }
        },
        relationships: {
          investors: 20,
          employees: 20,
          community: 15
        }
      }
    }
  ]
};

export const strategicInvestment: GameEvent = {
  id: 'strategic_investment_001',
  category: 'funding',
  title: 'Strategic Investment Opportunity',
  description: 'A major player in your industry is interested in making a strategic investment. How will you approach this opportunity?',
  
  conditions: {
    requiredPhase: GamePhase.SCALING,
    minimumStats: {
      'founder.skills': {
        leadership: 45,
        networking: 40,
        fundraising: 35,
        technical: 0,
        marketing: 0,
        execution: 0,
        growth: 0,
        sustainability: 0
      }
    }
  },
  
  impact: {
    startup: {
      finances: {
        cash: 0,
        burnRate: 30000,
        revenue: 25000,
        valuation: 500000
      }
    }
  },
  
  choices: [
    {
      id: 'deep_partnership',
      text: 'Pursue deep strategic partnership with significant investment',
      successChance: 70,
      impact: {
        founder: {
          skills: {
            leadership: 15,
            networking: 12,
            fundraising: 10,
            technical: 5,
            marketing: 8,
            execution: 10,
            growth: 15,
            sustainability: 8
          },
          wellBeing: {
            energy: -20,
            stress: 18,
            health: 0
          }
        },
        startup: {
          finances: {
            cash: 20000000,
            burnRate: 400000,
            revenue: 500000,
            valuation: 80000000
          }
        },
        relationships: {
          investors: 30,
          customers: 25,
          community: 15
        }
      }
    },
    {
      id: 'limited_partnership',
      text: 'Negotiate limited partnership with smaller investment',
      impact: {
        founder: {
          skills: {
            leadership: 10,
            networking: 15,
            fundraising: 8,
            technical: 3,
            marketing: 5,
            execution: 8,
            growth: 10,
            sustainability: 12
          },
          wellBeing: {
            energy: -15,
            stress: 12,
            health: 0
          }
        },
        startup: {
          finances: {
            cash: 8000000,
            burnRate: 200000,
            revenue: 300000,
            valuation: 50000000
          }
        },
        relationships: {
          investors: 20,
          customers: 15,
          community: 20
        }
      }
    }
  ]
};

export const internationalExpansionFunding: GameEvent = {
  id: 'international_expansion_funding_001',
  category: 'funding',
  title: 'International Expansion Funding',
  description: 'Opportunity to raise funding specifically for international expansion from global investors.',
  
  conditions: {
    requiredPhase: GamePhase.SCALING,
    minimumStats: {
      'founder.skills': {
        networking: 45,
        fundraising: 40,
        leadership: 35,
        technical: 0,
        marketing: 0,
        execution: 0,
        growth: 0,
        sustainability: 0
      }
    }
  },
  
  impact: {
    startup: {
      finances: {
        cash: 0,
        burnRate: 40000,
        revenue: 30000,
        valuation: 800000
      }
    }
  },
  
  choices: [
    {
      id: 'global_fund',
      text: 'Partner with a global investment fund for worldwide expansion',
      successChance: 70,
      impact: {
        founder: {
          skills: {
            networking: 15,
            fundraising: 12,
            leadership: 10,
            technical: 0,
            marketing: 10,
            execution: 8,
            growth: 15,
            sustainability: 5
          },
          wellBeing: {
            energy: -25,
            stress: 20,
            health: 0
          }
        },
        startup: {
          finances: {
            cash: 25000000,
            burnRate: 600000,
            revenue: 800000,
            valuation: 100000000
          }
        },
        relationships: {
          investors: 25,
          customers: 20,
          community: 25
        }
      }
    },
    {
      id: 'regional_focus',
      text: 'Raise from regional investors for targeted market expansion',
      impact: {
        founder: {
          skills: {
            networking: 12,
            fundraising: 10,
            leadership: 8,
            technical: 0,
            marketing: 12,
            execution: 10,
            growth: 10,
            sustainability: 8
          },
          wellBeing: {
            energy: -20,
            stress: 15,
            health: 0
          }
        },
        startup: {
          finances: {
            cash: 15000000,
            burnRate: 400000,
            revenue: 600000,
            valuation: 70000000
          }
        },
        relationships: {
          investors: 20,
          customers: 25,
          community: 20
        }
      }
    }
  ]
}; 