import { GameEvent, GamePhase } from '../../types/stats';

// Work-Life Balance Initiative
export const workLifeBalanceInitiative: GameEvent = {
  "id": "work_life_balance_001",
  "category": "personal",
  "title": "Sustainable Work Culture",
  "description": "After recognizing burnout symptoms, you need to establish sustainable work practices for yourself and the team.",
  "conditions": {
    "requiredPhase": GamePhase.BOOTSTRAPPING,    "activeMilestone": "burnout_warning_001"
  },
  "impact": {
    "founder": {},
    "company": {}
  },
  "choices": [
    {
      "id": "structured_boundaries",
      "text": "Implement strict work hours and communication boundaries for everyone.",
      "impact": {
        "founder": {},
        "company": {}
      }
    },
    {
      "id": "flexible_autonomy",
      "text": "Promote flexible schedules and trust team members to manage their time.",
      "impact": {
        "founder": {},
        "company": {}
      }
    }
  ]
};

// Team Wellness Program
export const teamWellnessProgram: GameEvent = {
  "id": "team_wellness_001",
  "category": "personal",
  "title": "Team Wellness Initiative",
  "description": "The team needs structured support for maintaining mental and physical health while pursuing ambitious goals.",
  "conditions": {
    "requiredPhase": GamePhase.BOOTSTRAPPING,    "activeMilestone": "work_boundaries_001"
  },
  "impact": {
    "founder": {},
    "company": {}
  },
  "choices": [
    {
      "id": "comprehensive_benefits",
      "text": "Invest in comprehensive wellness benefits and mental health support.",
      "impact": {
        "founder": {},
        "company": {}
      }
    },
    {
      "id": "team_activities",
      "text": "Organize regular team wellness activities and workshops.",
      "impact": {
        "founder": {},
        "company": {}
      }
    }
  ]
};

// Leadership Style Evolution
export const leadershipStyleEvolution: GameEvent = {
  "id": "leadership_evolution_001",
  "category": "personal",
  "title": "Sustainable Leadership",
  "description": "Your leadership style needs to evolve to better support long-term sustainability while maintaining startup momentum.",
  "conditions": {
    "requiredPhase": GamePhase.BOOTSTRAPPING,    "activeMilestone": "wellness_benefits_001"
  },
  "impact": {
    "founder": {},
    "company": {}
  },
  "choices": [
    {
      "id": "empowerment_focus",
      "text": "Focus on empowering the team through delegation and mentorship.",
      "impact": {
        "founder": {},
        "company": {}
      }
    },
    {
      "id": "balanced_leadership",
      "text": "Develop a balanced approach between hands-on leadership and delegation.",
      "impact": {
        "founder": {},
        "company": {}
      }
    }
  ]
}; 