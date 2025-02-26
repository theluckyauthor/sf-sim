import React, { useEffect, useMemo, useState } from 'react';
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
} from '../../store/gameSlice';
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
} from '../../types/stats';
import { 
  getNextEvent, 
  checkGameOver, 
  checkPhaseAdvancement, 
  EVENT_CATEGORIES,
  eventsByPhase
} from '../../events';
import { phaseIntroEvents } from '../../events/phaseIntroEvents';
import { RootState } from '../../store/store';

// Import subcomponents
import { Panel } from './StyledComponents';
import GameIntro from './GameIntro';
import PhaseIntro from './PhaseIntro';
import GameOver from './GameOver';
import AchievementNotification from './AchievementNotification';
import EventDisplay from './EventDisplay';
import OutcomeDisplay from './OutcomeDisplay';
import CategorySelection from './CategorySelection';
import Tutorial from './Tutorial';

// Import utilities
import { shuffle, formatStatChange, checkForSpecialEvents } from './utils';

interface TextPanelProps {
  currentEvent?: GameEvent;
  onEventComplete?: (eventId: string) => void;
}

interface ImpactDetail {
  text: string;
  type: 'positive' | 'negative' | 'neutral';
}

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
  const [usedEventIds, setUsedEventIds] = useState<string[]>([]);
  const [showingGameIntro, setShowingGameIntro] = useState(true);
  const [tutorialStep, setTutorialStep] = useState(0);
  const [showingCategories, setShowingCategories] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<EventCategory | null>(null);
  const [lastOutcome, setLastOutcome] = useState<{
    title: string;
    choice: string;
    impacts: { text: string; type: string }[];
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

  // Calculate available categories
  const availableCategoryOptions = useMemo(() => {
    const currentPhase = gameState.progress.phase;
    console.log('Current phase:', currentPhase);
    console.log('Phase events:', eventsByPhase[currentPhase]);
    console.log('Used event IDs:', usedEventIds);

    // Get available categories for current phase
    const availableCategories = EVENT_CATEGORIES.filter(category => {
      const eventsForCategory = eventsByPhase[currentPhase].filter((event: GameEvent) => 
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
    const impactDetails: { text: string; type: 'positive' | 'negative' | 'neutral' }[] = [];
    
    if (choice.impact.founder) {
      dispatch(updateFounder(choice.impact.founder));
      
      Object.entries(choice.impact.founder).forEach(([stat, value]) => {
        const numValue = typeof value === 'number' ? value : 0;
        impactDetails.push({
          text: formatStatChange(stat, numValue),
          type: numValue > 0 ? 'positive' : numValue < 0 ? 'negative' : 'neutral'
        });
      });
    }
    
    if (choice.impact.company) {
      dispatch(updateCompany(choice.impact.company));
      
      Object.entries(choice.impact.company).forEach(([stat, value]) => {
        const numValue = typeof value === 'number' ? value : 0;
        impactDetails.push({
          text: formatStatChange(stat, numValue),
          type: numValue > 0 ? 'positive' : numValue < 0 ? 'negative' : 'neutral'
        });
      });
    }
    
    if (choice.impact.location) {
      // For location impacts, we'll just pass them directly
      dispatch(updateLocation(choice.impact.location));
      
      // Add to history for display
      Object.entries(choice.impact.location).forEach(([stat, value]) => {
        let displayText = '';
        let impactType: 'positive' | 'negative' | 'neutral' = 'neutral';
        
        if (stat === 'networkingScore' && typeof value === 'number') {
          displayText = formatStatChange(stat, value);
          impactType = value > 0 ? 'positive' : value < 0 ? 'negative' : 'neutral';
        } else if (stat === 'district') {
          displayText = `Moved to: ${String(value)}`;
        } else if (stat === 'type') {
          displayText = `Workspace changed to: ${String(value)}`;
        }
        
        if (displayText) {
          impactDetails.push({
            text: displayText,
            type: impactType
          });
        }
      });
    }
    
    // Add history entry
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
        text: detail.text,
        type: detail.type
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

  const handleRestartGame = () => {
    window.location.reload();
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
    return (
      <Panel>
        <GameIntro onStartJourney={handleStartJourney} />
      </Panel>
    );
  }

  if (gameOver) {
    return (
      <Panel>
        <GameOver reason={gameOver} onRestart={handleRestartGame} />
      </Panel>
    );
  }

  if (showAchievement) {
    return (
      <Panel>
        <AchievementNotification 
          title={showAchievement.title}
          description={showAchievement.description}
          type={showAchievement.type}
          onContinue={() => setShowAchievement(null)}
        />
      </Panel>
    );
  }

  // Check if current event is a phase intro and render it with special styling
  if (currentEvent && currentEvent.id.startsWith('phase_intro_')) {
    return (
      <Panel>
        <PhaseIntro 
          currentEvent={currentEvent}
          phase={gameState.progress.phase}
          onBeginPhase={handleChoiceClick}
        />
      </Panel>
    );
  }

  if (currentEvent) {
    return (
      <Panel>
        <EventDisplay 
          event={currentEvent}
          onChoiceClick={handleChoiceClick}
        />
      </Panel>
    );
  }

  // Show outcome after choice
  if (lastOutcome) {
    return (
      <Panel>
        <OutcomeDisplay
          title={lastOutcome.title}
          choice={lastOutcome.choice}
          impacts={lastOutcome.impacts}
          onContinue={() => {
            setLastOutcome(null);
            setShowingCategories(true);
          }}
        />
      </Panel>
    );
  }

  // Show category selection
  if (showingCategories) {
    return (
      <Panel>
        <CategorySelection
          availableCategories={availableCategoryOptions}
          onCategorySelect={handleCategorySelect}
        />
      </Panel>
    );
  }

  // Tutorial content as fallback
  return (
    <Panel>
      <Tutorial 
        step={tutorialStep}
        onContinue={handleStartJourney}
      />
    </Panel>
  );
};

export default TextPanel; 