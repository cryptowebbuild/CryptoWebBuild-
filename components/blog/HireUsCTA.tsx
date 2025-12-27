import React from 'react';
import { Link } from 'react-router-dom';

const HireUsCTA: React.FC = () => {
  return (
    <div className="my-20 relative group">
      {/* --- Glow Effects Behind the Card --- */}
      <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-blue-600 rounded-[40px] blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
      
      {/* --- Main Container --- */}
      <div className="relative p-8 md:p-14 rounded-[40px] bg-[#0f172a] border border-white/10 shadow-2xl overflow-hidden isolate">
        
        {/* Abstract Background Shapes */}
        <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/3 w-96 h-96 bg-purple-500/20 blur-[100px] rounded-full pointer-events-none" />
        <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/3 w-80 h-80 bg-blue-500/20 blur-[80px] rounded-full pointer-events-none" />
        
        {/* Texture Overlay */}
        <div className="absolute inset-0 opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] pointer-events-none"></div>

        <div className="relative z-10 text-center max-w-3xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-6">
            <span className="flex h-2 w-2 rounded-full bg-green-500 animate-pulse"></span>
            <span className="text-xs font-bold text-gray-300 uppercase tracking-widest">Accepting New Projects</span>
          </div>

          {/* Headline */}
          <h3 className="font-display text-3xl md:text-5xl font-black text-white mb-6 leading-tight tracking-tight">
            Stop Losing Investors to <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">Slow, Ugly Websites.</span>
          </h3>

          {/* Body Copy */}
          <p className="text-gray-400 text-lg md:text-xl mb-10 leading-relaxed font-medium">
            We don't use templates. We engineer high-performance <strong>Web3 Launchpads, DEXs, and Marketing Sites</strong> that load in 0.5s and convert traffic into diamond-handed holders.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-5 justify-center items-center w-full">
            <Link
              to="/contact"
              className="w-full sm:w-auto px-8 py-4 bg-white text-slate-900 font-black text-lg rounded-2xl hover:bg-gray-100 hover:scale-105 transition-all shadow-[0_0_20px_rgba(255,255,255,0.3)] flex items-center justify-center gap-2"
            >
              <span>🚀</span> Book a Strategy Call
            </Link>
            <Link
              to="/projects"
              className="w-full sm:w-auto px-8 py-4 bg-white/5 border border-white/10 text-white font-bold text-lg rounded-2xl hover:bg-white/10 hover:border-white/20 transition-all flex items-center justify-center backdrop-blur-sm"
            >
              View Portfolio
            </Link>
          </div>

          {/* Footer Text */}
          <p className="mt-8 text-sm text-gray-500 font-bold uppercase tracking-widest opacity-70">
            Limited Availability for {new Date().toLocaleString('default', { month: 'long', year: 'numeric' })}
          </p>
        </div>
      </div>
    </div>
  );
};

export default HireUsCTA;