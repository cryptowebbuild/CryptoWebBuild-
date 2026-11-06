import React from 'react';
import { ShieldCheck, Zap, Lock, Award } from 'lucide-react';

export const TrustBadges: React.FC<{ className?: string }> = ({ className = '' }) => {
  const badges = [
    {
      icon: Zap,
      title: '100/100 PageSpeed',
      subtitle: 'Google Core Web Vitals',
      badgeClass: 'text-amber-500 bg-amber-500/10 border-amber-500/20',
    },
    {
      icon: ShieldCheck,
      title: '50/50 Risk-Free Terms',
      subtitle: 'Pay After Live Staging Test',
      badgeClass: 'text-emerald-500 bg-emerald-500/10 border-emerald-500/20',
    },
    {
      icon: Lock,
      title: '1-Click Checkout',
      subtitle: 'Stripe, bKash, Nagad & COD',
      badgeClass: 'text-indigo-500 bg-indigo-500/10 border-indigo-500/20',
    },
    {
      icon: Award,
      title: '100% Code Handover',
      subtitle: 'Full GitHub Ownership',
      badgeClass: 'text-cyan-500 bg-cyan-500/10 border-cyan-500/20',
    },
  ];

  return (
    <div className={`w-full py-4 ${className}`}>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
        {badges.map((b) => {
          const Icon = b.icon;
          return (
            <div
              key={b.title}
              className="p-3.5 sm:p-4 rounded-2xl bg-white dark:bg-[#11131A] border border-slate-200/80 dark:border-white/[0.08] flex items-center gap-3 transition-colors hover:border-indigo-500/30"
            >
              <div className={`w-9 h-9 sm:w-10 sm:h-10 rounded-xl flex items-center justify-center shrink-0 border ${b.badgeClass}`}>
                <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
              </div>
              <div className="min-w-0">
                <div className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white truncate">
                  {b.title}
                </div>
                <div className="text-[11px] sm:text-xs text-slate-500 dark:text-slate-400 truncate">
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
