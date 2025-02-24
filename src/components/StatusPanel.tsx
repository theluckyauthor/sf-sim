import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';
import { FounderStats, CompanyStats, LocationStats, GameProgress } from '../types/stats';

const Panel = styled.div`
  background-color: #2a2a2a;
  border-radius: 8px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
  min-width: 300px;
  max-width: 400px;
`;

const Section = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  padding-bottom: 15px;
  border-bottom: 1px solid #3a3a3a;

  &:last-child {
    border-bottom: none;
    padding-bottom: 0;
  }
`;

const SectionTitle = styled.h3`
  font-size: 16px;
  color: #4CAF50;
  margin: 0;
`;

const StatItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  min-width: 0;
`;

const Label = styled.span`
  font-size: 14px;
  color: #888;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const Value = styled.span<{ color?: string }>`
  font-size: 16px;
  font-weight: bold;
  color: ${props => props.color || 'white'};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
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

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 15px;
`;

interface GameState {
  founder: FounderStats;
  company: CompanyStats;
  location: LocationStats;
  progress: GameProgress;
}

const StatusPanel: React.FC = () => {
  const { founder, company, location, progress } = useSelector((state: RootState) => state.game as GameState);

  const formatCash = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      maximumFractionDigits: 0,
    }).format(amount);
  };

  const formatDate = (progress: GameProgress) => {
    return new Date(progress.year, progress.month - 1, progress.day).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
    });
  };

  return (
    <Panel>
      <Section>
        <SectionTitle>👤 Founder Profile</SectionTitle>
        <Grid>
          <StatItem>
            <Label>Health</Label>
            <Value>{founder.health}%</Value>
            <ProgressBar value={founder.health} color="#4CAF50" />
          </StatItem>
          <StatItem>
            <Label>Energy</Label>
            <Value>{founder.energy}%</Value>
            <ProgressBar value={founder.energy} color="#2196F3" />
          </StatItem>
          <StatItem>
            <Label>Cash</Label>
            <Value color="#4CAF50">{formatCash(founder.cash)}</Value>
          </StatItem>
          <StatItem>
            <Label>Reputation</Label>
            <Value>{founder.reputation}%</Value>
            <ProgressBar value={founder.reputation} color="#9C27B0" />
          </StatItem>
        </Grid>
      </Section>

      <Section>
        <SectionTitle>🚀 Startup</SectionTitle>
        <Grid>
          <StatItem>
            <Label>Product Quality</Label>
            <Value>{company.productQuality}%</Value>
            <ProgressBar value={company.productQuality} color="#2196F3" />
          </StatItem>
          <StatItem>
            <Label>Market Fit</Label>
            <Value>{company.marketFit}%</Value>
            <ProgressBar value={company.marketFit} color="#4CAF50" />
          </StatItem>
          <StatItem>
            <Label>Valuation</Label>
            <Value color="#4CAF50">{formatCash(company.valuation)}</Value>
          </StatItem>
          <StatItem>
            <Label>Team Morale</Label>
            <Value>{company.teamMorale}%</Value>
            <ProgressBar value={company.teamMorale} color="#FF5722" />
          </StatItem>
        </Grid>
      </Section>

      <Section>
        <SectionTitle>📍 Location</SectionTitle>
        <Grid>
          <StatItem>
            <Label>District</Label>
            <Value>{location.district}</Value>
          </StatItem>
          <StatItem>
            <Label>Type</Label>
            <Value>{location.type}</Value>
          </StatItem>
          <StatItem>
            <Label>Date</Label>
            <Value>{formatDate(progress)}</Value>
          </StatItem>
          <StatItem>
            <Label>Networking</Label>
            <Value color="#2196F3">+{location.networkingScore}</Value>
          </StatItem>
        </Grid>
      </Section>
    </Panel>
  );
};

export default StatusPanel; 