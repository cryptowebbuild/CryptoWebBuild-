import React from 'react';

const AuthorBio: React.FC = () => {
  return (
    <div className="flex flex-col md:flex-row items-center gap-8 p-8 bg-white dark:bg-[#1e293b] rounded-[32px] border border-gray-200 dark:border-white/5 shadow-xl">
      <div className="shrink-0 relative">
        <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-purple-100 dark:border-purple-900/30">
            <img src="/hero-avatar.webp" alt="Sagor Ahamed" className="w-full h-full object-cover" />
        </div>
        <div className="absolute bottom-0 right-0 w-6 h-6 bg-green-500 rounded-full border-4 border-white dark:border-[#1e293b]" title="Available for work"></div>
      </div>

      <div className="text-center md:text-left">
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Written by Sagor Ahamed</h3>
        <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed max-w-xl">
            Senior Full-Stack Developer specializing in high-performance Web3 & E-commerce architectures. I help founders build "Anti-Fragile" websites that scale to millions of users.
        </p>
        <div className="flex items-center justify-center md:justify-start gap-4">
            <a href="https://twitter.com/WebBuildDev" target="_blank" rel="noopener noreferrer" className="px-5 py-2 rounded-xl bg-gray-100 dark:bg-white/5 text-gray-900 dark:text-white font-bold text-sm hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all">
                Follow on X
            </a>
            <a href="https://linkedin.com/in/sagor-ahamed" target="_blank" rel="noopener noreferrer" className="px-5 py-2 rounded-xl bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 font-bold text-sm hover:bg-blue-600 hover:text-white transition-all">
                Connect on LinkedIn
            </a>
        </div>
      </div>
    </div>
  );
};

export default AuthorBio;
