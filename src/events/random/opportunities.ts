import { GameEvent, GamePhase } from '../../types/stats';

export const viralTweet: GameEvent = {
  id: "viral_tweet_001",
  category: "random",
  title: "Unexpected Viral Tweet",
  description: "One of your casual tweets about your startup experience has unexpectedly gone viral, bringing sudden attention to your company.",
  conditions: {
    minimumStats: {
      founder: {
        reputation: 30
      }
    }
  },
  impact: {
    founder: {},
    company: {}
  },
  choices: [
    {
      id: "leverage_attention",
      text: "Leverage the attention to promote your product",
      impact: {
        founder: {
          energy: -15,
          reputation: 20
        },
        company: {
          userGrowth: 25,
          marketFit: 10
        }
      }
    },
    {
      id: "thoughtful_thread",
      text: "Create a thoughtful follow-up thread about your startup journey",
      impact: {
        founder: {
          energy: -20,
          reputation: 15,
          leadership: 10
        },
        company: {
          userGrowth: 15,
          marketFit: 5,
          valuation: 50000
        }
      }
    },
    {
      id: "ignore_focus",
      text: "Acknowledge but don't get distracted from your core work",
      impact: {
        founder: {
          energy: 5,
          technical: 5
        },
        company: {
          productQuality: 10,
          userGrowth: 5
        }
      }
    }
  ]
};

export const serendipitousConnection: GameEvent = {
  id: "serendipitous_connection_001",
  category: "random",
  title: "Serendipitous Connection",
  description: "While grabbing coffee, you strike up a conversation with someone who turns out to be well-connected in your industry.",
  conditions: {
    minimumStats: {
      location: {
        networkingScore: 20
      }
    }
  },
  impact: {
    founder: {},
    company: {}
  },
  choices: [
    {
      id: "pitch_opportunity",
      text: "Pitch your startup and ask for introductions to potential investors",
      impact: {
        founder: {
          energy: -10,
          reputation: 15,
          business: 5
        },
        company: {
          valuation: 100000,
          runway: 1
        }
      }
    },
    {
      id: "industry_insights",
      text: "Focus on learning from their industry insights and experience",
      impact: {
        founder: {
          energy: -5,
          business: 15,
          leadership: 5
        },
        company: {
          marketFit: 15,
          productQuality: 10
        }
      }
    },
    {
      id: "casual_relationship",
      text: "Keep the relationship casual and see where it leads naturally",
      impact: {
        founder: {
          energy: 5,
          reputation: 5
        },
        company: {
          marketFit: 5,
          teamMorale: 5
        },
        location: {
          networkingScore: 10
        }
      }
    }
  ]
};

export const talentedCandidate: GameEvent = {
  id: "talented_candidate_001",
  category: "random",
  title: "Talented Candidate Opportunity",
  description: "A highly talented engineer from a top tech company has expressed interest in joining your startup, but they're also considering other offers.",
  conditions: {
    minimumStats: {
      company: {
        productQuality: 40,
        teamSize: 2
      }
    }
  },
  impact: {
    founder: {},
    company: {}
  },
  choices: [
    {
      id: "competitive_offer",
      text: "Make a competitive offer with significant equity",
      impact: {
        founder: {
          cash: -10000,
          leadership: 10
        },
        company: {
          productQuality: 20,
          talent: 25,
          runway: -2,
          teamSize: 1
        }
      }
    },
    {
      id: "vision_culture",
      text: "Emphasize your vision and company culture over compensation",
      impact: {
        founder: {
          energy: -15,
          leadership: 15,
          cash: -5000
        },
        company: {
          productQuality: 15,
          talent: 15,
          teamMorale: 10,
          runway: -1,
          teamSize: 1
        }
      }
    },
    {
      id: "pass_opportunity",
      text: "Pass on the opportunity to preserve runway",
      impact: {
        founder: {
          energy: 5,
          reputation: -5
        },
        company: {
          runway: 1,
          teamMorale: -5
        }
      }
    }
  ]
};

export const techCrisis: GameEvent = {
  id: "tech_crisis_001",
  category: "random",
  title: "Technical Crisis",
  description: "A critical bug has been discovered in your production system, causing data issues for some users.",
  conditions: {
    minimumStats: {
      company: {
        productQuality: 30,
        userGrowth: 20
      }
    }
  },
  impact: {
    founder: {},
    company: {}
  },
  choices: [
    {
      id: "all_hands_emergency",
      text: "Call an all-hands emergency and fix it immediately",
      impact: {
        founder: {
          energy: -30,
          health: -15,
          technical: 15
        },
        company: {
          productQuality: 15,
          teamMorale: -10,
          userGrowth: -5
        }
      }
    },
    {
      id: "transparent_communication",
      text: "Communicate transparently with users while working on a fix",
      impact: {
        founder: {
          energy: -20,
          reputation: 10,
          leadership: 10
        },
        company: {
          productQuality: 10,
          teamMorale: 5,
          userGrowth: -10
        }
      }
    },
    {
      id: "quiet_fix",
      text: "Fix the issue quietly without drawing attention to it",
      impact: {
        founder: {
          energy: -15,
          reputation: -10
        },
        company: {
          productQuality: 5,
          userGrowth: -5
        }
      }
    }
  ]
};

