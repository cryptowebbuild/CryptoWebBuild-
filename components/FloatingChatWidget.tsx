import React, { useEffect } from 'react';

// Define the global config interface to avoid TypeScript errors
declare global {
  interface Window {
    difyChatbotConfig: any;
  }
}

const FloatingChatWidget: React.FC = () => {
  useEffect(() => {
    // 1. Set global config EXACTLY as requested by the user
    window.difyChatbotConfig = {
      token: 'K6KyH2ECZUGFl0gc',
      baseUrl: 'https://ai.cryptowebbuild.com',
      inputs: {},
      systemVariables: {},
      userVariables: {}
    };

    // 2. Inject the script correctly
    const scriptId = 'K6KyH2ECZUGFl0gc'; // ID must match the token as requested
    if (!document.getElementById(scriptId)) {
      const script = document.createElement('script');
      script.id = scriptId;
      script.src = 'https://ai.cryptowebbuild.com/embed.min.js';
      script.defer = true;
      document.body.appendChild(script);
    }
  }, []);

  return (
    <>
      {/*
        Inject styles as requested by the user, but with slight improvements
        to match the site's dark theme/glassmorphism while maintaining the requested overrides.
      */}
      <style>{`
        /* Base widget styling */
        #dify-chatbot-bubble-button {
          background-color: #1C64F2 !important;
          /* Adding a subtle glow to fit the theme */
          box-shadow: 0 10px 25px -5px rgba(28, 100, 242, 0.5) !important;
        }
        #dify-chatbot-bubble-window {
          width: 24rem !important;
          height: 40rem !important;
          /* Fitting it into the dark theme */
          border: 1px solid rgba(255, 255, 255, 0.1) !important;
          border-radius: 16px !important;
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5) !important;
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

        /* Responsive handling for mobile so it doesn't overflow */
        @media (max-width: 640px) {
          #dify-chatbot-bubble-window {
            width: calc(100vw - 2rem) !important;
            height: calc(100vh - 8rem) !important;
            bottom: 5rem !important;
            right: 1rem !important;
          }
        }
      `}</style>
    </>
  );
};

export default FloatingChatWidget;
