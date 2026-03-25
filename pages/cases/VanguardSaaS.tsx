import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../../components/SEO';
import OptimizedImage from '../../components/OptimizedImage';

const VanguardSaaS: React.FC = () => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Case Study: Vanguard SaaS - B2B Financial Analytics Platform",
    "image": "https://cryptowebbuild.com/vanguard-saas-preview.jpg",
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
    "description": "Building a high-performance, dark-mode B2B analytics dashboard for institutional investors.",
    "keywords": "B2B SaaS Design, Financial Analytics Dashboard, React Data Visualization, Dark Mode UI, Enterprise Web App"
  };

  return (
    <div className="container mx-auto px-6 ">
      <SEO
        title="Vanguard SaaS | B2B Financial Analytics Platform"
        description="See how we designed and developed a lightning-fast data visualization dashboard for a leading institutional investment firm."
        keywords={['SaaS Platform Development', 'B2B Dashboard Design', 'React Data Visualization', 'Enterprise Web App', 'Financial Analytics UI']}
        type="article"
        publishedTime="2025-10-28"
        schema={jsonLd}
        canonical="/vanguardsaas"
      />

      <div className="max-w-4xl mx-auto animate-slide-up">
        <nav className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 mb-8">
            <Link to="/" className="hover:text-purple-600 transition-colors">Home</Link>
            <span>/</span>
            <Link to="/projects" className="hover:text-purple-600 transition-colors">Projects</Link>
            <span>/</span>
            <span className="text-gray-900 dark:text-gray-300 font-medium">Vanguard SaaS Platform</span>
        </nav>

        <div className="inline-block px-3 py-1 mb-6 rounded-full bg-blue-100 dark:bg-blue-900/30 border border-blue-200 dark:border-blue-800 text-blue-600 dark:text-blue-300 text-xs font-bold uppercase tracking-wider shadow-sm">
          Case Study
        </div>
        <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-text-main mb-8 leading-tight">
          Vanguard SaaS — <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-indigo-500">Institutional Analytics</span>
        </h1>

        <div className="rounded-3xl overflow-hidden shadow-2xl border border-slate-200 dark:border-slate-800 mb-12 h-[400px] md:h-[500px]">
             <OptimizedImage
               src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80"
               alt="Vanguard SaaS Analytics Dashboard Preview"
               className="w-full h-full"
               fill={true}
               priority={true}
             />
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-16">
          <div className="glass-panel p-6 rounded-2xl bg-surface border-t border-blue-500/20">
            <h3 className="text-text-muted text-xs font-bold uppercase tracking-widest mb-2">Stack</h3>
            <p className="text-text-main font-bold text-lg">React, D3.js, Tailwind</p>
          </div>
          <div className="glass-panel p-6 rounded-2xl bg-surface border-t border-blue-500/20">
            <h3 className="text-text-muted text-xs font-bold uppercase tracking-widest mb-2">Focus</h3>
            <p className="text-text-main font-bold text-lg">Data Viz, Performance</p>
          </div>
          <div className="glass-panel p-6 rounded-2xl bg-surface border-t border-blue-500/20">
            <h3 className="text-text-muted text-xs font-bold uppercase tracking-widest mb-2">Result</h3>
            <p className="text-blue-500 font-bold text-lg">Zero-Lag Filtering</p>
          </div>
        </div>

        <div className="prose prose-lg prose-slate dark:prose-invert max-w-none">
          <h2>The Client Goal: Taming Big Data</h2>
          <p>
            Vanguard Financial required an internal SaaS platform to aggregate and visualize massive, real-time datasets across thousands of market indicators. Their legacy system, built on outdated charting libraries, would freeze when rendering complex heatmaps, causing critical delays in decision-making for their trading desks.
          </p>
          <p>
            They needed a modern, ultra-responsive dashboard that could process and render high-frequency data without dropping frames, wrapped in a sleek, professional UI suitable for institutional users.
          </p>

          <h2>My Solution: High-Performance Architecture</h2>
          <p>
            We engineered a scalable, highly optimized React application designed explicitly for heavy data workloads.
          </p>
          <ul>
            <li><strong>Canvas-Based Rendering:</strong> Instead of relying on standard DOM elements (SVG) for charts, which bloat memory with large datasets, we implemented WebGL and Canvas-based rendering via customized D3.js wrappers. This allowed us to plot millions of data points instantly.</li>
            <li><strong>Sophisticated Dark Mode UI:</strong> Designed a premium, low-contrast dark theme to reduce eye strain for analysts staring at screens for 12+ hours a day. We used deep slate backgrounds with precise, functional color-coding (red/green) that adhered strictly to accessibility standards.</li>
            <li><strong>Intelligent State Management:</strong> Utilized advanced memoization and web workers to offload heavy data parsing from the main UI thread, ensuring that interactive features like zooming and filtering remained perfectly smooth.</li>
          </ul>

          <div className="bg-surface-highlight p-8 rounded-3xl border border-blue-500/20 my-10">
            <h3 className="text-xl font-bold text-text-main mb-4">Technical Win: Virtualized Tables</h3>
            <p>
                To handle the massive transaction logs, we implemented custom "virtualized" data tables. Only the rows currently visible in the user's browser viewport were rendered into the DOM. This technique reduced memory consumption by 90% and allowed the app to handle millions of rows seamlessly.
            </p>
          </div>

          <h2>The Outcome</h2>
          <p>
            The Vanguard SaaS platform completely revitalized the client's internal operations:
          </p>
          <ul>
            <li><strong>Performance Leap:</strong> Dashboard load times decreased from 14 seconds to under 1.2 seconds.</li>
            <li><strong>User Satisfaction:</strong> Zero reported UI freezes during periods of high market volatility.</li>
            <li><strong>Scalability:</strong> The robust architecture provided a foundation for the client to spin off the platform into a standalone B2B product the following year.</li>
          </ul>
        </div>

        <div className="mt-16 flex flex-col sm:flex-row gap-4 justify-center pt-10 border-t border-white/10">
          <Link to="/contact" className="inline-flex items-center justify-center px-8 py-3 bg-surface border border-slate-200 dark:border-slate-700 text-text-main font-bold rounded-xl hover:bg-surface-highlight transition-colors">
            Build Your SaaS Platform
          </Link>
        </div>
      </div>
    </div>
  );
};

export default VanguardSaaS;