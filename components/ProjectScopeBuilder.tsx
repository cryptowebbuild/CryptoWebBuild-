import React, { useState } from 'react';
import { CheckCircle2, Clock, ShieldCheck, MessageSquare, Send } from 'lucide-react';

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
    name: 'Next.js 15 Sub-0.5s Storefront / Web App',
    description: 'Custom React & Next.js 15 edge architecture with 100/100 Google PageSpeed.',
    days: 2,
    priceUSD: 450,
    priceBDT: 54000,
    isCore: true,
  },
  {
    id: 'checkout',
    name: '1-Click Checkout (Stripe, bKash, Nagad, COD)',
    description: 'Instant 1-step checkout with Server-Side Meta CAPI & GA4 conversion tracking.',
    days: 1,
    priceUSD: 250,
    priceBDT: 30000,
  },
  {
    id: 'backend',
    name: 'Python / Django REST API & PostgreSQL',
    description: 'High-concurrency database, secure admin dashboard, and role-based access.',
    days: 2,
    priceUSD: 400,
    priceBDT: 48000,
  },
  {
    id: 'seo',
    name: '100/100 Technical SEO & AI Search (GEO)',
    description: 'Programmatic Schema.org JSON-LD, XML sitemaps, and LLM search indexing.',
    days: 1,
    priceUSD: 200,
    priceBDT: 24000,
  },
  {
    id: 'ai-agent',
    name: '24/7 WhatsApp & Web Order Automation',
    description: 'Automated product inquiry replies, order confirmation, and Steadfast courier sync.',
    days: 2,
    priceUSD: 300,
    priceBDT: 36000,
  },
];

