import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';

const Panel = styled.div`
  background-color: #2a2a2a;
  border-radius: 8px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const StatItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

const Label = styled.span`
  font-size: 14px;
  color: #888;
`;

const Value = styled.span`
  font-size: 18px;
  font-weight: bold;
`;

const ProgressBar = styled.div<{ value: number; color: string }>`
  width: 100%;
  height: 6px;
  background-color: #3a3a3a;
  border-radius: 3px;
  overflow: hidden;

  &::after {
    content: '';
    display: block;
    width: ${props => props.value}%;
    height: 100%;
    background-color: ${props => props.color};
    transition: width 0.3s ease;
  }
`;

const StatusPanel: React.FC = () => {
  const { founder, startup, time } = useSelector((state: RootState) => state.game);

  const formatCash = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      maximumFractionDigits: 0,
    }).format(amount);
  };

  const formatDate = (time: { day: number; month: number; year: number }) => {
    return new Date(time.year, time.month - 1, time.day).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
    });
  };

  return (
    <Panel>
      <StatItem>
        <Label>Company</Label>
        <Value>{startup.name || 'Unnamed Startup'}</Value>
        <Label>Stage: {startup.stage}</Label>
      </StatItem>

      <StatItem>
        <Label>Cash</Label>
        <Value>{formatCash(founder.finances.personalFunds)}</Value>
      </StatItem>

      <StatItem>
        <Label>Reputation</Label>
        <Value>{founder.reputation.personal}%</Value>
        <ProgressBar value={founder.reputation.personal} color="#4CAF50" />
      </StatItem>

      <StatItem>
        <Label>Stress</Label>
        <Value>{founder.wellBeing.stress}%</Value>
        <ProgressBar value={founder.wellBeing.stress} color="#FF5722" />
      </StatItem>

      <StatItem>
        <Label>Date</Label>
        <Value>{formatDate(time)}</Value>
      </StatItem>

      <StatItem>
        <Label>Employees</Label>
        <Value>{startup.team.size}</Value>
      </StatItem>

      <StatItem>
        <Label>Product Development</Label>
        <Value>{startup.product.development}%</Value>
        <ProgressBar value={startup.product.development} color="#2196F3" />
      </StatItem>
    </Panel>
  );
};

export default StatusPanel; 