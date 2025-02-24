import { GameEvent, GamePhase } from '../../types/stats';

// Strategic Vision Conflict
export const strategicVisionConflict: GameEvent = {
  "id": "strategic_vision_conflict_001",
  "category": "team",
  "title": "Strategic Crossroads",
  "description": "You and your co-founder have diverging views on the company's next major strategic move. The team is looking for clear direction.",
  "conditions": {
    "requiredPhase": GamePhase.BOOTSTRAPPING,    "activeMilestone": "cofounder_agreement_001"
  },
  "impact": {
    "founder": {},
    "company": {}
  },
  "choices": [
    {
      "id": "assertive_direction",
      "text": "Assert your vision strongly and take clear ownership of the direction.",
      "impact": {
        "founder": {},
        "company": {}
      }
    },
    {
      "id": "collaborative_compromise",
      "text": "Work towards a compromise that incorporates elements of both visions.",
      "impact": {
        "founder": {},
        "company": {}
      }
    }
  ]
};

// Equity Renegotiation
export const equityRenegotiation: GameEvent = {
  "id": "equity_renegotiation_001",
  "category": "team",
  "title": "Equity Discussion",
  "description": "Your co-founder wants to revisit the equity split based on evolving roles and contributions. This is a delicate but important conversation.",
  "conditions": {
    "requiredPhase": GamePhase.BOOTSTRAPPING,    "activeMilestone": "strong_leadership_001"
  },
  "impact": {
    "founder": {},
    "company": {}
  },
  "choices": [
    {
      "id": "maintain_split",
      "text": "Stand firm on the original agreement, emphasizing long-term commitment.",
      "impact": {
        "founder": {},
        "company": {}
      }
    },
    {
      "id": "performance_based",
      "text": "Propose a performance-based vesting adjustment going forward.",
      "impact": {
        "founder": {},
        "company": {}
      }
    }
  ]
};

// Work-Style Conflict
export const workStyleConflict: GameEvent = {
  "id": "work_style_conflict_001",
  "category": "team",
  "title": "Leadership Style Tension",
  "description": "Different working styles between you and your co-founder are creating team confusion. You need to establish clear leadership patterns.",
  "conditions": {
    "requiredPhase": GamePhase.BOOTSTRAPPING,    "activeMilestone": "equity_tension_001"
  },
  "impact": {
    "founder": {},
    "company": {}
  },
  "choices": [
    {
      "id": "domain_split",
      "text": "Clearly divide responsibilities and domains of ownership.",
      "impact": {
        "founder": {},
        "company": {}
      }
    },
    {
      "id": "unified_approach",
      "text": "Work on aligning your styles through executive coaching.",
      "impact": {
        "founder": {},
        "company": {}
      }
    }
  ]
};

// Long-term Partnership Planning
export const partnershipPlanning: GameEvent = {
  "id": "partnership_planning_001",
  "category": "team",
  "title": "Future Partnership Planning",
  "description": "With the company growing, it's time to formalize long-term partnership arrangements and succession planning.",
  "conditions": {
    "requiredPhase": GamePhase.BOOTSTRAPPING,    "activeMilestone": "clear_domains_001"
  },
  "impact": {
    "founder": {},
    "company": {}
  },
  "choices": [
    {
      "id": "formal_structure",
      "text": "Create detailed partnership agreements and succession plans.",
      "impact": {
        "founder": {},
        "company": {}
      }
    },
    {
      "id": "flexible_partnership",
      "text": "Keep arrangements flexible but establish key principles and guidelines.",
      "impact": {
        "founder": {},
        "company": {}
      }
    }
  ]
}; 