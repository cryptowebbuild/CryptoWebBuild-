import React from 'react';

interface SolNovaMockupProps {
  className?: string;
}

const SolNovaMockup: React.FC<SolNovaMockupProps> = ({ className = '' }) => {
  return (
    <div className={`bg-[#030014] relative overflow-hidden flex flex-col font-sans select-none ${className}`}>
      {/* Background Ambience */}
      <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] bg-purple-600/30 blur-[100px] rounded-full animate-pulse"></div>
      <div className="absolute bottom-[-20%] right-[-10%] w-[60%] h-[60%] bg-cyan-500/20 blur-[100px] rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>
      
      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-20" style={{ backgroundImage: `linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px)`, backgroundSize: '40px 40px' }}></div>

      {/* Navbar Mockup */}
      <div className="h-14 border-b border-white/10 flex items-center justify-between px-6 relative z-10 backdrop-blur-md bg-white/5">
        <div className="flex items-center gap-2">
           <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-500 to-cyan-500 flex items-center justify-center text-white font-bold text-sm shadow-lg shadow-purple-500/20">S</div>
           <span className="text-white font-bold tracking-tight text-lg">SolNova</span>
        </div>
        <div className="hidden md:flex gap-6 text-xs text-slate-300 font-medium tracking-wide">
            <span className="hover:text-cyan-400 cursor-pointer transition-colors">Trade</span>
            <span className="hover:text-cyan-400 cursor-pointer transition-colors">Staking</span>
            <span className="hover:text-cyan-400 cursor-pointer transition-colors">Launchpad</span>
        </div>
        <div className="px-4 py-1.5 rounded-full bg-gradient-to-r from-purple-600 to-cyan-600 text-white text-xs font-bold shadow-lg shadow-purple-500/30">
            Connect Wallet
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col md:flex-row items-center justify-center p-8 gap-12 relative z-10">
        
        {/* Left Text Area */}
        <div className="text-left max-w-xs hidden md:block">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-4">
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
                <span className="text-[10px] text-green-300 font-bold uppercase tracking-wider">Protocol V2 Live</span>
            </div>
            <h2 className="text-4xl font-bold text-white mb-4 leading-tight">
                Next Gen <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">Yield Aggregator</span>
            </h2>
            <div className="flex gap-4 mt-6">
                <div className="text-center">
                    <div className="text-2xl font-bold text-white">$45M+</div>
                    <div className="text-[10px] text-slate-400 uppercase tracking-widest">TVL Locked</div>
                </div>
                <div className="w-px h-10 bg-white/10"></div>
                <div className="text-center">
                    <div className="text-2xl font-bold text-white">120%</div>
                    <div className="text-[10px] text-slate-400 uppercase tracking-widest">APY</div>
                </div>
            </div>
        </div>

        {/* Swap Card UI */}
        <div className="w-full max-w-[340px] bg-[#0c0c14]/80 backdrop-blur-xl border border-white/10 rounded-3xl p-1 shadow-2xl relative overflow-hidden group">
             <div className="absolute -inset-1 bg-gradient-to-b from-purple-500/20 to-transparent opacity-50 blur-sm group-hover:opacity-75 transition-opacity duration-700"></div>
             
             <div className="bg-[#13131f] rounded-[20px] p-5 relative z-10">
                <div className="flex justify-between items-center mb-6">
                    <span className="text-white font-bold text-sm">Swap</span>
                    <div className="flex gap-2">
                        <div className="w-5 h-5 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center text-slate-400 cursor-pointer">⚙</div>
                    </div>
                </div>

                {/* Input Field */}
                <div className="bg-[#050508] rounded-2xl p-4 border border-white/5 mb-2 relative group-hover:border-purple-500/30 transition-colors">
                    <div className="flex justify-between mb-2">
                        <span className="text-xs text-slate-400">You pay</span>
                        <span className="text-xs text-slate-400">Balance: 12.45</span>
                    </div>
                    <div className="flex justify-between items-center">
                        <span className="text-2xl font-bold text-white">10.0</span>
                        <div className="flex items-center gap-2 bg-white/10 px-2 py-1 rounded-full border border-white/5 cursor-pointer hover:bg-white/20">
                            <div className="w-5 h-5 rounded-full bg-black flex items-center justify-center text-[10px]">◎</div>
                            <span className="text-sm font-bold text-white">SOL</span>
                            <span className="text-[10px] text-slate-400">▼</span>
                        </div>
                    </div>
                </div>

                {/* Swap Icon */}
                <div className="flex justify-center -my-3 relative z-20">
                    <div className="w-8 h-8 bg-[#1e1e2d] border-4 border-[#13131f] rounded-xl flex items-center justify-center text-purple-400 shadow-lg cursor-pointer hover:scale-110 transition-transform">
                        ↓
                    </div>
                </div>

                {/* Output Field */}
                <div className="bg-[#050508] rounded-2xl p-4 border border-white/5 mb-6">
                    <div className="flex justify-between mb-2">
                        <span className="text-xs text-slate-400">You receive</span>
                    </div>
                    <div className="flex justify-between items-center">
                        <span className="text-2xl font-bold text-white">450.22</span>
                        <div className="flex items-center gap-2 bg-white/10 px-2 py-1 rounded-full border border-white/5 cursor-pointer hover:bg-white/20">
                            <div className="w-5 h-5 rounded-full bg-gradient-to-br from-purple-500 to-cyan-500 flex items-center justify-center text-[10px] text-white">S</div>
                            <span className="text-sm font-bold text-white">SNOVA</span>
                            <span className="text-[10px] text-slate-400">▼</span>
                        </div>
                    </div>
                </div>

                {/* Main Action */}
                <div className="w-full py-3.5 bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl flex items-center justify-center text-white font-bold text-sm shadow-lg shadow-purple-900/40 hover:shadow-purple-900/60 hover:scale-[1.02] active:scale-95 transition-all cursor-pointer">
                    Connect Wallet
                </div>
             </div>
        </div>

      </div>
    </div>
  );
};

export default SolNovaMockup;