import React from 'react';

interface KeyTakeawaysProps {
  points: string[];
}

const KeyTakeaways: React.FC<KeyTakeawaysProps> = ({ points }) => {
  return (
    <div className="my-12 p-6 md:p-8 rounded-[32px] bg-gradient-to-br from-purple-50/50 via-white to-purple-50/50 dark:from-[#1e293b] dark:via-[#0f172a] dark:to-[#1e293b] border border-purple-100 dark:border-purple-900/30 shadow-xl shadow-purple-900/5 relative overflow-hidden group">

      {/* --- Background Glow --- */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-purple-500/10 blur-[80px] rounded-full pointer-events-none group-hover:bg-purple-500/20 transition-colors duration-700" />

      {/* --- Header --- */}
      <div className="flex items-center gap-4 mb-8 relative z-10">
        <div className="flex items-center justify-center w-12 h-12 rounded-2xl bg-purple-600 text-white shadow-lg shadow-purple-600/30 transform -rotate-3 group-hover:rotate-0 transition-transform duration-300">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
        </div>
        <h3 className="font-display font-black text-2xl md:text-3xl text-gray-900 dark:text-white tracking-tight">
          Key Takeaways
        </h3>
      </div>

      {/* --- List Points --- */}
      <ul className="space-y-4 relative z-10">
        {points.map((point, index) => (
          <li 
            key={index} 
            className="flex items-start gap-4 p-4 rounded-2xl bg-white/60 dark:bg-white/5 border border-transparent hover:border-purple-200 dark:hover:border-purple-800 transition-all duration-300 hover:shadow-sm"
          >
            <div className="shrink-0 mt-1">
              <div className="w-6 h-6 rounded-full bg-green-500/10 dark:bg-green-500/20 flex items-center justify-center">
                <svg className="w-3.5 h-3.5 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
                </svg>
              </div>
            </div>
            <span className="text-gray-700 dark:text-gray-200 font-medium text-lg leading-relaxed">
              {point}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default KeyTakeaways;