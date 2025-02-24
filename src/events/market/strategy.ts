import { GameEvent, GamePhase } from '../../types/stats';

export const pivotDecision: GameEvent = {
  id: 'pivot_decision_001',
  category: 'market',
  title: 'Strategic Crossroads',
  description: 'User feedback and market data suggest your product might find better traction in a different direction. Your team is divided on whether to pivot or stay the course.',
  
  conditions: {
    requiredPhase: GamePhase.BOOTSTRAPPING,
    minimumStats: {
      'founder.skills': {
        execution: 30,
        leadership: 25,
        marketing: 20,
        technical: 0,
        networking: 0,
        fundraising: 0,
        growth: 0,
        sustainability: 0
      },
      'startup.team': {
        size: 3,
        morale: 50,
        productivity: 60,
        culture: 40
      }
    }
  },
  
  impact: {
    startup: {
      team: {
        size: 0,
        morale: -10,
        productivity: -15,
        culture: -5
      }
    }
  },
  
  choices: [
    {
      id: 'strategic_pivot',
      text: 'Embrace the pivot: Realign the product based on market feedback and emerging opportunities.',
      successChance: 65,
      impact: {
        founder: {
          wellBeing: {
            energy: -25,
            stress: 30,
            health: -10
          },
          skills: {
            execution: 15,
            leadership: 10,
            marketing: 10,
            technical: 5,
            networking: 5,
            fundraising: 10,
            growth: 15,
            sustainability: -5
          }
        },
        startup: {
          team: {
            size: 0,
            morale: -10,
            productivity: -20,
            culture: 10
          },
          product: {
            mvpProgress: -30,
            quality: 15,
            development: 20,
            innovation: 25,
            marketFit: 30
          },
          market: {
            brandReputation: 15,
            socialPresence: 20,
            userTraction: -15,
            marketFit: 25,
            userGrowth: 10
          },
          finances: {
            cash: -10000,
            revenue: -5000,
            burnRate: 5000,
            valuation: 1000000
          }
        },
        relationships: {
          investors: 20,
          customers: -10,
          community: 15,
          employees: -5
        },
        triggerMilestone: 'pivot_initiated_001'
      }
    },
    {
      id: 'double_down',
      text: 'Stay the course: Double down on your original vision with targeted improvements.',
      successChance: 80,
      impact: {
        founder: {
          wellBeing: {
            energy: -15,
            stress: 15,
            health: -5
          },
          skills: {
            execution: 10,
            leadership: 15,
            marketing: 5,
            technical: 10,
            networking: 0,
            fundraising: 5,
            growth: 5,
            sustainability: 10
          }
        },
        startup: {
          team: {
            size: 0,
            morale: 15,
            productivity: 20,
            culture: 15
          },
          product: {
            mvpProgress: 25,
            quality: 20,
            development: 15,
            innovation: 10,
            marketFit: 15
          },
          market: {
            brandReputation: 10,
            socialPresence: 5,
            userTraction: 15,
            marketFit: 10,
            userGrowth: 15
          },
          finances: {
            cash: -5000,
            revenue: 2000,
            burnRate: 2000,
            valuation: 500000
          }
        },
        relationships: {
          investors: 10,
          customers: 20,
          community: 10,
          employees: 15
        },
        triggerMilestone: 'vision_reinforced_001'
      }
    }
  ]
};

