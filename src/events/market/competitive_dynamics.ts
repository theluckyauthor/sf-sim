import { GameEvent, GamePhase } from '../../types/stats';

// Market Positioning Strategy
export const marketPositioningStrategy: GameEvent = {
  "id": "market_positioning_001",
  "category": "market",
  "title": "Strategic Market Position",
  "description": "In response to competitive pressure, you need to clearly define your market position. This decision will shape your product roadmap and marketing strategy.",
  "conditions": {
    "requiredPhase": GamePhase.BOOTSTRAPPING,
    "activeMilestone": "competitive_response_001"
  },
  "impact": {
    "founder": {},
    "company": {}
  },
  "choices": [
    {
      "id": "premium_segment",
      "text": "Position as a premium solution with higher quality and better service.",
      "impact": {
        "founder": {},
        "company": {}
      }
    },
    {
      "id": "market_disruption",
      "text": "Disrupt the market with an innovative approach and aggressive pricing.",
      "impact": {
        "founder": {},
        "company": {}
      }
    }
  ]
};

// Feature Development Race
export const featureDevelopmentRace: GameEvent = {
  "id": "feature_race_001",
  "category": "market",
  "title": "Feature Development Strategy",
  "description": "Competitors are rapidly adding features. You need to decide how to evolve your product while maintaining quality and team focus.",
  "conditions": {
    "requiredPhase": GamePhase.BOOTSTRAPPING,
    "activeMilestone": "premium_positioning_001"
  },
  "impact": {
    "founder": {},
    "company": {}
  },
  "choices": [
    {
      "id": "focused_innovation",
      "text": "Focus on developing unique, innovative features that differentiate your product.",
      "impact": {
        "founder": {},
        "company": {}
      }
    },
    {
      "id": "rapid_parity",
      "text": "Quickly match competitor features while maintaining your core advantages.",
      "impact": {
        "founder": {},
        "company": {}
      }
    }
  ]
};

// Strategic Partnership
export const strategicPartnership: GameEvent = {
  "id": "strategic_partnership_001",
  "category": "market",
  "title": "Partnership Opportunity",
  "description": "A potential strategic partnership could strengthen your market position. You need to evaluate the opportunity and its implications.",
  "conditions": {
    "requiredPhase": GamePhase.BOOTSTRAPPING,
    "activeMilestone": "innovation_focus_001"
  },
  "impact": {
    "founder": {},
    "company": {}
  },
  "choices": [
    {
      "id": "deep_integration",
      "text": "Pursue deep technical integration with a major platform player.",
      "impact": {
        "founder": {},
        "company": {}
      }
    },
    {
      "id": "strategic_alliance",
      "text": "Form a strategic alliance while maintaining product independence.",
      "impact": {
        "founder": {},
        "company": {}
      }
    }
  ]
}; 