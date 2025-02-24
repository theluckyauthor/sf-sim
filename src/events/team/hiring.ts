import { GameEvent, GamePhase } from '../../types/stats';

export const firstHire: GameEvent = {
  "id": "first_hire_001",
  "category": "team",
  "title": "First Engineering Hire",
  "description": "A talented engineer you met at a hackathon is interested in joining your startup. This could be your first key hire.",
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
      "id": "offer_equity",
      "text": "Offer a lower salary but significant equity to align long-term interests.",
      "successChance": 75,
      "impact": {
        "founder": {},
        "company": {}
      }
    },
    {
      "id": "competitive_salary",
      "text": "Offer a competitive market salary to secure the talent immediately.",
      "successChance": 90,
      "impact": {
        "founder": {},
        "company": {}
      }
    }
  ]
};

export const teamCulture: GameEvent = {
  "id": "team_culture_001",
  "category": "team",
  "title": "Team Culture Initiative",
  "description": "As your team grows, it's time to actively shape the company culture. How will you approach this?",
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
      "id": "work_life_balance",
      "text": "Establish clear work-life boundaries and flexible working hours.",
      "impact": {
        "founder": {},
        "company": {}
      }
    },
    {
      "id": "startup_hustle",
      "text": "Foster a high-energy, mission-driven culture focused on rapid growth.",
      "impact": {
        "founder": {},
        "company": {}
      }
    }
  ]
};

export const initialTeamPlanning: GameEvent = {
  "id": "initial_team_planning_001",
  "category": "team",
  "title": "Initial Team Planning",
  "description": "Time to plan out your initial team structure and identify key roles you'll need to fill.",
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
      "id": "technical_first",
      "text": "Focus on technical roles first - Plan to hire engineers and product designers",
      "successChance": 80,
      "impact": {
        "founder": {},
        "company": {}
      }
    },
    {
      "id": "balanced_approach",
      "text": "Take a balanced approach - Plan for both technical and business roles",
      "impact": {
        "founder": {},
        "company": {}
      }
    }
  ]
};

export const executiveHiring: GameEvent = {
  "id": "executive_hiring_001",
  "category": "team",
  "title": "Executive Team Formation",
  "description": "As you prepare for fundraising, investors want to see a strong executive team. You need to make some key leadership hires.",
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
      "id": "experienced_execs",
      "text": "Hire experienced executives from established tech companies",
      "successChance": 75,
      "impact": {
        "founder": {},
        "company": {}
      }
    },
    {
      "id": "promote_internal",
      "text": "Promote high-performing team members to executive positions",
      "impact": {
        "founder": {},
        "company": {}
      }
    }
  ]
};

export const seniorHiringSpree: GameEvent = {
  "id": "senior_hiring_spree_001",
  "category": "team",
  "title": "Senior Talent Acquisition",
  "description": "With significant funding secured, you need to rapidly build out your senior engineering and product teams.",
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
      "id": "targeted_hiring",
      "text": "Focus on targeted hiring of senior specialists in key areas",
      "successChance": 80,
      "impact": {
        "founder": {},
        "company": {}
      }
    },
    {
      "id": "rapid_expansion",
      "text": "Rapidly expand teams across all departments",
      "impact": {
        "founder": {},
        "company": {}
      }
    }
  ]
};

export const internationalTeam: GameEvent = {
  "id": "international_team_001",
  "category": "team",
  "title": "International Team Expansion",
  "description": "Your startup is ready for global expansion. How will you build and manage international teams?",
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
      "id": "remote_first",
      "text": "Build a remote-first global team structure",
      "successChance": 75,
      "impact": {
        "founder": {},
        "company": {}
      }
    },
    {
      "id": "regional_offices",
      "text": "Establish regional offices with local leadership",
      "impact": {
        "founder": {},
        "company": {}
      }
    }
  ]
};