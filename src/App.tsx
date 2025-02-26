import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { store } from './store/store';
import { createGlobalStyle } from 'styled-components';
import TitleScreen from './components/TitleScreen';
import GameContainer from './components/GameContainer';
import AboutPage from './components/AboutPage';
import CreateFounder from './components/CreateFounder';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: #1a1a1a;
    color: #ffffff;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }
`;

function App() {
  return (
    <Provider store={store}>
      <Router>
        <GlobalStyle />
        <Routes>
          <Route path="/" element={<TitleScreen />} />
          <Route path="/create" element={<CreateFounder />} />
          <Route path="/game" element={<GameContainer />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
