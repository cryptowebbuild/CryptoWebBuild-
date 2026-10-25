import React, { useState, useRef } from 'react';
import { Zap, AlertTriangle, CheckCircle2, ArrowRight } from 'lucide-react';

interface BeforeAfterSliderProps {
  title?: string;
  subtitle?: string;
  beforeLabel?: string;
  afterLabel?: string;
  beforeTime?: string;
  afterTime?: string;
  beforeScore?: string;
  afterScore?: string;
  beforeMetric?: string;
  afterMetric?: string;
}

export const BeforeAfterSlider: React.FC<BeforeAfterSliderProps> = ({
  title = 'Interactive Architecture Comparison',
  subtitle = 'Drag the slider to compare legacy monolithic architecture against CryptoWebBuild sub-second systems.',
  beforeLabel = 'Before: Legacy WordPress / WooCommerce',
  afterLabel = 'After: CryptoWebBuild Next.js 15 + Django',
  beforeTime = '4.8s Load',
  afterTime = '0.4s Edge',
  beforeScore = '42/100',
  afterScore = '100/100',
  beforeMetric = '53% Cart Drop-Off',
  afterMetric = '+240% Completed Orders',
}) => {
  const [sliderPos, setSliderPos] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const pos = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPos(pos);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    handleMove(e.touches[0].clientX);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (e.buttons === 1) {
      handleMove(e.clientX);
    }
  };

  return (
    <div className="w-full rounded-3xl glass-panel p-6 sm:p-10 border border-slate-200 dark:border-white/10 space-y-6">
      <div className="space-y-2 text-center sm:text-left">
        <div className="text-xs font-mono font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400">
          Live Proof Slider
        </div>
        <h3 className="font-display text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">
          {title}
        </h3>
        <p className="text-slate-600 dark:text-slate-400 text-sm max-w-2xl">
          {subtitle}
        </p>
      </div>

      {/* Interactive Drag Container */}
      <div
        ref={containerRef}
        onMouseMove={handleMouseMove}
        onTouchMove={handleTouchMove}
        className="relative h-72 sm:h-80 rounded-2xl overflow-hidden border border-slate-200 dark:border-white/10 cursor-ew-resize select-none bg-slate-950"
      >
        {/* Right / AFTER Content (Next.js 15 0.4s) */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0c1424] to-[#090A0F] p-6 sm:p-8 flex flex-col justify-between text-right items-end">
          <div className="space-y-2">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-bold bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>{afterLabel}</span>
            </span>
            <div className="font-display text-3xl sm:text-5xl font-black text-white">
              {afterTime}
            </div>
            <div className="text-xs font-mono text-emerald-400">
              PageSpeed: <strong className="text-white font-bold">{afterScore}</strong> · {afterMetric}
            </div>
          </div>

          <div className="text-xs text-slate-400 font-mono space-y-1">
            <div>✓ Next.js 15 Edge SSR</div>
            <div>✓ 1-Click bKash/Stripe Pay</div>
            <div>✓ Auto Steadfast Courier API</div>
          </div>
        </div>

        {/* Left / BEFORE Content (Clipped by slider position) */}
        <div
          style={{ width: `${sliderPos}%` }}
          className="absolute inset-y-0 left-0 bg-gradient-to-br from-[#1a1118] to-[#12080e] p-6 sm:p-8 flex flex-col justify-between text-left items-start overflow-hidden border-r-2 border-white shadow-2xl"
        >
          <div className="space-y-2 shrink-0">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-bold bg-red-500/20 text-red-400 border border-red-500/30">
              <AlertTriangle className="w-3.5 h-3.5" />
              <span>{beforeLabel}</span>
            </span>
            <div className="font-display text-3xl sm:text-5xl font-black text-white/90">
              {beforeTime}
            </div>
            <div className="text-xs font-mono text-red-400">
              PageSpeed: <strong className="text-white font-bold">{beforeScore}</strong> · {beforeMetric}
            </div>
          </div>

          <div className="text-xs text-slate-400 font-mono space-y-1 shrink-0">
            <div>✗ Bloated PHP plugins</div>
            <div>✗ Manual &ldquo;Inbox for Price&rdquo;</div>
            <div>✗ 60% Mobile White-Screen Drop</div>
          </div>
        </div>

        {/* Vertical Divider & Draggable Handle */}
        <div
          style={{ left: `${sliderPos}%` }}
          className="absolute inset-y-0 -ml-4 w-8 flex items-center justify-center pointer-events-none"
        >
          <div className="w-7 h-7 rounded-full bg-white text-slate-900 shadow-xl flex items-center justify-center text-[10px] font-black border border-slate-300">
            ⟷
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400 font-mono px-1">
        <span>◀ Drag left for Before</span>
        <span>Drag right for After ▶</span>
      </div>
    </div>
  );
};

export default BeforeAfterSlider;
