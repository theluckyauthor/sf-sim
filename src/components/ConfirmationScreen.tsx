import React from 'react';
import styled from 'styled-components';
import { FounderStats, CompanyStats, District, LocationStats, GamePhase } from '../types/stats';

const Container = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #1a1a1a;
  color: #ffffff;
  padding: 40px 20px;
`;

const Card = styled.div`
  width: 100%;
  max-width: 800px;
  background-color: #2a2a2a;
  padding: 40px;
  border-radius: 16px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.3);
`;

const Title = styled.h2`
  font-size: 32px;
  margin-bottom: 30px;
  color: #4CAF50;
  text-align: center;
`;

const StatsPreview = styled.div`
  background: #1a1a1a;
  border-radius: 8px;
  padding: 20px;
  margin-bottom: 30px;
`;

const StatsSection = styled.div`
  margin-bottom: 20px;
  
  &:last-child {
    margin-bottom: 0;
  }
`;

const StatsSectionTitle = styled.h3`
  color: #4CAF50;
  font-size: 16px;
  margin-bottom: 10px;
  padding-bottom: 5px;
  border-bottom: 1px solid #333;
`;

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;
`;

const StatRow = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
  font-size: 14px;
`;

const StatLabel = styled.span`
  color: #888;
`;

const StatValue = styled.span`
  color: #4CAF50;
  font-weight: bold;
`;

const ButtonContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  margin-top: 30px;
`;

const Button = styled.button<{ primary?: boolean }>`
  width: 100%;
  padding: 15px;
  font-size: 18px;
  background: ${props => props.primary ? 'linear-gradient(45deg, #4CAF50, #2196F3)' : '#3a3a3a'};
  border: none;
  border-radius: 6px;
  color: white;
  cursor: pointer;
  transition: transform 0.2s;

  &:hover {
    transform: translateY(-2px);
  }
`;

interface Background {
  title: string;
  description?: string;
  stats: {
    founder: Partial<FounderStats>;
    company?: Partial<CompanyStats>;
  };
}

interface Role {
  title: string;
  description?: string;
  stats: {
    founder: Partial<FounderStats>;
  };
}

interface StartupType {
  title: string;
  description?: string;
  stats: {
    company: Partial<CompanyStats>;
  };
}

interface DistrictChoice {
  title: string;
  description?: string;
  district: District;
  stats: Partial<LocationStats>;
}

interface FormData {
  founderName: string;
  startupName: string;
}

interface ConfirmationScreenProps {
  founderData: {
    selectedBackground: Background;
    selectedRole: Role;
    selectedStartupType: StartupType;
    selectedDistrict: DistrictChoice;
    formData: FormData;
  };
  onBack: () => void;
  onConfirm: () => void;
}

