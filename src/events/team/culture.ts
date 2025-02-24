import { GameEvent, GamePhase } from '../../types/stats';

export const teamConflict: GameEvent = {
  id: 'team_conflict_001',
  category: 'team',
  title: 'Team Tension Rising',
  description: 'A heated disagreement has erupted between your engineering and design teams about product direction. The tension is affecting team dynamics and productivity.',
  
  conditions: {
    requiredPhase: GamePhase.BOOTSTRAPPING,
    minimumStats: {
      'founder.skills': {
        leadership: 25,
        execution: 15,
        technical: 0,
        networking: 0,
        fundraising: 0,
        marketing: 0,
        growth: 0,
        sustainability: 0
      },
      'startup.team': {
        size: 3,
        morale: 40,
        productivity: 50,
        culture: 30
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
      id: 'direct_mediation',
      text: 'Clear your schedule and personally mediate the conflict, hearing both sides thoroughly.',
      successChance: 80,
      impact: {
        founder: {
          wellBeing: {
            energy: -20,
            stress: 25,
            health: -5
          },
          skills: {
            leadership: 15,
            execution: 10,
            technical: 5,
            networking: 0,
            fundraising: 0,
            marketing: 0,
            growth: 5,
            sustainability: 10
          }
        },
        startup: {
          team: {
            size: 0,
            morale: 25,
            productivity: 15,
            culture: 20
          },
          product: {
            mvpProgress: -5,
            quality: 10,
            development: 5,
            innovation: 10,
            marketFit: 5
          }
        },
        relationships: {
          employees: 25,
          investors: 5,
          community: 0,
          customers: 0
        },
        triggerMilestone: 'team_harmony_001'
      }
    },
    {
      id: 'delegate_resolution',
      text: 'Delegate the issue to team leads and focus on keeping the product timeline.',
      successChance: 40,
      impact: {
        founder: {
          wellBeing: {
            energy: -5,
            stress: 15,
            health: 0
          },
          skills: {
            leadership: -5,
            execution: 5,
            technical: 0,
            networking: 0,
            fundraising: 0,
            marketing: 0,
            growth: 0,
            sustainability: -5
          }
        },
        startup: {
          team: {
            size: 0,
            morale: -15,
            productivity: -10,
            culture: -15
          },
          product: {
            mvpProgress: 10,
            quality: -5,
            development: 5,
            innovation: -5,
            marketFit: -5
          }
        },
        relationships: {
          employees: -15,
          investors: 0,
          community: 0,
          customers: 0
        },
        triggerMilestone: 'team_tension_001'
      }
    }
  ]
};

export const teamBuildingResponse: GameEvent = {
  id: 'team_building_001',
  category: 'team',
  title: 'Team Building Opportunity',
  description: 'After the recent conflict, there\'s a clear need to strengthen team bonds. A local escape room venue has team-building slots available.',
  
  conditions: {
    requiredPhase: GamePhase.BOOTSTRAPPING,
    activeMilestone: 'team_harmony_001'
  },
  
  impact: {
    startup: {
      team: {
        size: 0,
        morale: 5,
        productivity: 0,
        culture: 5
      }
    }
  },
  
  choices: [
    {
      id: 'offsite_activity',
      text: 'Book the escape room and a team dinner at a trendy Mission restaurant.',
      impact: {
        founder: {
          wellBeing: {
            energy: -10,
            stress: -5,
            health: 0
          },
          skills: {
            leadership: 10,
            execution: 0,
            technical: 0,
            networking: 5,
            fundraising: 0,
            marketing: 0,
            growth: 0,
            sustainability: 5
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
            cash: -1000,
            revenue: 0,
            burnRate: 0,
            valuation: 0
          }
        },
        relationships: {
          employees: 20,
          investors: 0,
          community: 5,
          customers: 0
        },
        triggerMilestone: 'team_bonding_001'
      }
    },
    {
      id: 'internal_workshop',
      text: 'Organize an in-office workshop to align on communication and collaboration practices.',
      impact: {
        founder: {
          wellBeing: {
            energy: -15,
            stress: 10,
            health: 0
          },
          skills: {
            leadership: 15,
            execution: 10,
            technical: 0,
            networking: 0,
            fundraising: 0,
            marketing: 0,
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
          finances: {
            cash: -200,
            revenue: 0,
            burnRate: 0,
            valuation: 0
          }
        },
        relationships: {
          employees: 15,
          investors: 5,
          community: 0,
          customers: 0
        },
        triggerMilestone: 'process_improvement_001'
      }
    }
  ]
};

export const hackathonOpportunity: GameEvent = {
  id: 'hackathon_opportunity_001',
  category: 'team',
  title: 'SF Startup Hackathon',
  description: 'A major tech company is hosting a hackathon focused on AI innovation. Your team is excited about participating and building something new.',
  
  conditions: {
    requiredPhase: GamePhase.BOOTSTRAPPING,
    minimumStats: {
      'founder.skills': {
        technical: 30,
        execution: 20,
        leadership: 0,
        networking: 0,
        fundraising: 0,
        marketing: 0,
        growth: 0,
        sustainability: 0
      },
      'startup.team': {
        size: 2,
        morale: 50,
        productivity: 60,
        culture: 0
      }
    }
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
      id: 'participate_hackathon',
      text: 'Enter the hackathon with a small team to prototype an innovative feature.',
      successChance: 70,
      impact: {
        founder: {
          wellBeing: {
            energy: -30,
            stress: 25,
            health: -10
          },
          skills: {
            technical: 15,
            execution: 10,
            leadership: 5,
            networking: 10,
            fundraising: 0,
            marketing: 5,
            growth: 8,
            sustainability: -5
          }
        },
        startup: {
          team: {
            size: 0,
            morale: 20,
            productivity: -10,
            culture: 15
          },
          product: {
            mvpProgress: -5,
            quality: 10,
            development: 15,
            innovation: 25,
            marketFit: 5
          },
          market: {
            brandReputation: 15,
            socialPresence: 20,
            userTraction: 5,
            marketFit: 0,
            userGrowth: 0
          }
        },
        relationships: {
          community: 25,
          investors: 15,
          employees: 10,
          customers: 5
        },
        triggerMilestone: 'hackathon_success_001'
      }
    },
    {
      id: 'focus_product',
      text: 'Skip the hackathon and maintain focus on your core product development.',
      impact: {
        founder: {
          wellBeing: {
            energy: 5,
            stress: -5,
            health: 5
          },
          skills: {
            technical: 5,
            execution: 10,
            leadership: 5,
            networking: -5,
            fundraising: 0,
            marketing: 0,
            growth: 0,
            sustainability: 10
          }
        },
        startup: {
          team: {
            size: 0,
            morale: -5,
            productivity: 15,
            culture: -5
          },
          product: {
            mvpProgress: 20,
            quality: 15,
            development: 10,
            innovation: 5,
            marketFit: 10
          }
        },
        relationships: {
          community: -10,
          investors: 5,
          employees: -5,
          customers: 10
        }
      }
    }
  ]
};

export const cultureDuringFundraising: GameEvent = {
  id: 'culture_during_fundraising_001',
  category: 'team',
  title: 'Culture Under Pressure',
  description: 'The intense fundraising process is putting strain on team culture. How will you maintain team spirit while pursuing investment?',
  
  conditions: {
    requiredPhase: GamePhase.FUNDRAISING,
    minimumStats: {
      'founder.skills': {
        leadership: 35,
        execution: 30,
        networking: 0,
        fundraising: 0,
        marketing: 0,
        technical: 0,
        growth: 0,
        sustainability: 0
      },
      'startup.team': {
        size: 10,
        morale: 50,
        culture: 40
      }
    }
  },
  
  impact: {
    startup: {
      team: {
        size: 0,
        morale: -5,
        productivity: -8,
        culture: -5
      }
    }
  },
  
  choices: [
    {
      id: 'transparent_communication',
      text: 'Maintain full transparency about the fundraising process with the team',
      successChance: 80,
      impact: {
        founder: {
          skills: {
            leadership: 12,
            execution: 8,
            networking: 5,
            fundraising: 10,
            marketing: 0,
            technical: 0,
            growth: 5,
            sustainability: 8
          },
          wellBeing: {
            energy: -15,
            stress: 10,
            health: 0
          }
        },
        startup: {
          team: {
            size: 0,
            morale: 20,
            productivity: 15,
            culture: 15
          }
        },
        relationships: {
          employees: 25,
          investors: 15,
          community: 10
        }
      }
    },
    {
      id: 'shield_team',
      text: 'Shield the team from fundraising pressure and maintain focus on product',
      impact: {
        founder: {
          skills: {
            leadership: 8,
            execution: 12,
            networking: 0,
            fundraising: 5,
            marketing: 0,
            technical: 5,
            growth: 3,
            sustainability: 5
          },
          wellBeing: {
            energy: -20,
            stress: 15,
            health: 0
          }
        },
        startup: {
          team: {
            size: 0,
            morale: 10,
            productivity: 25,
            culture: 8
          }
        },
        relationships: {
          employees: 15,
          investors: 10,
          community: 5
        }
      }
    }
  ]
};

export const remoteTeamCulture: GameEvent = {
  id: 'remote_team_culture_001',
  category: 'team',
  title: 'Remote Culture Evolution',
  description: 'As your team grows and becomes more distributed, you need to evolve your culture to support remote work.',
  
  conditions: {
    requiredPhase: GamePhase.SCALING,
    minimumStats: {
      'founder.skills': {
        leadership: 40,
        execution: 35,
        networking: 0,
        fundraising: 0,
        marketing: 0,
        technical: 0,
        growth: 0,
        sustainability: 0
      },
      'startup.team': {
        size: 20,
        morale: 60,
        culture: 50
      }
    }
  },
  
  impact: {
    startup: {
      team: {
        size: 0,
        morale: 5,
        productivity: 8,
        culture: 10
      }
    }
  },
  
  choices: [
    {
      id: 'digital_first',
      text: 'Implement digital-first culture initiatives and virtual team building',
      successChance: 75,
      impact: {
        founder: {
          skills: {
            leadership: 15,
            execution: 10,
            networking: 8,
            fundraising: 0,
            marketing: 5,
            technical: 5,
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
          team: {
            size: 0,
            morale: 20,
            productivity: 15,
            culture: 25
          }
        },
        relationships: {
          employees: 25,
          community: 15,
          investors: 10
        }
      }
    },
    {
      id: 'hybrid_approach',
      text: 'Balance remote work with regular in-person gatherings',
      impact: {
        founder: {
          skills: {
            leadership: 12,
            execution: 8,
            networking: 12,
            fundraising: 0,
            marketing: 5,
            technical: 0,
            growth: 8,
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
            size: 0,
            morale: 25,
            productivity: 12,
            culture: 20
          },
          finances: {
            cash: -100000,
            burnRate: 20000,
            revenue: 0,
            valuation: 0
          }
        },
        relationships: {
          employees: 30,
          community: 20,
          investors: 5
        }
      }
    }
  ]
};

export const culturalTransformation: GameEvent = {
  id: 'cultural_transformation_001',
  category: 'team',
  title: 'Scaling Culture Challenge',
  description: 'Your startup culture needs to evolve as you scale. How will you maintain your core values while adapting to rapid growth?',
  
  conditions: {
    requiredPhase: GamePhase.SCALING,
    minimumStats: {
      'founder.skills': {
        leadership: 45,
        execution: 40,
        networking: 0,
        fundraising: 0,
        marketing: 0,
        technical: 0,
        growth: 0,
        sustainability: 0
      },
      'startup.team': {
        size: 50,
        morale: 70,
        culture: 60
      }
    }
  },
  
  impact: {
    startup: {
      team: {
        size: 0,
        morale: 8,
        productivity: 10,
        culture: 15
      }
    }
  },
  
  choices: [
    {
      id: 'formalize_culture',
      text: 'Formalize culture programs and establish dedicated culture team',
      successChance: 80,
      impact: {
        founder: {
          skills: {
            leadership: 15,
            execution: 12,
            networking: 5,
            fundraising: 0,
            marketing: 8,
            technical: 0,
            growth: 10,
            sustainability: 15
          },
          wellBeing: {
            energy: -18,
            stress: 15,
            health: 0
          }
        },
        startup: {
          team: {
            size: 2,
            morale: 25,
            productivity: 20,
            culture: 30
          },
          finances: {
            burnRate: 30000,
            cash: -50000,
            revenue: 0,
            valuation: 1000000
          }
        },
        relationships: {
          employees: 30,
          community: 20,
          investors: 15
        }
      }
    },
    {
      id: 'organic_evolution',
      text: 'Let culture evolve organically with light guidance from leadership',
      impact: {
        founder: {
          skills: {
            leadership: 10,
            execution: 8,
            networking: 8,
            fundraising: 0,
            marketing: 5,
            technical: 0,
            growth: 8,
            sustainability: 10
          },
          wellBeing: {
            energy: -12,
            stress: 10,
            health: 0
          }
        },
        startup: {
          team: {
            size: 0,
            morale: 15,
            productivity: 15,
            culture: 20
          }
        },
        relationships: {
          employees: 20,
          community: 25,
          investors: 10
        }
      }
    }
  ]
}; 