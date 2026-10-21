import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../../components/SEO';

const Web3Development: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-[#020617] pt-16 pb-24">
      <SEO
        title="Full-Stack Web, E-Commerce & Web3 Development | CryptoWebBuild"
        description="Sub-second E-Commerce storefronts, Python/Django & PostgreSQL SaaS platforms, Next.js web apps, and Web3 dApps by Sagor Ahamed."
        canonical="/services/web3-development"
        schemaType="Service"
      />
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="inline-block px-4 py-1.5 mb-6 rounded-full bg-white dark:bg-white/5 border border-blue-500/30 text-blue-600 dark:text-blue-400 text-sm font-bold tracking-wider uppercase shadow-sm">
          Full-Stack &amp; Web3 Engineering
        </div>
        <h1 className="font-display text-5xl md:text-6xl font-black text-gray-900 dark:text-white mb-8">
          Full-Stack Web, SaaS &amp;{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">
            Web3 Architecture
          </span>
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mb-12 leading-relaxed">
          From sub-second 1-click E-Commerce storefronts and Python/Django + PostgreSQL SaaS platforms to high-concurrency Web3 launchpads and dApps.
        </p>

        <div className="bg-white dark:bg-[#1e293b] p-8 md:p-12 rounded-[32px] border border-gray-200 dark:border-white/10 mb-12 shadow-xl">
          <h2 className="font-display text-3xl font-bold mb-6 text-gray-900 dark:text-white">
            Elite Production Stack
          </h2>
          <ul className="list-disc pl-6 space-y-4 text-gray-600 dark:text-gray-300 text-lg">
            <li>Headless E-Commerce &amp; 1-Click F-Commerce Storefronts (Stripe, PayPal, bKash, Nagad &amp; Steadfast/Pathao APIs).</li>
            <li>Scalable Backend Engineering with Python, Django, Django REST Framework, and PostgreSQL.</li>
            <li>Sub-second React &amp; Next.js frontends engineered to handle 100k+ concurrent users with 100/100 Core Web Vitals.</li>
            <li>Zero-latency RPC node integration and seamless wallet connections (Solana, Ethereum, Base, Arbitrum).</li>
          </ul>
        </div>

        <div className="flex flex-wrap gap-4">
          <Link
            to="/contact"
            className="inline-block neon-button text-white font-bold py-4 px-8 rounded-xl shadow-lg"
          >
            Start Your Full-Stack Project
          </Link>
          <a
            href="https://wa.me/8801618138820?text=Hi%20Sagor%2C%20I%27m%20interested%20in%20Full-Stack%20Web%20or%20E-Commerce%20Development."
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

export default Web3Development;
