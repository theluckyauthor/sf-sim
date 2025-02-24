import { GameEvent, GamePhase } from '../../types/stats';

export const foggyMorning: GameEvent = {
  id: 'foggy_morning_001',
  category: 'personal',
  title: 'Karl the Fog',
  description: 'A typical foggy San Francisco morning. The city is shrouded in its famous fog, creating a unique atmosphere.',
  
  conditions: {},
  
  impact: {
    founder: {
      wellBeing: {
        energy: 5,
        stress: -5,
        health: 0
      }
    }
  },
  
  choices: [
    {
      id: 'morning_hike',
      text: 'Take an early morning hike up Twin Peaks to watch the fog roll over the city.',
      impact: {
        founder: {
          wellBeing: {
            energy: 15,
            stress: -15,
            health: 10
          },
          skills: {
            networking: 0,
            technical: 0,
            leadership: 2,
            fundraising: 0,
            marketing: 0,
            execution: 0,
            growth: 0,
            sustainability: 5
          }
        },
        relationships: {
          community: 5,
          investors: 0,
          employees: 0,
          customers: 0
        }
      }
    },
    {
      id: 'cozy_cafe',
      text: 'Head to a cozy café in Hayes Valley for some productive work time.',
      impact: {
        founder: {
          wellBeing: {
            energy: 10,
            stress: -8,
            health: 0
          },
          skills: {
            networking: 2,
            technical: 0,
            leadership: 0,
            fundraising: 0,
            marketing: 0,
            execution: 5,
            growth: 0,
            sustainability: 0
          }
        },
        startup: {
          product: {
            development: 5,
            quality: 3,
            mvpProgress: 3,
            innovation: 0,
            marketFit: 0
          }
        }
      }
    }
  ]
};

export const missionWeekend: GameEvent = {
  id: 'mission_weekend_001',
  category: 'personal',
  title: 'Mission District Weekend',
  description: 'It\'s a sunny weekend in the Mission. The neighborhood is alive with food, art, and tech entrepreneurs.',
  
  conditions: {
    requiredDistrict: 'Mission',
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
      wellBeing: {
        energy: 5,
        stress: -5,
        health: 5
      }
    }
  },
  
  choices: [
    {
      id: 'dolores_park',
      text: 'Spend the afternoon at Dolores Park networking with other founders.',
      impact: {
        founder: {
          wellBeing: {
            energy: 10,
            stress: -10,
            health: 8
          },
          skills: {
            networking: 8,
            technical: 0,
            leadership: 0,
            fundraising: 0,
            marketing: 0,
            execution: 0,
            growth: 0,
            sustainability: 3
          }
        },
        relationships: {
          community: 15,
          investors: 5,
          employees: 0,
          customers: 0
        }
      }
    },
    {
      id: 'local_exploration',
      text: 'Explore local cafes and coworking spaces to find potential work spots.',
      impact: {
        founder: {
          wellBeing: {
            energy: 5,
            stress: -5,
            health: 5
          },
          skills: {
            networking: 3,
            technical: 0,
            leadership: 0,
            fundraising: 0,
            marketing: 2,
            execution: 3,
            growth: 0,
            sustainability: 0
          }
        },
        startup: {
          team: {
            morale: 5,
            productivity: 5,
            size: 0,
            culture: 8
          }
        },
        relationships: {
          community: 10,
          investors: 0,
          employees: 5,
          customers: 3
        }
      }
    }
  ]
};

