import { GameEvent, GamePhase } from '../../types/stats';
import { RandomEvent } from '../../types/stats';

export const viralTweet: GameEvent = {
  "id": "viral_tweet_001",
  "category": "random",
  "title": "Viral Tweet Opportunity",
  "description": "One of your tweets about startup life is gaining traction. This could be a chance to build your personal brand.",
  "conditions": {
    "minimumStats": {
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
      "id": "share_insights",
      "text": "Share authentic insights about your founder journey and startup challenges.",
      "successChance": 80,
      "impact": {
        "founder": {},
        "company": {}
      }
    },
    {
      "id": "leverage_promotion",
      "text": "Use the momentum to promote your startup directly.",
      "impact": {
        "founder": {},
        "company": {}
      }
    }
  ]
};

export const serendipitousConnection: GameEvent = {
  "id": "serendipitous_connection_001",
  "category": "random",
  "title": "Unexpected Connection",
  "description": "You randomly meet a successful entrepreneur at a local coffee shop who shows interest in your startup.",
  "conditions": {},
  "impact": {
    "founder": {},
    "company": {}
  },
  "choices": [
    {
      "id": "seek_mentorship",
      "text": "Ask for mentorship and advice about your startup journey.",
      "successChance": 70,
      "impact": {
        "founder": {},
        "company": {}
      }
    },
    {
      "id": "pitch_opportunity",
      "text": "Take the chance to pitch your startup and seek investment.",
      "successChance": 40,
      "impact": {
        "founder": {},
        "company": {}
      }
    }
  ]
};

export const talentedCandidate: GameEvent = {
  "id": "talented_candidate_001",
  "category": "random",
  "title": "Unexpected Talent",
  "description": "A highly talented engineer from a top tech company reaches out, interested in joining your startup.",
  "conditions": {
    "minimumStats": {
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
      "id": "fast_track",
      "text": "Fast-track the hiring process with competitive offer",
      "successChance": 70,
      "impact": {
        "founder": {},
        "company": {}
      }
    },
    {
      "id": "careful_evaluation",
      "text": "Take time to evaluate fit and negotiate terms",
      "impact": {
        "founder": {},
        "company": {}
      }
    }
  ]
};

export const competitorAcquisition: GameEvent = {
  "id": "competitor_acquisition_001",
  "category": "random",
  "title": "Competitor Acquired",
  "description": "A major competitor just got acquired by a tech giant. The market is buzzing with speculation about industry consolidation.",
  "conditions": {
    "minimumStats": {
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
      "id": "aggressive_expansion",
      "text": "Seize the moment to capture their customers and market share",
      "successChance": 65,
      "impact": {
        "founder": {},
        "company": {}
      }
    },
    {
      "id": "strategic_positioning",
      "text": "Focus on differentiation and emphasize independence",
      "impact": {
        "founder": {},
        "company": {}
      }
    }
  ]
};

export const techCrisis: GameEvent = {
  "id": "tech_crisis_001",
  "category": "random",
  "title": "Infrastructure Emergency",
  "description": "A critical infrastructure provider is experiencing major outages affecting your service.",
  "conditions": {
    "minimumStats": {
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
      "id": "quick_fix",
      "text": "Implement immediate workaround to maintain service",
      "successChance": 60,
      "impact": {
        "founder": {},
        "company": {}
      }
    },
    {
      "id": "strategic_solution",
      "text": "Develop robust backup systems and infrastructure redundancy",
      "impact": {
        "founder": {},
        "company": {}
      }
    }
  ]
};

export const marketOpportunity: GameEvent = {
  "id": "market_opportunity_001",
  "category": "random",
  "title": "Market Shift",
  "description": "A sudden shift in the market creates an unexpected opportunity for your product.",
  "conditions": {
    "minimumStats": {
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
      "id": "rapid_pivot",
      "text": "Quickly pivot to capitalize on the new opportunity",
      "successChance": 70,
      "impact": {
        "founder": {},
        "company": {}
      }
    },
    {
      "id": "measured_approach",
      "text": "Carefully evaluate and gradually adapt the product",
      "impact": {
        "founder": {},
        "company": {}
      }
    }
  ]
};

export const viralTikTok: RandomEvent = {
  id: 'viral_tiktok_001',
  category: 'random',
  title: 'Unexpected TikTok Fame',
  description: 'Your product demo unexpectedly goes viral on TikTok, bringing massive attention!',
  probability: 0.05, // 5% chance
  
  conditions: {
    minimumStats: {
      'startup.product': {
        quality: 70,
        development: 0,
        innovation: 0,
        marketFit: 0,
        mvpProgress: 0
      }
    }
  },
  
  impact: {},
  
  choices: [
    {
      id: 'capitalize',
      text: 'Capitalize on the momentum - Launch a social media campaign',
      successChance: 75,
      impact: {
        startup: {
          market: {
            userGrowth: 30,
            brandReputation: 5,
            socialPresence: 0,
            marketFit: 0,
            userTraction: 0
          },
          finances: {
            revenue: 40000,
            burnRate: 5000,
            cash: -10000,
            valuation: 1000000
          }
        },
        founder: {
          skills: {
            marketing: 10,
            growth: 15,
            technical: 0,
            leadership: 0,
            networking: 0,
            fundraising: 0,
            execution: 0,
            sustainability: 0
          },
          wellBeing: {
            stress: 20,
            energy: -15,
            health: -5
          }
        }
      }
    },
    {
      id: 'cautious',
      text: 'Take a cautious approach - Focus on infrastructure scaling',
      impact: {
        startup: {
          product: {
            development: 15,
            quality: 10,
            innovation: 0,
            marketFit: 0,
            mvpProgress: 0
          },
          finances: {
            cash: -5000,
            burnRate: 1200,
            revenue: 0,
            valuation: 0
          }
        },
        founder: {
          skills: {
            technical: 10,
            execution: 10,
            leadership: 0,
            networking: 0,
            fundraising: 0,
            marketing: 0,
            growth: 0,
            sustainability: 0
          }
        }
      }
    }
  ]
};

export const acquiHire: GameEvent = {
  "id": "acquihire_opportunity_001",
  "category": "random",
  "title": "Acquihire Opportunity",
  "description": "A major tech company is interested in acquiring your company primarily for the team.",
  "conditions": {
    "requiredPhase": GamePhase.BOOTSTRAPPING,    "minimumStats": {
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
      "id": "accept_offer",
      "text": "Accept the acquihire offer",
      "impact": {
        "founder": {},
        "company": {}
      }
    },
    {
      "id": "reject_offer",
      "text": "Reject and continue building",
      "impact": {
        "founder": {},
        "company": {}
      }
    }
  ]
};

export const marketingMagic: GameEvent = {
  "id": "marketing_magic_001",
  "category": "random",
  "title": "Unexpected Marketing Success",
  "description": "Your latest marketing campaign resonates unexpectedly well with a new market segment.",
  "conditions": {
    "minimumStats": {
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
      "id": "double_down",
      "text": "Double down on the new market segment",
      "successChance": 70,
      "impact": {
        "founder": {},
        "company": {}
      }
    },
    {
      "id": "balanced_approach",
      "text": "Maintain a balanced approach between markets",
      "impact": {
        "founder": {},
        "company": {}
      }
    }
  ]
}; 