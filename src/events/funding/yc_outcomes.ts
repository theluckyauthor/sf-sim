import { GameEvent, GamePhase } from '../../types/stats';

// Event triggered after successful YC interview
export const ycOnboarding: GameEvent = {
  "id": "yc_onboarding_001",
  "category": "funding",
  "title": "YC Batch Kickoff",
  "description": "You've made it into YC! The first week is packed with orientation sessions, mentor meetings, and crucial decisions about your focus during the program.",
  "conditions": {
    "requiredPhase": GamePhase.FUNDRAISING,
    "activeMilestone": "yc_interview_success_001"
  },
  "impact": {
    "founder": {},
    "company": {}
  },
  "choices": [
    {
      "id": "growth_focus",
      "text": "Focus on explosive growth: Aim for hockey-stick metrics by demo day.",
      "impact": {
        "founder": {},
        "company": {}
      }
    },
    {
      "id": "sustainable_growth",
      "text": "Balance growth with sustainability: Build strong fundamentals while showing good traction.",
      "impact": {
        "founder": {},
        "company": {}
      }
    }
  ]
};

// Event for handling YC interview rejection
export const ycRejection: GameEvent = {
  "id": "yc_rejection_001",
  "category": "funding",
  "title": "Post-YC Interview Decision",
  "description": "The YC interview didn't result in an acceptance. Your team looks to you for direction on the path forward.",
  "conditions": {
    "requiredPhase": GamePhase.BOOTSTRAPPING,
    "activeMilestone": "yc_interview_rejection_001"
  },
  "impact": {
    "founder": {},
    "company": {}
  },
  "choices": [
    {
      "id": "bootstrap_focus",
      "text": "Double down on bootstrapping: Focus on revenue and prove them wrong.",
      "impact": {
        "founder": {},
        "company": {}
      }
    },
    {
      "id": "alternative_accelerator",
      "text": "Apply to other top accelerators while maintaining momentum.",
      "impact": {
        "founder": {},
        "company": {}
      }
    }
  ]
};

// Event for YC Demo Day preparation
export const ycDemoDay: GameEvent = {
  "id": "yc_demo_day_001",
  "category": "funding",
  "title": "Y Combinator Demo Day",
  "description": "The big day has arrived. You'll be presenting your startup to hundreds of investors at Y Combinator's Demo Day. Your pitch needs to be perfect.",
  "conditions": {
    "requiredPhase": GamePhase.FUNDRAISING,
    "minimumStats": {
      "founder": {
        "reputation": 65,
        "business": 60
      },
      "company": {
        "productQuality": 70,
        "marketFit": 65
      }
    }
  },
  "impact": {
    "founder": {},
    "company": {}
  },
  "choices": [
    {
      "id": "growth_metrics",
      "text": "Focus your pitch on impressive growth metrics and market potential",
      "impact": {
        "founder": {
          "energy": -30,
          "reputation": 25,
          "business": 15
        },
        "company": {
          "valuation": 1000000,
          "runway": 6
        }
      }
    },
    {
      "id": "product_innovation",
      "text": "Emphasize your product's unique innovation and technical advantages",
      "impact": {
        "founder": {
          "energy": -30,
          "reputation": 20,
          "technical": 15
        },
        "company": {
          "valuation": 800000,
          "runway": 5,
          "productQuality": 10
        }
      }
    },
    {
      "id": "team_story",
      "text": "Tell a compelling story about your team and vision",
      "impact": {
        "founder": {
          "energy": -25,
          "reputation": 30,
          "leadership": 15
        },
        "company": {
          "valuation": 700000,
          "runway": 4,
          "teamMorale": 15
        }
      }
    }
  ]
};

// Post Demo Day Fundraising
export const postDemoDayFundraising: GameEvent = {
  "id": "post_demo_day_fundraising_001",
  "category": "funding",
  "title": "Post-Demo Day Fundraising",
  "description": "After a successful Demo Day, you have multiple investor meetings lined up. How will you approach the fundraising process?",
  "conditions": {
    "requiredPhase": GamePhase.FUNDRAISING,
    "minimumStats": {
      "founder": {
        "reputation": 70
      },
      "company": {
        "valuation": 500000
      }
    }
  },
  "impact": {
    "founder": {},
    "company": {}
  },
  "choices": [
    {
      "id": "create_competition",
      "text": "Create competition among investors to drive up valuation",
      "impact": {
        "founder": {
          "energy": -35,
          "business": 20,
          "reputation": 15
        },
        "company": {
          "valuation": 2000000,
          "runway": 12,
          "teamMorale": -5
        }
      }
    },
    {
      "id": "strategic_investors",
      "text": "Focus on strategic investors who can add value beyond money",
      "impact": {
        "founder": {
          "energy": -25,
          "leadership": 15,
          "reputation": 20
        },
        "company": {
          "valuation": 1500000,
          "runway": 10,
          "marketFit": 15,
          "teamMorale": 10
        }
      }
    },
    {
      "id": "quick_close",
      "text": "Close quickly with a reputable lead investor",
      "impact": {
        "founder": {
          "energy": -15,
          "business": 10,
          "health": 10
        },
        "company": {
          "valuation": 1000000,
          "runway": 8,
          "teamMorale": 15
        }
      }
    }
  ]
};

