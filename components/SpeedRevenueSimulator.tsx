import React, { useState } from 'react';
import { Zap, TrendingUp, ArrowRight } from 'lucide-react';

export const SpeedRevenueSimulator: React.FC = () => {
  const [currency, setCurrency] = useState<'USD' | 'BDT'>('USD');
  const [monthlyVisitors, setMonthlyVisitors] = useState<number>(15000);
  const [currentLoadSec, setCurrentLoadSec] = useState<number>(4.8);

  // Average Order Value (AOV): $65 USD or ৳2,800 BDT
  const aov = currency === 'USD' ? 65 : 2800;

  // Conversion rate model grounded in mobile e-commerce benchmarks:
  // 4.8s load + multi-step cart ≈ 1.1% conversion
  // 3.2s load ≈ 1.6% conversion
  // 2.0s load ≈ 2.2% conversion
  // 0.4s CryptoWebBuild Next.js + 1-Click Checkout ≈ 3.6% conversion
  const currentConvRate =
    currentLoadSec >= 4.5 ? 0.011 : currentLoadSec >= 3.0 ? 0.016 : 0.021;
  const subSecondConvRate = 0.036;

  const currentMonthlyRev = Math.round(monthlyVisitors * currentConvRate * aov);
  const projectedMonthlyRev = Math.round(monthlyVisitors * subSecondConvRate * aov);
  const monthlyGain = projectedMonthlyRev - currentMonthlyRev;

  const formatMoney = (val: number) =>
    currency === 'USD' ? `$${val.toLocaleString()}` : `৳${val.toLocaleString()}`;

  return (
    <div className="p-6 sm:p-8 rounded-3xl glass-panel space-y-6 tabular-nums">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-200/80 dark:border-white/[0.07] pb-5">
        <div>
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400">
            <TrendingUp className="w-3.5 h-3.5" />
            <span>Interactive Speed-to-Revenue Calculator</span>
          </div>
          <h3 className="font-display text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mt-1">
            See How Much Revenue Slow Templates Cost You Monthly
          </h3>
        </div>

        <div className="inline-flex items-center p-1 rounded-xl bg-slate-100 dark:bg-[#090A0F] border border-slate-200 dark:border-white/[0.08] self-start md:self-auto">
          <button
            type="button"
            onClick={() => setCurrency('USD')}
            className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-colors whitespace-nowrap ${
              currency === 'USD'
                ? 'bg-indigo-600 text-white'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            Global ($ USD)
          </button>
          <button
            type="button"
            onClick={() => setCurrency('BDT')}
            className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-colors whitespace-nowrap ${
              currency === 'BDT'
                ? 'bg-indigo-600 text-white'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            Bangladesh (৳ BDT)
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
        {/* Left Controls (6 cols) */}
        <div className="lg:col-span-6 space-y-5">
          {/* Visitor Slider */}
          <div className="space-y-2">
            <div className="flex justify-between text-xs font-semibold">
              <label htmlFor="visitor-range" className="text-slate-600 dark:text-slate-400">
                Monthly Traffic (Ads + Organic):
              </label>
              <span className="font-mono font-bold text-slate-900 dark:text-white">
                {monthlyVisitors.toLocaleString()} Visitors / mo
              </span>
            </div>
            <input
              id="visitor-range"
              type="range"
              min={3000}
              max={100000}
              step={1000}
              value={monthlyVisitors}
              onChange={(e) => setMonthlyVisitors(Number(e.target.value))}
              className="w-full accent-indigo-600 cursor-pointer h-2 rounded-lg bg-slate-200 dark:bg-white/10"
            />
            <div className="flex justify-between text-[11px] text-slate-400 font-mono">
              <span>3,000</span>
              <span>25,000</span>
              <span>50,000</span>
              <span>100,000</span>
            </div>
          </div>

          {/* Current Load Speed Selector */}
          <div className="space-y-2">
            <span className="block text-xs font-semibold text-slate-600 dark:text-slate-400">
              Your Current Website / Store Setup:
            </span>
            <div className="grid grid-cols-3 gap-2">
              {[
                { sec: 4.8, label: 'WordPress / F-Page', tag: '4.8s Load' },
                { sec: 3.2, label: 'Shopify Theme', tag: '3.2s Load' },
                { sec: 2.0, label: 'Standard Custom', tag: '2.0s Load' },
              ].map((preset) => (
                <button
                  key={preset.sec}
                  type="button"
                  onClick={() => setCurrentLoadSec(preset.sec)}
                  className={`p-2.5 rounded-xl border text-left transition-colors ${
                    currentLoadSec === preset.sec
                      ? 'bg-indigo-600/10 border-indigo-500 text-slate-900 dark:text-white'
                      : 'bg-slate-50 dark:bg-[#090A0F] border-slate-200 dark:border-white/[0.06] text-slate-600 dark:text-slate-400'
                  }`}
                >
                  <div className="text-xs font-bold truncate">{preset.label}</div>
                  <div className="text-[11px] font-mono text-red-500 dark:text-red-400 mt-0.5">
                    {preset.tag}
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Right Output Comparison (6 cols) */}
        <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-3.5">
          <div className="p-4 rounded-2xl bg-slate-50 dark:bg-[#090A0F] border border-slate-200 dark:border-white/[0.06] flex flex-col justify-between">
            <div>
              <div className="text-xs font-semibold text-slate-500 dark:text-slate-400">
                Current Setup ({currentLoadSec}s Load)
              </div>
              <div className="font-display text-2xl font-bold text-slate-700 dark:text-slate-300 mt-1">
                {formatMoney(currentMonthlyRev)}
                <span className="text-xs font-normal text-slate-400"> /mo</span>
              </div>
            </div>
            <div className="mt-3 pt-2.5 border-t border-slate-200/70 dark:border-white/[0.05] text-[11px] font-mono text-red-600 dark:text-red-400">
              ~{(currentConvRate * 100).toFixed(1)}% Conversion · High Drop-Off
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-emerald-500/[0.07] border border-emerald-500/30 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between text-xs font-semibold text-emerald-700 dark:text-emerald-400">
                <span>CryptoWebBuild (0.4s)</span>
                <Zap className="w-3.5 h-3.5" />
              </div>
              <div className="font-display text-2xl font-bold text-slate-900 dark:text-white mt-1">
                {formatMoney(projectedMonthlyRev)}
                <span className="text-xs font-normal text-slate-400"> /mo</span>
              </div>
            </div>
            <div className="mt-3 pt-2.5 border-t border-emerald-500/20 text-[11px] font-mono font-bold text-emerald-600 dark:text-emerald-400 flex items-center justify-between">
              <span>+{formatMoney(monthlyGain)} /mo Lift</span>
              <a href="#pricing" className="inline-flex items-center gap-0.5 underline">
                <span>Build</span>
                <ArrowRight className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpeedRevenueSimulator;
