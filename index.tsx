import React, { StrictMode, Suspense } from 'react';
import { createRoot } from 'react-dom/client';
import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './index.css';

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Fatal: Could not find root element to mount the application.");
}

const root = createRoot(rootElement);

// Simple loader for the very first mount
const InitialLoader = () => (
  <div style={{
    height: '100vh',
    width: '100vw',
    backgroundColor: '#02010a',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#a855f7',
    fontFamily: 'Space Grotesk, sans-serif'
  }}>
    <div className="cosmic-spinner"></div>
  </div>
);

root.render(
  <StrictMode>
    <HelmetProvider>
      <BrowserRouter>
        <Suspense fallback={<InitialLoader />}>
          <App />
        </Suspense>
      </BrowserRouter>
    </HelmetProvider>
  </StrictMode>
);

// Service Worker Registration with environment check
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    // In some preview environments (like AI Studio), the origin might not match.
    // We try/catch to prevent the error from cluttering the console as "Uncaught".
    const swUrl = '/sw.js';
    navigator.serviceWorker.register(swUrl)
      .then(registration => {
        // Registration was successful
        console.debug('ServiceWorker registration successful with scope: ', registration.scope);
      })
      .catch(err => {
        // Silently handle errors for environments that block SWs or have origin mismatches
        console.debug('ServiceWorker registration skipped (environment restriction):', err.message);
      });
  });
}