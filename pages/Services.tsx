import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

const Services: React.FC = () => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Web Development",
    "provider": {
      "@type": "ProfessionalService",
      "name": "CryptoWebBuild"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Web Development Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Crypto & Web3 Sites",
            "description": "Token landing pages, presale flows, and dApp UIs."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "E-Commerce Stores",
            "description": "High-performance online stores with custom integrations."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Business Websites",
            "description": "SEO-optimized corporate websites."
          }
        }
      ]
    }
  };

  return (
    <div className="container mx-auto px-6 pt-32 pb-20">
      <SEO 
        title="Web3 Development Services | Token Launch & E-commerce"
        description="Specialized web development services: Crypto presale pages, smart contract integration, high-speed e-commerce stores, and SEO-optimized business websites."
      />
      <script type="application/ld+json">
        {JSON.stringify(jsonLd)}
      </script>
      <div className="text-center max-w-3xl mx-auto mb-20 animate-slide-up">
        <h1 className="font-display text-5xl md:text-6xl font-bold text-text-main mb-6 tracking-tight">
          Web Development <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Services</span>
        </h1>
        <p className="text-lg text-text-muted">
          Full-stack and static-first websites tailored for performance, SEO, and growth.
        </p>
      </div>

      <div className="grid gap-8">
        {/* Crypto Service */}
        <div className="group relative glass-panel rounded-3xl p-8 md:p-12 overflow-hidden hover:border-purple-500/50 transition-all duration-500 animate-slide-up bg-surface" style={{ animationDelay: '0.1s' }}>
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          
          <div className="relative z-10 flex flex-col md:flex-row gap-8 md:gap-12 items-start">
            <div className="shrink-0">
               <div className="w-24 h-24 rounded-2xl bg-surface-highlight flex items-center justify-center border border-purple-500/20 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500 shadow-lg shadow-purple-900/20">
                 <svg className="w-10 h-10 text-purple-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M6 3L2 9L12 21L22 9L18 3H6Z" />
                    <path d="M11 3L8 9L12 21L16 9L13 3" />
                 </svg>
               </div>
            </div>
            
            <div className="flex-1">
              <h2 className="font-display text-3xl font-bold text-text-main mb-4 group-hover:text-purple-400 transition-colors">Crypto & Web3 Sites</h2>
              <p className="text-text-muted mb-6 leading-relaxed text-lg">
                Token landing pages, tokenomics, presale flows, contract links and on-page SEO tailored for token launches.
              </p>
              <div className="flex flex-wrap gap-3 mb-6">
                {['Tokenomics', 'Presale', 'DApp UI', 'WalletConnect'].map((tag) => (
                  <span key={tag} className="px-4 py-1.5 bg-surface-highlight rounded-full text-sm font-medium text-text-muted border border-white/10 group-hover:border-purple-500/30 transition-colors">
                    {tag}
                  </span>
                ))}
              </div>
              <Link to="/tokenlaunch" className="inline-flex items-center text-purple-500 font-bold hover:text-purple-400 transition-colors">
                View Case Study: SolNova Protocol →
              </Link>
            </div>
          </div>
        </div>

        {/* E-commerce Service */}
        <div className="group relative glass-panel rounded-3xl p-8 md:p-12 overflow-hidden hover:border-cyan-500/50 transition-all duration-500 animate-slide-up bg-surface" style={{ animationDelay: '0.2s' }}>
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          
          <div className="relative z-10 flex flex-col md:flex-row gap-8 md:gap-12 items-start">
            <div className="shrink-0">
               <div className="w-24 h-24 rounded-2xl bg-surface-highlight flex items-center justify-center border border-cyan-500/20 group-hover:scale-110 group-hover:-rotate-3 transition-transform duration-500 shadow-lg shadow-cyan-900/20">
                 <svg className="w-10 h-10 text-cyan-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="9" cy="21" r="1" />
                    <circle cx="20" cy="21" r="1" />
                    <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
                 </svg>
              </div>
            </div>
            
            <div className="flex-1">
              <h2 className="font-display text-3xl font-bold text-text-main mb-4 group-hover:text-cyan-400 transition-colors">E-Commerce Stores</h2>
              <p className="text-text-muted mb-6 leading-relaxed text-lg">
                Product pages, JavaScript carts and secure payment gateways — optimized for speed, UX and SEO.
              </p>
              <div className="flex flex-wrap gap-3 mb-6">
                {['Fast Cart', 'Stripe/PayPal', 'Analytics', 'Conversion'].map((tag) => (
                  <span key={tag} className="px-4 py-1.5 bg-surface-highlight rounded-full text-sm font-medium text-text-muted border border-white/10 group-hover:border-cyan-500/30 transition-colors">
                    {tag}
                  </span>
                ))}
              </div>
              <Link to="/shopfast" className="inline-flex items-center text-cyan-500 font-bold hover:text-cyan-400 transition-colors">
                View Case Study: ShopFast →
              </Link>
            </div>
          </div>
        </div>

        {/* Business */}
        <div className="group relative glass-panel rounded-3xl p-8 md:p-12 overflow-hidden hover:border-blue-500/50 transition-all duration-500 animate-slide-up bg-surface" style={{ animationDelay: '0.3s' }}>
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          
          <div className="relative z-10 flex flex-col md:flex-row gap-8 md:gap-12 items-start">
            <div className="shrink-0">
               <div className="w-24 h-24 rounded-2xl bg-surface-highlight flex items-center justify-center border border-blue-500/20 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500 shadow-lg shadow-blue-900/20">
                 <svg className="w-10 h-10 text-blue-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M3 21h18" />
                    <path d="M5 21V7" />
                    <path d="M9 21V11" />
                    <path d="M13 21V3" />
                    <path d="M17 21v6" />
                 </svg>
              </div>
            </div>
            
            <div className="flex-1">
              <h2 className="font-display text-3xl font-bold text-text-main mb-4 group-hover:text-blue-400 transition-colors">Business Websites</h2>
              <p className="text-text-muted mb-6 leading-relaxed text-lg">
                Responsive websites for local businesses and startups with SEO-focused content and clear CTAs.
              </p>
              <div className="flex flex-wrap gap-3">
                {['Lead Gen', 'Responsive', 'SEO', 'Performance'].map((tag) => (
                  <span key={tag} className="px-4 py-1.5 bg-surface-highlight rounded-full text-sm font-medium text-text-muted border border-white/10 group-hover:border-blue-500/30 transition-colors">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Blogs */}
        <div className="group relative glass-panel rounded-3xl p-8 md:p-12 overflow-hidden hover:border-pink-500/50 transition-all duration-500 animate-slide-up bg-surface" style={{ animationDelay: '0.4s' }}>
          <div className="absolute inset-0 bg-gradient-to-r from-pink-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          
          <div className="relative z-10 flex flex-col md:flex-row gap-8 md:gap-12 items-start">
            <div className="shrink-0">
               <div className="w-24 h-24 rounded-2xl bg-surface-highlight flex items-center justify-center border border-pink-500/20 group-hover:scale-110 group-hover:-rotate-3 transition-transform duration-500 shadow-lg shadow-pink-900/20">
                 <svg className="w-10 h-10 text-pink-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 19l7-7 3 3-7 7-3-3z" />
                    <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" />
                    <path d="M2 2l7.586 7.586" />
                    <circle cx="11" cy="11" r="2" />
                 </svg>
              </div>
            </div>
            
            <div className="flex-1">
              <h2 className="font-display text-3xl font-bold text-text-main mb-4 group-hover:text-pink-400 transition-colors">Blogs & Portfolios</h2>
              <p className="text-text-muted mb-6 leading-relaxed text-lg">
                Fast static blogs and portfolios for personal branding, case studies and organic traffic growth.
              </p>
              <div className="flex flex-wrap gap-3">
                {['Static Blog', 'Content', 'Traffic', 'Branding'].map((tag) => (
                  <span key={tag} className="px-4 py-1.5 bg-surface-highlight rounded-full text-sm font-medium text-text-muted border border-white/10 group-hover:border-pink-500/30 transition-colors">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

      </div>

      <div className="mt-20 text-center">
        <Link to="/contact" className="inline-flex items-center justify-center px-10 py-4 text-lg font-bold text-white transition-all duration-200 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-xl hover:scale-105 shadow-[0_0_20px_rgba(124,58,237,0.4)]">
          Request a Quote
        </Link>
      </div>
    </div>
  );
};

export default Services;