import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Zap, TrendingUp, AlertTriangle, ArrowRight, MessageSquare, CheckCircle2 } from 'lucide-react';

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
  const [monthlyVisitors, setMonthlyVisitors] = useState<number>(10000);
  const [statusId, setStatusId] = useState<string>('slow-site');
  const [averageOrderValue, setAverageOrderValue] = useState<number>(100);

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

  const formatCurrency = (val: number) =>
    new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      maximumFractionDigits: 0,
    }).format(val);

  const whatsappAuditUrl = `https://wa.me/8801618138820?text=${encodeURIComponent(
    `Hi Sagor, I ran the CryptoWebBuild Revenue Diagnostic:\n• Monthly Visitors: ${monthlyVisitors.toLocaleString()}\n• Setup: ${selectedStatus.label}\n• Avg Order/Client Value: $${averageOrderValue}\n• Est. Leaked Revenue: ${formatCurrency(metrics.monthlyLeakedRevenue)}/mo (${formatCurrency(metrics.annualLeakedRevenue)}/yr)\n\nLet's discuss fixing this!`
  )}`;

  return (
    <div className="max-w-6xl mx-auto">
      <div className="text-center max-w-3xl mx-auto mb-12">
        <div className="inline-block px-4 py-1.5 mb-4 rounded-full bg-purple-50 dark:bg-white/5 border border-purple-200 dark:border-purple-500/30 text-purple-700 dark:text-purple-400 text-xs font-bold tracking-wider uppercase">
          Revenue &amp; Speed Risk Calculator
        </div>
        <h2 className="font-display text-3xl sm:text-5xl font-bold text-slate-900 dark:text-white mb-4">
          See What Slow Load Times &amp;{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-cyan-500 dark:from-purple-400 dark:to-cyan-400">
            Manual Funnels Cost You
          </span>
        </h2>
        <p className="text-slate-600 dark:text-slate-400 text-base sm:text-lg">
          Adjust your traffic and order value to calculate how much revenue leaks through 4s+ load times and manual DM/checkout bottlenecks.
        </p>
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
              <span>25,000 / mo</span>
              <span>50,000+ / mo</span>
            </div>
          </div>

          {/* 2. Current Setup */}
          <div className="space-y-3">
            <span className="block text-xs sm:text-sm font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider">
              2. Current Website &amp; Checkout Setup
            </span>
            <div className="grid grid-cols-1 gap-2.5">
              {SITE_STATUS_OPTIONS.map((option) => {
                const active = option.id === statusId;
                return (
                  <button
                    key={option.id}
                    type="button"
                    onClick={() => setStatusId(option.id)}
                    className={`p-4 rounded-2xl border text-left transition-colors flex items-center justify-between ${
                      active
                        ? 'bg-purple-500/10 border-purple-500'
                        : 'bg-slate-50 dark:bg-white/5 border-slate-200 dark:border-white/10 hover:border-purple-500/40'
                    }`}
                  >
                    <div className="pr-3">
                      <div className="font-display font-bold text-slate-900 dark:text-white text-sm sm:text-base">
                        {option.label}
                      </div>
                      <div className="text-xs text-slate-600 dark:text-slate-400 mt-0.5">{option.tag}</div>
                    </div>
                    <div
                      className={`w-5 h-5 shrink-0 rounded-full border-2 flex items-center justify-center ${
                        active ? 'border-purple-600 bg-purple-600' : 'border-slate-300 dark:border-slate-600'
                      }`}
                    >
                      {active && <span className="w-2 h-2 rounded-full bg-white" />}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* 3. Average Order Value */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <label
                htmlFor="calc-aov"
                className="text-xs sm:text-sm font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider"
              >
                3. Average Order / Client Value (USD)
              </label>
              <span className="px-3.5 py-1 rounded-xl bg-cyan-500/10 border border-cyan-500/20 font-display font-bold text-cyan-700 dark:text-cyan-400 text-base">
                ${averageOrderValue.toLocaleString()}
              </span>
            </div>
            <input
              id="calc-aov"
              type="range"
              min={20}
              max={2000}
              step={20}
              value={averageOrderValue}
              onChange={(e) => setAverageOrderValue(Number(e.target.value))}
              className="w-full h-2.5 bg-slate-200 dark:bg-slate-800 rounded-lg appearance-none cursor-pointer accent-cyan-500"
            />
            <div className="flex justify-between text-xs font-semibold text-slate-500 dark:text-slate-400">
              <span>$20 (Retail / F-Commerce)</span>
              <span>$500 (Local Service)</span>
              <span>$2,000+ (SaaS / B2B)</span>
            </div>
          </div>
        </div>

        {/* Right Diagnostic Report Card (100% Unified Light & Dark Mode — Zero Black Box Mismatch) */}
        <div className="lg:col-span-5 p-6 sm:p-9 rounded-[28px] bg-gradient-to-br from-purple-50/90 via-white to-cyan-50/90 dark:from-[#0f172a] dark:via-[#0b1120] dark:to-[#0f172a] border border-purple-200/80 dark:border-white/10 shadow-xl flex flex-col justify-between">
          <div className="space-y-5">
            <div className="flex items-center justify-between gap-2">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/15 border border-amber-500/30 text-amber-700 dark:text-amber-300 text-xs font-bold uppercase tracking-wider">
                <AlertTriangle className="w-3.5 h-3.5" />
                <span>Estimated Revenue Risk</span>
              </div>
              <span className="text-xs font-bold text-purple-600 dark:text-purple-400">
                +{metrics.conversionLiftPct}% Conv. Lift
              </span>
            </div>

            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400 mb-1">
                Monthly Recoverable Revenue
              </p>
              <div className="font-display text-4xl sm:text-5xl font-black text-slate-900 dark:text-white">
                {formatCurrency(metrics.monthlyLeakedRevenue)}
                <span className="text-lg font-bold text-slate-500 dark:text-slate-400">/mo</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mt-1.5">
                Annual impact:{' '}
                <strong className="text-purple-600 dark:text-cyan-400">
                  {formatCurrency(metrics.annualLeakedRevenue)}/year
                </strong>{' '}
                in missed orders.
              </p>
            </div>

            {/* Current vs Optimized Comparison */}
            <div className="grid grid-cols-2 gap-3 pt-3 border-t border-slate-200/80 dark:border-white/10">
              <div className="p-3.5 rounded-2xl bg-white/80 dark:bg-white/5 border border-slate-200/80 dark:border-white/10">
                <div className="text-[11px] font-bold text-slate-500 dark:text-slate-400 uppercase">Current Est.</div>
                <div className="font-display text-lg sm:text-xl font-bold text-slate-900 dark:text-white mt-0.5">
                  {formatCurrency(metrics.currentMonthlyRevenue)}/mo
                </div>
                <div className="text-xs text-slate-500 dark:text-slate-400">
                  ~{metrics.currentOrdersDisplay} orders ({((selectedStatus.currentConvRate) * 100).toFixed(1)}%)
                </div>
              </div>
              <div className="p-3.5 rounded-2xl bg-purple-600/10 dark:bg-purple-500/15 border border-purple-500/30">
                <div className="text-[11px] font-bold text-purple-700 dark:text-cyan-300 uppercase flex items-center gap-1">
                  <TrendingUp className="w-3.5 h-3.5" />
                  <span>With &lt;0.8s + AI</span>
                </div>
                <div className="font-display text-lg sm:text-xl font-bold text-slate-900 dark:text-white mt-0.5">
                  {formatCurrency(metrics.projectedMonthlyRevenue)}/mo
                </div>
                <div className="text-xs text-purple-700 dark:text-cyan-200">
                  ~{metrics.optimizedOrdersDisplay} orders ({((selectedStatus.optimizedConvRate) * 100).toFixed(1)}%)
                </div>
              </div>
            </div>

            {/* 3-Factor Leak Breakdown */}
            <div className="p-4 rounded-2xl bg-white/90 dark:bg-white/5 border border-slate-200/80 dark:border-white/10 space-y-2 text-xs">
              <div className="font-bold text-slate-900 dark:text-white flex items-center gap-1.5 mb-1">
                <Zap className="w-3.5 h-3.5 text-purple-600 dark:text-cyan-400" />
                <span>Where This Revenue Leaks:</span>
              </div>
              <div className="flex items-center justify-between text-slate-600 dark:text-slate-300">
                <span>• Slow Load Bounce (&gt;3s delay)</span>
                <span className="font-mono font-bold text-slate-900 dark:text-white">
                  {formatCurrency(metrics.speedLoss)}/mo
                </span>
              </div>
              <div className="flex items-center justify-between text-slate-600 dark:text-slate-300">
                <span>• Checkout / Inbox Friction</span>
                <span className="font-mono font-bold text-slate-900 dark:text-white">
                  {formatCurrency(metrics.checkoutLoss)}/mo
                </span>
              </div>
              <div className="flex items-center justify-between text-slate-600 dark:text-slate-300">
                <span>• Unanswered After-Hours Queries</span>
                <span className="font-mono font-bold text-slate-900 dark:text-white">
                  {formatCurrency(metrics.aiLeadLoss)}/mo
                </span>
              </div>
            </div>
          </div>

          <div className="pt-5 mt-5 border-t border-slate-200/80 dark:border-white/10 flex flex-col gap-2.5">
            <a
              href={whatsappAuditUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3.5 px-5 rounded-xl neon-button text-white font-bold text-sm flex items-center justify-center gap-2"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Fix This on WhatsApp (01618-138820)</span>
            </a>
            {onApplyToAudit ? (
              <button
                type="button"
                onClick={() =>
                  onApplyToAudit({
                    monthlyVisitors,
                    statusLabel: selectedStatus.label,
                    averageOrderValue,
                    monthlyLeakedRevenue: metrics.monthlyLeakedRevenue,
                    annualLeakedRevenue: metrics.annualLeakedRevenue,
                    projectedMonthlyRevenue: metrics.projectedMonthlyRevenue,
                  })
                }
                className="w-full py-3 px-5 rounded-xl bg-white dark:bg-white/10 hover:bg-slate-100 dark:hover:bg-white/15 border border-slate-200 dark:border-white/15 text-slate-900 dark:text-white font-bold text-xs flex items-center justify-center gap-2 transition-colors"
              >
                <span>Or Book 48-Hour Prototype</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            ) : (
              <Link
                to="/contact"
                className="w-full py-3 px-5 rounded-xl bg-white dark:bg-white/10 hover:bg-slate-100 dark:hover:bg-white/15 border border-slate-200 dark:border-white/15 text-slate-900 dark:text-white font-bold text-xs flex items-center justify-center gap-2 transition-colors"
              >
                <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                <span>Claim 48-Hour Prototype (50/50 Guarantee)</span>
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeakedRevenueCalculator;
