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
    };

    // Load after 3.5 seconds to ensure initial paint and interactions are prioritized
    const timer = setTimeout(initChatbot, 3500);

    return () => clearTimeout(timer);
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
