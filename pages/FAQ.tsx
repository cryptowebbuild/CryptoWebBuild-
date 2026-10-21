import React, { useState, useId } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

const AccordionItem: React.FC<{ question: string; answer: React.ReactNode }> = ({ question, answer }) => {
  const [open, setOpen] = useState(false);
  const regionId = useId();

  return (
    <div className="group border border-gray-200 dark:border-white/5 rounded-2xl glass-panel overflow-hidden transition-all duration-300 hover:border-purple-500/30">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        aria-controls={regionId}
        className="w-full flex items-center justify-between p-6 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-500 focus-visible:ring-inset rounded-2xl"
      >
        <span className="font-bold text-lg text-gray-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
          {question}
        </span>
        <span className={`transform transition-transform duration-300 text-purple-600 ${open ? 'rotate-180' : ''}`}>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
          </svg>
        </span>
      </button>
      <div
        id={regionId}
        role="region"
        aria-label={question}
        className={`transition-all duration-300 ease-in-out overflow-hidden ${
          open ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="p-6 pt-0 text-gray-600 dark:text-gray-400 leading-relaxed border-t border-gray-100 dark:border-white/5 mt-2">
          {answer}
        </div>
      </div>
    </div>
  );
};

const FAQ: React.FC = () => {
  const faqGroups = [
    {
      category: 'Full-Stack Web, E-Commerce & Technical SEO',
      questions: [
        {
          q: 'Why should I choose custom Python/Django or Next.js over WordPress or Shopify?',
          a: 'WordPress and bloated page builders rely on dozens of third-party plugins that slow load times to 4–7 seconds, hurting Google rankings and costing up to 50% of mobile buyers. Our custom React, Next.js, and Python/Django architectures load in under 0.8 seconds, score 100/100 on Google PageSpeed, and are 100% tailored to your exact checkout and business logic.',
        },
        {
          q: 'Can you integrate local & global payment gateways and courier APIs?',
          a: 'Yes! For Bangladeshi and F-Commerce brands, we integrate bKash, Nagad, SSLCommerz, Steadfast, Pathao, and RedX APIs with server-side Meta Conversion API tracking. For global SaaS, E-Commerce, and Web3 brands, we integrate Stripe, PayPal, LemonSqueezy, and Solana/EVM wallets.',
        },
      ],
    },
    {
      category: 'Enterprise AI Agents & Workflow Automation',
      questions: [
        {
          q: 'How secure is the data ingestion and custom RAG training for our AI agents?',
          a: 'Security is our top priority. We utilize isolated vector databases and strict Role-Based Access Control (RBAC) protocols for Retrieval-Augmented Generation (RAG) ingestion. Your proprietary catalog, SOPs, and whitepapers are encrypted and sandboxed with strict zero-hallucination guardrails.',
        },
        {
          q: 'Where can your 24/7 AI Guardians be deployed?',
          a: (
            <span>
              We deploy custom RAG AI Agents and OpenClaw automation directly onto your{' '}
              <Link to="/services" className="text-purple-500 hover:underline">
                Website, WhatsApp Business, Facebook Messenger, Telegram, and Discord
              </Link>
              , handling customer questions, order lookups, and lead qualification 24/7 in under 1 second.
            </span>
          ),
        },
      ],
    },
    {
      category: 'Agreements, Ownership & 50/50 Risk-Reversal',
      questions: [
        {
          q: 'How does the 48-Hour Prototype & 50/50 Risk-Reversal policy work?',
          a: 'We operate on verified results. For qualified projects, we deliver a 48-Hour Custom Prototype so you can test the UI or AI flow early. Our contract requires 50% upfront to start the build, and the final 50% is paid ONLY after you verify your live website or AI agent in a real test.',
        },
        {
          q: 'Do I own 100% of the source code and infrastructure?',
          a: 'Yes. Upon final milestone completion, you receive 100% ownership of the GitHub repository, custom Python/Django & Next.js source code, database schemas, and cloud deployment keys with zero vendor lock-in.',
        },
      ],
    },
  ];

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqGroups
      .flatMap((t) => t.questions)
      .map((t) => ({
        '@type': 'Question',
        name: t.q,
        acceptedAnswer: {
          '@type': 'Answer',
          text: typeof t.a === 'string' ? t.a : 'We deploy custom RAG AI Agents and OpenClaw automation directly onto your Website, WhatsApp Business, Telegram, and Discord.',
        },
      })),
  };

  return (
    <div className="container mx-auto px-6 min-h-screen">
      <SEO
        title="FAQ | CryptoWebBuild - Full-Stack Web, SEO & AI Agency"
        description="Frequently asked questions about CryptoWebBuild's Full-Stack Web Engineering, Technical SEO, 24/7 RAG AI Agents, and 50/50 Risk-Reversal Guarantee."
        canonical="/faq"
        schema={faqSchema}
      />

      <div className="text-center max-w-3xl mx-auto mb-16 gpu-accelerated animate-slide-up">
        <div className="inline-block px-4 py-1.5 mb-4 rounded-full bg-cyan-100 dark:bg-cyan-900/30 border border-cyan-200 dark:border-cyan-500/20 text-cyan-700 dark:text-cyan-400 text-sm font-bold tracking-wider uppercase shadow-sm">
          Engineering &amp; Support
        </div>
        <h1 className="font-display text-4xl md:text-5xl font-black text-gray-900 dark:text-white mb-6">
          Frequently Asked <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-cyan-600">Questions</span>
        </h1>
        <p className="text-gray-600 dark:text-gray-400 text-lg">
          Clear answers on our Full-Stack, Technical SEO, and Autonomous AI development process.
        </p>
      </div>

      <div className="max-w-3xl mx-auto space-y-12">
        {faqGroups.map((group, idx) => (
          <div key={group.category} className="gpu-accelerated animate-slide-up" style={{ animationDelay: `${idx * 0.1}s` }}>
            <h2 className="font-display text-xl font-bold text-gray-900 dark:text-white mb-6 pl-4 border-l-4 border-purple-500">
              {group.category}
            </h2>
            <div className="space-y-4">
              {group.questions.map((item) => (
                <AccordionItem key={item.q} question={item.q} answer={item.a} />
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-20 text-center gpu-accelerated animate-slide-up" style={{ animationDelay: '0.4s' }}>
        <div className="p-8 rounded-3xl inline-block glass-panel border border-gray-200 dark:border-white/5 shadow-xl">
          <p className="text-gray-900 dark:text-white font-bold text-lg mb-2">Require Custom Architecture?</p>
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            Connect directly with Sagor Ahamed for a free technical consultation.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-8 py-3 neon-button text-white font-bold rounded-xl"
            >
              Initialize Consultation
            </Link>
            <a
              href="https://wa.me/8801618138820?text=Hi%20Sagor%2C%20I%20have%20a%20question%20about%20building%20a%20project%20with%20CryptoWebBuild."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-3 bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 text-gray-900 dark:text-white font-bold rounded-xl hover:border-purple-500/40 transition-colors"
            >
              WhatsApp: 01618-138820
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
