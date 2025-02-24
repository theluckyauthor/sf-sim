import { GameEvent, GamePhase } from '../../types/stats';

export const firstHire: GameEvent = {
  id: 'first_hire_001',
  category: 'team',
  title: 'First Engineering Hire',
  description: 'A talented engineer you met at a hackathon is interested in joining your startup. This could be your first key hire.',
  
  conditions: {
    requiredPhase: GamePhase.BOOTSTRAPPING,
    minimumStats: {
      'founder.skills': {
        leadership: 25,
        technical: 20,
        networking: 0,
        fundraising: 0,
        marketing: 0,
        execution: 0,
        growth: 0,
        sustainability: 0
      },
      'startup.finances': {
        cash: 50000 // Need some runway for salary
      }
    }
  },
  
  impact: {
    startup: {
      team: {
        size: 1,
        morale: 10,
        productivity: 15,
        culture: 5
      },
      finances: {
        burnRate: 8000, // Monthly salary impact
        cash: 0,
        revenue: 0,
        valuation: 0
      }
    },
    relationships: {
      employees: 10,
      community: 0,
      investors: 0,
      customers: 0
    }
  },
  
  choices: [
    {
      id: 'offer_equity',
      text: 'Offer a lower salary but significant equity to align long-term interests.',
      successChance: 75,
      impact: {
        startup: {
          team: {
            size: 1,
            morale: 20,
            productivity: 25,
            culture: 15
          },
          finances: {
            burnRate: 5000,
            cash: -5000, // Signing bonus
            revenue: 0,
            valuation: 0
          },
          product: {
            development: 15,
            quality: 10,
            mvpProgress: 10,
            innovation: 5,
            marketFit: 0
          }
        },
        founder: {
          skills: {
            leadership: 10,
            technical: 0,
            networking: 0,
            fundraising: 0,
            marketing: 0,
            execution: 5,
            growth: 0,
            sustainability: 0
          },
          wellBeing: {
            energy: -10,
            stress: 15,
            health: 0
          }
        },
        relationships: {
          employees: 20,
          community: 5,
          investors: 0,
          customers: 0
        },
        triggerMilestone: 'first_team_member_001'
      }
    },
    {
      id: 'competitive_salary',
      text: 'Offer a competitive market salary to secure the talent immediately.',
      successChance: 90,
      impact: {
        startup: {
          team: {
            size: 1,
            morale: 10,
            productivity: 20,
            culture: 5
          },
          finances: {
            burnRate: 10000,
            cash: -10000, // Signing bonus
            revenue: 0,
            valuation: 0
          },
          product: {
            development: 12,
            quality: 8,
            mvpProgress: 8,
            innovation: 3,
            marketFit: 0
          }
        },
        founder: {
          skills: {
            leadership: 5,
            technical: 0,
            networking: 0,
            fundraising: 0,
            marketing: 0,
            execution: 3,
            growth: 0,
            sustainability: 0
          },
          wellBeing: {
            energy: -5,
            stress: 20,
            health: 0
          }
        },
        relationships: {
          employees: 15,
          community: 0,
          investors: 0,
          customers: 0
        }
      }
    }
  ]
};

export const teamCulture: GameEvent = {
  id: 'team_culture_001',
  category: 'team',
  title: 'Team Culture Initiative',
  description: 'As your team grows, it\'s time to actively shape the company culture. How will you approach this?',
  
  conditions: {
    requiredPhase: GamePhase.BOOTSTRAPPING,
    minimumStats: {
      'startup.team': {
        size: 3,
        morale: 50,
        productivity: 0,
        culture: 0
      }
    }
  },
  
  impact: {
    startup: {
      team: {
        culture: 5,
        morale: 5,
        productivity: 3,
        size: 0
      }
    }
  },
  
  choices: [
    {
      id: 'work_life_balance',
      text: 'Establish clear work-life boundaries and flexible working hours.',
      impact: {
        startup: {
          team: {
            culture: 20,
            morale: 25,
            productivity: 10,
            size: 0
          },
          finances: {
            burnRate: 2000, // Small increase for perks
            cash: 0,
            revenue: 0,
            valuation: 0
          }
        },
        founder: {
          skills: {
            leadership: 8,
            technical: 0,
            networking: 0,
            fundraising: 0,
            marketing: 0,
            execution: 0,
            growth: 3,
            sustainability: 5
          },
          wellBeing: {
            energy: 10,
            stress: -15,
            health: 0
          }
        },
        relationships: {
          employees: 25,
          community: 10,
          investors: 0,
          customers: 0
        },
        triggerMilestone: 'positive_culture_001'
      }
    },
    {
      id: 'startup_hustle',
      text: 'Foster a high-energy, mission-driven culture focused on rapid growth.',
      impact: {
        startup: {
          team: {
            culture: 15,
            morale: 10,
            productivity: 25,
            size: 0
          },
          product: {
            development: 10,
            quality: 5,
            mvpProgress: 5,
            innovation: 8,
            marketFit: 0
          }
        },
        founder: {
          skills: {
            leadership: 5,
            technical: 0,
            networking: 0,
            fundraising: 0,
            marketing: 0,
            execution: 5,
            growth: 5,
            sustainability: 0
          },
          wellBeing: {
            energy: -10,
            stress: 15,
            health: 0
          }
        },
        relationships: {
          employees: 15,
          community: 5,
          investors: 10,
          customers: 0
        }
      }
    }
  ]
};

