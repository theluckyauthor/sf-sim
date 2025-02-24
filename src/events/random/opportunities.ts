import { GameEvent, GamePhase } from '../../types/stats';
import { RandomEvent } from '../../types/stats';

export const viralTweet: GameEvent = {
  id: 'viral_tweet_001',
  category: 'random',
  title: 'Viral Tweet Opportunity',
  description: 'One of your tweets about startup life is gaining traction. This could be a chance to build your personal brand.',
  
  conditions: {
    minimumStats: {
      'founder.skills': {
        marketing: 10,
        networking: 0,
        technical: 0,
        leadership: 0,
        fundraising: 0,
        execution: 0,
        growth: 0,
        sustainability: 0
      }
    }
  },
  
  impact: {
    founder: {
      reputation: {
        personal: 5,
        network: 3
      }
    }
  },
  
  choices: [
    {
      id: 'share_insights',
      text: 'Share authentic insights about your founder journey and startup challenges.',
      successChance: 80,
      impact: {
        founder: {
          reputation: {
            personal: 15,
            network: 10
          },
          skills: {
            marketing: 5,
            networking: 3,
            technical: 0,
            leadership: 2,
            fundraising: 0,
            execution: 0,
            growth: 0,
            sustainability: 0
          }
        },
        startup: {
          market: {
            brandReputation: 10,
            socialPresence: 15,
            userTraction: 5,
            marketFit: 0,
            userGrowth: 3
          }
        },
        relationships: {
          community: 10,
          investors: 5,
          employees: 0,
          customers: 5
        }
      }
    },
    {
      id: 'leverage_promotion',
      text: 'Use the momentum to promote your startup directly.',
      impact: {
        founder: {
          reputation: {
            personal: 5,
            network: 5
          },
          skills: {
            marketing: 3,
            networking: 0,
            technical: 0,
            leadership: 0,
            fundraising: 0,
            execution: 0,
            growth: 0,
            sustainability: 0
          }
        },
        startup: {
          market: {
            brandReputation: 5,
            socialPresence: 10,
            userTraction: 8,
            marketFit: 0,
            userGrowth: 5
          }
        },
        relationships: {
          community: -5,
          investors: 0,
          employees: 0,
          customers: 8
        }
      }
    }
  ]
};

export const serendipitousConnection: GameEvent = {
  id: 'serendipitous_connection_001',
  category: 'random',
  title: 'Unexpected Connection',
  description: 'You randomly meet a successful entrepreneur at a local coffee shop who shows interest in your startup.',
  
  conditions: {},
  
  impact: {
    relationships: {
      community: 5,
      investors: 0,
      employees: 0,
      customers: 0
    }
  },
  
  choices: [
    {
      id: 'seek_mentorship',
      text: 'Ask for mentorship and advice about your startup journey.',
      successChance: 70,
      impact: {
        founder: {
          skills: {
            networking: 8,
            leadership: 5,
            technical: 0,
            fundraising: 3,
            marketing: 0,
            execution: 3,
            growth: 3,
            sustainability: 0
          },
          wellBeing: {
            energy: 10,
            stress: -5,
            health: 0
          }
        },
        relationships: {
          community: 15,
          investors: 10,
          employees: 0,
          customers: 0
        },
        triggerMilestone: 'mentor_found_001'
      }
    },
    {
      id: 'pitch_opportunity',
      text: 'Take the chance to pitch your startup and seek investment.',
      successChance: 40,
      impact: {
        founder: {
          skills: {
            fundraising: 5,
            networking: 3,
            technical: 0,
            leadership: 0,
            marketing: 0,
            execution: 0,
            growth: 0,
            sustainability: 0
          },
          wellBeing: {
            energy: -5,
            stress: 10,
            health: 0
          }
        },
        relationships: {
          community: 5,
          investors: 5,
          employees: 0,
          customers: 0
        }
      }
    }
  ]
};

