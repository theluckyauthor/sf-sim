import React from 'react';
import styled, { keyframes } from 'styled-components';
import { useNavigate } from 'react-router-dom';

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(-20px); }
  to { opacity: 1; transform: translateY(0); }
`;

const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #1a1a1a;
  color: #ffffff;
  padding: 20px;
  text-align: center;
`;

const Logo = styled.div`
  font-size: 120px;
  margin-bottom: 20px;
  animation: ${fadeIn} 1s ease-out;
  filter: drop-shadow(0 4px 8px rgba(0,0,0,0.3));
`;

const Title = styled.h1`
  font-size: 64px;
  margin-bottom: 20px;
  animation: ${fadeIn} 1s ease-out;
  background: linear-gradient(45deg, #4CAF50, #2196F3);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
`;

const Subtitle = styled.p`
  font-size: 24px;
  margin-bottom: 40px;
  color: #888;
  animation: ${fadeIn} 1s ease-out 0.3s backwards;
`;

const StartButton = styled.button`
  font-size: 24px;
  padding: 15px 40px;
  border: none;
  border-radius: 8px;
  background: linear-gradient(45deg, #4CAF50, #2196F3);
  color: white;
  cursor: pointer;
  transition: transform 0.2s, box-shadow 0.2s;
  animation: ${fadeIn} 1s ease-out 0.6s backwards;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0,0,0,0.3);
  }
`;

const TitleScreen: React.FC = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <Logo>🌉</Logo>
      <Title>SF SIM</Title>
      <Subtitle>Your journey from garage to IPO starts here</Subtitle>
      <StartButton onClick={() => navigate('/create-founder')}>
        Start Your Startup
      </StartButton>
    </Container>
  );
};

export default TitleScreen; 