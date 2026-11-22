import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import ProjectScopeBuilder from '../components/ProjectScopeBuilder';

const Pricing: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10 space-y-8">
      <SEO
        title="Pricing and Instant Estimate | CryptoWebBuild"
        description="Module pricing in USD and BDT for Next.js storefronts, checkout, Django, SEO, and automation. Fixed quote after a 15-minute scope call. 50% due after staging."
        canonical="/pricing"
      />
      <div className="max-w-3xl space-y-4">
        <div className="text-xs font-bold uppercase tracking-widest text-indigo-600 dark:text-indigo-400">
          Pricing
        </div>
        <h1 className="font-display text-3xl sm:text-5xl font-bold text-slate-900 dark:text-white tracking-tight">
          Price it before you talk to me.
        </h1>
        <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl">
          Module prices in both currencies. This is an estimate; it becomes a fixed quote after a 15 minute scope
          call. The final 50% is only due after you test the staging build.
        </p>
      </div>

      <ProjectScopeBuilder />

      <div className="rounded-2xl border border-slate-200 dark:border-white/10 bg-white dark:bg-[#11131A] p-6 sm:p-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <div className="text-xs font-bold uppercase tracking-widest text-indigo-600 dark:text-indigo-400 mb-2">
            Before you configure
          </div>
          <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl">
            Not sure which modules you actually need? Read the 2026 breakdown of what a website costs in Bangladesh,
            including the line items most quotes hide.
          </p>
        </div>
        <Link
          to="/blog/website-cost-bangladesh-2026"
          className="inline-flex items-center gap-2 shrink-0 text-sm font-semibold text-indigo-600 dark:text-indigo-400 hover:underline"
        >
          Read the cost breakdown
          <span aria-hidden="true">&rarr;</span>
        </Link>
      </div>
    </div>
  );
};

export default Pricing;
