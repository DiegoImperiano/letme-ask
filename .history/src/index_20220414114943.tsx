import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import './services/firebase'
import './styles/global.scss'

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement)
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
