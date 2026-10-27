import React from 'react';
import { Check, X, ShieldCheck, Zap, Sparkles } from 'lucide-react';
import SpotlightCard from './SpotlightCard';

export const ArchitectureComparisonMatrix: React.FC = () => {
  const comparisonItems = [
    {
      feature: 'Direct Lead Architect',
      traditional: 'Junior outsourced devs & account manager middleman',
      cryptoWebBuild: '1-on-1 direct engineering with Sagor Ahamed (Zero outsourcing)',
      badge: 'Zero Middleman',
    },
    {
      feature: 'Payment Risk & Milestones',
      traditional: '100% upfront or 50% upfront with zero refund & rigid scope lock',
      cryptoWebBuild: '50/50 Milestone Terms: Pay final 50% only after live staging testing',
      badge: '50/50 Protected',
    },
    {
      feature: 'Mobile Load Velocity (LCP)',
      traditional: '3.5s – 5.2s (Bloated WordPress/WooCommerce & Elementor themes)',
      cryptoWebBuild: '0.3s – 0.5s Edge SSR (Next.js 15 + Python/Django backend)',
      badge: 'Sub-0.5s Edge',
    },
    {
      feature: 'Google Core Web Vitals',
      traditional: '25 – 45/100 Mobile PageSpeed score (Red zone, hurts Google SEO)',
      cryptoWebBuild: 'Guaranteed 98 – 100/100 PageSpeed with schema JSON-LD',
      badge: '100/100 SEO',
    },
    {
      feature: 'Working Prototype Speed',
      traditional: '3 to 6 weeks just to see non-functional Figma mockups',
      cryptoWebBuild: 'Working, clickable React/Next.js live staging prototype in 48 hours',
      badge: '48h Prototype',
    },
    {
      feature: 'Code Ownership & Freedom',
      traditional: 'Vendor lock-in, proprietary hosting markup, high retainers',
      cryptoWebBuild: '100% full GitHub repository handover with 30-day warranty',
      badge: 'Zero Lock-In',
    },
    {
      feature: 'Checkout & Courier Automation',
      traditional: 'Slow 5-step form, manual "Inbox for Price" chat or broken plugins',
      cryptoWebBuild: '1-Click Stripe, bKash & COD + Automated Steadfast/Pathao sync',
      badge: '1-Click Conversion',
    },
  ];

  return (
    <section className="space-y-8">
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <div className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400">
          <Sparkles className="w-4 h-4 text-indigo-500" />
          <span>Architectural Comparison · Why Founders Choose Us</span>
        </div>
        <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
          Traditional Agency vs.{' '}
          <span className="text-indigo-600 dark:text-indigo-400">CryptoWebBuild</span>
        </h2>
        <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed">
          See why fast-growing international brands and top Bangladeshi stores switch from sluggish monolithic platforms to our sub-second architectures.
        </p>
      </div>

      <SpotlightCard className="p-0 border border-slate-200 dark:border-white/10 shadow-2xl">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse min-w-[680px]">
            <thead>
              <tr className="border-b border-slate-200 dark:border-white/10 bg-slate-50/80 dark:bg-white/[0.02]">
                <th className="py-5 px-6 text-xs font-mono uppercase font-bold text-slate-500 dark:text-slate-400 w-1/4">
                  Capability / Feature
                </th>
                <th className="py-5 px-6 text-xs font-mono uppercase font-bold text-red-500 dark:text-red-400 w-3/8">
                  Typical Agency / Monolithic WordPress
                </th>
                <th className="py-5 px-6 text-xs font-mono uppercase font-bold text-emerald-600 dark:text-emerald-400 bg-indigo-500/[0.04] dark:bg-indigo-500/[0.08] w-3/8">
                  CryptoWebBuild (Sagor Ahamed)
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200/80 dark:divide-white/[0.06] text-xs sm:text-sm">
              {comparisonItems.map((item, index) => (
                <tr
                  key={item.feature}
                  className={`hover:bg-slate-50/50 dark:hover:bg-white/[0.02] transition-colors ${
                    index % 2 === 0 ? 'bg-transparent' : 'bg-slate-50/20 dark:bg-white/[0.01]'
                  }`}
                >
                  <td className="py-4 px-6 font-bold text-slate-900 dark:text-white align-top">
                    <div>{item.feature}</div>
                    <span className="inline-block mt-1 px-2 py-0.5 rounded text-[10px] font-mono font-semibold bg-slate-100 dark:bg-white/5 text-slate-600 dark:text-slate-400">
                      {item.badge}
                    </span>
                  </td>

                  <td className="py-4 px-6 text-slate-500 dark:text-slate-400 align-top">
                    <div className="flex items-start gap-2">
                      <div className="w-5 h-5 rounded-full bg-red-500/10 text-red-500 flex items-center justify-center shrink-0 mt-0.5">
                        <X className="w-3.5 h-3.5" />
                      </div>
                      <span className="leading-relaxed">{item.traditional}</span>
                    </div>
                  </td>

                  <td className="py-4 px-6 text-slate-900 dark:text-white font-medium bg-indigo-500/[0.02] dark:bg-indigo-500/[0.04] align-top">
                    <div className="flex items-start gap-2">
                      <div className="w-5 h-5 rounded-full bg-emerald-500/10 text-emerald-500 flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-3.5 h-3.5" />
                      </div>
                      <span className="leading-relaxed">{item.cryptoWebBuild}</span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </SpotlightCard>
    </section>
  );
};

export default ArchitectureComparisonMatrix;
