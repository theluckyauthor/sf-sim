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
        "founder": {},
        "company": {}
      }
    },
    {
      "id": "investor_preparation",
      "text": "Prepare for early investors - Start building pitch deck and financial projections",
      "impact": {
        "founder": {},
        "company": {}
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
    "founder": {},
    "company": {}
  },
  "choices": [
    {
      "id": "focus_traction",
      "text": "Focus your pitch on current traction and growth metrics.",
      "successChance": 80,
      "impact": {
        "founder": {},
        "company": {}
      }
    },
    {
      "id": "focus_vision",
      "text": "Emphasize your long-term vision and market potential.",
      "successChance": 60,
      "impact": {
        "founder": {},
        "company": {}
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
    "founder": {},
    "company": {}
  },
  "choices": [
    {
      "id": "polish_deck",
      "text": "Spend days perfecting your pitch deck with detailed metrics, competitive analysis, and professional design.",
      "successChance": 75,
      "impact": {
        "founder": {},
        "company": {}
      }
    },
    {
      "id": "authentic_approach",
      "text": "Focus on storytelling and product demo, letting your passion and domain expertise shine through.",
      "successChance": 60,
      "impact": {
        "founder": {},
        "company": {}
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
    "founder": {},
    "company": {}
  },
  "choices": [
    {
      "id": "embrace_feedback",
      "text": "Take detailed notes and commit to implementing their suggestions before the next pitch.",
      "impact": {
        "founder": {},
        "company": {}
      }
    },
    {
      "id": "selective_implementation",
      "text": "Listen politely but stay true to your vision - incorporate only what aligns with your strategy.",
      "impact": {
        "founder": {},
        "company": {}
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
    "founder": {},
    "company": {}
  },
  "choices": [
    {
      "id": "targeted_angels",
      "text": "Focus on angels with domain expertise in your market",
      "successChance": 70,
      "impact": {
        "founder": {},
        "company": {}
      }
    },
    {
      "id": "wide_network",
      "text": "Cast a wide net through angel networks and platforms",
      "impact": {
        "founder": {},
        "company": {}
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
    "founder": {},
    "company": {}
  },
  "choices": [
    {
      "id": "formal_terms",
      "text": "Set up formal investment terms and documentation",
      "successChance": 80,
      "impact": {
        "founder": {},
        "company": {}
      }
    },
    {
      "id": "flexible_approach",
      "text": "Keep it informal with flexible payback options",
      "impact": {
        "founder": {},
        "company": {}
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
    "founder": {},
    "company": {}
  },
  "choices": [
    {
      "id": "reward_based",
      "text": "Launch a reward-based campaign with product pre-orders",
      "successChance": 65,
      "impact": {
        "founder": {},
        "company": {}
      }
    },
    {
      "id": "equity_crowdfunding",
      "text": "Set up an equity crowdfunding campaign",
      "impact": {
        "founder": {},
        "company": {}
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
    "founder": {},
    "company": {}
  },
  "choices": [
    {
      "id": "growth_metrics",
      "text": "Focus pitch on growth metrics and market expansion plans",
      "successChance": 75,
      "impact": {
        "founder": {},
        "company": {}
      }
    },
    {
      "id": "profitability_path",
      "text": "Emphasize path to profitability and sustainable growth",
      "impact": {
        "founder": {},
        "company": {}
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
    "founder": {},
    "company": {}
  },
  "choices": [
    {
      "id": "deep_partnership",
      "text": "Pursue deep strategic partnership with significant investment",
      "successChance": 70,
      "impact": {
        "founder": {},
        "company": {}
      }
    },
    {
      "id": "limited_partnership",
      "text": "Negotiate limited partnership with smaller investment",
      "impact": {
        "founder": {},
        "company": {}
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
    "founder": {},
    "company": {}
  },
  "choices": [
    {
      "id": "global_fund",
      "text": "Partner with a global investment fund for worldwide expansion",
      "successChance": 70,
      "impact": {
        "founder": {},
        "company": {}
      }
    },
    {
      "id": "regional_focus",
      "text": "Raise from regional investors for targeted market expansion",
      "impact": {
        "founder": {},
        "company": {}
      }
    }
  ]
}; 