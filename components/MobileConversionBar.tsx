import React from 'react';
import { Calendar, MessageSquare, ShieldCheck, Zap } from 'lucide-react';

interface MobileConversionBarProps {
  onOpenBooking?: () => void;
}

export const MobileConversionBar: React.FC<MobileConversionBarProps> = ({ onOpenBooking }) => {
  const whatsappUrl =
    'https://wa.me/8801618138820?text=Hi%20Sagor%2C%20I%20am%20interested%20in%20building%20a%20sub-second%20website%20with%20the%2050/50%20Milestone%20Guarantee!';

  return (
    <aside
      aria-label="Quick Mobile Consultation & Contact Bar"
      className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#07080C]/95 backdrop-blur-xl border-t border-white/10 px-3 py-2.5 shadow-[0_-10px_25px_rgba(0,0,0,0.7)]"
    >
      <div className="max-w-md mx-auto flex flex-col gap-1.5">
        {/* Micro Guarantee Proof */}
        <div className="flex items-center justify-between text-[10px] font-mono font-semibold px-1 text-slate-400">
          <span className="flex items-center gap-1 text-emerald-400">
            <ShieldCheck className="w-3 h-3 text-emerald-400 shrink-0" />
            <span>50/50 Risk-Free</span>
          </span>
          <span className="flex items-center gap-1 text-amber-300">
            <Zap className="w-3 h-3 text-amber-400 shrink-0" />
            <span>48h Prototype</span>
          </span>
          <span className="text-slate-400 tabular-nums">01618-138820</span>
        </div>

        {/* 2 Primary Direct Conversion Actions */}
        <div className="grid grid-cols-2 gap-2">
          {onOpenBooking ? (
            <button
              type="button"
              onClick={onOpenBooking}
              className="py-2.5 px-3 rounded-xl bg-slate-900 border border-indigo-500/40 text-white font-bold text-xs flex items-center justify-center gap-1.5 hover:bg-slate-800 transition-colors shadow-sm"
            >
              <Calendar className="w-3.5 h-3.5 text-indigo-400 shrink-0" />
              <span>15-Min Call</span>
            </button>
          ) : (
            <a
              href="https://cal.com/cryptowebbuilddev/15min"
              target="_blank"
              rel="noopener noreferrer"
              className="py-2.5 px-3 rounded-xl bg-slate-900 border border-indigo-500/40 text-white font-bold text-xs flex items-center justify-center gap-1.5 hover:bg-slate-800 transition-colors shadow-sm"
            >
              <Calendar className="w-3.5 h-3.5 text-indigo-400 shrink-0" />
              <span>15-Min Call</span>
            </a>
          )}

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="py-2.5 px-3 rounded-xl bg-gradient-to-r from-emerald-600 to-emerald-500 hover:from-emerald-500 hover:to-emerald-600 text-white font-bold text-xs flex items-center justify-center gap-1.5 shadow-md shadow-emerald-950/40 transition-transform active:scale-95"
          >
            <MessageSquare className="w-3.5 h-3.5 shrink-0" />
            <span>WhatsApp</span>
          </a>
        </div>
      </div>
    </aside>
  );
};

export default MobileConversionBar;
