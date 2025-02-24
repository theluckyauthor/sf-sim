import { GameEvent, GamePhase } from '../../types/stats';

export const startupConference: GameEvent = {
  "id": "startup_conference_001",
  "category": "networking",
  "title": "TechCrunch Disrupt SF",
  "description": "You've got a pass to the biggest startup conference in SF. Your inbox is already full of meeting requests from potential investors and partners.",
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
      "id": "network_intensively",
      "text": "Go all in on networking: Schedule back-to-back meetings and attend every social event.",
      "successChance": 75,
      "impact": {
        "founder": {},
        "company": {}
      }
    },
    {
      "id": "selective_meetings",
      "text": "Be selective: Focus on a few key meetings and catch up on work during breaks.",
      "impact": {
        "founder": {},
        "company": {}
      }
    }
  ]
};

export const mediaOpportunity: GameEvent = {
  "id": "media_opportunity_001",
  "category": "networking",
  "title": "Unexpected Media Spotlight",
  "description": "A prominent tech blog wants to feature your startup. They're offering either a written interview or a live video Q&A session.",
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
      "id": "live_qa",
      "text": "Accept the live Q&A: It's riskier but could show authenticity and confidence.",
      "successChance": 65,
      "impact": {
        "founder": {},
        "company": {}
      }
    },
    {
      "id": "written_interview",
      "text": "Opt for the written interview: Take time to craft perfect responses.",
      "impact": {
        "founder": {},
        "company": {}
      }
    }
  ]
};

export const investorNetworking: GameEvent = {
  "id": "investor_networking_001",
  "category": "networking",
  "title": "Investor Networking Reception",
  "description": "A high-profile VC firm is hosting a networking reception. Many prominent investors and successful founders will be there.",
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
      "id": "strategic_networking",
      "text": "Focus on connecting with specific investors who match your startup's stage and sector",
      "successChance": 80,
      "impact": {
        "founder": {},
        "company": {}
      }
    },
    {
      "id": "broad_networking",
      "text": "Network broadly and build relationships across the investor community",
      "impact": {
        "founder": {},
        "company": {}
      }
    }
  ]
};

export const industryConference: GameEvent = {
  "id": "industry_conference_001",
  "category": "networking",
  "title": "Industry Leadership Conference",
  "description": "Your startup's growth has earned you a speaking slot at a major industry conference. This is a chance to establish yourself as a thought leader.",
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
      "id": "vision_talk",
      "text": "Give an inspiring talk about your vision for the industry's future",
      "successChance": 75,
      "impact": {
        "founder": {},
        "company": {}
      }
    },
    {
      "id": "technical_deep_dive",
      "text": "Present a technical deep-dive showcasing your innovative solutions",
      "impact": {
        "founder": {},
        "company": {}
      }
    }
  ]
};

export const partnershipSummit: GameEvent = {
  "id": "partnership_summit_001",
  "category": "networking",
  "title": "Strategic Partnership Summit",
  "description": "Your startup is hosting a summit to bring together potential strategic partners and enterprise clients.",
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
      "id": "enterprise_focus",
      "text": "Focus on enterprise partnerships and integration opportunities",
      "successChance": 70,
      "impact": {
        "founder": {},
        "company": {}
      }
    },
    {
      "id": "ecosystem_building",
      "text": "Build a broader ecosystem of partners and integrations",
      "impact": {
        "founder": {},
        "company": {}
      }
    }
  ]
}; 