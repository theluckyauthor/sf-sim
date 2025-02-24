import { NetworkingEvent, GamePhase, SkillStats, WellBeingStats } from '../../types/stats';

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
        health: 0,
        stress: 0
      }
    }
  },
  
  impact: {
    relationships: {
      community: 5
    },
    founder: {
      wellBeing: {
        energy: -10,
        stress: 5,
        health: 0
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

export const founderCoffee: NetworkingEvent = {
  id: 'founder_coffee_001',
  category: 'networking',
  title: 'Founders Morning Coffee',
  description: 'A casual morning coffee meetup for early-stage founders to share experiences and advice.',
  venue: 'Philz Coffee - Mission Bay',
  attendees: 15,
  potentialContacts: 5,
  
  conditions: {
    requiredPhase: GamePhase.IDEATION,
    requiredDistrict: 'Mission Bay',
    minimumStats: {
      'founder.wellBeing': {
        energy: 20,
        health: 0,
        stress: 0
      }
    }
  },
  
  impact: {
    relationships: {
      community: 3
    },
    founder: {
      wellBeing: {
        energy: 5, // Coffee boost!
        stress: -5,
        health: 0
      }
    }
  },
  
  choices: [
    {
      id: 'share_challenges',
      text: 'Share your current challenges and seek advice from experienced founders.',
      successChance: 85,
      impact: {
        founder: {
          skills: {
            networking: 3,
            technical: 0,
            leadership: 2,
            fundraising: 0,
            marketing: 0,
            execution: 2,
            growth: 0,
            sustainability: 0
          },
          wellBeing: {
            energy: 0,
            stress: -10,
            health: 0
          }
        },
        relationships: {
          community: 10
        },
        triggerMilestone: 'network_building_001' // Could trigger a networking milestone
      }
    },
    {
      id: 'listen_and_learn',
      text: 'Listen to others\' experiences and take mental notes.',
      impact: {
        founder: {
          skills: {
            networking: 1,
            technical: 0,
            leadership: 1,
            fundraising: 0,
            marketing: 0,
            execution: 1,
            growth: 0,
            sustainability: 0
          },
          wellBeing: {
            energy: 5,
            stress: -8,
            health: 0
          }
        },
        relationships: {
          community: 5
        }
      }
    }
  ]
}; 