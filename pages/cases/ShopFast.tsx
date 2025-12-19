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
    "description": "Building an ultra-fast e-commerce store with sub-1s load times using static architecture and Stripe integration."
  };

  return (
    <div className="container mx-auto px-6 pt-32 pb-20">
      <SEO 
        title="Case Study: ShopFast - High Performance Static E-commerce"
        description="Building an ultra-fast e-commerce store with sub-1s load times using static architecture and Stripe integration."
      />
      <script type="application/ld+json">
        {JSON.stringify(jsonLd)}
      </script>
      <div className="max-w-4xl mx-auto animate-slide-up">
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
          <h2>The Challenge</h2>
          <p>Traditional e-commerce platforms (like WooCommerce or Magento) were too slow and bloated for this client, causing high bounce rates for mobile devices. They needed a solution that was instant-loading globally. See our breakdown on <Link to="/static-vs-dynamic-website">Static vs Dynamic Websites</Link>.</p>

          <h2>The Solution</h2>
          <p>We implemented a headless static storefront. Key architectural decisions included:</p>
          <ul>
            <li><strong>Pre-rendered Product Pages:</strong> All product data is baked into HTML at build time for instant delivery.</li>
            <li><strong>Client-Side Cart:</strong> A lightweight JavaScript cart that persists state locally without server round-trips.</li>
            <li><strong>Stripe Checkout:</strong> Offloading PCI compliance and secure payments to Stripe's hosted checkout page.</li>
          </ul>

          <div className="bg-surface-highlight p-8 rounded-3xl border border-cyan-500/20 my-10">
            <h3 className="text-xl font-bold text-text-main mb-4">Why Headless?</h3>
            <p>
                By decoupling the frontend (the store you see) from the backend (inventory management), we achieved a perfect 100/100 Performance score on Google PageSpeed Insights.
            </p>
            <p>
                This architecture eliminates database queries on page load, meaning the site can handle 10,000 concurrent visitors as easily as 10.
            </p>
          </div>

          <h2>The Outcome</h2>
          <p>Checkout abandonment dropped by 38%, directly attributing to the faster, friction-free experience. The SEO visibility for long-tail product keywords increased significantly due to the clean, semantic HTML structure.</p>
        </div>

        <div className="mt-16 flex flex-col sm:flex-row gap-4 justify-center pt-10 border-t border-white/10">
          <a href="https://e-commercesagor.pages.dev/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center px-8 py-3 bg-cyan-600 hover:bg-cyan-500 text-white font-bold rounded-xl transition-colors shadow-lg shadow-cyan-500/20">
            Visit ShopFast
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

export default ShopFast;