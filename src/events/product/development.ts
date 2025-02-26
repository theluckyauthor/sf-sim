import { GameEvent, GamePhase } from '../../types/stats';

export const mvpCrunch: GameEvent = {
  "id": "mvp_crunch_001",
  "category": "product",
  "title": "MVP Development Crunch",
  "description": "Your launch deadline is approaching, but there's still significant work to be done on your MVP. How will you handle this crunch time?",
  "conditions": {
    "requiredPhase": GamePhase.BOOTSTRAPPING,
    "minimumStats": {
      "company": {
        "productQuality": 30
      }
    }
  },
  "impact": {
    "founder": {},
    "company": {}
  },
  "choices": [
    {
      "id": "all_nighters",
      "text": "Pull all-nighters to finish everything on time",
      "impact": {
        "founder": {
          "energy": -40,
          "health": -20,
          "technical": 15
        },
        "company": {
          "productQuality": 25,
          "teamMorale": -15
        }
      }
    },
    {
      "id": "reduce_scope",
      "text": "Reduce the scope to focus on core features only",
      "impact": {
        "founder": {
          "energy": -15,
          "business": 10
        },
        "company": {
          "productQuality": 10,
          "marketFit": 15,
          "teamMorale": 5
        }
      }
    },
    {
      "id": "delay_launch",
      "text": "Delay the launch to ensure quality",
      "impact": {
        "founder": {
          "energy": 5,
          "reputation": -10
        },
        "company": {
          "productQuality": 20,
          "runway": -1,
          "userGrowth": -10
        }
      }
    }
  ]
};

