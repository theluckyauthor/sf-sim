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
    "founder": {
      "energy": -5,
      "technical": 3,
      "leadership": 2
    },
    "company": {
      "teamMorale": -3,
      "productQuality": 2
    }
  },
  "choices": [
    {
      "id": "comprehensive_process",
      "text": "Implement comprehensive testing and code review processes, even if it slows development.",
      "impact": {
        "founder": {
          "energy": -10,
          "technical": 12,
          "leadership": 8
        },
        "company": {
          "productQuality": 20,
          "teamMorale": 5,
          "userGrowth": -5,
          "talent": 10
        }
      }
    },
    {
      "id": "balanced_approach",
      "text": "Add key safeguards while maintaining development speed.",
      "impact": {
        "founder": {
          "energy": -5,
          "technical": 5,
          "leadership": 3
        },
        "company": {
          "productQuality": 8,
          "teamMorale": 10,
          "userGrowth": 5,
          "talent": 5
        }
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
    "founder": {
      "energy": -8,
      "technical": 5,
      "leadership": -2
    },
    "company": {
      "teamMorale": -5,
      "productQuality": -3
    }
  },
  "choices": [
    {
      "id": "major_refactor",
      "text": "Pause new features for a major codebase refactoring sprint.",
      "impact": {
        "founder": {
          "energy": -15,
          "technical": 15,
          "leadership": 5
        },
        "company": {
          "productQuality": 25,
          "teamMorale": 10,
          "userGrowth": -10,
          "revenue": -5000
        }
      }
    },
    {
      "id": "gradual_improvement",
      "text": "Address technical debt gradually alongside new features.",
      "impact": {
        "founder": {
          "energy": -8,
          "technical": 8,
          "leadership": 3
        },
        "company": {
          "productQuality": 10,
          "teamMorale": 5,
          "userGrowth": 5,
          "revenue": 5000
        }
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
    "founder": {
      "energy": -5,
      "leadership": 3,
      "reputation": -2
    },
    "company": {
      "teamMorale": -8,
      "talent": -3
    }
  },
  "choices": [
    {
      "id": "structured_support",
      "text": "Implement structured on-call rotations and clear emergency procedures.",
      "impact": {
        "founder": {
          "energy": -5,
          "leadership": 12,
          "reputation": 5
        },
        "company": {
          "teamMorale": 15,
          "talent": 10,
          "productQuality": 8,
          "teamSize": -1
        }
      }
    },
    {
      "id": "flexible_approach",
      "text": "Keep things flexible but provide additional compensation for crisis management.",
      "impact": {
        "founder": {
          "energy": -8,
          "leadership": 5,
          "cash": -10000
        },
        "company": {
          "teamMorale": 10,
          "talent": 5,
          "productQuality": 3,
          "runway": -1
        }
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
    "founder": {
      "energy": -5,
      "technical": 3,
      "leadership": 5
    },
    "company": {
      "productQuality": 5,
      "teamMorale": 3
    }
  },
  "choices": [
    {
      "id": "automated_systems",
      "text": "Invest in comprehensive monitoring and automated response systems.",
      "impact": {
        "founder": {
          "energy": -8,
          "technical": 15,
          "cash": -15000
        },
        "company": {
          "productQuality": 20,
          "teamMorale": 5,
          "talent": 8,
          "runway": -2
        }
      }
    },
    {
      "id": "human_centered",
      "text": "Focus on team training and human-centered prevention strategies.",
      "impact": {
        "founder": {
          "energy": -12,
          "leadership": 12,
          "reputation": 8,
          "cash": -5000
        },
        "company": {
          "productQuality": 10,
          "teamMorale": 15,
          "talent": 12,
          "runway": -1
        }
      }
    }
  ]
}; 