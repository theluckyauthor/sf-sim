import { GameEvent, GamePhase } from '../../types/stats';

// Event triggered after successful YC interview
export const ycOnboarding: GameEvent = {
  id: 'yc_onboarding_001',
  category: 'funding',
  title: 'YC Batch Kickoff',
  description: 'You\'ve made it into YC! The first week is packed with orientation sessions, mentor meetings, and crucial decisions about your focus during the program.',
  
  conditions: {
    requiredPhase: GamePhase.FUNDRAISING,
    activeMilestone: 'yc_interview_success_001'
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
      id: 'growth_focus',
      text: 'Focus on explosive growth: Aim for hockey-stick metrics by demo day.',
      impact: {
        founder: {
          wellBeing: {
            energy: -25,
            stress: 30,
            health: -10
          },
          skills: {
            growth: 20,
            execution: 15,
            marketing: 12,
            fundraising: 10,
            technical: 5,
            leadership: 8,
            networking: 10,
            sustainability: -5
          }
        },
        startup: {
          product: {
            mvpProgress: 15,
            quality: -5,
            development: 10,
            innovation: 5,
            marketFit: 20
          },
          market: {
            userTraction: 30,
            userGrowth: 25,
            brandReputation: 15,
            socialPresence: 20,
            marketFit: 15
          },
          finances: {
            burnRate: 25000,
            revenue: 15000,
            cash: -50000,
            valuation: 1000000
          }
        },
        relationships: {
          customers: 20,
          investors: 25,
          community: 15,
          employees: -5
        },
        triggerMilestone: 'hyper_growth_mode_001'
      }
    },
    {
      id: 'sustainable_growth',
      text: 'Balance growth with sustainability: Build strong fundamentals while showing good traction.',
      impact: {
        founder: {
          wellBeing: {
            energy: -15,
            stress: 15,
            health: -5
          },
          skills: {
            sustainability: 15,
            execution: 12,
            technical: 10,
            leadership: 10,
            fundraising: 8,
            marketing: 5,
            networking: 8,
            growth: 10
          }
        },
        startup: {
          product: {
            quality: 20,
            marketFit: 15,
            development: 15,
            innovation: 10,
            mvpProgress: 10
          },
          market: {
            userTraction: 15,
            userGrowth: 15,
            marketFit: 20,
            brandReputation: 10,
            socialPresence: 10
          },
          finances: {
            burnRate: 15000,
            revenue: 25000,
            cash: -30000,
            valuation: 800000
          }
        },
        relationships: {
          customers: 25,
          employees: 15,
          investors: 15,
          community: 20
        },
        triggerMilestone: 'sustainable_growth_001'
      }
    }
  ]
};

// Event for handling YC interview rejection
export const ycRejection: GameEvent = {
  id: 'yc_rejection_001',
  category: 'funding',
  title: 'Post-YC Interview Decision',
  description: 'The YC interview didn\'t result in an acceptance. Your team looks to you for direction on the path forward.',
  
  conditions: {
    requiredPhase: GamePhase.BOOTSTRAPPING,
    activeMilestone: 'yc_interview_rejection_001'
  },
  
  impact: {
    founder: {
      wellBeing: {
        energy: -20,
        stress: 25,
        health: -5
      }
    }
  },
  
  choices: [
    {
      id: 'bootstrap_focus',
      text: 'Double down on bootstrapping: Focus on revenue and prove them wrong.',
      impact: {
        founder: {
          wellBeing: {
            energy: -15,
            stress: 15,
            health: -5
          },
          skills: {
            execution: 20,
            technical: 15,
            sustainability: 15,
            leadership: 10,
            marketing: 8,
            growth: 10,
            fundraising: 5,
            networking: 5
          }
        },
        startup: {
          product: {
            quality: 20,
            marketFit: 15,
            development: 15,
            innovation: 10,
            mvpProgress: 15
          },
          market: {
            userTraction: 15,
            userGrowth: 10,
            marketFit: 20,
            brandReputation: 5,
            socialPresence: 5
          },
          finances: {
            revenue: 35000,
            burnRate: 10000,
            cash: 20000,
            valuation: 500000
          }
        },
        relationships: {
          customers: 25,
          employees: 15,
          community: 10,
          investors: -5
        },
        triggerMilestone: 'bootstrap_path_001'
      }
    },
    {
      id: 'alternative_accelerator',
      text: 'Apply to other top accelerators while maintaining momentum.',
      impact: {
        founder: {
          wellBeing: {
            energy: -20,
            stress: 20,
            health: -5
          },
          skills: {
            fundraising: 15,
            networking: 12,
            marketing: 10,
            execution: 8,
            leadership: 8,
            technical: 5,
            growth: 8,
            sustainability: 5
          }
        },
        startup: {
          product: {
            mvpProgress: 10,
            quality: 10,
            development: 8,
            innovation: 8,
            marketFit: 12
          },
          market: {
            brandReputation: 10,
            socialPresence: 15,
            userTraction: 10,
            marketFit: 15,
            userGrowth: 8
          },
          finances: {
            cash: 50000,
            revenue: 15000,
            burnRate: 15000,
            valuation: 600000
          }
        },
        relationships: {
          investors: 15,
          community: 12,
          customers: 10,
          employees: 8
        },
        triggerMilestone: 'alternative_accelerator_001'
      }
    }
  ]
};

