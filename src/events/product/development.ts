import { GameEvent, GamePhase } from '../../types/stats';
export const mvpCrunch: GameEvent = {
  id: 'mvp_crunch_001',
  category: 'product',
  title: 'MVP Development Sprint',
  description: 'Your team is close to completing the MVP. A potential investor wants to see it next week.',
  
  conditions: {
    requiredPhase: GamePhase.BOOTSTRAPPING,
    minimumStats: {
      'startup.team': {
        productivity: 50,
        morale: 40,
        size: 0,
        culture: 0
      }
    }
  },
  
  impact: {
    startup: {
      product: {
        mvpProgress: 5,
        quality: 2,
        innovation: 0,
        development: 0,
        marketFit: 0
      },
      team: {
        morale: -5,
        productivity: -10,
        size: 0,
        culture: 0
      }
    }
  },
  
  choices: [
    {
      id: 'crunch_time',
      text: 'Push the team to work extra hours to polish the MVP.',
      successChance: 75,
      requiredStats: {
        'founder.skills': {
          leadership: 40,
          technical: 30,
          networking: 0,
          fundraising: 0,
          marketing: 0,
          execution: 0,
          growth: 0,
          sustainability: 0
        }
      },
      impact: {
        startup: {
          product: {
            mvpProgress: 15,
            quality: 10,
            development: 8,
            innovation: 0,
            marketFit: 0
          },
          team: {
            morale: -15,
            productivity: -20,
            size: 0,
            culture: 0
          }
        },
        founder: {
          wellBeing: {
            energy: -30,
            stress: 25,
            health: 0
          },
          skills: {
            technical: 5,
            leadership: 3,
            networking: 0,
            fundraising: 0,
            marketing: 0,
            execution: 0,
            growth: 0,
            sustainability: 0
          }
        },
        triggerMilestone: 'mvp_completion_001'
      }
    },
    {
      id: 'balanced_approach',
      text: 'Maintain regular working hours but focus the team on essential features only.',
      impact: {
        startup: {
          product: {
            mvpProgress: 8,
            quality: 5,
            development: 5,
            innovation: 0,
            marketFit: 0
          },
          team: {
            morale: 5,
            productivity: 5,
            size: 0,
            culture: 0
          }
        },
        founder: {
          wellBeing: {
            energy: -15,
            stress: 10,
            health: 0
          },
          skills: {
            technical: 2,
            leadership: 5,
            networking: 0,
            fundraising: 0,
            marketing: 0,
            execution: 0,
            growth: 0,
            sustainability: 0
          }
        }
      }
    }
  ]
};