const ConfirmationScreen: React.FC<ConfirmationScreenProps> = ({
  founderData,
  onBack,
  onConfirm,
}) => {
  const { selectedBackground, selectedRole, selectedStartupType, selectedDistrict, formData } = founderData;

  return (
    <Container>
      <Card>
        <Title>Ready to Start Your Journey?</Title>
        
        <StatsPreview>
          <StatsSection>
            <StatsSectionTitle>👤 Founder Profile</StatsSectionTitle>
            <StatsGrid>
              <StatRow>
                <StatLabel>Name</StatLabel>
                <StatValue>{formData?.founderName || 'Unknown'}</StatValue>
              </StatRow>
              <StatRow>
                <StatLabel>Background</StatLabel>
                <StatValue>{selectedBackground?.title || 'Unknown'}</StatValue>
              </StatRow>
              <StatRow>
                <StatLabel>Starting Cash</StatLabel>
                <StatValue>${(selectedBackground?.stats?.founder?.cash || 0).toLocaleString()}</StatValue>
              </StatRow>
              <StatRow>
                <StatLabel>Reputation</StatLabel>
                <StatValue>{selectedBackground?.stats?.founder?.reputation || 0}/100</StatValue>
              </StatRow>
            </StatsGrid>
          </StatsSection>

          <StatsSection>
            <StatsSectionTitle>💼 Role & Skills</StatsSectionTitle>
            <StatsGrid>
              <StatRow>
                <StatLabel>Role</StatLabel>
                <StatValue>{selectedRole?.title || 'Unknown'}</StatValue>
              </StatRow>
              {selectedRole?.stats?.founder && (
                <>
                  <StatRow>
                    <StatLabel>Technical</StatLabel>
                    <StatValue style={{ color: (selectedRole.stats.founder.technical || 0) > 0 ? '#4CAF50' : '#FF5722' }}>
                      {(selectedRole.stats.founder.technical || 0) > 0 ? '+' : ''}{selectedRole.stats.founder.technical || 0}
                    </StatValue>
                  </StatRow>
                  <StatRow>
                    <StatLabel>Business</StatLabel>
                    <StatValue style={{ color: (selectedRole.stats.founder.business || 0) > 0 ? '#4CAF50' : '#FF5722' }}>
                      {(selectedRole.stats.founder.business || 0) > 0 ? '+' : ''}{selectedRole.stats.founder.business || 0}
                    </StatValue>
                  </StatRow>
                  <StatRow>
                    <StatLabel>Leadership</StatLabel>
                    <StatValue style={{ color: (selectedRole.stats.founder.leadership || 0) > 0 ? '#4CAF50' : '#FF5722' }}>
                      {(selectedRole.stats.founder.leadership || 0) > 0 ? '+' : ''}{selectedRole.stats.founder.leadership || 0}
                    </StatValue>
                  </StatRow>
                </>
              )}
            </StatsGrid>
          </StatsSection>

          <StatsSection>
            <StatsSectionTitle>🚀 Startup Details</StatsSectionTitle>
            <StatsGrid>
              <StatRow>
                <StatLabel>Company</StatLabel>
                <StatValue>{formData?.startupName || 'Unknown'}</StatValue>
              </StatRow>
              <StatRow>
                <StatLabel>Type</StatLabel>
                <StatValue>{selectedStartupType?.title || 'Unknown'}</StatValue>
              </StatRow>
              <StatRow>
                <StatLabel>Initial Valuation</StatLabel>
                <StatValue>${(selectedStartupType?.stats?.company?.valuation || 0).toLocaleString()}</StatValue>
              </StatRow>
              <StatRow>
                <StatLabel>Product Quality</StatLabel>
                <StatValue>{selectedStartupType?.stats?.company?.productQuality || 0}/100</StatValue>
              </StatRow>
              <StatRow>
                <StatLabel>Market Fit</StatLabel>
                <StatValue>{selectedStartupType?.stats?.company?.marketFit || 0}/100</StatValue>
              </StatRow>
            </StatsGrid>
          </StatsSection>

          <StatsSection>
            <StatsSectionTitle>📍 Location</StatsSectionTitle>
            <StatsGrid>
              <StatRow>
                <StatLabel>District</StatLabel>
                <StatValue>{selectedDistrict?.title || 'Unknown'}</StatValue>
              </StatRow>
              <StatRow>
                <StatLabel>Type</StatLabel>
                <StatValue>{selectedDistrict?.stats?.type || 'Unknown'}</StatValue>
              </StatRow>
              <StatRow>
                <StatLabel>Networking Score</StatLabel>
                <StatValue>{selectedDistrict?.stats?.networkingScore || 0}/100</StatValue>
              </StatRow>
            </StatsGrid>
          </StatsSection>
        </StatsPreview>

        <ButtonContainer>
          <Button onClick={onBack}>Go Back</Button>
          <Button primary onClick={onConfirm}>Start Your Journey</Button>
        </ButtonContainer>
      </Card>
    </Container>
  );
};

export default ConfirmationScreen; 