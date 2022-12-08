import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ErrorBoundary } from './components/handlers/ErrorBoundary';
import { ThemeProvider } from './context/ThemeContext';
import { TranslationProvider } from './context/TranslationContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ErrorBoundary>
      <TranslationProvider>
        <ThemeProvider>
          <App /> 
        </ThemeProvider>
      </TranslationProvider>
    </ErrorBoundary>
  </React.StrictMode>
);
