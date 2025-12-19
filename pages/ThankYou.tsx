import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

const ThankYou: React.FC = () => {
  return (
    <div className="container mx-auto px-6 pt-40 pb-20 text-center">
      <SEO 
        title="Message Received | CryptoWebBuild" 
        description="Thank you for your message."
        noIndex={true} 
      />
      <div className="glass-panel p-12 rounded-3xl max-w-2xl mx-auto border-t border-green-500/30 shadow-[0_0_50px_rgba(34,197,94,0.1)] bg-surface">
        <div className="w-24 h-24 bg-gradient-to-br from-green-500/20 to-green-500/10 text-green-500 rounded-full flex items-center justify-center mx-auto mb-8 text-5xl shadow-lg shadow-green-900/20 border border-green-500/20">
          ✓
        </div>
        <h1 className="font-display text-4xl md:text-5xl font-bold text-text-main mb-6">
          Message Received
        </h1>
        <p className="text-text-muted text-lg mb-10 leading-relaxed max-w-md mx-auto">
          Thanks for reaching out! I'll review your project brief and reply within <strong className="text-green-500">24 hours</strong>.
        </p>
        
        <div className="flex flex-wrap gap-6 justify-center">
          <Link to="/" className="px-8 py-3 bg-surface hover:bg-surface-highlight text-text-main font-bold rounded-xl transition-colors border border-white/10">
            Back Home
          </Link>
          <Link to="/projects" className="px-8 py-3 bg-gradient-to-r from-purple-600 to-purple-500 hover:to-purple-400 text-white font-bold rounded-xl transition-all shadow-lg hover:shadow-purple-900/40">
            View Portfolio
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ThankYou;