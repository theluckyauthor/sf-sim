import { GameEvent, GamePhase } from '../../types/stats';

export const localDemoPitch: GameEvent = {
  "id": "local_demo_pitch_001",
  "category": "networking",
  "title": "Local Demo Day Opportunity",
  "description": "A community organizer invites you to pitch at an upcoming demo day. The audience will include local founders, angel investors, and tech enthusiasts. You have limited time to prepare.",
  "conditions": {
    "requiredPhase": GamePhase.IDEATION,    "minimumStats": {
      "founder": {},
      "company": {}
    }
  },
  "impact": {
    "founder": {
      "energy": -5,
      "reputation": 3
    },
    "company": {
      "marketFit": 2
    }
  },
  "choices": [
    {
      "id": "prepare_thoroughly",
      "text": "Spend several days preparing a polished pitch with detailed slides and practice sessions.",
      "successChance": 85,
      "impact": {
        "founder": {
          "energy": -15,
          "business": 8,
          "leadership": 5,
          "reputation": 12
        },
        "company": {
          "valuation": 50000,
          "marketFit": 8,
          "userGrowth": 5
        }
      }
    },
    {
      "id": "wing_it",
      "text": "Trust your instincts and natural charisma - focus on authentic storytelling without formal preparation.",
      "successChance": 40,
      "impact": {
        "founder": {
          "energy": -5,
          "leadership": 3,
          "reputation": 5
        },
        "company": {
          "valuation": 20000,
          "marketFit": 3,
          "userGrowth": 2
        }
      }
    }
  ]
};

export const pitchFeedback: GameEvent = {
  "id": "pitch_feedback_001",
  "category": "networking",
  "title": "Post-Pitch Feedback Session",
  "description": "After your demo day presentation, several experienced founders offer to give you detailed feedback over coffee.",
  "conditions": {
    "requiredPhase": GamePhase.IDEATION,    "activeMilestone": "first_public_pitch_001"
  },
  "impact": {
    "founder": {
      "energy": -3,
      "reputation": 2
    },
    "company": {
      "marketFit": 1
    }
  },
  "choices": [
    {
      "id": "accept_feedback",
      "text": "Accept the feedback session and be open to criticism.",
      "impact": {
        "founder": {
          "energy": -8,
          "business": 10,
          "technical": 5,
          "leadership": 3,
          "reputation": 5
        },
        "company": {
          "productQuality": 8,
          "marketFit": 10,
          "userGrowth": 5
        }
      }
    },
    {
      "id": "polite_decline",
      "text": "Politely decline, preferring to maintain your current vision.",
      "impact": {
        "founder": {
          "energy": 5,
          "leadership": -2,
          "reputation": -3
        },
        "company": {
          "productQuality": -2,
          "marketFit": -5
        }
      }
    }
  ]
}; 