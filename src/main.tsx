import * as React from 'react';
import * as ReactDOM from 'react-dom/client';

import { App } from './App';
import '@assets/fonts';
import '@assets/styles/index.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
