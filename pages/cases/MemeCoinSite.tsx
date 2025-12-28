import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../../components/SEO';
import QuackInuMockup from '../../components/QuackInuMockup';

const MemeCoinSite: React.FC = () => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Case Study: BNB Quack Inu - Viral Meme Coin Launch",
    "image": "https://cryptowebbuild.com/project-memecoin.jpg",
    "author": {
      "@type": "Organization",
      "name": "CryptoWebBuild"
    },
    "description": "Analyzing the BNB Quack Inu launch: A gamified jungle-themed meme coin site featuring spin-to-win mechanics and custom wood-textured UI."
  };

  return (
    <div className="container mx-auto px-6 pt-32 pb-20">
      <SEO 
        title="Meme Coin Website Design | Viral Crypto Landing Page Case Study"
        description="Case study: How we designed a viral, gamified meme coin website on BNB Chain. Custom animations, spin-to-win features, and mobile-first design."
        keywords={['Meme Coin Website Design', 'Viral Crypto Landing Page', 'BNB Chain Developer', 'Gamified Crypto Site', 'Crypto Web Design']}
        type="article"
        schema={jsonLd}
      />

      <div className="max-w-4xl mx-auto animate-slide-up">
        <nav className="flex items-center gap-2 text-sm text-gray-500 mb-8">
            <Link to="/" className="hover:text-purple-600 transition-colors">Home</Link>
            <span>/</span>
            <Link to="/projects" className="hover:text-purple-600 transition-colors">Projects</Link>
            <span>/</span>
            <span className="text-gray-900 dark:text-gray-300 font-medium">BNB Quack Inu</span>
        </nav>

        <div className="inline-block px-3 py-1 mb-6 rounded-full bg-green-100 dark:bg-green-900/30 border border-green-200 dark:border-green-800 text-green-600 dark:text-green-300 text-xs font-bold uppercase tracking-wider shadow-sm">
          Case Study
        </div>
        <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-text-main mb-8 leading-tight">
          BNB Quack Inu — <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-yellow-500">Gamified Viral Launch</span>
        </h1>
        
        <div className="rounded-3xl overflow-hidden shadow-2xl border border-slate-200 dark:border-slate-800 mb-12 h-[400px] md:h-[500px]">
             <QuackInuMockup className="w-full h-full" />
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-16">
          <div className="glass-panel p-6 rounded-2xl bg-surface border-t border-green-500/20">
            <h3 className="text-text-muted text-xs font-bold uppercase tracking-widest mb-2">Theme</h3>
            <p className="text-text-main font-bold text-lg">Jungle Adventure</p>
          </div>
          <div className="glass-panel p-6 rounded-2xl bg-surface border-t border-green-500/20">
            <h3 className="text-text-muted text-xs font-bold uppercase tracking-widest mb-2">Feature</h3>
            <p className="text-text-main font-bold text-lg">Spin-to-Win</p>
          </div>
          <div className="glass-panel p-6 rounded-2xl bg-surface border-t border-green-500/20">
            <h3 className="text-text-muted text-xs font-bold uppercase tracking-widest mb-2">Result</h3>
            <p className="text-green-500 font-bold text-lg">High Engagement</p>
          </div>
        </div>

        <div className="prose prose-lg prose-slate dark:prose-invert max-w-none prose-headings:font-display prose-headings:font-bold">
          <h2>The Goal: Stand Out or Die</h2>
          <p>
            The meme coin market on BNB Chain is saturated with thousands of low-effort clones. To stand out, "Quack Inu" needed more than just a landing page—it needed a <strong>brand experience</strong> that people would talk about.
          </p>
          <p>
            The client wanted a fun, "Jungle" theme that felt like a mobile game rather than a financial website. The goal was to increase the "Time on Site" metric, which correlates with higher investment probability.
          </p>

          <h2>Design & Gamification Strategy</h2>
          <p>
            We moved away from standard "dark mode crypto" templates and built a vibrant, custom interface. Learn more about our philosophy on <Link to="/blog/meme-coin-website-features">Must-Have Meme Coin Features</Link>.
          </p>
          <ul>
            <li><strong>Mascot-Centric Hero:</strong> The homepage centers around the animated Quack Inu character with interactive tooltips ("Click to Spin!").</li>
            <li><strong>Wooden UI Elements:</strong> Custom CSS styling to create "wood plank" buttons and panels, fitting the jungle narrative perfectly.</li>
            <li><strong>Gamified Mechanics:</strong> A "Spin to Win" feature (visualized in the UI) keeps users on the page longer, reducing bounce rates.</li>
            <li><strong>Narrative Roadmap:</strong> The roadmap is designed as a "Jungle Path" (Exploration, Base Camp, El Dorado), making the project's future feel like an adventure.</li>
          </ul>

          <div className="my-12 p-8 bg-surface-highlight rounded-3xl border border-green-500/20">
            <h3>Technical Deep Dive: CSS-Only Performance</h3>
            <p>
                To maintain a <strong>sub-1 second load time</strong> despite the heavy visuals, we avoided large PNG assets. Instead, we used <strong>CSS-only shapes and gradients</strong> to create the wood textures and jungle foliage.
            </p>
            <p>
                This "Code-over-Assets" approach kept the bundle size under 150KB, ensuring the site loads instantly even on 3G mobile networks in emerging markets—a key demographic for BNB Chain projects.
            </p>
          </div>

          <h2>Community Impact</h2>
          <p>
            The unique design became a talking point in Telegram groups. Investors cited the "high quality website" as a primary reason for trusting the team not to rug-pull.
          </p>
          <div className="not-prose my-12 p-8 bg-gradient-to-br from-[#2E8B57] to-[#1a5c38] rounded-3xl border border-green-400/30 relative overflow-hidden group shadow-lg">
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
            <h3 className="font-display text-2xl font-bold text-white mb-8 text-center relative z-10 drop-shadow-md">Launch Statistics</h3>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-10 text-center relative z-10">
              <div className="p-4 rounded-xl bg-white/10 backdrop-blur-md border border-white/20">
                <div className="text-3xl font-bold text-yellow-300 mb-2">25K+</div>
                <div className="text-xs font-bold text-white/80 uppercase tracking-widest">Telegram</div>
              </div>
              <div className="p-4 rounded-xl bg-white/10 backdrop-blur-md border border-white/20">
                <div className="text-3xl font-bold text-yellow-300 mb-2">0%</div>
                <div className="text-xs font-bold text-white/80 uppercase tracking-widest">Buy Tax</div>
              </div>
               <div className="p-4 rounded-xl bg-white/10 backdrop-blur-md border border-white/20">
                <div className="text-3xl font-bold text-yellow-300 mb-2">45s</div>
                <div className="text-xs font-bold text-white/80 uppercase tracking-widest">Avg. Time on Site</div>
              </div>
              <div className="p-4 rounded-xl bg-white/10 backdrop-blur-md border border-white/20">
                <div className="text-3xl font-bold text-yellow-300 mb-2">#1</div>
                <div className="text-xs font-bold text-white/80 uppercase tracking-widest">Trending</div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 flex flex-col sm:flex-row gap-4 justify-center pt-10 border-t border-white/10">
          <a href="https://quackmeme.pages.dev" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center px-8 py-3 bg-[#8B4513] hover:bg-[#A0522D] text-white font-bold rounded-xl transition-colors shadow-lg border-b-4 border-[#5c2e0c]">
            Visit Quack Inu
            <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
          </a>
          <Link to="/contact" className="inline-flex items-center justify-center px-8 py-3 bg-surface border border-slate-200 dark:border-slate-700 text-text-main font-bold rounded-xl hover:bg-surface-highlight transition-colors">
            Get a Meme Coin Quote
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MemeCoinSite;