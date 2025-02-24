import { GameEvent, GamePhase } from '../../types/stats';

export const startupConference: GameEvent = {
  id: 'startup_conference_001',
  category: 'networking',
  title: 'TechCrunch Disrupt SF',
  description: 'You\'ve got a pass to the biggest startup conference in SF. Your inbox is already full of meeting requests from potential investors and partners.',
  
  conditions: {
    requiredPhase: GamePhase.BOOTSTRAPPING,
    minimumStats: {
      'founder.skills': {
        networking: 25,
        marketing: 20,
        fundraising: 15,
        leadership: 0,
        technical: 0,
        execution: 0,
        growth: 0,
        sustainability: 0
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
      id: 'network_intensively',
      text: 'Go all in on networking: Schedule back-to-back meetings and attend every social event.',
      successChance: 75,
      impact: {
        founder: {
          wellBeing: {
            energy: -35,
            stress: 30,
            health: -10
          },
          skills: {
            networking: 20,
            marketing: 15,
            fundraising: 10,
            leadership: 5,
            technical: 0,
            execution: 5,
            growth: 10,
            sustainability: -5
          }
        },
        startup: {
          team: {
            size: 0,
            morale: -5,
            productivity: -15,
            culture: 0
          },
          market: {
            brandReputation: 25,
            socialPresence: 20,
            userTraction: 10,
            marketFit: 5,
            userGrowth: 5
          }
        },
        relationships: {
          investors: 30,
          community: 25,
          customers: 10,
          employees: -5
        },
        triggerMilestone: 'conference_success_001'
      }
    },
    {
      id: 'selective_meetings',
      text: 'Be selective: Focus on a few key meetings and catch up on work during breaks.',
      impact: {
        founder: {
          wellBeing: {
            energy: -15,
            stress: 10,
            health: -5
          },
          skills: {
            networking: 10,
            marketing: 5,
            fundraising: 5,
            leadership: 0,
            technical: 0,
            execution: 10,
            growth: 5,
            sustainability: 5
          }
        },
        startup: {
          team: {
            size: 0,
            morale: 5,
            productivity: 5,
            culture: 5
          },
          market: {
            brandReputation: 10,
            socialPresence: 5,
            userTraction: 5,
            marketFit: 10,
            userGrowth: 5
          }
        },
        relationships: {
          investors: 15,
          community: 10,
          customers: 15,
          employees: 5
        }
      }
    }
  ]
};

export const mediaOpportunity: GameEvent = {
  id: 'media_opportunity_001',
  category: 'networking',
  title: 'Unexpected Media Spotlight',
  description: 'A prominent tech blog wants to feature your startup. They\'re offering either a written interview or a live video Q&A session.',
  
  conditions: {
    requiredPhase: GamePhase.BOOTSTRAPPING,
    minimumStats: {
      'founder.skills': {
        marketing: 20,
        networking: 15,
        leadership: 0,
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
        brandReputation: 5,
        socialPresence: 5,
        userTraction: 0,
        marketFit: 0,
        userGrowth: 0
      }
    }
  },
  
  choices: [
    {
      id: 'live_qa',
      text: 'Accept the live Q&A: It\'s riskier but could show authenticity and confidence.',
      successChance: 65,
      impact: {
        founder: {
          wellBeing: {
            energy: -20,
            stress: 25,
            health: -5
          },
          skills: {
            marketing: 15,
            networking: 10,
            leadership: 10,
            technical: 0,
            fundraising: 5,
            execution: 0,
            growth: 8,
            sustainability: 0
          }
        },
        startup: {
          market: {
            brandReputation: 25,
            socialPresence: 30,
            userTraction: 15,
            marketFit: 5,
            userGrowth: 10
          },
          team: {
            size: 0,
            morale: 15,
            productivity: -10,
            culture: 10
          }
        },
        relationships: {
          community: 25,
          investors: 20,
          customers: 15,
          employees: 10
        },
        triggerMilestone: 'media_presence_001'
      }
    },
    {
      id: 'written_interview',
      text: 'Opt for the written interview: Take time to craft perfect responses.',
      impact: {
        founder: {
          wellBeing: {
            energy: -10,
            stress: 10,
            health: 0
          },
          skills: {
            marketing: 10,
            networking: 5,
            leadership: 5,
            technical: 0,
            fundraising: 5,
            execution: 5,
            growth: 5,
            sustainability: 5
          }
        },
        startup: {
          market: {
            brandReputation: 15,
            socialPresence: 10,
            userTraction: 10,
            marketFit: 10,
            userGrowth: 5
          },
          team: {
            size: 0,
            morale: 5,
            productivity: 0,
            culture: 5
          }
        },
        relationships: {
          community: 15,
          investors: 15,
          customers: 20,
          employees: 5
        }
      }
    }
  ]
};

export const investorNetworking: GameEvent = {
  id: 'investor_networking_001',
  category: 'networking',
  title: 'Investor Networking Reception',
  description: 'A high-profile VC firm is hosting a networking reception. Many prominent investors and successful founders will be there.',
  
  conditions: {
    requiredPhase: GamePhase.FUNDRAISING,
    minimumStats: {
      'founder.skills': {
        networking: 30,
        fundraising: 25,
        leadership: 0,
        technical: 0,
        marketing: 0,
        execution: 0,
        growth: 0,
        sustainability: 0
      }
    }
  },
  
  impact: {
    founder: {
      skills: {
        networking: 3,
        fundraising: 2,
        leadership: 0,
        technical: 0,
        marketing: 0,
        execution: 0,
        growth: 0,
        sustainability: 0
      },
      wellBeing: {
        energy: -10,
        stress: 8,
        health: 0
      }
    }
  },
  
  choices: [
    {
      id: 'strategic_networking',
      text: 'Focus on connecting with specific investors who match your startup\'s stage and sector',
      successChance: 80,
      impact: {
        founder: {
          skills: {
            networking: 8,
            fundraising: 10,
            leadership: 3,
            technical: 0,
            marketing: 0,
            execution: 0,
            growth: 2,
            sustainability: 0
          },
          wellBeing: {
            energy: -15,
            stress: 12,
            health: 0
          }
        },
        relationships: {
          investors: 20,
          community: 5
        },
        startup: {
          finances: {
            valuation: 500000,
            cash: 0,
            burnRate: 0,
            revenue: 0
          }
        }
      }
    },
    {
      id: 'broad_networking',
      text: 'Network broadly and build relationships across the investor community',
      impact: {
        founder: {
          skills: {
            networking: 10,
            fundraising: 5,
            leadership: 2,
            technical: 0,
            marketing: 2,
            execution: 0,
            growth: 3,
            sustainability: 0
          },
          wellBeing: {
            energy: -20,
            stress: 10,
            health: 0
          }
        },
        relationships: {
          investors: 15,
          community: 15
        }
      }
    }
  ]
};

export const industryConference: GameEvent = {
  id: 'industry_conference_001',
  category: 'networking',
  title: 'Industry Leadership Conference',
  description: 'Your startup\'s growth has earned you a speaking slot at a major industry conference. This is a chance to establish yourself as a thought leader.',
  
  conditions: {
    requiredPhase: GamePhase.SCALING,
    minimumStats: {
      'founder.skills': {
        leadership: 40,
        networking: 35,
        marketing: 30,
        technical: 0,
        fundraising: 0,
        execution: 0,
        growth: 0,
        sustainability: 0
      },
      'startup.market': {
        brandReputation: 50,
        userTraction: 40
      }
    }
  },
  
  impact: {
    startup: {
      market: {
        brandReputation: 5,
        socialPresence: 5,
        userTraction: 0,
        marketFit: 0,
        userGrowth: 0
      }
    }
  },
  
  choices: [
    {
      id: 'vision_talk',
      text: 'Give an inspiring talk about your vision for the industry\'s future',
      successChance: 75,
      impact: {
        founder: {
          skills: {
            leadership: 15,
            networking: 10,
            marketing: 8,
            technical: 0,
            fundraising: 5,
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
        startup: {
          market: {
            brandReputation: 25,
            socialPresence: 20,
            userTraction: 10,
            marketFit: 5,
            userGrowth: 15
          }
        },
        relationships: {
          community: 20,
          investors: 15,
          customers: 10
        }
      }
    },
    {
      id: 'technical_deep_dive',
      text: 'Present a technical deep-dive showcasing your innovative solutions',
      impact: {
        founder: {
          skills: {
            technical: 10,
            leadership: 8,
            networking: 5,
            marketing: 5,
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
        startup: {
          market: {
            brandReputation: 15,
            socialPresence: 10,
            userTraction: 15,
            marketFit: 10,
            userGrowth: 10
          },
          product: {
            quality: 10,
            innovation: 15,
            development: 5,
            marketFit: 5,
            mvpProgress: 0
          }
        },
        relationships: {
          community: 25,
          customers: 15,
          investors: 10
        }
      }
    }
  ]
};

export const partnershipSummit: GameEvent = {
  id: 'partnership_summit_001',
  category: 'networking',
  title: 'Strategic Partnership Summit',
  description: 'Your startup is hosting a summit to bring together potential strategic partners and enterprise clients.',
  
  conditions: {
    requiredPhase: GamePhase.SCALING,
    minimumStats: {
      'founder.skills': {
        networking: 45,
        leadership: 40,
        execution: 35,
        technical: 0,
        fundraising: 0,
        marketing: 0,
        growth: 0,
        sustainability: 0
      }
    }
  },
  
  impact: {
    relationships: {
      customers: 5,
      community: 5
    }
  },
  
  choices: [
    {
      id: 'enterprise_focus',
      text: 'Focus on enterprise partnerships and integration opportunities',
      successChance: 70,
      impact: {
        founder: {
          skills: {
            networking: 15,
            leadership: 10,
            execution: 12,
            technical: 5,
            fundraising: 0,
            marketing: 5,
            growth: 8,
            sustainability: 5
          },
          wellBeing: {
            energy: -25,
            stress: 20,
            health: 0
          }
        },
        startup: {
          finances: {
            revenue: 100000,
            cash: 50000,
            burnRate: 10000,
            valuation: 2000000
          },
          market: {
            brandReputation: 20,
            userTraction: 25,
            socialPresence: 15,
            marketFit: 15,
            userGrowth: 20
          }
        },
        relationships: {
          customers: 25,
          investors: 15,
          community: 10
        }
      }
    },
    {
      id: 'ecosystem_building',
      text: 'Build a broader ecosystem of partners and integrations',
      impact: {
        founder: {
          skills: {
            networking: 20,
            leadership: 8,
            execution: 8,
            technical: 0,
            fundraising: 0,
            marketing: 8,
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
          finances: {
            revenue: 50000,
            cash: 25000,
            burnRate: 5000,
            valuation: 1000000
          },
          market: {
            brandReputation: 15,
            userTraction: 20,
            socialPresence: 25,
            marketFit: 20,
            userGrowth: 15
          }
        },
        relationships: {
          customers: 15,
          community: 25,
          investors: 10
        }
      }
    }
  ]
}; 