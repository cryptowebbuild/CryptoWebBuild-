import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

const NotFound: React.FC = () => {
  return (
    <div className="container mx-auto px-6 py-20 text-center min-h-[60vh] flex flex-col justify-center items-center">
      <SEO
        title="404 - Page Not Found | CryptoWebBuild"
        description="The page you are looking for does not exist."
        noIndex={true}
      />

      <div className="max-w-xl w-full p-8 md:p-12 rounded-[32px] bg-white dark:bg-[#020617] glass-panel border border-gray-200 dark:border-white/5 shadow-xl animate-slide-up">
        <div className="font-display text-7xl md:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-cyan-500 mb-4">
          404
        </div>
        <h1 className="font-display text-3xl font-bold text-gray-900 dark:text-white mb-4">
          Page Not Found
        </h1>
        <p className="text-gray-600 dark:text-gray-400 mb-8">
          The route you requested has moved or doesn&apos;t exist. Explore our core engineering services or case studies below.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/" className="px-8 py-3.5 rounded-xl neon-button text-white font-bold">
            Return Home
          </Link>
          <Link
            to="/projects"
            className="px-8 py-3.5 rounded-xl bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 text-gray-900 dark:text-white font-bold"
          >
            View Case Studies
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;