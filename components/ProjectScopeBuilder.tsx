import React, { useState } from 'react';
import { CheckCircle2, Clock, ShieldCheck, MessageSquare, Send, Sparkles } from 'lucide-react';

interface ScopeModule {
  id: string;
  name: string;
  description: string;
  days: number;
  priceUSD: number;
  priceBDT: number;
  isCore?: boolean;
}

const MODULES: ScopeModule[] = [
  {
    id: 'frontend',
    name: 'Next.js 15 Sub-0.8s Headless Storefront',
    description: 'Custom React & Next.js 15 frontend, Tailwind CSS, 100/100 Core Web Vitals, and mobile-first UX.',
    days: 2,
    priceUSD: 450,
    priceBDT: 54000,
    isCore: true,
  },
  {
    id: 'checkout',
    name: '1-Click Instant Checkout & Payment Gateways',
    description: 'Stripe, PayPal, bKash, Nagad, SSLCommerz with server-side Meta Conversion API (CAPI) tracking.',
    days: 1,
    priceUSD: 250,
    priceBDT: 30000,
  },
  {
    id: 'backend',
    name: 'Python / Django REST API & PostgreSQL DB',
    description: 'High-concurrency indexed relational backend, JWT authentication, and secure admin control portal.',
    days: 2,
    priceUSD: 400,
    priceBDT: 48000,
  },
  {
    id: 'seo',
    name: '100/100 Technical SEO & Programmatic Schema',
    description: 'Schema.org JSON-LD, automated sitemaps, OpenGraph cards, and AI Search (GEO) readiness.',
    days: 1,
    priceUSD: 200,
    priceBDT: 24000,
  },
  {
    id: 'ai-agent',
    name: '24/7 Autonomous WhatsApp / Telegram RAG AI Agent',
    description: 'Trained on your catalog or whitepaper with strict zero-hallucination sales & support guardrails.',
    days: 2,
    priceUSD: 350,
    priceBDT: 42000,
  },
  {
    id: 'courier',
    name: 'Courier & Automated Logistics Webhook Sync',
    description: 'Automated 1-click parcel generation for Steadfast, Pathao, RedX, or international courier APIs.',
    days: 1,
    priceUSD: 150,
    priceBDT: 18000,
  },
  {
    id: 'web3',
    name: 'Web3 Wallet & Smart Contract Integration',
    description: 'Phantom, Solflare, MetaMask wallet signing, live RPC telemetry, and on-chain verification.',
    days: 2,
    priceUSD: 350,
    priceBDT: 42000,
  },
];

