import { GameEvent, GamePhase } from '../../types/stats';

export const techMeetupSOMA: GameEvent = {
  id: 'tech_meetup_soma_001',
  category: 'networking',
  title: 'SOMA Tech Mixer',
  description: 'A trendy tech meetup in SOMA featuring startup founders and engineers from prominent tech companies.',
  conditions: {
    requiredPhase: GamePhase.SETTLING_IN,
    requiredDistrict: 'SOMA',
    minimumStats: {
      founder: {
        energy: 30
      }
    }
  },
  
  impact: {
    founder: {
      energy: -10,
      reputation: 5
    }
  },
  
  choices: [
    {
      id: 'strategic_networking',
      text: 'Focus on making valuable contacts - Strategically approach key people and engage in meaningful conversations about your startup.',
      successChance: 70,
      requiredStats: {
        founder: {
          technical: 30,
          business: 20
        }
      },
      impact: {
        founder: {
          energy: -20,
          technical: 5,
          business: 5,
          reputation: 15
        },
        company: {
          teamMorale: 5
        }
      }
    },
    {
      id: 'casual_socializing',
      text: 'Keep it casual - Enjoy the evening and let conversations flow naturally without pressure.',
      impact: {
        founder: {
          energy: -5,
          reputation: 8
        },
        company: {
          teamMorale: 3
        }
      }
    }
  ]
};

export const founderCoffee: GameEvent = {
  id: 'founder_coffee_001',
  category: 'networking',
  title: 'Founders Morning Coffee',
  description: 'A casual morning coffee meetup for early-stage founders to share experiences and advice.',
  conditions: {
    requiredPhase: GamePhase.IDEATION,
    requiredDistrict: 'Mission Bay',
    minimumStats: {
      founder: {
        energy: 20
      }
    }
  },
  
  impact: {
    founder: {
      energy: 5,
      reputation: 3
    }
  },
  
  choices: [
    {
      id: 'share_challenges',
      text: 'Share your current challenges and seek advice from experienced founders.',
      successChance: 85,
      impact: {
        founder: {
          energy: -5,
          technical: 3,
          leadership: 2,
          business: 2,
          reputation: 10
        },
        company: {
          teamMorale: 5,
          marketFit: 2
        }
      }
    },
    {
      id: 'listen_and_learn',
      text: 'Listen to others\' experiences and take mental notes.',
      impact: {
        founder: {
          energy: 5,
          technical: 1,
          leadership: 1,
          business: 1,
          reputation: 5
        },
        company: {
          teamMorale: 2
        }
      }
    }
  ]
}; 