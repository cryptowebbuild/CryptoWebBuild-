import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

const Services: React.FC = () => {
  return (
    <div className="container mx-auto px-6 min-h-screen">
      <SEO
        title="Full-Stack Web, SEO & AI Automation Services | CryptoWebBuild"
        description="Explore our full-stack web engineering (Python/Django, React, Next.js), Technical SEO, E-commerce funnels, and 24/7 autonomous AI Agent services."
        keywords={[
          'Full-Stack Web Development Services',
          'Python Django Agency',
          'Technical SEO Services',
          'E-commerce Website Development',
          'Custom AI Agents RAG',
          'Web3 Infrastructure',
        ]}
        canonical="/services"
        schemaType="Service"
      />

      <div className="text-center max-w-4xl mx-auto mb-20 gpu-accelerated animate-slide-up">
        <div className="inline-block px-4 py-1.5 mb-6 rounded-full bg-white dark:bg-white/5 border border-purple-500/30 text-purple-600 dark:text-purple-400 text-sm font-bold tracking-wider uppercase shadow-sm">
          Capabilities &amp; Architecture
        </div>
        <h1 className="font-display text-5xl md:text-7xl font-black text-gray-900 dark:text-white mb-6 tracking-tight">
          Elite Web, SEO &amp; AI{' '}
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-purple-600 dark:from-cyan-400 dark:to-purple-400">
            Built for Dominance.
          </span>
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
          We don&apos;t build generic templates. We engineer sub-second full-stack platforms, high-converting E-commerce funnels, and autonomous AI systems that scale your revenue.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
        {/* Card 1: AI Community & Business Guardians */}
        <div
          className="group relative rounded-[32px] p-8 md:p-12 overflow-hidden bg-white dark:bg-[#020617] glass-panel border border-gray-200 dark:border-white/5 hover:border-purple-500/30 transition-all duration-500 gpu-accelerated animate-slide-up shadow-sm hover:shadow-2xl hover:shadow-purple-500/10"
          style={{ animationDelay: '0.1s' }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <div className="relative z-10 flex flex-col md:flex-row gap-8 md:gap-12 items-start">
            <div className="shrink-0">
              <div className="w-24 h-24 rounded-2xl bg-purple-50 dark:bg-purple-900/20 flex items-center justify-center border border-purple-200 dark:border-purple-500/20 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500">
                <svg
                  aria-hidden="true"
                  className="w-10 h-10 text-purple-600 dark:text-purple-400"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M6 3L2 9L12 21L22 9L18 3H6Z" />
                  <path d="M11 3L8 9L12 21L16 9L13 3" />
                </svg>
              </div>
            </div>
            <div className="flex-1">
              <h2 className="font-display text-3xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                RAG AI Agents &amp; Support Guardians
              </h2>
              <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed text-lg font-medium">
                24/7 autonomous AI sales and support agents for Website, WhatsApp, Telegram, and Discord. Trained on your business data, catalog, or Whitepaper to answer customer &amp; investor questions instantly.
              </p>
              <div className="flex flex-wrap gap-3 mb-6">
                {['Custom RAG AI', 'WhatsApp & Web', 'Telegram & Discord', 'Zero Hallucination'].map((tag) => (
                  <span
                    key={tag}
                    className="px-4 py-1.5 bg-gray-100 dark:bg-white/5 rounded-full text-sm font-bold text-gray-600 dark:text-gray-400 border border-gray-200 dark:border-white/5 group-hover:border-purple-500/30 transition-colors"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex flex-col sm:flex-row gap-4 text-sm font-bold mt-8 pt-6 border-t border-gray-100 dark:border-white/10">
                <Link
                  to="/services/ai-automation"
                  className="flex items-center text-purple-600 dark:text-purple-400 hover:text-purple-500 transition-colors"
                >
                  <span className="bg-purple-100 dark:bg-purple-900/30 px-2 py-0.5 rounded mr-2 text-xs uppercase">
                    Service
                  </span>
                  AI Automation Architecture →
                </Link>
                <Link
                  to="/blog/why-web3-projects-replace-human-mods-with-rag-ai"
                  className="flex items-center text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
                >
                  <span className="bg-gray-100 dark:bg-white/10 px-2 py-0.5 rounded mr-2 text-xs uppercase">
                    Guide
                  </span>
                  RAG AI Breakdown →
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Card 2: High-Speed E-Commerce & Growth Funnels */}
        <div
          className="group relative rounded-[32px] p-8 md:p-12 overflow-hidden bg-white dark:bg-[#020617] glass-panel border border-gray-200 dark:border-white/5 hover:border-cyan-500/50 transition-all duration-500 gpu-accelerated animate-slide-up shadow-sm hover:shadow-2xl hover:shadow-cyan-500/10"
          style={{ animationDelay: '0.2s' }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <div className="relative z-10 flex flex-col md:flex-row gap-8 md:gap-12 items-start">
            <div className="shrink-0">
              <div className="w-24 h-24 rounded-2xl bg-cyan-50 dark:bg-cyan-900/20 flex items-center justify-center border border-cyan-200 dark:border-cyan-500/20 group-hover:scale-110 group-hover:-rotate-3 transition-transform duration-500">
                <svg
                  aria-hidden="true"
                  className="w-10 h-10 text-cyan-600 dark:text-cyan-400"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="9" cy="21" r="1" />
                  <circle cx="20" cy="21" r="1" />
                  <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
                </svg>
              </div>
            </div>
            <div className="flex-1">
              <h2 className="font-display text-3xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
                1-Click E-Commerce &amp; Growth Funnels
              </h2>
              <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed text-lg font-medium">
                Sub-second headless E-commerce &amp; F-commerce storefronts, 1-click checkout (Stripe, PayPal, bKash, Nagad), and automated courier webhooks (Steadfast/Pathao) optimized for maximum conversion.
              </p>
              <div className="flex flex-wrap gap-3 mb-6">
                {['1-Click Checkout', 'Stripe / bKash', 'Courier API', '+240% Conversion'].map((tag) => (
                  <span
                    key={tag}
                    className="px-4 py-1.5 bg-gray-100 dark:bg-white/5 rounded-full text-sm font-bold text-gray-600 dark:text-gray-400 border border-gray-200 dark:border-white/5 group-hover:border-cyan-500/30 transition-colors"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex flex-col sm:flex-row gap-4 text-sm font-bold mt-8 pt-6 border-t border-gray-100 dark:border-white/10">
                <Link
                  to="/shopfast"
                  className="flex items-center text-cyan-600 dark:text-cyan-400 hover:text-cyan-500 transition-colors"
                >
                  <span className="bg-cyan-100 dark:bg-cyan-900/30 px-2 py-0.5 rounded mr-2 text-xs uppercase">
                    Case Study
                  </span>
                  ShopFast Store →
                </Link>
                <Link
                  to="/blog/static-vs-dynamic-website"
                  className="flex items-center text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
                >
                  <span className="bg-gray-100 dark:bg-white/10 px-2 py-0.5 rounded mr-2 text-xs uppercase">
                    Guide
                  </span>
                  Why Sub-Second Wins →
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Card 3: Technical SEO & Local Business Domination */}
        <div
          className="group relative rounded-[32px] p-8 md:p-12 overflow-hidden bg-white dark:bg-[#020617] glass-panel border border-gray-200 dark:border-white/5 hover:border-blue-500/50 transition-all duration-500 gpu-accelerated animate-slide-up shadow-sm hover:shadow-2xl hover:shadow-blue-500/10"
          style={{ animationDelay: '0.3s' }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <div className="relative z-10 flex flex-col md:flex-row gap-8 md:gap-12 items-start">
            <div className="shrink-0">
              <div className="w-24 h-24 rounded-2xl bg-blue-50 dark:bg-blue-900/20 flex items-center justify-center border border-blue-200 dark:border-blue-500/20 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500">
                <svg
                  aria-hidden="true"
                  className="w-10 h-10 text-blue-600 dark:text-blue-400"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M3 21h18" />
                  <path d="M5 21V7" />
                  <path d="M9 21V11" />
                  <path d="M13 21V3" />
                  <path d="M17 21v6" />
                </svg>
              </div>
            </div>
            <div className="flex-1">
              <h2 className="font-display text-3xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                Technical SEO &amp; Local Business Funnels
              </h2>
              <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed text-lg font-medium">
                100/100 Google PageSpeed websites for local service businesses, startups, and global brands with programmatic Schema.org JSON-LD, Core Web Vitals optimization, and AI Search (GEO) readiness.
              </p>
              <div className="flex flex-wrap gap-3 mb-6">
                {['100/100 PageSpeed', 'Local & Global SEO', 'JSON-LD Schema', 'Lead Generation'].map((tag) => (
                  <span
                    key={tag}
                    className="px-4 py-1.5 bg-gray-100 dark:bg-white/5 rounded-full text-sm font-bold text-gray-600 dark:text-gray-400 border border-gray-200 dark:border-white/5 group-hover:border-blue-500/30 transition-colors"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex flex-col sm:flex-row gap-4 text-sm font-bold mt-8 pt-6 border-t border-gray-100 dark:border-white/10">
                <Link
                  to="/blog/local-business-website-seo-checklist"
                  className="flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-500 transition-colors"
                >
                  <span className="bg-blue-100 dark:bg-blue-900/30 px-2 py-0.5 rounded mr-2 text-xs uppercase">
                    Checklist
                  </span>
                  Local SEO Blueprint →
                </Link>
                <Link
                  to="/blog/hidden-cost-of-slow-websites"
                  className="flex items-center text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
                >
                  <span className="bg-gray-100 dark:bg-white/10 px-2 py-0.5 rounded mr-2 text-xs uppercase">
                    Audit
                  </span>
                  Hidden Cost of Slow Sites →
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Card 4: Python/Django SaaS & Web3 Platforms */}
        <div
          className="group relative rounded-[32px] p-8 md:p-12 overflow-hidden bg-white dark:bg-[#020617] glass-panel border border-gray-200 dark:border-white/5 hover:border-pink-500/50 transition-all duration-500 gpu-accelerated animate-slide-up shadow-sm hover:shadow-2xl hover:shadow-pink-500/10"
          style={{ animationDelay: '0.4s' }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-pink-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <div className="relative z-10 flex flex-col md:flex-row gap-8 md:gap-12 items-start">
            <div className="shrink-0">
              <div className="w-24 h-24 rounded-2xl bg-pink-50 dark:bg-pink-900/20 flex items-center justify-center border border-pink-200 dark:border-pink-500/20 group-hover:scale-110 group-hover:-rotate-3 transition-transform duration-500">
                <svg
                  aria-hidden="true"
                  className="w-10 h-10 text-pink-600 dark:text-pink-400"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 19l7-7 3 3-7 7-3-3z" />
                  <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" />
                  <path d="M2 2l7.586 7.586" />
                  <circle cx="11" cy="11" r="2" />
                </svg>
              </div>
            </div>
            <div className="flex-1">
              <h2 className="font-display text-3xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-pink-600 dark:group-hover:text-pink-400 transition-colors">
                Python/Django SaaS &amp; Web3 Platforms
              </h2>
              <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed text-lg font-medium">
                Enterprise-grade full-stack applications powered by Python, Django REST Framework, PostgreSQL, React, Next.js, and Solana/EVM smart contract integrations.
              </p>
              <div className="flex flex-wrap gap-3 mb-6">
                {['Python & Django', 'PostgreSQL', 'React & Next.js', 'Solana / Web3'].map((tag) => (
                  <span
                    key={tag}
                    className="px-4 py-1.5 bg-gray-100 dark:bg-white/5 rounded-full text-sm font-bold text-gray-600 dark:text-gray-400 border border-gray-200 dark:border-white/5 group-hover:border-pink-500/30 transition-colors"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex flex-col sm:flex-row gap-4 text-sm font-bold mt-8 pt-6 border-t border-gray-100 dark:border-white/10">
                <Link
                  to="/vanguardsaas"
                  className="flex items-center text-pink-600 dark:text-pink-400 hover:text-pink-500 transition-colors"
                >
                  <span className="bg-pink-100 dark:bg-pink-900/30 px-2 py-0.5 rounded mr-2 text-xs uppercase">
                    Case Study
                  </span>
                  Vanguard B2B SaaS →
                </Link>
                <Link
                  to="/services/web3-development"
                  className="flex items-center text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
                >
                  <span className="bg-gray-100 dark:bg-white/10 px-2 py-0.5 rounded mr-2 text-xs uppercase">
                    Stack
                  </span>
                  Full-Stack Specs →
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Card 5: OpenClaw AI Workflow & Full-Stack Automation (Full Width) */}
        <div
          className="group relative rounded-[32px] p-8 md:p-12 overflow-hidden bg-white dark:bg-[#020617] glass-panel border border-gray-200 dark:border-white/5 hover:border-emerald-500/50 transition-all duration-500 gpu-accelerated animate-slide-up shadow-sm hover:shadow-2xl hover:shadow-emerald-500/10 lg:col-span-2"
          style={{ animationDelay: '0.5s' }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <div className="relative z-10 flex flex-col md:flex-row gap-8 md:gap-12 items-start">
            <div className="shrink-0">
              <div className="w-24 h-24 rounded-2xl bg-emerald-50 dark:bg-emerald-900/20 flex items-center justify-center border border-emerald-200 dark:border-emerald-500/20 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500">
                <svg
                  aria-hidden="true"
                  className="w-10 h-10 text-emerald-600 dark:text-emerald-400"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
                </svg>
              </div>
            </div>
            <div className="flex-1">
              <h2 className="font-display text-3xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                Autonomous OpenClaw AI &amp; Business Workflow Infrastructure
              </h2>
              <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed text-lg font-medium">
                Scale your business effortlessly with our custom AI automation services. We build, configure, and deploy intelligent OpenClaw &amp; Python AI agents tailored to your exact needs. From automated B2B lead generation and CRM sync to deep web research and browser automation, we turn your manual workflows into a 24/7 automated machine.
              </p>
              <div className="flex flex-wrap gap-3 mb-6">
                {['OpenClaw AI', 'Workflow Automation', 'B2B Lead Gen', 'Browser Agents', 'CRM Webhooks'].map((tag) => (
                  <span
                    key={tag}
                    className="px-4 py-1.5 bg-gray-100 dark:bg-white/5 rounded-full text-sm font-bold text-gray-600 dark:text-gray-400 border border-gray-200 dark:border-white/5 group-hover:border-emerald-500/30 transition-colors"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex flex-col sm:flex-row gap-4 text-sm font-bold mt-8 pt-6 border-t border-gray-100 dark:border-white/10">
                <Link
                  to="/blog/openclaw-ai-workflow-automation"
                  className="flex items-center text-emerald-600 dark:text-emerald-400 hover:text-emerald-500 transition-colors"
                >
                  <span className="bg-emerald-100 dark:bg-emerald-900/30 px-2 py-0.5 rounded mr-2 text-xs uppercase">
                    Guide
                  </span>
                  Automate Your Business with OpenClaw →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-20 text-center">
        <Link
          to="/contact"
          className="inline-flex items-center justify-center px-10 py-4 text-lg font-bold text-white transition-all duration-200 neon-button rounded-xl hover:scale-105 shadow-xl shadow-purple-500/20"
        >
          Claim Your 48-Hour Prototype
        </Link>
      </div>
    </div>
  );
};

export default Services;