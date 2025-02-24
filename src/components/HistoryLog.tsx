import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';

const Container = styled.div`
  background-color: #2a2a2a;
  border-radius: 8px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 15px;
  height: 100%;
  overflow-y: auto;
`;

const Title = styled.h2`
  font-size: 20px;
  color: #4CAF50;
  margin: 0;
  padding-bottom: 10px;
  border-bottom: 1px solid #333;
`;

const LogEntry = styled.div`
  padding: 12px;
  background-color: #1a1a1a;
  border-radius: 6px;
  margin-bottom: 8px;
  
  &:last-child {
    margin-bottom: 0;
  }
`;

const Timestamp = styled.div`
  font-size: 12px;
  color: #666;
  margin-bottom: 4px;
`;

const EventTitle = styled.div`
  font-size: 14px;
  color: #4CAF50;
  margin-bottom: 6px;
  font-weight: bold;
`;

const EventDescription = styled.div`
  font-size: 14px;
  color: #ccc;
  line-height: 1.4;
`;

const Consequence = styled.div<{ color: string }>`
  font-size: 13px;
  color: ${props => props.color};
  margin-top: 6px;
  padding-left: 12px;
  border-left: 2px solid ${props => props.color};
`;

interface HistoryEntry {
  timestamp: string;
  title: string;
  description: string;
  consequences: {
    text: string;
    type: 'positive' | 'negative' | 'neutral';
  }[];
}

const HistoryLog: React.FC = () => {
  const historyEntries = useSelector((state: RootState) => state.game.history) as HistoryEntry[];

  const getConsequenceColor = (type: 'positive' | 'negative' | 'neutral') => {
    switch (type) {
      case 'positive':
        return '#4CAF50';
      case 'negative':
        return '#FF5722';
      default:
        return '#888';
    }
  };

  return (
    <Container>
      <Title>📜 History Log</Title>
      {historyEntries.map((entry, index) => (
        <LogEntry key={index}>
          <Timestamp>{entry.timestamp}</Timestamp>
          <EventTitle>{entry.title}</EventTitle>
          <EventDescription>{entry.description}</EventDescription>
          {entry.consequences.map((consequence, idx) => (
            <Consequence key={idx} color={getConsequenceColor(consequence.type)}>
              {consequence.text}
            </Consequence>
          ))}
        </LogEntry>
      ))}
    </Container>
  );
};

export default HistoryLog; 