import React from 'react';
import { Link } from 'react-router-dom';

const AIPrototypeCTA: React.FC = () => {
  return (
    <div className="my-20 w-full max-w-full relative group">
      {/* --- Glow Effects Behind the Card (Cosmic Dark) --- */}
      <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-cyan-500 rounded-[40px] blur opacity-30 dark:opacity-50 group-hover:opacity-50 dark:group-hover:opacity-70 transition duration-1000 group-hover:duration-200"></div>

      {/* --- Main Container (Glassmorphism) --- */}
      <div className="relative p-8 md:p-14 rounded-[40px] bg-white/5 dark:bg-[#0f172a]/80 backdrop-blur-2xl border border-white/20 dark:border-white/10 shadow-2xl overflow-hidden isolate transition-colors duration-300">

        {/* Abstract Background Shapes */}
        <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/3 w-96 h-96 bg-purple-500/20 blur-[80px] rounded-full pointer-events-none" />
        <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/3 w-80 h-80 bg-cyan-500/20 blur-[80px] rounded-full pointer-events-none" />

        {/* Texture Overlay */}
        <div className="absolute inset-0 opacity-[0.1] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] pointer-events-none mix-blend-overlay"></div>

        <div className="relative z-10 text-center max-w-3xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 dark:bg-white/5 border border-white/20 dark:border-white/10 mb-8 backdrop-blur-md">
            <span className="flex h-2.5 w-2.5 rounded-full bg-cyan-400 animate-pulse shadow-[0_0_8px_rgba(34,211,238,0.8)]"></span>
            <span className="text-sm font-black text-slate-800 dark:text-cyan-300 uppercase tracking-[0.2em]">Grand Slam Offer</span>
          </div>

          {/* Headline */}
          <h3 className="font-display text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 dark:text-white mb-6 leading-[1.1] tracking-tight">
            Claim Your <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-400">48-Hour Custom AI Prototype</span>
          </h3>

          {/* Body Copy */}
          <p className="text-gray-700 dark:text-gray-300 text-lg md:text-xl mb-10 leading-relaxed font-medium max-w-2xl mx-auto">
            Stop guessing. See your autonomous agent in action before you fully commit. We build a functional prototype of your bespoke AI stack in just 48 hours.
          </p>

          {/* Risk Reversal Callout */}
          <div className="mb-10 inline-block p-4 rounded-2xl bg-purple-900/10 dark:bg-purple-900/20 border border-purple-500/20 backdrop-blur-sm text-left shadow-inner">
             <div className="flex items-start gap-3">
                <div className="shrink-0 mt-1">
                    <svg className="w-6 h-6 text-purple-600 dark:text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg>
                </div>
                <div>
                   <h4 className="font-bold text-gray-900 dark:text-white text-lg">50/50 Risk Reversal Guarantee</h4>
                   <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">Pay 50% upfront to start the build. Pay the final 50% <strong>ONLY</strong> after a successful live test of your prototype. Zero downside.</p>
                </div>
             </div>
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-5 justify-center items-center w-full">
            <Link
              to="/contact"
              className="w-full sm:w-auto px-8 py-4 bg-gray-900 dark:bg-white text-white dark:text-slate-900 font-black text-lg rounded-2xl hover:scale-105 transition-all shadow-[0_0_20px_rgba(168,85,247,0.4)] flex items-center justify-center gap-2"
            >
              <span>⚡</span> Secure Your Prototype
            </Link>
            <Link
              to="/services"
              className="w-full sm:w-auto px-8 py-4 bg-transparent border-2 border-gray-900/20 dark:border-white/20 text-gray-900 dark:text-white font-bold text-lg rounded-2xl hover:bg-gray-900/5 dark:hover:bg-white/10 transition-all flex items-center justify-center"
            >
              Explore Services
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIPrototypeCTA;
