import React from 'react';
import {
  GameOverContainer,
  GameOverTitle,
  GameOverDescription,
  RestartButton
} from './StyledComponents';

interface GameOverProps {
  reason: string;
  onRestart: () => void;
}

const GameOver: React.FC<GameOverProps> = ({ reason, onRestart }) => {
  return (
    <GameOverContainer>
      <GameOverTitle>Game Over</GameOverTitle>
      <GameOverDescription>{reason}</GameOverDescription>
      <RestartButton onClick={onRestart}>Start Over</RestartButton>
    </GameOverContainer>
  );
};

export default GameOver; 