export const featurePrioritization: GameEvent = {
  id: 'feature_prioritization_001',
  category: 'product',
  title: 'Feature Crossroads',
  description: 'Your team needs to decide the next major feature for the MVP. User research shows demand for a crucial but complex core function, while market trends point to an exciting AI-powered add-on that could generate buzz.',
  
  conditions: {
    requiredPhase: GamePhase.BOOTSTRAPPING,
    minimumStats: {
      'founder.skills': {
        technical: 25,
        execution: 20,
        marketing: 15
      },
      'startup.product': {
        mvpProgress: 30,
        quality: 20
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
      id: 'core_function',
      text: 'Focus on the core function: A robust authentication system with role-based access control.',
      successChance: 80,
      impact: {
        founder: {
          wellBeing: {
            energy: -20,
            stress: 20,
            health: -5
          },
          skills: {
            technical: 15,
            execution: 10,
            leadership: 5,
            marketing: 0,
            fundraising: 0,
            networking: 0,
            growth: 5,
            sustainability: 8
          }
        },
        startup: {
          product: {
            mvpProgress: 25,
            quality: 30,
            development: 20,
            innovation: 5,
            marketFit: 15
          },
          team: {
            morale: 10,
            productivity: 20,
            culture: 5,
            size: 0
          },
          finances: {
            cash: 0,
            burnRate: 5000,
            revenue: 0,
            valuation: 200000
          }
        },
        relationships: {
          customers: 20,
          investors: 10,
          community: 5
        },
        triggerMilestone: 'core_feature_complete'
      }
    },
    {
      id: 'trendy_addon',
      text: 'Develop the AI-powered feature: A smart recommendation engine that could differentiate your product.',
      successChance: 60,
      impact: {
        founder: {
          wellBeing: {
            energy: -15,
            stress: 25,
            health: -5
          },
          skills: {
            technical: 10,
            execution: 5,
            leadership: 0,
            marketing: 15,
            fundraising: 10,
            networking: 5,
            growth: 10,
            sustainability: 0
          }
        },
        startup: {
          product: {
            mvpProgress: 15,
            quality: 15,
            development: 15,
            innovation: 25,
            marketFit: 10
          },
          team: {
            morale: 15,
            productivity: 15,
            culture: 10,
            size: 0
          },
          finances: {
            cash: 0,
            burnRate: 8000,
            revenue: 0,
            valuation: 400000
          }
        },
        relationships: {
          customers: 10,
          investors: 25,
          community: 20
        },
        triggerMilestone: 'innovation_feature_complete'
      }
    }
  ]
};

export const featureValidation: GameEvent = {
  id: 'feature_validation_001',
  category: 'product',
  title: 'Early User Feedback',
  description: 'The new feature is ready for testing. How will you gather and incorporate user feedback?',
  
  conditions: {
    requiredPhase: GamePhase.BOOTSTRAPPING,
    activeMilestone: ['core_feature_complete', 'innovation_feature_complete']
  },
  
  impact: {
    startup: {
      product: {
        quality: 5,
        marketFit: 5,
        mvpProgress: 0,
        innovation: 0,
        development: 0
      }
    }
  },
  
  choices: [
    {
      id: 'extensive_testing',
      text: 'Run a comprehensive beta testing program with detailed user interviews.',
      impact: {
        founder: {
          wellBeing: {
            energy: -15,
            stress: 10,
            health: 0
          },
          skills: {
            technical: 5,
            execution: 10,
            marketing: 8,
            growth: 5,
            sustainability: 5,
            leadership: 0,
            networking: 0,
            fundraising: 0
          }
        },
        startup: {
          product: {
            mvpProgress: 10,
            quality: 20,
            development: 15,
            innovation: 5,
            marketFit: 25
          },
          team: {
            morale: 15,
            productivity: 10,
            culture: 10,
            size: 0
          }
        },
        relationships: {
          customers: 25,
          community: 15,
          investors: 10
        },
        triggerMilestone: 'user_validation_complete'
      }
    },
    {
      id: 'quick_release',
      text: 'Push for a quick release and gather feedback through analytics and user metrics.',
      successChance: 65,
      impact: {
        founder: {
          wellBeing: {
            energy: -10,
            stress: 20,
            health: 0
          },
          skills: {
            technical: 8,
            execution: 5,
            marketing: 10,
            growth: 10,
            sustainability: 0,
            leadership: 0,
            networking: 0,
            fundraising: 0
          }
        },
        startup: {
          product: {
            mvpProgress: 20,
            quality: 10,
            development: 20,
            innovation: 10,
            marketFit: 15
          },
          team: {
            morale: 10,
            productivity: 15,
            culture: 5,
            size: 0
          }
        },
        relationships: {
          customers: 15,
          community: 20,
          investors: 15
        }
      }
    }
  ]
};

export const initialIdeaValidation: GameEvent = {
  id: 'initial_idea_validation_001',
  category: 'product',
  title: 'Initial Idea Validation',
  description: 'Time to validate your initial product idea through customer interviews and market research.',
  
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
        technical: 3,
        execution: 2,
        leadership: 0,
        networking: 0,
        fundraising: 0,
        marketing: 0,
        growth: 0,
        sustainability: 0
      },
      wellBeing: {
        energy: -10,
        stress: 5,
        health: 0
      }
    }
  },
  
  choices: [
    {
      id: 'customer_interviews',
      text: 'Conduct in-depth customer interviews to validate your assumptions',
      successChance: 75,
      impact: {
        founder: {
          skills: {
            technical: 5,
            execution: 5,
            marketing: 3,
            leadership: 0,
            networking: 2,
            fundraising: 0,
            growth: 0,
            sustainability: 0
          },
          wellBeing: {
            energy: -15,
            stress: 10,
            health: 0
          }
        },
        relationships: {
          community: 10
        }
      }
    },
    {
      id: 'market_research',
      text: 'Focus on market research and competitive analysis',
      impact: {
        founder: {
          skills: {
            technical: 3,
            execution: 3,
            marketing: 5,
            leadership: 0,
            networking: 0,
            fundraising: 0,
            growth: 2,
            sustainability: 0
          },
          wellBeing: {
            energy: -10,
            stress: 5,
            health: 0
          }
        }
      }
    }
  ]
};

