import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px 20px;
  background-color: #1a1a1a;
  color: #ffffff;
  min-height: 100vh;
`;

const Content = styled.div`
  max-width: 800px;
  width: 100%;
`;

const Title = styled.h1`
  font-size: 36px;
  margin: 0 0 30px 0;
  color: #4CAF50;
  text-align: center;
`;

const Section = styled.section`
  margin-bottom: 40px;
`;

const SectionTitle = styled.h2`
  font-size: 24px;
  margin: 0 0 20px 0;
  color: #4CAF50;
  border-bottom: 1px solid #333;
  padding-bottom: 10px;
`;

const Paragraph = styled.p`
  font-size: 16px;
  line-height: 1.6;
  margin: 0 0 20px 0;
  color: #cccccc;
`;

const List = styled.ul`
  margin: 0 0 20px 0;
  padding-left: 20px;
`;

const ListItem = styled.li`
  font-size: 16px;
  line-height: 1.6;
  margin-bottom: 10px;
  color: #cccccc;
`;

const Button = styled(Link)`
  display: inline-block;
  background-color: #4CAF50;
  color: #ffffff;
  padding: 12px 24px;
  border-radius: 4px;
  font-size: 16px;
  text-decoration: none;
  transition: background-color 0.2s, transform 0.2s;
  margin-top: 20px;
  
  &:hover {
    background-color: #3d9c40;
    transform: translateY(-2px);
  }
`;

const AboutPage: React.FC = () => {
  return (
    <Container>
      <Content>
        <Title>About SF SIM</Title>
        
        <Section>
          <SectionTitle>Game Overview</SectionTitle>
          <Paragraph>
            SF SIM is a text-based simulation game that puts you in the shoes of a startup founder in San Francisco.
            Navigate the challenges of building a tech company from scratch, making crucial decisions that affect
            your personal wellbeing, company growth, and ultimate success.
          </Paragraph>
        </Section>
        
        <Section>
          <SectionTitle>Game Phases</SectionTitle>
          <Paragraph>
            Your startup journey is divided into five distinct phases:
          </Paragraph>
          <List>
            <ListItem>
              <strong>Settling In:</strong> Establish yourself in San Francisco and lay the groundwork for your startup.
            </ListItem>
            <ListItem>
              <strong>Ideation:</strong> Develop your initial product idea and validate it with potential users.
            </ListItem>
            <ListItem>
              <strong>Bootstrapping:</strong> Build your product with limited resources and find your first customers.
            </ListItem>
            <ListItem>
              <strong>Fundraising:</strong> Secure investment to scale your business to the next level.
            </ListItem>
            <ListItem>
              <strong>Scaling:</strong> Grow your company into a significant player in the tech industry.
            </ListItem>
          </List>
        </Section>
        
        <Section>
          <SectionTitle>Key Stats</SectionTitle>
          <Paragraph>
            Throughout the game, you'll need to balance various aspects of your life and business:
          </Paragraph>
          <List>
            <ListItem>
              <strong>Founder Stats:</strong> Health, Energy, Technical Skills, Business Acumen, Leadership, Cash, Reputation
            </ListItem>
            <ListItem>
              <strong>Company Stats:</strong> Product Quality, Market Fit, User Growth, Revenue, Runway, Valuation, Team Size, Team Morale, Talent
            </ListItem>
            <ListItem>
              <strong>Location Stats:</strong> District, Type, Networking Score
            </ListItem>
          </List>
        </Section>
        
        <Section>
          <SectionTitle>How to Play</SectionTitle>
          <Paragraph>
            Each turn, you'll be presented with an event and multiple choices. Your decisions will impact your stats
            and determine the path of your startup journey. There's no single "right" way to play - it's about the
            strategy you choose and how you balance the various aspects of startup life.
          </Paragraph>
          <Paragraph>
            Keep an eye on your stats, especially your health, energy, and runway. If any of these drop too low,
            your startup journey might come to an early end!
          </Paragraph>
        </Section>
        
        <Button to="/">Back to Title Screen</Button>
      </Content>
    </Container>
  );
};

export default AboutPage; 