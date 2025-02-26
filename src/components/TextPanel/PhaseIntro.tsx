import React from 'react';
import { GameEvent, GamePhase } from '../../types/stats';
import { phaseData } from '../../data/phaseData';
import {
  PhaseIntroContainer,
  PhaseTitle,
  PhaseDescription,
  Title,
  ObjectivesList,
  ObjectiveItem,
  PhaseMechanicContainer,
  PhaseMechanicTitle,
  MechanicDescription,
  Button
} from './StyledComponents';

interface PhaseIntroProps {
  currentEvent: GameEvent;
  phase: GamePhase;
  onBeginPhase: (choice: any) => void;
}

const PhaseIntro: React.FC<PhaseIntroProps> = ({ currentEvent, phase, onBeginPhase }) => {
  const data = phaseData[phase];
  
  // Phase-specific mechanics
  const phaseMechanics = {
    [GamePhase.SETTLING_IN]: {
      title: "Networking Focus",
      description: "In this phase, focus on building your network and establishing yourself in San Francisco. Networking events will be more common and impactful."
    },
    [GamePhase.IDEATION]: {
      title: "Product Development",
      description: "Your technical decisions matter more now. Product quality and market fit will determine your success in this phase."
    },
    [GamePhase.BOOTSTRAPPING]: {
      title: "Resource Management",
      description: "Cash is king. Every dollar spent should generate value, and your runway is your lifeline. Focus on efficiency and early revenue."
    },
    [GamePhase.FUNDRAISING]: {
      title: "Investor Relations",
      description: "Your reputation and business skills are crucial. Build relationships with investors and perfect your pitch to secure funding."
    },
    [GamePhase.SCALING]: {
      title: "Team Building & Leadership",
      description: "Your leadership abilities will be tested. Building and managing a growing team while maintaining culture is the key challenge."
    }
  };

  return (
    <PhaseIntroContainer>
      <PhaseTitle>{data.name}</PhaseTitle>
      <PhaseDescription>{data.description}</PhaseDescription>
      
      <Title>Phase Objectives</Title>
      <ObjectivesList>
        {data.objectives.map((objective, index) => (
          <ObjectiveItem key={index}>{objective}</ObjectiveItem>
        ))}
      </ObjectivesList>
      
      <PhaseMechanicContainer>
        <PhaseMechanicTitle>Phase Mechanic: {phaseMechanics[phase].title}</PhaseMechanicTitle>
        <MechanicDescription>{phaseMechanics[phase].description}</MechanicDescription>
      </PhaseMechanicContainer>
      
      <Button onClick={() => onBeginPhase(currentEvent.choices[0])}>
        Begin {data.name}
      </Button>
    </PhaseIntroContainer>
  );
};

export default PhaseIntro; 