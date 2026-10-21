import React from 'react';
import { Check, X, Zap, Shield, Gauge, DollarSign } from 'lucide-react';

export const ArchitectureComparison: React.FC = () => {
  const comparisonRows = [
    {
      metric: 'Mobile Load Time & LCP',
      cryptoWebBuild: '< 0.8s (Edge Cached)',
      cwbStatus: true,
      wordpress: '3.8s – 6.5s (Bloated)',
      wpStatus: false,
      shopify: '2.4s – 4.2s (Theme Apps)',
      shopifyStatus: false,
    },
    {
      metric: 'Google Lighthouse Performance',
      cryptoWebBuild: '100 / 100 Core Web Vitals',
      cwbStatus: true,
      wordpress: '32 – 55 / 100 (Red/Yellow)',
      wpStatus: false,
      shopify: '55 – 72 / 100 (Orange)',
      shopifyStatus: false,
    },
    {
      metric: 'Monthly Plugin & App Maintenance',
      cryptoWebBuild: '$0 / Month (Custom Code)',
      cwbStatus: true,
      wordpress: '$50 – $250 / Month',
      wpStatus: false,
      shopify: '$120 – $450 / Month',
      shopifyStatus: false,
    },
    {
      metric: 'Checkout & Conversion Flow',
      cryptoWebBuild: '1-Click Direct Instant Form',
      cwbStatus: true,
      wordpress: '3-Step Slow Cart Redirection',
      wpStatus: false,
      shopify: 'Hosted Multi-Step Redirect',
      shopifyStatus: false,
    },
    {
      metric: 'Vulnerabilities & Security Risks',
      cryptoWebBuild: 'Zero-Exploit Headless Sandbox',
      cwbStatus: true,
      wordpress: 'Frequent Plugin CVE Exploits',
      wpStatus: false,
      shopify: 'Dependent on 3rd-Party Scripts',
      shopifyStatus: false,
    },
    {
      metric: 'Source Code & Data Ownership',
      cryptoWebBuild: '100% Full Ownership (GitHub)',
      cwbStatus: true,
      wordpress: 'Plugin & Theme Lock-In',
      wpStatus: false,
      shopify: 'Hosted SaaS Platform Lock-In',
      shopifyStatus: false,
    },
    {
      metric: '24/7 AI Sales & Support Agent',
      cryptoWebBuild: 'Native RAG Agent (WhatsApp/Web)',
      cwbStatus: true,
      wordpress: 'Requires Heavy External Chat SaaS',
      wpStatus: false,
      shopify: 'Expensive Shopify App Add-on',
      shopifyStatus: false,
    },
  ];

  return (
    <section className="my-24 max-w-7xl mx-auto px-4 sm:px-6">
      <div className="text-center mb-12">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-100 dark:bg-purple-900/30 border border-purple-200 dark:border-purple-500/30 text-purple-700 dark:text-purple-300 text-xs font-bold uppercase tracking-wider mb-4 shadow-sm">
          <Gauge className="w-3.5 h-3.5" />
          Architectural Benchmark
        </div>
        <h2 className="font-display text-3xl sm:text-5xl font-black text-gray-900 dark:text-white mb-4">
          Next.js + Django vs{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-orange-500 to-amber-500">
            Bloated Alternatives
          </span>
        </h2>
        <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-base sm:text-lg">
          Why ambitious founders replace generic templates with custom engineering. Stop losing 50%+ of your paid mobile traffic to slow load times and checkout drop-off.
        </p>
      </div>

      <div className="rounded-3xl glass-panel border border-gray-200 dark:border-white/10 overflow-hidden shadow-xl">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse min-w-[650px]">
            <thead>
              <tr className="border-b border-gray-200 dark:border-white/10 bg-gray-50/70 dark:bg-white/[0.02]">
                <th className="p-5 font-bold text-gray-500 dark:text-gray-400 text-xs uppercase tracking-wider w-1/3">
                  Engineering Metric
                </th>
                <th className="p-5 font-black text-sm uppercase tracking-wider text-purple-600 dark:text-purple-400 bg-purple-500/[0.08] border-x border-purple-500/20">
                  <div className="flex items-center gap-1.5">
                    <Zap className="w-4 h-4 text-purple-500" />
                    <span>CryptoWebBuild</span>
                  </div>
                  <div className="text-[11px] font-normal text-gray-600 dark:text-gray-300 normal-case mt-0.5">
                    Next.js 15 + Python/Django
                  </div>
                </th>
                <th className="p-5 font-bold text-xs uppercase tracking-wider text-gray-600 dark:text-gray-400">
                  WordPress + WooCommerce
                </th>
                <th className="p-5 font-bold text-xs uppercase tracking-wider text-gray-600 dark:text-gray-400">
                  Shopify Store
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 dark:divide-white/5 text-sm">
              {comparisonRows.map((row, idx) => (
                <tr
                  key={row.metric}
                  className={idx % 2 === 0 ? 'bg-transparent' : 'bg-gray-50/40 dark:bg-white/[0.01]'}
                >
                  <td className="p-5 font-bold text-gray-900 dark:text-white">
                    {row.metric}
                  </td>
                  <td className="p-5 font-mono font-bold text-emerald-600 dark:text-emerald-400 bg-purple-500/[0.05] border-x border-purple-500/20">
                    <div className="flex items-center gap-2">
                      <span className="p-1 rounded-full bg-emerald-500/20 text-emerald-600 dark:text-emerald-400">
                        <Check className="w-3.5 h-3.5" />
                      </span>
                      <span>{row.cryptoWebBuild}</span>
                    </div>
                  </td>
                  <td className="p-5 text-gray-500 dark:text-gray-400 font-medium">
                    <div className="flex items-center gap-2">
                      <span className="p-1 rounded-full bg-red-500/10 text-red-500">
                        <X className="w-3.5 h-3.5" />
                      </span>
                      <span>{row.wordpress}</span>
                    </div>
                  </td>
                  <td className="p-5 text-gray-500 dark:text-gray-400 font-medium">
                    <div className="flex items-center gap-2">
                      <span className="p-1 rounded-full bg-orange-500/10 text-orange-500">
                        <X className="w-3.5 h-3.5" />
                      </span>
                      <span>{row.shopify}</span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Bottom Banner inside table */}
        <div className="p-6 bg-gradient-to-r from-purple-500/[0.08] to-cyan-500/[0.08] border-t border-purple-500/20 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-xs sm:text-sm text-gray-700 dark:text-gray-300 font-medium text-center sm:text-left">
            ⚡ <strong>The Math:</strong> A 1-second delay in page load time reduces mobile conversions by 7%. Our architectures load in under 0.8 seconds.
          </div>
          <a
            href="https://wa.me/8801618138820?text=Hi%20Sagor%2C%20I%20want%20to%20replace%20my%20slow%20website%20with%20a%20sub-second%20Next.js%20architecture."
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 px-6 py-2.5 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-bold text-xs shadow-md transition-colors"
          >
            Request Speed Migration
          </a>
        </div>
      </div>
    </section>
  );
};

export default ArchitectureComparison;
