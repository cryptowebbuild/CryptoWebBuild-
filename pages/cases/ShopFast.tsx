import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../../components/SEO';
import ShopFastMockup from '../../components/ShopFastMockup';

const ShopFast: React.FC = () => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Case Study: ShopFast - High Performance Static E-commerce",
    "image": "https://cryptowebbuild.com/project-ecommerce.jpg",
    "author": {
      "@type": "Organization",
      "name": "CryptoWebBuild"
    },
    "description": "Building an ultra-fast e-commerce store with sub-1s load times using static architecture and Stripe integration.",
    "keywords": "Headless E-commerce, Static Site Store, Next.js Commerce, Stripe Integration"
  };

  return (
    <div className="container mx-auto px-6 pt-32 pb-20">
      <SEO 
        title="Headless E-commerce Developer | ShopFast Case Study"
        description="See how we achieved sub-1s load times and 100/100 performance scores for a fashion brand using Headless React architecture."
        keywords={['Headless E-commerce Developer', 'Next.js E-commerce', 'High Performance Online Store', 'Static Site E-commerce', 'Stripe Integration React']}
        type="article"
        publishedTime="2025-10-20"
        schema={jsonLd}
      />

      <div className="max-w-4xl mx-auto animate-slide-up">
        <nav className="flex items-center gap-2 text-sm text-gray-500 mb-8">
            <Link to="/" className="hover:text-purple-600 transition-colors">Home</Link>
            <span>/</span>
            <Link to="/projects" className="hover:text-purple-600 transition-colors">Projects</Link>
            <span>/</span>
            <span className="text-gray-900 dark:text-gray-300 font-medium">ShopFast</span>
        </nav>

        <div className="inline-block px-3 py-1 mb-6 rounded-full bg-cyan-100 dark:bg-cyan-900/30 border border-cyan-200 dark:border-cyan-800 text-cyan-600 dark:text-cyan-300 text-xs font-bold uppercase tracking-wider shadow-sm">
          Case Study
        </div>
        <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-text-main mb-8 leading-tight">
          ShopFast — <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-500">Lightweight E-commerce</span>
        </h1>
        
        <div className="rounded-3xl overflow-hidden shadow-2xl border border-slate-200 dark:border-slate-800 mb-12 h-[400px] md:h-[500px]">
            <ShopFastMockup className="w-full h-full" />
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-16">
          <div className="glass-panel p-6 rounded-2xl bg-surface border-t border-cyan-500/20">
            <h3 className="text-text-muted text-xs font-bold uppercase tracking-widest mb-2">Stack</h3>
            <p className="text-text-main font-bold text-lg">Static, Stripe JS</p>
          </div>
          <div className="glass-panel p-6 rounded-2xl bg-surface border-t border-cyan-500/20">
            <h3 className="text-text-muted text-xs font-bold uppercase tracking-widest mb-2">Focus</h3>
            <p className="text-text-main font-bold text-lg">Speed, SEO</p>
          </div>
          <div className="glass-panel p-6 rounded-2xl bg-surface border-t border-cyan-500/20">
            <h3 className="text-text-muted text-xs font-bold uppercase tracking-widest mb-2">Result</h3>
            <p className="text-green-500 font-bold text-lg">&lt; 1s Load Time</p>
          </div>
        </div>

        <div className="prose prose-lg prose-slate dark:prose-invert max-w-none">
          <h2>The Challenge: Slow Sites Kill Sales</h2>
          <p>
            The client, a modern apparel brand, was struggling with high bounce rates on mobile devices. Their previous WordPress/WooCommerce site was taking 4-6 seconds to load, especially on 4G networks. In 2026, <strong>every second of delay reduces conversion by 7%</strong>.
          </p>
          <p>
            They needed a solution that was instant-loading globally, easy to manage, and securely integrated with payments. Traditional website builders were too bloated. See our breakdown on <Link to="/blog/static-vs-dynamic">Static vs Dynamic Websites</Link> to understand why this matters.
          </p>

          <h2>The Solution: Headless Commerce</h2>
          <p>
            We implemented a <strong>Headless Architecture</strong>. This means we decoupled the frontend (what the customer sees) from the backend (inventory and payments).
          </p>
          <ul>
            <li><strong>Frontend:</strong> Built with React and deployed to an Edge Network (Cloudflare). This ensures files are physically close to the user, wherever they are.</li>
            <li><strong>Product Data:</strong> Stored in a lightweight JSON structure (or fetched from Shopify API at build time), allowing pages to be pre-rendered as static HTML.</li>
            <li><strong>Payments:</strong> Integrated directly with <strong>Stripe Checkout</strong>. We offload PCI compliance and security to Stripe, ensuring a trusted payment flow.</li>
          </ul>

          <h3>Why "Static" is the Future of E-commerce</h3>
          <p>
            By pre-rendering product pages, we eliminate database queries when a user visits the site. The server doesn't have to "think" about what to show; it just serves the file.
          </p>
          <div className="bg-surface-highlight p-8 rounded-3xl border border-cyan-500/20 my-10">
            <h3 className="text-xl font-bold text-text-main mb-4">Technical Win: Sub-Second Transitions</h3>
            <p>
                We utilized client-side routing. When a user clicks from "Home" to a "Product Page", the browser only fetches the new data (text/image), not the entire page layout. This makes navigation feel <strong>instant</strong>, like a native mobile app.
            </p>
            <p>
                This resulted in a <strong>100/100 Performance Score</strong> on Core Web Vitals, a direct ranking factor for Google SEO.
            </p>
          </div>

          <h2>The Outcome</h2>
          <p>
            The results were immediate and measurable:
          </p>
          <ul>
            <li><strong>38% drop</strong> in checkout abandonment.</li>
            <li><strong>2x increase</strong> in organic traffic due to better mobile SEO rankings.</li>
            <li><strong>Zero maintenance</strong> downtime. The site scales automatically during Black Friday sales without needing server upgrades.</li>
          </ul>
          <p>
            This project proves that investing in custom, headless development pays for itself through higher conversion rates. If you are serious about e-commerce, you cannot afford a slow template.
          </p>
        </div>

        <div className="mt-16 flex flex-col sm:flex-row gap-4 justify-center pt-10 border-t border-white/10">
          <a href="https://e-commercesagor.pages.dev/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center px-8 py-3 bg-cyan-600 hover:bg-cyan-500 text-white font-bold rounded-xl transition-colors shadow-lg shadow-cyan-500/20">
            Visit ShopFast
            <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
          </a>
          <Link to="/contact" className="inline-flex items-center justify-center px-8 py-3 bg-surface border border-slate-200 dark:border-slate-700 text-text-main font-bold rounded-xl hover:bg-surface-highlight transition-colors">
            Get an E-commerce Quote
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ShopFast;