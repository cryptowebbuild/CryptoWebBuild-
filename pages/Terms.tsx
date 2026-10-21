import React from 'react';
import SEO from '../components/SEO';

const Terms: React.FC = () => {
  return (
    <div className="container mx-auto px-6 py-12 max-w-4xl">
      <SEO
        title="Terms of Service | CryptoWebBuild"
        description="Terms of Service, 50/50 Risk-Reversal Guarantee, and intellectual property handover policies for CryptoWebBuild."
        canonical="/terms"
      />

      <div className="p-8 md:p-12 rounded-[32px] bg-white dark:bg-[#020617] glass-panel border border-gray-200 dark:border-white/5 shadow-xl animate-slide-up">
        <h1 className="font-display text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
          Terms of Service
        </h1>
        <p className="text-sm text-gray-500 dark:text-gray-400 mb-8 font-bold uppercase tracking-wider">
          Last Updated: January 2026 • CryptoWebBuild
        </p>

        <div className="prose prose-lg dark:prose-invert max-w-none text-gray-600 dark:text-gray-300 space-y-6">
          <p>
            Welcome to <strong>CryptoWebBuild</strong> (<code>https://cryptowebbuild.com</code>). By engaging our Full-Stack Web Engineering, Technical SEO, or AI Automation services, you agree to the following terms:
          </p>
          <h2>1. 50/50 Risk-Reversal &amp; Milestone Structure</h2>
          <p>
            Standard engagements require a 50% upfront deposit to initiate architecture and development. The remaining 50% is payable only upon live verification of the agreed prototype, website, or custom AI agent on our staging or production environment.
          </p>
          <h2>2. 100% Source Code &amp; IP Ownership</h2>
          <p>
            Upon receipt of final milestone payment, 100% of custom source code, GitHub repositories, database schemas, and deployment configurations are transferred directly to the client with zero vendor lock-in.
          </p>
          <h2>3. Contact</h2>
          <p>
            For contract or service questions, reach us at{' '}
            <a href="mailto:hello@cryptowebbuild.com">hello@cryptowebbuild.com</a> or WhatsApp{' '}
            <a href="https://wa.me/8801618138820">+880 1618-138820</a>.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Terms;