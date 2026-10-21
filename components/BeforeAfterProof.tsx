import React, { useState } from 'react';
import { ArrowRight, TrendingUp, Zap, Clock, ShieldCheck, CheckCircle2 } from 'lucide-react';

interface CaseProof {
  id: string;
  client: string;
  category: string;
  headline: string;
  before: {
    speed: string;
    score: string;
    conversion: string;
    painPoint: string;
  };
  after: {
    speed: string;
    score: string;
    conversion: string;
    result: string;
  };
  highlights: string[];
}

const CASES: CaseProof[] = [
  {
    id: 'ecommerce',
    client: 'ShopFast & Retail Brands',
    category: 'E-Commerce / Direct-to-Consumer',
    headline: 'Sub-Second Headless Storefront & 1-Click Checkout Transformation',
    before: {
      speed: '4.8s Mobile Load',
      score: '41 / 100 PageSpeed',
      conversion: '1.2% Conversion Rate',
      painPoint: 'Lost 62% of Facebook Ad visitors before cart loaded; customers abandoned 4-step form.',
    },
    after: {
      speed: '0.4s Edge Load',
      score: '100 / 100 PageSpeed',
      conversion: '3.8% Conversion Rate',
      result: '+216% revenue increase on identical ad spend with 1-click bKash/Stripe checkout.',
    },
    highlights: [
      'Next.js 15 Static Edge Caching',
      'Instant 1-Click Direct Checkout Form',
      'Automated Courier Dispatch Webhook',
      'Server-Side Meta CAPI Tracking',
    ],
  },
  {
    id: 'seo-leadgen',
    client: 'Apex Corporate & Local Services',
    category: 'B2B & Local Service Funnel',
    headline: 'Technical SEO Overhaul & Google Map Pack Domination',
    before: {
      speed: '5.2s Heavy Theme',
      score: '35 / 100 PageSpeed',
      conversion: '3-5 Inbound Leads/Month',
      painPoint: 'Buried on Page 4 of Google; zero rich snippets; slow contact form failed on mobile.',
    },
    after: {
      speed: '0.6s Instant Load',
      score: '100 / 100 PageSpeed',
      conversion: '28+ Inbound Leads/Month',
      result: 'Ranked #1 for high-ticket local service keywords with programmatic Schema.org JSON-LD.',
    },
    highlights: [
      'Clean Semantic HTML5 & Schema Markup',
      'Zero Render-Blocking Plugins',
      '1-Click WhatsApp Direct Lead Button',
      'Automated Google Review Rich Cards',
    ],
  },
  {
    id: 'ai-automation',
    client: 'FinTech & Web3 Community',
    category: '24/7 AI Automation & RAG',
    headline: 'Autonomous RAG AI Agent Replacing 4 Full-Time Support Staff',
    before: {
      speed: '4-6 Hour Reply Delay',
      score: 'Manual Human Support',
      conversion: 'High Drop-Off After Hours',
      painPoint: 'Customer DMs went unanswered overnight; human moderators hallucinated product specs.',
    },
    after: {
      speed: '< 1.5s Instant AI Reply',
      score: '24/7 Zero Hallucination',
      conversion: '82% Automated Resolution',
      result: 'Over 7,000+ customer queries handled automatically with instant order & presale lookup.',
    },
    highlights: [
      'Vector Database RAG Architecture',
      'WhatsApp & Telegram Live Webhooks',
      'Strict Brand Knowledge Guardrails',
      'Instant Lead Qualification into CRM',
    ],
  },
];