export const talentedCandidate: GameEvent = {
  id: 'talented_candidate_001',
  category: 'random',
  title: 'Unexpected Talent',
  description: 'A highly talented engineer from a top tech company reaches out, interested in joining your startup.',
  
  conditions: {
    minimumStats: {
      'founder.skills': {
        leadership: 15,
        technical: 10,
        networking: 0,
        fundraising: 0,
        marketing: 0,
        execution: 0,
        growth: 0,
        sustainability: 0
      }
    }
  },
  
  impact: {
    founder: {
      wellBeing: {
        energy: 5,
        stress: 5,
        health: 0
      }
    }
  },
  
  choices: [
    {
      id: 'fast_track',
      text: 'Fast-track the hiring process with competitive offer',
      successChance: 70,
      impact: {
        founder: {
          skills: {
            leadership: 10,
            technical: 5,
            execution: 8,
            networking: 5,
            fundraising: 0,
            marketing: 0,
            growth: 5,
            sustainability: 3
          },
          wellBeing: {
            energy: -10,
            stress: 15,
            health: -5
          }
        },
        startup: {
          team: {
            size: 1,
            morale: 10,
            productivity: 20,
            culture: 8
          },
          finances: {
            cash: -50000,
            burnRate: 10000,
            revenue: 0,
            valuation: 200000
          }
        },
        relationships: {
          employees: 15,
          investors: 10,
          community: 5,
          customers: 0
        },
        triggerMilestone: 'key_hire_001'
      }
    },
    {
      id: 'careful_evaluation',
      text: 'Take time to evaluate fit and negotiate terms',
      impact: {
        founder: {
          skills: {
            leadership: 5,
            technical: 3,
            execution: 5,
            networking: 3,
            fundraising: 0,
            marketing: 0,
            growth: 3,
            sustainability: 8
          },
          wellBeing: {
            energy: -5,
            stress: 8,
            health: -3
          }
        },
        startup: {
          team: {
            size: 0,
            morale: 5,
            productivity: 5,
            culture: 10
          }
        },
        relationships: {
          employees: 10,
          investors: 5,
          community: 8,
          customers: 0
        }
      }
    }
  ]
};

export const competitorAcquisition: GameEvent = {
  id: 'competitor_acquisition_001',
  category: 'random',
  title: 'Competitor Acquired',
  description: 'A major competitor just got acquired by a tech giant. The market is buzzing with speculation about industry consolidation.',
  
  conditions: {
    minimumStats: {
      'startup.market': {
        userTraction: 20,
        marketFit: 15
      }
    }
  },
  
  impact: {
    startup: {
      market: {
        brandReputation: 5,
        socialPresence: 8,
        userTraction: -5,
        marketFit: 0,
        userGrowth: -3
      }
    }
  },
  
  choices: [
    {
      id: 'aggressive_expansion',
      text: 'Seize the moment to capture their customers and market share',
      successChance: 65,
      impact: {
        founder: {
          skills: {
            marketing: 15,
            execution: 12,
            growth: 10,
            leadership: 8,
            technical: 5,
            networking: 5,
            fundraising: 8,
            sustainability: -5
          },
          wellBeing: {
            energy: -20,
            stress: 25,
            health: -8
          }
        },
        startup: {
          market: {
            userTraction: 25,
            brandReputation: 15,
            socialPresence: 20,
            marketFit: 10,
            userGrowth: 15
          },
          finances: {
            cash: -30000,
            burnRate: 15000,
            revenue: 25000,
            valuation: 1000000
          }
        },
        relationships: {
          customers: 20,
          investors: 15,
          community: 10,
          employees: -5
        }
      }
    },
    {
      id: 'strategic_positioning',
      text: 'Focus on differentiation and emphasize independence',
      impact: {
        founder: {
          skills: {
            marketing: 10,
            execution: 8,
            growth: 5,
            leadership: 10,
            technical: 3,
            networking: 8,
            fundraising: 5,
            sustainability: 10
          },
          wellBeing: {
            energy: -10,
            stress: 15,
            health: -5
          }
        },
        startup: {
          market: {
            userTraction: 15,
            brandReputation: 20,
            socialPresence: 15,
            marketFit: 15,
            userGrowth: 10
          },
          finances: {
            cash: -15000,
            burnRate: 8000,
            revenue: 15000,
            valuation: 500000
          }
        },
        relationships: {
          customers: 15,
          investors: 10,
          community: 15,
          employees: 10
        }
      }
    }
  ]
};

