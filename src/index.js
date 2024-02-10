import React from 'react';
import ReactDOM from 'react-dom/client';
import './css/index.css';
import App from './app';

const root = ReactDOM.createRoot(
  document.getElementById('root')
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// ReactDOM.render(<App />, document.getElementById('root'));