export const productBrainstorming: GameEvent = {
  id: 'product_brainstorming_001',
  category: 'product',
  title: 'Product Feature Brainstorming',
  description: 'Time to brainstorm the core features of your product. What will set you apart from the competition?',
  
  conditions: {
    requiredPhase: GamePhase.IDEATION,
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
        technical: 2,
        execution: 2,
        leadership: 0,
        networking: 0,
        fundraising: 0,
        marketing: 1,
        growth: 1,
        sustainability: 0
      },
      wellBeing: {
        energy: -8,
        stress: 5,
        health: 0
      }
    }
  },
  
  choices: [
    {
      id: 'innovative_features',
      text: 'Focus on innovative, cutting-edge features that could disrupt the market',
      successChance: 70,
      impact: {
        founder: {
          skills: {
            technical: 5,
            execution: 3,
            leadership: 2,
            networking: 0,
            fundraising: 2,
            marketing: 3,
            growth: 3,
            sustainability: 0
          },
          wellBeing: {
            energy: -15,
            stress: 12,
            health: 0
          }
        },
        startup: {
          product: {
            innovation: 15,
            quality: 5,
            development: 8,
            marketFit: 5,
            mvpProgress: 10
          }
        },
        relationships: {
          investors: 10,
          community: 5
        }
      }
    },
    {
      id: 'market_needs',
      text: 'Prioritize features based on clear market needs and user pain points',
      impact: {
        founder: {
          skills: {
            technical: 3,
            execution: 5,
            leadership: 0,
            networking: 2,
            fundraising: 0,
            marketing: 5,
            growth: 2,
            sustainability: 2
          },
          wellBeing: {
            energy: -10,
            stress: 8,
            health: 0
          }
        },
        startup: {
          product: {
            innovation: 5,
            quality: 10,
            development: 5,
            marketFit: 15,
            mvpProgress: 8
          }
        },
        relationships: {
          customers: 15,
          community: 8
        }
      }
    }
  ]
};

export const prototypeStrategy: GameEvent = {
  id: 'prototype_strategy_001',
  category: 'product',
  title: 'Prototype Development Strategy',
  description: 'You need to create a prototype to validate your ideas. How will you approach the initial development?',
  
  conditions: {
    requiredPhase: GamePhase.IDEATION,
    minimumStats: {
      'founder.skills': {
        technical: 20,
        execution: 15,
        leadership: 0,
        networking: 0,
        fundraising: 0,
        marketing: 0,
        growth: 0,
        sustainability: 0
      }
    }
  },
  
  impact: {
    startup: {
      product: {
        mvpProgress: 5,
        quality: 3,
        development: 5,
        innovation: 0,
        marketFit: 0
      }
    }
  },
  
  choices: [
    {
      id: 'rapid_prototyping',
      text: 'Use rapid prototyping tools to quickly create a functional demo',
      successChance: 80,
      impact: {
        founder: {
          skills: {
            technical: 8,
            execution: 10,
            leadership: 0,
            networking: 0,
            fundraising: 2,
            marketing: 3,
            growth: 2,
            sustainability: 0
          },
          wellBeing: {
            energy: -12,
            stress: 10,
            health: 0
          }
        },
        startup: {
          product: {
            mvpProgress: 15,
            quality: 5,
            development: 12,
            innovation: 5,
            marketFit: 8
          }
        },
        relationships: {
          customers: 10,
          investors: 5
        },
        triggerMilestone: 'rapid_prototype_complete'
      }
    },
    {
      id: 'detailed_prototype',
      text: 'Build a more polished prototype with attention to design and user experience',
      impact: {
        founder: {
          skills: {
            technical: 10,
            execution: 5,
            leadership: 2,
            networking: 0,
            fundraising: 0,
            marketing: 5,
            growth: 0,
            sustainability: 2
          },
          wellBeing: {
            energy: -18,
            stress: 15,
            health: 0
          }
        },
        startup: {
          product: {
            mvpProgress: 10,
            quality: 15,
            development: 8,
            innovation: 8,
            marketFit: 12
          }
        },
        relationships: {
          customers: 15,
          community: 8
        },
        triggerMilestone: 'polished_prototype_complete'
      }
    }
  ]
};