export const techCrisis: GameEvent = {
  id: 'tech_crisis_001',
  category: 'random',
  title: 'Infrastructure Emergency',
  description: 'A critical infrastructure provider is experiencing major outages affecting your service.',
  
  conditions: {
    minimumStats: {
      'founder.skills': {
        technical: 20,
        execution: 15
      }
    }
  },
  
  impact: {
    startup: {
      market: {
        userTraction: -10,
        brandReputation: -5,
        socialPresence: 5,
        marketFit: 0,
        userGrowth: -5
      }
    }
  },
  
  choices: [
    {
      id: 'quick_fix',
      text: 'Implement immediate workaround to maintain service',
      successChance: 60,
      impact: {
        founder: {
          skills: {
            technical: 15,
            execution: 12,
            leadership: 8,
            networking: 0,
            fundraising: 0,
            marketing: 5,
            growth: 5,
            sustainability: -5
          },
          wellBeing: {
            energy: -25,
            stress: 30,
            health: -10
          }
        },
        startup: {
          product: {
            development: 10,
            quality: -5,
            innovation: 5,
            marketFit: -5,
            mvpProgress: 0
          },
          team: {
            morale: -10,
            productivity: -15,
            culture: -5,
            size: 0
          }
        },
        relationships: {
          customers: 15,
          investors: -5,
          community: 10,
          employees: -10
        }
      }
    },
    {
      id: 'strategic_solution',
      text: 'Develop robust backup systems and infrastructure redundancy',
      impact: {
        founder: {
          skills: {
            technical: 20,
            execution: 15,
            leadership: 10,
            networking: 5,
            fundraising: 0,
            marketing: 0,
            growth: 8,
            sustainability: 15
          },
          wellBeing: {
            energy: -20,
            stress: 20,
            health: -8
          }
        },
        startup: {
          product: {
            development: 20,
            quality: 15,
            innovation: 10,
            marketFit: 5,
            mvpProgress: 5
          },
          team: {
            morale: 5,
            productivity: -5,
            culture: 10,
            size: 0
          },
          finances: {
            cash: -50000,
            burnRate: 10000,
            revenue: -10000,
            valuation: 0
          }
        },
        relationships: {
          customers: 10,
          investors: 15,
          community: 5,
          employees: 15
        }
      }
    }
  ]
};

export const marketOpportunity: GameEvent = {
  id: 'market_opportunity_001',
  category: 'random',
  title: 'Market Shift',
  description: 'A sudden shift in the market creates an unexpected opportunity for your product.',
  
  conditions: {
    minimumStats: {
      'startup.market': {
        marketFit: 25,
        userTraction: 20
      }
    }
  },
  
  impact: {
    startup: {
      market: {
        userTraction: 10,
        brandReputation: 5,
        socialPresence: 5,
        marketFit: 8,
        userGrowth: 5
      }
    }
  },
  
  choices: [
    {
      id: 'rapid_pivot',
      text: 'Quickly pivot to capitalize on the new opportunity',
      successChance: 70,
      impact: {
        founder: {
          skills: {
            marketing: 15,
            execution: 12,
            growth: 15,
            leadership: 10,
            technical: 8,
            networking: 5,
            fundraising: 10,
            sustainability: -5
          },
          wellBeing: {
            energy: -20,
            stress: 25,
            health: -8
          }
        },
        startup: {
          market: {
            userTraction: 25,
            marketFit: 20,
            brandReputation: 15,
            socialPresence: 20,
            userGrowth: 25
          },
          product: {
            development: 15,
            quality: 10,
            innovation: 0,
            marketFit: 0,
            mvpProgress: 0
          },
          finances: {
            cash: -5000,
            burnRate: 1200,
            revenue: 0,
            valuation: 0
          }
        },
        relationships: {
          customers: 20,
          investors: 25,
          community: 15,
          employees: -10
        }
      }
    },
    {
      id: 'measured_approach',
      text: 'Carefully evaluate and gradually adapt the product',
      impact: {
        founder: {
          skills: {
            marketing: 10,
            execution: 15,
            growth: 8,
            leadership: 12,
            technical: 10,
            networking: 8,
            fundraising: 5,
            sustainability: 10
          },
          wellBeing: {
            energy: -15,
            stress: 15,
            health: -5
          }
        },
        startup: {
          market: {
            userTraction: 15,
            marketFit: 25,
            brandReputation: 20,
            socialPresence: 15,
            userGrowth: 15
          },
          product: {
            development: 20,
            quality: 15,
            innovation: 15,
            marketFit: 20,
            mvpProgress: 10
          },
          finances: {
            cash: -25000,
            burnRate: 12000,
            revenue: 30000,
            valuation: 1000000
          }
        },
        relationships: {
          customers: 25,
          investors: 15,
          community: 20,
          employees: 10
        }
      }
    }
  ]
};

