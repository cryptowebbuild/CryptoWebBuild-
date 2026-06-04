import React, { useState, useId } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

const FAQItem = ({ question, answer }: { question: string, answer: React.ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const contentId = useId();

  return (
    <div className="group border border-gray-200 dark:border-white/5 rounded-2xl glass-panel overflow-hidden transition-all duration-300 hover:border-purple-500/30">
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
        className={`transition-all duration-300 ease-in-out overflow-hidden ${isOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}
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
      category: "Enterprise AI Infrastructure",
      questions: [
        {
          q: "How secure is the data ingestion and custom RAG training for our enterprise AI agents?",
          a: "Security is our absolute priority. We utilize isolated vector databases and strict Role-Based Access Control (RBAC) protocols for RAG (Retrieval-Augmented Generation) ingestion. Your proprietary data, operational whitepapers, and confidential business logic are encrypted at rest and in transit. The AI is sandboxed, ensuring no cross-contamination of intelligence between our clients."
        },
        {
          q: "What advanced LLMs power your 24/7 Community Guardians?",
          a: "Depending on the deployment requirements and speed/cost balance, we utilize elite models including custom Llama 3.1 deployments, GPT-4o, and Claude 3.5 Sonnet. Our Community Guardians are not simple wrappers; they are autonomous agents equipped with function calling to execute real-time community management, token-gating checks, and sentiment analysis."
        }
      ]
    },
    {
      category: "Web3 Growth & Operations",
      questions: [
        {
          q: "How do your Web3 Growth Funnels differ from standard web development?",
          a: <span>Standard websites are digital brochures. Our Web3 Growth Funnels are high-converting, deeply integrated systems. We focus on conversion rate optimization (CRO), custom dApp UI/UX for seamless wallet connections, and backend infrastructure capable of handling massive traffic spikes during Token Generation Events (TGE) and NFT mints. We build <Link to="/services" className="text-purple-500 hover:underline">infrastructure</Link>, not just pages.</span>
        },
        {
          q: "Do you handle smart contract audits?",
          a: "No. We specialize exclusively in the frontend architecture, AI infrastructure, and secure API bridges to the blockchain (using Web3.js, Ethers.js, Wagmi). While we ensure the UI/UX is secure against frontend attack vectors, you must have your smart contracts audited by a dedicated security firm (e.g., CertiK, Hacken) before integrating our frontend."
        }
      ]
    },
    {
      category: "Agreements & Guarantees",
      questions: [
        {
          q: "How does the 48-Hour Rapid Prototype & 50/50 Risk-Reversal policy work?",
          a: "We operate on absolute confidence. For qualified projects, we offer a 48-Hour Custom AI Prototype to validate the concept. If you proceed, our Elite contract structure requires 50% payment upfront to commence the full build, and the final 50% is only released upon successful Live Test and deployment. This ensures we are perfectly aligned on delivering a high-performance system."
        },
        {
          q: "What is the typical engagement timeframe?",
          a: "Elite infrastructure requires precise execution. A foundational AI integration and Web3 UI overhaul typically ranges from 2 to 4 weeks. Complex autonomous agent deployments with custom training data pipelines take 4 to 8 weeks. Strict timelines are established during the architecture mapping phase."
        }
      ]
    }
  ];

  // Schema generation
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
    <div className="container mx-auto px-6 bg-gray-50 dark:bg-[#020617] transition-colors duration-300 min-h-screen">
      <SEO title="FAQ | CryptoWebBuild - AI & Web3 Infra"
        description="Frequently asked questions about CryptoWebBuild's Elite AI Agent infrastructure, Web3 Growth Funnels, and Community Guardians."
        canonical="/faq"
      />
      <script type="application/ld+json">
        {JSON.stringify(jsonLd)}
      </script>
      
      <div className="text-center max-w-3xl mx-auto mb-16 gpu-accelerated animate-slide-up">
        <div className="inline-block px-4 py-1.5 mb-4 rounded-full bg-cyan-100 dark:bg-cyan-900/30 border border-cyan-200 dark:border-cyan-500/20 text-cyan-700 dark:text-cyan-400 text-sm font-bold tracking-wider uppercase shadow-sm">
          Infrastructure Support
        </div>
        <h1 className="font-display text-4xl md:text-5xl font-black text-gray-900 dark:text-white mb-6">
          Frequently Asked <br/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-cyan-600">Questions</span>
        </h1>
        <p className="text-gray-600 dark:text-gray-400 text-lg">
          Insights into our Elite AI and Web3 development processes.
        </p>
      </div>

      <div className="max-w-3xl mx-auto space-y-12">
        {faqs.map((section, idx) => (
          <div key={idx} className="gpu-accelerated animate-slide-up" style={{ animationDelay: `${idx * 0.1}s` }}>
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

      <div className="mt-20 text-center gpu-accelerated animate-slide-up" style={{ animationDelay: '0.4s' }}>
        <div className="p-8 rounded-3xl inline-block glass-panel border border-gray-200 dark:border-white/5 shadow-xl">
          <p className="text-gray-900 dark:text-white font-bold text-lg mb-2">Require Custom Architecture?</p>
          <p className="text-gray-600 dark:text-gray-400 mb-6">Connect with our systems engineers for a confidential consultation.</p>
          <Link to="/contact" className="inline-flex items-center justify-center px-8 py-3 neon-button text-white font-bold rounded-xl">
            Initialize Consultation
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
