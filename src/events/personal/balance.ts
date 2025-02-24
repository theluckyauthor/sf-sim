import { GameEvent, GamePhase } from '../../types/stats';

export const fridayNightChoice: GameEvent = {
  "id": "friday_night_001",
  "category": "personal",
  "title": "Friday Night Plans",
  "description": "It's been a long week, and you've got competing invites: drinks with tech friends at a trendy SOMA bar or catching up on important work in your quiet office.",
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
      "id": "networking_night",
      "text": "Join the tech crowd: Network, relax, and maybe learn some industry gossip.",
      "impact": {
        "founder": {},
        "company": {}
      }
    },
    {
      "id": "productive_evening",
      "text": "Stay at the office: Focus on work while everyone else is out.",
      "impact": {
        "founder": {},
        "company": {}
      }
    }
  ]
};

export const fundraisingWorkshop: GameEvent = {
  "id": "fundraising_workshop_001",
  "category": "personal",
  "title": "Advanced Fundraising Workshop",
  "description": "A renowned VC firm is hosting an intensive fundraising workshop. It's a full-day commitment, but could provide valuable insights and connections.",
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
      "id": "attend_workshop",
      "text": "Invest the day in learning and networking with potential investors.",
      "successChance": 85,
      "impact": {
        "founder": {},
        "company": {}
      }
    },
    {
      "id": "focus_product",
      "text": "Skip the workshop and maintain momentum on product development.",
      "impact": {
        "founder": {},
        "company": {}
      }
    }
  ]
};

export const selfCareDecision: GameEvent = {
  "id": "self_care_001",
  "category": "personal",
  "title": "Wellness Investment",
  "description": "Your advisor suggests taking better care of yourself. There's a highly-rated meditation studio nearby, and several founders swear by the new boutique gym.",
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
      "id": "meditation_practice",
      "text": "Join the meditation studio: Focus on mental clarity and stress management.",
      "impact": {
        "founder": {},
        "company": {}
      }
    },
    {
      "id": "fitness_routine",
      "text": "Sign up for the gym: Build physical stamina and network with other founders.",
      "impact": {
        "founder": {},
        "company": {}
      }
    }
  ]
};

export const lifestyleSetup: GameEvent = {
  "id": "lifestyle_setup_001",
  "category": "personal",
  "title": "Lifestyle Setup",
  "description": "As you begin your startup journey, it's time to set up your new lifestyle in San Francisco. How will you structure your personal life?",
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
      "id": "community_focus",
      "text": "Join local communities and establish social connections in the startup ecosystem",
      "successChance": 80,
      "impact": {
        "founder": {},
        "company": {}
      }
    },
    {
      "id": "personal_space",
      "text": "Focus on creating a comfortable personal space and routine outside of work",
      "impact": {
        "founder": {},
        "company": {}
      }
    }
  ]
};

export const passionProject: GameEvent = {
  "id": "passion_project_001",
  "category": "personal",
  "title": "Side Project Opportunity",
  "description": "You have an idea for a small side project that could help you stay creative during the ideation phase. How will you approach it?",
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
      "id": "weekend_project",
      "text": "Work on it during weekends as a creative outlet",
      "successChance": 75,
      "impact": {
        "founder": {},
        "company": {}
      }
    },
    {
      "id": "put_aside",
      "text": "Put it aside and maintain complete focus on the startup",
      "impact": {
        "founder": {},
        "company": {}
      }
    }
  ]
};

export const familyTime: GameEvent = {
  "id": "family_time_001",
  "category": "personal",
  "title": "Family Commitments",
  "description": "Important family events are coming up during a critical fundraising period. How will you balance these commitments?",
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
      "id": "prioritize_family",
      "text": "Make time for family events while managing investor meetings around them",
      "successChance": 70,
      "impact": {
        "founder": {},
        "company": {}
      }
    },
    {
      "id": "focus_fundraising",
      "text": "Postpone family commitments to focus on closing the funding round",
      "impact": {
        "founder": {},
        "company": {}
      }
    }
  ]
};

export const leadershipLifestyle: GameEvent = {
  "id": "leadership_lifestyle_001",
  "category": "personal",
  "title": "Leadership Lifestyle Balance",
  "description": "As a startup leader scaling a company, you need to find a sustainable way to manage your increasing responsibilities and personal life.",
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
      "id": "delegate_balance",
      "text": "Delegate more responsibilities and create structured personal time",
      "successChance": 80,
      "impact": {
        "founder": {},
        "company": {}
      }
    },
    {
      "id": "integrated_approach",
      "text": "Integrate personal activities with business networking and team events",
      "impact": {
        "founder": {},
        "company": {}
      }
    }
  ]
}; 