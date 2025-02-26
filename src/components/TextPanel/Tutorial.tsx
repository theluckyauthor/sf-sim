import React from 'react';
import {
  Title,
  Description,
  ChoicesContainer,
  ChoiceButton
} from './StyledComponents';

interface TutorialProps {
  step: number;
  onContinue: () => void;
}

const Tutorial: React.FC<TutorialProps> = ({ step, onContinue }) => {
  const getTutorialContent = () => {
    switch (step) {
      case 0:
        return {
          title: "Welcome to San Francisco",
          description: "Your journey as a startup founder begins here.",
          buttonText: "Continue"
        };
      case 1:
        return {
          title: "Getting Started",
          description: "You'll need to make strategic decisions to grow your startup.",
          buttonText: "Next"
        };
      case 2:
        return {
          title: "Ready to Begin",
          description: "Let's start your entrepreneurial journey!",
          buttonText: "Start"
        };
      default:
        return {
          title: "Tutorial Complete",
          description: "You're now ready to begin your startup journey!",
          buttonText: "Start Game"
        };
    }
  };

  const content = getTutorialContent();

  return (
    <>
      <Title>{content.title}</Title>
      <Description>
        {content.description}
      </Description>
      <ChoicesContainer>
        <ChoiceButton onClick={onContinue}>
          {content.buttonText}
        </ChoiceButton>
      </ChoicesContainer>
    </>
  );
};

export default Tutorial; 