export const BeforeAfterProof: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('ecommerce');
  const currentCase = CASES.find((c) => c.id === activeTab) || CASES[0];

  return (
    <section className="my-24 max-w-7xl mx-auto px-4 sm:px-6">
      <div className="text-center mb-12">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-100 dark:bg-emerald-900/30 border border-emerald-200 dark:border-emerald-500/30 text-emerald-700 dark:text-emerald-300 text-xs font-bold uppercase tracking-wider mb-4 shadow-sm">
          <TrendingUp className="w-3.5 h-3.5" />
          Verified Results &amp; Proof
        </div>
        <h2 className="font-display text-3xl sm:text-5xl font-black text-gray-900 dark:text-white mb-4">
          Real Benchmarks:{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-teal-500 to-cyan-500 dark:from-emerald-400 dark:via-cyan-300 dark:to-teal-400">
            Before vs After
          </span>
        </h2>
        <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-base sm:text-lg">
          We don&apos;t just promise performance. We measure milliseconds, Core Web Vitals, and conversion rates with transparent before/after verification.
        </p>

        {/* Tab Selector */}
        <div className="mt-8 inline-flex flex-wrap items-center justify-center gap-2 p-1.5 rounded-2xl bg-gray-100 dark:bg-[#0B1120] border border-gray-200 dark:border-white/10 shadow-sm">
          {CASES.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => setActiveTab(item.id)}
              className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                activeTab === item.id
                  ? 'bg-gradient-to-r from-purple-600 to-cyan-500 text-white shadow-md'
                  : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
              }`}
            >
              {item.category}
            </button>
          ))}
        </div>
      </div>

      <div className="rounded-3xl glass-panel border border-gray-200 dark:border-white/10 p-6 sm:p-10 shadow-xl">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <span className="text-xs font-bold text-purple-600 dark:text-purple-400 uppercase tracking-widest">
              {currentCase.client}
            </span>
            <h3 className="font-display text-2xl sm:text-3xl font-black text-gray-900 dark:text-white mt-1">
              {currentCase.headline}
            </h3>
          </div>

          <div className="grid md:grid-cols-2 gap-6 sm:gap-8 items-stretch">
            {/* Before Card */}
            <div className="p-6 rounded-2xl bg-red-500/[0.04] border border-red-500/20 flex flex-col justify-between">
              <div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-500/10 text-red-600 dark:text-red-400 text-xs font-bold uppercase tracking-wider mb-4">
                  ❌ Before: Bloated Legacy Architecture
                </div>
                <div className="space-y-3 mb-6">
                  <div className="flex justify-between items-center text-sm border-b border-red-500/10 pb-2">
                    <span className="text-gray-600 dark:text-gray-400">Mobile Speed:</span>
                    <span className="font-mono font-bold text-red-600 dark:text-red-400">
                      {currentCase.before.speed}
                    </span>
                  </div>
                  <div className="flex justify-between items-center text-sm border-b border-red-500/10 pb-2">
                    <span className="text-gray-600 dark:text-gray-400">Lighthouse Score:</span>
                    <span className="font-mono font-bold text-red-600 dark:text-red-400">
                      {currentCase.before.score}
                    </span>
                  </div>
                  <div className="flex justify-between items-center text-sm border-b border-red-500/10 pb-2">
                    <span className="text-gray-600 dark:text-gray-400">Performance:</span>
                    <span className="font-mono font-bold text-red-600 dark:text-red-400">
                      {currentCase.before.conversion}
                    </span>
                  </div>
                </div>
              </div>
              <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 italic bg-white/40 dark:bg-black/20 p-3.5 rounded-xl border border-red-500/10">
                &ldquo;{currentCase.before.painPoint}&rdquo;
              </p>
            </div>

            {/* After Card */}
            <div className="p-6 rounded-2xl bg-emerald-500/[0.06] border border-emerald-500/30 flex flex-col justify-between relative overflow-hidden">
              <div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-700 dark:text-emerald-300 text-xs font-bold uppercase tracking-wider mb-4">
                  ✓ After: CryptoWebBuild Engineered
                </div>
                <div className="space-y-3 mb-6">
                  <div className="flex justify-between items-center text-sm border-b border-emerald-500/20 pb-2">
                    <span className="text-gray-600 dark:text-gray-400">Mobile Speed:</span>
                    <span className="font-mono font-bold text-emerald-600 dark:text-emerald-400">
                      {currentCase.after.speed}
                    </span>
                  </div>
                  <div className="flex justify-between items-center text-sm border-b border-emerald-500/20 pb-2">
                    <span className="text-gray-600 dark:text-gray-400">Lighthouse Score:</span>
                    <span className="font-mono font-bold text-emerald-600 dark:text-emerald-400">
                      {currentCase.after.score}
                    </span>
                  </div>
                  <div className="flex justify-between items-center text-sm border-b border-emerald-500/20 pb-2">
                    <span className="text-gray-600 dark:text-gray-400">Performance:</span>
                    <span className="font-mono font-bold text-emerald-600 dark:text-emerald-400">
                      {currentCase.after.conversion}
                    </span>
                  </div>
                </div>
              </div>
              <div className="p-3.5 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-900 dark:text-emerald-200 text-xs sm:text-sm font-semibold">
                🎯 {currentCase.after.result}
              </div>
            </div>
          </div>

          {/* Architecture Highlights */}
          <div className="mt-8 pt-6 border-t border-gray-200 dark:border-white/10">
            <span className="text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider block mb-3">
              Engineered Implementation
            </span>
            <div className="grid sm:grid-cols-2 gap-2.5">
              {currentCase.highlights.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-2 text-xs sm:text-sm text-gray-700 dark:text-gray-300 font-medium"
                >
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BeforeAfterProof;
