import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../store/store';
import { setCurrentEvent } from '../store/gameSlice';
import StatusPanel from './StatusPanel';
import TextPanel from './TextPanel';
import HistoryLog from './HistoryLog';
import AchievementsPanel from './AchievementsPanel';
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

const TabContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

const TabButtons = styled.div`
  display: flex;
  margin-bottom: 15px;
`;

const TabButton = styled.button<{ active: boolean }>`
  background-color: ${props => props.active ? '#4CAF50' : '#2a2a2a'};
  color: ${props => props.active ? '#ffffff' : '#aaaaaa'};
  border: none;
  padding: 10px 15px;
  border-radius: 4px;
  margin-right: 10px;
  cursor: pointer;
  transition: background-color 0.2s;
  
  &:hover {
    background-color: ${props => props.active ? '#4CAF50' : '#3a3a3a'};
  }
  
  &:last-child {
    margin-right: 0;
  }
`;

const TabContent = styled.div`
  flex: 1;
  overflow: hidden;
`;

const GameContainer: React.FC = () => {
  const dispatch = useDispatch();
  const gameState = useSelector((state: RootState) => state.game);
  const [usedEventIds, setUsedEventIds] = useState<string[]>([]);
  const [activeTab, setActiveTab] = useState<'history' | 'achievements'>('history');
  const [completedEvents, setCompletedEvents] = useState<string[]>([]);

  useEffect(() => {
    // Get next event when phase changes or after handling a choice
    if (!gameState.currentEvent && completedEvents.length > 0) {
      const nextEvent = getNextEvent(gameState.progress.phase, completedEvents, gameState);
      if (nextEvent) {
        // Add a small delay to ensure state updates are complete
        setTimeout(() => {
          dispatch(setCurrentEvent(nextEvent));
        }, 200);
      }
    }
  }, [gameState.progress.phase, completedEvents, dispatch, gameState]);

  const handleEventComplete = (eventId: string) => {
    console.log(`Event completed: ${eventId}`);
    // Update completed events in state
    setCompletedEvents(prev => {
      if (!prev.includes(eventId)) {
        return [...prev, eventId];
      }
      return prev;
    });
    
    // Get the next event after a short delay to allow state updates
    setTimeout(() => {
      const nextEvent = getNextEvent(gameState.progress.phase, [...completedEvents, eventId], gameState);
      if (nextEvent) {
        dispatch(setCurrentEvent(nextEvent));
      }
    }, 300); // Increased delay to ensure state updates are complete
  };

  return (
    <Container>
      <StatusPanel />
      <TextPanel 
        currentEvent={gameState.currentEvent} 
        onEventComplete={handleEventComplete}
      />
      <TabContainer>
        <TabButtons>
          <TabButton 
            active={activeTab === 'history'} 
            onClick={() => setActiveTab('history')}
          >
            📜 History
          </TabButton>
          <TabButton 
            active={activeTab === 'achievements'} 
            onClick={() => setActiveTab('achievements')}
          >
            🏆 Achievements
          </TabButton>
        </TabButtons>
        <TabContent>
          {activeTab === 'history' ? <HistoryLog /> : <AchievementsPanel />}
        </TabContent>
      </TabContainer>
    </Container>
  );
};

export default GameContainer; 