export const somaTechScene: GameEvent = {
  id: 'soma_tech_scene_001',
  category: 'personal',
  title: 'SOMA Tech Scene',
  description: 'A popular tech meetup is happening at a trendy SOMA venue. The place will be full of founders, engineers, and investors.',
  
  conditions: {
    requiredDistrict: 'SOMA',
    minimumStats: {
      'founder.skills': {
        networking: 10,
        technical: 0
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
      id: 'give_talk',
      text: 'Volunteer to give a lightning talk about your startup',
      successChance: 75,
      impact: {
        founder: {
          skills: {
            networking: 15,
            marketing: 10,
            leadership: 8,
            technical: 5,
            fundraising: 5,
            execution: 0,
            growth: 3,
            sustainability: 0
          },
          wellBeing: {
            energy: -15,
            stress: 15,
            health: 0
          }
        },
        startup: {
          market: {
            brandReputation: 15,
            socialPresence: 20,
            userTraction: 10,
            marketFit: 5,
            userGrowth: 8
          }
        },
        relationships: {
          community: 20,
          investors: 15,
          employees: 5,
          customers: 10
        }
      }
    },
    {
      id: 'network_casually',
      text: 'Focus on casual networking and building relationships',
      impact: {
        founder: {
          skills: {
            networking: 10,
            marketing: 5,
            leadership: 3,
            technical: 8,
            fundraising: 3,
            execution: 0,
            growth: 0,
            sustainability: 5
          },
          wellBeing: {
            energy: -8,
            stress: 5,
            health: 0
          }
        },
        startup: {
          team: {
            morale: 5,
            productivity: 0,
            culture: 8,
            size: 0
          }
        },
        relationships: {
          community: 15,
          investors: 8,
          employees: 10,
          customers: 5
        }
      }
    }
  ]
};

export const housingCrisis: GameEvent = {
  id: 'housing_crisis_001',
  category: 'personal',
  title: 'Housing Challenge',
  description: 'Your rent is increasing significantly, a common challenge in San Francisco. This could affect your runway and team.',
  
  conditions: {
    minimumStats: {
      'startup.finances': {
        cash: 10000,
        burnRate: 5000
      }
    }
  },
  
  impact: {
    startup: {
      finances: {
        cash: -2000,
        burnRate: 1000,
        revenue: 0,
        valuation: 0
      }
    }
  },
  
  choices: [
    {
      id: 'relocate_office',
      text: 'Move to a more affordable neighborhood outside the city center',
      successChance: 80,
      impact: {
        founder: {
          wellBeing: {
            energy: -15,
            stress: 20,
            health: -5
          },
          skills: {
            execution: 10,
            leadership: 8,
            technical: 0,
            networking: -5,
            fundraising: 0,
            marketing: 0,
            growth: 5,
            sustainability: 10
          }
        },
        startup: {
          team: {
            morale: -10,
            productivity: -5,
            culture: 5,
            size: 0
          },
          finances: {
            cash: -10000,
            burnRate: -3000,
            revenue: 0,
            valuation: 0
          }
        },
        relationships: {
          employees: -5,
          investors: -5,
          community: -10,
          customers: 0
        }
      }
    },
    {
      id: 'optimize_space',
      text: 'Stay but optimize current space usage and implement hybrid work',
      impact: {
        founder: {
          wellBeing: {
            energy: -10,
            stress: 15,
            health: -3
          },
          skills: {
            execution: 12,
            leadership: 10,
            technical: 5,
            networking: 0,
            fundraising: 0,
            marketing: 0,
            growth: 8,
            sustainability: 5
          }
        },
        startup: {
          team: {
            morale: 5,
            productivity: 8,
            culture: 10,
            size: 0
          },
          finances: {
            cash: -5000,
            burnRate: -1000,
            revenue: 0,
            valuation: 0
          }
        },
        relationships: {
          employees: 10,
          investors: 5,
          community: 0,
          customers: 0
        }
      }
    }
  ]
};

export const transportationChallenge: GameEvent = {
  id: 'transportation_challenge_001',
  category: 'personal',
  title: 'Transit Dilemma',
  description: 'SF\'s transit challenges are affecting team commutes and productivity. Time to address the transportation situation.',
  
  conditions: {
    minimumStats: {
      'startup.team': {
        size: 5,
        morale: 40
      }
    }
  },
  
  impact: {
    startup: {
      team: {
        morale: -5,
        productivity: -5,
        size: 0,
        culture: 0
      }
    }
  },
  
  choices: [
    {
      id: 'transit_benefits',
      text: 'Implement comprehensive transit benefits and flexible hours',
      successChance: 85,
      impact: {
        founder: {
          skills: {
            leadership: 12,
            execution: 8,
            technical: 0,
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
          team: {
            morale: 20,
            productivity: 15,
            culture: 12,
            size: 0
          },
          finances: {
            cash: -20000,
            burnRate: 5000,
            revenue: 0,
            valuation: 0
          }
        },
        relationships: {
          employees: 25,
          investors: 5,
          community: 10,
          customers: 0
        }
      }
    },
    {
      id: 'remote_work',
      text: 'Shift towards a remote-first culture',
      impact: {
        founder: {
          skills: {
            leadership: 15,
            execution: 10,
            technical: 5,
            networking: -5,
            fundraising: 0,
            marketing: 0,
            growth: 8,
            sustainability: 5
          },
          wellBeing: {
            energy: -10,
            stress: 15,
            health: -3
          }
        },
        startup: {
          team: {
            morale: 15,
            productivity: 20,
            culture: 8,
            size: 0
          },
          finances: {
            cash: -10000,
            burnRate: -2000,
            revenue: 0,
            valuation: 0
          }
        },
        relationships: {
          employees: 20,
          investors: -5,
          community: -10,
          customers: 0
        }
      }
    }
  ]
};

export const sfCulture: GameEvent = {
  id: 'sf_culture_001',
  category: 'personal',
  title: 'SF Culture Integration',
  description: 'Your team is discussing how to better integrate with SF\'s unique tech culture while maintaining authenticity.',
  
  conditions: {
    minimumStats: {
      'startup.team': {
        culture: 30,
        morale: 35
      }
    }
  },
  
  impact: {
    startup: {
      team: {
        culture: 5,
        morale: 3,
        productivity: 0,
        size: 0
      }
    }
  },
  
  choices: [
    {
      id: 'embrace_culture',
      text: 'Fully embrace SF startup culture with team events and local partnerships',
      successChance: 75,
      impact: {
        founder: {
          skills: {
            networking: 15,
            leadership: 10,
            marketing: 8,
            technical: 0,
            fundraising: 5,
            execution: 5,
            growth: 8,
            sustainability: -5
          },
          wellBeing: {
            energy: -15,
            stress: 10,
            health: 0
          }
        },
        startup: {
          team: {
            culture: 20,
            morale: 15,
            productivity: 10,
            size: 0
          },
          market: {
            brandReputation: 15,
            socialPresence: 20,
            userTraction: 10,
            marketFit: 5,
            userGrowth: 8
          }
        },
        relationships: {
          community: 25,
          investors: 15,
          employees: 10,
          customers: 5
        }
      }
    },
    {
      id: 'balanced_approach',
      text: 'Create a unique culture that balances SF influence with team values',
      impact: {
        founder: {
          skills: {
            leadership: 15,
            execution: 10,
            technical: 5,
            networking: 8,
            fundraising: 3,
            marketing: 5,
            growth: 5,
            sustainability: 10
          },
          wellBeing: {
            energy: -10,
            stress: 5,
            health: -3
          }
        },
        startup: {
          team: {
            culture: 25,
            morale: 20,
            productivity: 15,
            size: 0
          },
          market: {
            brandReputation: 10,
            socialPresence: 15,
            userTraction: 8,
            marketFit: 8,
            userGrowth: 5
          }
        },
        relationships: {
          community: 15,
          investors: 10,
          employees: 20,
          customers: 10
        }
      }
    }
  ]
};

export const securityIncident: GameEvent = {
  id: 'security_incident_001',
  category: 'personal',
  title: 'Office Security Concerns',
  description: 'Recent car break-ins near your office have raised security concerns among the team.',
  
  conditions: {
    minimumStats: {
      'startup.team': {
        size: 3,
        morale: 30
      }
    }
  },
  
  impact: {
    startup: {
      team: {
        morale: -5,
        productivity: -3,
        size: 0,
        culture: 0
      }
    }
  },
  
  choices: [
    {
      id: 'security_upgrade',
      text: 'Invest in office security upgrades and parking solutions',
      impact: {
        startup: {
          finances: {
            cash: -8000,
            burnRate: 500,
            revenue: 0,
            valuation: 0
          },
          team: {
            morale: 15,
            productivity: 10,
            culture: 5,
            size: 0
          }
        },
        relationships: {
          employees: 15,
          community: 5
        }
      }
    },
    {
      id: 'flexible_work',
      text: 'Implement flexible hours to avoid high-risk times',
      impact: {
        startup: {
          team: {
            morale: 10,
            productivity: 8,
            culture: 8,
            size: 0
          }
        },
        relationships: {
          employees: 10
        }
      }
    }
  ]
};

export const castroNightlife: GameEvent = {
  id: 'castro_nightlife_001',
  category: 'personal',
  title: 'Castro District Night Out',
  description: 'Your team suggests a night out in the Castro, SF\'s historic LGBTQ+ neighborhood, known for its vibrant nightlife and inclusive atmosphere.',
  
  conditions: {
    requiredDistrict: 'Castro',
    minimumStats: {
      'startup.team': {
        size: 4,
        culture: 20
      }
    }
  },
  
  impact: {
    founder: {
      wellBeing: {
        energy: 5,
        stress: -8,
        health: 0
      }
    }
  },
  
  choices: [
    {
      id: 'team_bonding',
      text: 'Organize an inclusive team night out with dinner and dancing',
      impact: {
        founder: {
          wellBeing: {
            energy: -10,
            stress: -15,
            health: -5
          },
          skills: {
            leadership: 10,
            networking: 8,
            technical: 0,
            fundraising: 0,
            marketing: 0,
            execution: 0,
            growth: 0,
            sustainability: 0
          }
        },
        startup: {
          team: {
            morale: 20,
            culture: 15,
            productivity: 5,
            size: 0
          }
        },
        relationships: {
          employees: 20,
          community: 15
        }
      }
    },
    {
      id: 'pride_sponsorship',
      text: 'Get involved in local LGBTQ+ tech community events',
      impact: {
        founder: {
          skills: {
            networking: 15,
            marketing: 10,
            leadership: 8,
            technical: 0,
            fundraising: 0,
            execution: 0,
            growth: 0,
            sustainability: 0
          }
        },
        startup: {
          market: {
            brandReputation: 20,
            socialPresence: 15,
            userTraction: 10,
            marketFit: 10,
            userGrowth: 5
          },
          team: {
            culture: 20,
            morale: 15,
            productivity: 0,
            size: 0
          }
        },
        relationships: {
          community: 25,
          employees: 15,
          customers: 10
        }
      }
    }
  ]
};

export const chinatownLunch: GameEvent = {
  id: 'chinatown_lunch_001',
  category: 'personal',
  title: 'Chinatown Team Lunch',
  description: 'Take the team to explore SF\'s historic Chinatown for lunch and cultural experience.',
  
  conditions: {
    requiredDistrict: 'Chinatown',
    minimumStats: {
      'startup.team': {
        size: 3
      }
    }
  },
  
  impact: {
    startup: {
      team: {
        morale: 5,
        culture: 3,
        productivity: 0,
        size: 0
      }
    }
  },
  
  choices: [
    {
      id: 'dim_sum',
      text: 'Host a team dim sum gathering',
      impact: {
        founder: {
          wellBeing: {
            energy: 10,
            stress: -10,
            health: 5
          },
          skills: {
            leadership: 5,
            networking: 3,
            technical: 3,
            fundraising: 2,
            execution: 2,
            growth: 2,
            sustainability: 0,
            marketing: 0
          }
        },
        startup: {
          team: {
            morale: 15,
            culture: 10,
            productivity: 8,
            size: 0
          }
        },
        relationships: {
          employees: 15,
          community: 8
        }
      }
    },
    {
      id: 'cultural_exchange',
      text: 'Organize a cultural exchange event with local businesses',
      impact: {
        founder: {
          skills: {
            networking: 10,
            marketing: 8,
            leadership: 5,
            technical: 0,
            fundraising: 0,
            execution: 0,
            growth: 0,
            sustainability: 0
          }
        },
        startup: {
          market: {
            brandReputation: 15,
            socialPresence: 10,
            userTraction: 5,
            marketFit: 5,
            userGrowth: 0
          },
          team: {
            culture: 15,
            morale: 10,
            productivity: 0,
            size: 0
          }
        },
        relationships: {
          community: 20,
          employees: 10,
          customers: 8
        }
      }
    }
  ]
};

export const homelessnessImpact: GameEvent = {
  id: 'homelessness_impact_001',
  category: 'personal',
  title: 'Community Impact',
  description: 'Your team witnesses the city\'s homeless crisis firsthand and wants to take action.',
  
  conditions: {
    minimumStats: {
      'startup.finances': {
        cash: 20000
      }
    }
  },
  
  impact: {
    founder: {
      wellBeing: {
        stress: 5,
        health: 0,
        energy: 0
      }
    }
  },
  
  choices: [
    {
      id: 'community_program',
      text: 'Start a tech training program for homeless individuals',
      impact: {
        founder: {
          skills: {
            leadership: 15,
            execution: 10,
            sustainability: 20,
            technical: 0,
            networking: 0,
            fundraising: 0,
            marketing: 0,
            growth: 0
          }
        },
        startup: {
          finances: {
            cash: -15000,
            burnRate: 2000,
            revenue: 0,
            valuation: 0
          },
          market: {
            brandReputation: 25,
            socialPresence: 20,
            userTraction: 15,
            marketFit: 15,
            userGrowth: 10
          },
          team: {
            culture: 20,
            morale: 15,
            productivity: 0,
            size: 0
          }

          }
        }
      }
    ,
    {
      id: 'local_partnership',
      text: 'Partner with local shelters and support organizations',
      impact: {
        founder: {
          skills: {
            networking: 10,
            leadership: 8,
            sustainability: 15,
            technical: 0,
            fundraising: 0,
            marketing: 0,
            execution: 0,
            growth: 0
          }
        },
        startup: {
          finances: {
            cash: -8000,
            revenue: 0,
            burnRate: 0,
            valuation: 0
          },
          market: {
            brandReputation: 15,
            socialPresence: 10,
            userTraction: 5,
            marketFit: 5,
            userGrowth: 0
          },
          team: {
            culture: 15,
            morale: 10,
            productivity: 0,
            size: 0
          }
        },
        relationships: {
          community: 20,
          employees: 15
        }
      }
    }
  ]
};

export const touristAttraction: GameEvent = {
  id: 'tourist_attraction_001',
  category: 'personal',
  title: 'Tourist Perspective',
  description: 'Visiting investors want to experience iconic San Francisco attractions.',
  
  conditions: {
    minimumStats: {
      'founder.skills': {
        networking: 15
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
      id: 'classic_tour',
      text: 'Give a classic SF tour (Golden Gate, Fisherman\'s Wharf, cable cars)',
      impact: {
        founder: {
          wellBeing: {
            energy: -15,
            stress: 10,
            health: 0
          },
          skills: {
            networking: 15,
            fundraising: 10,
            technical: 0,
            leadership: 0,
            marketing: 0,
            execution: 0,
            growth: 0,
            sustainability: 0
          }
        },
        relationships: {
          investors: 20,
          community: 5,
          employees: 10
        }
      }
    },
    {
      id: 'startup_tour',
      text: 'Show them the "real" SF (local cafes, coworking spaces, hidden gems)',
      impact: {
        founder: {
          wellBeing: {
            energy: -10,
            stress: 5,
            health: 0
          },
          skills: {
            networking: 20,
            fundraising: 15,
            technical: 0,
            leadership: 0,
            marketing: 0,
            execution: 0,
            growth: 0,
            sustainability: 0
          }
        },
        relationships: {
          investors: 25,
          community: 10
        }
      }
    }
  ]
};

export const haightAshburyEvent: GameEvent = {
  id: 'haight_ashbury_001',
  category: 'personal',
  title: 'Haight-Ashbury Inspiration',
  description: 'Spend a day in the historic Haight-Ashbury district, known for its counterculture history and creative energy.',
  
  conditions: {
    requiredDistrict: 'Haight',
    minimumStats: {
      'founder.wellBeing': {
        energy: 30
      }
    }
  },
  
  impact: {
    founder: {
      wellBeing: {
        energy: 5,
        stress: -8,
        health: 0
      }
    }
  },
  
  choices: [
    {
      id: 'creative_session',
      text: 'Host a creative brainstorming session in a vintage café',
      impact: {
        founder: {
          skills: {
            marketing: 10,
            technical: 0,
            fundraising: 0,
            leadership: 15,
            execution: 10,
            growth: 0,
            sustainability: 0,
            networking: 0
          },
          wellBeing: {
            energy: 10,
            stress: -10,
            health: 0
          }
        },
        startup: {
          product: {
            innovation: 15,
            quality: 10,
            mvpProgress: 0,
            development: 0,
            marketFit: 0
          },
          team: {
            culture: 10,
            morale: 8,
            productivity: 0,
            size: 0
          }
        }
      }
    },
    {
      id: 'team_exploration',
      text: 'Take the team on a cultural exploration of the neighborhood',
      impact: {
        founder: {
          skills: {
            leadership: 8,
            networking: 5,
            technical: 0,
            fundraising: 0,
            marketing: 0,
            execution: 0,
            growth: 0,
            sustainability: 0
          },
          wellBeing: {
            energy: 5,
            stress: -15,
            health: 0
          }
        },
        startup: {
          team: {
            culture: 15,
            morale: 20,
            productivity: 0,
            size: 0
          }
        },
        relationships: {
          employees: 15,
          community: 10
        }
      }
    }
  ]
};

export const marinHeadlands: GameEvent = {
  id: 'marin_headlands_001',
  category: 'personal',
  title: 'Marin Headlands Retreat',
  description: 'Take a break from the city with a team retreat to the Marin Headlands, offering stunning views of the Golden Gate Bridge.',
  
  conditions: {
    minimumStats: {
      'startup.team': {
        size: 5,
        morale: 30
      }
    }
  },
  
  impact: {
    startup: {
      team: {
        morale: 8,
        productivity: 5,
        size: 0,
        culture: 0
      }
    }
  },
  
  choices: [
    {
      id: 'team_hike',
      text: 'Organize a team hiking and strategy session',
      impact: {
        founder: {
          wellBeing: {
            energy: 15,
            stress: -20,
            health: 10
          },
          skills: {
            leadership: 10,
            execution: 8,
            technical: 0,
            networking: 0,
            fundraising: 0,
            marketing: 0,
            growth: 0,
            sustainability: 0
          }
        },
        startup: {
          team: {
            morale: 25,
            productivity: 15,
            culture: 20,
            size: 0
          }
        },
        relationships: {
          employees: 20
        }
      }
    },
    {
      id: 'offsite_planning',
      text: 'Host a full-day offsite with team building activities',
      impact: {
        founder: {
          wellBeing: {
            energy: -10,
            stress: 10,
            health: 0
          },
          skills: {
            leadership: 15,
            execution: 12,
            technical: 0,
            networking: 0,
            fundraising: 0,
            marketing: 0,
            growth: 0,
            sustainability: 0
          }
        },
        startup: {
          team: {
            morale: 20,
            productivity: 20,
            culture: 15,
            size: 0
          },
          product: {
            innovation: 10,
            quality: 8,
            mvpProgress: 0,
            development: 0,
            marketFit: 0
          }
        },
        relationships: {
          employees: 25
        }
      }
    }
  ]
};

export const bayToBreakers: GameEvent = {
  id: 'bay_to_breakers_001',
  category: 'personal',
  title: 'Bay to Breakers Fun',
  description: 'The annual Bay to Breakers race/party is happening! A chance for team bonding and experiencing a unique SF tradition.',
  
  conditions: {},
  
  impact: {
    founder: {
      wellBeing: {
        energy: 10,
        stress: -10,
        health: 0
      }
    }
  },
  
  choices: [
    {
      id: 'team_participation',
      text: 'Enter as a startup team with matching costumes',
      impact: {
        founder: {
          wellBeing: {
            energy: 15,
            stress: -15,
            health: 10
          },
          skills: {
            leadership: 8,
            networking: 10,
            technical: 0,
            fundraising: 0,
            marketing: 0,
            execution: 0,
            growth: 0,
            sustainability: 0
          }
        },
        startup: {
          team: {
            morale: 25,
            culture: 20,
            productivity: 0,
            size: 0
          },
          market: {
            socialPresence: 15,
            brandReputation: 10,
            userTraction: 0,
            marketFit: 0,
            userGrowth: 0
          }
        },
        relationships: {
          employees: 20,
          community: 15
        }
      }
    },
    {
      id: 'spectator_party',
      text: 'Host a viewing party at your office along the route',
      impact: {
        founder: {
          wellBeing: {
            energy: 10,
            stress: -10,
            health: 0
          },
          skills: {
            networking: 15,
            marketing: 8,
            technical: 0,
            leadership: 0,
            fundraising: 0,
            execution: 0,
            growth: 0,
            sustainability: 0
          }
        },
        startup: {
          team: {
            morale: 15,
            culture: 10,
            productivity: 0,
            size: 0
          },
          market: {
            socialPresence: 20,
            brandReputation: 15,
            userTraction: 0,
            marketFit: 0,
            userGrowth: 0
          }
        },
        relationships: {
          community: 20,
          employees: 15,
          customers: 10
        }
      }
    }
  ]
};