// Event for YC Demo Day preparation
export const ycDemoDay: GameEvent = {
  id: 'yc_demo_day_001',
  category: 'funding',
  title: 'YC Demo Day Preparation',
  description: 'Demo Day is approaching. Hundreds of investors will be watching. Your presentation needs to be perfect.',
  
  conditions: {
    requiredPhase: GamePhase.FUNDRAISING,
    activeMilestone: ['hyper_growth_mode_001', 'sustainable_growth_001']
  },
  
  impact: {
    founder: {
      wellBeing: {
        energy: -15,
        stress: 25,
        health: -5
      }
    }
  },
  
  choices: [
    {
      id: 'vision_pitch',
      text: 'Focus on the big vision: Paint an ambitious picture of the future.',
      impact: {
        founder: {
          wellBeing: {
            energy: -25,
            stress: 30,
            health: -10
          },
          skills: {
            fundraising: 25,
            marketing: 20,
            networking: 15,
            leadership: 12,
            execution: 8,
            technical: 5,
            growth: 15,
            sustainability: 5
          }
        },
        startup: {
          market: {
            brandReputation: 25,
            socialPresence: 20,
            userTraction: 15,
            marketFit: 15,
            userGrowth: 20
          },
          finances: {
            valuation: 2500000,
            cash: 1500000,
            burnRate: 50000,
            revenue: 20000
          }
        },
        relationships: {
          investors: 30,
          community: 20,
          customers: 10,
          employees: 15
        },
        triggerMilestone: 'ambitious_vision_001'
      }
    },
    {
      id: 'metrics_pitch',
      text: 'Focus on metrics: Show concrete growth and market validation.',
      impact: {
        founder: {
          wellBeing: {
            energy: -20,
            stress: 25,
            health: -8
          },
          skills: {
            execution: 20,
            fundraising: 20,
            technical: 15,
            marketing: 12,
            leadership: 10,
            networking: 12,
            growth: 15,
            sustainability: 10
          }
        },
        startup: {
          market: {
            userTraction: 25,
            marketFit: 20,
            userGrowth: 15,
            brandReputation: 15,
            socialPresence: 15
          },
          finances: {
            valuation: 2000000,
            cash: 1000000,
            revenue: 40000,
            burnRate: 35000
          }
        },
        relationships: {
          investors: 25,
          customers: 20,
          community: 15,
          employees: 10
        },
        triggerMilestone: 'metrics_driven_001'
      }
    }
  ]
};

