import React, { useEffect, useMemo, useState } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { 
  advancePhase, 
  updateFounder, 
  updateCompany, 
  updateLocation,
  advanceTime,
  setCurrentEvent,
  addAchievement,
  addHistoryEntry
} from '../store/gameSlice';
import { 
  FounderStats, 
  CompanyStats, 
  LocationStats, 
  GameProgress, 
  GamePhase, 
  GameEvent, 
  GameEventChoice, 
  EventImpact,
  EventCategory,
  Achievement
} from '../types/stats';
import { 
  getNextEvent, 
  checkGameOver, 
  checkPhaseAdvancement, 
  EVENT_CATEGORIES, 
  PHASE_REQUIREMENTS,
  eventsByPhase,
  burnoutCrisis,
  cashCrisis,
  teamRebellion,
  viralProductSuccess,
  acquisitionOffer,
  naturalDisaster,
  competitorBankruptcy,
  marketCrash,
  celebrityEndorsement,
  keyEmployeePoached
} from '../events';
import { phaseIntroEvents } from '../events/phaseIntroEvents';
import { RootState } from '../store/store';
import { phaseData } from '../data/phaseData';
import { gameIntro } from '../data/gameIntro';

const Panel = styled.div`
  background-color: #2a2a2a;
  border-radius: 8px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  overflow-y: auto;
`;

const Title = styled.h2`
  font-size: 24px;
  margin: 0;
  color: #4CAF50;
`;

const Description = styled.p`
  font-size: 16px;
  line-height: 1.6;
  margin: 0;
`;

const ChoicesContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 20px;
`;

const ChoiceButton = styled.button`
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

const ObjectivesList = styled.ul`
  margin: 10px 0 0 0;
  padding-left: 20px;
`;

const ObjectiveItem = styled.li`
  margin-bottom: 8px;
  line-height: 1.5;
`;

const CategoryGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 15px;
  margin-top: 20px;
`;

const CategoryButton = styled(ChoiceButton)`
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

const CategoryIcon = styled.div`
  font-size: 24px;
  margin-bottom: 8px;
`;

const OutcomeContainer = styled.div`
  margin-top: 20px;
  padding: 15px;
  background-color: #1a1a1a;
  border-radius: 6px;
`;

const StatChange = styled.div<{ isPositive: boolean }>`
  color: ${props => props.isPositive ? '#4CAF50' : '#FF5722'};
  margin: 5px 0;
  font-size: 14px;
`;

const GameOverContainer = styled.div`
  text-align: center;
  padding: 30px;
  background-color: #1a1a1a;
  border-radius: 8px;
  margin-top: 20px;
`;

const GameOverTitle = styled.h2`
  font-size: 28px;
  color: #FF5722;
  margin-bottom: 20px;
`;

const GameOverDescription = styled.p`
  font-size: 18px;
  line-height: 1.6;
  margin-bottom: 30px;
`;

const RestartButton = styled(ChoiceButton)`
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

const AchievementBanner = styled.div`
  background-color: #4CAF50;
  color: white;
  padding: 15px;
  border-radius: 6px;
  margin-top: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const AchievementIcon = styled.div`
  font-size: 24px;
  margin-right: 15px;
`;

const AchievementText = styled.div`
  flex: 1;
`;

const AchievementTitle = styled.h3`
  margin: 0 0 5px 0;
  font-size: 18px;
`;

const AchievementDescription = styled.p`
  margin: 0;
  font-size: 14px;
  opacity: 0.9;
`;

const IntroContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const IntroTitle = styled.h1`
  font-size: 32px;
  color: #4CAF50;
  margin: 0;
  text-align: center;
`;

const IntroContent = styled.p`
  font-size: 16px;
  line-height: 1.6;
  margin: 0;
`;

const MechanicsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin-top: 10px;
`;

const MechanicItem = styled.div`
  background-color: #1a1a1a;
  padding: 15px;
  border-radius: 8px;
