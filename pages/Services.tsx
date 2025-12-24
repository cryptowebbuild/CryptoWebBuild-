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
    <div className="container mx-auto px-6 pt-32 pb-20 bg-gray-50 dark:bg-[#020617] transition-colors duration-300 min-h-screen">
      
      {/* --- SEO Configuration --- */}
      <SEO 
        title="Web3 & E-commerce Development Services | Pricing & Packages"
        description="View my web development services: Crypto presale sites, meme coin landing pages, and high-performance e-commerce stores. Clear pricing and packages."
        keywords={[
          'Web Development Services', 
          'Crypto Website Pricing', 
          'E-commerce Development Packages', 
          'Custom Website Cost', 
          'Business Website Design'
        ]}
        canonical="/services"
        schema={jsonLd}
      />

      {/* --- Header Section --- */}
      <div className="text-center max-w-4xl mx-auto mb-20 animate-slide-up">
        <div className="inline-block px-4 py-1.5 mb-6 rounded-full bg-white dark:bg-white/5 border border-purple-500/30 text-purple-600 dark:text-purple-400 text-sm font-bold tracking-wider uppercase shadow-sm">
            Professional Solutions
        </div>
        <h1 className="font-display text-5xl md:text-7xl font-black text-gray-900 dark:text-white mb-6 tracking-tight">
          Web3 & E-commerce <br/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-purple-600 dark:from-cyan-400 dark:to-purple-400">Development Services</span>
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
          Full-stack and static-first websites tailored for performance, SEO, and growth.
        </p>
      </div>

      <div className="grid gap-8 max-w-5xl mx-auto">
        
        {/* Service 1: Crypto & Web3 */}
        <div className="group relative rounded-[32px] p-8 md:p-12 overflow-hidden bg-white dark:bg-[#1e293b] border border-gray-200 dark:border-white/5 hover:border-purple-500/50 transition-all duration-500 animate-slide-up shadow-sm hover:shadow-2xl hover:shadow-purple-500/10" style={{ animationDelay: '0.1s' }}>
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          
          <div className="relative z-10 flex flex-col md:flex-row gap-8 md:gap-12 items-start">
            <div className="shrink-0">
               <div className="w-24 h-24 rounded-2xl bg-purple-50 dark:bg-purple-900/20 flex items-center justify-center border border-purple-200 dark:border-purple-500/20 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500">
                 <svg className="w-10 h-10 text-purple-600 dark:text-purple-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M6 3L2 9L12 21L22 9L18 3H6Z" />
                    <path d="M11 3L8 9L12 21L16 9L13 3" />
                 </svg>
               </div>
            </div>
            
            <div className="flex-1">
              <h2 className="font-display text-3xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">Crypto & Web3 Sites</h2>
              <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed text-lg font-medium">
                Token landing pages, tokenomics charts, presale flows, contract verification links and on-page SEO tailored for token launches.
              </p>
              <div className="flex flex-wrap gap-3 mb-6">
                {['Tokenomics', 'Presale', 'DApp UI', 'WalletConnect'].map((tag) => (
                  <span key={tag} className="px-4 py-1.5 bg-gray-100 dark:bg-white/5 rounded-full text-sm font-bold text-gray-600 dark:text-gray-400 border border-gray-200 dark:border-white/10 group-hover:border-purple-500/30 transition-colors">
                    {tag}
                  </span>
                ))}
              </div>
              
              {/* Internal Links */}
              <div className="flex flex-col sm:flex-row gap-4 text-sm font-bold mt-8 pt-6 border-t border-gray-100 dark:border-white/10">
                  <Link to="/tokenlaunch" className="flex items-center text-purple-600 dark:text-purple-400 hover:text-purple-500 transition-colors">
                    <span className="bg-purple-100 dark:bg-purple-900/30 px-2 py-0.5 rounded mr-2 text-xs uppercase">Case Study</span> SolNova Protocol →
                  </Link>
                  <Link to="/crypto-website-cost" className="flex items-center text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">
                    <span className="bg-gray-100 dark:bg-white/10 px-2 py-0.5 rounded mr-2 text-xs uppercase">Guide</span> Pricing Breakdown →
                  </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Service 2: E-commerce */}
        <div className="group relative rounded-[32px] p-8 md:p-12 overflow-hidden bg-white dark:bg-[#1e293b] border border-gray-200 dark:border-white/5 hover:border-cyan-500/50 transition-all duration-500 animate-slide-up shadow-sm hover:shadow-2xl hover:shadow-cyan-500/10" style={{ animationDelay: '0.2s' }}>
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          
          <div className="relative z-10 flex flex-col md:flex-row gap-8 md:gap-12 items-start">
            <div className="shrink-0">
               <div className="w-24 h-24 rounded-2xl bg-cyan-50 dark:bg-cyan-900/20 flex items-center justify-center border border-cyan-200 dark:border-cyan-500/20 group-hover:scale-110 group-hover:-rotate-3 transition-transform duration-500">
                 <svg className="w-10 h-10 text-cyan-600 dark:text-cyan-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="9" cy="21" r="1" />
                    <circle cx="20" cy="21" r="1" />
                    <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
                 </svg>
              </div>
            </div>
            
            <div className="flex-1">
              <h2 className="font-display text-3xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">E-Commerce Stores</h2>
              <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed text-lg font-medium">
                High-performance product pages, JavaScript carts, and secure payment gateways optimized for speed, UX, and SEO.
              </p>
              <div className="flex flex-wrap gap-3 mb-6">
                {['Fast Cart', 'Stripe/PayPal', 'Analytics', 'Conversion'].map((tag) => (
                  <span key={tag} className="px-4 py-1.5 bg-gray-100 dark:bg-white/5 rounded-full text-sm font-bold text-gray-600 dark:text-gray-400 border border-gray-200 dark:border-white/10 group-hover:border-cyan-500/30 transition-colors">
                    {tag}
                  </span>
                ))}
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 text-sm font-bold mt-8 pt-6 border-t border-gray-100 dark:border-white/10">
                  <Link to="/shopfast" className="flex items-center text-cyan-600 dark:text-cyan-400 hover:text-cyan-500 transition-colors">
                    <span className="bg-cyan-100 dark:bg-cyan-900/30 px-2 py-0.5 rounded mr-2 text-xs uppercase">Case Study</span> ShopFast Store →
                  </Link>
                  <Link to="/static-vs-dynamic-website" className="flex items-center text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">
                    <span className="bg-gray-100 dark:bg-white/10 px-2 py-0.5 rounded mr-2 text-xs uppercase">Guide</span> Why Static is Faster →
                  </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Service 3: Business Websites */}
        <div className="group relative rounded-[32px] p-8 md:p-12 overflow-hidden bg-white dark:bg-[#1e293b] border border-gray-200 dark:border-white/5 hover:border-blue-500/50 transition-all duration-500 animate-slide-up shadow-sm hover:shadow-2xl hover:shadow-blue-500/10" style={{ animationDelay: '0.3s' }}>
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          
          <div className="relative z-10 flex flex-col md:flex-row gap-8 md:gap-12 items-start">
            <div className="shrink-0">
               <div className="w-24 h-24 rounded-2xl bg-blue-50 dark:bg-blue-900/20 flex items-center justify-center border border-blue-200 dark:border-blue-500/20 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500">
                 <svg className="w-10 h-10 text-blue-600 dark:text-blue-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M3 21h18" />
                    <path d="M5 21V7" />
                    <path d="M9 21V11" />
                    <path d="M13 21V3" />
                    <path d="M17 21v6" />
                 </svg>
              </div>
            </div>
            
            <div className="flex-1">
              <h2 className="font-display text-3xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">Business Websites</h2>
              <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed text-lg font-medium">
                Responsive websites for local businesses, startups, and agencies with SEO-focused content structure and clear CTAs.
              </p>
              <div className="flex flex-wrap gap-3 mb-6">
                {['Lead Gen', 'Responsive', 'SEO', 'Performance'].map((tag) => (
                  <span key={tag} className="px-4 py-1.5 bg-gray-100 dark:bg-white/5 rounded-full text-sm font-bold text-gray-600 dark:text-gray-400 border border-gray-200 dark:border-white/10 group-hover:border-blue-500/30 transition-colors">
                    {tag}
                  </span>
                ))}
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 text-sm font-bold mt-8 pt-6 border-t border-gray-100 dark:border-white/10">
                  <Link to="/website-builder-vs-developer" className="flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-500 transition-colors">
                    <span className="bg-blue-100 dark:bg-blue-900/30 px-2 py-0.5 rounded mr-2 text-xs uppercase">Deep Dive</span> Website Builders vs Developers →
                  </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Service 4: Blogs & Portfolios */}
        <div className="group relative rounded-[32px] p-8 md:p-12 overflow-hidden bg-white dark:bg-[#1e293b] border border-gray-200 dark:border-white/5 hover:border-pink-500/50 transition-all duration-500 animate-slide-up shadow-sm hover:shadow-2xl hover:shadow-pink-500/10" style={{ animationDelay: '0.4s' }}>
          <div className="absolute inset-0 bg-gradient-to-r from-pink-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          
          <div className="relative z-10 flex flex-col md:flex-row gap-8 md:gap-12 items-start">
            <div className="shrink-0">
               <div className="w-24 h-24 rounded-2xl bg-pink-50 dark:bg-pink-900/20 flex items-center justify-center border border-pink-200 dark:border-pink-500/20 group-hover:scale-110 group-hover:-rotate-3 transition-transform duration-500">
                 <svg className="w-10 h-10 text-pink-600 dark:text-pink-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 19l7-7 3 3-7 7-3-3z" />
                    <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" />
                    <path d="M2 2l7.586 7.586" />
                    <circle cx="11" cy="11" r="2" />
                 </svg>
              </div>
            </div>
            
            <div className="flex-1">
              <h2 className="font-display text-3xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-pink-600 dark:group-hover:text-pink-400 transition-colors">Blogs & Portfolios</h2>
              <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed text-lg font-medium">
                Fast static blogs and portfolios for personal branding, case studies, and organic traffic growth.
              </p>
              <div className="flex flex-wrap gap-3 mb-6">
                {['Static Blog', 'Content', 'Traffic', 'Branding'].map((tag) => (
                  <span key={tag} className="px-4 py-1.5 bg-gray-100 dark:bg-white/5 rounded-full text-sm font-bold text-gray-600 dark:text-gray-400 border border-gray-200 dark:border-white/10 group-hover:border-pink-500/30 transition-colors">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

      </div>

      <div className="mt-20 text-center">
        <Link to="/contact" className="inline-flex items-center justify-center px-10 py-4 text-lg font-bold text-white transition-all duration-200 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-xl hover:scale-105 shadow-xl shadow-purple-500/20">
          Request a Custom Quote
        </Link>
      </div>
    </div>
  );
};

export default Services;