export const initialTeamPlanning: GameEvent = {
  id: 'initial_team_planning_001',
  category: 'team',
  title: 'Initial Team Planning',
  description: 'Time to plan out your initial team structure and identify key roles you\'ll need to fill.',
  
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
        leadership: 3,
        networking: 0,
        fundraising: 0,
        marketing: 0,
        growth: 0,
        sustainability: 0
      },
      wellBeing: {
        energy: -5,
        stress: 5,
        health: 0
      }
    }
  },
  
  choices: [
    {
      id: 'technical_first',
      text: 'Focus on technical roles first - Plan to hire engineers and product designers',
      successChance: 80,
      impact: {
        founder: {
          skills: {
            technical: 2,
            execution: 3,
            leadership: 5,
            networking: 0,
            fundraising: 0,
            marketing: 0,
            growth: 0,
            sustainability: 0
          },
          wellBeing: {
            energy: -10,
            stress: 8,
            health: 0
          }
        }
      }
    },
    {
      id: 'balanced_approach',
      text: 'Take a balanced approach - Plan for both technical and business roles',
      impact: {
        founder: {
          skills: {
            technical: 1,
            execution: 4,
            leadership: 4,
            networking: 2,
            fundraising: 1,
            marketing: 1,
            growth: 0,
            sustainability: 0
          },
          wellBeing: {
            energy: -8,
            stress: 5,
            health: 0
          }
        }
      }
    }
  ]
};

