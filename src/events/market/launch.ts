import { GameEvent, GamePhase } from '../../types/stats';

export const initialMarketAnalysis: GameEvent = {
  "id": "initial_market_analysis_001",
  "category": "market",
  "title": "Initial Market Analysis",
  "description": "Time to analyze your target market and understand the competitive landscape.",
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
      "id": "deep_research",
      "text": "Conduct thorough market research and competitor analysis",
      "successChance": 85,
      "impact": {
        "founder": {},
        "company": {}
      }
    },
    {
      "id": "customer_focus",
      "text": "Focus on understanding potential customer needs and pain points",
      "impact": {
        "founder": {},
        "company": {}
      }
    }
  ]
};

export const productHunt: GameEvent = {
  "id": "product_hunt_launch_001",
  "category": "market",
  "title": "Product Hunt Launch Day",
  "description": "Your MVP is ready for a public launch. Product Hunt could give you significant initial exposure.",
  "conditions": {
    "requiredPhase": GamePhase.BOOTSTRAPPING,
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
      "id": "community_focus",
      "text": "Engage with the Product Hunt community early and build relationships with influencers.",
      "successChance": 75,
      "impact": {
        "founder": {},
        "company": {}
      }
    },
    {
      "id": "product_focus",
      "text": "Focus on polishing the product and documentation for launch day.",
      "impact": {
        "founder": {},
        "company": {}
      }
    }
  ]
};

export const marketFeedback: GameEvent = {
  "id": "market_feedback_001",
  "category": "market",
  "title": "Early User Feedback",
  "description": "The first wave of user feedback is in. There's a clear pattern in what users are saying.",
  "conditions": {
    "requiredPhase": GamePhase.BOOTSTRAPPING,
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
      "id": "pivot_product",
      "text": "Pivot the product based on user feedback - they're using it differently than expected.",
      "successChance": 65,
      "impact": {
        "founder": {},
        "company": {}
      }
    },
    {
      "id": "stay_course",
      "text": "Stay the course - focus on better explaining the product's intended use.",
      "impact": {
        "founder": {},
        "company": {}
      }
    }
  ]
};

export const publicDemo: GameEvent = {
  "id": "public_demo_001",
  "category": "market",
  "title": "SOMA Demo Day",
  "description": "You've been invited to showcase your product at a popular tech hub in SOMA. The room will be full of potential users, investors, and tech journalists.",
  "conditions": {
    "requiredPhase": GamePhase.BOOTSTRAPPING,
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
      "id": "ambitious_showcase",
      "text": "Go big: Demo cutting-edge features and promise an ambitious roadmap.",
      "successChance": 65,
      "impact": {
        "founder": {},
        "company": {}
      }
    },
    {
      "id": "focused_demo",
      "text": "Keep it real: Show polished core features and emphasize current user success.",
      "successChance": 85,
      "impact": {
        "founder": {},
        "company": {}
      }
    }
  ]
};

export const demoFallout: GameEvent = {
  "id": "demo_fallout_001",
  "category": "market",
  "title": "Post-Demo Reactions",
  "description": "Your demo is trending on tech Twitter. The community is debating your product's potential versus current capabilities.",
  "conditions": {
    "requiredPhase": GamePhase.BOOTSTRAPPING,
    "activeMilestone": "hype_generated_001"
  },
  "impact": {
    "founder": {},
    "company": {}
  },
  "choices": [
    {
      "id": "double_down",
      "text": "Double down on the vision: Share a detailed roadmap and start a waitlist.",
      "impact": {
        "founder": {},
        "company": {}
      }
    },
    {
      "id": "manage_expectations",
      "text": "Address concerns transparently: Share current limitations and near-term improvements.",
      "impact": {
        "founder": {},
        "company": {}
      }
    }
  ]
};

export const marketValidation: GameEvent = {
  "id": "market_validation_001",
  "category": "market",
  "title": "Market Validation Strategy",
  "description": "Time to validate your market assumptions. How will you approach gathering initial market feedback?",
  "conditions": {
    "requiredPhase": GamePhase.IDEATION,    "minimumStats": {
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
      "id": "customer_interviews",
      "text": "Conduct in-depth interviews with potential customers",
      "successChance": 80,
      "impact": {
        "founder": {},
        "company": {}
      }
    },
    {
      "id": "market_survey",
      "text": "Launch a broad market survey with data analytics",
      "impact": {
        "founder": {},
        "company": {}
      }
    }
  ]
};

export const investorMarketPitch: GameEvent = {
  "id": "investor_market_pitch_001",
  "category": "market",
  "title": "Market Size Presentation",
  "description": "Investors want to understand your market opportunity. How will you present your market analysis?",
  "conditions": {
    "requiredPhase": GamePhase.FUNDRAISING,    "minimumStats": {
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
      "id": "conservative_analysis",
      "text": "Present conservative but well-researched market size estimates",
      "successChance": 85,
      "impact": {
        "founder": {},
        "company": {}
      }
    },
    {
      "id": "ambitious_projection",
      "text": "Show ambitious TAM/SAM analysis with growth projections",
      "impact": {
        "founder": {},
        "company": {}
      }
    }
  ]
};

export const marketExpansion: GameEvent = {
  "id": "market_expansion_001",
  "category": "market",
  "title": "Market Expansion Strategy",
  "description": "Your success in the initial market opens opportunities for expansion. Which direction will you take?",
  "conditions": {
    "requiredPhase": GamePhase.SCALING,    "minimumStats": {
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
      "id": "vertical_expansion",
      "text": "Expand into adjacent market verticals",
      "successChance": 75,
      "impact": {
        "founder": {},
        "company": {}
      }
    },
    {
      "id": "global_expansion",
      "text": "Launch international market expansion",
      "impact": {
        "founder": {},
        "company": {}
      }
    }
  ]
}; 