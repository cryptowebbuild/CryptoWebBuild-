import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';

const FloatingChatWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleChat = () => setIsOpen(!isOpen);

  return (
    <div className="fixed bottom-8 right-8 z-50 flex flex-col items-end">

      {/* Chat Popup Window */}
      <div
        className={`
          transition-all duration-300 ease-in-out origin-bottom-right
          ${isOpen ? 'opacity-100 scale-100 mb-4 translate-y-0 pointer-events-auto' : 'opacity-0 scale-95 mb-0 translate-y-4 pointer-events-none absolute bottom-16 right-0'}
          w-[calc(100vw-2rem)] sm:w-[380px] h-[75vh] max-h-[600px]
          bg-[#0f172a]/95 backdrop-blur-xl border border-white/20 rounded-[20px] shadow-2xl shadow-purple-900/30 overflow-hidden flex flex-col
          fixed sm:relative top-4 left-4 sm:top-auto sm:left-auto right-4 bottom-24 sm:bottom-auto
        `}
      >
        {/* Header for Mobile (and Desktop consistency) */}
        <div className="flex items-center justify-between p-4 border-b border-white/10 bg-black/20">
          <div className="flex items-center gap-2">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
            </span>
            <span className="font-bold text-white tracking-wide text-sm">CryptoWebBuild AI</span>
          </div>
          <button
            onClick={toggleChat}
            className="p-1 rounded-full text-gray-400 hover:text-white hover:bg-white/10 transition-colors"
            aria-label="Close chat"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Iframe Container */}
        <div className="flex-1 w-full bg-slate-900/50">
          {isOpen && (
             <iframe
                src="http://ai.cryptowebbuild.com/chatbot/K6KyH2ECZUGFl0gc"
                style={{ width: '100%', height: '100%', border: 'none' }}
                allow="microphone"
                title="AI Chatbot"
             ></iframe>
          )}
        </div>
      </div>

      {/* Floating Action Button (FAB) */}
      <button
        onClick={toggleChat}
        className={`
          flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-r from-purple-600 to-cyan-500 text-white shadow-xl hover:shadow-purple-500/40 hover:scale-105 transition-all duration-300
          ${isOpen ? 'bg-gray-800 from-gray-800 to-gray-800 rotate-90 hidden sm:flex' : 'rotate-0'}
        `}
        aria-label="Toggle chat"
      >
        {isOpen ? <X className="w-6 h-6" /> : <MessageCircle className="w-6 h-6" />}
      </button>

    </div>
  );
};

export default FloatingChatWidget;
