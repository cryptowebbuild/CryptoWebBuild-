import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

const FAQ: React.FC = () => {
  const faqs = [
    {
      category: "General",
      questions: [
        {
          q: "What services do you provide?",
          a: <span>I specialize in high-performance web development for <Link to="/services" className="text-purple-500 hover:underline">Crypto/Web3 projects</Link> (landing pages, DApps), E-commerce stores (Shopify, Custom), and professional business websites. My focus is on speed, security, and conversion.</span>
        },
        {
          q: "Do you work with agencies or white-label?",
          a: "Yes, I often partner with marketing agencies and design studios to handle the technical implementation of their client projects. Contact me to discuss white-label arrangements."
        }
      ]
    },
    {
      category: "Technical",
      questions: [
        {
          q: "What tech stack do you use?",
          a: <span>For most static sites and landing pages, I use React, Tailwind CSS, and Cloudflare Pages for instant global loading. Read my guide on <Link to="/static-vs-dynamic-website" className="text-purple-500 hover:underline">Static vs Dynamic Websites</Link> to understand why this is superior for SEO.</span>
        },
        {
          q: "Can you integrate smart contracts?",
          a: "Yes, I build the front-end interfaces (UI) that interact with smart contracts using libraries like Ethers.js, Wagmi, or Solana's Web3.js. Note: I do not write or audit the smart contracts themselves, I connect your UI to them."
        }
      ]
    },
    {
      category: "Project & Payments",
      questions: [
        {
          q: "How much does a website cost?",
          a: <span>Prices depend on complexity. A single-page crypto landing site starts around $150–$300. A full professional site ranges $600–$2,000. See the <Link to="/crypto-website-cost" className="text-purple-500 hover:underline">Full Pricing Breakdown</Link> for details on packages.</span>
        },
        {
          q: "What is the typical timeline?",
          a: "A standard landing page takes 2–5 days. A multi-page website takes 1–2 weeks. I provide a strict timeline during our initial consultation."
        },
        {
          q: "Do you accept Crypto payments?",
          a: "Yes, I accept USDT, USDC, ETH, BNB, and SOL. I also accept traditional payments via Wise or Bank Transfer."
        }
      ]
    }
  ];

  // Schema generation remains simple string for search engines
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.flatMap(cat => cat.questions).map(q => ({
      "@type": "Question",
      "name": q.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": typeof q.a === 'string' ? q.a : "Detailed answer available on page." 
      }
    }))
  };

  return (
    <div className="container mx-auto px-6 pt-32 pb-20">
      <SEO 
        title="Frequently Asked Questions | CryptoWebBuild"
        description="Answers to common questions about web development services, pricing, timelines, and crypto integrations."
      />
      <script type="application/ld+json">
        {JSON.stringify(jsonLd)}
      </script>
      
      <div className="text-center max-w-3xl mx-auto mb-16 animate-slide-up">
        <div className="inline-block px-4 py-1.5 mb-4 rounded-full bg-surface-highlight border border-white/10 text-cyan-400 text-sm font-bold tracking-wider uppercase shadow-sm">
          Support
        </div>
        <h1 className="font-display text-4xl md:text-5xl font-bold text-text-main mb-6">
          Frequently Asked <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">Questions</span>
        </h1>
        <p className="text-lg text-text-muted">
          Everything you need to know about working with me.
        </p>
      </div>

      <div className="max-w-3xl mx-auto space-y-12">
        {faqs.map((section, idx) => (
          <div key={idx} className="animate-slide-up" style={{ animationDelay: `${idx * 0.1}s` }}>
            <h3 className="font-display text-xl font-bold text-text-main mb-6 pl-4 border-l-4 border-purple-500">
              {section.category}
            </h3>
            <div className="space-y-4">
              {section.questions.map((item, i) => (
                <details key={i} className="group glass-panel rounded-2xl bg-surface open:bg-surface-highlight transition-all duration-300">
                  <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
                    <span className="font-bold text-text-main text-lg">{item.q}</span>
                    <span className="transition-transform group-open:rotate-180 text-purple-400">
                      <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
                    </span>
                  </summary>
                  <div className="text-text-muted px-6 pb-6 leading-relaxed">
                    {item.a}
                  </div>
                </details>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-20 text-center animate-slide-up" style={{ animationDelay: '0.4s' }}>
        <div className="glass-panel p-8 rounded-3xl inline-block bg-surface">
          <p className="text-text-main font-bold text-lg mb-2">Still have questions?</p>
          <p className="text-text-muted mb-6">Chat with me directly to discuss your specific needs.</p>
          <Link to="/contact" className="inline-flex items-center justify-center px-8 py-3 bg-gradient-to-r from-purple-600 to-cyan-600 text-white font-bold rounded-xl hover:scale-105 transition-transform shadow-lg shadow-purple-500/20">
            Contact Support
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FAQ;