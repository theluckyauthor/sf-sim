import { GameEvent, GamePhase } from '../../types/stats';

export const foggyMorning: GameEvent = {
  "id": "foggy_morning_001",
  "category": "personal",
  "title": "Karl the Fog",
  "description": "A typical foggy San Francisco morning. The city is shrouded in its famous fog, creating a unique atmosphere.",
  "conditions": {},
  "impact": {
    "founder": {},
    "company": {}
  },
  "choices": [
    {
      "id": "morning_hike",
      "text": "Take an early morning hike up Twin Peaks to watch the fog roll over the city.",
      "impact": {
        "founder": {},
        "company": {}
      }
    },
    {
      "id": "cozy_cafe",
      "text": "Head to a cozy café in Hayes Valley for some productive work time.",
      "impact": {
        "founder": {},
        "company": {}
      }
    }
  ]
};

export const missionWeekend: GameEvent = {
  "id": "mission_weekend_001",
  "category": "personal",
  "title": "Mission District Weekend",
  "description": "It's a sunny weekend in the Mission. The neighborhood is alive with food, art, and tech entrepreneurs.",
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
      "id": "dolores_park",
      "text": "Spend the afternoon at Dolores Park networking with other founders.",
      "impact": {
        "founder": {},
        "company": {}
      }
    },
    {
      "id": "local_exploration",
      "text": "Explore local cafes and coworking spaces to find potential work spots.",
      "impact": {
        "founder": {},
        "company": {}
      }
    }
  ]
};

export const somaTechScene: GameEvent = {
  "id": "soma_tech_scene_001",
  "category": "personal",
  "title": "SOMA Tech Scene",
  "description": "A popular tech meetup is happening at a trendy SOMA venue. The place will be full of founders, engineers, and investors.",
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
      "id": "give_talk",
      "text": "Volunteer to give a lightning talk about your startup",
      "successChance": 75,
      "impact": {
        "founder": {},
        "company": {}
      }
    },
    {
      "id": "network_casually",
      "text": "Focus on casual networking and building relationships",
      "impact": {
        "founder": {},
        "company": {}
      }
    }
  ]
};

export const housingCrisis: GameEvent = {
  "id": "housing_crisis_001",
  "category": "personal",
  "title": "Housing Challenge",
  "description": "Your rent is increasing significantly, a common challenge in San Francisco. This could affect your runway and team.",
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
      "id": "relocate_office",
      "text": "Move to a more affordable neighborhood outside the city center",
      "successChance": 80,
      "impact": {
        "founder": {},
        "company": {}
      }
    },
    {
      "id": "optimize_space",
      "text": "Stay but optimize current space usage and implement hybrid work",
      "impact": {
        "founder": {},
        "company": {}
      }
    }
  ]
};

export const transportationChallenge: GameEvent = {
  "id": "transportation_challenge_001",
  "category": "personal",
  "title": "Transit Dilemma",
  "description": "SF's transit challenges are affecting team commutes and productivity. Time to address the transportation situation.",
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
      "id": "transit_benefits",
      "text": "Implement comprehensive transit benefits and flexible hours",
      "successChance": 85,
      "impact": {
        "founder": {},
        "company": {}
      }
    },
    {
      "id": "remote_work",
      "text": "Shift towards a remote-first culture",
      "impact": {
        "founder": {},
        "company": {}
      }
    }
  ]
};

export const sfCulture: GameEvent = {
  "id": "sf_culture_001",
  "category": "personal",
  "title": "SF Culture Integration",
  "description": "Your team is discussing how to better integrate with SF's unique tech culture while maintaining authenticity.",
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
      "id": "embrace_culture",
      "text": "Fully embrace SF startup culture with team events and local partnerships",
      "successChance": 75,
      "impact": {
        "founder": {},
        "company": {}
      }
    },
    {
      "id": "balanced_approach",
      "text": "Create a unique culture that balances SF influence with team values",
      "impact": {
        "founder": {},
        "company": {}
      }
    }
  ]
};

export const securityIncident: GameEvent = {
  "id": "security_incident_001",
  "category": "personal",
  "title": "Office Security Concerns",
  "description": "Recent car break-ins near your office have raised security concerns among the team.",
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
      "id": "security_upgrade",
      "text": "Invest in office security upgrades and parking solutions",
      "impact": {
        "founder": {},
        "company": {}
      }
    },
    {
      "id": "flexible_work",
      "text": "Implement flexible hours to avoid high-risk times",
      "impact": {
        "founder": {},
        "company": {}
      }
    }
  ]
};

