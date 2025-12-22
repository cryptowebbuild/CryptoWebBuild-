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
    <div className="container mx-auto px-6 pt-32 pb-20">
      <SEO 
        title="Hire Web3 Developer | Get a Website Quote"
        description="Contact Sagor Ahamed for your crypto, web3, or business project. Get a fast, accurate quote and timeline for your custom website build."
        keywords={['Hire Web3 Developer', 'Website Development Quote', 'Contact Crypto Developer', 'Hire React Freelancer']}
        canonical="/contact"
      />
      <script type="application/ld+json">
        {JSON.stringify(jsonLd)}
      </script>
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12 animate-slide-up">
          <div className="inline-block px-4 py-1.5 mb-4 rounded-full bg-surface-highlight border border-border-glass text-cyan-600 dark:text-cyan-400 text-sm font-bold tracking-wider uppercase shadow-sm">
            Open for Work
          </div>
          <h1 className="font-display text-5xl font-bold text-text-main mb-4">Contact Sagor Ahamed</h1>
          <p className="text-text-muted text-lg">Tell me about your project — I usually reply within a few hours.</p>
        </div>

        <div className="glass-panel p-8 md:p-12 rounded-3xl shadow-xl shadow-purple-900/10 border-t border-purple-500/20 animate-slide-up bg-surface" style={{ animationDelay: '0.2s' }}>
          <form action="https://api.web3forms.com/submit" method="POST" className="space-y-8">
            <input type="hidden" name="access_key" value="75fafb45-1a1e-41ee-86b7-4637bbd35224" />
            <input type="hidden" name="_redirect" value="https://cryptowebbuild.com/thank-you" />

            <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-2">
                    <label htmlFor="name" className="block text-sm font-bold text-text-muted uppercase tracking-wide">Your Name</label>
                    <input 
                        id="name" 
                        name="name" 
                        type="text" 
                        required 
                        placeholder="John Doe"
                        className="w-full bg-surface-highlight border border-border-glass rounded-xl px-5 py-4 text-text-main placeholder-text-muted/50 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all hover:border-purple-500/30"
                    />
                </div>

                <div className="space-y-2">
                    <label htmlFor="email" className="block text-sm font-bold text-text-muted uppercase tracking-wide">Your Email</label>
                    <input 
                        id="email" 
                        name="email" 
                        type="email" 
                        required 
                        placeholder="you@example.com"
                        className="w-full bg-surface-highlight border border-border-glass rounded-xl px-5 py-4 text-text-main placeholder-text-muted/50 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all hover:border-purple-500/30"
                    />
                </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="category" className="block text-sm font-bold text-text-muted uppercase tracking-wide">Project Category</label>
              <select 
                id="category" 
                name="category" 
                required
                defaultValue=""
                className="w-full bg-surface-highlight border border-border-glass rounded-xl px-5 py-4 text-text-main focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all appearance-none cursor-pointer hover:border-purple-500/30"
              >
                <option value="" disabled className="text-text-muted">Select a project type</option>
                <option className="text-slate-900 dark:text-slate-100 bg-white dark:bg-slate-800">Web3 & Crypto Website</option>
                <option className="text-slate-900 dark:text-slate-100 bg-white dark:bg-slate-800">Meme Coin Landing Page</option>
                <option className="text-slate-900 dark:text-slate-100 bg-white dark:bg-slate-800">Token Presale Website</option>
                <option className="text-slate-900 dark:text-slate-100 bg-white dark:bg-slate-800">Business/Company Website</option>
                <option className="text-slate-900 dark:text-slate-100 bg-white dark:bg-slate-800">E-commerce Store</option>
                <option className="text-slate-900 dark:text-slate-100 bg-white dark:bg-slate-800">Portfolio / Blog</option>
                <option className="text-slate-900 dark:text-slate-100 bg-white dark:bg-slate-800">Custom Web Project</option>
              </select>
            </div>

            <div className="space-y-2">
              <label htmlFor="budget" className="block text-sm font-bold text-text-muted uppercase tracking-wide">Project Budget</label>
              <select 
                id="budget" 
                name="budget" 
                required
                defaultValue=""
                className="w-full bg-surface-highlight border border-border-glass rounded-xl px-5 py-4 text-text-main focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all appearance-none cursor-pointer hover:border-purple-500/30"
              >
                <option value="" disabled className="text-text-muted">Select your budget</option>
                <option className="text-slate-900 dark:text-slate-100 bg-white dark:bg-slate-800">$50 – $150 (Small fixes)</option>
                <option className="text-slate-900 dark:text-slate-100 bg-white dark:bg-slate-800">$150 – $300 (Starter)</option>
                <option className="text-slate-900 dark:text-slate-100 bg-white dark:bg-slate-800">$300 – $600 (Business)</option>
                <option className="text-slate-900 dark:text-slate-100 bg-white dark:bg-slate-800">$600 – $1200 (Crypto/Web3)</option>
                <option className="text-slate-900 dark:text-slate-100 bg-white dark:bg-slate-800">$1200+ (Custom DApp)</option>
              </select>
            </div>

            <div className="space-y-2">
              <label htmlFor="message" className="block text-sm font-bold text-text-muted uppercase tracking-wide">Your Message</label>
              <textarea 
                id="message" 
                name="message" 
                rows={5}
                required 
                placeholder="Describe your project, timeline, and any specific requirements..."
                className="w-full bg-surface-highlight border border-border-glass rounded-xl px-5 py-4 text-text-main placeholder-text-muted/50 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all resize-none hover:border-purple-500/30"
              ></textarea>
            </div>

            <button 
              type="submit" 
              className="w-full py-4 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-xl text-white font-bold text-lg shadow-lg shadow-purple-900/40 hover:shadow-purple-900/60 hover:scale-[1.01] transition-all"
            >
              Send Message
            </button>
          </form>
        </div>

        <div className="mt-10 text-center text-text-muted text-sm">
          Prefer direct message? Reach me on <a href="https://t.me/CryptoWebBuild" className="text-cyan-600 dark:text-cyan-400 hover:text-cyan-500 transition-colors underline decoration-dotted underline-offset-4">Telegram</a> or <a href="mailto:hello@cryptowebbuild.com" className="text-cyan-600 dark:text-cyan-400 hover:text-cyan-500 transition-colors underline decoration-dotted underline-offset-4">Email</a>.
        </div>
      </div>
    </div>
  );
};

export default Contact;