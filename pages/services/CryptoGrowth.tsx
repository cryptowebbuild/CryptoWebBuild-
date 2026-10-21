import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../../components/SEO';

const CryptoGrowth: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-[#020617] pt-16 pb-24">
      <SEO
        title="Technical SEO, Speed Optimization & Growth Funnels | CryptoWebBuild"
        description="100/100 Google PageSpeed optimization, Technical SEO, Schema.org JSON-LD, and high-converting growth funnels by Sagor Ahamed."
        canonical="/services/crypto-growth"
        schemaType="Service"
      />
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="inline-block px-4 py-1.5 mb-6 rounded-full bg-white dark:bg-white/5 border border-cyan-500/30 text-cyan-600 dark:text-cyan-400 text-sm font-bold tracking-wider uppercase shadow-sm">
          Technical SEO &amp; Conversion Funnels
        </div>
        <h1 className="font-display text-5xl md:text-6xl font-black text-gray-900 dark:text-white mb-8">
          Technical SEO &amp;{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-purple-600">
            Growth Funnels
          </span>
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mb-12 leading-relaxed">
          We don&apos;t just build websites; we engineer sub-second, #1 ranking search architectures and conversion funnels for local businesses, E-commerce brands, SaaS startups, and Web3 protocols.
        </p>

        <div className="bg-white dark:bg-[#1e293b] p-8 md:p-12 rounded-[32px] border border-gray-200 dark:border-white/10 mb-12 shadow-xl">
          <h2 className="font-display text-3xl font-bold mb-6 text-gray-900 dark:text-white">
            Conversion &amp; Search Domination
          </h2>
          <ul className="list-disc pl-6 space-y-4 text-gray-600 dark:text-gray-300 text-lg">
            <li>100/100 Google PageSpeed &amp; Core Web Vitals (&lt; 0.8s LCP, zero layout shift).</li>
            <li>Programmatic Schema.org JSON-LD &amp; Generative Engine Optimization (GEO) for AI search visibility.</li>
            <li>High-converting landing pages optimized for buyer and investor conversion.</li>
            <li>Server-side Meta Pixel / Conversion API &amp; GA4 attribution architecture.</li>
          </ul>
        </div>

        <div className="flex flex-wrap gap-4">
          <Link
            to="/contact"
            className="inline-block neon-button text-white font-bold py-4 px-8 rounded-xl shadow-lg"
          >
            Claim Your Free SEO &amp; Speed Audit
          </Link>
          <a
            href="https://wa.me/8801618138820?text=Hi%20Sagor%2C%20I%27m%20interested%20in%20Technical%20SEO%20%26%20Speed%20Optimization."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 text-gray-900 dark:text-white font-bold py-4 px-8 rounded-xl hover:border-purple-500/40 transition"
          >
            WhatsApp: +880 1618-138820
          </a>
        </div>
      </div>
    </div>
  );
};

export default CryptoGrowth;
