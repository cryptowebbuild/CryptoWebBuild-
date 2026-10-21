import React, { useState, useEffect } from 'react';
import SEO from '../components/SEO';
import { Database, Cpu, Shield, Bot, Send, Zap, DollarSign } from 'lucide-react';

const SIMULATED_MESSAGES = [
  {
    sender: 'user',
    text: 'Can you integrate 1-click checkout with Stripe & bKash and connect our product inventory?',
  },
  {
    sender: 'agent',
    text: 'Yes! Our Python/Django & Next.js checkout engine processes orders in < 0.8s with automatic courier tracking and RAG AI order lookup.',
  },
  {
    sender: 'user',
    text: 'What is the token presale softcap and vesting schedule in the Whitepaper?',
  },
  {
    sender: 'agent',
    text: 'According to Section 4.2 of the Whitepaper: Softcap is 500 SOL, liquidity is locked for 24 months, and team tokens have a 12-month cliff.',
  },
];

const Videos: React.FC = () => {
  const [visibleCount, setVisibleCount] = useState(1);
  const [typing, setTyping] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setTyping(true);
      setTimeout(() => {
        setTyping(false);
        setVisibleCount((prev) => (prev < SIMULATED_MESSAGES.length ? prev + 1 : 1));
      }, 900);
    }, 3200);
    return () => clearInterval(interval);
  }, []);

  const messages = SIMULATED_MESSAGES.slice(0, visibleCount);

  return (
    <div className="min-h-screen text-gray-900 dark:text-white space-y-12">
      <SEO
        title="Visual Showcase | AI & Full-Stack Infra | CryptoWebBuild"
        description="See our elite AI Agent infrastructure, sub-second E-Commerce engines, and Web3 Community Guardians in action."
        canonical="/videos"
      />

      <div className="pt-8 md:pt-12 pb-24 px-4 md:px-8">
        <section className="text-center max-w-4xl mx-auto mb-20 gpu-accelerated animate-slide-up">
          <h1 className="font-display text-4xl md:text-6xl font-black mb-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-400 drop-shadow-[0_0_15px_rgba(168,85,247,0.3)]">
            See the AI &amp; Full-Stack Infrastructure in Action
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 font-medium mb-10 max-w-3xl mx-auto">
            No fluff. Just raw, autonomous power automating sales, customer support, and communities 24/7.
          </p>
        </section>

        <section className="max-w-7xl mx-auto mb-32">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="group p-8 rounded-[32px] bg-white dark:bg-[#020617] glass-panel border border-gray-200 dark:border-white/5 hover:border-purple-500/30 shadow-xl transition-all duration-500 hover:-translate-y-2 hover:shadow-purple-500/20">
              <div className="w-16 h-16 rounded-2xl bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center text-purple-600 dark:text-purple-400 mb-6 group-hover:scale-110 transition-transform">
                <Database size={32} />
              </div>
              <h3 className="font-display text-2xl font-bold text-gray-900 dark:text-white mb-4">1. Data Ingestion</h3>
              <p className="text-gray-600 dark:text-gray-400 font-medium">
                Feed your product catalog, SOPs, whitepaper, or PostgreSQL database. Our pipeline instantly indexes your entire business knowledge base.
              </p>
            </div>

            <div className="group p-8 rounded-[32px] bg-white dark:bg-[#020617] glass-panel border border-gray-200 dark:border-white/5 hover:border-cyan-500/50 shadow-xl transition-all duration-500 hover:-translate-y-2 hover:shadow-cyan-500/20 md:translate-y-8">
              <div className="w-16 h-16 rounded-2xl bg-cyan-100 dark:bg-cyan-900/30 flex items-center justify-center text-cyan-600 dark:text-cyan-400 mb-6 group-hover:scale-110 transition-transform">
                <Cpu size={32} />
              </div>
              <h3 className="font-display text-2xl font-bold text-gray-900 dark:text-white mb-4">
                2. RAG &amp; LLM Optimization
              </h3>
              <p className="text-gray-600 dark:text-gray-400 font-medium">
                Our Python backend structures the data using custom Vector RAG architecture, ensuring ultra-fast, zero-hallucination responses.
              </p>
            </div>

            <div className="group p-8 rounded-[32px] bg-white dark:bg-[#020617] glass-panel border border-gray-200 dark:border-white/5 hover:border-blue-500/50 shadow-xl transition-all duration-500 hover:-translate-y-2 hover:shadow-blue-500/20">
              <div className="w-16 h-16 rounded-2xl bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 dark:text-blue-400 mb-6 group-hover:scale-110 transition-transform">
                <Shield size={32} />
              </div>
              <h3 className="font-display text-2xl font-bold text-gray-900 dark:text-white mb-4">
                3. Instant Guardianship
              </h3>
              <p className="text-gray-600 dark:text-gray-400 font-medium">
                1-click deployment live onto your Website, WhatsApp, Telegram, or Discord with 24/7 autonomous support and order automation.
              </p>
            </div>
          </div>
        </section>

        <section className="max-w-6xl mx-auto">
          <div className="bg-white dark:bg-[#0f172a] rounded-[2.5rem] border border-gray-200 dark:border-white/5 shadow-2xl overflow-hidden flex flex-col lg:flex-row">
            <div className="lg:w-3/5 bg-gray-100 dark:bg-[#020617]/60 glass-panel flex flex-col border-b lg:border-b-0 lg:border-r border-gray-200 dark:border-white/5 h-[500px]">
              <div className="px-6 py-4 bg-white dark:bg-[#0f172a] border-b border-gray-200 dark:border-white/5 flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-600 to-cyan-500 flex items-center justify-center text-white font-bold text-xl shadow-lg">
                  CWB
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 dark:text-white text-lg">CryptoWebBuild Official</h4>
                  <p className="text-sm text-cyan-600 dark:text-cyan-400 font-medium">
                    24/7 Live RAG AI Guardian • Multi-Channel Active
                  </p>
                </div>
              </div>

              <div className="flex-1 p-6 overflow-y-auto flex flex-col gap-6">
                {messages.map((msg, idx) => (
                  <div key={idx} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                    <div
                      className={`max-w-[80%] rounded-2xl px-5 py-3 shadow-md ${
                        msg.sender === 'user'
                          ? 'bg-purple-600 text-white rounded-br-none'
                          : 'bg-white dark:bg-[#0f172a] text-gray-900 dark:text-gray-200 border border-gray-200 dark:border-white/5 rounded-bl-none'
                      }`}
                    >
                      {msg.sender === 'agent' && (
                        <div className="flex items-center gap-2 mb-1">
                          <span className="text-xs font-bold text-purple-500 flex items-center gap-1">
                            <Bot size={14} /> AI Guardian
                          </span>
                        </div>
                      )}
                      <p className="text-[15px] leading-relaxed">{msg.text}</p>
                    </div>
                  </div>
                ))}

                {typing && (
                  <div className="flex justify-start">
                    <div className="bg-white dark:bg-[#0f172a] border border-gray-200 dark:border-white/5 rounded-2xl rounded-bl-none px-5 py-4 shadow-md flex gap-2 items-center">
                      <div className="w-2 h-2 bg-purple-500 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                      <div
                        className="w-2 h-2 bg-purple-500 rounded-full animate-bounce"
                        style={{ animationDelay: '150ms' }}
                      />
                      <div
                        className="w-2 h-2 bg-purple-500 rounded-full animate-bounce"
                        style={{ animationDelay: '300ms' }}
                      />
                    </div>
                  </div>
                )}
              </div>

              <div className="p-4 bg-white dark:bg-[#0f172a] border-t border-gray-200 dark:border-white/5">
                <div className="bg-gray-100 dark:bg-white/5 glass-panel rounded-xl px-4 py-3 flex items-center justify-between text-gray-400">
                  <span className="text-sm">Ask CryptoWebBuild AI Guardian...</span>
                  <Send size={20} />
                </div>
              </div>
            </div>

            <div className="lg:w-2/5 p-8 lg:p-12 flex flex-col justify-center bg-white dark:bg-[#0f172a]">
              <h3 className="font-display text-2xl font-bold text-gray-900 dark:text-white mb-2">
                Real-Time Telemetry
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-8 font-medium">
                Live performance metrics of the AI &amp; Full-Stack engine protecting and scaling revenue.
              </p>

              <div className="space-y-6">
                <div className="flex items-center gap-4 p-4 rounded-2xl bg-gray-50 dark:bg-white/5 border border-gray-100 dark:border-white/5">
                  <div className="w-12 h-12 rounded-xl bg-green-100 dark:bg-green-900/30 flex items-center justify-center text-green-600 dark:text-green-400">
                    <Zap size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400 font-bold uppercase tracking-wider">
                      Response &amp; Load Time
                    </p>
                    <p className="text-2xl font-black text-gray-900 dark:text-white">&lt; 0.8s</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 rounded-2xl bg-gray-50 dark:bg-white/5 border border-gray-100 dark:border-white/5">
                  <div className="w-12 h-12 rounded-xl bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center text-purple-600 dark:text-purple-400">
                    <Bot size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400 font-bold uppercase tracking-wider">
                      Accuracy &amp; Grounding
                    </p>
                    <p className="text-2xl font-black text-gray-900 dark:text-white">99.4%</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 rounded-2xl bg-gray-50 dark:bg-white/5 border border-gray-100 dark:border-white/5">
                  <div className="w-12 h-12 rounded-xl bg-cyan-100 dark:bg-cyan-900/30 flex items-center justify-center text-cyan-600 dark:text-cyan-400">
                    <DollarSign size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400 font-bold uppercase tracking-wider">
                      Support Cost Saved
                    </p>
                    <p className="text-2xl font-black text-gray-900 dark:text-white">80%</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Videos;
