import { GameEvent, GamePhase } from '../../types/stats';

export const workspaceDecision: GameEvent = {
  id: 'workspace_decision_001',
  category: 'personal',
  title: 'Choosing Your Workspace',
  description: 'Time to decide on your primary workspace. A popular co-working space has an opening, and there\'s also a spot in a founder\'s house in SOMA. This choice will significantly impact your daily routine and networking opportunities.',
  
  conditions: {
    requiredPhase: GamePhase.SETTLING_IN,
    minimumStats: {
      'founder.skills': {
        networking: 10,
        technical: 0,
        leadership: 0,
        fundraising: 0,
        marketing: 0,
        execution: 0,
        growth: 0,
        sustainability: 0
      }
    }
  },
  
  impact: {
    founder: {
      wellBeing: {
        energy: -5, // Initial adjustment period
        stress: 5,
        health: 0
      }
    }
  },
  
  choices: [
    {
      id: 'coworking_space',
      text: 'Join the co-working space - More professional, structured environment with diverse networking opportunities.',
      impact: {
        founder: {
          wellBeing: {
            energy: -10,
            stress: 10,
            health: 0
          },
          skills: {
            networking: 10,
            technical: 0,
            leadership: 5,
            fundraising: 5,
            marketing: 5,
            execution: 3,
            growth: 0,
            sustainability: 0
          },
          finances: {
            personalFunds: -500, // Monthly membership fee
            salary: 0,
            investments: 0
          }
        },
        startup: {
          team: {
            productivity: 15,
            morale: 10,
            size: 0,
            culture: 5
          },
          market: {
            brandReputation: 10,
            socialPresence: 8,
            userTraction: 0,
            marketFit: 0,
            userGrowth: 0
          }
        },
        relationships: {
          community: 15,
          investors: 10,
          employees: 5,
          customers: 5
        },
        triggerMilestone: 'workspace_established_001'
      }
    },
    {
      id: 'founders_house',
      text: 'Move into the founder\'s house - More casual, immersive startup experience with closer founder relationships.',
      impact: {
        founder: {
          wellBeing: {
            energy: 5, // More flexible schedule
            stress: -5,
            health: 5
          },
          skills: {
            networking: 15,
            technical: 5,
            leadership: 3,
            fundraising: 8,
            marketing: 3,
            execution: 0,
            growth: 0,
            sustainability: 0
          },
          finances: {
            personalFunds: -800, // Monthly rent
            salary: 0,
            investments: 0
          }
        },
        startup: {
          team: {
            productivity: 8,
            morale: 15,
            size: 0,
            culture: 15
          },
          market: {
            brandReputation: 5,
            socialPresence: 12,
            userTraction: 0,
            marketFit: 0,
            userGrowth: 0
          }
        },
        relationships: {
          community: 20,
          investors: 15,
          employees: 0,
          customers: 0
        },
        triggerMilestone: 'founders_network_001'
      }
    }
  ]
}; 