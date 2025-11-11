import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { MusicProvider } from './context/MusicContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <MusicProvider> */}
      <App />
    {/* </MusicProvider> */}
  </React.StrictMode>
);

reportWebVitals();