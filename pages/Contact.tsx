import React from 'react';
import SEO from '../components/SEO';

const Contact: React.FC = () => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "name": "Contact CryptoWebBuild",
    "description": "Get a quote for your Web3 or E-commerce project. Contact Sagor Ahamed.",
    "url": "https://cryptowebbuild.com/contact",
    "mainEntity": {
      "@type": "ProfessionalService",
      "name": "CryptoWebBuild",
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
    <div className="container mx-auto px-6 pt-32 pb-20 bg-gray-50 dark:bg-[#020617] transition-colors duration-300 min-h-screen">
      
      {/* --- SEO Configuration --- */}
      <SEO 
        title="Hire Web3 Developer | Get a Website Quote"
        description="Contact Sagor Ahamed for your crypto, web3, or business project. Get a fast, accurate quote and timeline for your custom website build."
        keywords={['Hire Web3 Developer', 'Website Development Quote', 'Contact Crypto Developer', 'Hire React Freelancer']}
        canonical="/contact"
        schema={jsonLd}
      />

      <div className="max-w-3xl mx-auto">
        
        {/* --- Header Section --- */}
        <div className="text-center mb-12 animate-slide-up">
          <div className="inline-block px-4 py-1.5 mb-4 rounded-full bg-cyan-100 dark:bg-cyan-900/30 border border-cyan-200 dark:border-cyan-500/20 text-cyan-700 dark:text-cyan-400 text-sm font-bold tracking-wider uppercase shadow-sm">
            Open for Work
          </div>
          <h1 className="font-display text-5xl font-black text-gray-900 dark:text-white mb-4 tracking-tight">
            Let's Build Something <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-cyan-500">Extraordinary</span>
          </h1>
          <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed">
            Tell me about your project — I usually reply within a few hours.
          </p>
        </div>

        {/* --- Contact Form --- */}
        <div className="p-8 md:p-12 rounded-[32px] bg-white dark:bg-[#1e293b] border border-gray-200 dark:border-white/5 shadow-xl animate-slide-up" style={{ animationDelay: '0.1s' }}>
          <form action="https://api.web3forms.com/submit" method="POST" className="space-y-8">
            {/* Replace with your Access Key */}
            <input type="hidden" name="access_key" value="75fafb45-1a1e-41ee-86b7-4637bbd35224" />
            <input type="hidden" name="_redirect" value="https://cryptowebbuild.com/thank-you" />

            <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-2">
                    <label htmlFor="name" className="block text-sm font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wide">Your Name</label>
                    <input 
                        id="name" 
                        name="name" 
                        type="text" 
                        required 
                        placeholder="John Doe"
                        className="w-full bg-gray-50 dark:bg-black/20 border border-gray-200 dark:border-white/10 rounded-xl px-5 py-4 text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all hover:border-purple-500/30"
                    />
                </div>

                <div className="space-y-2">
                    <label htmlFor="email" className="block text-sm font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wide">Your Email</label>
                    <input 
                        id="email" 
                        name="email" 
                        type="email" 
                        required 
                        placeholder="you@example.com"
                        className="w-full bg-gray-50 dark:bg-black/20 border border-gray-200 dark:border-white/10 rounded-xl px-5 py-4 text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all hover:border-purple-500/30"
                    />
                </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="category" className="block text-sm font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wide">Project Category</label>
              <select 
                id="category" 
                name="category" 
                required
                defaultValue=""
                className="w-full bg-gray-50 dark:bg-black/20 border border-gray-200 dark:border-white/10 rounded-xl px-5 py-4 text-gray-900 dark:text-white focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all appearance-none cursor-pointer hover:border-purple-500/30"
              >
                <option value="" disabled className="text-gray-400">Select a project type</option>
                <option value="Web3 & Crypto Website">Web3 & Crypto Website</option>
                <option value="Meme Coin Landing Page">Meme Coin Landing Page</option>
                <option value="Token Presale Website">Token Presale Website</option>
                <option value="Business/Company Website">Business/Company Website</option>
                <option value="E-commerce Store">E-commerce Store</option>
                <option value="Portfolio / Blog">Portfolio / Blog</option>
                <option value="Custom Web Project">Custom Web Project</option>
              </select>
            </div>

            <div className="space-y-2">
              <label htmlFor="budget" className="block text-sm font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wide">Project Budget</label>
              <select 
                id="budget" 
                name="budget" 
                required
                defaultValue=""
                className="w-full bg-gray-50 dark:bg-black/20 border border-gray-200 dark:border-white/10 rounded-xl px-5 py-4 text-gray-900 dark:text-white focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all appearance-none cursor-pointer hover:border-purple-500/30"
              >
                <option value="" disabled className="text-gray-400">Select your budget</option>
                <option value="$50 – $150 (Small fixes)">$50 – $150 (Small fixes)</option>
                <option value="$150 – $300 (Starter)">$150 – $300 (Starter)</option>
                <option value="$300 – $600 (Business)">$300 – $600 (Business)</option>
                <option value="$600 – $1200 (Crypto/Web3)">$600 – $1200 (Crypto/Web3)</option>
                <option value="$1200+ (Custom DApp)">$1200+ (Custom DApp)</option>
              </select>
            </div>

            <div className="space-y-2">
              <label htmlFor="message" className="block text-sm font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wide">Your Message</label>
              <textarea 
                id="message" 
                name="message" 
                rows={5}
                required 
                placeholder="Describe your project, timeline, and any specific requirements..."
                className="w-full bg-gray-50 dark:bg-black/20 border border-gray-200 dark:border-white/10 rounded-xl px-5 py-4 text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all resize-none hover:border-purple-500/30"
              ></textarea>
            </div>

            <button 
              type="submit" 
              className="w-full py-4 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-xl text-white font-bold text-lg shadow-lg shadow-purple-500/30 hover:shadow-purple-500/50 hover:scale-[1.02] active:scale-[0.98] transition-all"
            >
              Send Message
            </button>
          </form>
        </div>

        <div className="mt-10 text-center text-gray-500 dark:text-gray-400 text-sm font-medium">
          Prefer direct message? Reach me on <a href="https://t.me/CryptoWebBuild" className="text-cyan-600 dark:text-cyan-400 hover:text-cyan-500 transition-colors underline decoration-dotted underline-offset-4 font-bold">Telegram</a> or <a href="mailto:hello@cryptowebbuild.com" className="text-cyan-600 dark:text-cyan-400 hover:text-cyan-500 transition-colors underline decoration-dotted underline-offset-4 font-bold">Email</a>.
        </div>
      </div>
    </div>
  );
};

export default Contact;