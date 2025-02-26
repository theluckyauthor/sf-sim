import React from 'react';
import {
  Title,
  Description,
  OutcomeContainer,
  StatChange,
  ChoicesContainer,
  ChoiceButton
} from './StyledComponents';

interface OutcomeDisplayProps {
  title: string;
  choice: string;
  impacts: { text: string; type: string }[];
  onContinue: () => void;
}

const OutcomeDisplay: React.FC<OutcomeDisplayProps> = ({ 
  title, 
  choice, 
  impacts, 
  onContinue 
}) => {
  return (
    <>
      <Title>Outcome</Title>
      <Description>You chose: {choice}</Description>
      <OutcomeContainer>
        {impacts.map((impact, index) => (
          <StatChange 
            key={index} 
            isPositive={impact.type === 'positive'}
          >
            {impact.text}
          </StatChange>
        ))}
      </OutcomeContainer>
      <ChoicesContainer>
        <ChoiceButton onClick={onContinue}>
          Continue
        </ChoiceButton>
      </ChoicesContainer>
    </>
  );
};

export default OutcomeDisplay; 