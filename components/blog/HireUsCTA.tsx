import React from 'react';
import { Link } from 'react-router-dom';

const HireUsCTA: React.FC = () => {
  return (
    <div className="my-12 p-8 md:p-10 rounded-3xl bg-gradient-to-br from-[#0f172a] to-[#1e293b] border border-white/10 shadow-2xl relative overflow-hidden group">

      {/* Background Effects */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-purple-500/20 blur-[80px] rounded-full group-hover:bg-purple-500/30 transition-all duration-700" />
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-cyan-500/10 blur-[60px] rounded-full group-hover:bg-cyan-500/20 transition-all duration-700" />

      <div className="relative z-10 text-center">
        <h3 className="font-display font-bold text-3xl md:text-4xl text-white mb-4">
          Need a High-Performance Web3 Site?
        </h3>
        <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto leading-relaxed">
          Don't settle for templates. We build custom, SEO-dominated platforms that convert visitors into holders.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link
            to="/contact"
            className="px-8 py-4 bg-white text-gray-900 font-bold rounded-xl hover:scale-105 transition-transform shadow-lg shadow-white/10 flex items-center gap-2"
          >
            <span>🚀</span> Start Your Project
          </Link>
          <Link
            to="/projects"
            className="px-8 py-4 bg-white/5 border border-white/10 text-white font-semibold rounded-xl hover:bg-white/10 transition-colors backdrop-blur-md"
          >
            View Our Work
          </Link>
        </div>

        <p className="mt-6 text-sm text-gray-500 font-medium uppercase tracking-widest">
          Limited Spots Available for {new Date().getFullYear()}
        </p>
      </div>
    </div>
  );
};

export default HireUsCTA;
