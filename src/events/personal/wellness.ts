import { GameEvent, GamePhase } from '../../types/stats';

export const burnoutWarning: GameEvent = {
  "id": "burnout_warning_001",
  "category": "personal",
  "title": "Burnout Warning Signs",
  "description": "You've been working non-stop for weeks. Your body and mind are showing signs of severe fatigue.",
  "conditions": {
    "minimumStats": {
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
      "id": "take_break",
      "text": "Take a week off to recover and implement better work-life boundaries",
      "impact": {
        "founder": {},
        "company": {}
      }
    },
    {
      "id": "push_through",
      "text": "Push through with some minor adjustments to your schedule",
      "impact": {
        "founder": {},
        "company": {}
      }
    }
  ]
};

export const wellnessChallenge: GameEvent = {
  "id": "wellness_challenge_001",
  "category": "personal",
  "title": "Startup Wellness Challenge",
  "description": "A local startup community is organizing a month-long wellness challenge combining exercise, meditation, and healthy eating.",
  "conditions": {
    "minimumStats": {
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
      "id": "join_challenge",
      "text": "Join the challenge and encourage your team to participate",
      "impact": {
        "founder": {},
        "company": {}
      }
    },
    {
      "id": "personal_routine",
      "text": "Create your own personal wellness routine",
      "impact": {
        "founder": {},
        "company": {}
      }
    }
  ]
};

export const mentalHealthDay: GameEvent = {
  "id": "mental_health_day_001",
  "category": "personal",
  "title": "Mental Health Awareness",
  "description": "Your team suggests implementing regular mental health days and wellness programs.",
  "conditions": {
    "minimumStats": {
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
      "id": "implement_program",
      "text": "Implement a comprehensive wellness program",
      "impact": {
        "founder": {},
        "company": {}
      }
    },
    {
      "id": "basic_benefits",
      "text": "Offer basic mental health benefits",
      "impact": {
        "founder": {},
        "company": {}
      }
    }
  ]
};

export const morningRoutine: GameEvent = {
  "id": "morning_routine_001",
  "category": "personal",
  "title": "Establishing Morning Routine",
  "description": "You've been reading about successful founders' morning routines. Maybe it's time to establish your own?",
  "conditions": {
    "requiredPhase": GamePhase.SETTLING_IN,    "minimumStats": {
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
      "id": "wellness_focus",
      "text": "Start each day with exercise, meditation, and healthy breakfast.",
      "impact": {
        "founder": {},
        "company": {}
      }
    },
    {
      "id": "work_focus",
      "text": "Use early morning hours for uninterrupted work and planning.",
      "impact": {
        "founder": {},
        "company": {}
      }
    }
  ]
};

export const criticalBugDecision: GameEvent = {
  "id": "critical_bug_001",
  "category": "personal",
  "title": "Late Night Bug Alert",
  "description": "A major bug is causing the core feature to crash. Your team just reported it, and an important demo is scheduled for tomorrow morning. Your energy is already low from a long week.",
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
      "id": "work_through_night",
      "text": "Power through: Order pizza and energy drinks, work until the bug is fixed.",
      "successChance": 70,
      "impact": {
        "founder": {},
        "company": {}
      }
    },
    {
      "id": "take_break",
      "text": "Take a break: Get some rest and tackle it fresh in the early morning.",
      "impact": {
        "founder": {},
        "company": {}
      }
    }
  ]
};

export const aftermathReflection: GameEvent = {
  "id": "bug_aftermath_001",
  "category": "personal",
  "title": "Morning After",
  "description": "The critical bug situation is resolved, but the experience has sparked team discussions about sustainable work practices.",
  "conditions": {
    "requiredPhase": GamePhase.BOOTSTRAPPING,    "activeMilestone": "crisis_management_001"
  },
  "impact": {
    "founder": {},
    "company": {}
  },
  "choices": [
    {
      "id": "establish_guidelines",
      "text": "Create clear emergency protocols and work-life boundaries for the team.",
      "impact": {
        "founder": {},
        "company": {}
      }
    },
    {
      "id": "maintain_flexibility",
      "text": "Keep things informal - the team should handle crises as they come.",
      "impact": {
        "founder": {},
        "company": {}
      }
    }
  ]
};

export const healthyHabits: GameEvent = {
  "id": "healthy_habits_001",
  "category": "personal",
  "title": "Establishing Healthy Habits",
  "description": "As you settle into startup life, it's time to establish sustainable habits. How will you approach your personal well-being?",
  "conditions": {
    "requiredPhase": GamePhase.SETTLING_IN,    "minimumStats": {
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
      "id": "structured_routine",
      "text": "Create a structured daily routine with dedicated time for exercise and meditation",
      "successChance": 75,
      "impact": {
        "founder": {},
        "company": {}
      }
    },
    {
      "id": "flexible_approach",
      "text": "Keep it flexible - exercise when possible and maintain work-life boundaries",
      "impact": {
        "founder": {},
        "company": {}
      }
    }
  ]
};

export const mentalPreparation: GameEvent = {
  "id": "mental_preparation_001",
  "category": "personal",
  "title": "Mental Preparation",
  "description": "The ideation phase is mentally demanding. How will you prepare yourself for the challenges ahead?",
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
      "id": "mindfulness_practice",
      "text": "Start a daily mindfulness practice and join a founder support group",
      "successChance": 80,
      "impact": {
        "founder": {},
        "company": {}
      }
    },
    {
      "id": "physical_focus",
      "text": "Focus on physical exercise and outdoor activities to maintain mental clarity",
      "impact": {
        "founder": {},
        "company": {}
      }
    }
  ]
};

export const stressManagement: GameEvent = {
  "id": "stress_management_001",
  "category": "personal",
  "title": "Fundraising Stress Management",
  "description": "The intense pressure of fundraising is taking its toll. How will you manage the stress while maintaining peak performance?",
  "conditions": {
    "requiredPhase": GamePhase.FUNDRAISING,    "minimumStats": {
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
      "id": "professional_support",
      "text": "Seek professional support through therapy and executive coaching",
      "successChance": 85,
      "impact": {
        "founder": {},
        "company": {}
      }
    },
    {
      "id": "peer_support",
      "text": "Build a support network of fellow founders going through fundraising",
      "impact": {
        "founder": {},
        "company": {}
      }
    }
  ]
};

export const executiveWellness: GameEvent = {
  "id": "executive_wellness_001",
  "category": "personal",
  "title": "Executive Wellness Program",
  "description": "As the company scales rapidly, you need to maintain your health and effectiveness as a leader. How will you prioritize your well-being?",
  "conditions": {
    "requiredPhase": GamePhase.SCALING,    "minimumStats": {
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
      "id": "comprehensive_program",
      "text": "Invest in a comprehensive executive wellness program with personal trainers and health monitoring",
      "successChance": 80,
      "impact": {
        "founder": {},
        "company": {}
      }
    },
    {
      "id": "work_life_integration",
      "text": "Focus on work-life integration and lead by example in maintaining boundaries",
      "impact": {
        "founder": {},
        "company": {}
      }
    }
  ]
}; 