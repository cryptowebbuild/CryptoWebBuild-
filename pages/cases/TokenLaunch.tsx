import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../../components/SEO';
import SolNovaMockup from '../../components/SolNovaMockup';

const TokenLaunch: React.FC = () => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Case Study: SolNova Protocol - Solana Presale",
    "image": "https://cryptowebbuild.com/project-solana.jpg",
    "author": {
      "@type": "Organization",
      "name": "CryptoWebBuild"
    },
    "description": "How we built SolNova: a high-yield aggregator on Solana with a custom React presale dashboard, wallet integration, and 0.8s load times."
  };

  return (
    <div className="container mx-auto px-6 pt-32 pb-20">
      <SEO 
        title="Case Study: SolNova - Solana Yield Protocol & Presale"
        description="How we built SolNova: a high-yield aggregator on Solana with a custom React presale dashboard, wallet integration, and 0.8s load times."
      />
      <script type="application/ld+json">
        {JSON.stringify(jsonLd)}
      </script>
      <div className="max-w-4xl mx-auto animate-slide-up">
        <div className="inline-block px-3 py-1 mb-6 rounded-full bg-purple-100 dark:bg-purple-900/30 border border-purple-200 dark:border-purple-800 text-purple-600 dark:text-purple-300 text-xs font-bold uppercase tracking-wider shadow-sm">
          Case Study
        </div>
        <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-text-main mb-8 leading-tight">
          SolNova — <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">Yield Protocol</span>
        </h1>
        
        <div className="rounded-3xl overflow-hidden shadow-2xl border border-slate-200 dark:border-slate-800 mb-12 h-[400px] md:h-[500px]">
            <SolNovaMockup className="w-full h-full" />
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-16">
          <div className="glass-panel p-6 rounded-2xl bg-surface border-t border-purple-500/20">
            <h3 className="text-text-muted text-xs font-bold uppercase tracking-widest mb-2">Stack</h3>
            <p className="text-text-main font-bold text-lg">React, Solana Web3</p>
          </div>
          <div className="glass-panel p-6 rounded-2xl bg-surface border-t border-purple-500/20">
            <h3 className="text-text-muted text-xs font-bold uppercase tracking-widest mb-2">Focus</h3>
            <p className="text-text-main font-bold text-lg">Yield Aggregation</p>
          </div>
          <div className="glass-panel p-6 rounded-2xl bg-surface border-t border-purple-500/20">
            <h3 className="text-text-muted text-xs font-bold uppercase tracking-widest mb-2">Result</h3>
            <p className="text-green-500 font-bold text-lg">$1.2M Raised</p>
          </div>
        </div>

        <div className="prose prose-lg prose-slate dark:prose-invert max-w-none">
          <h2>The Challenge</h2>
          <p>The SolNova team needed a high-performance landing page to launch their Yield Aggregator protocol. The market for Solana presales is incredibly competitive; investors demand instant load times, clear tokenomics, and a seamless "connect-to-buy" experience.</p>
          <p>Key requirements included a real-time fundraising progress bar, integration with Solana wallets (Phantom/Solflare), and a design that communicated "institutional DeFi" rather than just another meme coin.</p>

          <h2>The Solution</h2>
          <p>We engineered a static-first application using React and Cloudflare Pages to ensure 100% uptime during the traffic spike of the launch.</p>
          <ul>
            <li><strong>Custom Presale Dashboard:</strong> A React component that fetches on-chain data to display the "Raised Amount" and countdown timer in real-time.</li>
            <li><strong>Solana Wallet Adapter:</strong> Full integration with the `@solana/wallet-adapter-react` library for secure, one-click wallet connection.</li>
            <li><strong>Neon-Dark UI:</strong> A bespoke Tailwind CSS design system featuring "glassmorphism" cards and animated gradients to match the futuristic brand identity.</li>
          </ul>

          <h2>The Outcome</h2>
          <p>The site achieved a perfect 100 Performance score on Google PageSpeed Insights. The friction-free buying process contributed to raising over <strong>$1.2M in the first phase</strong> of the presale.</p>
        </div>

        <div className="mt-16 flex flex-col sm:flex-row gap-4 justify-center pt-10 border-t border-white/10">
          <a href="https://solnova.pages.dev" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center px-8 py-3 bg-gradient-to-r from-purple-600 to-cyan-600 text-white font-bold rounded-xl transition-transform hover:scale-105 shadow-lg shadow-purple-500/20">
            Visit Live Site
            <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
          </a>
          <Link to="/projects" className="inline-flex items-center justify-center px-8 py-3 bg-surface border border-slate-200 dark:border-slate-700 text-text-main font-bold rounded-xl hover:bg-surface-highlight transition-colors">
            Back to Projects
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TokenLaunch;