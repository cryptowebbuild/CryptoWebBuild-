import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

import { Play, BrainCircuit, Zap, Database, Rocket } from 'lucide-react';

const Home: React.FC = () => {
  return (
    <div className="space-y-24 md:space-y-48 overflow-hidden bg-gray-50 dark:bg-[#020617] transition-colors duration-300">
      
      {/* --- SEO Configuration --- */}
      <SEO title="CryptoWebBuild | Elite AI Agents & Web3 Growth Funnels"
        description="Scale your Web3 project with custom AI Agent infrastructure, Community Guardians, and high-converting Growth Funnels by CryptoWebBuild."
        keywords={[
          'Crypto Website Developer',
          'Business Website Developer', 
          'E-commerce Website Developer',
          'Technical SEO Web Design',
          'React Website Development',
          'Conversion Focused Website Design'
        ]}
        canonical="/"
        schemaType="Organization"
      />
      
      {/* --- Hero Section --- */}
      <section className="relative px-6 pt-24 md:pt-32 pb-16 min-h-[90vh] lg:min-h-screen flex items-center justify-center">
        
        {/* Glow Effects - GPU Accelerated */}
        <div className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[300px] md:w-[700px] h-[300px] md:h-[700px] bg-purple-500/10 dark:bg-purple-500/20 blur-[100px] rounded-full pointer-events-none transition-colors duration-500 mix-blend-multiply dark:mix-blend-screen will-change-transform" />
        <div className="absolute top-1/2 left-3/4 -translate-x-1/2 -translate-y-1/2 w-[250px] md:w-[500px] h-[250px] md:h-[500px] bg-blue-500/10 dark:bg-cyan-500/20 blur-[90px] rounded-full gpu-accelerated animate-pulse-slow pointer-events-none transition-colors duration-500 mix-blend-multiply dark:mix-blend-screen will-change-transform" />

        <div className="relative z-10 max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Content */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left space-y-8 gpu-accelerated animate-slide-up">
            
            {/* Status Badge */}
            <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white dark:bg-white/10 backdrop-blur-md border border-gray-200 dark:border-white/5 shadow-sm hover:border-purple-500/30 transition-colors">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
              </span>
              <span className="text-xs md:text-sm font-bold text-gray-700 dark:text-gray-300 uppercase tracking-wide">Premium Build Slots Open</span>
            </div>

            {/* Headline */}
            <h1 className="font-display text-5xl sm:text-6xl md:text-7xl font-black tracking-tight leading-[1.1] text-gray-900 dark:text-white">
              Deploy <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-500 dark:from-purple-400 dark:to-blue-400">Autonomous AI Guardians</span> For Your Community
            </h1>

            {/* Subheadline */}
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-2xl leading-relaxed">
              We build high-end, RAG-trained AI Agents and automated solutions that handle user management, eliminate repetitive support, and scale your operations 24/7.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
              <Link
                to="/contact"
                className="group flex items-center justify-center gap-2 px-8 py-4 w-full sm:w-auto bg-gradient-to-r from-purple-600 to-blue-600 text-white font-bold rounded-xl shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40 hover:-translate-y-0.5 transition-all"
              >
                <Zap className="w-5 h-5 group-hover:scale-110 transition-transform" />
                Build Your AI Agent
              </Link>
              <Link
                to="/projects"
                className="group flex items-center justify-center gap-2 px-8 py-4 w-full sm:w-auto bg-white dark:bg-white/5 border border-gray-200 dark:border-white/5 text-gray-900 dark:text-white font-bold rounded-xl shadow-sm hover:bg-gray-50 dark:hover:bg-white/10 hover:-translate-y-0.5 transition-all"
              >
                <Play className="w-5 h-5 group-hover:text-purple-500 transition-colors" />
                See Live Demo
              </Link>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-col items-center lg:items-start gap-4 pt-6 border-t border-gray-200 dark:border-white/5 w-full">
              <div className="flex items-center gap-2 text-sm font-bold text-gray-600 dark:text-gray-400 uppercase tracking-wider">
                Trusted Infrastructure
              </div>
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4">
                <div className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-[#0f172a] border border-gray-200 dark:border-white/5 rounded-xl shadow-sm">
                  <svg className="w-5 h-5 text-gray-900 dark:text-white" viewBox="0 0 24 24" fill="currentColor"><path d="M22.2819 9.8211a5.9847 5.9847 0 0 0-.5157-4.9108 6.0462 6.0462 0 0 0-6.5098-2.9A6.0651 6.0651 0 0 0 4.9807 4.1818a5.9847 5.9847 0 0 0-3.1586 3.4406 6.0462 6.0462 0 0 0-1.0451 7.0809 5.9847 5.9847 0 0 0 .5157 4.9108 6.0462 6.0462 0 0 0 6.5098 2.9 6.0651 6.0651 0 0 0 10.2757-2.1715 5.9847 5.9847 0 0 0 3.1586-3.4406 6.0462 6.0462 0 0 0 1.0451-7.0809zm-8.451 9.8524c-2.5026.149-4.7088-1.5794-5.2673-3.9576l6.634-3.8306v-1.6375l-8.0818-4.6659v1.6406l6.634 3.8306c.5585 2.3782-1.6465 4.1066-4.1491 3.9576zM7.2913 14.821v-3.2812l-6.634-3.8306v1.6406l8.0818 4.6659v-1.6406l-6.634-3.8306c-.5585-2.3782 1.6465-4.1066 4.1491-3.9576 2.5026-.149 4.7088 1.5794 5.2673 3.9576l-4.2302 2.4419zM16.7087 9.179v3.2812l6.634 3.8306v-1.6406l-8.0818-4.6659v1.6406l6.634 3.8306c.5585 2.3782-1.6465 4.1066-4.1491 3.9576-2.5026.149-4.7088-1.5794-5.2673-3.9576l4.2302-2.4419z"/></svg>
                  <span className="font-bold text-gray-900 dark:text-white">Powered by OpenAI</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-[#0f172a] border border-gray-200 dark:border-white/5 rounded-xl shadow-sm">
                  <Zap className="w-5 h-5 text-yellow-500" />
                  <span className="font-bold text-gray-900 dark:text-white">Integrated with Telegram, Discord & Solana</span>
                </div>
              </div>
            </div>

                      </div>

          {/* Right Column: AI Agent Studio Mockup */}
          <div className="relative w-full max-w-2xl mx-auto lg:ml-auto gpu-accelerated animate-slide-up" style={{ animationDelay: '0.2s' }}>
            {/* Background Decorative Blobs */}
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-600/30 to-blue-500/30 rounded-[2rem] blur-xl" />

            <div className="relative bg-white/90 dark:bg-[#0f172a]/90 backdrop-blur-2xl border border-gray-200/50 dark:border-white/10 rounded-2xl shadow-2xl overflow-hidden flex flex-col h-[400px] md:h-[500px]">

              {/* macOS Header */}
              <div className="h-12 bg-gray-50 dark:bg-white/5/80 dark:bg-black/40 border-b border-gray-200/50 dark:border-white/5 flex items-center px-4 gap-2">
                <div className="w-3 h-3 rounded-full bg-red-400" />
                <div className="w-3 h-3 rounded-full bg-yellow-400" />
                <div className="w-3 h-3 rounded-full bg-green-400" />
                <div className="mx-auto text-xs font-semibold text-gray-600 dark:text-gray-400">AI Agent Studio</div>
              </div>

              {/* Main App Area */}
              <div className="flex flex-1 overflow-hidden">

                {/* Sidebar */}
                <div className="w-16 hidden md:flex flex-col items-center py-6 gap-6 bg-gray-50 dark:bg-white/5/50 dark:bg-white/5 border-r border-gray-200/50 dark:border-white/5">
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center text-white shadow-sm">
                    <BrainCircuit className="w-5 h-5" />
                  </div>
                  <div className="w-8 h-8 rounded-lg bg-gray-200/50 dark:bg-white/10 flex items-center justify-center text-gray-400 dark:text-gray-600 hover:text-purple-500 transition-colors cursor-pointer">
                    <Database className="w-5 h-5" />
                  </div>
                  <div className="w-8 h-8 rounded-lg bg-gray-200/50 dark:bg-white/10 flex items-center justify-center text-gray-400 dark:text-gray-600 hover:text-purple-500 transition-colors cursor-pointer">
                    <Zap className="w-5 h-5" />
                  </div>
                </div>

                {/* Content Area */}
                <div className="flex-1 p-6 flex flex-col gap-6 overflow-y-auto">

                  {/* Status Bar */}
                  <div className="flex items-center justify-between p-4 bg-white dark:bg-white/5 rounded-xl border border-gray-100 dark:border-white/5 shadow-sm">
                    <div className="flex items-center gap-3">
                      <div className="relative flex h-3 w-3">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                      </div>
                      <span className="text-sm font-bold text-gray-900 dark:text-white">Agent Status: Active</span>
                    </div>
                    <div className="text-xs font-medium text-gray-600 dark:text-gray-400">Processing Queries</div>
                  </div>

                  {/* Analytics Mockup */}
                  <div className="grid grid-cols-3 gap-4">
                    {[1, 2, 3].map((i) => (
                      <div key={i} className="p-4 bg-gray-50 dark:bg-white/5 rounded-xl border border-gray-100 dark:border-white/5 flex flex-col gap-2">
                        <div className="w-8 h-8 rounded-full bg-gray-200 dark:bg-white/10" />
                        <div className="w-full h-2 rounded-full bg-gray-200 dark:bg-white/10" />
                        <div className="w-2/3 h-2 rounded-full bg-gray-200 dark:bg-white/10" />
                      </div>
                    ))}
                  </div>

                  {/* Chat / Log Mockup */}
                  <div className="flex-1 bg-gray-50 dark:bg-white/5 rounded-xl border border-gray-100 dark:border-white/5 p-4 flex flex-col gap-4">
                     <div className="flex gap-3">
                        <div className="w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-500/20 flex-shrink-0" />
                        <div className="flex-1 bg-white dark:bg-[#020617] glass-panel p-3 rounded-2xl rounded-tl-none border border-gray-100 dark:border-white/5 shadow-sm">
                          <div className="h-2 w-3/4 bg-gray-200 dark:bg-gray-700 rounded-full mb-2" />
                          <div className="h-2 w-1/2 bg-gray-200 dark:bg-gray-700 rounded-full" />
                        </div>
                     </div>
                     <div className="flex gap-3 flex-row-reverse">
                        <div className="w-8 h-8 rounded-full bg-purple-100 dark:bg-purple-500/20 flex-shrink-0 flex items-center justify-center">
                            <BrainCircuit className="w-4 h-4 text-purple-600 dark:text-purple-400" />
                        </div>
                        <div className="flex-1 bg-purple-50 dark:bg-purple-500/10 p-3 rounded-2xl rounded-tr-none border border-purple-100 dark:border-purple-500/20 shadow-sm">
                          <div className="h-2 w-full bg-purple-200 dark:bg-purple-400/30 rounded-full mb-2" />
                          <div className="h-2 w-5/6 bg-purple-200 dark:bg-purple-400/30 rounded-full mb-2" />
                          <div className="h-2 w-4/6 bg-purple-200 dark:bg-purple-400/30 rounded-full" />
                        </div>
                     </div>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Guarantee Card Section */}
      <section className="relative px-6 z-20 pb-20 -mt-12 md:-mt-24">
         <div className="max-w-4xl mx-auto">
            <div className="bg-white/80 dark:bg-[#0f172a]/80 backdrop-blur-xl p-8 md:p-10 rounded-[2rem] border border-gray-200 dark:border-white/5 shadow-2xl gpu-accelerated animate-slide-up" style={{ animationDelay: '0.4s' }}>
              <div className="text-center mb-8">
                <p className="text-xl md:text-3xl font-display font-bold text-gray-900 dark:text-white leading-tight">
                  Pay 50% upfront. Pay the final 50% <span className="text-cyan-600 dark:text-cyan-400 underline decoration-purple-500 decoration-4 underline-offset-4">ONLY</span> when you see your custom AI Agent perfectly answering questions in a live test.
                </p>
              </div>
              <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 text-sm md:text-base font-bold text-gray-600 dark:text-gray-300 uppercase tracking-widest">
                <div className="flex items-center gap-2">
                    <span className="flex h-5 w-5 rounded-full bg-green-100 dark:bg-green-500/20 items-center justify-center">
                        <span className="text-green-600 dark:text-green-400 text-xs">✓</span>
                    </span>
                    Zero Risk
                </div>
                <div className="flex items-center gap-2">
                    <span className="flex h-5 w-5 rounded-full bg-green-100 dark:bg-green-500/20 items-center justify-center">
                        <span className="text-green-600 dark:text-green-400 text-xs">✓</span>
                    </span>
                    100% Performance
                </div>
                <div className="flex items-center gap-2">
                    <span className="flex h-5 w-5 rounded-full bg-green-100 dark:bg-green-500/20 items-center justify-center">
                        <span className="text-green-600 dark:text-green-400 text-xs">✓</span>
                    </span>
                    Money-Back Protection
                </div>
              </div>
            </div>
         </div>
      </section>

      {/* --- Launch Protocol (Process) --- */}
      <section className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-12 md:mb-20">
          <div className="inline-block px-4 py-1.5 mb-6 rounded-full bg-white dark:bg-white/5 border border-purple-500/30 text-purple-600 dark:text-purple-400 text-sm font-bold tracking-wider uppercase shadow-sm">
            Launch Protocol
          </div>
          <h2 className="font-display text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            48-Hour <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-cyan-500 dark:from-purple-400 dark:to-cyan-400">AI Integration</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg md:text-xl leading-relaxed">
            A proven, high-speed workflow to deploy autonomous agents and scale your Web3 operations immediately.
          </p>
        </div>

        <div className="relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-1 bg-gradient-to-r from-transparent via-purple-500/20 to-transparent -translate-y-1/2 z-0" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 relative z-10">
            {/* Step 1 */}
            <div className="group p-8 rounded-[32px] bg-white dark:bg-[#020617] glass-panel border border-gray-200 dark:border-white/5 hover:border-purple-500 transition-all duration-500 hover:-translate-y-2 shadow-sm hover:shadow-xl">
              <div className="w-16 h-16 rounded-2xl bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center text-purple-600 dark:text-purple-400 font-bold text-2xl mb-6 relative group-hover:scale-110 transition-transform">
                1
              </div>
              <h3 className="font-display text-2xl font-bold text-gray-900 dark:text-white mb-3">Discovery</h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-sm font-medium">
                We map your goals, audience, and features to build a roadmap that ensures a successful liftoff.
              </p>
            </div>

            {/* Step 2 */}
            <div className="group p-8 rounded-[32px] bg-white dark:bg-[#020617] glass-panel border border-gray-200 dark:border-white/5 hover:border-blue-500 transition-all duration-500 hover:-translate-y-2 lg:translate-y-12 shadow-sm hover:shadow-xl">
              <div className="w-16 h-16 rounded-2xl bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 dark:text-blue-400 font-bold text-2xl mb-6 relative group-hover:scale-110 transition-transform">
                2
              </div>
              <h3 className="font-display text-2xl font-bold text-gray-900 dark:text-white mb-3">Design</h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-sm font-medium">
                Blueprinting the stack. High-fidelity UI design to captivate investors and customers instantly.
              </p>
            </div>

            {/* Step 3 */}
            <div className="group p-8 rounded-[32px] bg-white dark:bg-[#020617] glass-panel border border-gray-200 dark:border-white/5 hover:border-cyan-500 transition-all duration-500 hover:-translate-y-2 shadow-sm hover:shadow-xl">
              <div className="w-16 h-16 rounded-2xl bg-cyan-100 dark:bg-cyan-900/30 flex items-center justify-center text-cyan-600 dark:text-cyan-400 font-bold text-2xl mb-6 relative group-hover:scale-110 transition-transform">
                3
              </div>
              <h3 className="font-display text-2xl font-bold text-gray-900 dark:text-white mb-3">Development</h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-sm font-medium">
                Coding with clean, semantic architecture. Rigorous testing, SEO injection, and mobile optimization.
              </p>
            </div>

            {/* Step 4 */}
            <div className="group p-8 rounded-[32px] bg-white dark:bg-[#020617] glass-panel border border-gray-200 dark:border-white/5 hover:border-emerald-500 transition-all duration-500 hover:-translate-y-2 lg:translate-y-12 shadow-sm hover:shadow-xl">
              <div className="w-16 h-16 rounded-2xl bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center text-emerald-600 dark:text-emerald-400 font-bold text-2xl mb-6 relative group-hover:scale-110 transition-transform">
                4
              </div>
              <h3 className="font-display text-2xl font-bold text-gray-900 dark:text-white mb-3">Launch</h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-sm font-medium">
                Deployment to global edge networks. Analytics setup. Your project is live, secure, and ready for traffic.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* --- Proof / Positioning Section --- */}
      <section className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-20">
          <h2 className="font-display text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            Elite AI Architecture. Zero Bloat.
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg md:text-xl leading-relaxed">
            We replace manual community management and slow sales cycles with autonomous AI systems designed for Web3 dominance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          <div className="p-8 md:p-10 rounded-[32px] bg-white dark:bg-[#020617] glass-panel border border-gray-200 dark:border-white/5 shadow-sm hover:shadow-xl transition-all duration-300">
            <h3 className="font-display text-2xl font-bold text-gray-900 dark:text-white mb-4">FUD Prevention</h3>
            <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed font-medium">24/7 AI Guardians instantly answer investor questions based on your Whitepaper, eliminating fear and doubt.</p>
          </div>
          <div className="p-8 md:p-10 rounded-[32px] bg-white dark:bg-[#020617] glass-panel border border-gray-200 dark:border-white/5 shadow-sm hover:shadow-xl transition-all duration-300">
            <h3 className="font-display text-2xl font-bold text-gray-900 dark:text-white mb-4">Cost Reduction</h3>
            <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed font-medium">Save thousands of dollars monthly by automating community management and presale onboarding with precision AI.</p>
          </div>
          <div className="p-8 md:p-10 rounded-[32px] bg-white dark:bg-[#020617] glass-panel border border-gray-200 dark:border-white/5 shadow-sm hover:shadow-xl transition-all duration-300">
            <h3 className="font-display text-2xl font-bold text-gray-900 dark:text-white mb-4">High-Speed Deployment</h3>
            <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed font-medium">Custom RAG models trained on your specific ecosystem data and deployed live within 48 hours.</p>
          </div>
        </div>
      </section>

      {/* --- CTA Section --- */}
      <section className="container mx-auto px-6 relative z-10 pb-24">
        <div className="relative rounded-[32px] md:rounded-[48px] overflow-hidden p-10 md:p-32 text-center border border-white/10 group bg-slate-900 shadow-2xl shadow-purple-900/20">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-900/40 to-blue-900/40 opacity-100 group-hover:opacity-90 transition-opacity duration-500" />
          <div className="absolute inset-0 backdrop-blur-3xl" />
          <div className="absolute inset-0 bg-[url('/noise.svg')] opacity-20 mix-blend-overlay"></div>
          
          <div className="relative z-10">
            <h2 className="font-display text-4xl md:text-7xl font-bold text-white mb-8 md:mb-10 tracking-tight">
              The Grand Slam Guarantee
            </h2>
            <p className="text-slate-300 mb-12 md:mb-14 text-lg md:text-2xl font-medium max-w-2xl mx-auto leading-relaxed">
              Pay 50% upfront to start. Pay the final 50% <span className="text-cyan-400 font-bold">ONLY</span> when you see your custom AI Agent perfectly answering questions from your Whitepaper in a live test. Zero risk.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center">
                <Link 
                to="/contact" 
                className="inline-flex items-center justify-center px-10 py-5 md:px-12 md:py-6 bg-white text-slate-900 dark:text-slate-900 text-lg md:text-xl font-bold rounded-2xl hover:scale-105 active:scale-95 transition-all shadow-xl shadow-white/10"
                >
                Claim Your Custom AI Prototype
                </Link>
                <Link 
                to="/projects" 
                className="inline-flex items-center justify-center px-10 py-5 md:px-12 md:py-6 bg-white/10 border border-white/20 text-white text-lg md:text-xl font-bold rounded-2xl hover:bg-white/20 transition-all backdrop-blur-md"
                >
                View Infrastructure
                </Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;
