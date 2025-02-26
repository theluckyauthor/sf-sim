import { GameEvent, GamePhase } from '../../types/stats';

export const startupConference: GameEvent = {
  "id": "startup_conference_001",
  "category": "networking",
  "title": "Startup Conference Opportunity",
  "description": "You've been invited to attend a major startup conference in San Francisco. This could be a great opportunity to network and gain visibility for your company.",
  "conditions": {
    "requiredPhase": GamePhase.BOOTSTRAPPING,
    "minimumStats": {
      "founder": {
        "reputation": 40
      },
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
      "id": "attend_conference",
      "text": "Attend the conference and focus on networking",
      "impact": {
        "founder": {
          "energy": -15,
          "reputation": 10
        },
        "company": {
          "runway": -0.5,
          "marketFit": 5
        },
        "location": {
          "networkingScore": 15
        }
      }
    },
    {
      "id": "present_product",
      "text": "Apply to present your product at the conference",
      "impact": {
        "founder": {
          "energy": -25,
          "reputation": 20,
          "technical": 5
        },
        "company": {
          "runway": -1,
          "marketFit": 10,
          "userGrowth": 15
        },
        "location": {
          "networkingScore": 20
        }
      }
    },
    {
      "id": "skip_conference",
      "text": "Skip the conference and focus on product development",
      "impact": {
        "founder": {
          "energy": 5
        },
        "company": {
          "productQuality": 10,
          "marketFit": -5
        },
        "location": {
          "networkingScore": -5
        }
      }
    }
  ]
};

export const mediaOpportunity: GameEvent = {
  "id": "media_opportunity_001",
  "category": "networking",
  "title": "Media Interview Request",
  "description": "A popular tech blog wants to interview you about your startup journey and product. This could bring significant exposure but also scrutiny.",
  "conditions": {
    "requiredPhase": GamePhase.BOOTSTRAPPING,
    "minimumStats": {
      "founder": {
        "reputation": 45
      },
      "company": {
        "productQuality": 40
      }
    }
  },
  "impact": {
    "founder": {},
    "company": {}
  },
  "choices": [
    {
      "id": "accept_interview",
      "text": "Accept the interview and focus on your vision",
      "impact": {
        "founder": {
          "energy": -10,
          "reputation": 15
        },
        "company": {
          "userGrowth": 10,
          "marketFit": 5
        }
      }
    },
    {
      "id": "prepare_thoroughly",
      "text": "Accept but spend extra time preparing with your team",
      "impact": {
        "founder": {
          "energy": -20,
          "reputation": 25,
          "leadership": 5
        },
        "company": {
          "userGrowth": 20,
          "marketFit": 10,
          "teamMorale": 5
        }
      }
    },
    {
      "id": "decline_politely",
      "text": "Politely decline, citing that you're not ready for media exposure",
      "impact": {
        "founder": {
          "energy": 5,
          "reputation": -5
        },
        "company": {
          "productQuality": 5
        }
      }
    }
  ]
};

export const mediaExposureStrategy: GameEvent = {
  "id": "media_exposure_strategy_001",
  "category": "networking",
  "title": "Media Exposure Strategy",
  "description": "Your startup is gaining traction, and you need to decide on a media strategy. How will you approach building your company's public image?",
  "conditions": {
    "requiredPhase": GamePhase.BOOTSTRAPPING,
    "minimumStats": {
      "company": {
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
      "id": "aggressive_pr",
      "text": "Pursue an aggressive PR strategy with frequent press releases",
      "impact": {
        "founder": {
          "energy": -15,
          "reputation": 15,
          "cash": -2000
        },
        "company": {
          "userGrowth": 25,
          "runway": -1,
          "marketFit": 5
        }
      }
    },
    {
      "id": "thought_leadership",
      "text": "Focus on thought leadership through blogs and speaking engagements",
      "impact": {
        "founder": {
          "energy": -20,
          "reputation": 20,
          "leadership": 10
        },
        "company": {
          "userGrowth": 15,
          "marketFit": 10,
          "valuation": 50000
        }
      }
    },
    {
      "id": "organic_growth",
      "text": "Let growth happen organically and focus on product excellence",
      "impact": {
        "founder": {
          "energy": 5,
          "technical": 10
        },
        "company": {
          "productQuality": 15,
          "userGrowth": 5,
          "teamMorale": 10
        }
      }
    }
  ]
};

export const investorNetworking: GameEvent = {
  "id": "investor_networking_001",
  "category": "networking",
  "title": "Investor Networking Event",
  "description": "A high-profile investor networking event is happening this weekend. Many top VCs and angel investors will be there.",
  "conditions": {
    "requiredPhase": GamePhase.FUNDRAISING,
    "minimumStats": {
      "founder": {
        "reputation": 50
      },
      "company": {
        "productQuality": 50,
        "marketFit": 40
      }
    }
  },
  "impact": {
    "founder": {},
    "company": {}
  },
  "choices": [
    {
      "id": "attend_prepared",
      "text": "Attend with a polished pitch and clear fundraising goals",
      "impact": {
        "founder": {
          "energy": -20,
          "reputation": 15,
          "business": 10
        },
        "company": {
          "valuation": 100000,
          "runway": 1
        }
      }
    },
    {
      "id": "casual_networking",
      "text": "Attend with a focus on building relationships rather than immediate pitching",
      "impact": {
        "founder": {
          "energy": -10,
          "reputation": 10,
          "leadership": 5
        },
        "company": {
          "valuation": 50000,
          "teamMorale": 5
        },
        "location": {
          "networkingScore": 15
        }
      }
    },
    {
      "id": "send_cofounder",
      "text": "Send your cofounder while you focus on improving the product",
      "impact": {
        "founder": {
          "energy": 5,
          "technical": 5
        },
        "company": {
          "productQuality": 10,
          "valuation": 25000
        }
      }
    }
  ]
};

export const industryConference: GameEvent = {
  "id": "industry_conference_001",
  "category": "networking",
  "title": "Industry Conference Keynote",
  "description": "Your growing success has earned you an invitation to deliver a keynote at a major industry conference. This is a significant opportunity for visibility.",
  "conditions": {
    "requiredPhase": GamePhase.SCALING,
    "minimumStats": {
      "founder": {
        "reputation": 70,
        "leadership": 60
      },
      "company": {
        "userGrowth": 70
      }
    }
  },
  "impact": {
    "founder": {},
    "company": {}
  },
  "choices": [
    {
      "id": "accept_keynote",
      "text": "Accept and deliver a visionary keynote about your industry",
      "impact": {
        "founder": {
          "energy": -25,
          "reputation": 30,
          "leadership": 15
        },
        "company": {
          "userGrowth": 20,
          "valuation": 500000,
          "teamMorale": 10
        }
      }
    },
    {
      "id": "product_announcement",
      "text": "Accept and use the opportunity to announce a major new product feature",
      "impact": {
        "founder": {
          "energy": -30,
          "reputation": 25,
          "technical": 10
        },
        "company": {
          "userGrowth": 30,
          "productQuality": 15,
          "marketFit": 20
        }
      }
    },
    {
      "id": "delegate_keynote",
      "text": "Delegate the keynote to your CTO or CMO",
      "impact": {
        "founder": {
          "energy": 5,
          "reputation": 5
        },
        "company": {
          "userGrowth": 10,
          "teamMorale": 15,
          "talent": 10
        }
      }
    }
  ]
}; 