import { GameEvent, GamePhase } from '../../types/stats';

// Event triggered by successful Product Hunt launch
export const viralGrowthSurge: GameEvent = {
  "id": "viral_growth_surge_001",
  "category": "market",
  "title": "Viral Growth Surge",
  "description": "Your Product Hunt launch exceeded expectations. Traffic is growing exponentially, but your infrastructure is starting to strain.",
  "conditions": {
    "requiredPhase": GamePhase.BOOTSTRAPPING,    "activeMilestone": "product_hunt_success_001"
  },
  "impact": {
    "founder": {},
    "company": {}
  },
  "choices": [
    {
      "id": "scale_infrastructure",
      "text": "Drop everything and scale the infrastructure to handle the growth.",
      "impact": {
        "founder": {},
        "company": {}
      }
    },
    {
      "id": "controlled_growth",
      "text": "Implement waitlist and throttle signups to maintain stability.",
      "impact": {
        "founder": {},
        "company": {}
      }
    }
  ]
};

// Media Coverage Event
export const mediaCoverage: GameEvent = {
  "id": "media_coverage_001",
  "category": "market",
  "title": "Media Spotlight",
  "description": "Major tech publications want to cover your Product Hunt success. How will you handle the sudden media attention?",
  "conditions": {
    "requiredPhase": GamePhase.BOOTSTRAPPING,    "activeMilestone": "infrastructure_scaled_001"
  },
  "impact": {
    "founder": {},
    "company": {}
  },
  "choices": [
    {
      "id": "media_blitz",
      "text": "Go all-in on media: Accept all interviews and maximize exposure.",
      "impact": {
        "founder": {},
        "company": {}
      }
    },
    {
      "id": "selective_coverage",
      "text": "Be strategic: Focus on in-depth coverage with key publications.",
      "impact": {
        "founder": {},
        "company": {}
      }
    }
  ]
};

// User Feedback Challenge
export const userFeedbackSurge: GameEvent = {
  "id": "user_feedback_surge_001",
  "category": "market",
  "title": "User Feedback Flood",
  "description": "The Product Hunt community is providing massive amounts of feedback. Some love it, others point out critical issues.",
  "conditions": {
    "requiredPhase": GamePhase.BOOTSTRAPPING,    "activeMilestone": "media_success_001"
  },
  "impact": {
    "founder": {},
    "company": {}
  },
  "choices": [
    {
      "id": "rapid_iteration",
      "text": "Rapidly iterate: Address key feedback with quick releases.",
      "impact": {
        "founder": {},
        "company": {}
      }
    },
    {
      "id": "strategic_roadmap",
      "text": "Take a measured approach: Incorporate feedback into strategic roadmap.",
      "impact": {
        "founder": {},
        "company": {}
      }
    }
  ]
};

// Competition Response Event
export const competitorReaction: GameEvent = {
  "id": "competitor_reaction_001",
  "category": "market",
  "title": "Competitor Response",
  "description": "Your Product Hunt success has caught competitors' attention. They're preparing aggressive responses to your market entry.",
  "conditions": {
    "requiredPhase": GamePhase.BOOTSTRAPPING,    "activeMilestone": "rapid_improvement_001"
  },
  "impact": {
    "founder": {},
    "company": {}
  },
  "choices": [
    {
      "id": "aggressive_defense",
      "text": "Launch aggressive marketing and feature rollout to maintain momentum.",
      "impact": {
        "founder": {},
        "company": {}
      }
    },
    {
      "id": "differentiation_focus",
      "text": "Focus on unique value: Double down on your key differentiators.",
      "impact": {
        "founder": {},
        "company": {}
      }
    }
  ]
}; 