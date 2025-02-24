import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { 
  advancePhase, 
  updateFounder, 
  updateStartup, 
  updateRelationships,
  advanceTime 
} from '../store/gameSlice';
import { GameEventChoice, GamePhase } from '../types/stats';
import { getNextEvent, checkGameOver, checkPhaseAdvancement } from '../events';
import { RootState } from '../store/store';

const Panel = styled.div`
  background-color: #2a2a2a;
  border-radius: 8px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  overflow-y: auto;
`;

const Title = styled.h2`
  font-size: 24px;
  margin: 0;
  color: #4CAF50;
`;

const Description = styled.p`
  font-size: 16px;
  line-height: 1.6;
  margin: 0;
`;

const ChoicesContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 20px;
`;

const ChoiceButton = styled.button`
  background-color: #3a3a3a;
  border: none;
  border-radius: 4px;
  padding: 15px;
  color: #ffffff;
  font-size: 16px;
  text-align: left;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: #4a4a4a;
  }

  &:focus {
    outline: 2px solid #4CAF50;
    outline-offset: -2px;
  }
`;

interface TextPanelProps {
  currentEvent?: {
    id: string;
    title: string;
    description: string;
    choices: GameEventChoice[];
  };
}

const TextPanel: React.FC<TextPanelProps> = ({ currentEvent }) => {
  const dispatch = useDispatch();
  const gameState = useSelector((state: RootState) => state.game);
  const [usedEventIds, setUsedEventIds] = React.useState<string[]>([]);

  const handleStartJourney = () => {
    dispatch(advancePhase());
  };

  const handleChoiceClick = (choice: GameEventChoice) => {
    const { impact } = choice;
    
    // Apply impacts to different aspects of the game state
    if (impact.founder) {
      dispatch(updateFounder(impact.founder));
    }
    if (impact.startup) {
      dispatch(updateStartup(impact.startup));
    }
    if (impact.relationships) {
      dispatch(updateRelationships(impact.relationships));
    }
    
    // Advance time
    dispatch(advanceTime());

    // Check game over conditions
    const gameOverReason = checkGameOver(gameState);
    if (gameOverReason) {
      alert(gameOverReason);
      return;
    }

    // Check if we can advance to next phase
    if (checkPhaseAdvancement(gameState.currentPhase, gameState)) {
      dispatch(advancePhase());
      setUsedEventIds([]); // Reset used events for new phase
    } else {
      // Add current event to used events
      if (currentEvent) {
        setUsedEventIds(prev => [...prev, currentEvent.id]);
      }
    }
  };

  if (!currentEvent) {
    return (
      <Panel>
        <Title>Welcome to SF SIM</Title>
        <Description>
          You're about to embark on a journey as a startup founder in San Francisco.
          Your decisions will shape your company's future and your personal life.
          Are you ready to begin?
        </Description>
        <ChoicesContainer>
          <ChoiceButton onClick={handleStartJourney}>Start Your Journey</ChoiceButton>
        </ChoicesContainer>
      </Panel>
    );
  }

  return (
    <Panel>
      <Title>{currentEvent.title}</Title>
      <Description>{currentEvent.description}</Description>
      <ChoicesContainer>
        {currentEvent.choices.map((choice) => (
          <ChoiceButton 
            key={choice.id}
            onClick={() => handleChoiceClick(choice)}
          >
            {choice.text}
          </ChoiceButton>
        ))}
      </ChoicesContainer>
    </Panel>
  );
};

export default TextPanel; 