// Post Demo Day Fundraising
export const postDemoDayFundraising: GameEvent = {
  id: 'post_demo_day_001',
  category: 'funding',
  title: 'Post Demo Day Dynamics',
  description: 'Your inbox is flooded with investor interest after Demo Day. Time to navigate the fundraising dynamics.',
  
  conditions: {
    requiredPhase: GamePhase.FUNDRAISING,
    activeMilestone: ['ambitious_vision_001', 'metrics_driven_001']
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
      id: 'competitive_round',
      text: 'Create competition: Run a fast, competitive fundraising round.',
      impact: {
        founder: {
          wellBeing: {
            energy: -30,
            stress: 35,
            health: -15
          },
          skills: {
            fundraising: 30,
            networking: 20,
            leadership: 15,
            execution: 12,
            marketing: 10,
            technical: 5,
            growth: 20,
            sustainability: -5
          }
        },
        startup: {
          finances: {
            cash: 5000000,
            valuation: 20000000,
            burnRate: 100000,
            revenue: 50000
          },
          market: {
            brandReputation: 30,
            socialPresence: 25,
            userTraction: 20,
            marketFit: 15,
            userGrowth: 25
          }
        },
        relationships: {
          investors: 35,
          community: 25,
          customers: 15,
          employees: 10
        },
        triggerMilestone: 'hot_round_001'
      }
    },
    {
      id: 'strategic_round',
      text: 'Be selective: Focus on finding the right strategic investors.',
      impact: {
        founder: {
          wellBeing: {
            energy: -20,
            stress: 25,
            health: -10
          },
          skills: {
            leadership: 25,
            fundraising: 20,
            networking: 15,
            execution: 15,
            marketing: 10,
            technical: 8,
            growth: 15,
            sustainability: 15
          }
        },
        startup: {
          finances: {
            cash: 3000000,
            valuation: 15000000,
            burnRate: 70000,
            revenue: 60000
          },
          market: {
            marketFit: 25,
            userTraction: 20,
            brandReputation: 20,
            socialPresence: 15,
            userGrowth: 20
          }
        },
        relationships: {
          investors: 30,
          customers: 25,
          employees: 20,
          community: 20
        },
        triggerMilestone: 'strategic_round_001'
      }
    }
  ]
};

// YC Batch Networking Event
export const ycBatchNetworking: GameEvent = {
  id: 'yc_batch_networking_001',
  category: 'funding',
  title: 'YC Batch Connections',
  description: 'Your batchmates include founders from diverse backgrounds and industries. Some are working on complementary products.',
  
  conditions: {
    requiredPhase: GamePhase.FUNDRAISING,
    activeMilestone: ['hyper_growth_mode_001', 'sustainable_growth_001']
  },
  
  impact: {
    founder: {
      wellBeing: {
        energy: -10,
        stress: 10,
        health: -5
      }
    }
  },
  
  choices: [
    {
      id: 'strategic_partnership',
      text: 'Form a strategic partnership with a complementary startup in your batch.',
      impact: {
        founder: {
          wellBeing: {
            energy: -15,
            stress: 20,
            health: -5
          },
          skills: {
            networking: 20,
            leadership: 15,
            execution: 10,
            marketing: 8,
            fundraising: 12,
            technical: 5,
            growth: 15,
            sustainability: 10
          }
        },
        startup: {
          product: {
            marketFit: 25,
            innovation: 20,
            development: 15,
            quality: 10,
            mvpProgress: 10
          },
          market: {
            userTraction: 25,
            marketFit: 20,
            brandReputation: 15,
            socialPresence: 15,
            userGrowth: 20
          }
        },
        relationships: {
          community: 25,
          investors: 20,
          customers: 15,
          employees: 10
        },
        triggerMilestone: 'yc_partnership_001'
      }
    },
    {
      id: 'knowledge_sharing',
      text: 'Focus on knowledge sharing and best practices within your batch.',
      impact: {
        founder: {
          wellBeing: {
            energy: -10,
            stress: 15,
            health: -5
          },
          skills: {
            execution: 15,
            technical: 12,
            marketing: 10,
            leadership: 8,
            networking: 15,
            fundraising: 10,
            growth: 12,
            sustainability: 15
          }
        },
        startup: {
          product: {
            quality: 20,
            development: 15,
            innovation: 15,
            marketFit: 15,
            mvpProgress: 10
          },
          team: {
            productivity: 20,
            culture: 15,
            morale: 15,
            size: 0
          }
        },
        relationships: {
          community: 20,
          employees: 15,
          investors: 10,
          customers: 10
        },
        triggerMilestone: 'yc_knowledge_network_001'
      }
    }
  ]
};

