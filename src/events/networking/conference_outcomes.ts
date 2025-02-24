import { GameEvent, GamePhase } from '../../types/stats';

// Media Coverage Strategy
export const mediaExposureStrategy: GameEvent = {
  id: 'media_exposure_001',
  category: 'networking',
  title: 'Media Momentum',
  description: 'After TechCrunch Disrupt, you have media attention. You need to decide how to leverage this exposure.',
  
  conditions: {
    requiredPhase: GamePhase.BOOTSTRAPPING,
    activeMilestone: 'conference_exposure_001'
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
      id: 'thought_leadership',
      text: 'Position yourself as a thought leader with industry insights and vision pieces.',
      impact: {
        founder: {
          wellBeing: {
            energy: -25,
            stress: 30,
            health: -10
          },
          skills: {
            leadership: 35,
            execution: 20,
            technical: 15,
            growth: 30,
            marketing: 35,
            networking: 40,
            fundraising: 30,
            sustainability: 25
          }
        },
        startup: {
          team: {
            productivity: 25,
            morale: 30,
            culture: 25,
            size: 0
          },
          product: {
            development: 15,
            quality: 20,
            innovation: 30,
            marketFit: 25,
            mvpProgress: 15
          },
          finances: {
            burnRate: 20000,
            cash: -25000,
            revenue: 30000,
            valuation: 3000000
          }
        },
        relationships: {
          employees: 25,
          customers: 35,
          investors: 45,
          community: 40
        },
        triggerMilestone: 'thought_leadership_001'
      }
    },
    {
      id: 'product_spotlight',
      text: 'Focus media attention on product innovations and user success stories.',
      impact: {
        founder: {
          wellBeing: {
            energy: -20,
            stress: 25,
            health: -15
          },
          skills: {
            leadership: 25,
            execution: 30,
            technical: 25,
            growth: 35,
            marketing: 40,
            networking: 30,
            fundraising: 25,
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
            development: 30,
            quality: 35,
            innovation: 35,
            marketFit: 40,
            mvpProgress: 25
          },
          finances: {
            burnRate: 15000,
            cash: -20000,
            revenue: 40000,
            valuation: 2500000
          }
        },
        relationships: {
          employees: 20,
          customers: 45,
          investors: 35,
          community: 30
        },
        triggerMilestone: 'product_spotlight_001'
      }
    }
  ]
};

// Partnership Development
export const partnershipDevelopment: GameEvent = {
  id: 'partnership_development_001',
  category: 'networking',
  title: 'Strategic Partnerships',
  description: 'Conference connections have led to partnership opportunities. You need to choose which relationships to prioritize.',
  
  conditions: {
    requiredPhase: GamePhase.BOOTSTRAPPING,
    activeMilestone: ['thought_leadership_001', 'product_spotlight_001']
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
      id: 'enterprise_focus',
      text: 'Pursue enterprise partnerships with established tech companies.',
      impact: {
        founder: {
          wellBeing: {
            energy: -25,
            stress: 30,
            health: -15
          },
          skills: {
            leadership: 30,
            execution: 35,
            technical: 30,
            growth: 35,
            marketing: 25,
            networking: 40,
            fundraising: 35,
            sustainability: 30
          }
        },
        startup: {
          team: {
            productivity: 35,
            morale: 30,
            culture: 25,
            size: 1
          },
          product: {
            development: 40,
            quality: 35,
            innovation: 30,
            marketFit: 35,
            mvpProgress: 30
          },
          finances: {
            burnRate: 35000,
            cash: -45000,
            revenue: 60000,
            valuation: 4000000
          }
        },
        relationships: {
          employees: 25,
          customers: 35,
          investors: 40,
          community: 25
        },
        triggerMilestone: 'enterprise_partnership_001'
      }
    },
    {
      id: 'startup_ecosystem',
      text: 'Build relationships with complementary startups for mutual growth.',
      impact: {
        founder: {
          wellBeing: {
            energy: -20,
            stress: 25,
            health: -10
          },
          skills: {
            leadership: 25,
            execution: 30,
            technical: 25,
            growth: 40,
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
            culture: 30,
            size: 1
          },
          product: {
            development: 35,
            quality: 30,
            innovation: 40,
            marketFit: 40,
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
          employees: 35,
          customers: 40,
          investors: 35,
          community: 40
        },
        triggerMilestone: 'startup_partnership_001'
      }
    }
  ]
};

// Investor Relationship Building
export const investorRelationshipBuilding: GameEvent = {
  id: 'investor_relationship_001',
  category: 'networking',
  title: 'Investor Strategy',
  description: 'Conference networking has opened doors with multiple investors. You need to decide how to nurture these relationships.',
  
  conditions: {
    requiredPhase: GamePhase.BOOTSTRAPPING,
    activeMilestone: ['enterprise_partnership_001', 'startup_partnership_001']
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
      id: 'strategic_investors',
      text: 'Focus on investors who can provide strategic value beyond capital.',
      impact: {
        founder: {
          wellBeing: {
            energy: -25,
            stress: 30,
            health: -15
          },
          skills: {
            leadership: 35,
            execution: 30,
            technical: 20,
            growth: 35,
            marketing: 30,
            networking: 40,
            fundraising: 45,
            sustainability: 30
          }
        },
        startup: {
          team: {
            productivity: 30,
            morale: 25,
            culture: 30,
            size: 0
          },
          product: {
            development: 30,
            quality: 35,
            innovation: 40,
            marketFit: 35,
            mvpProgress: 25
          },
          finances: {
            burnRate: 30000,
            cash: -40000,
            revenue: 50000,
            valuation: 5000000
          }
        },
        relationships: {
          employees: 30,
          customers: 35,
          investors: 45,
          community: 35
        },
        triggerMilestone: 'strategic_investment_001'
      }
    },
    {
      id: 'financial_optimization',
      text: 'Prioritize investors offering the best financial terms and valuation.',
      impact: {
        founder: {
          wellBeing: {
            energy: -20,
            stress: 25,
            health: -10
          },
          skills: {
            leadership: 30,
            execution: 35,
            technical: 25,
            growth: 30,
            marketing: 25,
            networking: 35,
            fundraising: 40,
            sustainability: 25
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
            development: 35,
            quality: 30,
            innovation: 30,
            marketFit: 30,
            mvpProgress: 30
          },
          finances: {
            burnRate: 25000,
            cash: -35000,
            revenue: 45000,
            valuation: 5500000
          }
        },
        relationships: {
          employees: 25,
          customers: 30,
          investors: 40,
          community: 25
        },
        triggerMilestone: 'financial_investment_001'
      }
    }
  ]
}; 