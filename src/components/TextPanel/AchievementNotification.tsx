import React from 'react';
import {
  AchievementBanner,
  AchievementIcon,
  AchievementText,
  AchievementTitle,
  AchievementDescription,
  Button
} from './StyledComponents';

interface AchievementNotificationProps {
  title: string;
  description: string;
  type: string;
  onContinue: () => void;
}

const AchievementNotification: React.FC<AchievementNotificationProps> = ({ 
  title, 
  description, 
  type, 
  onContinue 
}) => {
  return (
    <>
      <AchievementBanner>
        <AchievementIcon>🏆</AchievementIcon>
        <AchievementText>
          <AchievementTitle>Achievement Unlocked: {title}</AchievementTitle>
          <AchievementDescription>{description}</AchievementDescription>
        </AchievementText>
      </AchievementBanner>
      <Button onClick={onContinue}>Continue</Button>
    </>
  );
};

export default AchievementNotification; 