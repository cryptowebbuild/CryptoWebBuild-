import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../../components/SEO';
import OptimizedImage from '../../components/OptimizedImage';

const AuraCommerce: React.FC = () => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Case Study: Aura Commerce - High-Converting Dropshipping Store",
    "image": "https://cryptowebbuild.com/aura-commerce-preview.jpg",
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
    "description": "A lightning-fast, high-converting dropshipping e-commerce landing page optimized for mobile sales.",
    "keywords": "E-commerce Landing Page, Dropshipping Store Design, High Conversion Rate, React Headless Commerce, Mobile First Store"
  };

  return (
    <div className="container mx-auto px-6 pt-32 pb-20">
      <SEO
        title="Aura Commerce | High-Converting E-commerce Design"
        description="Discover how we engineered a lightning-fast dropshipping landing page focused entirely on maximizing conversion rates and mobile sales."
        keywords={['E-commerce Landing Page', 'High Conversion Store', 'Dropshipping Website Design', 'Fast Mobile Commerce', 'React E-commerce']}
        type="article"
        publishedTime="2025-10-26"
        schema={jsonLd}
        canonical="/auracommerce"
      />

      <div className="max-w-4xl mx-auto animate-slide-up">
        <nav className="flex items-center gap-2 text-sm text-gray-600 mb-8">
            <Link to="/" className="hover:text-purple-600 transition-colors">Home</Link>
            <span>/</span>
            <Link to="/projects" className="hover:text-purple-600 transition-colors">Projects</Link>
            <span>/</span>
            <span className="text-gray-900 dark:text-gray-300 font-medium">Aura Commerce</span>
        </nav>

        <div className="inline-block px-3 py-1 mb-6 rounded-full bg-rose-100 dark:bg-rose-900/30 border border-rose-200 dark:border-rose-800 text-rose-600 dark:text-rose-300 text-xs font-bold uppercase tracking-wider shadow-sm">
          Case Study
        </div>
        <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-text-main mb-8 leading-tight">
          Aura Commerce — <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-500 to-orange-500">High-Conversion Storefront</span>
        </h1>

        <div className="rounded-3xl overflow-hidden shadow-2xl border border-slate-200 dark:border-slate-800 mb-12 h-[400px] md:h-[500px]">
             <OptimizedImage
               src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1200&q=80"
               alt="Aura Commerce Landing Page Preview"
               className="w-full h-full"
               fill={true}
               priority={true}
             />
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-16">
          <div className="glass-panel p-6 rounded-2xl bg-surface border-t border-rose-500/20">
            <h3 className="text-text-muted text-xs font-bold uppercase tracking-widest mb-2">Stack</h3>
            <p className="text-text-main font-bold text-lg">Next.js, Stripe, Tailwind</p>
          </div>
          <div className="glass-panel p-6 rounded-2xl bg-surface border-t border-rose-500/20">
            <h3 className="text-text-muted text-xs font-bold uppercase tracking-widest mb-2">Focus</h3>
            <p className="text-text-main font-bold text-lg">CRO, Mobile Speed</p>
          </div>
          <div className="glass-panel p-6 rounded-2xl bg-surface border-t border-rose-500/20">
            <h3 className="text-text-muted text-xs font-bold uppercase tracking-widest mb-2">Result</h3>
            <p className="text-rose-500 font-bold text-lg">3.8% Conversion Rate</p>
          </div>
        </div>

        <div className="prose prose-lg prose-slate dark:prose-invert max-w-none">
          <h2>The Client Goal: Stop Wasting Ad Spend</h2>
          <p>
            Aura Commerce, a rapidly scaling dropshipping brand, was burning through their TikTok and Facebook ad budget. They had a winning product, but their standard Shopify theme was sluggish and leaked customers at the checkout step.
          </p>
          <p>
            The goal was clear: engineer a custom landing page that loads instantaneously and ruthlessly optimizes the buyer's journey from click to purchase.
          </p>

          <h2>My Solution: Speed & Psychology</h2>
          <p>
            We discarded the heavy template approach and built a bespoke, mobile-first experience designed around consumer psychology and speed.
          </p>
          <ul>
            <li><strong>Sub-Second Load Times:</strong> By utilizing static site generation (SSG) with Next.js, we ensured the page loaded in under 0.8 seconds on 4G networks, capturing impatient mobile traffic before they bounced.</li>
            <li><strong>Frictionless Checkout:</strong> Integrated Stripe Elements directly into the product page. Users could complete their purchase without ever being redirected to a separate, confusing checkout flow.</li>
            <li><strong>Visual Hierarchy:</strong> Implemented a clean, minimalist design (light theme with striking rose-gold accents) that directed all visual attention to high-quality product imagery and the primary "Add to Cart" call-to-action.</li>
          </ul>

          <div className="bg-surface-highlight p-8 rounded-3xl border border-rose-500/20 my-10">
            <h3 className="text-xl font-bold text-text-main mb-4">Technical Win: Predictive Image Loading</h3>
            <p>
                We implemented predictive preloading for product galleries. As a user scrolled down the sales copy, high-resolution product images were silently fetched in the background, ensuring instant visual gratification when the user reached the gallery section.
            </p>
          </div>

          <h2>The Outcome</h2>
          <p>
            The new Aura Commerce landing page fundamentally changed the unit economics of their ad campaigns:
          </p>
          <ul>
            <li><strong>Conversion Rate Spike:</strong> Increased from a struggling 1.2% to a highly profitable 3.8%.</li>
            <li><strong>Lower CPA:</strong> The lightning-fast load times improved Facebook Ad Quality Scores, effectively lowering the Cost Per Acquisition (CPA) by 22%.</li>
            <li><strong>Revenue Growth:</strong> Enabled the client to profitably scale their ad spend 5x within two weeks.</li>
          </ul>
        </div>

        <div className="mt-16 flex flex-col sm:flex-row gap-4 justify-center pt-10 border-t border-white/10">
          <Link to="/contact" className="inline-flex items-center justify-center px-8 py-3 bg-surface border border-slate-200 dark:border-slate-700 text-text-main font-bold rounded-xl hover:bg-surface-highlight transition-colors">
            Boost Your E-commerce Conversion
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AuraCommerce;
