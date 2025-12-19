import React from 'react';

interface GigaChadMockupProps {
  className?: string;
}

const GigaChadMockup: React.FC<GigaChadMockupProps> = ({ className = '' }) => {
  return (
    <div className={`bg-[#05010d] relative overflow-hidden flex flex-col font-sans select-none ${className}`}>
      {/* Cosmic Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-purple-900/20 via-[#05010d] to-[#05010d]"></div>
      
      {/* Stars */}
      <div className="absolute top-10 left-10 w-1 h-1 bg-white rounded-full opacity-70 animate-pulse"></div>
      <div className="absolute top-40 right-20 w-1.5 h-1.5 bg-green-400 rounded-full opacity-50 blur-[1px]"></div>
      <div className="absolute bottom-32 left-1/4 w-1 h-1 bg-pink-500 rounded-full opacity-60"></div>
      <div className="absolute top-1/3 right-1/3 w-0.5 h-0.5 bg-cyan-400 rounded-full opacity-80"></div>

      {/* Marquee Strip */}
      <div className="h-8 bg-[#22c55e] flex items-center overflow-hidden relative z-10 shrink-0 transform -skew-y-2 mt-6 border-y-2 border-black shadow-[0_0_20px_rgba(34,197,94,0.3)]">
        <div className="flex gap-6 text-xs font-black uppercase text-black italic tracking-tighter whitespace-nowrap px-4 animate-marquee">
           <span>$GIGA TO THE MOON</span> 🔥 <span>NO JEETS</span> 🔥 <span>$GIGA TO THE MOON</span> 🔥 <span>NO JEETS</span>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col items-center justify-center p-6 relative z-10">
        
        {/* Hero Section with Moai */}
        <div className="text-center mb-6 relative">
            {/* Floating Moai */}
            <div className="text-6xl md:text-7xl mb-2 animate-float filter drop-shadow-[0_0_15px_rgba(34,197,94,0.3)]">
                🗿
            </div>
            <div className="inline-block px-2 py-0.5 border border-[#22c55e]/30 bg-[#22c55e]/10 rounded mb-2">
                <span className="text-[8px] md:text-[10px] text-[#22c55e] font-bold uppercase tracking-widest">The King of Solana</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-white italic tracking-tighter leading-[0.9]">
                BECOME <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#22c55e] to-cyan-400">$GIGA</span>
            </h2>
        </div>

        {/* Moon Math Card */}
        <div className="w-full max-w-[320px] bg-[#0a0a0a] border border-white/10 rounded-xl overflow-hidden shadow-2xl relative group">
             {/* Top Gradient Line */}
             <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500"></div>
             
             <div className="p-5">
                <div className="flex items-center justify-between mb-4">
                    <h3 className="text-white font-bold uppercase tracking-wider text-sm flex items-center gap-2">
                        MOON MATH 🧮
                    </h3>
                </div>

                {/* Input Simulation */}
                <div className="space-y-4 mb-5">
                    <div>
                        <label className="text-[10px] text-[#22c55e] font-bold uppercase mb-1 block">I Hold (SOL)</label>
                        <div className="bg-[#111] border border-white/10 rounded-lg p-2.5 flex items-center justify-between shadow-inner">
                            <span className="text-white font-mono text-lg">1</span>
                            <span className="text-[10px] text-slate-500 font-bold">SOL</span>
                        </div>
                    </div>
                    
                    <div>
                        <div className="flex justify-between mb-2">
                            <label className="text-[10px] text-pink-500 font-bold uppercase">Target MCAP</label>
                            <span className="text-[10px] text-white font-mono">$144M</span>
                        </div>
                        {/* Slider UI */}
                        <div className="h-4 relative flex items-center">
                            <div className="w-full h-1.5 bg-[#222] rounded-full overflow-hidden">
                                <div className="h-full w-[40%] bg-gradient-to-r from-pink-600 to-purple-600"></div>
                            </div>
                            <div className="absolute left-[40%] w-4 h-4 bg-purple-500 rounded-full border-2 border-white shadow-lg transform -translate-x-1/2 hover:scale-110 transition-transform"></div>
                        </div>
                        <div className="flex justify-between text-[8px] text-slate-600 mt-1 uppercase font-bold">
                            <span>$1M (Weak)</span>
                            <span>$1B (Giga)</span>
                        </div>
                    </div>
                </div>

                {/* Result Box */}
                <div className="bg-[#050505] rounded-lg p-3 text-center border border-white/5 relative overflow-hidden">
                    <p className="text-[8px] text-slate-400 uppercase tracking-widest mb-1">Potential Value</p>
                    <div className="text-2xl font-black text-pink-500 relative z-10 drop-shadow-sm">
                        $208,800
                    </div>
                    <div className="text-[10px] text-yellow-400 font-bold mt-1 flex items-center justify-center gap-1 relative z-10">
                        <span>🚕 1 LAMBO</span>
                    </div>
                </div>
             </div>
        </div>

        {/* Buttons */}
        <div className="flex gap-3 mt-6 w-full max-w-[320px]">
            <div className="flex-1 py-2.5 bg-gradient-to-r from-[#22c55e] to-green-600 hover:to-green-500 text-black font-black text-xs uppercase tracking-wide rounded-lg transition-all transform hover:scale-105 shadow-[0_0_15px_rgba(34,197,94,0.3)] flex items-center justify-center gap-1">
                Buy on Raydium <span className="text-xs">💊</span>
            </div>
            <div className="flex-1 py-2.5 bg-[#1a1a1a] border border-white/10 hover:border-white/30 text-white font-bold text-xs uppercase tracking-wide rounded-lg transition-colors flex items-center justify-center gap-1">
                Telegram ✈️
            </div>
        </div>

      </div>
    </div>
  );
};

export default GigaChadMockup;