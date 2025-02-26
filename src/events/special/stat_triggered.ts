import { GameEvent, GamePhase } from '../../types/stats';

// LOW STAT EVENTS - These trigger when stats are below certain thresholds

export const burnoutCrisis: GameEvent = {
  id: "burnout_crisis_001",
  category: "personal",
  title: "Burnout Crisis",
  description: "You've been pushing yourself too hard for too long. Your body and mind are shutting down, forcing you to confront your unsustainable work habits.",
  conditions: {
    minimumStats: {
      founder: {
        energy: 0,  // This will never trigger normally
        health: 0   // This will never trigger normally
      }
    }
  },
  impact: {
    founder: {},
    company: {}
  },
  choices: [
    {
      id: "hospital_stay",
      text: "Take a week off for recovery (unavoidable)",
      impact: {
        founder: {
          energy: 40,
          health: 30,
          cash: -5000,  // Medical bills
          technical: -5,
          business: -5
        },
        company: {
          teamMorale: -10,
          productQuality: -5,
          runway: -1
        }
      }
    }
  ]
};

export const cashCrisis: GameEvent = {
  id: "cash_crisis_001",
  category: "funding",
  title: "Cash Crisis",
  description: "Your bank account is nearly empty, and payroll is due next week. This is a make-or-break moment for your startup.",
  conditions: {
    minimumStats: {
      company: {
        runway: 0  // This will never trigger normally
      }
    }
  },
  impact: {
    founder: {},
    company: {}
  },
  choices: [
    {
      id: "emergency_funding",
      text: "Secure emergency funding at terrible terms (unavoidable)",
      impact: {
        founder: {
          reputation: -15,
          business: 10,
          energy: -20
        },
        company: {
          runway: 3,
          valuation: -200000,
          teamMorale: -15
        }
      }
    }
  ]
};

export const teamRebellion: GameEvent = {
  id: "team_rebellion_001",
  category: "team",
  title: "Team Rebellion",
  description: "Your team has reached a breaking point. Several key members have approached you with an ultimatum about working conditions and company direction.",
  conditions: {
    minimumStats: {
      company: {
        teamMorale: 0,  // This will never trigger normally
        teamSize: 3     // Only happens if you have at least 3 team members
      }
    }
  },
  impact: {
    founder: {},
    company: {}
  },
  choices: [
    {
      id: "emergency_intervention",
      text: "Call an emergency all-hands and address concerns (unavoidable)",
      impact: {
        founder: {
          leadership: 15,
          energy: -25,
          reputation: -10
        },
        company: {
          teamMorale: 30,
          runway: -1
        }
      }
    }
  ]
};

// HIGH STAT EVENTS - These trigger when stats are above certain thresholds

export const viralProductSuccess: GameEvent = {
  id: "viral_product_success_001",
  category: "product",
  title: "Unexpected Viral Success",
  description: "Your product has gone viral overnight! User signups are off the charts, and major tech publications are scrambling to cover your startup.",
  conditions: {
    minimumStats: {
      company: {
        productQuality: 75,
        userGrowth: 60
      }
    }
  },
  impact: {
    founder: {},
    company: {}
  },
  choices: [
    {
      id: "scale_infrastructure",
      text: "Scramble to scale infrastructure (unavoidable)",
      impact: {
        founder: {
          energy: -30,
          reputation: 40,
          technical: 15
        },
        company: {
          userGrowth: 50,
          revenue: 50000,
          valuation: 1000000,
          productQuality: -10  // Technical debt from rushing
        }
      }
    }
  ]
};

export const acquisitionOffer: GameEvent = {
  id: "acquisition_offer_001",
  category: "market",
  title: "Unexpected Acquisition Offer",
  description: "A major tech company has approached you with an acquisition offer that's hard to ignore. This could be life-changing money, but it would mean giving up control of your vision.",
  conditions: {
    minimumStats: {
      company: {
        valuation: 2000000,
        marketFit: 70
      },
      founder: {
        reputation: 60
      }
    }
  },
  impact: {
    founder: {},
    company: {}
  },
  choices: [
    {
      id: "consider_offer",
      text: "Consider the offer seriously",
      impact: {
        founder: {
          cash: 5000000,  // Personal payout
          energy: 20,     // Relief
          reputation: -10 // Some see it as selling out
        },
        company: {
          teamMorale: -20,
          teamSize: -2    // Some team members leave
        }
      }
    },
    {
      id: "reject_offer",
      text: "Politely decline and stay independent",
      impact: {
        founder: {
          leadership: 20,
          reputation: 15,
          energy: -10     // Stress of making a big decision
        },
        company: {
          teamMorale: 25,
          valuation: 500000  // Market sees you as more valuable
        }
      }
    }
  ]
};

