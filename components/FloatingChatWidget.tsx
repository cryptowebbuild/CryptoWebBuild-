import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { X, MessageSquare, Zap, ArrowRight, ExternalLink } from 'lucide-react';

const FloatingChatWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedGoal, setSelectedGoal] = useState('Custom Web / E-Commerce Build');

  const whatsappUrl = `https://wa.me/8801618138820?text=${encodeURIComponent(
    `Hi Sagor, I'm visiting CryptoWebBuild.com and interested in: ${selectedGoal}. Let's discuss!`
  )}`;

  return (
    <div className="fixed bottom-5 right-5 z-50">
      {isOpen && (
        <div
          className="mb-4 w-[calc(100vw-40px)] sm:w-96 rounded-2xl bg-white/95 dark:bg-[#020617]/95 backdrop-blur-2xl border border-gray-200 dark:border-white/10 shadow-[0_25px_50px_-12px_rgba(0,0,0,0.8),0_0_30px_rgba(147,51,234,0.2)] overflow-hidden animate-slide-up"
          role="dialog"
          aria-label="CryptoWebBuild Quick Concierge"
        >
          <div className="px-5 py-4 bg-gradient-to-r from-purple-600/15 to-cyan-500/15 border-b border-gray-200 dark:border-white/10 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-purple-600 to-cyan-500 flex items-center justify-center text-white font-display font-bold text-sm shadow-md">
                CW
              </div>
              <div>
                <div className="font-display font-bold text-sm text-gray-900 dark:text-white flex items-center gap-2">
                  <span>CryptoWebBuild Studio</span>
                  <span className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
                </div>
                <p className="text-xs text-gray-600 dark:text-gray-400">Direct Engineer Access • &lt; 2h Reply</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-1.5 rounded-lg text-gray-500 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-white/10 transition-colors"
              aria-label="Close concierge"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <div className="p-5 space-y-4">
            <p className="text-xs font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400">
              Select What You Want To Build:
            </p>
            <div className="grid grid-cols-1 gap-2">
              {[
                'Custom Web / E-Commerce Build',
                'Technical SEO & <0.8s Speed Audit',
                'Custom RAG AI Agent & Automation',
                'Python/Django SaaS or Web3 dApp',
              ].map((goal) => (
                <button
                  key={goal}
                  type="button"
                  onClick={() => setSelectedGoal(goal)}
                  className={`text-left px-3.5 py-2.5 rounded-xl text-xs font-bold border transition-all flex items-center justify-between ${
                    selectedGoal === goal
                      ? 'bg-purple-500/10 border-purple-500 text-purple-600 dark:text-purple-400'
                      : 'bg-gray-50 dark:bg-white/5 border-gray-200 dark:border-white/5 text-gray-700 dark:text-gray-300 hover:border-purple-500/30'
                  }`}
                >
                  <span>{goal}</span>
                  <Zap className={`w-3.5 h-3.5 ${selectedGoal === goal ? 'text-purple-500' : 'opacity-30'}`} />
                </button>
              ))}
            </div>

            <div className="pt-2 space-y-2.5">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 px-4 rounded-xl neon-button text-white font-bold text-xs flex items-center justify-center gap-2 shadow-lg"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Chat on WhatsApp (01618-138820)</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
              <div className="grid grid-cols-2 gap-2">
                <a
                  href="https://t.me/cryptowebbuild"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-2.5 px-3 rounded-xl bg-gray-100 dark:bg-white/5 hover:bg-gray-200 dark:hover:bg-white/10 text-gray-900 dark:text-white font-bold text-xs flex items-center justify-center gap-1.5 border border-gray-200 dark:border-white/10 transition-colors"
                >
                  <span>Telegram</span>
                  <ExternalLink className="w-3 h-3 opacity-60" />
                </a>
                <Link
                  to="/contact"
                  onClick={() => setIsOpen(false)}
                  className="py-2.5 px-3 rounded-xl bg-gray-100 dark:bg-white/5 hover:bg-gray-200 dark:hover:bg-white/10 text-gray-900 dark:text-white font-bold text-xs flex items-center justify-center gap-1.5 border border-gray-200 dark:border-white/10 transition-colors"
                >
                  <span>Free Audit Form</span>
                  <ArrowRight className="w-3 h-3 opacity-60" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}

      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        aria-label={isOpen ? 'Close quick concierge' : 'Open quick concierge'}
        className="w-14 h-14 rounded-full neon-button text-white flex items-center justify-center border border-white/20 shadow-[0_10px_25px_-5px_rgba(147,51,234,0.6),0_0_15px_rgba(6,182,212,0.4)] hover:scale-105 transition-transform ml-auto"
      >
        {isOpen ? <X className="w-6 h-6" /> : <MessageSquare className="w-6 h-6" />}
      </button>
    </div>
  );
};

export default FloatingChatWidget;
