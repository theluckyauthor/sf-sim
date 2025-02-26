import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';
import { FounderStats, CompanyStats, LocationStats, GameProgress, FounderProfile, StartupProfile } from '../types/stats';

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

const ProfileHeader = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  margin-bottom: 10px;
`;

const ProfileName = styled.h2`
  font-size: 20px;
  margin: 0;
  color: white;
`;

const ProfileSubtitle = styled.div`
  font-size: 14px;
  color: #888;
`;

interface GameState {
  founder: FounderStats;
  company: CompanyStats;
  location: LocationStats;
  progress: GameProgress;
  founderProfile: FounderProfile;
  startupProfile: StartupProfile;
}

const StatusPanel: React.FC = () => {
  const { founder, company, location, progress, founderProfile, startupProfile } = useSelector((state: RootState) => state.game as GameState);

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

  // Format startup type for display
  const formatStartupType = (type: string) => {
    switch(type) {
      case 'ai_startup': return 'AI/ML Startup';
      case 'saas_startup': return 'B2B SaaS';
      case 'crypto_startup': return 'Web3/Crypto';
      case 'social_startup': return 'Social Impact';
      default: return type.replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
    }
  };

  // Format founder background for display
  const formatBackground = (background: string) => {
    switch(background) {
      case 'stanford_dropout': return 'Stanford Dropout';
      case 'bootcamp_grad': return 'Bootcamp Graduate';
      case 'tech_veteran': return 'Big Tech Veteran';
      case 'indie_hacker': return 'Indie Hacker';
      default: return background.replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
    }
  };

  // Format founder role for display
  const formatRole = (role: string) => {
    switch(role) {
      case 'technical_founder': return 'Technical Founder';
      case 'business_founder': return 'Business Founder';
      case 'visionary_founder': return 'Visionary Founder';
      case 'growth_founder': return 'Growth Hacker';
      default: return role.replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
    }
  };

  return (
    <Panel>
      <Section>
        <ProfileHeader>
          <ProfileName>{startupProfile.startupName}</ProfileName>
          <ProfileSubtitle>{formatStartupType(startupProfile.startupType)}</ProfileSubtitle>
        </ProfileHeader>
      </Section>

      <Section>
        <SectionTitle>👤 Founder: {founderProfile.founderName}</SectionTitle>
        <ProfileSubtitle>{formatBackground(founderProfile.background)} • {formatRole(founderProfile.role)}</ProfileSubtitle>
        <Grid>
          <StatItem>
            <Label>Health</Label>
            <Value color={founder.health <= 30 ? "#FF5722" : "#4CAF50"}>{founder.health}%</Value>
            <ProgressBar value={founder.health} color={founder.health <= 30 ? "#FF5722" : "#4CAF50"} />
          </StatItem>
          <StatItem>
            <Label>Energy</Label>
            <Value color={founder.energy <= 30 ? "#FF5722" : "#2196F3"}>{founder.energy}%</Value>
            <ProgressBar value={founder.energy} color={founder.energy <= 30 ? "#FF5722" : "#2196F3"} />
          </StatItem>
          <StatItem>
            <Label>Technical</Label>
            <Value>{founder.technical}%</Value>
            <ProgressBar value={founder.technical} color="#FF9800" />
          </StatItem>
          <StatItem>
            <Label>Business</Label>
            <Value>{founder.business}%</Value>
            <ProgressBar value={founder.business} color="#9C27B0" />
          </StatItem>
          <StatItem>
            <Label>Leadership</Label>
            <Value>{founder.leadership}%</Value>
            <ProgressBar value={founder.leadership} color="#E91E63" />
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
        <SectionTitle>🚀 Company Stats</SectionTitle>
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
            <Label>User Growth</Label>
            <Value>{company.userGrowth}%</Value>
            <ProgressBar value={company.userGrowth} color="#FF9800" />
          </StatItem>
          <StatItem>
            <Label>Revenue</Label>
            <Value color="#4CAF50">{formatCash(company.revenue)}</Value>
          </StatItem>
          <StatItem>
            <Label>Runway</Label>
            <Value color={company.runway <= 3 ? "#FF5722" : "#4CAF50"}>{company.runway} months</Value>
          </StatItem>
          <StatItem>
            <Label>Valuation</Label>
            <Value color="#4CAF50">{formatCash(company.valuation)}</Value>
          </StatItem>
          <StatItem>
            <Label>Team Size</Label>
            <Value>{company.teamSize}</Value>
          </StatItem>
          <StatItem>
            <Label>Team Morale</Label>
            <Value>{company.teamMorale}%</Value>
            <ProgressBar value={company.teamMorale} color="#FF5722" />
          </StatItem>
          <StatItem>
            <Label>Talent</Label>
            <Value>{company.talent}%</Value>
            <ProgressBar value={company.talent} color="#E91E63" />
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