// WILD EVENTS - These are random events with unavoidable outcomes

export const naturalDisaster: GameEvent = {
  id: "natural_disaster_001",
  category: "random",
  title: "Earthquake in San Francisco",
  description: "A 6.2 magnitude earthquake has hit San Francisco. Your office has suffered some damage, and operations are disrupted.",
  conditions: {
    minimumStats: {}  // No minimum stats, can happen anytime
  },
  impact: {
    founder: {},
    company: {}
  },
  choices: [
    {
      id: "handle_disaster",
      text: "Deal with the aftermath (unavoidable)",
      impact: {
        founder: {
          energy: -20,
          health: -10,
          leadership: 15
        },
        company: {
          productQuality: -10,
          runway: -1,
          teamMorale: -15
        },
        location: {
          networkingScore: 15  // Community comes together
        }
      }
    }
  ]
};

export const competitorBankruptcy: GameEvent = {
  id: "competitor_bankruptcy_001",
  category: "market",
  title: "Major Competitor Goes Bankrupt",
  description: "Your biggest competitor has unexpectedly filed for bankruptcy, leaving their customers stranded and looking for alternatives.",
  conditions: {
    minimumStats: {
      company: {
        productQuality: 50  // Your product needs to be decent to capitalize
      }
    }
  },
  impact: {
    founder: {},
    company: {}
  },
  choices: [
    {
      id: "seize_opportunity",
      text: "Seize the market opportunity (unavoidable)",
      impact: {
        founder: {
          energy: -25,
          business: 20,
          reputation: 25
        },
        company: {
          userGrowth: 40,
          revenue: 30000,
          teamSize: 2,  // Need to hire to handle growth
          runway: -2    // Costs to scale
        }
      }
    }
  ]
};

export const marketCrash: GameEvent = {
  id: "market_crash_001",
  category: "funding",
  title: "Tech Market Crash",
  description: "The tech market has crashed overnight. VCs are pulling term sheets, startups are laying off employees, and panic is spreading.",
  conditions: {
    minimumStats: {}  // No minimum stats, can happen anytime
  },
  impact: {
    founder: {},
    company: {}
  },
  choices: [
    {
      id: "weather_storm",
      text: "Hunker down and weather the storm (unavoidable)",
      impact: {
        founder: {
          energy: -30,
          health: -15,
          cash: -10000,
          leadership: 25
        },
        company: {
          valuation: -500000,
          runway: -3,
          teamMorale: -25
        }
      }
    }
  ]
};

export const celebrityEndorsement: GameEvent = {
  id: "celebrity_endorsement_001",
  category: "random",
  title: "Unexpected Celebrity Endorsement",
  description: "A major tech celebrity has publicly praised your product on social media, bringing a flood of attention to your startup.",
  conditions: {
    minimumStats: {
      company: {
        productQuality: 60
      }
    }
  },
  impact: {
    founder: {},
    company: {}
  },
  choices: [
    {
      id: "ride_wave",
      text: "Ride the wave of publicity (unavoidable)",
      impact: {
        founder: {
          energy: -20,
          reputation: 30
        },
        company: {
          userGrowth: 35,
          revenue: 25000,
          valuation: 750000
        }
      }
    }
  ]
};

export const keyEmployeePoached: GameEvent = {
  id: "key_employee_poached_001",
  category: "team",
  title: "Key Employee Poached",
  description: "Your most talented engineer has been offered a position at a major tech company with a compensation package you can't match.",
  conditions: {
    minimumStats: {
      company: {
        teamSize: 4,
        talent: 70
      }
    }
  },
  impact: {
    founder: {},
    company: {}
  },
  choices: [
    {
      id: "accept_departure",
      text: "Accept their departure and wish them well (unavoidable)",
      impact: {
        founder: {
          energy: -15,
          leadership: 10
        },
        company: {
          teamSize: -1,
          productQuality: -15,
          talent: -10,
          teamMorale: -10
        }
      }
    }
  ]
}; 