import { NetworkingEvent, GamePhase, SkillStats, WellBeingStats } from '../types/stats';

export const techMeetupSOMA: NetworkingEvent = {
  id: 'tech_meetup_soma_001',
  category: 'networking',
  title: 'SOMA Tech Mixer',
  description: 'A trendy tech meetup in SOMA featuring startup founders and engineers from prominent tech companies.',
  venue: 'The Creamery',
  attendees: 75,
  potentialContacts: 15,
  
  conditions: {
    requiredPhase: GamePhase.SETTLING_IN,
    requiredDistrict: 'SOMA',
    minimumStats: {
      'founder.wellBeing': {
        energy: 30,
        health: 0, // Minimum required
        stress: 0  // Minimum required
      }
    }
  },
  
  impact: {
    // Base impact just for attending
    relationships: {
      community: 5
    },
    founder: {
      wellBeing: {
        energy: -10,
        stress: 5,
        health: 0 // No impact
      }
    }
  },
  
  choices: [
    {
      id: 'strategic_networking',
      text: 'Focus on making valuable contacts - Strategically approach key people and engage in meaningful conversations about your startup.',
      successChance: 70,
      requiredStats: {
        'founder.skills': {
          networking: 30,
          technical: 0,
          leadership: 0,
          fundraising: 0,
          marketing: 0,
          execution: 0,
          growth: 0,
          sustainability: 0
        }
      },
      impact: {
        founder: {
          skills: {
            networking: 5,
            technical: 0,
            leadership: 0,
            fundraising: 0,
            marketing: 0,
            execution: 0,
            growth: 0,
            sustainability: 0
          },
          wellBeing: {
            energy: -20,
            stress: 10,
            health: 0
          }
        },
        relationships: {
          community: 15,
          investors: 5
        }
      }
    },
    {
      id: 'casual_socializing',
      text: 'Keep it casual - Enjoy the evening and let conversations flow naturally without pressure.',
      impact: {
        founder: {
          wellBeing: {
            stress: -5,
            energy: -5,
            health: 0
          },
          skills: {
            networking: 2,
            technical: 0,
            leadership: 0,
            fundraising: 0,
            marketing: 0,
            execution: 0,
            growth: 0,
            sustainability: 0
          }
        },
        relationships: {
          community: 8
        }
      }
    }
  ]
};

// More networking events can be added here... 