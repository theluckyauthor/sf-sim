import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { store } from './store/store';
import { createGlobalStyle } from 'styled-components';
import TitleScreen from './components/TitleScreen';
import CreateFounder from './components/CreateFounder';
import GameContainer from './components/GameContainer';

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
          <Route path="/create-founder" element={<CreateFounder />} />
          <Route path="/game" element={<GameContainer />} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
