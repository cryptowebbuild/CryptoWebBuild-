import React, { useState, useId } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

const FAQItem = ({ question, answer }: { question: string, answer: React.ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const contentId = useId();

  return (
    <div className="group border border-gray-200 dark:border-white/10 rounded-2xl bg-white dark:bg-[#1e293b] overflow-hidden transition-all duration-300 hover:border-purple-500/30">
      <button
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-controls={contentId}
        className="w-full flex items-center justify-between p-6 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-500 focus-visible:ring-inset rounded-2xl"
      >
        <span className="font-bold text-lg text-gray-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">{question}</span>
        <span className={`transform transition-transform duration-300 text-purple-600 ${isOpen ? 'rotate-180' : ''}`}>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>
        </span>
      </button>
      <div
        id={contentId}
        role="region"
        aria-label={question}
        className={`transition-all duration-300 ease-in-out overflow-hidden ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
      >
        <div className="p-6 pt-0 text-gray-600 dark:text-gray-400 leading-relaxed border-t border-gray-100 dark:border-white/5 mt-2">
          {answer}
        </div>
      </div>
    </div>
  );
};

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
          a: <span>For most static sites and landing pages, I use React, Tailwind CSS, and Cloudflare Pages for instant global loading. Read my guide on <Link to="/blog/static-vs-dynamic" className="text-purple-500 hover:underline">Static vs Dynamic Websites</Link> to understand why this is superior for SEO.</span>
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
          a: <span>Prices depend on complexity. A single-page crypto landing site starts around $150–$300. A full professional site ranges $600–$2,000. See the <Link to="/blog/crypto-cost" className="text-purple-500 hover:underline">Full Pricing Breakdown</Link> for details on packages.</span>
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
    <div className="container mx-auto px-6 pt-32 pb-20 bg-gray-50 dark:bg-[#020617] transition-colors duration-300 min-h-screen">
      <SEO 
        title="Frequently Asked Questions | CryptoWebBuild"
        description="Answers to common questions about web development services, pricing, timelines, and crypto integrations."
      />
      <script type="application/ld+json">
        {JSON.stringify(jsonLd)}
      </script>
      
      <div className="text-center max-w-3xl mx-auto mb-16 animate-slide-up">
        <div className="inline-block px-4 py-1.5 mb-4 rounded-full bg-cyan-100 dark:bg-cyan-900/30 border border-cyan-200 dark:border-cyan-500/20 text-cyan-700 dark:text-cyan-400 text-sm font-bold tracking-wider uppercase shadow-sm">
          Support
        </div>
        <h1 className="font-display text-4xl md:text-5xl font-black text-gray-900 dark:text-white mb-6">
          Frequently Asked <br/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-cyan-600">Questions</span>
        </h1>
        <p className="text-gray-600 dark:text-gray-400 text-lg">
          Everything you need to know about working with me.
        </p>
      </div>

      <div className="max-w-3xl mx-auto space-y-12">
        {faqs.map((section, idx) => (
          <div key={idx} className="animate-slide-up" style={{ animationDelay: `${idx * 0.1}s` }}>
            <h3 className="font-display text-xl font-bold text-gray-900 dark:text-white mb-6 pl-4 border-l-4 border-purple-500">
              {section.category}
            </h3>
            <div className="space-y-4">
              {section.questions.map((item, i) => (
                <FAQItem key={i} question={item.q} answer={item.a} />
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-20 text-center animate-slide-up" style={{ animationDelay: '0.4s' }}>
        <div className="p-8 rounded-3xl inline-block bg-white dark:bg-[#1e293b] border border-gray-200 dark:border-white/5 shadow-xl">
          <p className="text-gray-900 dark:text-white font-bold text-lg mb-2">Still have questions?</p>
          <p className="text-gray-600 dark:text-gray-400 mb-6">Chat with me directly to discuss your specific needs.</p>
          <Link to="/contact" className="inline-flex items-center justify-center px-8 py-3 bg-gradient-to-r from-purple-600 to-cyan-600 text-white font-bold rounded-xl hover:scale-105 transition-transform shadow-lg shadow-purple-500/20">
            Contact Support
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