export const userTesting: GameEvent = {
  id: 'user_testing_001',
  category: 'product',
  title: 'Early User Testing',
  description: 'Your prototype is ready for initial user testing. How will you gather early feedback?',
  
  conditions: {
    requiredPhase: GamePhase.IDEATION,
    activeMilestone: ['rapid_prototype_complete', 'polished_prototype_complete']
  },
  
  impact: {
    startup: {
      product: {
        marketFit: 5,
        quality: 3,
        development: 0,
        innovation: 0,
        mvpProgress: 0
      }
    }
  },
  
  choices: [
    {
      id: 'structured_testing',
      text: 'Conduct structured user testing sessions with detailed feedback collection',
      successChance: 85,
      impact: {
        founder: {
          skills: {
            technical: 5,
            execution: 8,
            leadership: 3,
            networking: 2,
            fundraising: 0,
            marketing: 5,
            growth: 3,
            sustainability: 2
          },
          wellBeing: {
            energy: -15,
            stress: 10,
            health: 0
          }
        },
        startup: {
          product: {
            marketFit: 15,
            quality: 12,
            development: 8,
            innovation: 5,
            mvpProgress: 10
          }
        },
        relationships: {
          customers: 20,
          community: 10
        },
        triggerMilestone: 'user_validation_complete'
      }
    },
    {
      id: 'informal_feedback',
      text: 'Share the prototype with your network for quick, informal feedback',
      impact: {
        founder: {
          skills: {
            technical: 3,
            execution: 5,
            leadership: 2,
            networking: 5,
            fundraising: 2,
            marketing: 3,
            growth: 2,
            sustainability: 0
          },
          wellBeing: {
            energy: -8,
            stress: 5,
            health: 0
          }
        },
        startup: {
          product: {
            marketFit: 10,
            quality: 5,
            development: 5,
            innovation: 8,
            mvpProgress: 8
          }
        },
        relationships: {
          customers: 12,
          community: 15,
          investors: 5
        }
      }
    }
  ]
};

