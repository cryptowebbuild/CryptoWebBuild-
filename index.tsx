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


// The previous build registered a service worker that could serve stale HTML.
// Remove it once per session, then leave the site network-only.
if ('serviceWorker' in navigator) {
  try {
    const CLEAN_KEY = 'cwb_sw_cleanup';
    if (!sessionStorage.getItem(CLEAN_KEY)) {
      sessionStorage.setItem(CLEAN_KEY, '1');
      navigator.serviceWorker.getRegistrations().then((regs) => {
        regs.forEach((reg) => reg.unregister());
      }).catch(() => {});
      if ('caches' in window) {
        caches.keys().then((keys) => keys.forEach((key) => caches.delete(key))).catch(() => {});
      }
    }
  } catch {
    /* storage blocked */
  }
}
