import { GameEvent, GamePhase } from '../../types/stats';

// Product Roadmap Strategy
export const productRoadmapStrategy: GameEvent = {
  id: 'product_roadmap_001',
  category: 'product',
  title: 'Product Direction',
  description: 'Based on feature validation results, you need to define the product roadmap strategy. This will shape development priorities and resource allocation.',
  
  conditions: {
    requiredPhase: GamePhase.BOOTSTRAPPING,
    activeMilestone: 'feature_validation_001'
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
      id: 'depth_focus',
      text: 'Focus on deepening existing features based on power user feedback.',
      impact: {
        founder: {
          wellBeing: {
            energy: -20,
            stress: 25,
            health: -10
          },
          skills: {
            leadership: 20,
            execution: 30,
            technical: 35,
            growth: 25,
            marketing: 20,
            networking: 15,
            fundraising: 20,
            sustainability: 30
          }
        },
        startup: {
          team: {
            productivity: 35,
            morale: 30,
            culture: 25,
            size: 0
          },
          product: {
            development: 40,
            quality: 45,
            innovation: 30,
            marketFit: 35,
            mvpProgress: 30
          },
          finances: {
            burnRate: 20000,
            cash: -30000,
            revenue: 40000,
            valuation: 2500000
          }
        },
        relationships: {
          employees: 30,
          customers: 40,
          investors: 25,
          community: 20
        },
        triggerMilestone: 'feature_depth_001'
      }
    },
    {
      id: 'breadth_expansion',
      text: 'Expand feature set to capture broader market segments.',
      impact: {
        founder: {
          wellBeing: {
            energy: -25,
            stress: 30,
            health: -15
          },
          skills: {
            leadership: 25,
            execution: 35,
            technical: 30,
            growth: 35,
            marketing: 30,
            networking: 25,
            fundraising: 30,
            sustainability: 20
          }
        },
        startup: {
          team: {
            productivity: 30,
            morale: 25,
            culture: 20,
            size: 0
          },
          product: {
            development: 35,
            quality: 30,
            innovation: 40,
            marketFit: 40,
            mvpProgress: 35
          },
          finances: {
            burnRate: 30000,
            cash: -40000,
            revenue: 35000,
            valuation: 3000000
          }
        },
        relationships: {
          employees: 25,
          customers: 35,
          investors: 35,
          community: 30
        },
        triggerMilestone: 'feature_breadth_001'
      }
    }
  ]
};

// User Feedback Integration
export const userFeedbackIntegration: GameEvent = {
  id: 'feedback_integration_001',
  category: 'product',
  title: 'Feedback Implementation',
  description: 'You need to establish a systematic approach to integrating user feedback into the development process.',
  
  conditions: {
    requiredPhase: GamePhase.BOOTSTRAPPING,
    activeMilestone: ['feature_depth_001', 'feature_breadth_001']
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
      id: 'data_driven',
      text: 'Implement comprehensive analytics and automated feedback collection.',
      impact: {
        founder: {
          wellBeing: {
            energy: -20,
            stress: 25,
            health: -10
          },
          skills: {
            leadership: 25,
            execution: 35,
            technical: 40,
            growth: 30,
            marketing: 25,
            networking: 20,
            fundraising: 25,
            sustainability: 30
          }
        },
        startup: {
          team: {
            productivity: 35,
            morale: 25,
            culture: 20,
            size: 0
          },
          product: {
            development: 40,
            quality: 35,
            innovation: 30,
            marketFit: 45,
            mvpProgress: 35
          },
          finances: {
            burnRate: 25000,
            cash: -35000,
            revenue: 45000,
            valuation: 3500000
          }
        },
        relationships: {
          employees: 25,
          customers: 35,
          investors: 40,
          community: 25
        },
        triggerMilestone: 'data_feedback_001'
      }
    },
    {
      id: 'community_driven',
      text: 'Focus on direct user engagement and community feedback channels.',
      impact: {
        founder: {
          wellBeing: {
            energy: -25,
            stress: 30,
            health: -15
          },
          skills: {
            leadership: 30,
            execution: 25,
            technical: 20,
            growth: 35,
            marketing: 35,
            networking: 35,
            fundraising: 30,
            sustainability: 25
          }
        },
        startup: {
          team: {
            productivity: 30,
            morale: 35,
            culture: 35,
            size: 0
          },
          product: {
            development: 35,
            quality: 30,
            innovation: 40,
            marketFit: 40,
            mvpProgress: 30
          },
          finances: {
            burnRate: 20000,
            cash: -25000,
            revenue: 35000,
            valuation: 3000000
          }
        },
        relationships: {
          employees: 35,
          customers: 45,
          investors: 30,
          community: 40
        },
        triggerMilestone: 'community_feedback_001'
      }
    }
  ]
};

// Product Scaling Strategy
export const productScalingStrategy: GameEvent = {
  id: 'product_scaling_001',
  category: 'product',
  title: 'Scaling Approach',
  description: 'With validated features and established feedback loops, you need to decide how to scale the product.',
  
  conditions: {
    requiredPhase: GamePhase.BOOTSTRAPPING,
    activeMilestone: ['data_feedback_001', 'community_feedback_001']
  },
  
  impact: {
    founder: {
      wellBeing: {
        energy: -20,
        stress: 25,
        health: -10
      }
    }
  },
  
  choices: [
    {
      id: 'vertical_scaling',
      text: 'Focus on scaling depth and performance of core features.',
      impact: {
        founder: {
          wellBeing: {
            energy: -25,
            stress: 30,
            health: -15
          },
          skills: {
            leadership: 25,
            execution: 35,
            technical: 45,
            growth: 30,
            marketing: 25,
            networking: 20,
            fundraising: 30,
            sustainability: 35
          }
        },
        startup: {
          team: {
            productivity: 40,
            morale: 30,
            culture: 25,
            size: 1
          },
          product: {
            development: 45,
            quality: 40,
            innovation: 35,
            marketFit: 40,
            mvpProgress: 40
          },
          finances: {
            burnRate: 35000,
            cash: -45000,
            revenue: 55000,
            valuation: 4500000
          }
        },
        relationships: {
          employees: 30,
          customers: 45,
          investors: 35,
          community: 30
        },
        triggerMilestone: 'vertical_scale_001'
      }
    },
    {
      id: 'horizontal_scaling',
      text: 'Expand platform capabilities and integration options.',
      impact: {
        founder: {
          wellBeing: {
            energy: -30,
            stress: 35,
            health: -20
          },
          skills: {
            leadership: 30,
            execution: 40,
            technical: 35,
            growth: 40,
            marketing: 35,
            networking: 35,
            fundraising: 35,
            sustainability: 25
          }
        },
        startup: {
          team: {
            productivity: 35,
            morale: 25,
            culture: 20,
            size: 2
          },
          product: {
            development: 40,
            quality: 35,
            innovation: 45,
            marketFit: 45,
            mvpProgress: 35
          },
          finances: {
            burnRate: 45000,
            cash: -60000,
            revenue: 50000,
            valuation: 5000000
          }
        },
        relationships: {
          employees: 25,
          customers: 40,
          investors: 40,
          community: 35
        },
        triggerMilestone: 'horizontal_scale_001'
      }
    }
  ]
}; 