export const marketOpportunity: GameEvent = {
  id: "market_opportunity_001",
  category: "random",
  title: "Unexpected Market Opportunity",
  description: "A major player in your industry has unexpectedly shut down, leaving their customers looking for alternatives.",
  conditions: {
    minimumStats: {
      company: {
        productQuality: 50,
        marketFit: 40
      }
    }
  },
  impact: {
    founder: {},
    company: {}
  },
  choices: [
    {
      id: "aggressive_acquisition",
      text: "Aggressively target their customers with special offers",
      impact: {
        founder: {
          energy: -25,
          cash: -5000,
          business: 15
        },
        company: {
          userGrowth: 40,
          revenue: 10000,
          runway: -1
        }
      }
    },
    {
      id: "feature_parity",
      text: "Quickly develop feature parity to accommodate their users",
      impact: {
        founder: {
          energy: -30,
          technical: 15,
          health: -10
        },
        company: {
          productQuality: 20,
          userGrowth: 25,
          teamMorale: -10
        }
      }
    },
    {
      id: "strategic_growth",
      text: "Take a measured approach to sustainable growth",
      impact: {
        founder: {
          energy: -15,
          leadership: 10,
          business: 5
        },
        company: {
          userGrowth: 15,
          marketFit: 15,
          teamMorale: 10
        }
      }
    }
  ]
};

export const competitorAcquisition: GameEvent = {
  id: "competitor_acquisition_001",
  category: "random",
  title: "Competitor Acquisition",
  description: "One of your main competitors has just been acquired by a tech giant for a substantial sum.",
  conditions: {
    minimumStats: {
      company: {
        valuation: 500000
      }
    }
  },
  impact: {
    founder: {},
    company: {}
  },
  choices: [
    {
      id: "position_acquisition",
      text: "Position your company as an acquisition target",
      impact: {
        founder: {
          energy: -20,
          business: 15,
          reputation: 10
        },
        company: {
          valuation: 1000000,
          teamMorale: -10,
          productQuality: -5
        }
      }
    },
    {
      id: "double_down_independence",
      text: "Double down on your independent vision and differentiation",
      impact: {
        founder: {
          energy: -15,
          leadership: 20,
          reputation: 15
        },
        company: {
          productQuality: 15,
          marketFit: 10,
          teamMorale: 15
        }
      }
    },
    {
      id: "pivot_strategy",
      text: "Pivot your strategy to avoid direct competition with the acquirer",
      impact: {
        founder: {
          energy: -25,
          business: 10,
          technical: 10
        },
        company: {
          productQuality: 10,
          marketFit: 15,
          userGrowth: 5
        }
      }
    }
  ]
};

export const viralTikTok: GameEvent = {
  id: 'viral_tiktok_001',
  category: 'random',
  title: 'Unexpected TikTok Fame',
  description: 'Your product demo unexpectedly goes viral on TikTok, bringing massive attention!',
  conditions: {
    minimumStats: {
      company: {
        productQuality: 70
      }
    }
  },
  impact: {
    company: {
      userGrowth: 10
    }
  },
  choices: [
    {
      id: 'capitalize',
      text: 'Capitalize on the momentum - Launch a social media campaign',
      successChance: 75,
      impact: {
        founder: {
          energy: -15,
          business: 10,
          cash: -10000
        },
        company: {
          userGrowth: 30,
          revenue: 40000,
          valuation: 1000000
        }
      }
    },
    {
      id: 'cautious',
      text: 'Take a cautious approach - Focus on infrastructure scaling',
      impact: {
        founder: {
          technical: 10,
          cash: -5000
        },
        company: {
          productQuality: 10,
          userGrowth: 10
        }
      }
    }
  ]
};

export const acquiHire: GameEvent = {
  id: "acquihire_opportunity_001",
  category: "random",
  title: "Acquihire Opportunity",
  description: "A major tech company is interested in acquiring your company primarily for the team.",
  conditions: {
    requiredPhase: GamePhase.BOOTSTRAPPING,
    minimumStats: {
      company: {
        talent: 70,
        teamSize: 5
      }
    }
  },
  impact: {
    founder: {
      reputation: 5
    }
  },
  choices: [
    {
      id: "accept_offer",
      text: "Accept the acquihire offer",
      impact: {
        founder: {
          cash: 500000,
          reputation: 20
        },
        company: {
          valuation: 2000000,
          teamSize: 0
        }
      }
    },
    {
      id: "reject_offer",
      text: "Reject and continue building",
      impact: {
        founder: {
          reputation: 10
        },
        company: {
          teamMorale: 10,
          valuation: 500000
        }
      }
    }
  ]
};

export const marketingMagic: GameEvent = {
  id: "marketing_magic_001",
  category: "random",
  title: "Unexpected Marketing Success",
  description: "Your latest marketing campaign resonates unexpectedly well with a new market segment.",
  conditions: {
    minimumStats: {
      founder: {
        business: 40
      },
      company: {
        productQuality: 60
      }
    }
  },
  impact: {
    company: {
      userGrowth: 10,
      revenue: 10000
    }
  },
  choices: [
    {
      id: "double_down",
      text: "Double down on the new market segment",
      successChance: 70,
      impact: {
        founder: {
          business: 10,
          cash: -30000
        },
        company: {
          userGrowth: 30,
          revenue: 50000,
          marketFit: 15
        }
      }
    },
    {
      id: "balanced_approach",
      text: "Maintain a balanced approach between markets",
      impact: {
        founder: {
          business: 5
        },
        company: {
          userGrowth: 15,
          revenue: 20000,
          marketFit: 10
        }
      }
    }
  ]
}; 