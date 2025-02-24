import { GameEvent, GamePhase } from '../../types/stats';

// Process Improvement Event
export const processReview: GameEvent = {
  "id": "process_review_001",
  "category": "product",
  "title": "Process Review Meeting",
  "description": "After the critical bug incident, the team wants to discuss improving development and QA processes. This could mean significant changes to how you work.",
  "conditions": {
    "requiredPhase": GamePhase.BOOTSTRAPPING,    "activeMilestone": "crisis_management_001"
  },
  "impact": {
    "founder": {},
    "company": {}
  },
  "choices": [
    {
      "id": "comprehensive_process",
      "text": "Implement comprehensive testing and code review processes, even if it slows development.",
      "impact": {
        "founder": {},
        "company": {}
      }
    },
    {
      "id": "balanced_approach",
      "text": "Add key safeguards while maintaining development speed.",
      "impact": {
        "founder": {},
        "company": {}
      }
    }
  ]
};

// Technical Debt Management
export const technicalDebtCrisis: GameEvent = {
  "id": "technical_debt_001",
  "category": "product",
  "title": "Technical Debt Reckoning",
  "description": "The post-mortem reveals significant technical debt that contributed to the bug. The team is divided on how to address it.",
  "conditions": {
    "requiredPhase": GamePhase.BOOTSTRAPPING,    "activeMilestone": "quality_first_001"
  },
  "impact": {
    "founder": {},
    "company": {}
  },
  "choices": [
    {
      "id": "major_refactor",
      "text": "Pause new features for a major codebase refactoring sprint.",
      "impact": {
        "founder": {},
        "company": {}
      }
    },
    {
      "id": "gradual_improvement",
      "text": "Address technical debt gradually alongside new features.",
      "impact": {
        "founder": {},
        "company": {}
      }
    }
  ]
};

// Team Culture Impact
export const teamCultureFallout: GameEvent = {
  "id": "team_culture_crisis_001",
  "category": "product",
  "title": "Team Culture Moment",
  "description": "The bug crisis has sparked discussions about work-life balance and on-call responsibilities. The team needs clear direction.",
  "conditions": {
    "requiredPhase": GamePhase.BOOTSTRAPPING,    "activeMilestone": "codebase_cleanup_001"
  },
  "impact": {
    "founder": {},
    "company": {}
  },
  "choices": [
    {
      "id": "structured_support",
      "text": "Implement structured on-call rotations and clear emergency procedures.",
      "impact": {
        "founder": {},
        "company": {}
      }
    },
    {
      "id": "flexible_approach",
      "text": "Keep things flexible but provide additional compensation for crisis management.",
      "impact": {
        "founder": {},
        "company": {}
      }
    }
  ]
};

// Crisis Prevention System
export const crisisPreventionPlanning: GameEvent = {
  "id": "crisis_prevention_001",
  "category": "product",
  "title": "Crisis Prevention Planning",
  "description": "With processes improving and culture stabilizing, it's time to implement systems to prevent future crises.",
  "conditions": {
    "requiredPhase": GamePhase.BOOTSTRAPPING,    "activeMilestone": "sustainable_culture_001"
  },
  "impact": {
    "founder": {},
    "company": {}
  },
  "choices": [
    {
      "id": "automated_systems",
      "text": "Invest in comprehensive monitoring and automated response systems.",
      "impact": {
        "founder": {},
        "company": {}
      }
    },
    {
      "id": "human_centered",
      "text": "Focus on team training and human-centered prevention strategies.",
      "impact": {
        "founder": {},
        "company": {}
      }
    }
  ]
}; 