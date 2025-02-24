import { GameEvent, GamePhase } from '../../types/stats';

// Media Coverage Strategy
export const mediaExposureStrategy: GameEvent = {
  "id": "media_exposure_001",
  "category": "networking",
  "title": "Media Momentum",
  "description": "After TechCrunch Disrupt, you have media attention. You need to decide how to leverage this exposure.",
  "conditions": {
    "requiredPhase": GamePhase.BOOTSTRAPPING,    "activeMilestone": "conference_exposure_001"
  },
  "impact": {
    "founder": {},
    "company": {}
  },
  "choices": [
    {
      "id": "thought_leadership",
      "text": "Position yourself as a thought leader with industry insights and vision pieces.",
      "impact": {
        "founder": {},
        "company": {}
      }
    },
    {
      "id": "product_spotlight",
      "text": "Focus media attention on product innovations and user success stories.",
      "impact": {
        "founder": {},
        "company": {}
      }
    }
  ]
};

// Partnership Development
export const partnershipDevelopment: GameEvent = {
  "id": "partnership_development_001",
  "category": "networking",
  "title": "Strategic Partnerships",
  "description": "Conference connections have led to partnership opportunities. You need to choose which relationships to prioritize.",
  "conditions": {
    "requiredPhase": GamePhase.BOOTSTRAPPING,    "activeMilestone": "thought_leadership_001"
  },
  "impact": {
    "founder": {},
    "company": {}
  },
  "choices": [
    {
      "id": "enterprise_focus",
      "text": "Pursue enterprise partnerships with established tech companies.",
      "impact": {
        "founder": {},
        "company": {}
      }
    },
    {
      "id": "startup_ecosystem",
      "text": "Build relationships with complementary startups for mutual growth.",
      "impact": {
        "founder": {},
        "company": {}
      }
    }
  ]
};

// Investor Relationship Building
export const investorRelationshipBuilding: GameEvent = {
  "id": "investor_relationship_001",
  "category": "networking",
  "title": "Investor Strategy",
  "description": "Conference networking has opened doors with multiple investors. You need to decide how to nurture these relationships.",
  "conditions": {
    "requiredPhase": GamePhase.BOOTSTRAPPING,    "activeMilestone": "enterprise_partnership_001"
  },
  "impact": {
    "founder": {},
    "company": {}
  },
  "choices": [
    {
      "id": "strategic_investors",
      "text": "Focus on investors who can provide strategic value beyond capital.",
      "impact": {
        "founder": {},
        "company": {}
      }
    },
    {
      "id": "financial_optimization",
      "text": "Prioritize investors offering the best financial terms and valuation.",
      "impact": {
        "founder": {},
        "company": {}
      }
    }
  ]
}; 