`;

const MechanicTitle = styled.h3`
  font-size: 18px;
  color: #4CAF50;
  margin: 0 0 5px 0;
`;

const MechanicDescription = styled.p`
  font-size: 14px;
  margin: 0;
  line-height: 1.5;
`;

const PhaseIntroContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const PhaseTitle = styled.h2`
  font-size: 28px;
  color: #4CAF50;
  margin: 0;
  text-align: center;
`;

const PhaseDescription = styled.p`
  font-size: 16px;
  line-height: 1.6;
  margin: 0;
`;

const Button = styled.button`
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

const PhaseMechanicContainer = styled.div`
  background-color: #1a1a1a;
  padding: 15px;
  border-radius: 8px;
  margin-top: 15px;
`;

const PhaseMechanicTitle = styled.h3`
  font-size: 18px;
  color: #4CAF50;
  margin: 0 0 10px 0;
`;

interface TextPanelProps {
  currentEvent?: GameEvent;
  onEventComplete?: (eventId: string) => void;
}

const CATEGORY_ICONS: Record<string, string> = {
  funding: '💰',
  market: '📊',
  networking: '🤝',
  personal: '🧘',
  product: '💻',
  random: '🎲',
  sanfran: '🌉',
  team: '👥'
};

// Shuffle array implementation
const shuffle = <T,>(array: T[]): T[] => {
  const newArray = [...array];
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
};

// Add interface for game state
interface GameState {
  founder: FounderStats;
  company: CompanyStats;
  location: LocationStats;
  progress: GameProgress;
}

interface ImpactDetail {
  text: string;
  type: 'positive' | 'negative' | 'neutral';
}

// Create phase intro events
const createPhaseIntroEvent = (phase: GamePhase): GameEvent => {
  const phaseInfo = phaseData[phase];
  
  return {
    id: `phase_intro_${phase.toLowerCase()}`,
    category: 'random',
    title: phaseInfo.name,
    description: phaseInfo.description,
    conditions: {
      requiredPhase: phase
    },
    impact: {},
    choices: [
      {
        id: `begin_${phase.toLowerCase()}`,
        text: `Begin ${phaseInfo.name}`,
        impact: {}
      }
    ]
  };
};