// YC Batch Networking Event
export const ycBatchNetworking: GameEvent = {
  "id": "yc_batch_networking_001",
  "category": "funding",
  "title": "Y Combinator Batch Networking",
  "description": "As part of the Y Combinator program, you have the opportunity to network with other founders in your batch. These connections could be valuable for your startup's future.",
  "conditions": {
    "requiredPhase": GamePhase.FUNDRAISING,
    "minimumStats": {
      "founder": {
        "reputation": 60
      },
      "company": {
        "productQuality": 50
      }
    }
  },
  "impact": {
    "founder": {},
    "company": {}
  },
  "choices": [
    {
      "id": "active_networking",
      "text": "Actively network with as many founders as possible",
      "impact": {
        "founder": {
          "energy": -20,
          "reputation": 15,
          "leadership": 10
        },
        "company": {
          "teamMorale": 10,
          "valuation": 100000
        },
        "location": {
          "networkingScore": 20
        }
      }
    },
    {
      "id": "strategic_connections",
      "text": "Focus on building deeper relationships with a few strategic founders",
      "impact": {
        "founder": {
          "energy": -10,
          "reputation": 10,
          "business": 15
        },
        "company": {
          "marketFit": 15,
          "valuation": 150000
        },
        "location": {
          "networkingScore": 15
        }
      }
    },
    {
      "id": "minimal_engagement",
      "text": "Maintain minimal engagement while focusing on your product",
      "impact": {
        "founder": {
          "energy": 5,
          "technical": 10,
          "reputation": -5
        },
        "company": {
          "productQuality": 20,
          "teamMorale": 5
        }
      }
    }
  ]
};

// YC Team Scaling Event
export const ycTeamScaling: GameEvent = {
  "id": "yc_team_scaling_001",
  "category": "funding",
  "title": "Y Combinator Team Scaling",
  "description": "The YC partners suggest that you need to scale your team quickly to meet growth expectations. How will you approach hiring?",
  "conditions": {
    "requiredPhase": GamePhase.FUNDRAISING,
    "minimumStats": {
      "company": {
        "userGrowth": 50,
        "teamSize": 2
      }
    }
  },
  "impact": {
    "founder": {},
    "company": {}
  },
  "choices": [
    {
      "id": "aggressive_hiring",
      "text": "Aggressively hire to scale the team quickly",
      "impact": {
        "founder": {
          "energy": -25,
          "leadership": 15,
          "cash": -10000
        },
        "company": {
          "teamSize": 5,
          "runway": -3,
          "talent": 10,
          "teamMorale": -5
        }
      }
    },
    {
      "id": "selective_hiring",
      "text": "Hire selectively, focusing on quality over quantity",
      "impact": {
        "founder": {
          "energy": -15,
          "leadership": 10,
          "cash": -5000
        },
        "company": {
          "teamSize": 2,
          "runway": -1,
          "talent": 20,
          "teamMorale": 10
        }
      }
    },
    {
      "id": "outsource_temporarily",
      "text": "Temporarily outsource some functions while building the core team",
      "impact": {
        "founder": {
          "energy": -10,
          "business": 10,
          "cash": -7000
        },
        "company": {
          "teamSize": 1,
          "runway": -2,
          "productQuality": 15
        }
      }
    }
  ]
};

// YC Market Expansion Event
export const ycMarketExpansion: GameEvent = {
  "id": "yc_market_expansion_001",
  "category": "funding",
  "title": "Y Combinator Market Expansion",
  "description": "During office hours, YC partners suggest expanding into a new market segment to accelerate growth before Demo Day.",
  "conditions": {
    "requiredPhase": GamePhase.FUNDRAISING,
    "minimumStats": {
      "company": {
        "marketFit": 60,
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
      "id": "rapid_expansion",
      "text": "Rapidly expand into the new market segment",
      "impact": {
        "founder": {
          "energy": -30,
          "business": 15,
          "cash": -5000
        },
        "company": {
          "userGrowth": 30,
          "runway": -2,
          "marketFit": 10,
          "valuation": 300000
        }
      }
    },
    {
      "id": "pilot_program",
      "text": "Launch a small pilot program in the new market",
      "impact": {
        "founder": {
          "energy": -15,
          "business": 10,
          "cash": -2000
        },
        "company": {
          "userGrowth": 15,
          "runway": -0.5,
          "marketFit": 15,
          "valuation": 150000
        }
      }
    },
    {
      "id": "focus_current_market",
      "text": "Politely decline and focus on dominating your current market",
      "impact": {
        "founder": {
          "energy": -5,
          "reputation": -5
        },
        "company": {
          "userGrowth": 10,
          "marketFit": 20,
          "valuation": 100000
        }
      }
    }
  ]
};

export const boardFormation: GameEvent = {
  "id": "board_formation_001",
  "category": "funding",
  "title": "Board Formation",
  "description": "With your seed round closing, it's time to formalize your board of directors. This decision will impact your company's governance for years to come.",
  "conditions": {
    "requiredPhase": GamePhase.FUNDRAISING,
    "minimumStats": {
      "company": {
        "valuation": 1000000,
        "runway": 6
      }
    }
  },
  "impact": {
    "founder": {},
    "company": {}
  },
  "choices": [
    {
      "id": "founder_control",
      "text": "Maintain strong founder control with a small, founder-friendly board",
      "impact": {
        "founder": {
          "leadership": 20,
          "reputation": 10
        },
        "company": {
          "teamMorale": 15,
          "valuation": -200000
        }
      }
    },
    {
      "id": "experienced_board",
      "text": "Bring on experienced industry veterans to the board",
      "impact": {
        "founder": {
          "business": 15,
          "leadership": 10
        },
        "company": {
          "marketFit": 20,
          "valuation": 300000,
          "teamMorale": 5
        }
      }
    },
    {
      "id": "investor_heavy",
      "text": "Create an investor-heavy board to strengthen fundraising connections",
      "impact": {
        "founder": {
          "business": 10,
          "leadership": -5
        },
        "company": {
          "valuation": 500000,
          "runway": 2,
          "teamMorale": -10
        }
      }
    }
  ]
}; 