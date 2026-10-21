import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

const ThankYou: React.FC = () => {
  return (
    <div className="container mx-auto px-6 py-20 text-center min-h-[60vh] flex flex-col justify-center items-center">
      <SEO
        title="Thank You | CryptoWebBuild"
        description="Thank you for contacting CryptoWebBuild. We have received your message and will respond shortly."
        noIndex={true}
      />

      <div className="max-w-xl w-full p-8 md:p-12 rounded-[32px] bg-white dark:bg-[#020617] glass-panel border border-gray-200 dark:border-white/5 shadow-xl animate-slide-up">
        <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center text-green-600 dark:text-green-400">
          <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
          </svg>
        </div>

        <h1 className="font-display text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
          Message Received!
        </h1>

        <p className="text-gray-600 dark:text-gray-400 text-lg mb-8 leading-relaxed">
          Thank you for reaching out to <strong className="text-gray-900 dark:text-white">CryptoWebBuild</strong>. Sagor Ahamed will review your project details and get back to you within 24 hours.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/"
            className="px-8 py-3.5 rounded-xl neon-button text-white font-bold transition-transform hover:scale-105"
          >
            Back to Home
          </Link>
          <a
            href="https://wa.me/8801618138820"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3.5 rounded-xl bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 text-gray-900 dark:text-white font-bold hover:border-purple-500/40 transition-colors"
          >
            WhatsApp: 01618-138820
          </a>
        </div>
      </div>
    </div>
  );
};

export default ThankYou;