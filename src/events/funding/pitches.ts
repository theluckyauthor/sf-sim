import { GameEvent, GamePhase } from '../../types/stats';

export const initialFundingStrategy: GameEvent = {
  "id": "initial_funding_strategy_001",
  "category": "funding",
  "title": "Initial Funding Strategy",
  "description": "Time to plan your initial funding approach. How will you finance your startup in its early stages?",
  "conditions": {
    "requiredPhase": GamePhase.SETTLING_IN,
    "minimumStats": {
      "founder": {},
      "company": {}
    }
  },
  "impact": {
    "founder": {},
    "company": {}
  },
  "choices": [
    {
      "id": "bootstrap_focus",
      "text": "Focus on bootstrapping - Plan to use personal savings and early revenue",
      "impact": {
        "founder": {
          "business": 5,
          "leadership": 3
        },
        "company": {
          "runway": 1,
          "teamMorale": 5
        }
      }
    },
    {
      "id": "investor_preparation",
      "text": "Prepare for early investors - Start building pitch deck and financial projections",
      "impact": {
        "founder": {
          "business": 8,
          "energy": -5
        },
        "company": {
          "valuation": 50000
        }
      }
    }
  ]
};

export const seedPitch: GameEvent = {
  "id": "seed_pitch_001",
  "category": "funding",
  "title": "Seed Round Pitch Meeting",
  "description": "A prominent VC firm has agreed to hear your pitch. This could be your chance to secure seed funding.",
  "conditions": {
    "requiredPhase": GamePhase.FUNDRAISING,
    "minimumStats": {
      "founder": {},
      "company": {}
    }
  },
  "impact": {
    "founder": {
      "energy": -5,
      "reputation": 2
    },
    "company": {
      "valuation": 10000
    }
  },
  "choices": [
    {
      "id": "focus_traction",
      "text": "Focus your pitch on current traction and growth metrics.",
      "successChance": 80,
      "impact": {
        "founder": {
          "business": 5,
          "reputation": 8,
          "cash": 150000
        },
        "company": {
          "valuation": 200000,
          "runway": 6,
          "revenue": 10000
        }
      }
    },
    {
      "id": "focus_vision",
      "text": "Emphasize your long-term vision and market potential.",
      "successChance": 60,
      "impact": {
        "founder": {
          "leadership": 7,
          "reputation": 5,
          "cash": 200000
        },
        "company": {
          "valuation": 300000,
          "runway": 8,
          "revenue": 5000
        }
      }
    }
  ]
};

export const vcPitchPrep: GameEvent = {
  "id": "vc_pitch_prep_001",
  "category": "funding",
  "title": "Sand Hill Road Pitch Prep",
  "description": "A top-tier VC firm on Sand Hill Road agreed to hear your pitch next week. You have limited time to prepare - focus on a polished deck or your natural storytelling?",
  "conditions": {
    "requiredPhase": GamePhase.FUNDRAISING,
    "minimumStats": {
      "founder": {},
      "company": {}
    }
  },
  "impact": {
    "founder": {
      "energy": -3,
      "business": 2
    },
    "company": {
      "valuation": 5000
    }
  },
  "choices": [
    {
      "id": "polish_deck",
      "text": "Spend days perfecting your pitch deck with detailed metrics, competitive analysis, and professional design.",
      "successChance": 75,
      "impact": {
        "founder": {
          "energy": -10,
          "business": 8,
          "technical": 3,
          "cash": -2000
        },
        "company": {
          "valuation": 250000,
          "runway": 5,
          "revenue": 15000
        }
      }
    },
    {
      "id": "authentic_approach",
      "text": "Focus on storytelling and product demo, letting your passion and domain expertise shine through.",
      "successChance": 60,
      "impact": {
        "founder": {
          "energy": -5,
          "leadership": 10,
          "reputation": 8
        },
        "company": {
          "valuation": 200000,
          "runway": 4,
          "productQuality": 5
        }
      }
    }
  ]
};

