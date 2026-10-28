import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { X, MessageSquare, Zap, ArrowRight, ExternalLink, Clock, DollarSign, Calendar } from 'lucide-react';

interface ServiceEstimate {
  id: string;
  name: string;
  days: string;
  priceUSD: string;
  priceBDT: string;
  highlight: string;
}

const SERVICE_ESTIMATES: ServiceEstimate[] = [
  {
    id: 'commerce',
    name: 'Custom Web / 1-Click E-Commerce',
    days: '4–7 Days',
    priceUSD: '$450+',
    priceBDT: '৳54,000+',
    highlight: '0.4s Next.js + 1-Click bKash/Stripe + Steadfast API',
  },
  {
    id: 'seo',
    name: 'Technical SEO & 100/100 Speed Audit',
    days: '2–3 Days',
    priceUSD: '$200+',
    priceBDT: '৳24,000+',
    highlight: 'Core Web Vitals 100/100 + Programmatic JSON-LD',
  },
  {
    id: 'automation',
    name: 'Custom RAG AI Agent & WhatsApp Sync',
    days: '3–5 Days',
    priceUSD: '$300+',
    priceBDT: '৳36,000+',
    highlight: '24/7 WhatsApp & Web Order Confirmation Bot',
  },
  {
    id: 'saas',
    name: 'Python/Django SaaS or Web3 dApp',
    days: '7–14 Days',
    priceUSD: '$850+',
    priceBDT: '৳1,02,000+',
    highlight: 'PostgreSQL, high-concurrency API & custom dashboard',
  },
];

export const FloatingChatWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedServiceId, setSelectedServiceId] = useState<string>('commerce');

  const selectedEstimate =
    SERVICE_ESTIMATES.find((s) => s.id === selectedServiceId) || SERVICE_ESTIMATES[0];

  const whatsappUrl = `https://wa.me/8801618138820?text=${encodeURIComponent(
    `Hi Sagor, I was on CryptoWebBuild.com and looked at the estimate for "${selectedEstimate.name}" (${selectedEstimate.priceUSD} / ${selectedEstimate.priceBDT}, ${selectedEstimate.days}). Let's discuss!`
  )}`;

  return (
    <div className="hidden md:block fixed bottom-6 right-6 z-40">
      {isOpen && (
        <div
          className="mb-4 w-[calc(100vw-36px)] sm:w-96 rounded-3xl bg-white dark:bg-[#0f141f] border border-slate-200 dark:border-white/10 shadow-2xl overflow-hidden animate-in fade-in slide-in-from-bottom-2 duration-200"
          role="dialog"
          aria-label="CryptoWebBuild Quick Concierge & Estimator"
        >
          {/* Header */}
          <div className="px-5 py-4 bg-slate-50 dark:bg-[#090A0F] border-b border-slate-200 dark:border-white/10 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-indigo-600 to-emerald-500 flex items-center justify-center text-white font-display font-bold text-sm shadow-sm">
                CW
              </div>
              <div>
                <div className="font-display font-bold text-sm text-slate-900 dark:text-white">
                  CryptoWebBuild Direct
                </div>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  Sagor Ahamed · 50/50 Risk-Free
                </p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-1.5 rounded-lg text-slate-500 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/10 transition-colors"
              aria-label="Close concierge"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <div className="p-5 space-y-4 max-h-[75vh] overflow-y-auto">
            <p className="text-[11px] font-mono font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
              Select Service for Instant Estimate:
            </p>

            {/* Service Selection */}
            <div className="grid grid-cols-1 gap-2">
              {SERVICE_ESTIMATES.map((service) => (
                <button
                  key={service.id}
                  type="button"
                  onClick={() => setSelectedServiceId(service.id)}
                  className={`text-left px-3.5 py-2.5 rounded-xl text-xs font-semibold border transition-all flex items-center justify-between ${
                    selectedServiceId === service.id
                      ? 'bg-indigo-500/10 border-indigo-500 text-slate-900 dark:text-white shadow-sm'
                      : 'bg-slate-50 dark:bg-white/[0.03] border-slate-200 dark:border-white/5 text-slate-700 dark:text-slate-300 hover:border-indigo-500/30'
                  }`}
                >
                  <span>{service.name}</span>
                  <Zap
                    className={`w-3.5 h-3.5 ${
                      selectedServiceId === service.id
                        ? 'text-indigo-600 dark:text-indigo-400'
                        : 'opacity-30'
                    }`}
                  />
                </button>
              ))}
            </div>

            {/* Instant Estimate Card */}
            <div className="p-4 rounded-2xl bg-indigo-50/50 dark:bg-[#090A0F] border border-indigo-500/20 space-y-2.5 tabular-nums">
              <div className="flex items-center justify-between text-xs">
                <span className="text-slate-500 dark:text-slate-400 font-medium">Estimated Budget:</span>
                <span className="font-mono font-bold text-slate-900 dark:text-white">
                  {selectedEstimate.priceUSD} / {selectedEstimate.priceBDT}
                </span>
              </div>
              <div className="flex items-center justify-between text-xs">
                <span className="text-slate-500 dark:text-slate-400 font-medium flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5 text-indigo-500" />
                  Turnaround:
                </span>
                <span className="font-mono font-bold text-emerald-600 dark:text-emerald-400">
                  {selectedEstimate.days}
                </span>
              </div>
              <div className="pt-2 border-t border-slate-200/80 dark:border-white/[0.06] text-[11px] text-slate-600 dark:text-slate-400">
                {selectedEstimate.highlight} · <strong>50% after live test</strong>.
              </div>
            </div>

            {/* Actions */}
            <div className="space-y-2 pt-1">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 px-4 rounded-xl neon-button text-white font-semibold text-xs flex items-center justify-center gap-2 shadow-lg whitespace-nowrap"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Discuss on WhatsApp (01618-138820)</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>

              <div className="grid grid-cols-2 gap-2">
                <a
                  href="https://cal.com/cryptowebbuilddev/15min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-2.5 px-3 rounded-xl bg-slate-100 dark:bg-white/5 hover:bg-slate-200 dark:hover:bg-white/10 text-slate-900 dark:text-white font-semibold text-xs flex items-center justify-center gap-1.5 border border-slate-200 dark:border-white/10 transition-colors whitespace-nowrap"
                >
                  <Calendar className="w-3.5 h-3.5 text-indigo-500" />
                  <span>Book Call</span>
                </a>
                <Link
                  to="/contact"
                  onClick={() => setIsOpen(false)}
                  className="py-2.5 px-3 rounded-xl bg-slate-100 dark:bg-white/5 hover:bg-slate-200 dark:hover:bg-white/10 text-slate-900 dark:text-white font-semibold text-xs flex items-center justify-center gap-1.5 border border-slate-200 dark:border-white/10 transition-colors whitespace-nowrap"
                >
                  <span>Scope Tool</span>
                  <ArrowRight className="w-3.5 h-3.5 text-emerald-500" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Floating Action Bubble */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        aria-label={isOpen ? 'Close quick concierge' : 'Open quick concierge & estimator'}
        className="w-14 h-14 rounded-full neon-button text-white flex items-center justify-center border border-white/20 shadow-xl hover:scale-105 transition-transform ml-auto"
      >
        {isOpen ? <X className="w-6 h-6" /> : <MessageSquare className="w-6 h-6" />}
      </button>
    </div>
  );
};

export default FloatingChatWidget;
