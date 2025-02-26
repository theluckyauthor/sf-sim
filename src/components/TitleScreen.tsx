import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #1a1a1a;
  color: #ffffff;
  padding: 20px;
  text-align: center;
`;

const Title = styled.h1`
  font-size: 72px;
  margin: 0 0 20px 0;
  color: #4CAF50;
  text-shadow: 0 0 10px rgba(76, 175, 80, 0.5);
`;

const Subtitle = styled.h2`
  font-size: 24px;
  margin: 0 0 40px 0;
  color: #aaaaaa;
  max-width: 600px;
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 20px;
  margin-top: 40px;
`;

const Button = styled(Link)`
  display: inline-block;
  background-color: #4CAF50;
  color: #ffffff;
  padding: 15px 30px;
  border-radius: 4px;
  font-size: 18px;
  text-decoration: none;
  transition: background-color 0.2s, transform 0.2s;
  
  &:hover {
    background-color: #3d9c40;
    transform: translateY(-2px);
  }
`;

const SecondaryButton = styled(Button)`
  background-color: #2a2a2a;
  
  &:hover {
    background-color: #3a3a3a;
  }
`;

const SFSkyline = styled.div`
  margin-bottom: 40px;
  font-size: 60px;
  line-height: 1;
`;

const TitleScreen: React.FC = () => {
  return (
    <Container>
      <SFSkyline>🌉 🏙️ 💻</SFSkyline>
      <Title>SF SIM</Title>
      <Subtitle>
        Build your startup in the heart of Silicon Valley. Navigate the challenges of founder life,
        from coding your MVP to pitching VCs and scaling your team.
      </Subtitle>
      <ButtonContainer>
        <Button to="/create">Start New Game</Button>
        <SecondaryButton to="/about">About</SecondaryButton>
      </ButtonContainer>
    </Container>
  );
};

export default TitleScreen; 