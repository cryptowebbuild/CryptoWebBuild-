import React, { useState, useEffect } from 'react';
import SEO from '../components/SEO';
import { Database, Zap, Shield, MessageSquare, Clock, ShieldCheck, Activity } from 'lucide-react';

const Videos: React.FC = () => {
  const [messages, setMessages] = useState<{sender: 'user'|'agent', text: string}[]>([
    { sender: 'user', text: "When is the TGE and how do I get whitelisted?" }
  ]);
  const [isTyping, setIsTyping] = useState(false);

  useEffect(() => {
    if (messages.length === 1 && messages[0].sender === 'user') {
      setIsTyping(true);
      const timer = setTimeout(() => {
        setMessages(prev => [...prev, {
          sender: 'agent',
          text: "🚀 TGE is scheduled for Q4! To get whitelisted, you need to hold at least 1,000 $CWB tokens and complete the Zealy quests. Let me know if you need the direct link to the quest board!"
        }]);
        setIsTyping(false);
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, [messages]);

  return (
    <div className="container mx-auto px-6 py-12 lg:py-24 space-y-12">
      <SEO 
        title="Visual Showcase | CryptoWebBuild - AI & Web3 Infrastructure"
        description="See our elite AI Agent infrastructure and Web3 Community Guardians in action. No fluff, just raw autonomous power protecting and scaling communities 24/7."
      />
      
      <main className="pt-24 md:pt-32 pb-24 px-4 md:px-8">
        {/* Hero Section */}
        <section className="text-center max-w-4xl mx-auto mb-20 gpu-accelerated animate-slide-up">
          <h1 className="text-4xl md:text-6xl font-black mb-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400 drop-shadow-[0_0_15px_rgba(168,85,247,0.3)]">
            See the AI Infrastructure in Action
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 font-medium mb-10 max-w-3xl mx-auto">
            No fluff. Just raw, autonomous power protecting and scaling Web3 communities 24/7.
          </p>
        </section>

        {/* Section 1: The 3-Step Deployment Pipeline */}
        <section className="max-w-7xl mx-auto mb-32">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="group p-8 rounded-[32px] bg-white dark:bg-[#020617] glass-panel border border-gray-200 dark:border-white/5 hover:border-purple-500/30 shadow-xl transition-all duration-500 hover:-translate-y-2 hover:shadow-purple-500/20">
              <div className="w-16 h-16 rounded-2xl bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center text-purple-600 dark:text-purple-400 mb-6 group-hover:scale-110 transition-transform">
                <Database size={32} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">1. Data Ingestion</h3>
              <p className="text-gray-600 dark:text-gray-400 font-medium">
                Feed your whitepaper, git docs, or custom tokenomics data. Our system instantly maps your entire ecosystem.
              </p>
            </div>

            {/* Card 2 */}
            <div className="group p-8 rounded-[32px] bg-white dark:bg-[#020617] glass-panel border border-gray-200 dark:border-white/5 hover:border-cyan-500/50 shadow-xl transition-all duration-500 hover:-translate-y-2 hover:shadow-cyan-500/20 md:translate-y-8">
              <div className="w-16 h-16 rounded-2xl bg-cyan-100 dark:bg-cyan-900/30 flex items-center justify-center text-cyan-600 dark:text-cyan-400 mb-6 group-hover:scale-110 transition-transform">
                <Zap size={32} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">2. RAG & LLM Optimization</h3>
              <p className="text-gray-600 dark:text-gray-400 font-medium">
                Our backend structures the data using custom Llama 3.1 architecture, ensuring ultra-fast, zero-hallucination responses.
              </p>
            </div>

            {/* Card 3 */}
            <div className="group p-8 rounded-[32px] bg-white dark:bg-[#020617] glass-panel border border-gray-200 dark:border-white/5 hover:border-blue-500/50 shadow-xl transition-all duration-500 hover:-translate-y-2 hover:shadow-blue-500/20">
              <div className="w-16 h-16 rounded-2xl bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 dark:text-blue-400 mb-6 group-hover:scale-110 transition-transform">
                <Shield size={32} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">3. Instant Guardianship</h3>
              <p className="text-gray-600 dark:text-gray-400 font-medium">
                1-click deployment live into Telegram/Discord with 24/7 autonomous support, moderating and scaling your community.
              </p>
            </div>
          </div>
        </section>

        {/* Section 2: Interactive Community Simulator */}
        <section className="max-w-6xl mx-auto">
          <div className="bg-white dark:bg-[#0f172a] rounded-[2.5rem] border border-gray-200 dark:border-white/5 shadow-2xl overflow-hidden flex flex-col lg:flex-row">
            
            {/* Telegram Chat Mockup (Left) */}
            <div className="lg:w-3/5 bg-[#f3f4f6] glass-panel flex flex-col border-b lg:border-b-0 lg:border-r border-gray-200 dark:border-white/5 h-[500px]">
              {/* Chat Header */}
              <div className="px-6 py-4 bg-white dark:bg-[#0f172a] border-b border-gray-200 dark:border-white/5 flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-600 to-cyan-500 flex items-center justify-center text-white font-bold text-xl shadow-lg">
                  CWB
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 dark:text-white text-lg">CryptoWebBuild Official</h4>
                  <p className="text-sm text-cyan-600 dark:text-cyan-400 font-medium">12,450 members • 1,200 online</p>
                </div>
              </div>

              {/* Chat Body */}
              <div className="flex-1 p-6 overflow-y-auto flex flex-col gap-6">
                {messages.map((msg, idx) => (
                  <div key={idx} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                    <div className={`max-w-[80%] rounded-2xl px-5 py-3 shadow-md ${
                      msg.sender === 'user'
                        ? 'bg-purple-600 text-white rounded-br-none'
                        : 'bg-white dark:bg-[#0f172a] text-gray-900 dark:text-gray-200 border border-gray-200 dark:border-white/5 rounded-bl-none'
                    }`}>
                      {msg.sender === 'agent' && (
                        <div className="flex items-center gap-2 mb-1">
                          <span className="text-xs font-bold text-purple-500 flex items-center gap-1">
                            <ShieldCheck size={14} /> AI Guardian
                          </span>
                        </div>
                      )}
                      <p className="text-[15px] leading-relaxed">{msg.text}</p>
                    </div>
                  </div>
                ))}
                {isTyping && (
                  <div className="flex justify-start">
                    <div className="bg-white dark:bg-[#0f172a] border border-gray-200 dark:border-white/5 rounded-2xl rounded-bl-none px-5 py-4 shadow-md flex gap-2 items-center">
                      <div className="w-2 h-2 bg-purple-500 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                      <div className="w-2 h-2 bg-purple-500 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                      <div className="w-2 h-2 bg-purple-500 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                    </div>
                  </div>
                )}
              </div>

              {/* Chat Input */}
              <div className="p-4 bg-white dark:bg-[#0f172a] border-t border-gray-200 dark:border-white/5">
                <div className="bg-gray-100 glass-panel rounded-xl px-4 py-3 flex items-center justify-between text-gray-400">
                  <span className="text-sm">Message #general...</span>
                  <MessageSquare size={20} />
                </div>
              </div>
            </div>

            {/* Metrics Panel (Right) */}
            <div className="lg:w-2/5 p-8 lg:p-12 flex flex-col justify-center bg-white dark:bg-[#0f172a]">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Real-Time Telemetry</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-8 font-medium">Live performance metrics of the AI Guardian protecting the community.</p>

              <div className="space-y-6">
                {/* Metric 1 */}
                <div className="flex items-center gap-4 p-4 rounded-2xl bg-gray-50 dark:bg-white/5 border border-gray-100 dark:border-white/5">
                  <div className="w-12 h-12 rounded-xl bg-green-100 dark:bg-green-900/30 flex items-center justify-center text-green-600 dark:text-green-400">
                    <Clock size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400 font-bold uppercase tracking-wider">Response Time</p>
                    <p className="text-2xl font-black text-gray-900 dark:text-white">&lt; 1s</p>
                  </div>
                </div>

                {/* Metric 2 */}
                <div className="flex items-center gap-4 p-4 rounded-2xl bg-gray-50 dark:bg-white/5 border border-gray-100 dark:border-white/5">
                  <div className="w-12 h-12 rounded-xl bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center text-purple-600 dark:text-purple-400">
                    <ShieldCheck size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400 font-bold uppercase tracking-wider">FUD Deflected</p>
                    <p className="text-2xl font-black text-gray-900 dark:text-white">99.4%</p>
                  </div>
                </div>

                {/* Metric 3 */}
                <div className="flex items-center gap-4 p-4 rounded-2xl bg-gray-50 dark:bg-white/5 border border-gray-100 dark:border-white/5">
                  <div className="w-12 h-12 rounded-xl bg-cyan-100 dark:bg-cyan-900/30 flex items-center justify-center text-cyan-600 dark:text-cyan-400">
                    <Activity size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400 font-bold uppercase tracking-wider">Moderation Cost Saved</p>
                    <p className="text-2xl font-black text-gray-900 dark:text-white">80%</p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

      </main>
    </div>
  );
};

export default Videos;
