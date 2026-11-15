import React from 'react';

interface Props {
  children: React.ReactNode;
}

interface State {
  hasError: boolean;
}

class ErrorBoundary extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(): State {
    return { hasError: true };
  }

  componentDidCatch(error: Error, info: React.ErrorInfo) {
    console.error('CryptoWebBuild app error:', error, info.componentStack);
  }

  render() {
    if (!this.state.hasError) return this.props.children;

    return (
      <div
        style={{
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '24px',
          background: '#090A0F',
          color: '#F8FAFC',
          fontFamily: 'system-ui, -apple-system, Segoe UI, sans-serif',
        }}
      >
        <div style={{ maxWidth: '520px' }}>
          <p style={{ margin: 0, fontSize: '12px', letterSpacing: '.14em', textTransform: 'uppercase', color: '#94A3B8' }}>
            CryptoWebBuild
          </p>
          <h1 style={{ margin: '14px 0 12px', fontSize: '30px', lineHeight: 1.1, letterSpacing: '-.03em' }}>
            A new version is available.
          </h1>
          <p style={{ margin: 0, fontSize: '15px', lineHeight: 1.6, color: '#94A3B8' }}>
            The page could not load part of the build. Reload once. If it keeps happening, send the URL on WhatsApp and we will fix it.
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginTop: '24px' }}>
            <button
              type="button"
              onClick={() => {
                window.location.href = '/?v=' + Date.now();
              }}
              style={{
                minHeight: '44px',
                padding: '0 18px',
                borderRadius: '999px',
                border: '1px solid #6366F1',
                background: '#6366F1',
                color: '#fff',
                font: '600 14px system-ui, sans-serif',
                cursor: 'pointer',
              }}
            >
              Reload the site
            </button>
            <a
              href="https://wa.me/8801618138820"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                minHeight: '44px',
                display: 'inline-flex',
                alignItems: 'center',
                padding: '0 18px',
                borderRadius: '999px',
                border: '1px solid rgba(255,255,255,.18)',
                color: '#F8FAFC',
                textDecoration: 'none',
                font: '600 14px system-ui, sans-serif',
              }}
            >
              WhatsApp
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default ErrorBoundary;