export const featurePrioritization: GameEvent = {
  "id": "feature_prioritization_001",
  "category": "product",
  "title": "Feature Prioritization Challenge",
  "description": "Users are requesting many new features, but you have limited resources. How will you prioritize development?",
  "conditions": {
    "requiredPhase": GamePhase.BOOTSTRAPPING,
    "minimumStats": {
      "company": {
        "userGrowth": 20
      }
    }
  },
  "impact": {
    "founder": {},
    "company": {}
  },
  "choices": [
    {
      "id": "data_driven",
      "text": "Use data analytics to prioritize features with highest impact",
      "impact": {
        "founder": {
          "energy": -15,
          "business": 10,
          "technical": 5
        },
        "company": {
          "productQuality": 15,
          "marketFit": 20,
          "userGrowth": 10
        }
      }
    },
    {
      "id": "customer_requests",
      "text": "Focus on the most frequently requested features",
      "impact": {
        "founder": {
          "energy": -10,
          "reputation": 10
        },
        "company": {
          "productQuality": 10,
          "marketFit": 15,
          "teamMorale": 5
        }
      }
    },
    {
      "id": "strategic_vision",
      "text": "Prioritize features aligned with your long-term strategic vision",
      "impact": {
        "founder": {
          "energy": -20,
          "leadership": 15
        },
        "company": {
          "productQuality": 20,
          "marketFit": 5,
          "valuation": 50000
        }
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
  "title": "Product Brainstorming Session",
  "description": "It's time to refine your product idea. You've set aside a day to brainstorm and define your MVP features.",
  "conditions": {
    "requiredPhase": GamePhase.IDEATION,
    "minimumStats": {
      "founder": {
        "technical": 30
      }
    }
  },
  "impact": {
    "founder": {},
    "company": {}
  },
  "choices": [
    {
      "id": "focus_core_features",
      "text": "Focus on core features that solve the main user problem",
      "impact": {
        "founder": {
          "energy": -10,
          "technical": 5
        },
        "company": {
          "productQuality": 15,
          "marketFit": 10
        }
      }
    },
    {
      "id": "innovative_approach",
      "text": "Take an innovative approach with unique differentiators",
      "impact": {
        "founder": {
          "energy": -15,
          "technical": 10,
          "reputation": 5
        },
        "company": {
          "productQuality": 20,
          "marketFit": 5,
          "runway": -0.5
        }
      }
    },
    {
      "id": "market_research",
      "text": "Conduct additional market research before deciding on features",
      "impact": {
        "founder": {
          "energy": -5,
          "business": 5
        },
        "company": {
          "productQuality": 5,
          "marketFit": 15,
          "runway": -0.5
        }
      }
    }
  ]
};

export const prototypeStrategy: GameEvent = {
  "id": "prototype_strategy_001",
  "category": "product",
  "title": "Prototype Development Strategy",
  "description": "You need to create a prototype to validate your idea. How will you approach this critical first step?",
  "conditions": {
    "requiredPhase": GamePhase.IDEATION,
    "minimumStats": {
      "founder": {
        "technical": 35
      }
    }
  },
  "impact": {
    "founder": {},
    "company": {}
  },
  "choices": [
    {
      "id": "code_yourself",
      "text": "Code the prototype yourself to save money",
      "impact": {
        "founder": {
          "energy": -30,
          "technical": 15,
          "health": -10
        },
        "company": {
          "productQuality": 10,
          "runway": 0.5
        }
      }
    },
    {
      "id": "hire_freelancer",
      "text": "Hire a freelancer to build the prototype",
      "impact": {
        "founder": {
          "energy": -10,
          "cash": -3000
        },
        "company": {
          "productQuality": 15,
          "runway": -1
        }
      }
    },
    {
      "id": "no_code_tools",
      "text": "Use no-code tools to quickly create a functional mockup",
      "impact": {
        "founder": {
          "energy": -15,
          "technical": 5,
          "cash": -500
        },
        "company": {
          "productQuality": 5,
          "marketFit": 10,
          "runway": -0.2
        }
      }
    }
  ]
};

export const userTesting: GameEvent = {
  "id": "user_testing_001",
  "category": "product",
  "title": "First User Testing Session",
  "description": "Your prototype is ready for its first real user test. How will you gather and incorporate feedback?",
  "conditions": {
    "requiredPhase": GamePhase.IDEATION,
    "minimumStats": {
      "company": {
        "productQuality": 20
      }
    }
  },
  "impact": {
    "founder": {},
    "company": {}
  },
  "choices": [
    {
      "id": "in_person_testing",
      "text": "Conduct in-person testing sessions with potential users",
      "impact": {
        "founder": {
          "energy": -20,
          "business": 10,
          "cash": -500
        },
        "company": {
          "productQuality": 15,
          "marketFit": 20
        }
      }
    },
    {
      "id": "remote_testing",
      "text": "Set up remote testing sessions to reach more diverse users",
      "impact": {
        "founder": {
          "energy": -15,
          "technical": 5,
          "cash": -1000
        },
        "company": {
          "productQuality": 10,
          "marketFit": 15,
          "userGrowth": 5
        }
      }
    },
    {
      "id": "friends_family",
      "text": "Test with friends and family first to save money",
      "impact": {
        "founder": {
          "energy": -10,
          "reputation": -5
        },
        "company": {
          "productQuality": 5,
          "marketFit": 5
        }
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

export const productRoadmapStrategy: GameEvent = {
  "id": "product_roadmap_strategy_001",
  "category": "product",
  "title": "Product Roadmap Strategy",
  "description": "As your product gains traction, you need to define a clear roadmap for the next 6-12 months.",
  "conditions": {
    "requiredPhase": GamePhase.BOOTSTRAPPING,
    "minimumStats": {
      "company": {
        "userGrowth": 40
      }
    }
  },
  "impact": {
    "founder": {},
    "company": {}
  },
  "choices": [
    {
      "id": "user_centric",
      "text": "Create a user-centric roadmap focused on solving customer pain points",
      "impact": {
        "founder": {
          "energy": -15,
          "business": 10
        },
        "company": {
          "productQuality": 15,
          "marketFit": 20,
          "userGrowth": 15
        }
      }
    },
    {
      "id": "innovation_focused",
      "text": "Focus on innovative features that differentiate from competitors",
      "impact": {
        "founder": {
          "energy": -20,
          "technical": 15,
          "reputation": 10
        },
        "company": {
          "productQuality": 25,
          "marketFit": 5,
          "valuation": 100000
        }
      }
    },
    {
      "id": "monetization_strategy",
      "text": "Prioritize features that enhance monetization and revenue growth",
      "impact": {
        "founder": {
          "energy": -15,
          "business": 15
        },
        "company": {
          "productQuality": 10,
          "revenue": 5000,
          "runway": 2
        }
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

export const technicalDebtCrisis: GameEvent = {
  "id": "technical_debt_crisis_001",
  "category": "product",
  "title": "Technical Debt Crisis",
  "description": "Your rapid development has accumulated significant technical debt, causing bugs and slowing down new feature development.",
  "conditions": {
    "requiredPhase": GamePhase.BOOTSTRAPPING,
    "minimumStats": {
      "company": {
        "productQuality": 40,
        "userGrowth": 30
      }
    }
  },
  "impact": {
    "founder": {},
    "company": {}
  },
  "choices": [
    {
      "id": "refactor_codebase",
      "text": "Dedicate a sprint to refactoring the codebase",
      "impact": {
        "founder": {
          "energy": -25,
          "technical": 15
        },
        "company": {
          "productQuality": 25,
          "userGrowth": -5,
          "teamMorale": 15
        }
      }
    },
    {
      "id": "gradual_improvements",
      "text": "Make gradual improvements while continuing feature development",
      "impact": {
        "founder": {
          "energy": -15,
          "technical": 5
        },
        "company": {
          "productQuality": 10,
          "userGrowth": 5,
          "teamMorale": 5
        }
      }
    },
    {
      "id": "hire_specialists",
      "text": "Hire technical specialists to address critical issues",
      "impact": {
        "founder": {
          "energy": -10,
          "cash": -5000
        },
        "company": {
          "productQuality": 20,
          "runway": -1,
          "teamSize": 1,
          "talent": 10
        }
      }
    }
  ]
}; 