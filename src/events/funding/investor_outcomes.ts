import { GameEvent, GamePhase } from '../../types/stats';

// Strategic Pitch Refinement
export const strategicPitchRefinement: GameEvent = {
  "id": "pitch_refinement_001",
  "category": "funding",
  "title": "Pitch Evolution",
  "description": "Based on investor feedback, you need to refine your pitch strategy. This decision will shape how you position the company to future investors.",
  "conditions": {
    "requiredPhase": GamePhase.FUNDRAISING,
    "activeMilestone": "investor_feedback_001"
  },
  "impact": {
    "founder": {},
    "company": {}
  },
  "choices": [
    {
      "id": "vision_focus",
      "text": "Emphasize the long-term vision and market transformation potential.",
      "impact": {
        "founder": {},
        "company": {}
      }
    },
    {
      "id": "metrics_focus",
      "text": "Double down on traction metrics and concrete growth indicators.",
      "impact": {
        "founder": {},
        "company": {}
      }
    }
  ]
};

// Strategic Direction Pivot
export const strategicPivot: GameEvent = {
  "id": "strategic_pivot_001",
  "category": "funding",
  "title": "Strategic Direction",
  "description": "Investors have highlighted potential opportunities in adjacent markets. You need to decide whether to adjust your strategy.",
  "conditions": {
    "requiredPhase": GamePhase.FUNDRAISING,
    "activeMilestone": "vision_pitch_001"
  },
  "impact": {
    "founder": {},
    "company": {}
  },
  "choices": [
    {
      "id": "market_expansion",
      "text": "Expand into suggested markets while maintaining core focus.",
      "impact": {
        "founder": {},
        "company": {}
      }
    },
    {
      "id": "core_focus",
      "text": "Double down on current market with enhanced execution.",
      "impact": {
        "founder": {},
        "company": {}
      }
    }
  ]
};

// Board Formation Strategy
export const boardFormation: GameEvent = {
  "id": "board_formation_001",
  "category": "funding",
  "title": "Board Structure",
  "description": "As the company grows, you need to establish a formal board structure. This will shape company governance and future fundraising.",
  "conditions": {
    "requiredPhase": GamePhase.FUNDRAISING,
    "activeMilestone": "expansion_strategy_001"
  },
  "impact": {
    "founder": {},
    "company": {}
  },
  "choices": [
    {
      "id": "strategic_board",
      "text": "Build a board focused on strategic guidance and industry expertise.",
      "impact": {
        "founder": {},
        "company": {}
      }
    },
    {
      "id": "operational_board",
      "text": "Create a board with strong operational and financial oversight.",
      "impact": {
        "founder": {},
        "company": {}
      }
    }
  ]
}; 