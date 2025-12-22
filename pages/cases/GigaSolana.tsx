import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../../components/SEO';
import GigaChadMockup from '../../components/GigaChadMockup';

const GigaSolana: React.FC = () => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Case Study: $GIGA Solana - Cult Brand & Utility",
    "image": "https://cryptowebbuild.com/giga-preview.jpg",
    "author": {
      "@type": "Organization",
      "name": "CryptoWebBuild"
    },
    "description": "How we built a high-energy meme coin site with a custom 'Moon Math' calculator to drive community engagement on Solana."
  };

  return (
    <div className="container mx-auto px-6 pt-32 pb-20">
      <SEO 
        title="Viral Meme Coin Design | $GIGA Solana Case Study"
        description="Learn how we built a cult-following meme coin site on Solana. Featuring 'Moon Math' calculators, neon aesthetics, and aggressive branding."
        keywords={['Viral Meme Coin Design', 'Solana Meme Coin Branding', 'Moon Math Calculator Code', 'Crypto Community Website']}
      />
      <script type="application/ld+json">
        {JSON.stringify(jsonLd)}
      </script>
      <div className="max-w-4xl mx-auto animate-slide-up">
        <div className="inline-block px-3 py-1 mb-6 rounded-full bg-green-100 dark:bg-green-900/30 border border-green-200 dark:border-green-800 text-green-600 dark:text-green-300 text-xs font-bold uppercase tracking-wider shadow-sm">
          Case Study
        </div>
        <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-text-main mb-8 leading-tight">
          $GIGA Solana — <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-pink-500">Cult & Utility</span>
        </h1>
        
        <div className="rounded-3xl overflow-hidden shadow-2xl border border-slate-200 dark:border-slate-800 mb-12 h-[400px] md:h-[500px]">
            <GigaChadMockup className="w-full h-full" />
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-16">
          <div className="glass-panel p-6 rounded-2xl bg-surface border-t border-green-500/20">
            <h3 className="text-text-muted text-xs font-bold uppercase tracking-widest mb-2">Vibe</h3>
            <p className="text-text-main font-bold text-lg">Hyper-Aggressive</p>
          </div>
          <div className="glass-panel p-6 rounded-2xl bg-surface border-t border-green-500/20">
            <h3 className="text-text-muted text-xs font-bold uppercase tracking-widest mb-2">Feature</h3>
            <p className="text-text-main font-bold text-lg">Moon Math Calc</p>
          </div>
          <div className="glass-panel p-6 rounded-2xl bg-surface border-t border-green-500/20">
            <h3 className="text-text-muted text-xs font-bold uppercase tracking-widest mb-2">Platform</h3>
            <p className="text-green-500 font-bold text-lg">Solana</p>
          </div>
        </div>

        <div className="prose prose-lg prose-slate dark:prose-invert max-w-none">
          <h2>The Goal</h2>
          <p>Meme coins live and die by attention. The $GIGA team wanted to move beyond the typical "cute dog" aesthetic and embrace the "Chad" meme culture—aggressive, confident, and fitness-focused. They needed a website that felt like a high-energy pre-workout drink.</p>

          <h2>The "Moon Math" Hook</h2>
          <p>We built a custom interactive feature called the <strong>Moon Math Calculator</strong>. Instead of just reading text, users can input their current SOL holdings and slide a bar to see "What if $GIGA hits $1B Market Cap?".</p>
          <ul>
            <li><strong>Psychological Hook:</strong> It lets users visualize their potential gains (e.g. "1 Lambo", "Generational Wealth").</li>
            <li><strong>Viral Shareability:</strong> Users screenshot their "Moon Math" results and share them on Twitter/X, creating organic marketing.</li>
            <li><strong>Interactive React Component:</strong> Built with minimal state management to ensure it feels instant and responsive on mobile.</li>
          </ul>

          <h2>Design Language</h2>
          <p>We ditched the standard "corporate crypto" blues for a <strong>Neon Green & Hot Pink</strong> palette against a deep void background. The prominent use of the Moai statue (🗿) anchors the "Chad" branding.</p>
          <p>The typography is massive, italicized, and uppercase to scream confidence. The result is a site that is impossible to ignore.</p>

          <div className="my-10 p-8 bg-surface-highlight border border-white/10 rounded-2xl">
             <h3 className="text-xl font-bold text-text-main mb-4">Technical Strategy</h3>
             <p>Speed was non-negotiable. We used a static-first approach with optimized assets (WebP) to ensure the site loads instantly even on poor mobile connections, which is where 85% of meme coin traffic originates.</p>
             <p>Interested in launching a similar viral site? Check out our <Link to="/crypto-website-cost" className="text-green-500 font-bold hover:underline">Meme Coin Pricing Guide</Link>.</p>
          </div>
        </div>

        <div className="mt-16 flex flex-col sm:flex-row gap-4 justify-center pt-10 border-t border-white/10">
          <a href="https://giga-solana.pages.dev" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center px-8 py-3 bg-gradient-to-r from-green-500 to-green-600 text-black font-black uppercase tracking-wide rounded-xl transition-transform hover:scale-105 shadow-lg shadow-green-500/20">
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

export default GigaSolana;