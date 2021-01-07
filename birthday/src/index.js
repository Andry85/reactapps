import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';

const color = '#333';

export const ColorContext = React.createContext();

ReactDOM.render(
  <React.StrictMode>
    <ColorContext.Provider value={color}>
      <App />
    </ColorContext.Provider>
  </React.StrictMode>,
  document.getElementById('root')
);