export const ProjectScopeBuilder: React.FC = () => {
  const [currency, setCurrency] = useState<'USD' | 'BDT'>('USD');
  const [selectedIds, setSelectedIds] = useState<string[]>(['frontend', 'checkout', 'seo']);
  const [copied, setCopied] = useState(false);

  const toggleModule = (id: string) => {
    if (id === 'frontend') return;
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

  const briefText = `Hi Sagor, I configured my project scope on CryptoWebBuild.com:
• Modules: ${selectedModules.map((m) => m.name).join(', ')}
• Est. Timeline: ${totalDays} Business Days
• Total Estimate: ${formattedPrice(totalPrice)} (${currency})
• 50/50 Terms: ${formattedPrice(upfront50)} to start / ${formattedPrice(final50)} after live staging test.`;

  const whatsappUrl = `https://wa.me/8801618138820?text=${encodeURIComponent(briefText)}`;
  const telegramUrl = `https://t.me/cryptowebbuild?text=${encodeURIComponent(briefText)}`;

  const handleCopy = () => {
    navigator.clipboard.writeText(briefText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="pricing" className="max-w-7xl mx-auto px-6">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
        <div>
          <div className="text-xs font-bold uppercase tracking-widest text-indigo-600 dark:text-indigo-400 mb-2">
            04 · Transparent Scope &amp; Instant Estimate
          </div>
          <h2
            className="font-display text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white tracking-tight"
            style={{ textWrap: 'balance' }}
          >
            Build Your Scope. Pay 50% Only After Live Test.
          </h2>
        </div>

        {/* Currency Switcher */}
        <div className="inline-flex items-center p-1 rounded-xl bg-slate-100 dark:bg-[#11131A] border border-slate-200 dark:border-white/[0.08] self-start md:self-auto">
          <button
            type="button"
            onClick={() => setCurrency('USD')}
            className={`px-4 py-1.5 rounded-lg text-xs font-semibold transition-colors whitespace-nowrap shrink-0 ${
              currency === 'USD'
                ? 'bg-indigo-600 text-white'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            International ($ USD)
          </button>
          <button
            type="button"
            onClick={() => setCurrency('BDT')}
            className={`px-4 py-1.5 rounded-lg text-xs font-semibold transition-colors whitespace-nowrap shrink-0 ${
              currency === 'BDT'
                ? 'bg-indigo-600 text-white'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            Bangladesh (৳ BDT)
          </button>
        </div>
      </div>

      <div className="grid lg:grid-cols-12 gap-8 items-start">
        {/* Module Selection Grid */}
        <div className="lg:col-span-7 space-y-3">
          {MODULES.map((mod) => {
            const isSelected = selectedIds.includes(mod.id);
            return (
              <div
                key={mod.id}
                onClick={() => toggleModule(mod.id)}
                className={`p-4 sm:p-5 rounded-2xl border transition-colors cursor-pointer ${
                  isSelected
                    ? 'glass-panel border-indigo-500/60 dark:border-indigo-500/50'
                    : 'bg-white dark:bg-[#11131A]/60 border-slate-200 dark:border-white/[0.06] opacity-75 hover:opacity-100'
                }`}
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-start gap-3.5">
                    <div className="mt-0.5">
                      <div
                        className={`w-5 h-5 rounded-md flex items-center justify-center border transition-colors ${
                          isSelected
                            ? 'bg-indigo-600 border-indigo-600 text-white'
                            : 'border-slate-300 dark:border-white/20 bg-transparent'
                        }`}
                      >
                        {isSelected && <CheckCircle2 className="w-3.5 h-3.5" />}
                      </div>
                    </div>
                    <div>
                      <div className="flex items-center gap-2 flex-wrap">
                        <h3 className="font-display font-bold text-slate-900 dark:text-white text-sm sm:text-base">
                          {mod.name}
                        </h3>
                        {mod.isCore && (
                          <span className="text-[11px] font-mono text-indigo-600 dark:text-indigo-400">
                            · Core Base
                          </span>
                        )}
                      </div>
                      <p className="text-xs text-slate-600 dark:text-slate-400 mt-1">
                        {mod.description}
                      </p>
                    </div>
                  </div>

                  <div className="text-right shrink-0 tabular-nums">
                    <div className="font-mono font-bold text-slate-900 dark:text-white text-sm sm:text-base">
                      +{formattedPrice(currency === 'USD' ? mod.priceUSD : mod.priceBDT)}
                    </div>
                    <div className="text-[11px] text-slate-500 dark:text-slate-400 flex items-center justify-end gap-1 mt-0.5">
                      <Clock className="w-3 h-3" />
                      <span>+{mod.days}d</span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Live Estimate & Action Card */}
        <div className="lg:col-span-5">
          <div className="p-6 sm:p-7 rounded-3xl glass-panel space-y-5 tabular-nums">
            <div className="flex items-center justify-between border-b border-slate-200 dark:border-white/[0.07] pb-4">
              <div>
                <span className="text-xs font-semibold text-slate-500 dark:text-slate-400">
                  Selected Scope ({selectedModules.length} Modules)
                </span>
                <div className="font-display text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white mt-0.5">
                  {formattedPrice(totalPrice)}
                </div>
              </div>
              <div className="text-right">
                <span className="text-xs text-slate-500 dark:text-slate-400 block">Delivery</span>
                <span className="font-mono text-sm font-bold text-emerald-600 dark:text-emerald-400">
                  ~{totalDays} Business Days
                </span>
              </div>
            </div>

            {/* 50/50 Breakdown */}
            <div className="p-4 rounded-2xl bg-slate-50 dark:bg-[#090A0F] border border-slate-200/80 dark:border-white/[0.06] space-y-2.5 text-xs">
              <div className="flex justify-between items-center text-slate-700 dark:text-slate-300">
                <span>50% Upfront to Start Build:</span>
                <span className="font-mono font-bold text-slate-900 dark:text-white">
                  {formattedPrice(upfront50)}
                </span>
              </div>
              <div className="flex justify-between items-center text-slate-700 dark:text-slate-300">
                <span>50% After Live Staging Test:</span>
                <span className="font-mono font-bold text-emerald-600 dark:text-emerald-400">
                  {formattedPrice(final50)}
                </span>
              </div>
            </div>

            {/* 3-Step Visual Onboarding Timeline */}
            <div className="space-y-2 pt-1">
              <div className="text-[11px] font-mono font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                Zero-Risk 3-Step Execution
              </div>
              <div className="grid grid-cols-3 gap-2 text-[11px]">
                <div className="p-2.5 rounded-xl bg-slate-50 dark:bg-[#090A0F] border border-slate-200/70 dark:border-white/[0.06]">
                  <div className="font-mono font-bold text-indigo-600 dark:text-indigo-400">Step 1</div>
                  <div className="font-semibold text-slate-800 dark:text-slate-200 mt-0.5">50% Kickoff</div>
                </div>
                <div className="p-2.5 rounded-xl bg-slate-50 dark:bg-[#090A0F] border border-slate-200/70 dark:border-white/[0.06]">
                  <div className="font-mono font-bold text-indigo-600 dark:text-indigo-400">48 Hours</div>
                  <div className="font-semibold text-slate-800 dark:text-slate-200 mt-0.5">Live Staging</div>
                </div>
                <div className="p-2.5 rounded-xl bg-slate-50 dark:bg-[#090A0F] border border-slate-200/70 dark:border-white/[0.06]">
                  <div className="font-mono font-bold text-emerald-600 dark:text-emerald-400">Day {totalDays}</div>
                  <div className="font-semibold text-slate-800 dark:text-slate-200 mt-0.5">GitHub + 50%</div>
                </div>
              </div>
            </div>

            <div className="flex items-start gap-2.5 text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              <ShieldCheck className="w-4 h-4 shrink-0 text-emerald-500 mt-0.5" />
              <span>
                Accepts Stripe, Wise, USDT (Global) &amp; bKash, Nagad, Bank Transfer (Bangladesh).
              </span>
            </div>

            {/* Direct 1-Click WhatsApp & Telegram Handoff */}
            <div className="space-y-2.5 pt-1">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 px-5 rounded-xl neon-button text-white font-semibold text-sm flex items-center justify-center gap-2 whitespace-nowrap"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Send Quote on WhatsApp (01618-138820)</span>
              </a>

              <div className="grid grid-cols-2 gap-2">
                <a
                  href={telegramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-2.5 px-3 rounded-xl bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 hover:border-indigo-500/40 text-slate-900 dark:text-white font-semibold text-xs transition-colors flex items-center justify-center gap-1.5 whitespace-nowrap"
                >
                  <Send className="w-3.5 h-3.5 text-indigo-500" />
                  <span>Send on Telegram</span>
                </a>
                <button
                  type="button"
                  onClick={handleCopy}
                  className="py-2.5 px-3 rounded-xl bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 hover:border-indigo-500/40 text-slate-900 dark:text-white font-semibold text-xs transition-colors whitespace-nowrap"
                >
                  {copied ? '✓ Scope Copied' : 'Copy Scope Brief'}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectScopeBuilder;
