import React from 'react';
import { createRoot } from 'react-dom/client';
import './style.css';
import { App } from './components/App/App.jsx';

createRoot(
  document.querySelector('#root'),
).render(<App />);
