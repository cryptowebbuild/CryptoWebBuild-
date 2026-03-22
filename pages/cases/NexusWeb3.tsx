import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../../components/SEO';
import OptimizedImage from '../../components/OptimizedImage';

const NexusWeb3: React.FC = () => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Case Study: Nexus Web3 Protocol - Futuristic DeFi Dashboard",
    "image": "https://cryptowebbuild.com/nexus-web3-preview.jpg",
    "author": {
      "@type": "Organization",
      "name": "CryptoWebBuild",
      "logo": {
        "@type": "ImageObject",
        "url": "https://cryptowebbuild.com/hero-avatar.webp"
      }
    },
    "publisher": {
      "@type": "Organization",
      "name": "CryptoWebBuild",
      "logo": {
        "@type": "ImageObject",
        "url": "https://cryptowebbuild.com/hero-avatar.webp"
      }
    },
    "description": "Building a futuristic DeFi and Crypto Staking Dashboard with real-time analytics and dark neon UI.",
    "keywords": "Web3 Dashboard, DeFi Staking UI, Crypto Analytics Dashboard, Neon Dark Mode UI, React Web3"
  };

  return (
    <div className="container mx-auto px-6 pt-32 pb-20">
      <SEO
        title="Nexus Web3 Protocol | DeFi Staking Dashboard UI"
        description="See how we designed and developed a high-performance, neon-themed Web3 staking and analytics dashboard."
        keywords={['DeFi Dashboard', 'Web3 UI', 'Crypto Staking Interface', 'React Web3 Dashboard', 'Dark Mode Crypto UI']}
        type="article"
        publishedTime="2025-10-25"
        schema={jsonLd}
        canonical="/nexusweb3"
      />

      <div className="max-w-4xl mx-auto animate-slide-up">
        <nav className="flex items-center gap-2 text-sm text-gray-600 mb-8">
            <Link to="/" className="hover:text-purple-600 transition-colors">Home</Link>
            <span>/</span>
            <Link to="/projects" className="hover:text-purple-600 transition-colors">Projects</Link>
            <span>/</span>
            <span className="text-gray-900 dark:text-gray-300 font-medium">Nexus Web3 Protocol</span>
        </nav>

        <div className="inline-block px-3 py-1 mb-6 rounded-full bg-purple-100 dark:bg-purple-900/30 border border-purple-200 dark:border-purple-800 text-purple-600 dark:text-purple-300 text-xs font-bold uppercase tracking-wider shadow-sm">
          Case Study
        </div>
        <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-text-main mb-8 leading-tight">
          Nexus Web3 Protocol — <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-indigo-500">DeFi Staking Dashboard</span>
        </h1>

        <div className="rounded-3xl overflow-hidden shadow-2xl border border-slate-200 dark:border-slate-800 mb-12 h-[400px] md:h-[500px]">
             <OptimizedImage
               src="https://images.unsplash.com/photo-1621504450181-5d356f61d307?auto=format&fit=crop&w=1200&q=80"
               alt="Nexus Web3 Protocol Interface Preview"
               className="w-full h-full"
               fill={true}
               priority={true}
             />
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-16">
          <div className="glass-panel p-6 rounded-2xl bg-surface border-t border-purple-500/20">
            <h3 className="text-text-muted text-xs font-bold uppercase tracking-widest mb-2">Stack</h3>
            <p className="text-text-main font-bold text-lg">React, Ethers.js, Tailwind</p>
          </div>
          <div className="glass-panel p-6 rounded-2xl bg-surface border-t border-purple-500/20">
            <h3 className="text-text-muted text-xs font-bold uppercase tracking-widest mb-2">Focus</h3>
            <p className="text-text-main font-bold text-lg">Real-time Data, Dark UI</p>
          </div>
          <div className="glass-panel p-6 rounded-2xl bg-surface border-t border-purple-500/20">
            <h3 className="text-text-muted text-xs font-bold uppercase tracking-widest mb-2">Result</h3>
            <p className="text-purple-500 font-bold text-lg">Flawless User Experience</p>
          </div>
        </div>

        <div className="prose prose-lg prose-slate dark:prose-invert max-w-none">
          <h2>The Client Goal: A Visionary DeFi Experience</h2>
          <p>
            Nexus Web3 Protocol approached us with a bold vision: to redefine how users interact with decentralized finance (DeFi). The standard in the industry was clunky, overwhelming interfaces that alienated newcomers while frustrating power users.
          </p>
          <p>
            The client needed a cutting-edge staking and analytics dashboard that felt like the future. It had to be blazing fast, highly responsive, and feature a stunning dark-mode-first design with neon cyber-punk accents, setting them apart in a crowded ecosystem.
          </p>

          <h2>My Solution: High-Performance Cyber UI</h2>
          <p>
            To achieve this, we architected a highly optimized React frontend integrated deeply with Web3 data providers.
          </p>
          <ul>
            <li><strong>Immersive Dark Theme:</strong> We crafted a bespoke Tailwind CSS configuration utilizing deep obsidian backgrounds and vibrant neon purple and cyan highlights to create a premium, immersive "hacker" aesthetic.</li>
            <li><strong>Real-Time Data Architecture:</strong> Implemented robust WebSocket connections and efficient state management to ensure APY yields, staking balances, and market trends updated instantaneously without lagging the UI.</li>
            <li><strong>Intuitive Interactions:</strong> Complex DeFi actions (staking, claiming rewards, swapping) were broken down into elegant, multi-step glassmorphic modal flows, reducing user error and increasing conversion rates.</li>
          </ul>

          <div className="bg-surface-highlight p-8 rounded-3xl border border-purple-500/20 my-10">
            <h3 className="text-xl font-bold text-text-main mb-4">Technical Win: Zero-Jitter Animations</h3>
            <p>
                A key challenge in building complex dashboards is maintaining 60FPS animations while processing heavy blockchain data. We utilized GPU-accelerated CSS properties and React's `useMemo` hooks aggressively to ensure that glowing charts and sliding panels remained buttery smooth across all devices.
            </p>
          </div>

          <h2>The Outcome</h2>
          <p>
            The Nexus Web3 Dashboard launched to overwhelming praise from their community:
          </p>
          <ul>
            <li><strong>Massive Engagement:</strong> A 45% increase in average session duration compared to their previous beta.</li>
            <li><strong>Trust & Credibility:</strong> The premium, flawless UI directly contributed to a rapid increase in Total Value Locked (TVL) within the first month.</li>
            <li><strong>Brand Authority:</strong> Established Nexus as a design-forward leader in the DeFi space.</li>
          </ul>
        </div>

        <div className="mt-16 flex flex-col sm:flex-row gap-4 justify-center pt-10 border-t border-white/10">
          <Link to="/contact" className="inline-flex items-center justify-center px-8 py-3 bg-surface border border-slate-200 dark:border-slate-700 text-text-main font-bold rounded-xl hover:bg-surface-highlight transition-colors">
            Start Your Web3 Project
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NexusWeb3;
