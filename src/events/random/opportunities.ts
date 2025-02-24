import { GameEvent, GamePhase } from '../../types/stats';

export const viralTweet: GameEvent = {
  id: "viral_tweet_001",
  category: "random",
  title: "Viral Tweet Opportunity",
  description: "One of your tweets about startup life is gaining traction. This could be a chance to build your personal brand.",
  conditions: {
    minimumStats: {
      founder: {
        reputation: 20
      },
      company: {
        productQuality: 40
      }
    }
  },
  impact: {
    founder: {
      reputation: 5
    },
    company: {
      userGrowth: 10
    }
  },
  choices: [
    {
      id: "share_insights",
      text: "Share authentic insights about your founder journey and startup challenges.",
      successChance: 80,
      impact: {
        founder: {
          reputation: 15,
          business: 5
        },
        company: {
          userGrowth: 20,
          marketFit: 5
        }
      }
    },
    {
      id: "leverage_promotion",
      text: "Use the momentum to promote your startup directly.",
      impact: {
        founder: {
          reputation: 10
        },
        company: {
          userGrowth: 30,
          marketFit: 3
        }
      }
    }
  ]
};

export const serendipitousConnection: GameEvent = {
  id: "serendipitous_connection_001",
  category: "random",
  title: "Unexpected Connection",
  description: "You randomly meet a successful entrepreneur at a local coffee shop who shows interest in your startup.",
  conditions: {
    minimumStats: {
      founder: {
        business: 20
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
      id: "seek_mentorship",
      text: "Ask for mentorship and advice about your startup journey.",
      successChance: 70,
      impact: {
        founder: {
          business: 10,
          leadership: 5,
          reputation: 10
        },
        company: {
          marketFit: 5
        }
      }
    },
    {
      id: "pitch_opportunity",
      text: "Take the chance to pitch your startup and seek investment.",
      successChance: 40,
      impact: {
        founder: {
          business: 5,
          reputation: 15
        },
        company: {
          valuation: 100000,
          runway: 3
        }
      }
    }
  ]
};

export const talentedCandidate: GameEvent = {
  id: "talented_candidate_001",
  category: "random",
  title: "Unexpected Talent",
  description: "A highly talented engineer from a top tech company reaches out, interested in joining your startup.",
  conditions: {
    minimumStats: {
      founder: {
        leadership: 30
      },
      company: {
        runway: 6,
        teamSize: 2
      }
    }
  },
  impact: {
    company: {
      teamSize: 1
    }
  },
  choices: [
    {
      id: "fast_track",
      text: "Fast-track the hiring process with competitive offer",
      successChance: 70,
      impact: {
        founder: {
          leadership: 5,
          cash: -50000
        },
        company: {
          teamSize: 1,
          talent: 15,
          runway: -2
        }
      }
    },
    {
      id: "careful_evaluation",
      text: "Take time to evaluate fit and negotiate terms",
      impact: {
        founder: {
          leadership: 8,
          cash: -30000
        },
        company: {
          teamSize: 1,
          talent: 10,
          teamMorale: 5,
          runway: -1
        }
      }
    }
  ]
};

export const competitorAcquisition: GameEvent = {
  id: "competitor_acquisition_001",
  category: "random",
  title: "Competitor Acquired",
  description: "A major competitor just got acquired by a tech giant. The market is buzzing with speculation about industry consolidation.",
  conditions: {
    minimumStats: {
      company: {
        marketFit: 50,
        productQuality: 60
      }
    }
  },
  impact: {
    company: {
      marketFit: -5
    }
  },
  choices: [
    {
      id: "aggressive_expansion",
      text: "Seize the moment to capture their customers and market share",
      successChance: 65,
      impact: {
        founder: {
          cash: -20000,
          business: 10
        },
        company: {
          userGrowth: 30,
          marketFit: 15,
          revenue: 50000
        }
      }
    },
    {
      id: "strategic_positioning",
      text: "Focus on differentiation and emphasize independence",
      impact: {
        founder: {
          business: 5,
          reputation: 10
        },
        company: {
          marketFit: 10,
          productQuality: 5
        }
      }
    }
  ]
};

export const techCrisis: GameEvent = {
  id: "tech_crisis_001",
  category: "random",
  title: "Infrastructure Emergency",
  description: "A critical infrastructure provider is experiencing major outages affecting your service.",
  conditions: {
    minimumStats: {
      founder: {
        technical: 40
      },
      company: {
        productQuality: 50
      }
    }
  },
  impact: {
    company: {
      productQuality: -10,
      userGrowth: -5
    }
  },
  choices: [
    {
      id: "quick_fix",
      text: "Implement immediate workaround to maintain service",
      successChance: 60,
      impact: {
        founder: {
          technical: 5,
          energy: -20
        },
        company: {
          productQuality: 5,
          userGrowth: 5
        }
      }
    },
    {
      id: "strategic_solution",
      text: "Develop robust backup systems and infrastructure redundancy",
      impact: {
        founder: {
          technical: 10,
          cash: -30000
        },
        company: {
          productQuality: 15,
          runway: -2
        }
      }
    }
  ]
};

export const marketOpportunity: GameEvent = {
  id: "market_opportunity_001",
  category: "random",
  title: "Market Shift",
  description: "A sudden shift in the market creates an unexpected opportunity for your product.",
  conditions: {
    minimumStats: {
      founder: {
        business: 30
      },
      company: {
        productQuality: 50
      }
    }
  },
  impact: {
    company: {
      marketFit: 5
    }
  },
  choices: [
    {
      id: "rapid_pivot",
      text: "Quickly pivot to capitalize on the new opportunity",
      successChance: 70,
      impact: {
        founder: {
          business: 10,
          cash: -20000
        },
        company: {
          marketFit: 20,
          userGrowth: 25,
          revenue: 30000
        }
      }
    },
    {
      id: "measured_approach",
      text: "Carefully evaluate and gradually adapt the product",
      impact: {
        founder: {
          business: 5
        },
        company: {
          marketFit: 10,
          productQuality: 5,
          userGrowth: 10
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