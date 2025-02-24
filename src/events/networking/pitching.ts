import { GameEvent, GamePhase } from '../../types/stats';

export const localDemoPitch: GameEvent = {
  id: 'local_demo_pitch_001',
  category: 'networking',
  title: 'Local Demo Day Opportunity',
  description: 'A community organizer invites you to pitch at an upcoming demo day. The audience will include local founders, angel investors, and tech enthusiasts. You have limited time to prepare.',
  
  conditions: {
    requiredPhase: GamePhase.IDEATION,
    minimumStats: {
      'founder.skills': {
        networking: 15,
        marketing: 10,
        technical: 0,
        leadership: 0,
        fundraising: 0,
        execution: 0,
        growth: 0,
        sustainability: 0
      },
      'founder.wellBeing': {
        energy: 40,
        stress: 0,
        health: 0
      }
    }
  },
  
  impact: {
    founder: {
      wellBeing: {
        energy: -5,
        stress: 10,
        health: 0
      }
    }
  },
  
  choices: [
    {
      id: 'prepare_thoroughly',
      text: 'Spend several days preparing a polished pitch with detailed slides and practice sessions.',
      successChance: 85,
      impact: {
        founder: {
          wellBeing: {
            energy: -20,
            stress: 15,
            health: 0
          },
          skills: {
            marketing: 10,
            networking: 5,
            technical: 0,
            leadership: 5,
            fundraising: 8,
            execution: 5,
            growth: 0,
            sustainability: 0
          },
          reputation: {
            personal: 15,
            network: 10
          }
        },
        startup: {
          market: {
            brandReputation: 15,
            socialPresence: 10,
            userTraction: 5,
            marketFit: 8,
            userGrowth: 0
          },
          product: {
            mvpProgress: 5, // Insights from preparation
            quality: 0,
            development: 0,
            innovation: 5,
            marketFit: 8
          }
        },
        relationships: {
          community: 15,
          investors: 20,
          employees: 0,
          customers: 10
        },
        triggerMilestone: 'first_public_pitch_001'
      }
    },
    {
      id: 'wing_it',
      text: 'Trust your instincts and natural charisma - focus on authentic storytelling without formal preparation.',
      successChance: 40,
      requiredStats: {
        'founder.skills': {
          networking: 25, // Need higher networking to pull this off
          marketing: 20
        }
      },
      impact: {
        founder: {
          wellBeing: {
            energy: -8,
            stress: 20, // More stressful during the event
            health: 0
          },
          skills: {
            marketing: 5,
            networking: 8, // Learn from the experience
            technical: 0,
            leadership: 2,
            fundraising: 3,
            execution: 0,
            growth: 0,
            sustainability: 0
          },
          reputation: {
            personal: 5,
            network: 5
          }
        },
        startup: {
          market: {
            brandReputation: 5,
            socialPresence: 8,
            userTraction: 3,
            marketFit: 0,
            userGrowth: 0
          }
        },
        relationships: {
          community: 8,
          investors: 5,
          employees: 0,
          customers: 5
        }
      }
    }
  ]
};

export const pitchFeedback: GameEvent = {
  id: 'pitch_feedback_001',
  category: 'networking',
  title: 'Post-Pitch Feedback Session',
  description: 'After your demo day presentation, several experienced founders offer to give you detailed feedback over coffee.',
  
  conditions: {
    requiredPhase: GamePhase.IDEATION,
    activeMilestone: 'first_public_pitch_001' // Only triggers after successful pitch
  },
  
  impact: {
    relationships: {
      community: 5,
      investors: 0,
      employees: 0,
      customers: 0
    }
  },
  
  choices: [
    {
      id: 'accept_feedback',
      text: 'Accept the feedback session and be open to criticism.',
      impact: {
        founder: {
          wellBeing: {
            energy: -5,
            stress: 5,
            health: 0
          },
          skills: {
            marketing: 8,
            networking: 5,
            technical: 0,
            leadership: 3,
            fundraising: 10,
            execution: 5,
            growth: 3,
            sustainability: 0
          }
        },
        startup: {
          product: {
            mvpProgress: 5,
            quality: 0,
            development: 0,
            innovation: 8,
            marketFit: 10
          },
          market: {
            brandReputation: 5,
            socialPresence: 0,
            userTraction: 0,
            marketFit: 15,
            userGrowth: 5
          }
        },
        relationships: {
          community: 15,
          investors: 10,
          employees: 0,
          customers: 5
        },
        triggerMilestone: 'mentor_feedback_001'
      }
    },
    {
      id: 'polite_decline',
      text: 'Politely decline, preferring to maintain your current vision.',
      impact: {
        founder: {
          wellBeing: {
            energy: 5,
            stress: -5,
            health: 0
          },
          skills: {
            marketing: 2,
            networking: -2,
            technical: 0,
            leadership: 0,
            fundraising: 0,
            execution: 2,
            growth: 0,
            sustainability: 0
          }
        },
        relationships: {
          community: -5,
          investors: -3,
          employees: 0,
          customers: 0
        }
      }
    }
  ]
}; 