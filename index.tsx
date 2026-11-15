import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import ErrorBoundary from './components/ErrorBoundary';
import './index.css';

// One guarded recovery attempt. A second failure must not reload forever.
const PRELOAD_KEY = 'cwb_preload_reload';
window.addEventListener('vite:preloadError', (event) => {
  event.preventDefault();
  try {
    if (sessionStorage.getItem(PRELOAD_KEY) === '1') return;
    sessionStorage.setItem(PRELOAD_KEY, '1');
  } catch {
    return;
  }
  window.location.reload();
});
window.setTimeout(() => {
  try {
    sessionStorage.removeItem(PRELOAD_KEY);
  } catch {
    /* storage blocked */
  }
}, 8000);

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Fatal: Could not find root element to mount the application.");
}

const root = ReactDOM.createRoot(rootElement);

root.render(
  <StrictMode>
    <ErrorBoundary>
      <HelmetProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </HelmetProvider>
    </ErrorBoundary>
  </StrictMode>
);
