import { GameEvent, GamePhase } from '../../types/stats';
export const mvpCrunch: GameEvent = {
  "id": "mvp_crunch_001",
  "category": "product",
  "title": "MVP Development Sprint",
  "description": "Your team is close to completing the MVP. A potential investor wants to see it next week.",
  "conditions": {
    "requiredPhase": GamePhase.BOOTSTRAPPING,    "minimumStats": {
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
      "id": "crunch_time",
      "text": "Push the team to work extra hours to polish the MVP.",
      "successChance": 75,
      "impact": {
        "founder": {},
        "company": {}
      }
    },
    {
      "id": "balanced_approach",
      "text": "Maintain regular working hours but focus the team on essential features only.",
      "impact": {
        "founder": {},
        "company": {}
      }
    }
  ]
};

export const featurePrioritization: GameEvent = {
  "id": "feature_prioritization_001",
  "category": "product",
  "title": "Feature Crossroads",
  "description": "Your team needs to decide the next major feature for the MVP. User research shows demand for a crucial but complex core function, while market trends point to an exciting AI-powered add-on that could generate buzz.",
  "conditions": {
    "requiredPhase": GamePhase.BOOTSTRAPPING,    "minimumStats": {
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
      "id": "core_function",
      "text": "Focus on the core function: A robust authentication system with role-based access control.",
      "successChance": 80,
      "impact": {
        "founder": {},
        "company": {}
      }
    },
    {
      "id": "trendy_addon",
      "text": "Develop the AI-powered feature: A smart recommendation engine that could differentiate your product.",
      "successChance": 60,
      "impact": {
        "founder": {},
        "company": {}
      }
    }
  ]
};

export const featureValidation: GameEvent = {
  "id": "feature_validation_001",
  "category": "product",
  "title": "Early User Feedback",
  "description": "The new feature is ready for testing. How will you gather and incorporate user feedback?",
  "conditions": {
    "requiredPhase": GamePhase.BOOTSTRAPPING,    "activeMilestone": "core_feature_complete"
  },
  "impact": {
    "founder": {},
    "company": {}
  },
  "choices": [
    {
      "id": "extensive_testing",
      "text": "Run a comprehensive beta testing program with detailed user interviews.",
      "impact": {
        "founder": {},
        "company": {}
      }
    },
    {
      "id": "quick_release",
      "text": "Push for a quick release and gather feedback through analytics and user metrics.",
      "successChance": 65,
      "impact": {
        "founder": {},
        "company": {}
      }
    }
  ]
};

export const initialIdeaValidation: GameEvent = {
  "id": "initial_idea_validation_001",
  "category": "product",
  "title": "Initial Idea Validation",
  "description": "Time to validate your initial product idea through customer interviews and market research.",
  "conditions": {
    "requiredPhase": GamePhase.SETTLING_IN,    "minimumStats": {
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
      "text": "Conduct in-depth customer interviews to validate your assumptions",
      "successChance": 75,
      "impact": {
        "founder": {},
        "company": {}
      }
    },
    {
      "id": "market_research",
      "text": "Focus on market research and competitive analysis",
      "impact": {
        "founder": {},
        "company": {}
      }
    }
  ]
};

export const productBrainstorming: GameEvent = {
  "id": "product_brainstorming_001",
  "category": "product",
  "title": "Product Feature Brainstorming",
  "description": "Time to brainstorm the core features of your product. What will set you apart from the competition?",
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
      "id": "innovative_features",
      "text": "Focus on innovative, cutting-edge features that could disrupt the market",
      "successChance": 70,
      "impact": {
        "founder": {},
        "company": {}
      }
    },
    {
      "id": "market_needs",
      "text": "Prioritize features based on clear market needs and user pain points",
      "impact": {
        "founder": {},
        "company": {}
      }
    }
  ]
};

export const prototypeStrategy: GameEvent = {
  "id": "prototype_strategy_001",
  "category": "product",
  "title": "Prototype Development Strategy",
  "description": "You need to create a prototype to validate your ideas. How will you approach the initial development?",
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
      "id": "rapid_prototyping",
      "text": "Use rapid prototyping tools to quickly create a functional demo",
      "successChance": 80,
      "impact": {
        "founder": {},
        "company": {}
      }
    },
    {
      "id": "detailed_prototype",
      "text": "Build a more polished prototype with attention to design and user experience",
      "impact": {
        "founder": {},
        "company": {}
      }
    }
  ]
};

export const userTesting: GameEvent = {
  "id": "user_testing_001",
  "category": "product",
  "title": "Early User Testing",
  "description": "Your prototype is ready for initial user testing. How will you gather early feedback?",
  "conditions": {
    "requiredPhase": GamePhase.IDEATION,    "activeMilestone": "rapid_prototype_complete"
  },
  "impact": {
    "founder": {},
    "company": {}
  },
  "choices": [
    {
      "id": "structured_testing",
      "text": "Conduct structured user testing sessions with detailed feedback collection",
      "successChance": 85,
      "impact": {
        "founder": {},
        "company": {}
      }
    },
    {
      "id": "informal_feedback",
      "text": "Share the prototype with your network for quick, informal feedback",
      "impact": {
        "founder": {},
        "company": {}
      }
    }
  ]
};