export const executiveHiring: GameEvent = {
  id: 'executive_hiring_001',
  category: 'team',
  title: 'Executive Team Formation',
  description: 'As you prepare for fundraising, investors want to see a strong executive team. You need to make some key leadership hires.',
  
  conditions: {
    requiredPhase: GamePhase.FUNDRAISING,
    minimumStats: {
      'founder.skills': {
        leadership: 35,
        execution: 30,
        networking: 25,
        fundraising: 0,
        marketing: 0,
        technical: 0,
        growth: 0,
        sustainability: 0
      },
      'startup.finances': {
        cash: 100000
      }
    }
  },
  
  impact: {
    startup: {
      team: {
        size: 2,
        morale: 10,
        productivity: 15,
        culture: 8
      },
      finances: {
        burnRate: 25000,
        cash: -50000,
        revenue: 0,
        valuation: 1000000
      }
    }
  },
  
  choices: [
    {
      id: 'experienced_execs',
      text: 'Hire experienced executives from established tech companies',
      successChance: 75,
      impact: {
        founder: {
          skills: {
            leadership: 15,
            execution: 10,
            networking: 8,
            fundraising: 12,
            marketing: 5,
            technical: 0,
            growth: 10,
            sustainability: 5
          },
          wellBeing: {
            energy: -15,
            stress: 12,
            health: 0
          }
        },
        startup: {
          team: {
            size: 2,
            morale: 15,
            productivity: 20,
            culture: 10
          },
          finances: {
            burnRate: 35000,
            cash: -80000,
            revenue: 0,
            valuation: 2000000
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
      id: 'promote_internal',
      text: 'Promote high-performing team members to executive positions',
      impact: {
        founder: {
          skills: {
            leadership: 12,
            execution: 8,
            networking: 5,
            fundraising: 8,
            marketing: 5,
            technical: 0,
            growth: 8,
            sustainability: 8
          },
          wellBeing: {
            energy: -10,
            stress: 8,
            health: 0
          }
        },
        startup: {
          team: {
            size: 0,
            morale: 25,
            productivity: 15,
            culture: 20
          },
          finances: {
            burnRate: 20000,
            cash: -30000,
            revenue: 0,
            valuation: 800000
          }
        },
        relationships: {
          employees: 30,
          investors: 15,
          community: 5
        }
      }
    }
  ]
};

export const seniorHiringSpree: GameEvent = {
  id: 'senior_hiring_spree_001',
  category: 'team',
  title: 'Senior Talent Acquisition',
  description: 'With significant funding secured, you need to rapidly build out your senior engineering and product teams.',
  
  conditions: {
    requiredPhase: GamePhase.SCALING,
    minimumStats: {
      'founder.skills': {
        leadership: 40,
        execution: 35,
        technical: 30,
        networking: 0,
        fundraising: 0,
        marketing: 0,
        growth: 0,
        sustainability: 0
      },
      'startup.finances': {
        cash: 500000
      }
    }
  },
  
  impact: {
    startup: {
      team: {
        size: 5,
        morale: 10,
        productivity: 20,
        culture: 5
      },
      finances: {
        burnRate: 100000,
        cash: -200000,
        revenue: 0,
        valuation: 2000000
      }
    }
  },
  
  choices: [
    {
      id: 'targeted_hiring',
      text: 'Focus on targeted hiring of senior specialists in key areas',
      successChance: 80,
      impact: {
        founder: {
          skills: {
            leadership: 15,
            execution: 12,
            technical: 10,
            networking: 8,
            fundraising: 0,
            marketing: 5,
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
          team: {
            size: 5,
            morale: 15,
            productivity: 25,
            culture: 10
          },
          finances: {
            burnRate: 150000,
            cash: -300000,
            revenue: 100000,
            valuation: 5000000
          }
        },
        relationships: {
          employees: 20,
          investors: 15,
          community: 10
        }
      }
    },
    {
      id: 'rapid_expansion',
      text: 'Rapidly expand teams across all departments',
      impact: {
        founder: {
          skills: {
            leadership: 10,
            execution: 15,
            technical: 8,
            networking: 10,
            fundraising: 0,
            marketing: 8,
            growth: 12,
            sustainability: 5
          },
          wellBeing: {
            energy: -25,
            stress: 20,
            health: 0
          }
        },
        startup: {
          team: {
            size: 8,
            morale: 10,
            productivity: 15,
            culture: 5
          },
          finances: {
            burnRate: 200000,
            cash: -400000,
            revenue: 150000,
            valuation: 8000000
          }
        },
        relationships: {
          employees: 15,
          investors: 20,
          community: 15
        }
      }
    }
  ]
};

export const internationalTeam: GameEvent = {
  id: 'international_team_001',
  category: 'team',
  title: 'International Team Expansion',
  description: 'Your startup is ready for global expansion. How will you build and manage international teams?',
  
  conditions: {
    requiredPhase: GamePhase.SCALING,
    minimumStats: {
      'founder.skills': {
        leadership: 45,
        execution: 40,
        networking: 35,
        fundraising: 0,
        marketing: 0,
        technical: 0,
        growth: 0,
        sustainability: 0
      },
      'startup.finances': {
        cash: 1000000
      }
    }
  },
  
  impact: {
    startup: {
      team: {
        size: 10,
        morale: 8,
        productivity: 15,
        culture: 10
      },
      finances: {
        burnRate: 200000,
        cash: -400000,
        revenue: 0,
        valuation: 3000000
      }
    }
  },
  
  choices: [
    {
      id: 'remote_first',
      text: 'Build a remote-first global team structure',
      successChance: 75,
      impact: {
        founder: {
          skills: {
            leadership: 15,
            execution: 12,
            networking: 10,
            fundraising: 0,
            marketing: 8,
            technical: 5,
            growth: 12,
            sustainability: 10
          },
          wellBeing: {
            energy: -20,
            stress: 15,
            health: 0
          }
        },
        startup: {
          team: {
            size: 15,
            morale: 20,
            productivity: 25,
            culture: 15
          },
          finances: {
            burnRate: 250000,
            cash: -500000,
            revenue: 300000,
            valuation: 10000000
          }
        },
        relationships: {
          employees: 25,
          investors: 15,
          community: 20
        }
      }
    },
    {
      id: 'regional_offices',
      text: 'Establish regional offices with local leadership',
      impact: {
        founder: {
          skills: {
            leadership: 12,
            execution: 15,
            networking: 12,
            fundraising: 0,
            marketing: 10,
            technical: 5,
            growth: 15,
            sustainability: 8
          },
          wellBeing: {
            energy: -25,
            stress: 20,
            health: 0
          }
        },
        startup: {
          team: {
            size: 20,
            morale: 15,
            productivity: 20,
            culture: 10
          },
          finances: {
            burnRate: 400000,
            cash: -800000,
            revenue: 500000,
            valuation: 15000000
          }
        },
        relationships: {
          employees: 20,
          investors: 20,
          community: 25
        }
      }
    }
  ]
};