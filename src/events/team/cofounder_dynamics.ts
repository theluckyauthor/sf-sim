import { GameEvent, GamePhase } from '../../types/stats';

// Strategic Vision Conflict
export const strategicVisionConflict: GameEvent = {
  id: 'strategic_vision_conflict_001',
  category: 'team',
  title: 'Strategic Crossroads',
  description: 'You and your co-founder have diverging views on the company\'s next major strategic move. The team is looking for clear direction.',
  
  conditions: {
    requiredPhase: GamePhase.BOOTSTRAPPING,
    activeMilestone: 'cofounder_agreement_001'
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
      id: 'assertive_direction',
      text: 'Assert your vision strongly and take clear ownership of the direction.',
      impact: {
        founder: {
          wellBeing: {
            energy: -25,
            stress: 30,
            health: -10
          },
          skills: {
            leadership: 25,
            execution: 20,
            technical: 10,
            growth: 15,
            marketing: 10,
            networking: -5,
            fundraising: 15,
            sustainability: -10
          }
        },
        startup: {
          team: {
            productivity: 15,
            morale: -10,
            culture: -15,
            size: 0
          },
          product: {
            development: 25,
            quality: 15,
            innovation: 20,
            marketFit: 15,
            mvpProgress: 20
          }
        },
        relationships: {
          employees: -10,
          customers: 15,
          investors: 20,
          community: -5
        },
        triggerMilestone: 'strong_leadership_001'
      }
    },
    {
      id: 'collaborative_compromise',
      text: 'Work towards a compromise that incorporates elements of both visions.',
      impact: {
        founder: {
          wellBeing: {
            energy: -15,
            stress: 15,
            health: -5
          },
          skills: {
            leadership: 15,
            execution: 15,
            technical: 15,
            growth: 10,
            marketing: 10,
            networking: 15,
            fundraising: 10,
            sustainability: 15
          }
        },
        startup: {
          team: {
            productivity: 25,
            morale: 20,
            culture: 25,
            size: 0
          },
          product: {
            development: 15,
            quality: 20,
            innovation: 15,
            marketFit: 20,
            mvpProgress: 15
          }
        },
        relationships: {
          employees: 25,
          customers: 15,
          investors: 10,
          community: 20
        },
        triggerMilestone: 'collaborative_leadership_001'
      }
    }
  ]
};

// Equity Renegotiation
export const equityRenegotiation: GameEvent = {
  id: 'equity_renegotiation_001',
  category: 'team',
  title: 'Equity Discussion',
  description: 'Your co-founder wants to revisit the equity split based on evolving roles and contributions. This is a delicate but important conversation.',
  
  conditions: {
    requiredPhase: GamePhase.BOOTSTRAPPING,
    activeMilestone: ['strong_leadership_001', 'collaborative_leadership_001']
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
      id: 'maintain_split',
      text: 'Stand firm on the original agreement, emphasizing long-term commitment.',
      impact: {
        founder: {
          wellBeing: {
            energy: -20,
            stress: 30,
            health: -10
          },
          skills: {
            leadership: 15,
            execution: 10,
            technical: 5,
            growth: 5,
            marketing: 0,
            networking: -5,
            fundraising: -5,
            sustainability: -10
          }
        },
        startup: {
          team: {
            productivity: -10,
            morale: -15,
            culture: -20,
            size: 0
          },
          finances: {
            burnRate: 0,
            cash: 0,
            revenue: -5000,
            valuation: -1000000
          }
        },
        relationships: {
          employees: -15,
          customers: -5,
          investors: -10,
          community: -10
        },
        triggerMilestone: 'equity_tension_001'
      }
    },
    {
      id: 'performance_based',
      text: 'Propose a performance-based vesting adjustment going forward.',
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
            technical: 10,
            growth: 10,
            marketing: 5,
            networking: 10,
            fundraising: 15,
            sustainability: 15
          }
        },
        startup: {
          team: {
            productivity: 20,
            morale: 15,
            culture: 15,
            size: 0
          },
          finances: {
            burnRate: 10000,
            cash: -20000,
            revenue: 10000,
            valuation: 500000
          }
        },
        relationships: {
          employees: 15,
          customers: 10,
          investors: 20,
          community: 15
        },
        triggerMilestone: 'equity_resolution_001'
      }
    }
  ]
};

