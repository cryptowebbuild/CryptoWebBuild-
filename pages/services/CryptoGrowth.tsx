import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../../components/SEO';

const CryptoGrowth: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-[#020617] pt-32 pb-24">
      <SEO
        title="Crypto Growth Funnels | CryptoWebBuild"
        description="Marketing and promotion infrastructure for Web3 brands."
        canonical="/services/crypto-growth"
      />
      <div className="container mx-auto px-6">
        <h1 className="text-5xl md:text-6xl font-black text-gray-900 dark:text-white mb-8">Crypto Growth</h1>
        <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mb-12">
          We don't just build websites; we engineer high-converting marketing funnels designed specifically for the Web3 and Crypto ecosystem.
        </p>

        <div className="bg-white dark:bg-[#1e293b] p-8 rounded-[32px] border border-gray-200 dark:border-white/10 mb-12">
          <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">Conversion Funnels</h2>
           <ul className="list-disc pl-6 space-y-3 text-gray-600 dark:text-gray-400 text-lg">
            <li>Landing pages optimized for investor conversion.</li>
            <li>Technical SEO to dominate search rankings for your niche.</li>
            <li>Integrated analytics and tracking architecture.</li>
            <li>Viral mechanism engineering for Meme Coins and NFT launches.</li>
          </ul>
        </div>

        <Link to="/contact" className="inline-block bg-cyan-600 text-white font-bold py-4 px-8 rounded-xl hover:bg-cyan-700 transition">
          Scale Your Web3 Brand
        </Link>
      </div>
    </div>
  );
};

export default CryptoGrowth;
