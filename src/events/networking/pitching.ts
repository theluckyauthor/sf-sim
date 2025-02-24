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
    "founder": {},
    "company": {}
  },
  "choices": [
    {
      "id": "prepare_thoroughly",
      "text": "Spend several days preparing a polished pitch with detailed slides and practice sessions.",
      "successChance": 85,
      "impact": {
        "founder": {},
        "company": {}
      }
    },
    {
      "id": "wing_it",
      "text": "Trust your instincts and natural charisma - focus on authentic storytelling without formal preparation.",
      "successChance": 40,
      "impact": {
        "founder": {},
        "company": {}
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
    "founder": {},
    "company": {}
  },
  "choices": [
    {
      "id": "accept_feedback",
      "text": "Accept the feedback session and be open to criticism.",
      "impact": {
        "founder": {},
        "company": {}
      }
    },
    {
      "id": "polite_decline",
      "text": "Politely decline, preferring to maintain your current vision.",
      "impact": {
        "founder": {},
        "company": {}
      }
    }
  ]
}; 