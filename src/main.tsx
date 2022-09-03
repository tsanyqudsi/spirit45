import React from 'react';
import ReactDOM from 'react-dom/client';

import { App } from './App';
import '@assets/fonts/roboto';
import '@assets/fonts/montserrat';
import '@assets/styles/index.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
