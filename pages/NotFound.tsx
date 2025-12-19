import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

const NotFound: React.FC = () => {
  return (
    <div className="container mx-auto px-6 pt-32 pb-20 flex flex-col items-center justify-center min-h-[80vh] text-center">
      <SEO 
        title="404 - Page Not Found"
        description="The page you are looking for has been lost in the crypto void."
        image="https://cryptowebbuild.com/hero-avatar.webp"
      />
      
      <div className="relative mb-8">
        <div className="absolute inset-0 bg-purple-500/30 blur-[80px] rounded-full animate-pulse-slow"></div>
        <h1 className="relative font-display text-9xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-white to-white/10 z-10">
          404
        </h1>
      </div>

      <h2 className="font-display text-3xl md:text-4xl font-bold text-text-main mb-6">
        Lost in the <span className="text-purple-500">Void?</span>
      </h2>
      
      <p className="text-text-muted text-lg max-w-lg mx-auto mb-10 leading-relaxed">
        The page you are looking for doesn't exist or has been moved to a new chain. Don't worry, the home base is safe.
      </p>

      <div className="flex flex-col sm:flex-row gap-4">
        <Link 
          to="/" 
          className="px-8 py-3 bg-white text-black font-bold rounded-xl hover:scale-105 transition-transform shadow-lg shadow-white/10"
        >
          Return Home
        </Link>
        <Link 
          to="/services" 
          className="px-8 py-3 bg-white/5 border border-white/10 text-white font-bold rounded-xl hover:bg-white/10 transition-colors"
        >
          View Services
        </Link>
      </div>
    </div>
  );
};

export default NotFound;