import { GameEvent, GamePhase } from '../../types/stats';

// Product Roadmap Strategy
export const productRoadmapStrategy: GameEvent = {
  "id": "product_roadmap_001",
  "category": "product",
  "title": "Product Direction",
  "description": "Based on feature validation results, you need to define the product roadmap strategy. This will shape development priorities and resource allocation.",
  "conditions": {
    "requiredPhase": GamePhase.BOOTSTRAPPING,    "activeMilestone": "feature_validation_001"
  },
  "impact": {
    "founder": {
      "energy": -5,
      "technical": 3,
      "leadership": 2
    },
    "company": {
      "productQuality": 3
    }
  },
  "choices": [
    {
      "id": "depth_focus",
      "text": "Focus on deepening existing features based on power user feedback.",
      "impact": {
        "founder": {
          "energy": -10,
          "technical": 12,
          "leadership": 5
        },
        "company": {
          "productQuality": 15,
          "marketFit": 10,
          "userGrowth": 5,
          "teamMorale": 8
        }
      }
    },
    {
      "id": "breadth_expansion",
      "text": "Expand feature set to capture broader market segments.",
      "impact": {
        "founder": {
          "energy": -15,
          "technical": 8,
          "business": 10,
          "leadership": 3
        },
        "company": {
          "productQuality": 5,
          "marketFit": 15,
          "userGrowth": 12,
          "teamMorale": 5
        }
      }
    }
  ]
};

// User Feedback Integration
export const userFeedbackIntegration: GameEvent = {
  "id": "feedback_integration_001",
  "category": "product",
  "title": "Feedback Implementation",
  "description": "You need to establish a systematic approach to integrating user feedback into the development process.",
  "conditions": {
    "requiredPhase": GamePhase.BOOTSTRAPPING,    "activeMilestone": "feature_depth_001"
  },
  "impact": {
    "founder": {
      "energy": -3,
      "technical": 2,
      "leadership": 2
    },
    "company": {
      "productQuality": 2,
      "marketFit": 3
    }
  },
  "choices": [
    {
      "id": "data_driven",
      "text": "Implement comprehensive analytics and automated feedback collection.",
      "impact": {
        "founder": {
          "energy": -8,
          "technical": 10,
          "business": 5
        },
        "company": {
          "productQuality": 12,
          "marketFit": 15,
          "userGrowth": 8,
          "teamMorale": -3,
          "revenue": 5000
        }
      }
    },
    {
      "id": "community_driven",
      "text": "Focus on direct user engagement and community feedback channels.",
      "impact": {
        "founder": {
          "energy": -12,
          "leadership": 8,
          "reputation": 10
        },
        "company": {
          "productQuality": 8,
          "marketFit": 12,
          "userGrowth": 15,
          "teamMorale": 10
        }
      }
    }
  ]
};

// Product Scaling Strategy
export const productScalingStrategy: GameEvent = {
  "id": "product_scaling_001",
  "category": "product",
  "title": "Scaling Approach",
  "description": "With validated features and established feedback loops, you need to decide how to scale the product.",
  "conditions": {
    "requiredPhase": GamePhase.BOOTSTRAPPING,    "activeMilestone": "data_feedback_001"
  },
  "impact": {
    "founder": {
      "energy": -5,
      "technical": 3,
      "business": 3
    },
    "company": {
      "productQuality": 5,
      "userGrowth": 3
    }
  },
  "choices": [
    {
      "id": "vertical_scaling",
      "text": "Focus on scaling depth and performance of core features.",
      "impact": {
        "founder": {
          "energy": -10,
          "technical": 15,
          "leadership": 5
        },
        "company": {
          "productQuality": 20,
          "marketFit": 10,
          "userGrowth": 5,
          "revenue": 10000,
          "teamMorale": 8
        }
      }
    },
    {
      "id": "horizontal_scaling",
      "text": "Expand platform capabilities and integration options.",
      "impact": {
        "founder": {
          "energy": -15,
          "technical": 10,
          "business": 12,
          "leadership": 8
        },
        "company": {
          "productQuality": 8,
          "marketFit": 15,
          "userGrowth": 15,
          "revenue": 20000,
          "valuation": 100000
        }
      }
    }
  ]
}; 