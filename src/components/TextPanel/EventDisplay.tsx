import React from 'react';
import { GameEvent, GameEventChoice } from '../../types/stats';
import {
  Title,
  Description,
  ChoicesContainer,
  ChoiceButton
} from './StyledComponents';

interface EventDisplayProps {
  event: GameEvent;
  onChoiceClick: (choice: GameEventChoice) => void;
}

const EventDisplay: React.FC<EventDisplayProps> = ({ event, onChoiceClick }) => {
  return (
    <>
      <Title>{event.title}</Title>
      <Description>{event.description}</Description>
      <ChoicesContainer>
        {event.choices.map((choice) => (
          <ChoiceButton 
            key={choice.id}
            onClick={() => onChoiceClick(choice)}
          >
            {choice.text}
          </ChoiceButton>
        ))}
      </ChoicesContainer>
    </>
  );
};

export default EventDisplay; 