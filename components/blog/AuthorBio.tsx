import React from 'react';

const AuthorBio: React.FC = () => {
  return (
    <div className="flex flex-col md:flex-row items-center gap-8 p-8 bg-white dark:bg-[#1e293b] rounded-[32px] border border-gray-200 dark:border-white/5 shadow-xl relative overflow-hidden transition-all hover:shadow-2xl hover:border-purple-500/20">

      {/* --- Background Decor --- */}
      <div className="absolute top-0 right-0 w-40 h-40 bg-purple-500/10 blur-[50px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-32 h-32 bg-blue-500/10 blur-[40px] rounded-full pointer-events-none" />

      {/* --- Avatar Section --- */}
      <div className="shrink-0 relative group">
        <div className="w-24 h-24 md:w-28 md:h-28 rounded-full overflow-hidden border-[4px] border-white dark:border-[#0f172a] shadow-lg ring-2 ring-purple-100 dark:ring-purple-900/30">
            {/* Note: Ensure hero-avatar.webp exists in your public folder */}
            <img 
              src="/hero-avatar.webp" 
              alt="Sagor Ahamed - Full Stack Developer" 
              className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110" 
              loading="lazy"
            />
        </div>
        
        {/* Status Indicator */}
        <div className="absolute bottom-1 right-1 flex h-6 w-6 items-center justify-center">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-4 w-4 bg-green-500 border-2 border-white dark:border-[#1e293b]" title="Available for new projects"></span>
        </div>
      </div>

      {/* --- Content Section --- */}
      <div className="text-center md:text-left flex-1 relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-3 mb-3">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white m-0 tracking-tight">
              Written by <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-500">Sagor Ahamed</span>
            </h3>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 text-[11px] font-black uppercase tracking-wider border border-blue-100 dark:border-blue-800">
                <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                Pro Developer
            </span>
        </div>

        <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed text-sm md:text-base font-medium">
            Senior Full-Stack Developer specializing in high-performance <strong>Web3 & E-commerce</strong> architectures. I help ambitious founders build "Anti-Fragile" websites that scale to millions of users without crashing.
        </p>

        {/* --- Social Links --- */}
        <div className="flex flex-wrap items-center justify-center md:justify-start gap-3">
            <a 
              href="https://github.com/cryptowebbuild" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="group flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gray-900 dark:bg-white text-white dark:text-gray-900 font-bold text-sm hover:-translate-y-0.5 transition-transform shadow-lg shadow-gray-900/20"
            >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg>
                <span>GitHub</span>
            </a>
            <a 
              href="https://x.com/CryptowebbuildX" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="group flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#1DA1F2] text-white font-bold text-sm hover:-translate-y-0.5 transition-transform shadow-lg shadow-blue-500/20"
            >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>
                <span>Follow</span>
            </a>
        </div>
      </div>
    </div>
  );
};

export default AuthorBio;