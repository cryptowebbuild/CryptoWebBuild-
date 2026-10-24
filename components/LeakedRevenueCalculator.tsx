import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Zap, TrendingUp, AlertTriangle, ArrowRight, MessageSquare, CheckCircle2 } from 'lucide-react';

export type CalculatorMetrics = CalculatorResult;
export interface CalculatorResult {
  monthlyVisitors: number;
  statusLabel: string;
  averageOrderValue: number;
  monthlyLeakedRevenue: number;
  annualLeakedRevenue: number;
  projectedMonthlyRevenue: number;
}

interface LeakedRevenueCalculatorProps {
  onApplyToAudit?: (result: CalculatorResult) => void;
}

const SITE_STATUS_OPTIONS = [
  {
    id: 'inbox-only',
    label: 'No Website (Facebook / Inbox Orders Only)',
    tag: '~65% buyer drop-off waiting for manual DM replies',
    currentConvRate: 0.009,
    optimizedConvRate: 0.028,
    speedLossShare: 0.25,
    checkoutLossShare: 0.5,
    aiLeadLossShare: 0.25,
  },
  {
    id: 'slow-site',
    label: 'Slow WordPress / Shopify Site (3.5s+ Load)',
    tag: '~53% mobile visitors bounce before page loads',
    currentConvRate: 0.013,
    optimizedConvRate: 0.032,
    speedLossShare: 0.45,
    checkoutLossShare: 0.35,
    aiLeadLossShare: 0.2,
  },
  {
    id: 'custom-unoptimized',
    label: 'Standard Website Without SEO / 24/7 AI Funnel',
    tag: 'Missing high-intent search & instant AI lead capture',
    currentConvRate: 0.018,
    optimizedConvRate: 0.036,
    speedLossShare: 0.3,
    checkoutLossShare: 0.3,
    aiLeadLossShare: 0.4,
  },
];

