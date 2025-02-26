import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';
import { Achievement } from '../types/stats';

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

const AchievementsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const AchievementCard = styled.div`
  background-color: #1a1a1a;
  border-radius: 8px;
  padding: 15px;
  display: flex;
  align-items: flex-start;
  gap: 15px;
  transition: transform 0.2s;
  
  &:hover {
    transform: translateY(-2px);
  }
`;

const AchievementIcon = styled.div<{ type: string }>`
  font-size: 24px;
  color: ${props => {
    switch (props.type) {
      case 'business': return '#4CAF50';
      case 'technical': return '#2196F3';
      case 'personal': return '#9C27B0';
      case 'community': return '#FF9800';
      default: return '#FFFFFF';
    }
  }};
`;

const AchievementContent = styled.div`
  flex: 1;
`;

const AchievementTitle = styled.h3`
  font-size: 16px;
  margin: 0 0 5px 0;
  color: #FFFFFF;
`;

const AchievementDescription = styled.p`
  font-size: 14px;
  margin: 0 0 10px 0;
  color: #AAAAAA;
`;

const AchievementDate = styled.div`
  font-size: 12px;
  color: #666666;
`;

const EmptyState = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 40px 20px;
  text-align: center;
`;

const EmptyStateIcon = styled.div`
  font-size: 40px;
  margin-bottom: 20px;
  color: #333333;
`;

const EmptyStateText = styled.p`
  font-size: 16px;
  color: #666666;
  margin: 0;
`;

const getAchievementIcon = (type: string): string => {
  switch (type) {
    case 'business': return '💰';
    case 'technical': return '💻';
    case 'personal': return '🧠';
    case 'community': return '👥';
    default: return '🏆';
  }
};

const formatDate = (day: number, month: number, year: number): string => {
  return new Date(year, month - 1, day).toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  });
};

const AchievementsPanel: React.FC = () => {
  const achievements = useSelector((state: RootState) => state.game.progress.achievements) as Achievement[];

  if (achievements.length === 0) {
    return (
      <Container>
        <Title>🏆 Achievements</Title>
        <EmptyState>
          <EmptyStateIcon>🔍</EmptyStateIcon>
          <EmptyStateText>No achievements unlocked yet. Keep building your startup!</EmptyStateText>
        </EmptyState>
      </Container>
    );
  }

  return (
    <Container>
      <Title>🏆 Achievements ({achievements.length})</Title>
      <AchievementsList>
        {achievements.map((achievement) => (
          <AchievementCard key={achievement.id}>
            <AchievementIcon type={achievement.type}>
              {getAchievementIcon(achievement.type)}
            </AchievementIcon>
            <AchievementContent>
              <AchievementTitle>{achievement.title}</AchievementTitle>
              <AchievementDescription>{achievement.description}</AchievementDescription>
              <AchievementDate>
                Unlocked on {formatDate(
                  achievement.unlockedAt.day,
                  achievement.unlockedAt.month,
                  achievement.unlockedAt.year
                )}
              </AchievementDate>
            </AchievementContent>
          </AchievementCard>
        ))}
      </AchievementsList>
    </Container>
  );
};

export default AchievementsPanel; 