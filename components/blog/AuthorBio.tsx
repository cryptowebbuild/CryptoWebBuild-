import React from 'react';

const AuthorBio: React.FC = () => {
  return (
    <div className="flex flex-col md:flex-row items-center gap-8 p-8 bg-white dark:bg-[#1e293b] rounded-[32px] border border-gray-200 dark:border-white/5 shadow-xl relative overflow-hidden">

      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/10 blur-[40px] rounded-full pointer-events-none" />

      <div className="shrink-0 relative group">
        <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-purple-100 dark:border-purple-900/30 shadow-inner">
            <img src="/hero-avatar.webp" alt="Sagor Ahamed" className="w-full h-full object-cover" />
        </div>
        <div className="absolute bottom-0 right-0 w-6 h-6 bg-green-500 rounded-full border-4 border-white dark:border-[#1e293b]" title="Available for work"></div>
      </div>

      <div className="text-center md:text-left flex-1">
        <div className="flex flex-col md:flex-row items-center gap-3 mb-2">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white m-0">Written by Sagor Ahamed</h3>
            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 text-xs font-bold border border-green-200 dark:border-green-800">
                <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                Verified by GitHub
            </span>
        </div>

        <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed max-w-xl text-sm md:text-base">
            Senior Full-Stack Developer specializing in high-performance Web3 & E-commerce architectures. I help founders build "Anti-Fragile" websites that scale to millions of users.
        </p>

        <div className="flex flex-wrap items-center justify-center md:justify-start gap-4">
            <a href="https://github.com/cryptowebbuild" target="_blank" rel="noopener noreferrer" className="px-5 py-2 rounded-xl bg-gray-900 text-white font-bold text-sm hover:bg-gray-800 transition-all flex items-center gap-2">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg>
                GitHub
            </a>
            <a href="https://x.com/CryptowebbuildX" target="_blank" rel="noopener noreferrer" className="px-5 py-2 rounded-xl bg-blue-500 text-white font-bold text-sm hover:bg-blue-600 transition-all flex items-center gap-2">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>
                Follow
            </a>
            <div className="text-xs text-gray-500 font-medium ml-auto mt-2 md:mt-0">
                Updated: {new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
            </div>
        </div>
      </div>
    </div>
  );
};

export default AuthorBio;