export const investorFeedback: GameEvent = {
  "id": "investor_feedback_001",
  "category": "funding",
  "title": "VC Partner Feedback",
  "description": "After your pitch, a partner offers detailed feedback over coffee. This could be valuable insight or just their personal opinion.",
  "conditions": {
    "requiredPhase": GamePhase.FUNDRAISING,
    "activeMilestone": "polished_pitch_001"
  },
  "impact": {
    "founder": {
      "energy": -2,
      "business": 1
    },
    "company": {
      "valuation": 2000
    }
  },
  "choices": [
    {
      "id": "embrace_feedback",
      "text": "Take detailed notes and commit to implementing their suggestions before the next pitch.",
      "impact": {
        "founder": {
          "energy": -8,
          "business": 10,
          "technical": 5,
          "reputation": 3
        },
        "company": {
          "valuation": 100000,
          "productQuality": 8,
          "marketFit": 7
        }
      }
    },
    {
      "id": "selective_implementation",
      "text": "Listen politely but stay true to your vision - incorporate only what aligns with your strategy.",
      "impact": {
        "founder": {
          "energy": -3,
          "leadership": 7,
          "reputation": 2
        },
        "company": {
          "valuation": 50000,
          "productQuality": 3,
          "marketFit": 2
        }
      }
    }
  ]
};

export const angelOutreach: GameEvent = {
  "id": "angel_outreach_001",
  "category": "funding",
  "title": "Angel Investor Outreach",
  "description": "You have the opportunity to pitch to angel investors early. How will you approach early-stage funding?",
  "conditions": {
      "requiredPhase": GamePhase.IDEATION,
    "minimumStats": {
      "founder": {},
      "company": {}
    }
  },
  "impact": {
    "founder": {
      "energy": -3,
      "business": 2,
      "reputation": 1
    },
    "company": {
      "valuation": 3000
    }
  },
  "choices": [
    {
      "id": "targeted_angels",
      "text": "Focus on angels with domain expertise in your market",
      "successChance": 70,
      "impact": {
        "founder": {
          "business": 7,
          "reputation": 5,
          "cash": 50000
        },
        "company": {
          "valuation": 100000,
          "runway": 6,
          "marketFit": 8
        }
      }
    },
    {
      "id": "wide_network",
      "text": "Cast a wide net through angel networks and platforms",
      "impact": {
        "founder": {
          "energy": -8,
          "business": 5,
          "reputation": 3,
          "cash": 75000
        },
        "company": {
          "valuation": 150000,
          "runway": 8,
          "marketFit": 3
        }
      }
    }
  ]
};

export const friendsAndFamily: GameEvent = {
  "id": "friends_and_family_001",
  "category": "funding",
  "title": "Friends and Family Round",
  "description": "Consider raising initial capital from friends and family. How will you structure this sensitive investment round?",
  "conditions": {
      "requiredPhase": GamePhase.IDEATION,
    "minimumStats": {
      "founder": {},
      "company": {}
    }
  },
  "impact": {
    "founder": {
      "energy": -2,
      "reputation": 1
    },
    "company": {
      "valuation": 1000
    }
  },
  "choices": [
    {
      "id": "formal_terms",
      "text": "Set up formal investment terms and documentation",
      "successChance": 80,
      "impact": {
        "founder": {
          "business": 6,
          "leadership": 4,
          "cash": 25000
        },
        "company": {
          "valuation": 50000,
          "runway": 5,
          "teamMorale": -2
        }
      }
    },
    {
      "id": "flexible_approach",
      "text": "Keep it informal with flexible payback options",
      "impact": {
        "founder": {
          "business": 2,
          "leadership": 1,
          "cash": 15000,
          "reputation": -3
        },
        "company": {
          "valuation": 30000,
          "runway": 3,
          "teamMorale": 5
        }
      }
    }
  ]
};

export const crowdfunding: GameEvent = {
  "id": "crowdfunding_001",
  "category": "funding",
  "title": "Crowdfunding Campaign",
  "description": "Launch a crowdfunding campaign to validate market interest and raise initial capital.",
  "conditions": {
    "requiredPhase": GamePhase.IDEATION,
    "minimumStats": {
      "founder": {},
      "company": {}
    }
  },
  "impact": {
    "founder": {
      "energy": -5,
      "reputation": 3
    },
    "company": {
      "marketFit": 2,
      "userGrowth": 3
    }
  },
  "choices": [
    {
      "id": "reward_based",
      "text": "Launch a reward-based campaign with product pre-orders",
      "successChance": 65,
      "impact": {
        "founder": {
          "energy": -10,
          "reputation": 8,
          "cash": 40000
        },
        "company": {
          "valuation": 80000,
          "runway": 4,
          "marketFit": 10,
          "userGrowth": 15,
          "productQuality": 5
        }
      }
    },
    {
      "id": "equity_crowdfunding",
      "text": "Set up an equity crowdfunding campaign",
      "impact": {
        "founder": {
          "energy": -15,
          "business": 8,
          "cash": 100000,
          "reputation": 5
        },
        "company": {
          "valuation": 200000,
          "runway": 8,
          "marketFit": 5,
          "userGrowth": 5,
          "teamSize": 2
        }
      }
    }
  ]
};

