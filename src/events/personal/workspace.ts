import { GameEvent, GamePhase } from '../../types/stats';

export const workspaceDecision: GameEvent = {
  "id": "workspace_decision_001",
  "category": "personal",
  "title": "Choosing Your Workspace",
  "description": "Time to decide on your primary workspace. A popular co-working space has an opening, and there's also a spot in a founder's house in SOMA. This choice will significantly impact your daily routine and networking opportunities.",
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
      "id": "coworking_space",
      "text": "Join the co-working space - More professional, structured environment with diverse networking opportunities.",
      "impact": {
        "founder": {},
        "company": {}
      }
    },
    {
      "id": "founders_house",
      "text": "Move into the founder's house - More casual, immersive startup experience with closer founder relationships.",
      "impact": {
        "founder": {},
        "company": {}
      }
    }
  ]
}; 