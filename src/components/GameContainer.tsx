import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';
import StatusPanel from './StatusPanel';
import TextPanel from './TextPanel';
import MapView from './MapView';

const Container = styled.div`
  display: grid;
  grid-template-columns: 250px 1fr 250px;
  grid-template-rows: 1fr;
  gap: 20px;
  height: 100vh;
  padding: 20px;
  background-color: #1a1a1a;
  color: #ffffff;
`;

const GameContainer: React.FC = () => {
  const gameState = useSelector((state: RootState) => state.game);

  return (
    <Container>
      <StatusPanel />
      <TextPanel />
      <MapView />
    </Container>
  );
};

export default GameContainer; 