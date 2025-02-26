import styled from 'styled-components';

export const Panel = styled.div`
  background-color: #2a2a2a;
  border-radius: 8px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  overflow-y: auto;
`;

export const Title = styled.h2`
  font-size: 24px;
  margin: 0;
  color: #4CAF50;
`;

export const Description = styled.p`
  font-size: 16px;
  line-height: 1.6;
  margin: 0;
`;

export const ChoicesContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 20px;
`;

export const ChoiceButton = styled.button`
  background-color: #3a3a3a;
  border: none;
  border-radius: 4px;
  padding: 15px;
  color: #ffffff;
  font-size: 16px;
  text-align: left;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: #4a4a4a;
  }

  &:focus {
    outline: 2px solid #4CAF50;
    outline-offset: -2px;
  }
`;

export const ObjectivesList = styled.ul`
  margin: 10px 0 0 0;
  padding-left: 20px;
`;

export const ObjectiveItem = styled.li`
  margin-bottom: 8px;
  line-height: 1.5;
`;

export const CategoryGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 15px;
  margin-top: 20px;
`;

export const CategoryButton = styled(ChoiceButton)`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 20px;
  
  &:hover {
    transform: translateY(-2px);
    transition: transform 0.2s;
  }
`;

export const CategoryIcon = styled.div`
  font-size: 24px;
  margin-bottom: 8px;
`;

export const OutcomeContainer = styled.div`
  margin-top: 20px;
  padding: 15px;
  background-color: #1a1a1a;
  border-radius: 6px;
`;

export const StatChange = styled.div<{ isPositive: boolean }>`
  color: ${props => props.isPositive ? '#4CAF50' : '#FF5722'};
  margin: 5px 0;
  font-size: 14px;
`;

export const GameOverContainer = styled.div`
  text-align: center;
  padding: 30px;
  background-color: #1a1a1a;
  border-radius: 8px;
  margin-top: 20px;
`;

export const GameOverTitle = styled.h2`
  font-size: 28px;
  color: #FF5722;
  margin-bottom: 20px;
`;

export const GameOverDescription = styled.p`
  font-size: 18px;
  line-height: 1.6;
  margin-bottom: 30px;
`;

export const RestartButton = styled(ChoiceButton)`
  background-color: #4CAF50;
  padding: 15px 30px;
  font-size: 18px;
  text-align: center;
  margin: 0 auto;
  display: block;
  max-width: 200px;

  &:hover {
    background-color: #3d9c40;
  }
`;

export const AchievementBanner = styled.div`
  background-color: #4CAF50;
  color: white;
  padding: 15px;
  border-radius: 6px;
  margin-top: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const AchievementIcon = styled.div`
  font-size: 24px;
  margin-right: 15px;
`;

export const AchievementText = styled.div`
  flex: 1;
`;

export const AchievementTitle = styled.h3`
  margin: 0 0 5px 0;
  font-size: 18px;
`;

export const AchievementDescription = styled.p`
  margin: 0;
  font-size: 14px;
  opacity: 0.9;
`;

export const IntroContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const IntroTitle = styled.h1`
  font-size: 32px;
  color: #4CAF50;
  margin: 0;
  text-align: center;
`;

export const IntroContent = styled.p`
  font-size: 16px;
  line-height: 1.6;
  margin: 0;
`;

export const MechanicsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin-top: 10px;
`;

export const MechanicItem = styled.div`
  background-color: #1a1a1a;
  padding: 15px;
  border-radius: 8px;
`;

export const MechanicTitle = styled.h3`
  font-size: 18px;
  color: #4CAF50;
  margin: 0 0 5px 0;
`;

export const MechanicDescription = styled.p`
  font-size: 14px;
  margin: 0;
  line-height: 1.5;
`;

export const PhaseIntroContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const PhaseTitle = styled.h2`
  font-size: 28px;
  color: #4CAF50;
  margin: 0;
  text-align: center;
`;

export const PhaseDescription = styled.p`
  font-size: 16px;
  line-height: 1.6;
  margin: 0;
`;

export const Button = styled.button`
  background-color: #4CAF50;
  color: white;
  border: none;
  padding: 15px 30px;
  font-size: 18px;
  border-radius: 4px;
  cursor: pointer;
  text-align: center;
  margin: 20px auto 0;
  display: block;
  max-width: 250px;
  transition: background-color 0.2s;

  &:hover {
    background-color: #3d9c40;
  }
`;

export const PhaseMechanicContainer = styled.div`
  background-color: #1a1a1a;
  padding: 15px;
  border-radius: 8px;
  margin-top: 15px;
`;

export const PhaseMechanicTitle = styled.h3`
  font-size: 18px;
  color: #4CAF50;
  margin: 0 0 10px 0;
`; 