import React, { useState } from 'react';
import SEO from '../components/SEO';

const Contact: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);
    formData.append("access_key", "3e10ed03-3f9f-406f-b087-1871c9dec81a");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
      const data = await response.json();

      if (data.success) {
        setIsSuccess(true);
      }
    } catch (error) {
      console.error("Form submission error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "name": "Contact CryptoWebBuild",
    "description": "Claim your 48-Hour AI Prototype. Contact CryptoWebBuild for Elite AI Automation & Web3 Infrastructure.",
    "url": "https://cryptowebbuild.com/contact",
    "mainEntity": {
      "@type": "ProfessionalService",
      "name": "CryptoWebBuild",
      "logo": {
        "@type": "ImageObject",
        "url": "https://cryptowebbuild.com/hero-avatar.webp"
      },
      "image": "https://cryptowebbuild.com/logo.png",
      "priceRange": "$$-$$$",
      "telephone": "",
      "email": "hello@cryptowebbuild.com",
      "contactPoint": {
        "@type": "ContactPoint",
        "contactType": "sales",
        "email": "hello@cryptowebbuild.com",
        "availableLanguage": ["English"]
      }
    }
  };

  return (
    <div className="container mx-auto px-6 bg-gray-50 dark:bg-[#020617] transition-colors duration-300 min-h-screen">
      
      {/* --- SEO Configuration --- */}
      <SEO title="Contact CryptoWebBuild | AI & Web3 Agency"
        description="Ready to scale? Contact CryptoWebBuild for custom AI Agent infrastructure, Web3 Growth Funnels, and 24/7 Community Guardians."
        keywords={['Hire Web3 Developer', 'Website Development Quote', 'Contact Crypto Developer', 'Hire React Freelancer']}
        canonical="/contact"
        schema={jsonLd}
      />

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        
        {/* --- Header Section --- */}
        <div className="text-center lg:text-left mb-12 lg:mb-0 gpu-accelerated animate-slide-up">
          <div className="inline-block px-4 py-1.5 mb-4 rounded-full bg-cyan-100 dark:bg-cyan-900/30 border border-cyan-200 dark:border-cyan-500/20 text-cyan-700 dark:text-cyan-400 text-sm font-bold tracking-wider uppercase shadow-sm">
            Open for Work
          </div>
          <h1 className="font-display text-5xl md:text-6xl font-black text-gray-900 dark:text-white mb-6 tracking-tight">
            Claim Your 48-Hour <br className="hidden lg:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-cyan-500">AI Prototype</span>
          </h1>
          <p className="text-gray-600 dark:text-gray-400 text-lg md:text-xl leading-relaxed max-w-xl mx-auto lg:mx-0">
            Pay 50% upfront. Pay the final 50% ONLY when you see your custom AI Agent perfectly answering questions from your Whitepaper in a live test. Zero risk.
          </p>

          <div className="mt-10 hidden lg:block text-gray-600 dark:text-gray-400 text-sm font-medium">
            Prefer direct message? Reach me on <a href="https://t.me/CryptoWebBuild" target="_blank" rel="noopener noreferrer" className="text-cyan-600 dark:text-cyan-400 hover:text-cyan-500 transition-colors underline decoration-dotted underline-offset-4 font-bold">Telegram</a> or <a href="mailto:hello@cryptowebbuild.com" className="text-cyan-600 dark:text-cyan-400 hover:text-cyan-500 transition-colors underline decoration-dotted underline-offset-4 font-bold">Email</a>.
          </div>
        </div>

        {/* --- Contact Form --- */}
        <div className="p-8 md:p-12 rounded-[32px] bg-white dark:bg-[#020617] glass-panel border border-gray-200 dark:border-white/5 shadow-xl gpu-accelerated animate-slide-up" style={{ animationDelay: '0.1s' }}>
          {isSuccess ? (
            <div className="p-8 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-2xl text-center">
              <svg className="w-16 h-16 text-green-500 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Request received!</h3>
              <p className="text-gray-600 dark:text-gray-400">We'll be in touch within 24 hours.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                      <label htmlFor="name" className="block text-sm font-bold text-gray-600 dark:text-gray-400 uppercase tracking-[0.2em] text-xs">Your Name</label>
                      <input
                          id="name"
                          name="name"
                          type="text"
                          required
                          placeholder="John Doe"
                          className="w-full bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/5 rounded-xl px-5 py-4 text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all hover:border-purple-500/30"
                      />
                  </div>

                  <div className="space-y-2">
                      <label htmlFor="email" className="block text-sm font-bold text-gray-600 dark:text-gray-400 uppercase tracking-[0.2em] text-xs">Your Email</label>
                      <input
                          id="email"
                          name="email"
                          type="email"
                          required
                          placeholder="you@example.com"
                          className="w-full bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/5 rounded-xl px-5 py-4 text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all hover:border-purple-500/30"
                      />
                  </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="category" className="block text-sm font-bold text-gray-600 dark:text-gray-400 uppercase tracking-[0.2em] text-xs">Project Category</label>
                <select
                  id="category"
                  name="category"
                  required
                  defaultValue=""
                  className="w-full bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/5 rounded-xl px-5 py-4 text-gray-900 dark:text-white focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all appearance-none cursor-pointer hover:border-purple-500/30"
                >
                  <option value="" disabled className="text-gray-400">Select a project type</option>
                  <option value="Custom AI Knowledge Base Agent">Custom AI Knowledge Base Agent</option>
                  <option value="Automated Web3 Sales Funnel">Automated Web3 Sales Funnel</option>
                  <option value="Elite Crypto Platform UI/UX">Elite Crypto Platform UI/UX</option>
                  <option value="Token Presale Architecture">Token Presale Architecture</option>
                  <option value="Headless E-commerce Ecosystem">Headless E-commerce Ecosystem</option>
                  <option value="Custom Web Project">Custom Web Project</option>
                </select>
              </div>

              <div className="space-y-2">
                <label htmlFor="budget" className="block text-sm font-bold text-gray-600 dark:text-gray-400 uppercase tracking-[0.2em] text-xs">Project Budget</label>
                <select
                  id="budget"
                  name="budget"
                  required
                  defaultValue=""
                  className="w-full bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/5 rounded-xl px-5 py-4 text-gray-900 dark:text-white focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all appearance-none cursor-pointer hover:border-purple-500/30"
                >
                  <option value="" disabled className="text-gray-400">Select your budget</option>
                  <option value="$500 – $1,000 (Small Automation)">$500 – $1,000 (Small Automation)</option>
                  <option value="$2,000 – $5,000 (AI Pilot)">$2,000 – $5,000 (AI Pilot)</option>
                  <option value="$5,000 – $10,000 (Full Integration)">$5,000 – $10,000 (Full Integration)</option>
                  <option value="$10,000+ (Enterprise Architecture)">$10,000+ (Enterprise Architecture)</option>
                </select>
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="block text-sm font-bold text-gray-600 dark:text-gray-400 uppercase tracking-[0.2em] text-xs">Your Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  placeholder="Describe your project, timeline, and any specific requirements..."
                  className="w-full bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/5 rounded-xl px-5 py-4 text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all resize-none hover:border-purple-500/30"
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 neon-button rounded-xl text-white font-bold text-lg shadow-lg shadow-purple-500/30 hover:shadow-purple-500/50 hover:scale-[1.02] active:scale-[0.98] transition-all disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>
            </form>
          )}
        </div>

        <div className="mt-10 lg:hidden text-center text-gray-600 dark:text-gray-400 text-sm font-medium">
          Prefer direct message? Reach me on <a href="https://t.me/CryptoWebBuild" target="_blank" rel="noopener noreferrer" className="text-cyan-600 dark:text-cyan-400 hover:text-cyan-500 transition-colors underline decoration-dotted underline-offset-4 font-bold">Telegram</a> or <a href="mailto:hello@cryptowebbuild.com" className="text-cyan-600 dark:text-cyan-400 hover:text-cyan-500 transition-colors underline decoration-dotted underline-offset-4 font-bold">Email</a>.
        </div>
      </div>
    </div>
  );
};

export default Contact;
