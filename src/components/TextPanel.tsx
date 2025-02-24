import React, { useEffect, useMemo } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { 
  advancePhase, 
  updateFounder, 
  updateCompany, 
  updateLocation,
  advanceTime,
  setCurrentEvent 
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
  EventCategory 
} from '../types/stats';
import { 
  getNextEvent, 
  checkGameOver, 
  checkPhaseAdvancement, 
  EVENT_CATEGORIES, 
  PHASE_REQUIREMENTS,
  eventsByPhase 
} from '../events';
import { RootState } from '../store/store';
import { phaseData } from '../data/phaseData';

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
  list-style-type: none;
  padding: 0;
  margin: 20px 0;
`;

const ObjectiveItem = styled.li`
  margin: 10px 0;
  padding-left: 20px;
  position: relative;
  
  &:before {
    content: "•";
    color: #4CAF50;
    position: absolute;
    left: 0;
  }
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

const TextPanel: React.FC<TextPanelProps> = ({ currentEvent, onEventComplete }) => {
  const dispatch = useDispatch();
  const gameState = useSelector((state: RootState) => state.game);
  const [usedEventIds, setUsedEventIds] = React.useState<string[]>([]);
  const [tutorialStep, setTutorialStep] = React.useState(0);
  const [showingPhaseIntro, setShowingPhaseIntro] = React.useState(false);
  const [showingCategories, setShowingCategories] = React.useState(false);
  const [selectedCategory, setSelectedCategory] = React.useState<EventCategory | null>(null);
  const [lastOutcome, setLastOutcome] = React.useState<{
    title: string;
    choice: string;
    impacts: { stat: string; value: number; }[];
  } | null>(null);
  const [hasCompletedTutorial, setHasCompletedTutorial] = React.useState(false);

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
    
    // Return 2 random categories
    return shuffle(categoriesToShow).slice(0, 2);
  }, [gameState.progress.phase, usedEventIds]);

  useEffect(() => {
    if (hasCompletedTutorial && gameState.progress.phase !== GamePhase.SETTLING_IN) {
      setShowingPhaseIntro(true);
    }
  }, [gameState.progress.phase, hasCompletedTutorial]);

  const handleStartJourney = () => {
    if (tutorialStep < 3) {
      setTutorialStep(tutorialStep + 1);
    } else {
      setHasCompletedTutorial(true);
      setTutorialStep(4); // Move past tutorial
      setShowingPhaseIntro(true); // Show SETTLING_IN phase intro
    }
  };

  const handlePhaseIntroComplete = () => {
    setShowingPhaseIntro(false);
    setShowingCategories(true);
  };

  // Function to get next event based on category
  const getNextEventForCategory = (category: EventCategory) => {
    // Get all events for the current phase
    const phaseEvents = eventsByPhase[gameState.progress.phase] || [];
    
    // Filter events by category and not used
    const availableEvents = phaseEvents.filter(event => 
      event.category === category && 
      !usedEventIds.includes(event.id) &&
      (!event.conditions?.requiredPhase || event.conditions.requiredPhase === gameState.progress.phase)
    );
    
    if (availableEvents.length === 0) return null;
    
    // Select a random event from available ones
    const randomIndex = Math.floor(Math.random() * availableEvents.length);
    return availableEvents[randomIndex];
  };

  const handleCategorySelect = (category: EventCategory) => {
    setSelectedCategory(category);
    setShowingCategories(false);
    
    // Get next event for the selected category
    const nextEvent = getNextEventForCategory(category);
    if (nextEvent) {
      dispatch(setCurrentEvent(nextEvent));
    } else {
      // If no events available for this category, show categories again
      setShowingCategories(true);
    }
  };

  const getTutorialContent = () => {
    switch(tutorialStep) {
      case 0:
        return {
          title: "Welcome to SF SIM",
          description: `Welcome to the thrilling world of Silicon Valley startups! In SF SIM, you'll step into the shoes of an ambitious 
          founder ready to make their mark in the tech industry.

          Navigate through challenging decisions, build valuable relationships, and manage both your company's growth and your 
          personal well-being. From late-night coding sessions to crucial investor meetings, every choice matters.

          Will you bootstrap your way to success or chase venture capital? Build a remote team or establish a trendy SF office? 
          The future of your startup lies in your hands.`,
          buttonText: "Tell me more"
        };
      case 1:
        return {
          title: "Your Stats",
          description: `Throughout your journey, you'll need to balance various aspects of your life and business:

          🧠 Mental Health: Keep your stress levels in check
          💪 Physical Health: Don't forget to take care of your body
          💼 Company Growth: Track your startup's progress
          💰 Runway: Manage your company's finances
          🤝 Network: Build relationships in the Valley

          Each decision you make will impact these stats. Keep them balanced to succeed!`,
          buttonText: "How do I play?"
        };
      case 2:
        return {
          title: "Making Choices",
          description: `As you progress through your startup journey, you'll encounter various situations and events.

          For each event, you'll be presented with multiple choices. Think carefully before deciding:
          • Each choice can affect multiple stats
          • Some impacts are immediate, others reveal themselves over time
          • There's no "perfect" choice - it's about your strategy and style
          
          Remember: In startup life, as in this game, it's all about tradeoffs!`,
          buttonText: "What are the phases?"
        };
      case 3:
        return {
          title: "Game Phases",
          description: `Your journey is divided into distinct phases:

          1. Early Days: Getting your idea off the ground
          2. Building: Growing your team and product
          3. Scaling: Taking your startup to the next level
          
          Each phase brings new challenges and opportunities. Are you ready to begin your startup journey?`,
          buttonText: "Start Your Journey"
        };
      default:
        return null;
    }
  };

  const formatStatChange = (stat: string, value: number): string => {
    const formattedStat = stat.split('.').pop()?.replace(/([A-Z])/g, ' $1').toLowerCase();
    return `${formattedStat}: ${value >= 0 ? '+' : ''}${value}`;
  };

  const handleChoiceClick = (choice: GameEventChoice) => {
    const { impact, text } = choice;
    const statChanges: { stat: string; value: number; }[] = [];
    
    // Update founder stats
    if (impact.founder) {
      dispatch(updateFounder(impact.founder));
      Object.entries(impact.founder).forEach(([stat, value]) => {
        if (typeof value === 'number' && value !== 0) {
          statChanges.push({ stat: `founder.${stat}`, value });
        }
      });
    }

    // Update company stats
    if (impact.company) {
      dispatch(updateCompany(impact.company));
      Object.entries(impact.company).forEach(([stat, value]) => {
        if (typeof value === 'number' && value !== 0) {
          statChanges.push({ stat: `company.${stat}`, value });
        }
      });
    }

    // Update location stats
    if (impact.location) {
      dispatch(updateLocation(impact.location));
      Object.entries(impact.location).forEach(([stat, value]) => {
        if (typeof value === 'number' && value !== 0) {
          statChanges.push({ stat: `location.${stat}`, value });
        }
      });
    }

    setLastOutcome({
      title: currentEvent?.title || '',
      choice: text,
      impacts: statChanges
    });

    // Add to history log
    dispatch({
      type: 'game/addHistoryEntry',
      payload: {
        timestamp: `Day ${gameState.progress.day}`,
        title: currentEvent?.title,
        description: text,
        consequences: statChanges.map(change => ({
          text: formatStatChange(change.stat, change.value),
          type: change.value >= 0 ? 'positive' : 'negative'
        }))
      }
    });
    
    dispatch(advanceTime());

    // Check game over conditions
    const gameOverReason = checkGameOver(gameState);
    if (gameOverReason) {
      alert(gameOverReason);
      return;
    }

    // Add current event to used events and notify parent
    if (currentEvent) {
      setUsedEventIds(prev => [...prev, currentEvent.id]);
      onEventComplete?.(currentEvent.id);
    }

    // Check if we should advance to the next phase
    if (checkPhaseAdvancement(gameState.progress.phase, gameState)) {
      dispatch(advancePhase());
    }
  };

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

  if (showingPhaseIntro) {
    const currentPhaseKey = gameState.progress.phase as keyof typeof phaseData;
    const phaseInfo = phaseData[currentPhaseKey];

    if (!phaseInfo) {
      console.error('Phase data not found for:', currentPhaseKey);
      setShowingPhaseIntro(false);
      return null;
    }
    
    return (
      <Panel>
        <Title>{phaseInfo.name}</Title>
        <Description>{phaseInfo.description}</Description>
        <ObjectivesList>
          {phaseInfo.objectives.map((objective, index) => (
            <ObjectiveItem key={index}>{objective}</ObjectiveItem>
          ))}
        </ObjectivesList>
        <ChoicesContainer>
          <ChoiceButton onClick={handlePhaseIntroComplete}>
            Begin {phaseInfo.name}
          </ChoiceButton>
        </ChoicesContainer>
      </Panel>
    );
  }

  if (!currentEvent) {
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
  }

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
};

export default TextPanel; 