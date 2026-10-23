import React, { useState } from 'react';
import { ExternalLink, Lock, Smartphone, Monitor, ShieldCheck, Zap, Sparkles } from 'lucide-react';

interface EdelMockupProps {
  className?: string;
  defaultView?: 'desktop' | 'mobile';
  showControls?: boolean;
}

export const EdelMockup: React.FC<EdelMockupProps> = ({
  className = '',
  defaultView = 'desktop',
  showControls = true,
}) => {
  const [view, setView] = useState<'desktop' | 'mobile'>(defaultView);
  const liveUrl = 'https://cryptowebbuild.github.io/edel-bangladesh/';

  return (
    <div
      className={`relative w-full h-full bg-[#08090D] text-slate-100 overflow-hidden flex flex-col font-sans select-none border border-white/[0.08] group ${className}`}
    >
      {/* Studio Browser Header / Chrome Bar */}
      <div className="bg-[#0C0E14] px-3 sm:px-3.5 py-2 border-b border-white/[0.07] flex items-center justify-between shrink-0 z-10 gap-2">
        {/* Left: Window Controls + View Toggle */}
        <div className="flex items-center gap-2.5">
          <div className="flex items-center gap-1.5" aria-hidden="true">
            <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80 inline-block" />
            <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80 inline-block" />
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80 inline-block" />
          </div>

          {showControls && (
            <div className="hidden sm:flex items-center bg-black/40 rounded-lg p-0.5 border border-white/[0.06] text-[10px]">
              <button
                type="button"
                onClick={() => setView('desktop')}
                className={`flex items-center gap-1 px-2 py-0.5 rounded transition-all ${
                  view === 'desktop'
                    ? 'bg-indigo-600/80 text-white font-semibold shadow-sm'
                    : 'text-slate-400 hover:text-white'
                }`}
                title="Desktop View"
              >
                <Monitor className="w-2.5 h-2.5" />
                <span>Desktop</span>
              </button>
              <button
                type="button"
                onClick={() => setView('mobile')}
                className={`flex items-center gap-1 px-2 py-0.5 rounded transition-all ${
                  view === 'mobile'
                    ? 'bg-indigo-600/80 text-white font-semibold shadow-sm'
                    : 'text-slate-400 hover:text-white'
                }`}
                title="Mobile 1-Click View"
              >
                <Smartphone className="w-2.5 h-2.5" />
                <span>Mobile</span>
              </button>
            </div>
          )}
        </div>

        {/* Center: Real SSL Domain Badge */}
        <div className="flex items-center gap-1.5 bg-black/50 border border-white/[0.06] rounded-md px-2.5 py-1 text-[11px] font-mono text-slate-300 max-w-[200px] sm:max-w-xs truncate">
          <Lock className="w-2.5 h-2.5 text-emerald-400 shrink-0" />
          <span className="truncate text-slate-400">
            edel.<span className="text-white font-semibold">cryptowebbuild.com</span>
          </span>
        </div>

        {/* Right: Edge Metric & Direct Live Store Link */}
        <div className="flex items-center gap-2 shrink-0">
          <span className="hidden md:inline-flex items-center gap-1 text-[10px] text-emerald-400 font-mono font-bold bg-emerald-500/10 border border-emerald-500/20 px-2 py-0.5 rounded">
            <Zap className="w-2.5 h-2.5" />
            0.4s Edge
          </span>

          <a
            href={liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[10px] bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-zinc-950 font-black px-2.5 py-1 rounded-md transition-all flex items-center gap-1 shadow-sm whitespace-nowrap"
            title="Open Live Production Store in New Tab"
          >
            <span>Live Demo</span>
            <ExternalLink className="w-2.5 h-2.5" />
          </a>
        </div>
      </div>

      {/* Main Screen Showcase Area */}
      <div className="relative flex-1 w-full bg-[#050608] overflow-hidden flex items-center justify-center">
        {view === 'desktop' ? (
          /* Desktop Real Screenshot Showcase */
          <div className="relative w-full h-full overflow-hidden flex items-start justify-center">
            <img
              src="/projects/edel-bangladesh.webp"
              alt="Live Production Screenshot of Edel Bangladesh Luxury Storefront"
              width={1600}
              height={1000}
              loading="lazy"
              decoding="async"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.02]"
            />

            {/* Subtle Gradient Vignette to blend into dark frame */}
            <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60" />

            {/* Floating Live Conversion Pill */}
            <div className="absolute bottom-2.5 left-2.5 sm:bottom-3 sm:left-3 flex flex-wrap items-center gap-1.5 sm:gap-2 pointer-events-none">
              <span className="inline-flex items-center gap-1 px-2 sm:px-2.5 py-1 rounded-full text-[10px] sm:text-[11px] font-bold bg-black/85 backdrop-blur-md text-amber-300 border border-amber-500/30 shadow-lg">
                <Sparkles className="w-3 h-3 text-amber-400" />
                <span>Edel Luxury Jewel</span>
              </span>
              <span className="inline-flex items-center gap-1 px-2 sm:px-2.5 py-1 rounded-full text-[10px] sm:text-[11px] font-semibold bg-black/85 backdrop-blur-md text-emerald-300 border border-emerald-500/30 shadow-lg">
                <ShieldCheck className="w-3 h-3 text-emerald-400" />
                <span>1-Click bKash &amp; Steadfast</span>
              </span>
            </div>
          </div>
        ) : (
          /* Mobile Frame Real Screenshot Showcase */
          <div className="relative w-full h-full flex items-center justify-center p-3 bg-gradient-to-b from-[#0F1117] to-[#050608]">
            <div className="relative w-[190px] sm:w-[220px] md:w-[240px] aspect-[9/19] rounded-[24px] border-[3px] border-slate-700/80 shadow-2xl overflow-hidden bg-black ring-1 ring-white/10 flex flex-col">
              {/* Dynamic Island / Speaker notch */}
              <div className="h-4 bg-black w-full flex items-center justify-center shrink-0 z-10">
                <div className="w-12 h-2.5 bg-zinc-800 rounded-full" />
              </div>

              {/* Mobile Real Screenshot */}
              <div className="relative flex-1 overflow-hidden">
                <img
                  src="/projects/edel-bangladesh-mobile.webp"
                  alt="Mobile view of Edel Bangladesh Luxury Store"
                  width={720}
                  height={1558}
                  loading="lazy"
                  decoding="async"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-top"
                />
              </div>
            </div>

            {/* Mobile View Benefits Legend */}
            <div className="hidden sm:flex flex-col gap-2 ml-4 text-[11px] text-slate-300 max-w-[160px]">
              <div className="font-bold text-white text-xs">Mobile-First CRO</div>
              <div className="flex items-center gap-1.5 text-emerald-400 font-mono text-[10px]">
                <Zap className="w-3 h-3" />
                <span>0.4s on 4G LTE</span>
              </div>
              <div className="text-slate-400 text-[10px] leading-tight">
                No inbox back-and-forth. Direct size picker and instant order placement.
              </div>
              <button
                type="button"
                onClick={() => setView('desktop')}
                className="mt-1 text-[10px] text-indigo-400 hover:text-indigo-300 underline font-semibold text-left"
              >
                &larr; Switch to Desktop
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Subtle Bottom Status Strip */}
      <div className="bg-[#0A0C10] px-3 py-1.5 border-t border-white/[0.06] flex items-center justify-between text-[10px] text-slate-400 shrink-0">
        <div className="flex items-center gap-2 truncate">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse shrink-0" />
          <span className="truncate">Production Store: <strong className="text-slate-200">facebook.com/edelbangladesh</strong></span>
        </div>
        <div className="font-mono text-slate-300 tabular-nums shrink-0 ml-2">
          +240% Sales Lift
        </div>
      </div>
    </div>
  );
};

export default EdelMockup;