export const ProjectScopeBuilder: React.FC = () => {
  const [currency, setCurrency] = useState<'USD' | 'BDT'>('USD');
  const [selectedIds, setSelectedIds] = useState<string[]>(['frontend', 'checkout', 'seo']);
  const [copied, setCopied] = useState(false);

  const toggleModule = (id: string) => {
    if (id === 'frontend') return; // Core module cannot be unchecked
    setSelectedIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const selectedModules = MODULES.filter((m) => selectedIds.includes(m.id));
  const totalDays = Math.max(3, selectedModules.reduce((acc, m) => acc + m.days, 0) - 1);
  const totalPrice = selectedModules.reduce(
    (acc, m) => acc + (currency === 'USD' ? m.priceUSD : m.priceBDT),
    0
  );
  const upfront50 = Math.round(totalPrice * 0.5);
  const final50 = totalPrice - upfront50;

  const formattedPrice = (amount: number) => {
    return currency === 'USD' ? `$${amount.toLocaleString()}` : `৳${amount.toLocaleString()}`;
  };

  const briefText = `Hi Sagor, I customized a project scope on CryptoWebBuild.com:
• Scope Modules: ${selectedModules.map((m) => m.name).join(', ')}
• Est. Delivery: ${totalDays} Business Days
• Est. Investment: ${formattedPrice(totalPrice)} (${currency})
• Terms: 50% Upfront (${formattedPrice(upfront50)}) / 50% upon Live Verification (${formattedPrice(final50)})
I'd like to claim my 48-hour live prototype for this scope!`;

  const whatsappUrl = `https://wa.me/8801618138820?text=${encodeURIComponent(briefText)}`;

  const handleCopy = () => {
    navigator.clipboard.writeText(briefText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section className="my-24 max-w-7xl mx-auto px-4 sm:px-6">
      <div className="text-center mb-12">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-100 dark:bg-cyan-900/30 border border-cyan-200 dark:border-cyan-500/30 text-cyan-700 dark:text-cyan-300 text-xs font-bold uppercase tracking-wider mb-4 shadow-sm">
          <Sparkles className="w-3.5 h-3.5" />
          Interactive Quote &amp; Scope Configurator
        </div>
        <h2 className="font-display text-3xl sm:text-5xl font-black text-gray-900 dark:text-white mb-4">
          Configure Your Custom{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-cyan-500 dark:from-purple-400 dark:to-cyan-400">
            Project Scope
          </span>
        </h2>
        <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-base sm:text-lg">
          Select the exact architectural modules your business needs. Get instant estimated delivery timelines, transparent pricing, and 1-click WhatsApp dispatch to Sagor Ahamed.
        </p>

        {/* Currency Switcher */}
        <div className="mt-6 inline-flex items-center p-1 rounded-2xl bg-gray-100 dark:bg-[#0B1120] border border-gray-200 dark:border-white/10 shadow-sm">
          <button
            type="button"
            onClick={() => setCurrency('USD')}
            className={`px-4 py-1.5 rounded-xl text-xs sm:text-sm font-bold transition-all ${
              currency === 'USD'
                ? 'bg-purple-600 text-white shadow-md'
                : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
            }`}
          >
            USD ($ International)
          </button>
          <button
            type="button"
            onClick={() => setCurrency('BDT')}
            className={`px-4 py-1.5 rounded-xl text-xs sm:text-sm font-bold transition-all ${
              currency === 'BDT'
                ? 'bg-purple-600 text-white shadow-md'
                : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
            }`}
          >
            BDT (৳ Bangladesh)
          </button>
        </div>
      </div>

      <div className="grid lg:grid-cols-12 gap-8 items-start">
        {/* Module Selection Grid */}
        <div className="lg:col-span-7 space-y-3.5">
          {MODULES.map((mod) => {
            const isSelected = selectedIds.includes(mod.id);
            return (
              <div
                key={mod.id}
                onClick={() => toggleModule(mod.id)}
                className={`p-5 rounded-2xl border transition-all cursor-pointer ${
                  isSelected
                    ? 'glass-panel border-purple-500/60 bg-purple-500/[0.04] shadow-md dark:shadow-purple-900/20'
                    : 'bg-white dark:bg-[#0B1120] border-gray-200 dark:border-white/5 opacity-80 hover:opacity-100 hover:border-gray-300 dark:hover:border-white/20'
                }`}
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-start gap-3.5">
                    <div className="mt-1">
                      <div
                        className={`w-5 h-5 rounded-md flex items-center justify-center border transition-colors ${
                          isSelected
                            ? 'bg-purple-600 border-purple-600 text-white'
                            : 'border-gray-300 dark:border-white/20 bg-transparent'
                        }`}
                      >
                        {isSelected && <CheckCircle2 className="w-4 h-4" />}
                      </div>
                    </div>
                    <div>
                      <div className="flex items-center gap-2 flex-wrap">
                        <h3 className="font-bold text-gray-900 dark:text-white text-base">
                          {mod.name}
                        </h3>
                        {mod.isCore && (
                          <span className="px-2 py-0.5 rounded text-[10px] font-black uppercase tracking-wider bg-purple-100 dark:bg-purple-900/40 text-purple-700 dark:text-purple-300">
                            Core Foundation
                          </span>
                        )}
                      </div>
                      <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 mt-1 leading-relaxed">
                        {mod.description}
                      </p>
                    </div>
                  </div>

                  <div className="text-right shrink-0">
                    <div className="font-mono font-bold text-gray-900 dark:text-white text-base">
                      +{formattedPrice(currency === 'USD' ? mod.priceUSD : mod.priceBDT)}
                    </div>
                    <div className="text-[11px] text-gray-500 dark:text-gray-400 flex items-center justify-end gap-1 mt-0.5">
                      <Clock className="w-3 h-3" />
                      +{mod.days} {mod.days === 1 ? 'day' : 'days'}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Live Estimate & Action Card */}
        <div className="lg:col-span-5 sticky top-28">
          <div className="p-6 sm:p-8 rounded-3xl glass-panel border border-purple-200 dark:border-purple-500/30 bg-gradient-to-br from-white via-purple-500/[0.02] to-cyan-500/[0.04] dark:from-[#0B1120] dark:via-[#020617] dark:to-[#0F172A] shadow-xl">
            <div className="flex items-center justify-between border-b border-gray-200 dark:border-white/10 pb-4 mb-5">
              <div>
                <span className="text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Configured Scope
                </span>
                <div className="text-lg font-bold text-gray-900 dark:text-white">
                  {selectedModules.length} Modules Selected
                </div>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-600 dark:text-emerald-400 text-xs font-bold">
                <Clock className="w-3.5 h-3.5" />
                Est. {totalDays} Business Days
              </div>
            </div>

            {/* Price Breakdown */}
            <div className="space-y-3 mb-6">
              <div className="flex justify-between items-center text-sm">
                <span className="text-gray-600 dark:text-gray-400">Total Investment:</span>
                <span className="font-mono text-2xl font-black text-gray-900 dark:text-white">
                  {formattedPrice(totalPrice)}
                </span>
              </div>
              <div className="p-3.5 rounded-xl bg-gray-50 dark:bg-white/[0.03] border border-gray-200 dark:border-white/5 space-y-2 text-xs">
                <div className="flex justify-between text-gray-600 dark:text-gray-300">
                  <span>50% Upfront Deposit:</span>
                  <span className="font-mono font-bold text-purple-600 dark:text-purple-400">
                    {formattedPrice(upfront50)}
                  </span>
                </div>
                <div className="flex justify-between text-gray-600 dark:text-gray-300">
                  <span>50% Upon Live Verification:</span>
                  <span className="font-mono font-bold text-cyan-600 dark:text-cyan-400">
                    {formattedPrice(final50)}
                  </span>
                </div>
              </div>
            </div>

            {/* Risk-Reversal Guarantee */}
            <div className="flex items-start gap-2.5 p-3.5 rounded-xl bg-purple-50 dark:bg-purple-900/20 border border-purple-200 dark:border-purple-800/40 text-purple-800 dark:text-purple-200 text-xs mb-6">
              <ShieldCheck className="w-4 h-4 shrink-0 text-purple-600 dark:text-purple-400 mt-0.5" />
              <span>
                <strong>50/50 Risk-Reversal:</strong> You pay 50% to initiate the architecture. You only pay the final 50% after testing your live sub-second system.
              </span>
            </div>

            {/* Direct WhatsApp Action */}
            <div className="space-y-3">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-4 px-6 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-sm shadow-lg flex items-center justify-center gap-2.5 transition-transform hover:scale-[1.02]"
              >
                <MessageSquare className="w-5 h-5" />
                <span>Dispatch Scope via WhatsApp (01618-138820)</span>
              </a>

              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={handleCopy}
                  className="flex-1 py-3 px-4 rounded-xl bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 text-gray-900 dark:text-white hover:bg-gray-200 dark:hover:bg-white/10 font-bold text-xs transition-colors text-center"
                >
                  {copied ? '✓ Scope Copied!' : 'Copy Structured Brief'}
                </button>
                <a
                  href="/contact"
                  className="py-3 px-4 rounded-xl bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 text-gray-900 dark:text-white hover:bg-gray-200 dark:hover:bg-white/10 font-bold text-xs transition-colors flex items-center justify-center gap-1.5"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Email Brief</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectScopeBuilder;
