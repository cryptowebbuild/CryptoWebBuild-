import React from 'react';

interface ProTipProps {
  children: React.ReactNode;
}

const ProTip: React.FC<ProTipProps> = ({ children }) => {
  return (
    <div className="my-10 relative overflow-hidden rounded-2xl border border-cyan-500/30 bg-cyan-50/50 dark:bg-cyan-900/10">
      <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-cyan-400 to-blue-500" />
      <div className="p-6 md:p-8">
        <div className="flex items-center gap-3 mb-4">
          <span className="text-2xl">💡</span>
          <h4 className="font-display font-bold text-lg text-cyan-900 dark:text-cyan-100 uppercase tracking-wide m-0">
            Pro Tip
          </h4>
        </div>
        <div className="text-gray-700 dark:text-gray-200 italic leading-relaxed text-lg">
          {children}
        </div>
      </div>
    </div>
  );
};

export default ProTip;
