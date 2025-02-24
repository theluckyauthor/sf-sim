import { GameEvent, GamePhase } from '../../types/stats';

export const initialMarketAnalysis: GameEvent = {
  id: 'initial_market_analysis_001',
  category: 'market',
  title: 'Initial Market Analysis',
  description: 'Time to analyze your target market and understand the competitive landscape.',
  
  conditions: {
    requiredPhase: GamePhase.SETTLING_IN,
    minimumStats: {
      'founder.wellBeing': {
        energy: 25,
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
        networking: 0,
        fundraising: 1,
        marketing: 3,
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
      id: 'deep_research',
      text: 'Conduct thorough market research and competitor analysis',
      successChance: 85,
      impact: {
        founder: {
          skills: {
            technical: 0,
            execution: 3,
            leadership: 0,
            networking: 0,
            fundraising: 2,
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
            marketFit: 10,
            quality: 0,
            development: 0,
            innovation: 5,
            mvpProgress: 0
          }
        },
        relationships: {
          investors: 5,
          community: 3
        }
      }
    },
    {
      id: 'customer_focus',
      text: 'Focus on understanding potential customer needs and pain points',
      impact: {
        founder: {
          skills: {
            technical: 0,
            execution: 4,
            leadership: 2,
            networking: 2,
            fundraising: 0,
            marketing: 4,
            growth: 2,
            sustainability: 0
          },
          wellBeing: {
            energy: -10,
            stress: 8,
            health: 0
          }
        },
        startup: {
          product: {
            marketFit: 15,
            quality: 5,
            development: 0,
            innovation: 0,
            mvpProgress: 5
          }
        },
        relationships: {
          customers: 10,
          community: 5
        }
      }
    }
  ]
};

export const productHunt: GameEvent = {
  id: 'product_hunt_launch_001',
  category: 'market',
  title: 'Product Hunt Launch Day',
  description: 'Your MVP is ready for a public launch. Product Hunt could give you significant initial exposure.',
  
  conditions: {
    requiredPhase: GamePhase.BOOTSTRAPPING,
    minimumStats: {
      'startup.product': {
        mvpProgress: 80,
        quality: 60,
        development: 0,
        innovation: 0,
        marketFit: 0
      }
    }
  },
  
  impact: {
    startup: {
      market: {
        userTraction: 5,
        brandReputation: 5,
        socialPresence: 10,
        marketFit: 0,
        userGrowth: 0
      }
    }
  },
  
  choices: [
    {
      id: 'community_focus',
      text: 'Engage with the Product Hunt community early and build relationships with influencers.',
      successChance: 75,
      requiredStats: {
        'founder.skills': {
          marketing: 30,
          networking: 20,
          technical: 0,
          leadership: 0,
          fundraising: 0,
          execution: 0,
          growth: 0,
          sustainability: 0
        }
      },
      impact: {
        startup: {
          market: {
            userTraction: 25,
            brandReputation: 20,
            socialPresence: 30,
            marketFit: 10,
            userGrowth: 15
          },
          finances: {
            cash: 0,
            revenue: 5000,
            burnRate: 0,
            valuation: 500000
          }
        },
        founder: {
          skills: {
            marketing: 10,
            networking: 5,
            technical: 0,
            leadership: 0,
            fundraising: 0,
            execution: 0,
            growth: 5,
            sustainability: 0
          },
          wellBeing: {
            energy: -20,
            stress: 15,
            health: 0
          }
        },
        relationships: {
          customers: 20,
          community: 15,
          investors: 10,
          employees: 0
        },
        triggerMilestone: 'successful_launch_001'
      }
    },
    {
      id: 'product_focus',
      text: 'Focus on polishing the product and documentation for launch day.',
      impact: {
        startup: {
          market: {
            userTraction: 15,
            brandReputation: 10,
            socialPresence: 15,
            marketFit: 15,
            userGrowth: 8
          },
          product: {
            quality: 10,
            development: 5,
            mvpProgress: 5,
            innovation: 0,
            marketFit: 8
          }
        },
        founder: {
          skills: {
            technical: 5,
            marketing: 3,
            networking: 0,
            leadership: 0,
            fundraising: 0,
            execution: 5,
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
          customers: 10,
          community: 5,
          investors: 5,
          employees: 0
        }
      }
    }
  ]
};

export const marketFeedback: GameEvent = {
  id: 'market_feedback_001',
  category: 'market',
  title: 'Early User Feedback',
  description: 'The first wave of user feedback is in. There\'s a clear pattern in what users are saying.',
  
  conditions: {
    requiredPhase: GamePhase.BOOTSTRAPPING,
    minimumStats: {
      'startup.market': {
        userTraction: 20,
        marketFit: 0,
        brandReputation: 0,
        socialPresence: 0,
        userGrowth: 0
      }
    }
  },
  
  impact: {
    startup: {
      market: {
        userTraction: -5,
        marketFit: 5,
        brandReputation: 0,
        socialPresence: 0,
        userGrowth: 0
      }
    }
  },
  
  choices: [
    {
      id: 'pivot_product',
      text: 'Pivot the product based on user feedback - they\'re using it differently than expected.',
      successChance: 65,
      impact: {
        startup: {
          market: {
            userTraction: -5,
            brandReputation: 5,
            socialPresence: 0,
            marketFit: 20,
            userGrowth: 10
          },
          product: {
            development: 15,
            quality: 10,
            mvpProgress: -10,
            innovation: 15,
            marketFit: 25
          }
        },
        founder: {
          skills: {
            execution: 10,
            technical: 5,
            marketing: 5,
            networking: 0,
            leadership: 0,
            fundraising: 0,
            growth: 5,
            sustainability: 0
          },
          wellBeing: {
            energy: -20,
            stress: 20,
            health: 0
          }
        },
        relationships: {
          customers: 15,
          community: 0,
          investors: -5,
          employees: -5
        },
        triggerMilestone: 'product_pivot_001'
      }
    },
    {
      id: 'stay_course',
      text: 'Stay the course - focus on better explaining the product\'s intended use.',
      impact: {
        startup: {
          market: {
            userTraction: 5,
            brandReputation: 0,
            socialPresence: 5,
            marketFit: 5,
            userGrowth: 3
          },
          product: {
            development: 5,
            quality: 5,
            mvpProgress: 10,
            innovation: 0,
            marketFit: 5
          }
        },
        founder: {
          skills: {
            marketing: 8,
            technical: 0,
            networking: 0,
            leadership: 0,
            fundraising: 0,
            execution: 3,
            growth: 0,
            sustainability: 0
          },
          wellBeing: {
            energy: -10,
            stress: 5,
            health: 0
          }
        },
        relationships: {
          customers: 5,
          community: 5,
          investors: 0,
          employees: 5
        }
      }
    }
  ]
};

export const publicDemo: GameEvent = {
  id: 'public_demo_001',
  category: 'market',
  title: 'SOMA Demo Day',
  description: 'You\'ve been invited to showcase your product at a popular tech hub in SOMA. The room will be full of potential users, investors, and tech journalists.',
  
  conditions: {
    requiredPhase: GamePhase.BOOTSTRAPPING,
    minimumStats: {
      'founder.skills': {
        marketing: 25,
        technical: 20,
        execution: 15,
        leadership: 0,
        networking: 0,
        fundraising: 0,
        growth: 0,
        sustainability: 0
      },
      'startup.team': {
        productivity: 50,
        morale: 40,
        size: 0,
        culture: 0
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
      id: 'ambitious_showcase',
      text: 'Go big: Demo cutting-edge features and promise an ambitious roadmap.',
      successChance: 65,
      impact: {
        founder: {
          wellBeing: {
            energy: -25,
            stress: 30,
            health: -5
          },
          skills: {
            marketing: 15,
            technical: 10,
            execution: 5,
            leadership: 5,
            networking: 10,
            fundraising: 8,
            growth: 10,
            sustainability: -5
          }
        },
        startup: {
          product: {
            mvpProgress: 10,
            quality: 15,
            development: 10,
            innovation: 20,
            marketFit: 5
          },
          team: {
            size: 0,
            morale: -5,
            productivity: -10,
            culture: 0
          },
          market: {
            brandReputation: 25,
            socialPresence: 30,
            userTraction: 15,
            marketFit: 10,
            userGrowth: 20
          }
        },
        relationships: {
          investors: 20,
          customers: 15,
          community: 25
        },
        triggerMilestone: 'hype_generated_001'
      }
    },
    {
      id: 'focused_demo',
      text: 'Keep it real: Show polished core features and emphasize current user success.',
      successChance: 85,
      impact: {
        founder: {
          wellBeing: {
            energy: -15,
            stress: 15,
            health: 0
          },
          skills: {
            marketing: 10,
            technical: 5,
            execution: 10,
            leadership: 8,
            networking: 5,
            fundraising: 5,
            growth: 5,
            sustainability: 10
          }
        },
        startup: {
          product: {
            mvpProgress: 15,
            quality: 20,
            development: 15,
            innovation: 5,
            marketFit: 15
          },
          team: {
            size: 0,
            morale: 10,
            productivity: 5,
            culture: 10
          },
          market: {
            brandReputation: 15,
            socialPresence: 10,
            userTraction: 20,
            marketFit: 20,
            userGrowth: 15
          }
        },
        relationships: {
          investors: 10,
          customers: 25,
          community: 15
        },
        triggerMilestone: 'credibility_established_001'
      }
    }
  ]
};

export const demoFallout: GameEvent = {
  id: 'demo_fallout_001',
  category: 'market',
  title: 'Post-Demo Reactions',
  description: 'Your demo is trending on tech Twitter. The community is debating your product\'s potential versus current capabilities.',
  
  conditions: {
    requiredPhase: GamePhase.BOOTSTRAPPING,
    activeMilestone: 'hype_generated_001'
  },
  
  impact: {
    startup: {
      market: {
        brandReputation: 5,
        socialPresence: 10,
        userTraction: 0,
        marketFit: 0,
        userGrowth: 0
      }
    }
  },
  
  choices: [
    {
      id: 'double_down',
      text: 'Double down on the vision: Share a detailed roadmap and start a waitlist.',
      impact: {
        founder: {
          wellBeing: {
            energy: -20,
            stress: 25,
            health: -5
          },
          skills: {
            marketing: 10,
            technical: 0,
            execution: 5,
            leadership: 5,
            networking: 10,
            fundraising: 15,
            growth: 15,
            sustainability: -10
          }
        },
        startup: {
          product: {
            mvpProgress: -5,
            quality: 0,
            development: 5,
            innovation: 10,
            marketFit: -5
          },
          team: {
            size: 0,
            morale: -10,
            productivity: -5,
            culture: -5
          },
          market: {
            brandReputation: 20,
            socialPresence: 25,
            userTraction: 10,
            marketFit: 5,
            userGrowth: 15
          }
        },
        relationships: {
          investors: 25,
          customers: -5,
          community: 15
        },
        triggerMilestone: 'viral_hype_001'
      }
    },
    {
      id: 'manage_expectations',
      text: 'Address concerns transparently: Share current limitations and near-term improvements.',
      impact: {
        founder: {
          wellBeing: {
            energy: -10,
            stress: 10,
            health: 0
          },
          skills: {
            marketing: 5,
            technical: 5,
            execution: 10,
            leadership: 15,
            networking: 5,
            fundraising: 5,
            growth: 5,
            sustainability: 15
          }
        },
        startup: {
          product: {
            mvpProgress: 10,
            quality: 15,
            development: 10,
            innovation: 5,
            marketFit: 15
          },
          team: {
            size: 0,
            morale: 15,
            productivity: 10,
            culture: 15
          },
          market: {
            brandReputation: 10,
            socialPresence: 5,
            userTraction: 15,
            marketFit: 20,
            userGrowth: 10
          }
        },
        relationships: {
          investors: 10,
          customers: 20,
          community: 25
        },
        triggerMilestone: 'trust_built_001'
      }
    }
  ]
};

export const marketValidation: GameEvent = {
  id: 'market_validation_001',
  category: 'market',
  title: 'Market Validation Strategy',
  description: 'Time to validate your market assumptions. How will you approach gathering initial market feedback?',
  
  conditions: {
    requiredPhase: GamePhase.IDEATION,
    minimumStats: {
      'founder.skills': {
        marketing: 15,
        execution: 10
      }
    }
  },
  
  impact: {
    founder: {
      wellBeing: {
        energy: -10,
        stress: 8,
        health: 0
      }
    }
  },
  
  choices: [
    {
      id: 'customer_interviews',
      text: 'Conduct in-depth interviews with potential customers',
      successChance: 80,
      impact: {
        founder: {
          skills: {
            marketing: 15,
            execution: 10,
            networking: 8,
            leadership: 5,
            technical: 0,
            fundraising: 5,
            growth: 8,
            sustainability: 5
          },
          wellBeing: {
            energy: -15,
            stress: 10,
            health: -5
          }
        },
        startup: {
          product: {
            marketFit: 20,
            innovation: 10,
            quality: 5,
            development: 0,
            mvpProgress: 5
          },
          market: {
            userTraction: 10,
            marketFit: 15,
            brandReputation: 5,
            socialPresence: 5,
            userGrowth: 0
          }
        },
        relationships: {
          customers: 20,
          community: 15,
          investors: 10
        }
      }
    },
    {
      id: 'market_survey',
      text: 'Launch a broad market survey with data analytics',
      impact: {
        founder: {
          skills: {
            marketing: 10,
            execution: 12,
            technical: 5,
            networking: 0,
            leadership: 0,
            fundraising: 8,
            growth: 5,
            sustainability: 3
          },
          wellBeing: {
            energy: -12,
            stress: 8,
            health: -3
          }
        },
        startup: {
          product: {
            marketFit: 15,
            innovation: 5,
            quality: 0,
            development: 5,
            mvpProgress: 8
          },
          market: {
            userTraction: 5,
            marketFit: 20,
            brandReputation: 8,
            socialPresence: 10,
            userGrowth: 5
          }
        },
        relationships: {
          customers: 15,
          community: 10,
          investors: 15
        }
      }
    }
  ]
};

export const investorMarketPitch: GameEvent = {
  id: 'investor_market_pitch_001',
  category: 'market',
  title: 'Market Size Presentation',
  description: 'Investors want to understand your market opportunity. How will you present your market analysis?',
  
  conditions: {
    requiredPhase: GamePhase.FUNDRAISING,
    minimumStats: {
      'founder.skills': {
        marketing: 25,
        fundraising: 20
      }
    }
  },
  
  impact: {
    founder: {
      wellBeing: {
        energy: -8,
        stress: 12,
        health: 0
      }
    }
  },
  
  choices: [
    {
      id: 'conservative_analysis',
      text: 'Present conservative but well-researched market size estimates',
      successChance: 85,
      impact: {
        founder: {
          skills: {
            marketing: 10,
            fundraising: 15,
            execution: 8,
            leadership: 5,
            technical: 0,
            networking: 10,
            growth: 5,
            sustainability: 8
          },
          wellBeing: {
            energy: -10,
            stress: 8,
            health: -3
          }
        },
        startup: {
          market: {
            marketFit: 15,
            brandReputation: 10,
            userTraction: 8,
            socialPresence: 5,
            userGrowth: 5
          },
          finances: {
            valuation: 2000000,
            cash: 0,
            revenue: 0,
            burnRate: 0
          }
        },
        relationships: {
          investors: 20,
          customers: 10,
          community: 8
        }
      }
    },
    {
      id: 'ambitious_projection',
      text: 'Show ambitious TAM/SAM analysis with growth projections',
      impact: {
        founder: {
          skills: {
            marketing: 12,
            fundraising: 20,
            execution: 5,
            leadership: 8,
            technical: 0,
            networking: 15,
            growth: 10,
            sustainability: 5
          },
          wellBeing: {
            energy: -15,
            stress: 15,
            health: -5
          }
        },
        startup: {
          market: {
            marketFit: 10,
            brandReputation: 15,
            userTraction: 5,
            socialPresence: 12,
            userGrowth: 8
          },
          finances: {
            valuation: 3000000,
            cash: 0,
            revenue: 0,
            burnRate: 0
          }
        },
        relationships: {
          investors: 25,
          customers: 5,
          community: 10
        }
      }
    }
  ]
};

export const marketExpansion: GameEvent = {
  id: 'market_expansion_001',
  category: 'market',
  title: 'Market Expansion Strategy',
  description: 'Your success in the initial market opens opportunities for expansion. Which direction will you take?',
  
  conditions: {
    requiredPhase: GamePhase.SCALING,
    minimumStats: {
      'founder.skills': {
        marketing: 40,
        growth: 35
      },
      'startup.market': {
        userTraction: 50,
        marketFit: 45
      }
    }
  },
  
  impact: {
    founder: {
      wellBeing: {
        energy: -15,
        stress: 15,
        health: -5
      }
    }
  },
  
  choices: [
    {
      id: 'vertical_expansion',
      text: 'Expand into adjacent market verticals',
      successChance: 75,
      impact: {
        founder: {
          skills: {
            marketing: 20,
            growth: 25,
            execution: 15,
            leadership: 12,
            technical: 8,
            networking: 15,
            fundraising: 10,
            sustainability: 10
          },
          wellBeing: {
            energy: -20,
            stress: 18,
            health: -8
          }
        },
        startup: {
          market: {
            userTraction: 25,
            marketFit: 20,
            brandReputation: 15,
            socialPresence: 12,
            userGrowth: 20
          },
          product: {
            development: 15,
            quality: 12,
            innovation: 18,
            marketFit: 20,
            mvpProgress: 10
          },
          finances: {
            revenue: 100000,
            cash: -50000,
            burnRate: 30000,
            valuation: 5000000
          }
        },
        relationships: {
          customers: 25,
          investors: 20,
          community: 15,
          employees: 10
        }
      }
    },
    {
      id: 'global_expansion',
      text: 'Launch international market expansion',
      impact: {
        founder: {
          skills: {
            marketing: 25,
            growth: 30,
            execution: 20,
            leadership: 15,
            technical: 10,
            networking: 20,
            fundraising: 15,
            sustainability: 8
          },
          wellBeing: {
            energy: -25,
            stress: 25,
            health: -10
          }
        },
        startup: {
          market: {
            userTraction: 30,
            marketFit: 15,
            brandReputation: 20,
            socialPresence: 18,
            userGrowth: 25
          },
          product: {
            development: 20,
            quality: 15,
            innovation: 12,
            marketFit: 15,
            mvpProgress: 15
          },
          finances: {
            revenue: 150000,
            cash: -100000,
            burnRate: 50000,
            valuation: 8000000
          }
        },
        relationships: {
          customers: 30,
          investors: 25,
          community: 20,
          employees: 15
        }
      }
    }
  ]
}; 