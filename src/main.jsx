import React from 'react';
import ReactDOM from 'react-dom/client';
import ReactGA from 'react-ga4';
import { GA_MEASUREMENT_ID } from './config/site';

// Style order matters: globals → component styles (imported by App) → motion utilities
import './styles/index.css';
import App from './App';
import './styles/motion.css';

ReactGA.initialize(GA_MEASUREMENT_ID);
ReactGA.send('pageview');

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<React.StrictMode><App /></React.StrictMode>);
