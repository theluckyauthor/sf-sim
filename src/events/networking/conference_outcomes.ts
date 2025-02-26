import { GameEvent, GamePhase } from '../../types/stats';

// Media Coverage Strategy
export const mediaExposureStrategy: GameEvent = {
  "id": "media_exposure_001",
  "category": "networking",
  "title": "Media Momentum",
  "description": "After TechCrunch Disrupt, you have media attention. You need to decide how to leverage this exposure.",
  "conditions": {
    "requiredPhase": GamePhase.BOOTSTRAPPING,    "activeMilestone": "conference_exposure_001"
  },
  "impact": {
    "founder": {
      "energy": -5,
      "reputation": 8
    },
    "company": {
      "userGrowth": 5,
      "valuation": 20000
    }
  },
  "choices": [
    {
      "id": "thought_leadership",
      "text": "Position yourself as a thought leader with industry insights and vision pieces.",
      "impact": {
        "founder": {
          "energy": -10,
          "leadership": 15,
          "reputation": 20,
          "business": 5
        },
        "company": {
          "valuation": 100000,
          "marketFit": 5,
          "userGrowth": 8
        }
      }
    },
    {
      "id": "product_spotlight",
      "text": "Focus media attention on product innovations and user success stories.",
      "impact": {
        "founder": {
          "energy": -8,
          "technical": 10,
          "reputation": 12
        },
        "company": {
          "productQuality": 10,
          "userGrowth": 15,
          "valuation": 80000
        }
      }
    }
  ]
};

// Partnership Development
export const partnershipDevelopment: GameEvent = {
  "id": "partnership_development_001",
  "category": "networking",
  "title": "Strategic Partnerships",
  "description": "Conference connections have led to partnership opportunities. You need to choose which relationships to prioritize.",
  "conditions": {
    "requiredPhase": GamePhase.BOOTSTRAPPING,    "activeMilestone": "thought_leadership_001"
  },
  "impact": {
    "founder": {
      "energy": -8,
      "business": 5,
      "reputation": 5
    },
    "company": {
      "marketFit": 3,
      "valuation": 15000
    }
  },
  "choices": [
    {
      "id": "enterprise_focus",
      "text": "Pursue enterprise partnerships with established tech companies.",
      "impact": {
        "founder": {
          "energy": -15,
          "business": 12,
          "leadership": 8,
          "reputation": 10
        },
        "company": {
          "valuation": 200000,
          "revenue": 50000,
          "marketFit": 10,
          "teamMorale": -5
        }
      }
    },
    {
      "id": "startup_ecosystem",
      "text": "Build relationships with complementary startups for mutual growth.",
      "impact": {
        "founder": {
          "energy": -10,
          "business": 8,
          "leadership": 5,
          "reputation": 8
        },
        "company": {
          "valuation": 80000,
          "revenue": 20000,
          "marketFit": 15,
          "teamMorale": 10,
          "userGrowth": 12
        }
      }
    }
  ]
};

// Investor Relationship Building
export const investorRelationshipBuilding: GameEvent = {
  "id": "investor_relationship_001",
  "category": "networking",
  "title": "Investor Strategy",
  "description": "Conference networking has opened doors with multiple investors. You need to decide how to nurture these relationships.",
  "conditions": {
    "requiredPhase": GamePhase.BOOTSTRAPPING,    "activeMilestone": "enterprise_partnership_001"
  },
  "impact": {
    "founder": {
      "energy": -5,
      "business": 3,
      "reputation": 5
    },
    "company": {
      "valuation": 25000
    }
  },
  "choices": [
    {
      "id": "strategic_investors",
      "text": "Focus on investors who can provide strategic value beyond capital.",
      "impact": {
        "founder": {
          "energy": -10,
          "business": 15,
          "leadership": 10,
          "reputation": 8
        },
        "company": {
          "valuation": 150000,
          "marketFit": 12,
          "productQuality": 8,
          "teamMorale": 5,
          "talent": 10
        }
      }
    },
    {
      "id": "financial_optimization",
      "text": "Prioritize investors offering the best financial terms and valuation.",
      "impact": {
        "founder": {
          "energy": -8,
          "business": 10,
          "cash": 200000,
          "reputation": 5
        },
        "company": {
          "valuation": 300000,
          "runway": 12,
          "teamMorale": -3
        }
      }
    }
  ]
}; 