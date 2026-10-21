import React from 'react';
import { Link } from 'react-router-dom';

const AIPrototypeCTA: React.FC = () => {
  return (
    <div className="my-14 relative rounded-[32px] overflow-hidden p-8 md:p-12 text-center glass-panel border border-purple-200 dark:border-purple-500/30 bg-gradient-to-br from-purple-50 via-white to-cyan-50 dark:from-[#0B1120] dark:via-[#020617] dark:to-[#0F172A] shadow-xl">
      <div className="relative z-10 max-w-2xl mx-auto">
        <div className="inline-block px-4 py-1.5 mb-5 rounded-full bg-purple-100 dark:bg-purple-500/15 border border-purple-300 dark:border-purple-400/30 text-purple-700 dark:text-cyan-300 text-xs font-bold tracking-wider uppercase">
          The Grand Slam Guarantee
        </div>
        <h3 className="font-display text-3xl md:text-4xl font-black text-gray-900 dark:text-white mb-4 tracking-tight">
          Claim Your 48-Hour Live Prototype
        </h3>
        <p className="text-gray-600 dark:text-slate-300 mb-8 text-base md:text-lg leading-relaxed font-medium">
          Pay 50% upfront to start. Pay the final 50% <span className="text-purple-600 dark:text-cyan-400 font-bold">ONLY</span> when you see your custom Website, E-Commerce Engine, or RAG AI Agent performing live in a real test.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/contact"
            className="inline-flex items-center justify-center px-8 py-4 neon-button text-white font-bold rounded-xl shadow-lg"
          >
            Claim 48-Hour Prototype
          </Link>
          <a
            href="https://wa.me/8801618138820?text=Hi%20Sagor%2C%20I%27d%20like%20to%20claim%20a%2048-Hour%20Prototype%20with%20CryptoWebBuild."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-8 py-4 bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold rounded-xl transition-colors shadow-md"
          >
            WhatsApp (01618-138820)
          </a>
        </div>
      </div>
    </div>
  );
};

export default AIPrototypeCTA;
