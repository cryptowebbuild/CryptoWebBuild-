import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../../components/SEO';
import OptimizedImage from '../../components/OptimizedImage';

const ApexAgency: React.FC = () => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Case Study: Apex Digital Agency - Sleek Corporate Portfolio",
    "image": "https://cryptowebbuild.com/apex-agency-preview.jpg",
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
    "description": "A modern, sleek corporate portfolio for a marketing agency featuring smooth animations and professional design.",
    "keywords": "Digital Agency Website, Corporate Portfolio Design, B2B Web Design, Modern Marketing Website, Framer Motion React"
  };

  return (
    <div className="container mx-auto px-6 pt-32 pb-20">
      <SEO
        title="Apex Digital Agency | Modern Corporate Portfolio Design"
        description="Explore how we built a sophisticated, high-performance portfolio website for a top-tier digital marketing agency."
        keywords={['Digital Agency Website', 'Corporate Portfolio', 'B2B Web Design', 'Creative Agency Site', 'Modern Professional Website']}
        type="article"
        publishedTime="2025-10-27"
        schema={jsonLd}
        canonical="/apexagency"
      />

      <div className="max-w-4xl mx-auto animate-slide-up">
        <nav className="flex items-center gap-2 text-sm text-gray-600 mb-8">
            <Link to="/" className="hover:text-purple-600 transition-colors">Home</Link>
            <span>/</span>
            <Link to="/projects" className="hover:text-purple-600 transition-colors">Projects</Link>
            <span>/</span>
            <span className="text-gray-900 dark:text-gray-300 font-medium">Apex Digital Agency</span>
        </nav>

        <div className="inline-block px-3 py-1 mb-6 rounded-full bg-emerald-100 dark:bg-emerald-900/30 border border-emerald-200 dark:border-emerald-800 text-emerald-600 dark:text-emerald-300 text-xs font-bold uppercase tracking-wider shadow-sm">
          Case Study
        </div>
        <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-text-main mb-8 leading-tight">
          Apex Digital Agency — <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-teal-500">Corporate Portfolio</span>
        </h1>

        <div className="rounded-3xl overflow-hidden shadow-2xl border border-slate-200 dark:border-slate-800 mb-12 h-[400px] md:h-[500px]">
             <OptimizedImage
               src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80"
               alt="Apex Digital Agency Website Preview"
               className="w-full h-full"
               fill={true}
               priority={true}
             />
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-16">
          <div className="glass-panel p-6 rounded-2xl bg-surface border-t border-emerald-500/20">
            <h3 className="text-text-muted text-xs font-bold uppercase tracking-widest mb-2">Stack</h3>
            <p className="text-text-main font-bold text-lg">React, Framer Motion</p>
          </div>
          <div className="glass-panel p-6 rounded-2xl bg-surface border-t border-emerald-500/20">
            <h3 className="text-text-muted text-xs font-bold uppercase tracking-widest mb-2">Focus</h3>
            <p className="text-text-main font-bold text-lg">B2B Authority, UX</p>
          </div>
          <div className="glass-panel p-6 rounded-2xl bg-surface border-t border-emerald-500/20">
            <h3 className="text-text-muted text-xs font-bold uppercase tracking-widest mb-2">Result</h3>
            <p className="text-emerald-500 font-bold text-lg">2x Lead Generation</p>
          </div>
        </div>

        <div className="prose prose-lg prose-slate dark:prose-invert max-w-none">
          <h2>The Client Goal: Establishing Digital Authority</h2>
          <p>
            Apex Digital Agency had a proven track record of delivering results for enterprise clients, but their own website failed to reflect their expertise. It looked outdated and lacked the polish required to close high-ticket B2B deals.
          </p>
          <p>
            They needed a digital presence that screamed authority, sophistication, and modern capability—a website that acted as their best salesperson.
          </p>

          <h2>My Solution: Professionalism Meets Modernity</h2>
          <p>
            We designed a striking corporate portfolio that balances stark professionalism with engaging, modern web interactions.
          </p>
          <ul>
            <li><strong>Sophisticated Aesthetic:</strong> Implemented a "monochrome plus one" color scheme—primarily deep slates and stark whites, punctuated by a precise emerald green to signify growth and reliability.</li>
            <li><strong>Dynamic Case Studies:</strong> Built a custom, CMS-driven portfolio section that allowed Apex to easily showcase their massive enterprise wins with full-bleed imagery and compelling typography.</li>
            <li><strong>Micro-Interactions:</strong> Used Framer Motion to add subtle, elegant reveal animations. Elements gracefully fade and slide into view as the user scrolls, creating a feeling of premium quality without being distracting.</li>
          </ul>

          <div className="bg-surface-highlight p-8 rounded-3xl border border-emerald-500/20 my-10">
            <h3 className="text-xl font-bold text-text-main mb-4">Technical Win: Accessible Interactive Design</h3>
            <p>
                While the site features numerous animations, we strictly adhered to WCAG accessibility guidelines. We implemented CSS media queries for `prefers-reduced-motion` to ensure that users who are sensitive to animation still receive a perfect, static experience.
            </p>
          </div>

          <h2>The Outcome</h2>
          <p>
            The relaunch transformed Apex Agency's outbound sales process:
          </p>
          <ul>
            <li><strong>Lead Quality:</strong> A 100% increase in inbound leads from enterprise-level prospects.</li>
            <li><strong>Sales Enablement:</strong> The sales team reported that the new site significantly reduced the time needed to establish trust during initial discovery calls.</li>
            <li><strong>Brand Perception:</strong> Positioned Apex as a top-tier agency in their competitive local market.</li>
          </ul>
        </div>

        <div className="mt-16 flex flex-col sm:flex-row gap-4 justify-center pt-10 border-t border-white/10">
          <Link to="/contact" className="inline-flex items-center justify-center px-8 py-3 bg-surface border border-slate-200 dark:border-slate-700 text-text-main font-bold rounded-xl hover:bg-surface-highlight transition-colors">
            Upgrade Your Corporate Identity
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ApexAgency;
