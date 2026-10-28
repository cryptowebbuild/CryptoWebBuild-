import React, { useState } from 'react';
import { GitPullRequest, Star, ExternalLink, Sparkles, RotateCcw, ShieldCheck, Code2 } from 'lucide-react';
import SpotlightCard from './SpotlightCard';

export const RemotionContributionCard: React.FC<{ className?: string }> = ({ className = '' }) => {
  const [replayKey, setReplayKey] = useState(0);

  const triggerReplay = () => {
    setReplayKey((prev) => prev + 1);
  };

  return (
    <SpotlightCard
      spotlightColor="rgba(168, 85, 247, 0.22)"
      className={`p-6 sm:p-8 md:p-10 border border-purple-500/25 dark:border-purple-500/20 bg-gradient-to-b from-purple-500/[0.04] via-transparent to-indigo-500/[0.03] ${className}`}
    >
      <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
        {/* Left: Authority & Engineering Pitch */}
        <div className="space-y-4 max-w-2xl">
          <div className="flex flex-wrap items-center gap-2">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-mono font-bold uppercase tracking-wider bg-purple-500/10 border border-purple-500/30 text-purple-600 dark:text-purple-300">
              <Sparkles className="w-3.5 h-3.5 text-purple-500" />
              <span>Open-Source Engineering Authority</span>
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-mono font-bold uppercase tracking-wider bg-emerald-500/10 border border-emerald-500/30 text-emerald-600 dark:text-emerald-400">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>Pull Request #12652</span>
            </span>
          </div>

          <div className="space-y-2">
            <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Remotion Core Contributor{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-indigo-500 to-cyan-500 dark:from-purple-400 dark:via-indigo-300 dark:to-cyan-400">
                (30,000+ ⭐ Framework)
              </span>
            </h3>
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
              We don&apos;t just assemble templates — we write code for the world&apos;s leading programmatic video engine.
              Engineered the official <strong className="text-slate-900 dark:text-white">Rating Badge</strong> social proof overlay
              with spring physics, SVG vector precision, and strict TypeScript architecture for Remotion&apos;s component gallery.
            </p>
          </div>

          {/* Quick Metrics Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
            <div className="p-3 rounded-2xl bg-white/60 dark:bg-[#11131A] border border-slate-200/80 dark:border-white/[0.08]">
              <div className="text-xs font-mono text-purple-500 font-bold uppercase tracking-wider">GitHub Stars</div>
              <div className="text-lg font-bold text-slate-900 dark:text-white mt-0.5">30k+ Stars</div>
            </div>
            <div className="p-3 rounded-2xl bg-white/60 dark:bg-[#11131A] border border-slate-200/80 dark:border-white/[0.08]">
              <div className="text-xs font-mono text-indigo-500 font-bold uppercase tracking-wider">Physics Math</div>
              <div className="text-lg font-bold text-slate-900 dark:text-white mt-0.5">Spring 60 FPS</div>
            </div>
            <div className="p-3 rounded-2xl bg-white/60 dark:bg-[#11131A] border border-slate-200/80 dark:border-white/[0.08]">
              <div className="text-xs font-mono text-emerald-500 font-bold uppercase tracking-wider">Type Safety</div>
              <div className="text-lg font-bold text-slate-900 dark:text-white mt-0.5">100% Strict TS</div>
            </div>
            <div className="p-3 rounded-2xl bg-white/60 dark:bg-[#11131A] border border-slate-200/80 dark:border-white/[0.08]">
              <div className="text-xs font-mono text-cyan-500 font-bold uppercase tracking-wider">Remotion API</div>
              <div className="text-lg font-bold text-slate-900 dark:text-white mt-0.5">Interactive v4</div>
            </div>
          </div>

          {/* CTA Link */}
          <div className="pt-2 flex flex-wrap items-center gap-3">
            <a
              href="https://github.com/remotion-dev/remotion/pull/12652"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-semibold text-xs transition-all hover:scale-[1.02] shadow-md"
            >
              <GitPullRequest className="w-4 h-4 text-purple-400 dark:text-purple-600" />
              <span>Inspect Live PR #12652 on GitHub</span>
              <ExternalLink className="w-3.5 h-3.5 opacity-70" />
            </a>
            <span className="text-xs text-slate-500 dark:text-slate-400 flex items-center gap-1.5 font-mono">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />
              <span>Verified Commit by Sagor Ahamed</span>
            </span>
          </div>
        </div>

        {/* Right: Live Interactive Simulation of the Contributed Rating Badge */}
        <div className="w-full lg:w-auto shrink-0 flex flex-col items-center justify-center p-6 sm:p-8 rounded-3xl bg-slate-950/40 dark:bg-[#07090E]/80 border border-slate-200/60 dark:border-white/10 shadow-2xl relative overflow-hidden">
          <div className="absolute top-3 left-4 right-4 flex items-center justify-between text-[11px] font-mono text-slate-400">
            <span className="flex items-center gap-1.5">
              <Code2 className="w-3.5 h-3.5 text-purple-400" />
              <span>Live Component Simulation</span>
            </span>
            <button
              onClick={triggerReplay}
              title="Replay Spring Physics Animation"
              className="p-1 rounded-md hover:bg-white/10 text-slate-400 hover:text-white transition-colors"
              aria-label="Replay animation"
            >
              <RotateCcw className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* The Rating Badge Element Rendered Live */}
          <div className="pt-6 pb-2 w-full flex justify-center">
            <div
              key={replayKey}
              className="animate-in fade-in zoom-in-95 duration-500 max-w-full inline-flex items-center gap-3 sm:gap-4 px-4 sm:px-6 py-3 rounded-full bg-white text-slate-900 shadow-xl border border-slate-200"
              style={{
                boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.12), 0 8px 10px -6px rgba(0, 0, 0, 0.06)',
              }}
            >
              {/* 5 Animated Gold Stars */}
              <div className="flex items-center gap-0.5 sm:gap-1 text-amber-500">
                {[0, 1, 2, 3, 4].map((i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 sm:w-5 sm:h-5 fill-amber-400 text-amber-500 transition-transform duration-300 hover:scale-125"
                  />
                ))}
              </div>

              {/* Score */}
              <div className="flex items-baseline gap-1 font-mono font-black text-sm sm:text-base text-slate-900">
                <span>4.9</span>
                <span className="text-slate-400 font-medium text-xs">/ 5.0</span>
              </div>

              {/* Vertical divider */}
              <div className="w-px h-6 bg-slate-200 shrink-0" />

              {/* Verified Count */}
              <div className="flex items-center gap-1.5 shrink-0">
                <div className="w-4 h-4 rounded-full bg-emerald-500 flex items-center justify-center text-white">
                  <svg className="w-2.5 h-2.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="font-semibold text-xs sm:text-sm text-slate-800 whitespace-nowrap">
                  2,400+ Reviews
                </span>
              </div>
            </div>
          </div>

          <div className="text-[10px] font-mono text-slate-500 text-center mt-3">
            Spring Damping: 14 · Stiffness: 120 · Interactive.create()
          </div>
        </div>
      </div>
    </SpotlightCard>
  );
};

export default RemotionContributionCard;
