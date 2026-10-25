import React from 'react';
import { ShieldCheck, Zap, Lock, Award, CheckCircle2, RefreshCw } from 'lucide-react';

export const TrustBadges: React.FC<{ className?: string }> = ({ className = '' }) => {
  const badges = [
    {
      icon: Zap,
      title: '100/100 Core Web Vitals',
      subtitle: 'Google Edge Certified',
      badgeClass: 'text-amber-500 bg-amber-500/10 border-amber-500/20',
    },
    {
      icon: ShieldCheck,
      title: '50/50 Risk-Free Build',
      subtitle: 'Pay After Live Staging Test',
      badgeClass: 'text-emerald-500 bg-emerald-500/10 border-emerald-500/20',
    },
    {
      icon: Lock,
      title: '1-Click bKash & Stripe',
      subtitle: 'Bank-Grade Payment Tokenization',
      badgeClass: 'text-indigo-500 bg-indigo-500/10 border-indigo-500/20',
    },
    {
      icon: RefreshCw,
      title: 'Steadfast & Pathao Sync',
      subtitle: 'Instant Automated Webhooks',
      badgeClass: 'text-purple-500 bg-purple-500/10 border-purple-500/20',
    },
    {
      icon: Award,
      title: '100% Code Handover',
      subtitle: 'Full GitHub Ownership & No Lock-In',
      badgeClass: 'text-cyan-500 bg-cyan-500/10 border-cyan-500/20',
    },
  ];

  return (
    <div className={`w-full py-4 ${className}`}>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3.5">
        {badges.map((b) => {
          const Icon = b.icon;
          return (
            <div
              key={b.title}
              className="p-3.5 rounded-2xl bg-white dark:bg-[#11131A] border border-slate-200/80 dark:border-white/[0.08] flex items-center gap-3 transition-colors hover:border-indigo-500/30"
            >
              <div className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 border ${b.badgeClass}`}>
                <Icon className="w-4 h-4" />
              </div>
              <div className="min-w-0">
                <div className="text-xs font-bold text-slate-900 dark:text-white truncate">
                  {b.title}
                </div>
                <div className="text-[11px] text-slate-500 dark:text-slate-400 truncate">
                  {b.subtitle}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TrustBadges;