export const investorDemo: GameEvent = {
  id: 'investor_demo_001',
  category: 'product',
  title: 'Investor Demo Preparation',
  description: 'You need to prepare a compelling product demo for investor meetings. What aspects will you emphasize?',
  
  conditions: {
    requiredPhase: GamePhase.FUNDRAISING,
    minimumStats: {
      'founder.skills': {
        technical: 30,
        fundraising: 25,
        marketing: 20,
        leadership: 0,
        networking: 0,
        execution: 0,
        growth: 0,
        sustainability: 0
      }
    }
  },
  
  impact: {
    startup: {
      product: {
        quality: 5,
        development: 3,
        innovation: 0,
        marketFit: 0,
        mvpProgress: 5
      }
    }
  },
  
  choices: [
    {
      id: 'growth_metrics',
      text: 'Focus on demonstrating growth metrics and market traction',
      successChance: 75,
      impact: {
        founder: {
          skills: {
            marketing: 8,
            fundraising: 10,
            technical: 3,
            leadership: 2,
            networking: 5,
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
          product: {
            quality: 8,
            development: 5,
            innovation: 3,
            marketFit: 15,
            mvpProgress: 10
          },
          market: {
            userTraction: 15,
            brandReputation: 10,
            socialPresence: 8,
            marketFit: 12,
            userGrowth: 15
          }
        },
        relationships: {
          investors: 20,
          customers: 10
        },
        triggerMilestone: 'compelling_metrics_001'
      }
    },
    {
      id: 'technical_innovation',
      text: 'Showcase technical innovation and product scalability',
      impact: {
        founder: {
          skills: {
            technical: 10,
            fundraising: 8,
            marketing: 5,
            leadership: 0,
            networking: 3,
            execution: 5,
            growth: 5,
            sustainability: 5
          },
          wellBeing: {
            energy: -12,
            stress: 10,
            health: 0
          }
        },
        startup: {
          product: {
            quality: 12,
            development: 15,
            innovation: 20,
            marketFit: 8,
            mvpProgress: 12
          },
          market: {
            userTraction: 8,
            brandReputation: 15,
            socialPresence: 5,
            marketFit: 10,
            userGrowth: 8
          }
        },
        relationships: {
          investors: 15,
          community: 12
        },
        triggerMilestone: 'technical_excellence_001'
      }
    }
  ]
};

export const productRoadmapPitch: GameEvent = {
  id: 'product_roadmap_pitch_001',
  category: 'product',
  title: 'Product Roadmap for Investors',
  description: 'Investors want to see your product vision and roadmap. How will you present your future plans?',
  
  conditions: {
    requiredPhase: GamePhase.FUNDRAISING,
    minimumStats: {
      'founder.skills': {
        leadership: 30,
        technical: 25,
        execution: 20,
        networking: 0,
        fundraising: 0,
        marketing: 0,
        growth: 0,
        sustainability: 0
      }
    }
  },
  
  impact: {
    startup: {
      product: {
        innovation: 5,
        development: 3,
        quality: 0,
        marketFit: 0,
        mvpProgress: 0
      }
    }
  },
  
  choices: [
    {
      id: 'ambitious_vision',
      text: 'Present an ambitious vision with breakthrough features and market expansion',
      successChance: 70,
      impact: {
        founder: {
          skills: {
            leadership: 10,
            technical: 5,
            execution: 3,
            networking: 0,
            fundraising: 8,
            marketing: 5,
            growth: 10,
            sustainability: 0
          },
          wellBeing: {
            energy: -15,
            stress: 15,
            health: 0
          }
        },
        startup: {
          product: {
            innovation: 20,
            development: 10,
            quality: 5,
            marketFit: 8,
            mvpProgress: 5
          },
          finances: {
            valuation: 1000000,
            cash: 0,
            burnRate: 5000,
            revenue: 0
          }
        },
        relationships: {
          investors: 25,
          community: 15,
          customers: 5
        }
      }
    },
    {
      id: 'realistic_growth',
      text: 'Focus on realistic, achievable growth with clear market validation',
      impact: {
        founder: {
          skills: {
            leadership: 8,
            technical: 5,
            execution: 10,
            networking: 0,
            fundraising: 5,
            marketing: 8,
            growth: 5,
            sustainability: 8
          },
          wellBeing: {
            energy: -10,
            stress: 8,
            health: 0
          }
        },
        startup: {
          product: {
            innovation: 8,
            development: 15,
            quality: 12,
            marketFit: 15,
            mvpProgress: 10
          },
          finances: {
            valuation: 500000,
            cash: 0,
            burnRate: 3000,
            revenue: 0
          }
        },
        relationships: {
          investors: 15,
          customers: 20,
          community: 10
        }
      }
    }
  ]
};

export const scalingChallenge: GameEvent = {
  id: 'scaling_challenge_001',
  category: 'product',
  title: 'Scaling for Growth',
  description: 'As investor interest grows, you need to prove your product can scale. A sudden surge in users is testing your infrastructure.',
  
  conditions: {
    requiredPhase: GamePhase.FUNDRAISING,
    minimumStats: {
      'founder.skills': {
        technical: 35,
        execution: 30,
        leadership: 0,
        networking: 0,
        fundraising: 0,
        marketing: 0,
        growth: 0,
        sustainability: 0
      },
      'startup.product': {
        quality: 50,
        development: 40
      }
    }
  },
  
  impact: {
    startup: {
      product: {
        quality: -5,
        development: 5,
        innovation: 0,
        marketFit: 0,
        mvpProgress: 0
      }
    }
  },
  
  choices: [
    {
      id: 'infrastructure_investment',
      text: 'Invest heavily in infrastructure and scalability improvements',
      successChance: 80,
      impact: {
        founder: {
          skills: {
            technical: 15,
            execution: 10,
            leadership: 5,
            networking: 0,
            fundraising: 5,
            marketing: 0,
            growth: 8,
            sustainability: 10
          },
          wellBeing: {
            energy: -20,
            stress: 15,
            health: 0
          }
        },
        startup: {
          product: {
            quality: 20,
            development: 15,
            innovation: 10,
            marketFit: 5,
            mvpProgress: 10
          },
          finances: {
            cash: -50000,
            burnRate: 8000,
            revenue: 0,
            valuation: 800000
          }
        },
        relationships: {
          investors: 20,
          customers: 15,
          employees: 10
        },
        triggerMilestone: 'infrastructure_upgrade_001'
      }
    },
    {
      id: 'gradual_scaling',
      text: 'Implement temporary solutions while scaling gradually',
      impact: {
        founder: {
          skills: {
            technical: 8,
            execution: 12,
            leadership: 3,
            networking: 0,
            fundraising: 3,
            marketing: 5,
            growth: 5,
            sustainability: 5
          },
          wellBeing: {
            energy: -12,
            stress: 10,
            health: 0
          }
        },
        startup: {
          product: {
            quality: 10,
            development: 8,
            innovation: 5,
            marketFit: 12,
            mvpProgress: 8
          },
          finances: {
            cash: -20000,
            burnRate: 5000,
            revenue: 0,
            valuation: 500000
          }
        },
        relationships: {
          customers: 10,
          investors: 8,
          employees: 15
        }
      }
    }
  ]
};

export const productExpansion: GameEvent = {
  id: 'product_expansion_001',
  category: 'product',
  title: 'Product Line Expansion',
  description: 'With strong market presence, it\'s time to expand your product line. How will you approach this growth?',
  
  conditions: {
    requiredPhase: GamePhase.SCALING,
    minimumStats: {
      'founder.skills': {
        leadership: 40,
        technical: 35,
        execution: 35,
        marketing: 30,
        networking: 0,
        fundraising: 0,
        growth: 0,
        sustainability: 0
      },
      'startup.product': {
        quality: 60,
        marketFit: 50
      }
    }
  },
  
  impact: {
    startup: {
      product: {
        innovation: 5,
        quality: 3,
        development: 5,
        marketFit: 0,
        mvpProgress: 0
      }
    }
  },
  
  choices: [
    {
      id: 'vertical_expansion',
      text: 'Focus on vertical expansion - Build more advanced features for existing customers',
      successChance: 80,
      impact: {
        founder: {
          skills: {
            technical: 12,
            execution: 10,
            leadership: 8,
            marketing: 5,
            networking: 0,
            fundraising: 0,
            growth: 10,
            sustainability: 8
          },
          wellBeing: {
            energy: -15,
            stress: 12,
            health: 0
          }
        },
        startup: {
          product: {
            quality: 20,
            development: 15,
            innovation: 12,
            marketFit: 15,
            mvpProgress: 10
          },
          finances: {
            revenue: 200000,
            cash: 100000,
            burnRate: 50000,
            valuation: 5000000
          }
        },
        relationships: {
          customers: 25,
          investors: 15,
          employees: 10
        },
        triggerMilestone: 'vertical_growth_001'
      }
    },
    {
      id: 'horizontal_expansion',
      text: 'Pursue horizontal expansion - Launch new products for different market segments',
      impact: {
        founder: {
          skills: {
            marketing: 12,
            execution: 8,
            leadership: 10,
            technical: 5,
            networking: 8,
            fundraising: 5,
            growth: 15,
            sustainability: 5
          },
          wellBeing: {
            energy: -20,
            stress: 15,
            health: 0
          }
        },
        startup: {
          product: {
            quality: 10,
            development: 20,
            innovation: 15,
            marketFit: 10,
            mvpProgress: 15
          },
          finances: {
            revenue: 150000,
            cash: 80000,
            burnRate: 70000,
            valuation: 8000000
          }
        },
        relationships: {
          customers: 15,
          investors: 20,
          community: 15
        },
        triggerMilestone: 'horizontal_growth_001'
      }
    }
  ]
};

export const enterpriseFeatures: GameEvent = {
  id: 'enterprise_features_001',
  category: 'product',
  title: 'Enterprise Feature Development',
  description: 'Large enterprise customers are requesting specific features. How will you adapt your product for enterprise needs?',
  
  conditions: {
    requiredPhase: GamePhase.SCALING,
    minimumStats: {
      'founder.skills': {
        technical: 45,
        execution: 40,
        leadership: 35,
        networking: 0,
        fundraising: 0,
        marketing: 0,
        growth: 0,
        sustainability: 0
      }
    }
  },
  
  impact: {
    startup: {
      product: {
        quality: 8,
        development: 5,
        innovation: 0,
        marketFit: 5,
        mvpProgress: 0
      }
    }
  },
  
  choices: [
    {
      id: 'dedicated_enterprise',
      text: 'Build a dedicated enterprise version with advanced security and management features',
      successChance: 75,
      impact: {
        founder: {
          skills: {
            technical: 15,
            execution: 12,
            leadership: 8,
            marketing: 5,
            networking: 5,
            fundraising: 0,
            growth: 10,
            sustainability: 10
          },
          wellBeing: {
            energy: -25,
            stress: 20,
            health: 0
          }
        },
        startup: {
          product: {
            quality: 25,
            development: 20,
            innovation: 15,
            marketFit: 20,
            mvpProgress: 15
          },
          finances: {
            revenue: 500000,
            cash: 200000,
            burnRate: 100000,
            valuation: 10000000
          }
        },
        relationships: {
          customers: 30,
          investors: 20,
          employees: 15
        },
        triggerMilestone: 'enterprise_ready_001'
      }
    },
    {
      id: 'feature_tiers',
      text: 'Implement tiered feature access with enterprise features as premium add-ons',
      impact: {
        founder: {
          skills: {
            technical: 10,
            execution: 15,
            leadership: 5,
            marketing: 8,
            networking: 5,
            fundraising: 0,
            growth: 8,
            sustainability: 8
          },
          wellBeing: {
            energy: -15,
            stress: 12,
            health: 0
          }
        },
        startup: {
          product: {
            quality: 15,
            development: 12,
            innovation: 10,
            marketFit: 25,
            mvpProgress: 10
          },
          finances: {
            revenue: 300000,
            cash: 150000,
            burnRate: 80000,
            valuation: 8000000
          }
        },
        relationships: {
          customers: 20,
          investors: 15,
          employees: 10
        }
      }
    }
  ]
};

export const platformStrategy: GameEvent = {
  id: 'platform_strategy_001',
  category: 'product',
  title: 'Platform Evolution Strategy',
  description: 'Your product has potential to become a platform. How will you evolve from a product to a platform?',
  
  conditions: {
    requiredPhase: GamePhase.SCALING,
    minimumStats: {
      'founder.skills': {
        leadership: 50,
        technical: 45,
        execution: 40,
        marketing: 0,
        networking: 0,
        fundraising: 0,
        growth: 0,
        sustainability: 0
      },
      'startup.product': {
        quality: 70,
        development: 60
      }
    }
  },
  
  impact: {
    startup: {
      product: {
        innovation: 10,
        development: 5,
        quality: 5,
        marketFit: 0,
        mvpProgress: 0
      }
    }
  },
  
  choices: [
    {
      id: 'open_platform',
      text: 'Create an open platform with APIs and developer tools for third-party integration',
      successChance: 70,
      impact: {
        founder: {
          skills: {
            technical: 15,
            leadership: 12,
            execution: 10,
            marketing: 8,
            networking: 10,
            fundraising: 0,
            growth: 15,
            sustainability: 12
          },
          wellBeing: {
            energy: -25,
            stress: 20,
            health: 0
          }
        },
        startup: {
          product: {
            quality: 20,
            development: 25,
            innovation: 30,
            marketFit: 15,
            mvpProgress: 15
          },
          market: {
            brandReputation: 25,
            socialPresence: 20,
            userTraction: 15,
            marketFit: 20,
            userGrowth: 25
          }
        },
        relationships: {
          community: 30,
          customers: 20,
          investors: 25
        },
        triggerMilestone: 'platform_transformation_001'
      }
    },
    {
      id: 'controlled_ecosystem',
      text: 'Build a controlled ecosystem with carefully selected partners and integrations',
      impact: {
        founder: {
          skills: {
            leadership: 15,
            execution: 12,
            technical: 8,
            marketing: 10,
            networking: 12,
            fundraising: 0,
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
          product: {
            quality: 25,
            development: 20,
            innovation: 15,
            marketFit: 25,
            mvpProgress: 10
          },
          market: {
            brandReputation: 20,
            socialPresence: 15,
            userTraction: 25,
            marketFit: 25,
            userGrowth: 20
          }
        },
        relationships: {
          customers: 25,
          investors: 20,
          community: 15
        }
      }
    }
  ]
};

export const innovationBreakthrough: GameEvent = {
  id: 'innovation_breakthrough_001',
  category: 'product',
  title: 'Innovation Breakthrough',
  description: 'Your team has discovered a novel approach to solving a key technical challenge.',
  
  conditions: {
    minimumStats: {
      'startup.product': {
        development: 40,
        quality: 30,
        innovation: 0,
        marketFit: 0,
        mvpProgress: 0
      }
    }
  },
  
  impact: {},
  
  choices: [
    {
      id: 'full_rebuild',
      text: 'Rebuild core components to implement the breakthrough',
      successChance: 70,
      requiredStats: {
        'founder.skills': {
          technical: 50,
          execution: 40
        }
      },
      impact: {
        startup: {
          finances: {
            cash: -40000,
            burnRate: 15000,
            revenue: 0,
            valuation: 0
          },
          product: {
            quality: 30,
            innovation: 40,
            development: -10,
            marketFit: 20,
            mvpProgress: -15
          },
          team: {
            morale: 20,
            productivity: -15,
            culture: 10,
            size: 0
          }
        },
        founder: {
          skills: {
            technical: 20,
            execution: 15,
            leadership: 10,
            networking: 0,
            fundraising: 0,
            marketing: 0,
            growth: 10,
            sustainability: 5
          },
          wellBeing: {
            energy: -20,
            stress: 25,
            health: -10
          }
        },
        relationships: {
          customers: -10,
          investors: 20,
          community: 0,
          employees: 0
        }
      }
    },
    {
      id: 'gradual_integration',
      text: 'Gradually integrate the innovation while maintaining stability',
      impact: {
        founder: {
          skills: {
            technical: 10,
            execution: 15,
            leadership: 5,
            networking: 0,
            fundraising: 0,
            marketing: 0,
            growth: 5,
            sustainability: 15
          },
          wellBeing: {
            energy: -10,
            stress: 15,
            health: -5
          }
        },
        startup: {
          product: {
            quality: 20,
            innovation: 25,
            development: 15,
            marketFit: 15,
            mvpProgress: 10
          },
          team: {
            morale: 15,
            productivity: 10,
            culture: 15,
            size: 0
          }
        },
        relationships: {
          customers: 10,
          investors: 15
        }
      }
    }
  ]
};

export const qualityChallenge: GameEvent = {
  id: 'quality_challenge_001',
  category: 'product',
  title: 'Quality Assurance Challenge',
  description: 'Users are reporting increasing bugs and stability issues as the product grows.',
  
  conditions: {
    minimumStats: {
      'startup.product': {
        development: 50
      }
    }
  },
  
  impact: {},
  
  choices: [
    {
      id: 'quality_sprint',
      text: 'Dedicate a full sprint to quality improvements and testing',
      impact: {
        founder: {
          skills: {
            technical: 15,
            execution: 20,
            leadership: 10,
            networking: 0,
            fundraising: 0,
            marketing: 0,
            growth: 0,
            sustainability: 15
          },
          wellBeing: {
            energy: -15,
            stress: 20,
            health: -5
          }
        },
        startup: {
          product: {
            quality: 40,
            innovation: 5,
            development: 20,
            marketFit: 15,
            mvpProgress: 10
          },
          team: {
            morale: 15,
            productivity: 20,
            culture: 10,
            size: 0
          }
        },
        relationships: {
          customers: 25,
          investors: 10
        }
      }
    },
    {
      id: 'hire_qa',
      text: 'Hire dedicated QA engineers',
      impact: {
        founder: {
          skills: {
            technical: 10,
            execution: 15,
            leadership: 15,
            networking: 0,
            fundraising: 0,
            marketing: 0,
            growth: 5,
            sustainability: 10
          },
          wellBeing: {
            energy: -5,
            stress: 10,
            health: 0
          }
        },
        startup: {
          product: {
            quality: 30,
            innovation: 10,
            development: 25,
            marketFit: 10,
            mvpProgress: 15
          },
          team: {
            morale: 10,
            productivity: 25,
            culture: 5,
            size: 2
          },
          finances: {
            cash: -40000,
            burnRate: 15000,
            revenue: 0,
            valuation: 0
          }
        },
        relationships: {
          customers: 20,
          investors: 15,
          employees: 10
        }
      }
    }
  ]
};

export const techDebtCrisis: GameEvent = {
  id: 'tech_debt_crisis_001',
  category: 'product',
  title: 'Technical Debt Crisis',
  description: 'Rapid development has led to significant technical debt, threatening future development speed.',
  
  conditions: {
    minimumStats: {
      'startup.product': {
        development: 60,
        quality: 40
      }
    }
  },
  
  impact: {},
  
  choices: [
    {
      id: 'major_refactor',
      text: 'Initiate a major refactoring project',
      successChance: 75,
      requiredStats: {
        'founder.skills': {
          technical: 60,
          execution: 50
        }
      },
      impact: {
        founder: {
          skills: {
            technical: 25,
            execution: 20,
            leadership: 15,
            networking: 0,
            fundraising: 0,
            marketing: 0,
            growth: 5,
            sustainability: 20
          },
          wellBeing: {
            energy: -25,
            stress: 30,
            health: -15
          }
        },
        startup: {
          product: {
            quality: 40,
            innovation: 20,
            development: 30,
            marketFit: 10,
            mvpProgress: -20
          },
          team: {
            morale: 15,
            productivity: 30,
            culture: 10,
            size: 0
          },
          finances: {
            cash: -30000,
            burnRate: 10000,
            revenue: 0,
            valuation: 0
          }
        },
        relationships: {
          customers: -15,
          investors: -10,
          employees: 20
        }
      }
    },
    {
      id: 'gradual_improvement',
      text: 'Address technical debt gradually alongside new features',
      impact: {
        founder: {
          skills: {
            technical: 15,
            execution: 10,
            leadership: 10,
            networking: 0,
            fundraising: 0,
            marketing: 0,
            growth: 10,
            sustainability: 10
          },
          wellBeing: {
            energy: -15,
            stress: 20,
            health: -10
          }
        },
        startup: {
          product: {
            quality: 20,
            innovation: 15,
            development: 15,
            marketFit: 15,
            mvpProgress: 10
          },
          team: {
            morale: 10,
            productivity: 15,
            culture: 15,
            size: 0
          },
          finances: {
            cash: -15000,
            burnRate: 5000,
            revenue: 0,
            valuation: 0
          }
        },
        relationships: {
          customers: 10,
          investors: 5,
          employees: 15
        }
      }
    }
  ]
}; 