const LeakedRevenueCalculator: React.FC<LeakedRevenueCalculatorProps> = ({ onApplyToAudit }) => {
  const [currency, setCurrency] = useState<'USD' | 'BDT'>('USD');
  const [monthlyVisitors, setMonthlyVisitors] = useState<number>(10000);
  const [statusId, setStatusId] = useState<string>('slow-site');
  const [averageOrderValueUSD, setAverageOrderValueUSD] = useState<number>(100);
  const [averageOrderValueBDT, setAverageOrderValueBDT] = useState<number>(3000);

  const averageOrderValue = currency === 'USD' ? averageOrderValueUSD : averageOrderValueBDT;

  const selectedStatus = useMemo(
    () => SITE_STATUS_OPTIONS.find((s) => s.id === statusId) || SITE_STATUS_OPTIONS[1],
    [statusId]
  );

  const metrics = useMemo(() => {
    // Exact continuous calculation to prevent step-rounding errors
    const exactCurrentOrders = monthlyVisitors * selectedStatus.currentConvRate;
    const exactOptimizedOrders = monthlyVisitors * selectedStatus.optimizedConvRate;

    const currentMonthlyRevenue = Math.round(exactCurrentOrders * averageOrderValue);
    const projectedMonthlyRevenue = Math.round(exactOptimizedOrders * averageOrderValue);
    const monthlyLeakedRevenue = Math.max(0, projectedMonthlyRevenue - currentMonthlyRevenue);
    const annualLeakedRevenue = monthlyLeakedRevenue * 12;

    const speedLoss = Math.round(monthlyLeakedRevenue * selectedStatus.speedLossShare);
    const checkoutLoss = Math.round(monthlyLeakedRevenue * selectedStatus.checkoutLossShare);
    const aiLeadLoss = Math.max(0, monthlyLeakedRevenue - speedLoss - checkoutLoss);

    const currentOrdersDisplay = Math.max(1, Math.round(exactCurrentOrders));
    const optimizedOrdersDisplay = Math.max(currentOrdersDisplay + 1, Math.round(exactOptimizedOrders));
    const conversionLiftPct = Math.round(
      ((selectedStatus.optimizedConvRate - selectedStatus.currentConvRate) / selectedStatus.currentConvRate) * 100
    );

    return {
      currentOrdersDisplay,
      optimizedOrdersDisplay,
      currentMonthlyRevenue,
      projectedMonthlyRevenue,
      monthlyLeakedRevenue,
      annualLeakedRevenue,
      speedLoss,
      checkoutLoss,
      aiLeadLoss,
      conversionLiftPct,
    };
  }, [monthlyVisitors, selectedStatus, averageOrderValue]);

  const formatCurrency = (val: number) => {
    return currency === 'USD' ? `$${val.toLocaleString()}` : `৳${val.toLocaleString()}`;
  };

  const whatsappAuditUrl = `https://wa.me/8801618138820?text=${encodeURIComponent(
    `Hi Sagor, I ran the CryptoWebBuild Revenue Diagnostic:\n• Monthly Visitors: ${monthlyVisitors.toLocaleString()}\n• Setup: ${selectedStatus.label}\n• Avg Order Value: ${formatCurrency(averageOrderValue)}\n• Est. Leaked Revenue: ${formatCurrency(metrics.monthlyLeakedRevenue)}/mo (${formatCurrency(metrics.annualLeakedRevenue)}/yr)\n\nI want to claim my 48-hour live prototype to fix these leaks!`
  )}`;

  return (
    <div className="max-w-6xl mx-auto">
      <div className="text-center max-w-3xl mx-auto mb-10">
        <div className="inline-block px-4 py-1.5 mb-3 rounded-full bg-purple-50 dark:bg-white/5 border border-purple-200 dark:border-purple-500/30 text-purple-700 dark:text-purple-400 text-xs font-bold tracking-wider uppercase">
          Revenue &amp; Speed Risk Calculator
        </div>
        <h2 className="font-display text-3xl sm:text-5xl font-bold text-slate-900 dark:text-white mb-4">
          See What Slow Load Times &amp;{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-cyan-500 dark:from-purple-400 dark:to-cyan-400">
            Manual Funnels Cost You
          </span>
        </h2>
        <p className="text-slate-600 dark:text-slate-400 text-base sm:text-lg mb-6">
          Adjust your traffic and order value to calculate how much revenue leaks through 4s+ load times and manual DM/checkout bottlenecks.
        </p>

        {/* Currency Switcher */}
        <div className="inline-flex items-center p-1 rounded-2xl bg-gray-100 dark:bg-[#0B1120] border border-gray-200 dark:border-white/10 shadow-sm">
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

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        {/* Left Controls Card */}
        <div className="lg:col-span-7 p-6 sm:p-9 rounded-[28px] glass-panel flex flex-col justify-between space-y-7">
          {/* 1. Monthly Visitors */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <label
                htmlFor="calc-visitors"
                className="text-xs sm:text-sm font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider"
              >
                1. Monthly Website / Page Visitors
              </label>
              <span className="px-3.5 py-1 rounded-xl bg-purple-500/10 border border-purple-500/20 font-display font-bold text-purple-600 dark:text-purple-400 text-base">
                {monthlyVisitors.toLocaleString()} / mo
              </span>
            </div>
            <input
              id="calc-visitors"
              type="range"
              min={500}
              max={50000}
              step={500}
              value={monthlyVisitors}
              onChange={(e) => setMonthlyVisitors(Number(e.target.value))}
              className="w-full h-2.5 bg-slate-200 dark:bg-slate-800 rounded-lg appearance-none cursor-pointer accent-purple-600"
            />
            <div className="flex justify-between text-xs font-semibold text-slate-500 dark:text-slate-400">
              <span>500 / mo</span>
              <span>15,000 / mo</span>
              <span>50,000+ / mo</span>
            </div>
          </div>

          {/* 2. Current Architecture Status */}
          <div className="space-y-3">
            <label className="text-xs sm:text-sm font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider block">
              2. Your Current Online Setup
            </label>
            <div className="space-y-2.5">
              {SITE_STATUS_OPTIONS.map((opt) => (
                <button
                  key={opt.id}
                  type="button"
                  onClick={() => setStatusId(opt.id)}
                  className={`w-full text-left p-3.5 rounded-2xl border transition-all ${
                    statusId === opt.id
                      ? 'border-purple-500/80 bg-purple-500/[0.08] shadow-sm'
                      : 'border-slate-200 dark:border-white/5 hover:border-slate-300 dark:hover:border-white/10 bg-transparent'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-sm text-slate-900 dark:text-white">
                      {opt.label}
                    </span>
                    <span
                      className={`w-4 h-4 rounded-full border flex items-center justify-center shrink-0 ml-2 ${
                        statusId === opt.id
                          ? 'border-purple-500 bg-purple-500'
                          : 'border-slate-400 dark:border-slate-600'
                      }`}
                    >
                      {statusId === opt.id && <span className="w-1.5 h-1.5 rounded-full bg-white" />}
                    </span>
                  </div>
                  <span className="text-xs text-slate-500 dark:text-slate-400 mt-1 block font-medium">
                    {opt.tag}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* 3. Average Order Value */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <label
                htmlFor="calc-aov"
                className="text-xs sm:text-sm font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider"
              >
                3. Average Order or Client Value ({currency})
              </label>
              <span className="px-3.5 py-1 rounded-xl bg-cyan-500/10 border border-cyan-500/20 font-display font-bold text-cyan-600 dark:text-cyan-400 text-base">
                {formatCurrency(averageOrderValue)}
              </span>
            </div>
            {currency === 'USD' ? (
              <input
                id="calc-aov"
                type="range"
                min={10}
                max={1000}
                step={10}
                value={averageOrderValueUSD}
                onChange={(e) => setAverageOrderValueUSD(Number(e.target.value))}
                className="w-full h-2.5 bg-slate-200 dark:bg-slate-800 rounded-lg appearance-none cursor-pointer accent-cyan-500"
              />
            ) : (
              <input
                id="calc-aov"
                type="range"
                min={500}
                max={30000}
                step={500}
                value={averageOrderValueBDT}
                onChange={(e) => setAverageOrderValueBDT(Number(e.target.value))}
                className="w-full h-2.5 bg-slate-200 dark:bg-slate-800 rounded-lg appearance-none cursor-pointer accent-cyan-500"
              />
            )}
            <div className="flex justify-between text-xs font-semibold text-slate-500 dark:text-slate-400">
              <span>{formatCurrency(currency === 'USD' ? 10 : 500)}</span>
              <span>{formatCurrency(currency === 'USD' ? 500 : 15000)}</span>
              <span>{formatCurrency(currency === 'USD' ? 1000 : 30000)}+</span>
            </div>
          </div>
        </div>

        {/* Right Output Diagnostics Card */}
        <div className="lg:col-span-5 p-7 sm:p-9 rounded-[28px] glass-panel border border-purple-200 dark:border-purple-500/30 bg-gradient-to-br from-purple-50 via-white to-cyan-50 dark:from-[#0B1120] dark:via-[#020617] dark:to-[#0F172A] flex flex-col justify-between shadow-xl">
          <div>
            <div className="flex items-center justify-between pb-4 border-b border-slate-200 dark:border-white/10 mb-6">
              <span className="text-xs font-bold uppercase tracking-wider text-purple-700 dark:text-purple-400">
                Revenue Leak Diagnosis
              </span>
              <span className="px-2.5 py-1 rounded-full text-xs font-bold bg-red-100 dark:bg-red-500/20 text-red-700 dark:text-red-400 flex items-center gap-1">
                <AlertTriangle className="w-3.5 h-3.5" />
                Active Loss
              </span>
            </div>

            {/* Big Headline Stat */}
            <div className="space-y-2 mb-6">
              <span className="text-xs sm:text-sm font-bold text-slate-600 dark:text-slate-400 uppercase tracking-wider block">
                Estimated Monthly Leaked Revenue:
              </span>
              <div className="font-display text-4xl sm:text-5xl font-black text-red-600 dark:text-red-400">
                {formatCurrency(metrics.monthlyLeakedRevenue)}
                <span className="text-base sm:text-lg font-medium text-slate-500 dark:text-slate-400"> / month</span>
              </div>
              <div className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 font-medium pt-1">
                ≈ <span className="font-bold text-slate-900 dark:text-white">{formatCurrency(metrics.annualLeakedRevenue)}</span> every 12 months leaking out of your funnel.
              </div>
            </div>

            {/* Concrete 3-Factor Breakdown */}
            <div className="space-y-3 pt-5 border-t border-slate-200 dark:border-white/10 text-xs sm:text-sm">
              <span className="font-bold text-slate-700 dark:text-slate-300 text-xs uppercase tracking-wider block mb-2">
                Where That Revenue Is Lost:
              </span>

              <div className="p-3 rounded-xl bg-white/70 dark:bg-white/[0.04] border border-slate-200 dark:border-white/5 space-y-1">
                <div className="flex justify-between items-center">
                  <span className="font-medium text-slate-700 dark:text-slate-300">
                    • Slow Load Bounce Loss:
                  </span>
                  <span className="font-mono font-bold text-red-600 dark:text-red-400">
                    -{formatCurrency(metrics.speedLoss)}
                  </span>
                </div>
                <p className="text-[11px] text-slate-500 dark:text-slate-400">
                  Mobile buyers bouncing before 4s+ page loads.
                </p>
              </div>

              <div className="p-3 rounded-xl bg-white/70 dark:bg-white/[0.04] border border-slate-200 dark:border-white/5 space-y-1">
                <div className="flex justify-between items-center">
                  <span className="font-medium text-slate-700 dark:text-slate-300">
                    • Checkout / Inbox Friction:
                  </span>
                  <span className="font-mono font-bold text-red-600 dark:text-red-400">
                    -{formatCurrency(metrics.checkoutLoss)}
                  </span>
                </div>
                <p className="text-[11px] text-slate-500 dark:text-slate-400">
                  Customers lost in slow multi-step forms or &ldquo;Inbox for Price&rdquo;.
                </p>
              </div>

              <div className="p-3 rounded-xl bg-white/70 dark:bg-white/[0.04] border border-slate-200 dark:border-white/5 space-y-1">
                <div className="flex justify-between items-center">
                  <span className="font-medium text-slate-700 dark:text-slate-300">
                    • Unanswered After-Hours Queries:
                  </span>
                  <span className="font-mono font-bold text-red-600 dark:text-red-400">
                    -{formatCurrency(metrics.aiLeadLoss)}
                  </span>
                </div>
                <p className="text-[11px] text-slate-500 dark:text-slate-400">
                  Late-night DMs that bought from competitors before morning reply.
                </p>
              </div>
            </div>

            {/* Projected Recovery with CryptoWebBuild */}
            <div className="mt-6 p-4 rounded-2xl bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-800/40 text-xs sm:text-sm">
              <div className="flex items-center gap-2 font-bold text-emerald-800 dark:text-emerald-300 mb-1">
                <TrendingUp className="w-4 h-4" />
                <span>With Sub-0.8s Next.js + 1-Click + 24/7 AI:</span>
              </div>
              <div className="text-emerald-900 dark:text-emerald-200">
                Projected Monthly Revenue: <span className="font-bold font-mono text-base">{formatCurrency(metrics.projectedMonthlyRevenue)}</span> ({metrics.conversionLiftPct}% lift).
              </div>
            </div>
          </div>

          {/* Action CTAs */}
          <div className="mt-8 space-y-3 pt-6 border-t border-slate-200 dark:border-white/10">
            <a
              href={whatsappAuditUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-4 px-6 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-sm shadow-lg flex items-center justify-center gap-2.5 transition-transform hover:scale-[1.02]"
            >
              <MessageSquare className="w-5 h-5" />
              <span>Send Diagnosis to WhatsApp (01618-138820)</span>
            </a>

            <Link
              to="/contact"
              className="w-full py-3.5 px-6 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-bold text-xs flex items-center justify-center gap-2 transition-colors shadow-md text-center"
            >
              <span>Claim 48-Hour Prototype (50/50 Risk-Reversal)</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeakedRevenueCalculator;