export const investorDemo: GameEvent = {
  "id": "investor_demo_001",
  "category": "product",
  "title": "Investor Demo Preparation",
  "description": "You need to prepare a compelling product demo for investor meetings. What aspects will you emphasize?",
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
      "id": "growth_metrics",
      "text": "Focus on demonstrating growth metrics and market traction",
      "successChance": 75,
      "impact": {
        "founder": {},
        "company": {}
      }
    },
    {
      "id": "technical_innovation",
      "text": "Showcase technical innovation and product scalability",
      "impact": {
        "founder": {},
        "company": {}
      }
    }
  ]
};

export const productRoadmapPitch: GameEvent = {
  "id": "product_roadmap_pitch_001",
  "category": "product",
  "title": "Product Roadmap for Investors",
  "description": "Investors want to see your product vision and roadmap. How will you present your future plans?",
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
      "id": "ambitious_vision",
      "text": "Present an ambitious vision with breakthrough features and market expansion",
      "successChance": 70,
      "impact": {
        "founder": {},
        "company": {}
      }
    },
    {
      "id": "realistic_growth",
      "text": "Focus on realistic, achievable growth with clear market validation",
      "impact": {
        "founder": {},
        "company": {}
      }
    }
  ]
};

export const scalingChallenge: GameEvent = {
  "id": "scaling_challenge_001",
  "category": "product",
  "title": "Scaling for Growth",
  "description": "As investor interest grows, you need to prove your product can scale. A sudden surge in users is testing your infrastructure.",
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
      "id": "infrastructure_investment",
      "text": "Invest heavily in infrastructure and scalability improvements",
      "successChance": 80,
      "impact": {
        "founder": {},
        "company": {}
      }
    },
    {
      "id": "gradual_scaling",
      "text": "Implement temporary solutions while scaling gradually",
      "impact": {
        "founder": {},
        "company": {}
      }
    }
  ]
};

export const productExpansion: GameEvent = {
  "id": "product_expansion_001",
  "category": "product",
  "title": "Product Line Expansion",
  "description": "With strong market presence, it's time to expand your product line. How will you approach this growth?",
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
      "text": "Focus on vertical expansion - Build more advanced features for existing customers",
      "successChance": 80,
      "impact": {
        "founder": {},
        "company": {}
      }
    },
    {
      "id": "horizontal_expansion",
      "text": "Pursue horizontal expansion - Launch new products for different market segments",
      "impact": {
        "founder": {},
        "company": {}
      }
    }
  ]
};

export const enterpriseFeatures: GameEvent = {
  "id": "enterprise_features_001",
  "category": "product",
  "title": "Enterprise Feature Development",
  "description": "Large enterprise customers are requesting specific features. How will you adapt your product for enterprise needs?",
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
      "id": "dedicated_enterprise",
      "text": "Build a dedicated enterprise version with advanced security and management features",
      "successChance": 75,
      "impact": {
        "founder": {},
        "company": {}
      }
    },
    {
      "id": "feature_tiers",
      "text": "Implement tiered feature access with enterprise features as premium add-ons",
      "impact": {
        "founder": {},
        "company": {}
      }
    }
  ]
};

export const platformStrategy: GameEvent = {
  "id": "platform_strategy_001",
  "category": "product",
  "title": "Platform Evolution Strategy",
  "description": "Your product has potential to become a platform. How will you evolve from a product to a platform?",
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
      "id": "open_platform",
      "text": "Create an open platform with APIs and developer tools for third-party integration",
      "successChance": 70,
      "impact": {
        "founder": {},
        "company": {}
      }
    },
    {
      "id": "controlled_ecosystem",
      "text": "Build a controlled ecosystem with carefully selected partners and integrations",
      "impact": {
        "founder": {},
        "company": {}
      }
    }
  ]
};

export const innovationBreakthrough: GameEvent = {
  "id": "innovation_breakthrough_001",
  "category": "product",
  "title": "Innovation Breakthrough",
  "description": "Your team has discovered a novel approach to solving a key technical challenge.",
  "conditions": {
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
      "id": "full_rebuild",
      "text": "Rebuild core components to implement the breakthrough",
      "successChance": 70,
      "impact": {
        "founder": {},
        "company": {}
      }
    },
    {
      "id": "gradual_integration",
      "text": "Gradually integrate the innovation while maintaining stability",
      "impact": {
        "founder": {},
        "company": {}
      }
    }
  ]
};

export const qualityChallenge: GameEvent = {
  "id": "quality_challenge_001",
  "category": "product",
  "title": "Quality Assurance Challenge",
  "description": "Users are reporting increasing bugs and stability issues as the product grows.",
  "conditions": {
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
      "id": "quality_sprint",
      "text": "Dedicate a full sprint to quality improvements and testing",
      "impact": {
        "founder": {},
        "company": {}
      }
    },
    {
      "id": "hire_qa",
      "text": "Hire dedicated QA engineers",
      "impact": {
        "founder": {},
        "company": {}
      }
    }
  ]
};

export const techDebtCrisis: GameEvent = {
  "id": "tech_debt_crisis_001",
  "category": "product",
  "title": "Technical Debt Crisis",
  "description": "Rapid development has led to significant technical debt, threatening future development speed.",
  "conditions": {
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
      "id": "major_refactor",
      "text": "Initiate a major refactoring project",
      "successChance": 75,
      "impact": {
        "founder": {},
        "company": {}
      }
    },
    {
      "id": "gradual_improvement",
      "text": "Address technical debt gradually alongside new features",
      "impact": {
        "founder": {},
        "company": {}
      }
    }
  ]
}; 