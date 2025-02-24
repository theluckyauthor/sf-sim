import { GameEvent, GamePhase } from '../../types/stats';

export const acceleratorApplication: GameEvent = {
  "id": "accelerator_application_001",
  "category": "funding",
  "title": "Accelerator Opportunity",
  "description": "Applications are open for Y Combinator's next batch. Getting in could supercharge your startup, but the process is highly competitive and requires significant preparation.",
  "conditions": {
    "requiredPhase": GamePhase.BOOTSTRAPPING,
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
      "id": "all_in_application",
      "text": "Go all-in: Pause other work to perfect the application and prepare extensively for interviews.",
      "successChance": 30,
      "impact": {
        "founder": {},
        "company": {}
      }
    },
    {
      "id": "balanced_approach",
      "text": "Take a balanced approach: Apply while maintaining product development momentum.",
      "successChance": 15,
      "impact": {
        "founder": {},
        "company": {}
      }
    },
    {
      "id": "apply_later",
      "text": "Focus on growth now and apply in a future batch when better prepared.",
      "impact": {
        "founder": {},
        "company": {}
      }
    }
  ]
};

export const acceleratorInterview: GameEvent = {
  "id": "accelerator_interview_001",
  "category": "funding",
  "title": "YC Interview Preparation",
  "description": "Your application impressed YC partners and you've been invited for an interview. You have one week to prepare for the most important 10 minutes of your startup journey.",
  "conditions": {
    "requiredPhase": GamePhase.BOOTSTRAPPING,
    "activeMilestone": "yc_acceptance_001"
  },
  "impact": {
    "founder": {},
    "company": {}
  },
  "choices": [
    {
      "id": "intensive_prep",
      "text": "Conduct intensive mock interviews with experienced founders and refine your pitch.",
      "successChance": 70,
      "impact": {
        "founder": {},
        "company": {}
      }
    },
    {
      "id": "focus_product",
      "text": "Focus on improving your product demo while maintaining basic interview preparation.",
      "successChance": 50,
      "impact": {
        "founder": {},
        "company": {}
      }
    }
  ]
}; 