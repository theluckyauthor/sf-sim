import React from 'react';
import { EventCategory } from '../../types/stats';
import {
  Title,
  Description,
  CategoryGrid,
  CategoryButton,
  CategoryIcon
} from './StyledComponents';

interface CategorySelectionProps {
  availableCategories: EventCategory[];
  onCategorySelect: (category: EventCategory) => void;
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

const CategorySelection: React.FC<CategorySelectionProps> = ({ 
  availableCategories, 
  onCategorySelect 
}) => {
  return (
    <>
      <Title>Choose Your Next Move</Title>
      <Description>
        Which path will you take?
      </Description>
      <CategoryGrid>
        {availableCategories.length > 0 ? (
          availableCategories.map((category) => (
            <CategoryButton
              key={category}
              onClick={() => onCategorySelect(category)}
            >
              <CategoryIcon>{CATEGORY_ICONS[category]}</CategoryIcon>
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </CategoryButton>
          ))
        ) : (
          <Description>No more events available in this phase.</Description>
        )}
      </CategoryGrid>
    </>
  );
};

export default CategorySelection; 