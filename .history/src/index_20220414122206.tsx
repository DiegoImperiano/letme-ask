import React from 'react';
import App from './App';
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";


import './services/firebase'
import './styles/global.scss'

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();