export const seriesB: GameEvent = {
  "id": "series_b_001",
  "category": "funding",
  "title": "Series B Fundraising",
  "description": "With strong growth metrics, it's time for Series B. How will you position the company for this major funding round?",
  "conditions": {
      "requiredPhase": GamePhase.SCALING,
    "minimumStats": {
      "founder": {},
      "company": {}
    }
  },
  "impact": {
    "founder": {
      "energy": -8,
      "business": 5,
      "reputation": 5
    },
    "company": {
      "valuation": 500000,
      "teamMorale": 3
    }
  },
  "choices": [
    {
      "id": "growth_metrics",
      "text": "Focus pitch on growth metrics and market expansion plans",
      "successChance": 75,
      "impact": {
        "founder": {
          "business": 10,
          "leadership": 5,
          "cash": 2000000,
          "reputation": 15
        },
        "company": {
          "valuation": 10000000,
          "runway": 18,
          "userGrowth": 20,
          "teamSize": 10,
          "teamMorale": 10
        }
      }
    },
    {
      "id": "profitability_path",
      "text": "Emphasize path to profitability and sustainable growth",
      "impact": {
        "founder": {
          "business": 15,
          "leadership": 10,
          "cash": 1500000,
          "reputation": 10
        },
        "company": {
          "valuation": 8000000,
          "runway": 24,
          "revenue": 500000,
          "teamSize": 5,
          "teamMorale": 15
        }
      }
    }
  ]
};

export const strategicInvestment: GameEvent = {
  "id": "strategic_investment_001",
  "category": "funding",
  "title": "Strategic Investment Opportunity",
  "description": "A major player in your industry is interested in making a strategic investment. How will you approach this opportunity?",
  "conditions": {
      "requiredPhase": GamePhase.SCALING,
    "minimumStats": {
      "founder": {},
      "company": {}
    }
  },
  "impact": {
    "founder": {
      "energy": -5,
      "business": 3,
      "reputation": 8
    },
    "company": {
      "valuation": 200000,
      "marketFit": 5
    }
  },
  "choices": [
    {
      "id": "deep_partnership",
      "text": "Pursue deep strategic partnership with significant investment",
      "successChance": 70,
      "impact": {
        "founder": {
          "business": 12,
          "leadership": 8,
          "cash": 1000000,
          "reputation": 15
        },
        "company": {
          "valuation": 5000000,
          "runway": 12,
          "marketFit": 15,
          "userGrowth": 20,
          "teamSize": 5
        }
      }
    },
    {
      "id": "limited_partnership",
      "text": "Negotiate limited partnership with smaller investment",
      "impact": {
        "founder": {
          "business": 6,
          "leadership": 10,
          "cash": 500000,
          "reputation": 8
        },
        "company": {
          "valuation": 2000000,
          "runway": 8,
          "marketFit": 8,
          "userGrowth": 10,
          "teamMorale": 10
        }
      }
    }
  ]
};

export const internationalExpansionFunding: GameEvent = {
  "id": "international_expansion_funding_001",
  "category": "funding",
  "title": "International Expansion Funding",
  "description": "Opportunity to raise funding specifically for international expansion from global investors.",
  "conditions": {
    "requiredPhase": GamePhase.SCALING,
    "minimumStats": {
      "founder": {},
      "company": {}
    }
  },
  "impact": {
    "founder": {
      "energy": -10,
      "business": 5,
      "reputation": 10
    },
    "company": {
      "valuation": 300000,
      "marketFit": 3,
      "userGrowth": 5
    }
  },
  "choices": [
    {
      "id": "global_fund",
      "text": "Partner with a global investment fund for worldwide expansion",
      "successChance": 70,
      "impact": {
        "founder": {
          "business": 15,
          "leadership": 10,
          "cash": 3000000,
          "reputation": 20
        },
        "company": {
          "valuation": 15000000,
          "runway": 24,
          "marketFit": 15,
          "userGrowth": 25,
          "teamSize": 15,
          "teamMorale": 5
        }
      }
    },
    {
      "id": "regional_focus",
      "text": "Raise from regional investors for targeted market expansion",
      "impact": {
        "founder": {
          "business": 10,
          "leadership": 12,
          "cash": 1500000,
          "reputation": 12
        },
        "company": {
          "valuation": 8000000,
          "runway": 18,
          "marketFit": 20,
          "userGrowth": 15,
          "teamSize": 8,
          "teamMorale": 10
        }
      }
    }
  ]
}; 