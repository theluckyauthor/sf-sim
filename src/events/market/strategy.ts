import { GameEvent, GamePhase } from '../../types/stats';

export const pivotDecision: GameEvent = {
  "id": "pivot_decision_001",
  "category": "market",
  "title": "Strategic Crossroads",
  "description": "User feedback and market data suggest your product might find better traction in a different direction. Your team is divided on whether to pivot or stay the course.",
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
      "id": "strategic_pivot",
      "text": "Embrace the pivot: Realign the product based on market feedback and emerging opportunities.",
      "successChance": 65,
      "impact": {
        "founder": {},
        "company": {}
      }
    },
    {
      "id": "double_down",
      "text": "Stay the course: Double down on your original vision with targeted improvements.",
      "successChance": 80,
      "impact": {
        "founder": {},
        "company": {}
      }
    }
  ]
};

export const prCrisis: GameEvent = {
  "id": "pr_crisis_001",
  "category": "market",
  "title": "Social Media Firestorm",
  "description": "A controversial tweet from your company account has gone viral, sparking heated debate in the tech community. The situation is escalating quickly.",
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
      "id": "thoughtful_response",
      "text": "Issue a sincere apology, outline concrete changes, and engage with the community.",
      "successChance": 80,
      "impact": {
        "founder": {},
        "company": {}
      }
    },
    {
      "id": "ignore_controversy",
      "text": "Let the controversy die down naturally and focus on product development.",
      "successChance": 30,
      "impact": {
        "founder": {},
        "company": {}
      }
    }
  ]
};

export const competitiveResponse: GameEvent = {
  "id": "competitive_response_001",
  "category": "market",
  "title": "Competitor Emerges",
  "description": "A well-funded startup just launched a similar product. Their marketing is aggressive, and they're targeting your early users.",
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
      "id": "strategic_partnership",
      "text": "Reach out to discuss potential collaboration - the market might be big enough for both.",
      "successChance": 60,
      "impact": {
        "founder": {},
        "company": {}
      }
    },
    {
      "id": "competitive_features",
      "text": "Accelerate your roadmap and launch unique features to differentiate your product.",
      "successChance": 70,
      "impact": {
        "founder": {},
        "company": {}
      }
    }
  ]
}; 