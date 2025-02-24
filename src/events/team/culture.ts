import { GameEvent, GamePhase } from '../../types/stats';

export const teamConflict: GameEvent = {
  "id": "team_conflict_001",
  "category": "team",
  "title": "Team Tension Rising",
  "description": "A heated disagreement has erupted between your engineering and design teams about product direction. The tension is affecting team dynamics and productivity.",
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
      "id": "direct_mediation",
      "text": "Clear your schedule and personally mediate the conflict, hearing both sides thoroughly.",
      "successChance": 80,
      "impact": {
        "founder": {},
        "company": {}
      }
    },
    {
      "id": "delegate_resolution",
      "text": "Delegate the issue to team leads and focus on keeping the product timeline.",
      "successChance": 40,
      "impact": {
        "founder": {},
        "company": {}
      }
    }
  ]
};

export const teamBuildingResponse: GameEvent = {
  "id": "team_building_001",
  "category": "team",
  "title": "Team Building Opportunity",
  "description": "After the recent conflict, there's a clear need to strengthen team bonds. A local escape room venue has team-building slots available.",
  "conditions": {
    "requiredPhase": GamePhase.BOOTSTRAPPING,    "activeMilestone": "team_harmony_001"
  },
  "impact": {
    "founder": {},
    "company": {}
  },
  "choices": [
    {
      "id": "offsite_activity",
      "text": "Book the escape room and a team dinner at a trendy Mission restaurant.",
      "impact": {
        "founder": {},
        "company": {}
      }
    },
    {
      "id": "internal_workshop",
      "text": "Organize an in-office workshop to align on communication and collaboration practices.",
      "impact": {
        "founder": {},
        "company": {}
      }
    }
  ]
};

export const hackathonOpportunity: GameEvent = {
  "id": "hackathon_opportunity_001",
  "category": "team",
  "title": "SF Startup Hackathon",
  "description": "A major tech company is hosting a hackathon focused on AI innovation. Your team is excited about participating and building something new.",
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
      "id": "participate_hackathon",
      "text": "Enter the hackathon with a small team to prototype an innovative feature.",
      "successChance": 70,
      "impact": {
        "founder": {},
        "company": {}
      }
    },
    {
      "id": "focus_product",
      "text": "Skip the hackathon and maintain focus on your core product development.",
      "impact": {
        "founder": {},
        "company": {}
      }
    }
  ]
};

export const cultureDuringFundraising: GameEvent = {
  "id": "culture_during_fundraising_001",
  "category": "team",
  "title": "Culture Under Pressure",
  "description": "The intense fundraising process is putting strain on team culture. How will you maintain team spirit while pursuing investment?",
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
      "id": "transparent_communication",
      "text": "Maintain full transparency about the fundraising process with the team",
      "successChance": 80,
      "impact": {
        "founder": {},
        "company": {}
      }
    },
    {
      "id": "shield_team",
      "text": "Shield the team from fundraising pressure and maintain focus on product",
      "impact": {
        "founder": {},
        "company": {}
      }
    }
  ]
};

export const remoteTeamCulture: GameEvent = {
  "id": "remote_team_culture_001",
  "category": "team",
  "title": "Remote Culture Evolution",
  "description": "As your team grows and becomes more distributed, you need to evolve your culture to support remote work.",
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
      "id": "digital_first",
      "text": "Implement digital-first culture initiatives and virtual team building",
      "successChance": 75,
      "impact": {
        "founder": {},
        "company": {}
      }
    },
    {
      "id": "hybrid_approach",
      "text": "Balance remote work with regular in-person gatherings",
      "impact": {
        "founder": {},
        "company": {}
      }
    }
  ]
};

export const culturalTransformation: GameEvent = {
  "id": "cultural_transformation_001",
  "category": "team",
  "title": "Scaling Culture Challenge",
  "description": "Your startup culture needs to evolve as you scale. How will you maintain your core values while adapting to rapid growth?",
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
      "id": "formalize_culture",
      "text": "Formalize culture programs and establish dedicated culture team",
      "successChance": 80,
      "impact": {
        "founder": {},
        "company": {}
      }
    },
    {
      "id": "organic_evolution",
      "text": "Let culture evolve organically with light guidance from leadership",
      "impact": {
        "founder": {},
        "company": {}
      }
    }
  ]
}; 