// Work-Style Conflict
export const workStyleConflict: GameEvent = {
  id: 'work_style_conflict_001',
  category: 'team',
  title: 'Leadership Style Tension',
  description: 'Different working styles between you and your co-founder are creating team confusion. You need to establish clear leadership patterns.',
  
  conditions: {
    requiredPhase: GamePhase.BOOTSTRAPPING,
    activeMilestone: ['equity_tension_001', 'equity_resolution_001']
  },
  
  impact: {
    founder: {
      wellBeing: {
        energy: -10,
        stress: 20,
        health: -5
      }
    }
  },
  
  choices: [
    {
      id: 'domain_split',
      text: 'Clearly divide responsibilities and domains of ownership.',
      impact: {
        founder: {
          wellBeing: {
            energy: -15,
            stress: 15,
            health: -5
          },
          skills: {
            leadership: 20,
            execution: 15,
            technical: 15,
            growth: 10,
            marketing: 10,
            networking: 10,
            fundraising: 15,
            sustainability: 15
          }
        },
        startup: {
          team: {
            productivity: 25,
            morale: 20,
            culture: 15,
            size: 0
          },
          product: {
            development: 20,
            quality: 15,
            innovation: 15,
            marketFit: 20,
            mvpProgress: 15
          }
        },
        relationships: {
          employees: 20,
          customers: 15,
          investors: 20,
          community: 15
        },
        triggerMilestone: 'clear_domains_001'
      }
    },
    {
      id: 'unified_approach',
      text: 'Work on aligning your styles through executive coaching.',
      impact: {
        founder: {
          wellBeing: {
            energy: -20,
            stress: 25,
            health: -10
          },
          skills: {
            leadership: 25,
            execution: 20,
            technical: 10,
            growth: 15,
            marketing: 15,
            networking: 15,
            fundraising: 20,
            sustainability: 20
          }
        },
        startup: {
          team: {
            productivity: 15,
            morale: 25,
            culture: 30,
            size: 0
          },
          finances: {
            burnRate: 20000,
            cash: -30000,
            revenue: 15000,
            valuation: 1000000
          }
        },
        relationships: {
          employees: 25,
          customers: 20,
          investors: 25,
          community: 20
        },
        triggerMilestone: 'unified_leadership_001'
      }
    }
  ]
};

// Long-term Partnership Planning
export const partnershipPlanning: GameEvent = {
  id: 'partnership_planning_001',
  category: 'team',
  title: 'Future Partnership Planning',
  description: 'With the company growing, it\'s time to formalize long-term partnership arrangements and succession planning.',
  
  conditions: {
    requiredPhase: GamePhase.BOOTSTRAPPING,
    activeMilestone: ['clear_domains_001', 'unified_leadership_001']
  },
  
  impact: {
    founder: {
      wellBeing: {
        energy: -10,
        stress: 15,
        health: -5
      }
    }
  },
  
  choices: [
    {
      id: 'formal_structure',
      text: 'Create detailed partnership agreements and succession plans.',
      impact: {
        founder: {
          wellBeing: {
            energy: -15,
            stress: 20,
            health: -5
          },
          skills: {
            leadership: 25,
            execution: 20,
            technical: 10,
            growth: 15,
            marketing: 10,
            networking: 15,
            fundraising: 20,
            sustainability: 25
          }
        },
        startup: {
          team: {
            productivity: 20,
            morale: 25,
            culture: 25,
            size: 0
          },
          finances: {
            burnRate: 15000,
            cash: -25000,
            revenue: 20000,
            valuation: 2000000
          }
        },
        relationships: {
          employees: 25,
          customers: 15,
          investors: 30,
          community: 20
        },
        triggerMilestone: 'structured_partnership_001'
      }
    },
    {
      id: 'flexible_partnership',
      text: 'Keep arrangements flexible but establish key principles and guidelines.',
      impact: {
        founder: {
          wellBeing: {
            energy: -10,
            stress: 15,
            health: -5
          },
          skills: {
            leadership: 20,
            execution: 15,
            technical: 15,
            growth: 20,
            marketing: 15,
            networking: 20,
            fundraising: 15,
            sustainability: 15
          }
        },
        startup: {
          team: {
            productivity: 15,
            morale: 20,
            culture: 20,
            size: 0
          },
          finances: {
            burnRate: 10000,
            cash: -15000,
            revenue: 25000,
            valuation: 1500000
          }
        },
        relationships: {
          employees: 20,
          customers: 20,
          investors: 15,
          community: 25
        },
        triggerMilestone: 'adaptable_partnership_001'
      }
    }
  ]
}; 