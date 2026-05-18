import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../../components/SEO';

const Web3Development: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-[#020617] pt-32 pb-24">
      <SEO
        title="Web3 Development Services | CryptoWebBuild"
        description="Full-stack platforms, dApps, and elite Web3 infrastructure."
        canonical="/services/web3-development"
      />
      <div className="container mx-auto px-6">
        <h1 className="text-5xl md:text-6xl font-black text-gray-900 dark:text-white mb-8">Web3 Development</h1>
        <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mb-12">
          From high-performance token launch platforms to complex dApps, we build the infrastructure that powers the next generation of the internet.
        </p>

        <div className="bg-white dark:bg-[#1e293b] p-8 rounded-[32px] border border-gray-200 dark:border-white/10 mb-12">
          <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">Elite Infrastructure</h2>
           <ul className="list-disc pl-6 space-y-3 text-gray-600 dark:text-gray-400 text-lg">
            <li>Zero-latency RPC node integration.</li>
            <li>Static Site Generation (SSG) to handle 100k+ concurrent users during launches.</li>
            <li>Seamless wallet connections (Solana, Ethereum, L2s).</li>
            <li>Smart contract frontend integration.</li>
          </ul>
        </div>

        <Link to="/contact" className="inline-block bg-blue-600 text-white font-bold py-4 px-8 rounded-xl hover:bg-blue-700 transition">
          Start Your Web3 Project
        </Link>
      </div>
    </div>
  );
};

export default Web3Development;
