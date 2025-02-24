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
    "founder": {},
    "company": {}
  },
  "choices": [
    {
      "id": "depth_focus",
      "text": "Focus on deepening existing features based on power user feedback.",
      "impact": {
        "founder": {},
        "company": {}
      }
    },
    {
      "id": "breadth_expansion",
      "text": "Expand feature set to capture broader market segments.",
      "impact": {
        "founder": {},
        "company": {}
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
    "founder": {},
    "company": {}
  },
  "choices": [
    {
      "id": "data_driven",
      "text": "Implement comprehensive analytics and automated feedback collection.",
      "impact": {
        "founder": {},
        "company": {}
      }
    },
    {
      "id": "community_driven",
      "text": "Focus on direct user engagement and community feedback channels.",
      "impact": {
        "founder": {},
        "company": {}
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
    "founder": {},
    "company": {}
  },
  "choices": [
    {
      "id": "vertical_scaling",
      "text": "Focus on scaling depth and performance of core features.",
      "impact": {
        "founder": {},
        "company": {}
      }
    },
    {
      "id": "horizontal_scaling",
      "text": "Expand platform capabilities and integration options.",
      "impact": {
        "founder": {},
        "company": {}
      }
    }
  ]
}; 