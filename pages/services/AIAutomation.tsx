import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../../components/SEO';

const AIAutomation: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-[#020617] pt-32 pb-24">
      <SEO
        title="AI Automation Services | CryptoWebBuild"
        description="Custom AI agents and community automation for Web3 projects."
        canonical="/services/ai-automation"
      />
      <div className="container mx-auto px-6">
        <h1 className="text-5xl md:text-6xl font-black text-gray-900 dark:text-white mb-8">AI Automation</h1>
        <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mb-12">
          We build custom AI agents that manage your community, automate support, and scale your operations 24/7 without breaking a sweat.
        </p>

        <div className="bg-white dark:bg-[#1e293b] p-8 rounded-[32px] border border-gray-200 dark:border-white/10 mb-12">
          <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">Our AI Guardians</h2>
          <ul className="list-disc pl-6 space-y-3 text-gray-600 dark:text-gray-400 text-lg">
            <li>Trained on your Whitepaper and docs (RAG).</li>
            <li>Instant 24/7 response to FUD and common questions.</li>
            <li>Integrated natively into Discord, Telegram, and your Website.</li>
            <li>Zero hallucination guarantee for critical project data.</li>
          </ul>
        </div>

        <Link to="/contact" className="inline-block bg-purple-600 text-white font-bold py-4 px-8 rounded-xl hover:bg-purple-700 transition">
          Claim Your Custom AI Prototype
        </Link>
      </div>
    </div>
  );
};

export default AIAutomation;