// YC Team Scaling Event
export const ycTeamScaling: GameEvent = {
  id: 'yc_team_scaling_001',
  category: 'funding',
  title: 'YC-Powered Team Growth',
  description: 'With YC\'s network and resources, you have access to top talent. However, rapid hiring during the program comes with its own challenges.',
  
  conditions: {
    requiredPhase: GamePhase.FUNDRAISING,
    activeMilestone: ['hyper_growth_mode_001', 'sustainable_growth_001']
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
      id: 'rapid_hiring',
      text: 'Leverage YC\'s network for rapid team expansion before demo day.',
      impact: {
        founder: {
          wellBeing: {
            energy: -25,
            stress: 30,
            health: -10
          },
          skills: {
            leadership: 25,
            execution: 15,
            technical: 10,
            networking: 15,
            fundraising: 10,
            marketing: 8,
            growth: 20,
            sustainability: -5
          }
        },
        startup: {
          team: {
            size: 5,
            productivity: 25,
            morale: -10,
            culture: -5
          },
          product: {
            development: 30,
            quality: 15,
            innovation: 20,
            marketFit: 15,
            mvpProgress: 25
          },
          finances: {
            burnRate: 50000,
            cash: -100000,
            revenue: 20000,
            valuation: 1000000
          }
        },
        relationships: {
          employees: 15,
          investors: 20,
          customers: 10,
          community: 15
        },
        triggerMilestone: 'rapid_team_growth_001'
      }
    },
    {
      id: 'selective_hiring',
      text: 'Make a few key strategic hires while maintaining team cohesion.',
      impact: {
        founder: {
          wellBeing: {
            energy: -15,
            stress: 20,
            health: -5
          },
          skills: {
            leadership: 20,
            execution: 15,
            technical: 12,
            networking: 10,
            fundraising: 8,
            marketing: 5,
            growth: 12,
            sustainability: 15
          }
        },
        startup: {
          team: {
            size: 2,
            productivity: 20,
            morale: 15,
            culture: 20
          },
          product: {
            development: 20,
            quality: 25,
            innovation: 15,
            marketFit: 20,
            mvpProgress: 15
          },
          finances: {
            burnRate: 30000,
            cash: -50000,
            revenue: 25000,
            valuation: 800000
          }
        },
        relationships: {
          employees: 25,
          investors: 15,
          customers: 15,
          community: 10
        },
        triggerMilestone: 'strategic_team_growth_001'
      }
    }
  ]
};

// YC Market Expansion Event
export const ycMarketExpansion: GameEvent = {
  id: 'yc_market_expansion_001',
  category: 'funding',
  title: 'Market Expansion Opportunity',
  description: 'YC partners have identified potential for rapid market expansion. You need to decide how aggressively to pursue new market segments.',
  
  conditions: {
    requiredPhase: GamePhase.FUNDRAISING,
    activeMilestone: ['hyper_growth_mode_001', 'sustainable_growth_001']
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
      id: 'aggressive_expansion',
      text: 'Pursue aggressive multi-market expansion to show massive growth potential.',
      impact: {
        founder: {
          wellBeing: {
            energy: -30,
            stress: 35,
            health: -15
          },
          skills: {
            growth: 30,
            marketing: 25,
            execution: 20,
            leadership: 15,
            networking: 15,
            fundraising: 20,
            technical: 10,
            sustainability: -10
          }
        },
        startup: {
          market: {
            userGrowth: 40,
            userTraction: 35,
            brandReputation: 25,
            socialPresence: 30,
            marketFit: -10
          },
          finances: {
            burnRate: 80000,
            revenue: 100000,
            cash: -200000,
            valuation: 5000000
          }
        },
        relationships: {
          customers: 30,
          investors: 35,
          community: 20,
          employees: -10
        },
        triggerMilestone: 'rapid_expansion_001'
      }
    },
    {
      id: 'focused_expansion',
      text: 'Expand into one promising new market segment with strong validation.',
      impact: {
        founder: {
          wellBeing: {
            energy: -20,
            stress: 25,
            health: -10
          },
          skills: {
            growth: 20,
            marketing: 15,
            execution: 20,
            leadership: 15,
            networking: 10,
            fundraising: 15,
            technical: 12,
            sustainability: 10
          }
        },
        startup: {
          market: {
            userGrowth: 25,
            userTraction: 30,
            brandReputation: 20,
            socialPresence: 20,
            marketFit: 25
          },
          finances: {
            burnRate: 50000,
            revenue: 80000,
            cash: -100000,
            valuation: 3000000
          }
        },
        relationships: {
          customers: 25,
          investors: 20,
          community: 15,
          employees: 10
        },
        triggerMilestone: 'strategic_expansion_001'
      }
    }
  ]
}; 