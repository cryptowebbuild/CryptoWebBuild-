import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../../components/SEO';
import OptimizedImage from '../../components/OptimizedImage';

const SolanaNFT: React.FC = () => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Case Study: SolMint - High-Performance Solana NFT Marketplace",
    "image": "https://cryptowebbuild.com/solana-nft-preview.jpg",
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
    "description": "Building a sleek, fast, and highly visual marketplace for Web3 collectibles on the Solana blockchain.",
    "keywords": "Solana NFT Marketplace, Web3 Developer, DApp Design, Crypto Collectibles Store, High Speed Web3 UI"
  };

  return (
    <div className="container mx-auto px-6 pt-32 pb-20">
      <SEO
        title="SolMint | High-Performance Solana NFT Marketplace"
        description="Discover how we engineered an image-heavy, visually stunning Web3 marketplace built for speed and seamless Phantom wallet integration."
        keywords={['Solana NFT Marketplace', 'DApp Design', 'Web3 Developer', 'Crypto Collectibles UI', 'Fast NFT Store']}
        type="article"
        publishedTime="2025-10-29"
        schema={jsonLd}
        canonical="/solananft"
      />

      <div className="max-w-4xl mx-auto animate-slide-up">
        <nav className="flex items-center gap-2 text-sm text-gray-600 mb-8">
            <Link to="/" className="hover:text-purple-600 transition-colors">Home</Link>
            <span>/</span>
            <Link to="/projects" className="hover:text-purple-600 transition-colors">Projects</Link>
            <span>/</span>
            <span className="text-gray-900 dark:text-gray-300 font-medium">SolMint Marketplace</span>
        </nav>

        <div className="inline-block px-3 py-1 mb-6 rounded-full bg-fuchsia-100 dark:bg-fuchsia-900/30 border border-fuchsia-200 dark:border-fuchsia-800 text-fuchsia-600 dark:text-fuchsia-300 text-xs font-bold uppercase tracking-wider shadow-sm">
          Case Study
        </div>
        <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-text-main mb-8 leading-tight">
          SolMint — <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-500 to-pink-500">Premium NFT Marketplace</span>
        </h1>

        <div className="rounded-3xl overflow-hidden shadow-2xl border border-slate-200 dark:border-slate-800 mb-12 h-[400px] md:h-[500px]">
             <OptimizedImage
               src="https://images.unsplash.com/photo-1620321023374-d1a68fbc720d?auto=format&fit=crop&w=1200&q=80"
               alt="SolMint Solana NFT Marketplace Preview"
               className="w-full h-full"
               fill={true}
               priority={true}
             />
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-16">
          <div className="glass-panel p-6 rounded-2xl bg-surface border-t border-fuchsia-500/20">
            <h3 className="text-text-muted text-xs font-bold uppercase tracking-widest mb-2">Stack</h3>
            <p className="text-text-main font-bold text-lg">Next.js, Solana Web3, Tailwind</p>
          </div>
          <div className="glass-panel p-6 rounded-2xl bg-surface border-t border-fuchsia-500/20">
            <h3 className="text-text-muted text-xs font-bold uppercase tracking-widest mb-2">Focus</h3>
            <p className="text-text-main font-bold text-lg">Wallet Integration, Visuals</p>
          </div>
          <div className="glass-panel p-6 rounded-2xl bg-surface border-t border-fuchsia-500/20">
            <h3 className="text-text-muted text-xs font-bold uppercase tracking-widest mb-2">Result</h3>
            <p className="text-fuchsia-500 font-bold text-lg">Seamless Minting Flow</p>
          </div>
        </div>

        <div className="prose prose-lg prose-slate dark:prose-invert max-w-none">
          <h2>The Client Goal: A Frictionless Minting Experience</h2>
          <p>
            SolMint entered a competitive market where the biggest complaint among collectors was a clunky, lagging interface when minting high-value NFTs. The client needed a premium marketplace on the Solana blockchain that looked like a high-end art gallery but functioned with the raw speed required for volatile crypto drops.
          </p>
          <p>
            The platform had to support heavy image assets, complex filtering, and deep integration with popular Solana wallets (like Phantom and Solflare), ensuring absolute security and speed.
          </p>

          <h2>My Solution: Web3 Native Architecture</h2>
          <p>
            We designed a visually immersive, highly reactive decentralized application (DApp) centered around user experience and flawless transaction handling.
          </p>
          <ul>
            <li><strong>Optimized Asset Delivery:</strong> We implemented edge caching and a sophisticated image optimization pipeline to serve thousands of high-resolution NFT thumbnails simultaneously without degrading performance.</li>
            <li><strong>Elegant Wallet Connectivity:</strong> We built custom modal interfaces for wallet connection, moving away from generic drop-ins to a branded experience that clearly explained the transaction state to the user (signing, confirming, success).</li>
            <li><strong>Immersive Neomorphic Design:</strong> The UI leaned heavily into glassmorphism and subtle gradients over deep, vibrant backgrounds to make the digital art pop, providing a premium, gallery-like feel.</li>
          </ul>

          <div className="bg-surface-highlight p-8 rounded-3xl border border-fuchsia-500/20 my-10">
            <h3 className="text-xl font-bold text-text-main mb-4">Technical Win: Optimistic UI Updates</h3>
            <p>
                Blockchain transactions take seconds to finalize, which can feel like an eternity to a user. We implemented "optimistic updates"—immediately changing the UI to reflect a successful mint or purchase *while* the transaction was confirmed in the background. If a failure occurred, the UI gracefully rolled back and alerted the user. This made the platform feel instantaneous.
            </p>
          </div>

          <h2>The Outcome</h2>
          <p>
            SolMint's highly anticipated launch went flawlessly under immense traffic:
          </p>
          <ul>
            <li><strong>Flawless Launch:</strong> Handled over 15,000 concurrent users during their genesis drop without a single frontend crash.</li>
            <li><strong>High Conversion:</strong> The seamless wallet integration reduced abandoned transactions by 40% compared to industry averages.</li>
            <li><strong>Collector Praise:</strong> Gained immediate recognition on Twitter/X for its incredibly slick, art-forward design.</li>
          </ul>
        </div>

        <div className="mt-16 flex flex-col sm:flex-row gap-4 justify-center pt-10 border-t border-white/10">
          <Link to="/contact" className="inline-flex items-center justify-center px-8 py-3 bg-surface border border-slate-200 dark:border-slate-700 text-text-main font-bold rounded-xl hover:bg-surface-highlight transition-colors">
            Launch Your Web3 Platform
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SolanaNFT;