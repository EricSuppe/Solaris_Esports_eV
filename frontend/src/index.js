import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { TranslationProvider } from './context/TranslationContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <TranslationProvider>
      <App /> 
    </TranslationProvider>
  </React.StrictMode>
);
