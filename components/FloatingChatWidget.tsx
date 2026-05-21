import React, { useEffect } from 'react';

// Define the global config interface to avoid TypeScript errors
declare global {
  interface Window {
    difyChatbotConfig: any;
  }
}

const FloatingChatWidget: React.FC = () => {
  useEffect(() => {
    // Optimization: Delay the chatbot script initialization to prevent it from blocking LCP
    const initChatbot = () => {
      window.difyChatbotConfig = {
        token: 'K6KyH2ECZUGFl0gc',
        baseUrl: 'https://ai.cryptowebbuild.com',
        inputs: {},
        systemVariables: {},
        userVariables: {}
      };

      const scriptId = 'K6KyH2ECZUGFl0gc';
      if (!document.getElementById(scriptId)) {
        const script = document.createElement('script');
        script.id = scriptId;
        script.src = 'https://ai.cryptowebbuild.com/embed.min.js';
        // Set to defer but load immediately on effect to balance speed and reliability
        script.defer = true;
        document.body.appendChild(script);
      }
    };

    // Lazy load the chatbot script to respect PageSpeed requirements.
    // We use a delay combined with interaction listeners to ensure it always renders for the user.
    let initialized = false;
    const triggerInit = () => {
      if (!initialized) {
        initialized = true;
        initChatbot();
      }
    };

    // Use a 2.5 second delay. This is long enough to let LCP finish,
    // but short enough that the user sees the chat widget quickly.
    const timer = setTimeout(triggerInit, 2500);

    // Also trigger on first user interaction (scroll, click, etc.) to guarantee it shows up
    // if the user interacts before the timer fires.
    const events = ['scroll', 'mousemove', 'touchstart', 'keydown', 'click'];
    const handleInteraction = () => {
      triggerInit();
      events.forEach(event => window.removeEventListener(event, handleInteraction));
    };

    events.forEach(event => window.addEventListener(event, handleInteraction, { once: true, passive: true }));

    return () => {
      clearTimeout(timer);
      events.forEach(event => window.removeEventListener(event, handleInteraction));

      const script = document.getElementById('K6KyH2ECZUGFl0gc');
      if (script) {
        script.remove();
      }
      const bubble = document.getElementById('dify-chatbot-bubble-button');
      if (bubble) bubble.remove();
      const windowNode = document.getElementById('dify-chatbot-bubble-window');
      if (windowNode) windowNode.remove();
    };
  }, []);

  return (
    <>
      {/*
        Inject styles to match the Elite Cosmic Dark theme
        while enforcing mobile responsiveness and strict z-index handling.
      */}
      <style>{`
        /* Base widget styling */
        #dify-chatbot-bubble-button {
          background: linear-gradient(135deg, #9333ea, #06b6d4) !important;
          /* Adding a subtle glow to fit the theme */
          box-shadow: 0 10px 25px -5px rgba(147, 51, 234, 0.6), 0 0 15px rgba(6, 182, 212, 0.4) !important;
          z-index: 99999 !important;
          bottom: 20px !important;
          right: 20px !important;
          border: 1px solid rgba(255, 255, 255, 0.2) !important;
          transition: transform 0.3s ease, box-shadow 0.3s ease !important;
        }

        #dify-chatbot-bubble-button:hover {
          transform: scale(1.05) translateY(-2px) !important;
          box-shadow: 0 15px 30px -5px rgba(147, 51, 234, 0.8), 0 0 20px rgba(6, 182, 212, 0.6) !important;
        }

        #dify-chatbot-bubble-window {
          width: 24rem !important;
          height: 40rem !important;
          /* Fitting it into the dark theme */
          background-color: rgba(2, 6, 23, 0.85) !important;
          backdrop-filter: blur(16px) !important;
          -webkit-backdrop-filter: blur(16px) !important;
          border: 1px solid rgba(255, 255, 255, 0.05) !important;
          border-radius: 16px !important;
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.8), 0 0 30px rgba(147, 51, 234, 0.15) !important;
          z-index: 99999 !important;
        }

        /* Hide Dify Watermark & Replace with CryptoWebBuild */
        #dify-chatbot-bubble-window a[href*="dify.ai"],
        #dify-chatbot-bubble-window a[target="_blank"] {
          display: none !important;
        }
        #dify-chatbot-bubble-window .p-4.flex.items-center.justify-between.text-xs {
          visibility: hidden;
          position: relative;
        }
        #dify-chatbot-bubble-window .p-4.flex.items-center.justify-between.text-xs::after {
          content: 'Powered by CryptoWebBuild 🚀';
          visibility: visible;
          position: absolute;
          left: 0;
          width: 100%;
          text-align: center;
          color: #6B7280;
          font-weight: 600;
          letter-spacing: 0.05em;
        }

        /* Responsive handling for mobile */
        @media (max-width: 768px) {
          #dify-chatbot-bubble-button {
            bottom: 20px !important;
            right: 20px !important;
          }

          #dify-chatbot-bubble-window {
            width: calc(100vw - 32px) !important;
            height: calc(100vh - 100px) !important;
            bottom: 80px !important;
            right: 16px !important;
            left: 16px !important;
            max-height: 85vh !important;
            border-radius: 20px !important;
          }
        }
      `}</style>
    </>
  );
};

export default FloatingChatWidget;
