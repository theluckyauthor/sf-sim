import { GameEvent, GamePhase } from '../types/stats';
import { phaseData } from '../data/phaseData';

// Create phase intro events
export const createPhaseIntroEvent = (phase: GamePhase): GameEvent => {
  const phaseInfo = phaseData[phase];
  
  return {
    id: `phase_intro_${phase.toLowerCase()}`,
    category: 'random',
    title: phaseInfo.name,
    description: phaseInfo.description,
    conditions: {
      requiredPhase: phase
    },
    impact: {},
    choices: [
      {
        id: `begin_${phase.toLowerCase()}`,
        text: `Begin ${phaseInfo.name}`,
        impact: {}
      }
    ]
  };
};

export const phaseIntroEvents: Record<GamePhase, GameEvent> = {
  [GamePhase.SETTLING_IN]: createPhaseIntroEvent(GamePhase.SETTLING_IN),
  [GamePhase.IDEATION]: createPhaseIntroEvent(GamePhase.IDEATION),
  [GamePhase.BOOTSTRAPPING]: createPhaseIntroEvent(GamePhase.BOOTSTRAPPING),
  [GamePhase.FUNDRAISING]: createPhaseIntroEvent(GamePhase.FUNDRAISING),
  [GamePhase.SCALING]: createPhaseIntroEvent(GamePhase.SCALING)
}; 