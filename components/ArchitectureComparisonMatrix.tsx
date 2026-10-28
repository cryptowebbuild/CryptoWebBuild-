import React from 'react';
import { Check, X, Sparkles } from 'lucide-react';
import SpotlightCard from './SpotlightCard';

export const ArchitectureComparisonMatrix: React.FC = () => {
  const comparisonItems = [
    {
      feature: 'Lead Engineer',
      traditional: 'Outsourced junior devs & account managers',
      cryptoWebBuild: 'Direct 1-on-1 with Sagor Ahamed (Zero middleman)',
      badge: 'Zero Middleman',
    },
    {
      feature: 'Payment Terms',
      traditional: '100% upfront or rigid scope lock with no refund',
      cryptoWebBuild: '50/50 Terms: Pay final 50% only after live staging test',
      badge: '50/50 Risk-Free',
    },
    {
      feature: 'Mobile Load Velocity',
      traditional: '3.5s – 5.2s (Bloated WordPress & PHP themes)',
      cryptoWebBuild: '0.3s – 0.5s Edge SSR (Next.js 15 & Python/Django)',
      badge: 'Sub-0.5s Edge',
    },
    {
      feature: 'Live Prototype',
      traditional: '3 to 6 weeks for non-functional Figma mockups',
      cryptoWebBuild: 'Clickable live staging prototype in 48 hours',
      badge: '48h Prototype',
    },
    {
      feature: 'Checkout & Courier',
      traditional: '5-step cart form or manual "Inbox for Price" chat',
      cryptoWebBuild: '1-Click bKash/Stripe + Automated Steadfast/Pathao API',
      badge: '1-Click Conversion',
    },
    {
      feature: 'Code Ownership',
      traditional: 'Vendor lock-in, proprietary hosting, monthly fees',
      cryptoWebBuild: '100% full GitHub repository handover + 30-day warranty',
      badge: '100% Ownership',
    },
  ];

  return (
    <section className="space-y-6">
      <div className="text-center max-w-2xl mx-auto space-y-2">
        <div className="inline-flex items-center gap-1.5 text-xs font-mono font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400">
          <Sparkles className="w-3.5 h-3.5 text-indigo-500" />
          <span>Architectural Comparison</span>
        </div>
        <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
          Traditional Agency vs.{' '}
          <span className="text-indigo-600 dark:text-indigo-400">CryptoWebBuild</span>
        </h2>
        <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400">
          Why founders and D2C brands switch to direct engineering and sub-second speed.
        </p>
      </div>

      <SpotlightCard className="p-0 border border-slate-200 dark:border-white/10 shadow-xl overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse min-w-[620px]">
            <thead>
              <tr className="border-b border-slate-200 dark:border-white/10 bg-slate-50/80 dark:bg-white/[0.02]">
                <th className="py-3.5 px-5 text-xs font-mono uppercase font-bold text-slate-500 dark:text-slate-400 w-1/4">
                  Feature
                </th>
                <th className="py-3.5 px-5 text-xs font-mono uppercase font-bold text-red-500 dark:text-red-400 w-3/8">
                  Typical Agency / WordPress
                </th>
                <th className="py-3.5 px-5 text-xs font-mono uppercase font-bold text-emerald-600 dark:text-emerald-400 bg-indigo-500/[0.04] dark:bg-indigo-500/[0.08] w-3/8">
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
                  <td className="py-3.5 px-5 font-bold text-slate-900 dark:text-white align-middle">
                    <div>{item.feature}</div>
                    <span className="inline-block mt-0.5 px-2 py-0.5 rounded text-[10px] font-mono font-semibold bg-slate-100 dark:bg-white/5 text-slate-600 dark:text-slate-400">
                      {item.badge}
                    </span>
                  </td>

                  <td className="py-3.5 px-5 text-slate-500 dark:text-slate-400 align-middle">
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 rounded-full bg-red-500/10 text-red-500 flex items-center justify-center shrink-0">
                        <X className="w-3 h-3" />
                      </div>
                      <span>{item.traditional}</span>
                    </div>
                  </td>

                  <td className="py-3.5 px-5 text-slate-900 dark:text-white font-medium bg-indigo-500/[0.02] dark:bg-indigo-500/[0.04] align-middle">
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 rounded-full bg-emerald-500/10 text-emerald-500 flex items-center justify-center shrink-0">
                        <Check className="w-3 h-3" />
                      </div>
                      <span>{item.cryptoWebBuild}</span>
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