const TextPanel: React.FC<TextPanelProps> = ({ currentEvent, onEventComplete }) => {
  const dispatch = useDispatch();
  const gameState = useSelector((state: RootState) => state.game);
  const [usedEventIds, setUsedEventIds] = useState<string[]>([]);
  const [showingGameIntro, setShowingGameIntro] = useState(true);
  const [tutorialStep, setTutorialStep] = useState(0);
  const [showingCategories, setShowingCategories] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<EventCategory | null>(null);
  const [lastOutcome, setLastOutcome] = useState<{
    title: string;
    choice: string;
    impacts: { stat: string; value: number; }[];
  } | null>(null);
  const [hasCompletedTutorial, setHasCompletedTutorial] = useState(false);
  const [gameOver, setGameOver] = useState<string | null>(null);
  const [showAchievement, setShowAchievement] = useState<{
    title: string;
    description: string;
    type: string;
  } | null>(null);
  const [phaseIntroShown, setPhaseIntroShown] = useState<Record<GamePhase, boolean>>({
    [GamePhase.SETTLING_IN]: false,
    [GamePhase.IDEATION]: false,
    [GamePhase.BOOTSTRAPPING]: false,
    [GamePhase.FUNDRAISING]: false,
    [GamePhase.SCALING]: false
  });

  // Move useMemo to component top level
  const availableCategoryOptions = useMemo(() => {
    const currentPhase = gameState.progress.phase;
    console.log('Current phase:', currentPhase);
    console.log('Phase events:', eventsByPhase[currentPhase]);
    console.log('Used event IDs:', usedEventIds);

    // Get available categories for current phase
    const availableCategories = EVENT_CATEGORIES.filter(category => {
      const eventsForCategory = eventsByPhase[currentPhase].filter(event => 
        event.category === category && !usedEventIds.includes(event.id)
      );
      console.log(`Category ${category} has ${eventsForCategory.length} available events`);
      return eventsForCategory.length > 0;
    });

    console.log('Available categories:', availableCategories);
    
    // If no categories are available, show all categories
    const categoriesToShow = availableCategories.length > 0 ? 
      availableCategories : EVENT_CATEGORIES;
    
    console.log('Categories to show:', categoriesToShow);
    
    // Return 3 random categories instead of 2
    return shuffle(categoriesToShow).slice(0, 3);
  }, [gameState.progress.phase, usedEventIds]);

  // Add useEffect to show phase intro when phase changes
  useEffect(() => {
    if (!showingGameIntro && hasCompletedTutorial) {
      const currentPhase = gameState.progress.phase;
      
      // Check if we haven't shown the intro for this phase yet
      if (!phaseIntroShown[currentPhase]) {
        // Show the phase intro as a special event
        const phaseIntroEvent = phaseIntroEvents[currentPhase];
        dispatch(setCurrentEvent(phaseIntroEvent));
        
        // Mark this phase intro as shown
        setPhaseIntroShown(prev => ({
          ...prev,
          [currentPhase]: true
        }));
        
        // Hide categories while showing phase intro
        setShowingCategories(false);
      }
    }
  }, [gameState.progress.phase, showingGameIntro, hasCompletedTutorial, phaseIntroShown, dispatch]);

  const handleStartJourney = () => {
    if (showingGameIntro) {
      setShowingGameIntro(false);
      setHasCompletedTutorial(true);
      return;
    }
    
    if (tutorialStep < 3) {
      setTutorialStep(tutorialStep + 1);
    } else {
      setHasCompletedTutorial(true);
      setTutorialStep(4); // Move past tutorial
    }
  };

  const handleChoiceClick = (choice: GameEventChoice) => {
    if (!currentEvent) return;
    
    // Check if this is a phase intro event
    const isPhaseIntro = currentEvent.id.startsWith('phase_intro_');
    
    if (isPhaseIntro) {
      // For phase intro events, just mark it as complete and show categories
      setShowingCategories(true);
      
      // Reset used event IDs when starting a new phase
      setUsedEventIds([]);
      
      // Get the next regular event
      const nextEvent = getNextEvent(gameState.progress.phase, [], {
        founder: gameState.founder,
        company: gameState.company
      });
      
      // If there's an event available, set it as the current event after a delay
      if (nextEvent) {
        setTimeout(() => {
          dispatch(setCurrentEvent(nextEvent));
        }, 100);
      }
      
      return;
    }
    
    // Regular event handling (existing code)
    if (choice.impact.founder) {
      dispatch(updateFounder(choice.impact.founder));
    }
    
    if (choice.impact.company) {
      dispatch(updateCompany(choice.impact.company));
    }
    
    if (choice.impact.location) {
      dispatch(updateLocation(choice.impact.location));
    }
    
    // Add to history
    const impactDetails: ImpactDetail[] = [];
    
    if (choice.impact.founder) {
      Object.entries(choice.impact.founder).forEach(([stat, value]) => {
        impactDetails.push({
          text: formatStatChange(stat, value),
          type: value > 0 ? 'positive' : value < 0 ? 'negative' : 'neutral'
        });
      });
    }
    
    if (choice.impact.company) {
      Object.entries(choice.impact.company).forEach(([stat, value]) => {
        impactDetails.push({
          text: formatStatChange(stat, value),
          type: value > 0 ? 'positive' : value < 0 ? 'negative' : 'neutral'
        });
      });
    }
    
    dispatch(addHistoryEntry({
      timestamp: new Date().toISOString(),
      title: currentEvent.title,
      description: choice.text,
      consequences: impactDetails
    }));
    
    // Check for achievements
    checkForAchievements(choice.impact);
    
    // Advance time
    dispatch(advanceTime());
    
    // Check for game over conditions
    const gameOverReason = checkGameOver(gameState);
    if (gameOverReason) {
      setGameOver(gameOverReason);
      return;
    }
    
    // Mark event as completed
    if (onEventComplete && currentEvent.id) {
      console.log(`Marking event as completed: ${currentEvent.id}`);
      onEventComplete(currentEvent.id);
      // Also update local state to prevent showing this event again
      setUsedEventIds(prev => [...prev, currentEvent.id]);
    }
    
    // Show outcome
    setLastOutcome({
      title: currentEvent.title,
      choice: choice.text,
      impacts: impactDetails.map(detail => ({
        stat: detail.text,
        value: detail.type === 'positive' ? 1 : detail.type === 'negative' ? -1 : 0
      }))
    });
    
    // Check for special events based on stats
    const specialEvent = checkForSpecialEvents(gameState);
    if (specialEvent) {
      // Set timeout to allow state updates to complete
      setTimeout(() => {
        dispatch(setCurrentEvent(specialEvent));
        setShowingCategories(false);
      }, 100);
      return;
    }
    
    // Check if we should advance to the next phase
    const shouldAdvancePhase = checkPhaseAdvancement(gameState.progress.phase, {
      founder: gameState.founder,
      company: gameState.company
    });
    if (shouldAdvancePhase) {
      // Set timeout to allow state updates to complete
      setTimeout(() => {
        dispatch(advancePhase());
        setShowingCategories(false);
      }, 100);
      return;
    }
  };

  // Render game introduction
  const renderGameIntro = () => {
    return (
      <IntroContainer>
        <IntroTitle>{gameIntro.title}</IntroTitle>
        
        {gameIntro.content.map((paragraph, index) => (
          <IntroContent key={index}>{paragraph}</IntroContent>
        ))}
        
        <Title>Game Mechanics</Title>
        <MechanicsList>
          {gameIntro.mechanics.map((mechanic, index) => (
            <MechanicItem key={index}>
              <MechanicTitle>{mechanic.title}</MechanicTitle>
              <MechanicDescription>{mechanic.description}</MechanicDescription>
            </MechanicItem>
          ))}
        </MechanicsList>
        
        <Button onClick={handleStartJourney}>Begin Your Journey</Button>
      </IntroContainer>
    );
  };

  const formatStatChange = (stat: string, value: number): string => {
    // Format the stat name to be more readable
    const formattedStat = stat
      .replace(/([A-Z])/g, ' $1') // Add space before capital letters
      .replace(/^./, str => str.toUpperCase()); // Capitalize first letter
    
    // Special cases for certain stats
    if (stat === 'cash') {
      return `${formattedStat}: ${value > 0 ? '+' : ''}$${Math.abs(value)}`;
    }
    
    if (stat === 'runway') {
      return `${formattedStat}: ${value > 0 ? '+' : ''}${value} month${Math.abs(value) !== 1 ? 's' : ''}`;
    }
    
    if (stat === 'valuation') {
      return `${formattedStat}: ${value > 0 ? '+' : ''}$${Math.abs(value).toLocaleString()}`;
    }
    
    if (stat === 'teamSize') {
      return `${formattedStat}: ${value > 0 ? '+' : ''}${value} team member${Math.abs(value) !== 1 ? 's' : ''}`;
    }
    
    // For percentage-based stats (energy, health, etc.)
    if (['energy', 'health', 'technical', 'business', 'leadership', 'reputation', 
         'productQuality', 'marketFit', 'userGrowth', 'teamMorale', 'talent'].includes(stat)) {
      return `${formattedStat}: ${value > 0 ? '+' : ''}${value}%`;
    }
    
    // Default format
    return `${formattedStat}: ${value > 0 ? '+' : ''}${value}`;
  };

  const checkForAchievements = (impact: EventImpact) => {
    // Check for achievements based on stats changes
    const achievements = [
      {
        condition: () => gameState.company.productQuality >= 80,
        title: "Product Excellence",
        description: "Your product has reached exceptional quality standards!",
        type: "technical"
      },
      {
        condition: () => gameState.company.userGrowth >= 70,
        title: "Viral Growth",
        description: "Your user base is growing at an incredible rate!",
        type: "business"
      },
      {
        condition: () => gameState.company.valuation >= 1000000,
        title: "Million Dollar Valuation",
        description: "Your startup is now valued at over $1 million!",
        type: "business"
      },
      {
        condition: () => gameState.founder.reputation >= 80,
        title: "Industry Influencer",
        description: "You've become a respected voice in the tech industry!",
        type: "personal"
      },
      {
        condition: () => gameState.company.teamSize >= 10,
        title: "Team Builder",
        description: "You've built a substantial team to drive your vision forward!",
        type: "community"
      }
    ];

    // Check if any achievements are unlocked
    for (const achievement of achievements) {
      if (achievement.condition() && 
          !gameState.progress.achievements.some(a => a.title === achievement.title)) {
        // Add achievement to game state
        const newAchievement = {
          id: achievement.title.toLowerCase().replace(/\s/g, '_'),
          title: achievement.title,
          description: achievement.description,
          unlockedAt: {
            day: gameState.progress.day,
            month: gameState.progress.month,
            year: gameState.progress.year
          },
          type: achievement.type as 'business' | 'technical' | 'personal' | 'community'
        };
        
        dispatch({
          type: 'game/addAchievement',
          payload: newAchievement
        });
        
        // Show achievement notification
        setShowAchievement({
          title: achievement.title,
          description: achievement.description,
          type: achievement.type
        });
        
        // Only show one achievement at a time
        break;
      }
    }
  };

  const checkForSpecialEvents = (gameState: GameState): GameEvent | null => {
    // Check for low stat crisis events
    if (gameState.founder.energy <= 15 && gameState.founder.health <= 20) {
      return burnoutCrisis;
    }
    
    if (gameState.company.runway <= 1) {
      return cashCrisis;
    }
    
    if (gameState.company.teamMorale <= 20 && gameState.company.teamSize >= 3) {
      return teamRebellion;
    }
    
    // Check for high stat success events
    if (gameState.company.productQuality >= 75 && gameState.company.userGrowth >= 60) {
      // Only trigger once
      if (!gameState.progress.completedEvents.includes(viralProductSuccess.id)) {
        return viralProductSuccess;
      }
    }
    
    if (gameState.company.valuation >= 2000000 && gameState.company.marketFit >= 70 && gameState.founder.reputation >= 60) {
      // Only trigger once
      if (!gameState.progress.completedEvents.includes(acquisitionOffer.id)) {
        return acquisitionOffer;
      }
    }
    
    // Random chance for wild events (5% chance each)
    const randomChance = Math.random();
    if (randomChance < 0.05) {
      // Only trigger each wild event once
      if (!gameState.progress.completedEvents.includes(naturalDisaster.id)) {
        return naturalDisaster;
      }
    } else if (randomChance < 0.10) {
      if (gameState.company.productQuality >= 50 && !gameState.progress.completedEvents.includes(competitorBankruptcy.id)) {
        return competitorBankruptcy;
      }
    } else if (randomChance < 0.15) {
      if (!gameState.progress.completedEvents.includes(marketCrash.id)) {
        return marketCrash;
      }
    } else if (randomChance < 0.20) {
      if (gameState.company.productQuality >= 60 && !gameState.progress.completedEvents.includes(celebrityEndorsement.id)) {
        return celebrityEndorsement;
      }
    } else if (randomChance < 0.25) {
      if (gameState.company.teamSize >= 4 && gameState.company.talent >= 70 && !gameState.progress.completedEvents.includes(keyEmployeePoached.id)) {
        return keyEmployeePoached;
      }
    }
    
    return null;
  };

  const handleRestartGame = () => {
    window.location.reload();
  };

  const getTutorialContent = () => {
    switch (tutorialStep) {
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
        return null;
    }
  };

  const handleCategorySelect = (category: EventCategory) => {
    const nextEvent = getNextEvent(gameState.progress.phase, usedEventIds, {
      founder: gameState.founder,
      company: gameState.company
    });
    
    if (nextEvent && nextEvent.category === category) {
      dispatch(setCurrentEvent(nextEvent));
      setShowingCategories(false);
    }
  };

  // Main render logic
  if (showingGameIntro) {
    return <Panel>{renderGameIntro()}</Panel>;
  }

  if (gameOver) {
    return (
      <Panel>
        <GameOverContainer>
          <GameOverTitle>Game Over</GameOverTitle>
          <GameOverDescription>{gameOver}</GameOverDescription>
          <RestartButton onClick={handleRestartGame}>Start Over</RestartButton>
        </GameOverContainer>
      </Panel>
    );
  }

  if (showAchievement) {
    return (
      <Panel>
        <AchievementBanner>
          <AchievementIcon>🏆</AchievementIcon>
          <AchievementText>
            <AchievementTitle>Achievement Unlocked: {showAchievement.title}</AchievementTitle>
            <AchievementDescription>{showAchievement.description}</AchievementDescription>
          </AchievementText>
        </AchievementBanner>
        <Button onClick={() => setShowAchievement(null)}>Continue</Button>
      </Panel>
    );
  }

  // Check if current event is a phase intro and render it with special styling
  if (currentEvent && currentEvent.id.startsWith('phase_intro_')) {
    const phase = gameState.progress.phase;
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
      <Panel>
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
          
          <Button onClick={() => handleChoiceClick(currentEvent.choices[0])}>
            Begin {data.name}
          </Button>
        </PhaseIntroContainer>
      </Panel>
    );
  }

  if (currentEvent) {
    return (
      <Panel>
        <Title>{currentEvent.title}</Title>
        <Description>{currentEvent.description}</Description>
        <ChoicesContainer>
          {currentEvent.choices.map((choice) => (
            <ChoiceButton 
              key={choice.id}
              onClick={() => handleChoiceClick(choice)}
            >
              {choice.text}
            </ChoiceButton>
          ))}
        </ChoicesContainer>
      </Panel>
    );
  }

  // Show outcome after choice
  if (lastOutcome) {
    return (
      <Panel>
        <Title>Outcome</Title>
        <Description>You chose: {lastOutcome.choice}</Description>
        <OutcomeContainer>
          {lastOutcome.impacts.map((impact, index) => (
            <StatChange key={index} isPositive={impact.value >= 0}>
              {formatStatChange(impact.stat, impact.value)}
            </StatChange>
          ))}
        </OutcomeContainer>
        <ChoicesContainer>
          <ChoiceButton onClick={() => {
            setLastOutcome(null);
            setShowingCategories(true);
          }}>
            Continue
          </ChoiceButton>
        </ChoicesContainer>
      </Panel>
    );
  }

  // Show category selection
  if (showingCategories) {
    return (
      <Panel>
        <Title>Choose Your Next Move</Title>
        <Description>
          Which path will you take?
        </Description>
        <CategoryGrid>
          {availableCategoryOptions.length > 0 ? (
            availableCategoryOptions.map((category: EventCategory) => (
              <CategoryButton
                key={category}
                onClick={() => handleCategorySelect(category)}
              >
                <CategoryIcon>{CATEGORY_ICONS[category]}</CategoryIcon>
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </CategoryButton>
            ))
          ) : (
            <Description>No more events available in this phase.</Description>
          )}
        </CategoryGrid>
      </Panel>
    );
  }

  // Tutorial content as fallback
  const tutorialContent = getTutorialContent();
  return (
    <Panel>
      <Title>{tutorialContent?.title}</Title>
      <Description>
        {tutorialContent?.description}
      </Description>
      <ChoicesContainer>
        <ChoiceButton onClick={handleStartJourney}>
          {tutorialContent?.buttonText}
        </ChoiceButton>
      </ChoicesContainer>
    </Panel>
  );
};

export default TextPanel; 