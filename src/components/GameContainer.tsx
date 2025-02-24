import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../store/store';
import { setCurrentEvent } from '../store/gameSlice';
import StatusPanel from './StatusPanel';
import TextPanel from './TextPanel';
import HistoryLog from './HistoryLog';
import { getNextEvent } from '../events';
import { GameEvent } from '../types/stats';

const Container = styled.div`
  display: grid;
  grid-template-columns: 400px 1fr 400px;
  grid-template-rows: 1fr;
  gap: 20px;
  height: 100vh;
  padding: 20px;
  background-color: #1a1a1a;
  color: #ffffff;
  & > * {
    min-width: 0; // Prevent grid items from overflowing
  }
`;

const GameContainer: React.FC = () => {
  const dispatch = useDispatch();
  const gameState = useSelector((state: RootState) => state.game);
  const [usedEventIds, setUsedEventIds] = useState<string[]>([]);

  useEffect(() => {
    // Get next event when phase changes or after handling a choice
    const nextEvent = getNextEvent(gameState.progress.phase, usedEventIds, gameState);
    if (nextEvent) {
      dispatch(setCurrentEvent(nextEvent));
    }
  }, [gameState.progress.phase, usedEventIds, dispatch]);

  const handleEventComplete = (eventId: string) => {
    setUsedEventIds(prev => [...prev, eventId]);
  };

  return (
    <Container>
      <StatusPanel />
      <TextPanel 
        currentEvent={gameState.currentEvent} 
        onEventComplete={handleEventComplete}
      />
      <HistoryLog />
    </Container>
  );
};

export default GameContainer; 