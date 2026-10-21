import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../../components/SEO';

const AIAutomation: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-[#020617] pt-16 pb-24">
      <SEO
        title="AI Automation & Custom RAG Agents | CryptoWebBuild"
        description="Custom RAG-trained AI agents, OpenClaw workflow automation, and 24/7 support guardians for Website, WhatsApp, Telegram & Discord."
        canonical="/services/ai-automation"
        schemaType="Service"
      />
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="inline-block px-4 py-1.5 mb-6 rounded-full bg-white dark:bg-white/5 border border-purple-500/30 text-purple-600 dark:text-purple-400 text-sm font-bold tracking-wider uppercase shadow-sm">
          Autonomous AI Infrastructure
        </div>
        <h1 className="font-display text-5xl md:text-6xl font-black text-gray-900 dark:text-white mb-8">
          AI Automation &amp;{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-cyan-500">
            RAG Guardians
          </span>
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mb-12 leading-relaxed">
          We build custom RAG-trained AI agents and OpenClaw workflows that manage your customer support, qualify leads, and scale your operations 24/7 without breaking a sweat.
        </p>

        <div className="bg-white dark:bg-[#1e293b] p-8 md:p-12 rounded-[32px] border border-gray-200 dark:border-white/10 mb-12 shadow-xl">
          <h2 className="font-display text-3xl font-bold mb-6 text-gray-900 dark:text-white">
            What Our AI Guardians Deliver
          </h2>
          <ul className="list-disc pl-6 space-y-4 text-gray-600 dark:text-gray-300 text-lg">
            <li>Trained on your product catalog, SOPs, PostgreSQL database, or Whitepaper (Vector RAG).</li>
            <li>Instant &lt; 0.8s 24/7 responses to customer queries, order lookups, and investor questions.</li>
            <li>Integrated natively into your Website, WhatsApp Business, Telegram, and Discord.</li>
            <li>Automated B2B lead generation and browser workflows powered by Python &amp; OpenClaw.</li>
            <li>Zero-hallucination guardrails for critical pricing and business data.</li>
          </ul>
        </div>

        <div className="flex flex-wrap gap-4">
          <Link
            to="/contact"
            className="inline-block neon-button text-white font-bold py-4 px-8 rounded-xl shadow-lg"
          >
            Claim Your 48-Hour AI Prototype
          </Link>
          <a
            href="https://wa.me/8801618138820?text=Hi%20Sagor%2C%20I%27m%20interested%20in%20AI%20Automation%20%26%20RAG%20Agents."
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

export default AIAutomation;
