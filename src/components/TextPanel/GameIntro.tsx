import React from 'react';
import { gameIntro } from '../../data/gameIntro';
import {
  IntroContainer,
  IntroTitle,
  IntroContent,
  Title,
  MechanicsList,
  MechanicItem,
  MechanicTitle,
  MechanicDescription,
  Button
} from './StyledComponents';

interface GameIntroProps {
  onStartJourney: () => void;
}

const GameIntro: React.FC<GameIntroProps> = ({ onStartJourney }) => {
  return (
    <IntroContainer>
      <IntroTitle>{gameIntro.title}</IntroTitle>
      
      {gameIntro.content.map((paragraph, index) => (
        <IntroContent key={index}>{paragraph}</IntroContent>
      ))}
      
      <Title>Game Mechanics</Title>
      <MechanicsList>
        {gameIntro.mechanics.map((mechanic, index) => (
          <MechanicItem key={index}>
            <MechanicTitle>{mechanic.title}</MechanicTitle>
            <MechanicDescription>{mechanic.description}</MechanicDescription>
          </MechanicItem>
        ))}
      </MechanicsList>
      
      <Button onClick={onStartJourney}>Begin Your Journey</Button>
    </IntroContainer>
  );
};

export default GameIntro; 