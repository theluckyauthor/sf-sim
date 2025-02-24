import React from 'react';
import styled from 'styled-components';

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

interface ConfirmationScreenProps {
  founderData: {
    selectedBackground: any;
    selectedRole: any;
    selectedStartupType: any;
    selectedDistrict: any;
    formData: any;
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
                <StatValue>{formData.founderName}</StatValue>
              </StatRow>
              <StatRow>
                <StatLabel>Background</StatLabel>
                <StatValue>{selectedBackground.title}</StatValue>
              </StatRow>
              <StatRow>
                <StatLabel>Starting Cash</StatLabel>
                <StatValue>${selectedBackground.stats.finances.personalFunds.toLocaleString()}</StatValue>
              </StatRow>
              <StatRow>
                <StatLabel>Reputation</StatLabel>
                <StatValue>{selectedBackground.stats.reputation.personal}/100</StatValue>
              </StatRow>
            </StatsGrid>
          </StatsSection>

          <StatsSection>
            <StatsSectionTitle>💼 Role & Skills</StatsSectionTitle>
            <StatsGrid>
              <StatRow>
                <StatLabel>Role</StatLabel>
                <StatValue>{selectedRole.title}</StatValue>
              </StatRow>
              {Object.entries(selectedRole.stats.skills).map(([skill, value]) => (
                <StatRow key={skill}>
                  <StatLabel>{skill.charAt(0).toUpperCase() + skill.slice(1)}</StatLabel>
                  <StatValue style={{ color: Number(value) > 0 ? '#4CAF50' : '#FF5722' }}>
                    {Number(value) > 0 ? '+' : ''}{String(value)}
                  </StatValue>
                </StatRow>
              ))}
            </StatsGrid>
          </StatsSection>

          <StatsSection>
            <StatsSectionTitle>🚀 Startup Details</StatsSectionTitle>
            <StatsGrid>
              <StatRow>
                <StatLabel>Company</StatLabel>
                <StatValue>{formData.startupName}</StatValue>
              </StatRow>
              <StatRow>
                <StatLabel>Type</StatLabel>
                <StatValue>{selectedStartupType.title}</StatValue>
              </StatRow>
              <StatRow>
                <StatLabel>Initial Valuation</StatLabel>
                <StatValue>${selectedStartupType.stats.finances.valuation.toLocaleString()}</StatValue>
              </StatRow>
              <StatRow>
                <StatLabel>Innovation Level</StatLabel>
                <StatValue>{selectedStartupType.stats.product.innovation}/100</StatValue>
              </StatRow>
            </StatsGrid>
          </StatsSection>

          <StatsSection>
            <StatsSectionTitle>📍 Location</StatsSectionTitle>
            <StatsGrid>
              <StatRow>
                <StatLabel>District</StatLabel>
                <StatValue>{selectedDistrict.title}</StatValue>
              </StatRow>
              <StatRow>
                <StatLabel>Monthly Rent</StatLabel>
                <StatValue>${selectedDistrict.stats.finances.burnRate.toLocaleString()}</StatValue>
              </StatRow>
              <StatRow>
                <StatLabel>Networking Bonus</StatLabel>
                <StatValue>+{selectedDistrict.stats.skills?.networking || 0}</StatValue>
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