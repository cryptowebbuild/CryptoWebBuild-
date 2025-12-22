import React from 'react';

interface QuackInuMockupProps {
  className?: string;
}

const QuackInuMockup: React.FC<QuackInuMockupProps> = ({ className = '' }) => {
  return (
    <div className={`bg-[#2E8B57] relative overflow-hidden flex flex-col font-sans select-none ${className}`}>
      {/* Pattern Background */}
      <div className="absolute inset-0 opacity-20" style={{ 
          backgroundImage: 'radial-gradient(#a3f7a3 3px, transparent 3px)', 
          backgroundSize: '30px 30px' 
      }}></div>
      
      {/* Decorative Leaves (CSS shapes) */}
      <div className="absolute top-[-50px] right-[-50px] w-40 h-40 bg-[#226e42] rounded-full opacity-50"></div>
      <div className="absolute bottom-[-20px] left-[-20px] w-32 h-32 bg-[#226e42] rounded-full opacity-50"></div>

      {/* Navbar Mockup */}
      <div className="h-14 flex items-center justify-between px-6 relative z-10">
        <div className="flex items-center gap-2 bg-[#1a5c38] px-3 py-1.5 rounded-xl border-2 border-[#14452a] shadow-sm transform -rotate-2">
           <div className="text-lg">🦆</div>
           <span className="text-white font-black uppercase tracking-wider text-xs">Quack Inu</span>
        </div>
        <div className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white border border-white/20">
            ☰
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col items-center justify-center p-6 relative z-10">
        
        {/* Title Stack */}
        <div className="text-center mb-8 relative">
            <h2 className="text-5xl font-black text-white drop-shadow-[0_4px_0_rgba(20,69,42,1)] tracking-tighter transform -rotate-2">
                BNB <span className="text-[#FFD700]">QUACK</span>
            </h2>
            <div className="absolute -top-6 -right-8 animate-bounce delay-700">
                <span className="bg-red-500 text-white text-[10px] font-bold px-2 py-1 rounded-lg border-2 border-white transform rotate-12 shadow-md">
                    No Taxes!
                </span>
            </div>
        </div>

        {/* Duck Mascot Card */}
        <div className="relative group cursor-pointer">
             
             {/* The Duck Face */}
             <div className="w-36 h-36 bg-gradient-to-b from-yellow-300 to-yellow-400 rounded-[2rem] border-4 border-white shadow-[0_10px_20px_rgba(0,0,0,0.2)] relative flex flex-col items-center justify-center overflow-hidden transition-transform group-hover:scale-105 group-hover:-rotate-3 z-10">
                {/* Eyes */}
                <div className="flex gap-5 mb-3 z-10">
                    <div className="w-5 h-5 bg-black rounded-full relative">
                        <div className="absolute top-1 right-1 w-2 h-2 bg-white rounded-full"></div>
                    </div>
                    <div className="w-5 h-5 bg-black rounded-full relative">
                        <div className="absolute top-1 right-1 w-2 h-2 bg-white rounded-full"></div>
                    </div>
                </div>
                {/* Beak */}
                <div className="w-14 h-9 bg-orange-500 rounded-full border-2 border-orange-600 z-10 shadow-sm"></div>
                {/* Shirt */}
                <div className="absolute bottom-0 w-full h-12 bg-[#226e42] rounded-t-[50%]"></div>
             </div>

             {/* Background glow behind duck */}
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-yellow-400/30 rounded-full blur-xl -z-0 group-hover:bg-yellow-400/50 transition-colors"></div>
        </div>

        {/* Interactive Buttons (Wood Texture) */}
        <div className="flex flex-col gap-3 w-full max-w-xs mt-10">
            <div className="w-full py-3 bg-[#8B4513] rounded-xl border-b-[6px] border-[#5c2e0c] flex items-center justify-center text-white font-black text-sm shadow-xl relative overflow-hidden group active:border-b-2 active:translate-y-[4px] transition-all">
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
                <span className="relative z-10 flex items-center gap-2">
                    🥞 Buy on PancakeSwap
                </span>
            </div>
            
            <div className="flex gap-3">
                 <div className="flex-1 py-2 bg-[#1E90FF] border-b-4 border-[#104E8B] rounded-xl flex items-center justify-center text-white font-bold text-xs shadow-lg active:border-b-0 active:translate-y-[4px] transition-all">
                    Telegram
                 </div>
                 <div className="flex-1 py-2 bg-[#FF4500] border-b-4 border-[#8B2500] rounded-xl flex items-center justify-center text-white font-bold text-xs shadow-lg active:border-b-0 active:translate-y-[4px] transition-all">
                    Chart
                 </div>
            </div>
        </div>

      </div>
    </div>
  );
};

export default QuackInuMockup;