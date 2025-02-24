import { GameEvent, GamePhase } from '../../types/stats';

// Team Building Initiative
export const teamBuildingInitiative: GameEvent = {
  "id": "team_building_initiative_001",
  "category": "team",
  "title": "Rebuilding Team Unity",
  "description": "After the recent conflict, the team needs structured rebuilding efforts. You have to choose how to approach team healing and unity.",
  "conditions": {
    "requiredPhase": GamePhase.BOOTSTRAPPING,    "activeMilestone": "team_conflict_resolution_001"
  },
  "impact": {
    "founder": {},
    "company": {}
  },
  "choices": [
    {
      "id": "structured_workshops",
      "text": "Invest in professional team-building workshops and conflict resolution training.",
      "impact": {
        "founder": {},
        "company": {}
      }
    },
    {
      "id": "organic_activities",
      "text": "Organize informal team activities and create natural bonding opportunities.",
      "impact": {
        "founder": {},
        "company": {}
      }
    }
  ]
};

// Culture Reinforcement
export const cultureReinforcement: GameEvent = {
  "id": "culture_reinforcement_001",
  "category": "team",
  "title": "Culture Code Evolution",
  "description": "The recent conflict highlighted the need for stronger cultural foundations. It's time to formalize or adjust company values and practices.",
  "conditions": {
    "requiredPhase": GamePhase.BOOTSTRAPPING,    "activeMilestone": "professional_development_001"
  },
  "impact": {
    "founder": {},
    "company": {}
  },
  "choices": [
    {
      "id": "formal_values",
      "text": "Create a detailed culture document with explicit values and practices.",
      "impact": {
        "founder": {},
        "company": {}
      }
    },
    {
      "id": "lived_values",
      "text": "Focus on demonstrating values through leadership actions and daily practices.",
      "impact": {
        "founder": {},
        "company": {}
      }
    }
  ]
};

// Hiring Strategy Adjustment
export const hiringStrategyAdjustment: GameEvent = {
  "id": "hiring_strategy_adjustment_001",
  "category": "team",
  "title": "Future Team Building",
  "description": "Learning from past conflicts, you need to adjust your hiring strategy to build a more cohesive team.",
  "conditions": {
    "requiredPhase": GamePhase.BOOTSTRAPPING,    "activeMilestone": "culture_codification_001"
  },
  "impact": {
    "founder": {},
    "company": {}
  },
  "choices": [
    {
      "id": "culture_first",
      "text": "Prioritize cultural fit and soft skills in hiring, even if technical skills are slightly lower.",
      "impact": {
        "founder": {},
        "company": {}
      }
    },
    {
      "id": "skills_first",
      "text": "Focus on technical excellence with enhanced onboarding for cultural integration.",
      "impact": {
        "founder": {},
        "company": {}
      }
    }
  ]
}; 