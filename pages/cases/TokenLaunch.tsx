import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../../components/SEO';
import SolNovaMockup from '../../components/SolNovaMockup';

const TokenLaunch: React.FC = () => {
  const image = "https://cryptowebbuild.com/project-solana.jpg";
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Case Study: SolNova Protocol - Solana Presale Website Development",
    "image": image,
    "author": {
      "@type": "Organization",
      "name": "CryptoWebBuild"
    },
    "description": "How we built SolNova: a high-yield aggregator on Solana with a custom React presale dashboard, wallet integration, and 0.8s load times.",
    "keywords": "Solana Presale, Web3 Developer, React Wallet Integration, Token Launch Website"
  };

  return (
    <div className="container mx-auto px-6 pt-32 pb-20">
      <SEO 
        title="Solana Presale Website Development | SolNova Case Study"
        description="See how we built a high-performance Solana presale website with real-time wallet integration and 0.8s load times. Expert Solana web development."
        keywords={['Solana Presale Website', 'Yield Aggregator UI', 'Solana Web Development', 'Crypto Dashboard Design', 'React Web3 Integration']}
        image={image}
        type="article"
        publishedTime="2025-10-15"
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
          <h2>The Challenge: High-Stakes Solana Launch</h2>
          <p>
            The SolNova team approached us with a critical deadline. They needed a high-performance landing page to launch their Yield Aggregator protocol during the peak of the Solana bull run. The market for Solana presales is incredibly competitive; investors demand instant load times, transparent tokenomics, and a seamless "connect-to-buy" experience.
          </p>
          <p>
            The stakes were high: a slow website or a failed wallet connection could cost them hundreds of thousands of dollars in initial liquidity. Key technical requirements included:
          </p>
          <ul>
            <li><strong>Real-time Data:</strong> A fundraising progress bar that syncs with on-chain data.</li>
            <li><strong>Wallet Integration:</strong> Support for Phantom and Solflare wallets using the Solana Wallet Adapter.</li>
            <li><strong>Visual Identity:</strong> A design that communicated "institutional DeFi" safety while maintaining a futuristic Web3 aesthetic.</li>
          </ul>

          <h2>The Solution: Static-First Architecture</h2>
          <p>
            To handle the massive traffic spike anticipated at launch (driven by influencer marketing), we engineered a static-first application using <strong>React</strong> and <strong>Cloudflare Pages</strong>. This ensures 100% uptime and global distribution. 
          </p>
          <p>
            Unlike dynamic sites (like WordPress) which can crash under load, our static architecture serves pre-built HTML files from the Edge network. This approach aligns with our <Link to="/services">standard high-performance crypto architecture</Link>.
          </p>

          <h3>Key Development Features</h3>
          <ul>
            <li><strong>Custom Presale Dashboard:</strong> We built a bespoke React component that fetches the "Total Raised" amount from the smart contract via RPC nodes, displaying it with a live counter animation.</li>
            <li><strong>Solana Wallet Adapter:</strong> We implemented full integration with the `@solana/wallet-adapter-react` library. This allows for secure, one-click wallet connection and handles transaction signing errors gracefully.</li>
            <li><strong>Neon-Dark UI System:</strong> A bespoke Tailwind CSS design system featuring "glassmorphism" cards, animated gradients, and custom SVGs to match the brand's identity.</li>
          </ul>

          <div className="my-10 p-8 bg-surface-highlight border border-white/10 rounded-2xl">
            <h3 className="text-xl font-bold text-text-main mb-4">Technical Deep Dive: Optimizing for Speed</h3>
            <p className="text-text-muted text-sm">
                To achieve the <strong>0.8s load time</strong>, we utilized aggressive code-splitting. We lazy-loaded the heavy Wallet libraries so they only fetch when the user clicks "Connect Wallet". We also implemented aggressive caching headers via Cloudflare Workers. 
            </p>
            <p className="text-text-muted text-sm mt-4">
                This ensures that even if 50,000 users hit the site simultaneously, the landing page renders instantly. Interested in similar performance for your project? Check out our <Link to="/blog/crypto-cost" className="text-purple-500 font-bold hover:underline">Crypto Website Pricing Guide</Link>.
            </p>
          </div>

          <h2>The Outcome: $1.2M Raised</h2>
          <p>
            The site achieved a perfect <strong>100 Performance score</strong> on Google PageSpeed Insights. The friction-free buying process contributed to raising over <strong>$1.2M in the first phase</strong> of the presale.
          </p>
          <p>
            User feedback highlighted the smoothness of the UI and the clarity of the data presentation. The project successfully transitioned from presale to mainnet launch using the same scalable frontend architecture.
          </p>
          
          <h3>Why hire a specialized Web3 Developer?</h3>
          <p>
            General web developers often struggle with the nuances of Web3—RPC rate limits, wallet connection states, and BigNumber math for tokens. As a specialized <Link to="/about">Web3 Developer</Link>, I understand these edge cases ensuring your users' funds and your reputation are safe.
          </p>
        </div>

        <div className="mt-16 flex flex-col sm:flex-row gap-4 justify-center pt-10 border-t border-white/10">
          <a href="https://solnova.pages.dev" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center px-8 py-3 bg-gradient-to-r from-purple-600 to-cyan-600 text-white font-bold rounded-xl transition-transform hover:scale-105 shadow-lg shadow-purple-500/20">
            Visit Live Site
            <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
          </a>
          <Link to="/contact" className="inline-flex items-center justify-center px-8 py-3 bg-surface border border-slate-200 dark:border-slate-700 text-text-main font-bold rounded-xl hover:bg-surface-highlight transition-colors">
            Hire Me for Your Launch
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TokenLaunch;