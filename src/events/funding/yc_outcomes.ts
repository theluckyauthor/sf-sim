import { GameEvent, GamePhase } from '../../types/stats';

// Event triggered after successful YC interview
export const ycOnboarding: GameEvent = {
  "id": "yc_onboarding_001",
  "category": "funding",
  "title": "YC Batch Kickoff",
  "description": "You've made it into YC! The first week is packed with orientation sessions, mentor meetings, and crucial decisions about your focus during the program.",
  "conditions": {
    "requiredPhase": GamePhase.FUNDRAISING,
    "activeMilestone": "yc_interview_success_001"
  },
  "impact": {
    "founder": {},
    "company": {}
  },
  "choices": [
    {
      "id": "growth_focus",
      "text": "Focus on explosive growth: Aim for hockey-stick metrics by demo day.",
      "impact": {
        "founder": {},
        "company": {}
      }
    },
    {
      "id": "sustainable_growth",
      "text": "Balance growth with sustainability: Build strong fundamentals while showing good traction.",
      "impact": {
        "founder": {},
        "company": {}
      }
    }
  ]
};

// Event for handling YC interview rejection
export const ycRejection: GameEvent = {
  "id": "yc_rejection_001",
  "category": "funding",
  "title": "Post-YC Interview Decision",
  "description": "The YC interview didn't result in an acceptance. Your team looks to you for direction on the path forward.",
  "conditions": {
    "requiredPhase": GamePhase.BOOTSTRAPPING,
    "activeMilestone": "yc_interview_rejection_001"
  },
  "impact": {
    "founder": {},
    "company": {}
  },
  "choices": [
    {
      "id": "bootstrap_focus",
      "text": "Double down on bootstrapping: Focus on revenue and prove them wrong.",
      "impact": {
        "founder": {},
        "company": {}
      }
    },
    {
      "id": "alternative_accelerator",
      "text": "Apply to other top accelerators while maintaining momentum.",
      "impact": {
        "founder": {},
        "company": {}
      }
    }
  ]
};

// Event for YC Demo Day preparation
export const ycDemoDay: GameEvent = {
  "id": "yc_demo_day_001",
  "category": "funding",
  "title": "YC Demo Day Preparation",
  "description": "Demo Day is approaching. Hundreds of investors will be watching. Your presentation needs to be perfect.",
  "conditions": {
    "requiredPhase": GamePhase.FUNDRAISING,
    "activeMilestone": "hyper_growth_mode_001"
  },
  "impact": {
    "founder": {},
    "company": {}
  },
  "choices": [
    {
      "id": "vision_pitch",
      "text": "Focus on the big vision: Paint an ambitious picture of the future.",
      "impact": {
        "founder": {},
        "company": {}
      }
    },
    {
      "id": "metrics_pitch",
      "text": "Focus on metrics: Show concrete growth and market validation.",
      "impact": {
        "founder": {},
        "company": {}
      }
    }
  ]
};

// Post Demo Day Fundraising
export const postDemoDayFundraising: GameEvent = {
  "id": "post_demo_day_001",
  "category": "funding",
  "title": "Post Demo Day Dynamics",
  "description": "Your inbox is flooded with investor interest after Demo Day. Time to navigate the fundraising dynamics.",
  "conditions": {
    "requiredPhase": GamePhase.FUNDRAISING,
    "activeMilestone": "ambitious_vision_001"
  },
  "impact": {
    "founder": {},
    "company": {}
  },
  "choices": [
    {
      "id": "competitive_round",
      "text": "Create competition: Run a fast, competitive fundraising round.",
      "impact": {
        "founder": {},
        "company": {}
      }
    },
    {
      "id": "strategic_round",
      "text": "Be selective: Focus on finding the right strategic investors.",
      "impact": {
        "founder": {},
        "company": {}
      }
    }
  ]
};

// YC Batch Networking Event
export const ycBatchNetworking: GameEvent = {
  "id": "yc_batch_networking_001",
  "category": "funding",
  "title": "YC Batch Connections",
  "description": "Your batchmates include founders from diverse backgrounds and industries. Some are working on complementary products.",
  "conditions": {
      "requiredPhase": GamePhase.FUNDRAISING,
    "activeMilestone": "hyper_growth_mode_001"
  },
  "impact": {
    "founder": {},
    "company": {}
  },
  "choices": [
    {
      "id": "strategic_partnership",
      "text": "Form a strategic partnership with a complementary startup in your batch.",
      "impact": {
        "founder": {},
        "company": {}
      }
    },
    {
      "id": "knowledge_sharing",
      "text": "Focus on knowledge sharing and best practices within your batch.",
      "impact": {
        "founder": {},
        "company": {}
      }
    }
  ]
};

// YC Team Scaling Event
export const ycTeamScaling: GameEvent = {
  "id": "yc_team_scaling_001",
  "category": "funding",
  "title": "YC-Powered Team Growth",
  "description": "With YC's network and resources, you have access to top talent. However, rapid hiring during the program comes with its own challenges.",
  "conditions": {
      "requiredPhase": GamePhase.FUNDRAISING,
    "activeMilestone": "hyper_growth_mode_001"
  },
  "impact": {
    "founder": {},
    "company": {}
  },
  "choices": [
    {
      "id": "rapid_hiring",
      "text": "Leverage YC's network for rapid team expansion before demo day.",
      "impact": {
        "founder": {},
        "company": {}
      }
    },
    {
      "id": "selective_hiring",
      "text": "Make a few key strategic hires while maintaining team cohesion.",
      "impact": {
        "founder": {},
        "company": {}
      }
    }
  ]
};

// YC Market Expansion Event
export const ycMarketExpansion: GameEvent = {
  "id": "yc_market_expansion_001",
  "category": "funding",
  "title": "Market Expansion Opportunity",
  "description": "YC partners have identified potential for rapid market expansion. You need to decide how aggressively to pursue new market segments.",
  "conditions": {
    "requiredPhase": GamePhase.FUNDRAISING,
    "activeMilestone": "hyper_growth_mode_001"
  },
  "impact": {
    "founder": {},
    "company": {}
  },
  "choices": [
    {
      "id": "aggressive_expansion",
      "text": "Pursue aggressive multi-market expansion to show massive growth potential.",
      "impact": {
        "founder": {},
        "company": {}
      }
    },
    {
      "id": "focused_expansion",
      "text": "Expand into one promising new market segment with strong validation.",
      "impact": {
        "founder": {},
        "company": {}
      }
    }
  ]
}; 