export const castroNightlife: GameEvent = {
  "id": "castro_nightlife_001",
  "category": "personal",
  "title": "Castro District Night Out",
  "description": "Your team suggests a night out in the Castro, SF's historic LGBTQ+ neighborhood, known for its vibrant nightlife and inclusive atmosphere.",
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
      "id": "team_bonding",
      "text": "Organize an inclusive team night out with dinner and dancing",
      "impact": {
        "founder": {},
        "company": {}
      }
    },
    {
      "id": "pride_sponsorship",
      "text": "Get involved in local LGBTQ+ tech community events",
      "impact": {
        "founder": {},
        "company": {}
      }
    }
  ]
};

export const chinatownLunch: GameEvent = {
  "id": "chinatown_lunch_001",
  "category": "personal",
  "title": "Chinatown Team Lunch",
  "description": "Take the team to explore SF's historic Chinatown for lunch and cultural experience.",
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
      "id": "dim_sum",
      "text": "Host a team dim sum gathering",
      "impact": {
        "founder": {},
        "company": {}
      }
    },
    {
      "id": "cultural_exchange",
      "text": "Organize a cultural exchange event with local businesses",
      "impact": {
        "founder": {},
        "company": {}
      }
    }
  ]
};

export const homelessnessImpact: GameEvent = {
  "id": "homelessness_impact_001",
  "category": "personal",
  "title": "Community Impact",
  "description": "Your team witnesses the city's homeless crisis firsthand and wants to take action.",
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
      "id": "community_program",
      "text": "Start a tech training program for homeless individuals",
      "impact": {
        "founder": {},
        "company": {}
      }
    },
    {
      "id": "local_partnership",
      "text": "Partner with local shelters and support organizations",
      "impact": {
        "founder": {},
        "company": {}
      }
    }
  ]
};

export const touristAttraction: GameEvent = {
  "id": "tourist_attraction_001",
  "category": "personal",
  "title": "Tourist Perspective",
  "description": "Visiting investors want to experience iconic San Francisco attractions.",
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
      "id": "classic_tour",
      "text": "Give a classic SF tour (Golden Gate, Fisherman's Wharf, cable cars)",
      "impact": {
        "founder": {},
        "company": {}
      }
    },
    {
      "id": "startup_tour",
      "text": "Show them the \"real\" SF (local cafes, coworking spaces, hidden gems)",
      "impact": {
        "founder": {},
        "company": {}
      }
    }
  ]
};

export const haightAshburyEvent: GameEvent = {
  "id": "haight_ashbury_001",
  "category": "personal",
  "title": "Haight-Ashbury Inspiration",
  "description": "Spend a day in the historic Haight-Ashbury district, known for its counterculture history and creative energy.",
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
      "id": "creative_session",
      "text": "Host a creative brainstorming session in a vintage café",
      "impact": {
        "founder": {},
        "company": {}
      }
    },
    {
      "id": "team_exploration",
      "text": "Take the team on a cultural exploration of the neighborhood",
      "impact": {
        "founder": {},
        "company": {}
      }
    }
  ]
};

export const marinHeadlands: GameEvent = {
  "id": "marin_headlands_001",
  "category": "personal",
  "title": "Marin Headlands Retreat",
  "description": "Take a break from the city with a team retreat to the Marin Headlands, offering stunning views of the Golden Gate Bridge.",
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
      "id": "team_hike",
      "text": "Organize a team hiking and strategy session",
      "impact": {
        "founder": {},
        "company": {}
      }
    },
    {
      "id": "offsite_planning",
      "text": "Host a full-day offsite with team building activities",
      "impact": {
        "founder": {},
        "company": {}
      }
    }
  ]
};

export const bayToBreakers: GameEvent = {
  "id": "bay_to_breakers_001",
  "category": "personal",
  "title": "Bay to Breakers Fun",
  "description": "The annual Bay to Breakers race/party is happening! A chance for team bonding and experiencing a unique SF tradition.",
  "conditions": {},
  "impact": {
    "founder": {},
    "company": {}
  },
  "choices": [
    {
      "id": "team_participation",
      "text": "Enter as a startup team with matching costumes",
      "impact": {
        "founder": {},
        "company": {}
      }
    },
    {
      "id": "spectator_party",
      "text": "Host a viewing party at your office along the route",
      "impact": {
        "founder": {},
        "company": {}
      }
    }
  ]
};