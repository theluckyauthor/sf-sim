import { GameEvent, GamePhase } from '../../types/stats';

export const potentialCofounder: GameEvent = {
  "id": "potential_cofounder_001",
  "category": "team",
  "title": "Mission District Coffee Connection",
  "description": "At Ritual Coffee Roasters, you hit it off with a talented engineer who's looking to join an early-stage startup. They have impressive technical skills and startup experience, but you're still getting to know them personally.",
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
      "id": "professional_evaluation",
      "text": "Focus on professional compatibility - spend time coding together and discussing technical vision.",
      "successChance": 75,
      "impact": {
        "founder": {},
        "company": {}
      }
    },
    {
      "id": "personal_connection",
      "text": "Prioritize personal rapport - spend time understanding their values and long-term aspirations.",
      "successChance": 60,
      "impact": {
        "founder": {},
        "company": {}
      }
    }
  ]
};

export const cofounderAlignment: GameEvent = {
  "id": "cofounder_alignment_001",
  "category": "team",
  "title": "Setting Co-Founder Expectations",
  "description": "Time to formalize your co-founder relationship. You need to align on equity split, roles, and decision-making processes.",
  "conditions": {
    "requiredPhase": GamePhase.IDEATION,    "activeMilestone": "cofounder_technical_001"
  },
  "impact": {
    "founder": {},
    "company": {}
  },
  "choices": [
    {
      "id": "structured_agreement",
      "text": "Create a detailed co-founder agreement with clear roles, expectations, and vesting schedule.",
      "impact": {
        "founder": {},
        "company": {}
      }
    },
    {
      "id": "flexible_partnership",
      "text": "Keep the arrangement more flexible and informal, focusing on building trust.",
      "successChance": 50,
      "impact": {
        "founder": {},
        "company": {}
      }
    }
  ]
};

export const cofounderOnboarding: GameEvent = {
  "id": "cofounder_onboarding_001",
  "category": "team",
  "title": "First Week as Co-Founders",
  "description": "Your co-founder is ready to start. How will you begin working together?",
  "conditions": {
    "requiredPhase": GamePhase.IDEATION,    "activeMilestone": "cofounder_agreement_001"
  },
  "impact": {
    "founder": {},
    "company": {}
  },
  "choices": [
    {
      "id": "intensive_sync",
      "text": "Spend the week in intense planning and coding sessions to align on everything.",
      "impact": {
        "founder": {},
        "company": {}
      }
    },
    {
      "id": "gradual_integration",
      "text": "Take a more measured approach, mixing work sessions with team-building activities.",
      "impact": {
        "founder": {},
        "company": {}
      }
    }
  ]
}; 