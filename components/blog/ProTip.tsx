import React from 'react';

interface ProTipProps {
  children: React.ReactNode;
}

const ProTip: React.FC<ProTipProps> = ({ children }) => {
  return (
    <div className="my-12 relative group">
      {/* --- Ambient Glow --- */}
      <div className="absolute -inset-0.5 bg-gradient-to-r from-amber-400 to-orange-500 rounded-[20px] blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
      
      {/* --- Main Container --- */}
      <div className="relative flex flex-col md:flex-row gap-6 bg-[#fffbf0] dark:bg-[#1c1917] p-6 md:p-8 rounded-[18px] border border-amber-200 dark:border-amber-900/50 shadow-xl overflow-hidden">
        
        {/* Background Texture */}
        <div className="absolute inset-0 opacity-[0.4] dark:opacity-[0.05] bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] pointer-events-none mix-blend-multiply dark:mix-blend-overlay"></div>

        {/* --- Icon Section --- */}
        <div className="shrink-0 flex items-start">
          <div className="flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br from-amber-300 to-orange-400 text-white shadow-lg shadow-orange-500/20 transform group-hover:rotate-12 transition-transform duration-500">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
            </svg>
          </div>
        </div>

        {/* --- Content Section --- */}
        <div className="relative z-10 flex-1">
          <h4 className="flex items-center gap-2 text-sm font-black text-amber-600 dark:text-amber-500 uppercase tracking-widest mb-3">
            <span>PRO TIP</span>
            <span className="h-px w-12 bg-amber-300 dark:bg-amber-800"></span>
          </h4>
          
          <div className="text-gray-800 dark:text-gray-200 font-medium text-lg leading-relaxed italic">
            {children}
          </div>
        </div>

      </div>
    </div>
  );
};

export default ProTip;