export const prCrisis: GameEvent = {
  id: 'pr_crisis_001',
  category: 'market',
  title: 'Social Media Firestorm',
  description: 'A controversial tweet from your company account has gone viral, sparking heated debate in the tech community. The situation is escalating quickly.',
  
  conditions: {
    requiredPhase: GamePhase.BOOTSTRAPPING,
    minimumStats: {
      'founder.skills': {
        marketing: 25,
        leadership: 20,
        networking: 15,
        technical: 0,
        fundraising: 0,
        execution: 0,
        growth: 0,
        sustainability: 0
      }
    }
  },
  
  impact: {
    startup: {
      market: {
        brandReputation: -15,
        socialPresence: 10,
        userTraction: -5,
        marketFit: 0,
        userGrowth: -5
      }
    }
  },
  
  choices: [
    {
      id: 'thoughtful_response',
      text: 'Issue a sincere apology, outline concrete changes, and engage with the community.',
      successChance: 80,
      impact: {
        founder: {
          wellBeing: {
            energy: -20,
            stress: 25,
            health: -5
          },
          skills: {
            marketing: 15,
            leadership: 20,
            networking: 10,
            technical: 0,
            fundraising: 5,
            execution: 10,
            growth: 5,
            sustainability: 10
          }
        },
        startup: {
          team: {
            size: 0,
            morale: 15,
            productivity: -10,
            culture: 20
          },
          market: {
            brandReputation: 25,
            socialPresence: 15,
            userTraction: 10,
            marketFit: 5,
            userGrowth: 5
          }
        },
        relationships: {
          community: 25,
          customers: 20,
          investors: 15,
          employees: 20
        },
        triggerMilestone: 'crisis_resolved_001'
      }
    },
    {
      id: 'ignore_controversy',
      text: 'Let the controversy die down naturally and focus on product development.',
      successChance: 30,
      impact: {
        founder: {
          wellBeing: {
            energy: -5,
            stress: 15,
            health: 0
          },
          skills: {
            marketing: -5,
            leadership: -10,
            networking: -5,
            technical: 5,
            fundraising: -5,
            execution: 5,
            growth: 0,
            sustainability: -10
          }
        },
        startup: {
          team: {
            size: 0,
            morale: -15,
            productivity: 10,
            culture: -20
          },
          market: {
            brandReputation: -25,
            socialPresence: -15,
            userTraction: -20,
            marketFit: -10,
            userGrowth: -15
          },
          product: {
            mvpProgress: 10,
            quality: 5,
            development: 10,
            innovation: 0,
            marketFit: -10
          }
        },
        relationships: {
          community: -30,
          customers: -25,
          investors: -20,
          employees: -15
        },
        triggerMilestone: 'reputation_damaged_001'
      }
    }
  ]
};

export const competitiveResponse: GameEvent = {
  id: 'competitive_response_001',
  category: 'market',
  title: 'Competitor Emerges',
  description: 'A well-funded startup just launched a similar product. Their marketing is aggressive, and they\'re targeting your early users.',
  
  conditions: {
    requiredPhase: GamePhase.BOOTSTRAPPING,
    minimumStats: {
      'founder.skills': {
        execution: 25,
        marketing: 20,
        leadership: 15,
        technical: 0,
        networking: 0,
        fundraising: 0,
        growth: 0,
        sustainability: 0
      }
    }
  },
  
  impact: {
    startup: {
      market: {
        userTraction: -10,
        brandReputation: -5,
        socialPresence: 0,
        marketFit: 0,
        userGrowth: -5
      }
    }
  },
  
  choices: [
    {
      id: 'strategic_partnership',
      text: 'Reach out to discuss potential collaboration - the market might be big enough for both.',
      successChance: 60,
      impact: {
        founder: {
          wellBeing: {
            energy: -15,
            stress: 20,
            health: 0
          },
          skills: {
            networking: 15,
            leadership: 10,
            marketing: 5,
            technical: 0,
            fundraising: 10,
            execution: 5,
            growth: 10,
            sustainability: 5
          }
        },
        startup: {
          market: {
            brandReputation: 20,
            socialPresence: 15,
            userTraction: 25,
            marketFit: 15,
            userGrowth: 20
          },
          product: {
            mvpProgress: 10,
            quality: 15,
            development: 20,
            innovation: 15,
            marketFit: 20
          }
        },
        relationships: {
          investors: 25,
          customers: 20,
          community: 15,
          employees: 10
        },
        triggerMilestone: 'partnership_formed_001'
      }
    },
    {
      id: 'competitive_features',
      text: 'Accelerate your roadmap and launch unique features to differentiate your product.',
      successChance: 70,
      impact: {
        founder: {
          wellBeing: {
            energy: -25,
            stress: 30,
            health: -10
          },
          skills: {
            technical: 15,
            execution: 20,
            marketing: 10,
            leadership: 5,
            networking: 0,
            fundraising: 5,
            growth: 15,
            sustainability: -5
          }
        },
        startup: {
          team: {
            size: 0,
            morale: -10,
            productivity: 25,
            culture: -5
          },
          product: {
            mvpProgress: 25,
            quality: 20,
            development: 30,
            innovation: 25,
            marketFit: 15
          },
          market: {
            brandReputation: 15,
            socialPresence: 10,
            userTraction: 15,
            marketFit: 20,
            userGrowth: 15
          },
          finances: {
            cash: -15000,
            revenue: 0,
            burnRate: 8000,
            valuation: 800000
          }
        },
        relationships: {
          customers: 15,
          investors: 20,
          community: 10,
          employees: -5
        },
        triggerMilestone: 'feature_advantage_001'
      }
    }
  ]
}; 