export const viralTikTok: RandomEvent = {
  id: 'viral_tiktok_001',
  category: 'random',
  title: 'Unexpected TikTok Fame',
  description: 'Your product demo unexpectedly goes viral on TikTok, bringing massive attention!',
  probability: 0.05, // 5% chance
  
  conditions: {
    minimumStats: {
      'startup.product': {
        quality: 70,
        development: 0,
        innovation: 0,
        marketFit: 0,
        mvpProgress: 0
      }
    }
  },
  
  impact: {},
  
  choices: [
    {
      id: 'capitalize',
      text: 'Capitalize on the momentum - Launch a social media campaign',
      successChance: 75,
      impact: {
        startup: {
          market: {
            userGrowth: 30,
            brandReputation: 5,
            socialPresence: 0,
            marketFit: 0,
            userTraction: 0
          },
          finances: {
            revenue: 40000,
            burnRate: 5000,
            cash: -10000,
            valuation: 1000000
          }
        },
        founder: {
          skills: {
            marketing: 10,
            growth: 15,
            technical: 0,
            leadership: 0,
            networking: 0,
            fundraising: 0,
            execution: 0,
            sustainability: 0
          },
          wellBeing: {
            stress: 20,
            energy: -15,
            health: -5
          }
        }
      }
    },
    {
      id: 'cautious',
      text: 'Take a cautious approach - Focus on infrastructure scaling',
      impact: {
        startup: {
          product: {
            development: 15,
            quality: 10,
            innovation: 0,
            marketFit: 0,
            mvpProgress: 0
          },
          finances: {
            cash: -5000,
            burnRate: 1200,
            revenue: 0,
            valuation: 0
          }
        },
        founder: {
          skills: {
            technical: 10,
            execution: 10,
            leadership: 0,
            networking: 0,
            fundraising: 0,
            marketing: 0,
            growth: 0,
            sustainability: 0
          }
        }
      }
    }
  ]
};

export const acquiHire: GameEvent = {
  id: 'acquihire_opportunity_001',
  category: 'random',
  title: 'Acquihire Opportunity',
  description: 'A major tech company is interested in acquiring your company primarily for the team.',
  
  conditions: {
    requiredPhase: GamePhase.BOOTSTRAPPING,
    minimumStats: {
      'startup.team': {
        size: 5,
        morale: 85,
        productivity: 80,
        culture: 85
      }
    }
  },
  
  impact: {},
  
  choices: [
    {
      id: 'accept_offer',
      text: 'Accept the acquihire offer',
      impact: {
        startup: {
          team: {
            size: -5,
            morale: 0,
            productivity: 0,
            culture: 0
          },
          finances: {
            cash: 10000000,
            burnRate: 0,
            revenue: 0,
            valuation: 0
          }
        },
        relationships: {
          employees: 20,
          investors: 15,
          community: 10,
          customers: 0
        }
      }
    },
    {
      id: 'reject_offer',
      text: 'Reject and continue building',
      impact: {
        founder: {
          skills: {
            leadership: 10,
            technical: 0,
            networking: 0,
            fundraising: 0,
            marketing: 0,
            execution: 0,
            growth: 0,
            sustainability: 0
          }
        },
        startup: {
          team: {
            size: 0,
            morale: 10,
            productivity: 0,
            culture: 15
          },
          finances: {
            cash: 0,
            burnRate: 0,
            revenue: 0,
            valuation: 1000000
          }
        }
      }
    }
  ]
};

export const marketingMagic: GameEvent = {
  id: 'marketing_magic_001',
  category: 'random',
  title: 'Unexpected Marketing Success',
  description: 'Your latest marketing campaign resonates unexpectedly well with a new market segment.',
  
  conditions: {
    minimumStats: {
      'startup.market': {
        marketFit: 25,
        userTraction: 20,
        brandReputation: 0,
        socialPresence: 0,
        userGrowth: 0
      }
    }
  },
  
  impact: {},
  
  choices: [
    {
      id: 'double_down',
      text: 'Double down on the new market segment',
      successChance: 70,
      impact: {
        startup: {
          finances: {
            cash: 50000,
            revenue: 30000,
            burnRate: 5000,
            valuation: 1000000
          },
          market: {
            userTraction: 20,
            brandReputation: 0,
            socialPresence: 0,
            marketFit: 0,
            userGrowth: 0
          }
        },
        founder: {
          skills: {
            marketing: 15,
            growth: 10,
            technical: 0,
            leadership: 0,
            networking: 0,
            fundraising: 0,
            execution: 0,
            sustainability: 0
          }
        }
      }
    },
    {
      id: 'balanced_approach',
      text: 'Maintain a balanced approach between markets',
      impact: {
        startup: {
          finances: {
            cash: 25000,
            revenue: 15000,
            burnRate: 2000,
            valuation: 500000
          },
          market: {
            userTraction: 10,
            brandReputation: 5,
            socialPresence: 0,
            marketFit: 0,
            userGrowth: 0
          }
        }
      }
    }
  ]
}; 