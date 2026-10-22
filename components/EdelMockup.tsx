import React, { useState } from 'react';
import { ExternalLink, ShoppingBag, ShieldCheck } from 'lucide-react';

interface EdelMockupProps {
  className?: string;
}

export const EdelMockup: React.FC<EdelMockupProps> = ({ className = '' }) => {
  const [activeItem, setActiveItem] = useState(0);

  const notifications = [
    'নুসরাত জাহান (ধানমন্ডি) এইমাত্র ব্রাইডাল চুড়ি সেট অর্ডার করেছেন',
    'তানজিলা ইসলাম (উত্তরা) রয়্যাল চোকার কম্বো কিনেছেন',
  ];

  return (
    <div className={`relative w-full h-full bg-[#1A0B10] text-[#FFFDF9] overflow-hidden flex flex-col justify-between font-sans select-none gpu-accelerated ${className}`}>
      {/* Top Rose Gold Royal Header */}
      <div className="bg-gradient-to-r from-[#8E1B3A] via-[#590D22] to-[#3B0713] px-3.5 py-2.5 border-b border-amber-500/30 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-full bg-gradient-to-br from-amber-300 via-amber-500 to-amber-600 flex items-center justify-center font-serif font-black text-xs text-[#1D1115] shadow-sm border border-amber-200">
            E
          </div>
          <div>
            <div className="flex items-center gap-1.5 leading-none">
              <span className="font-serif font-extrabold text-sm tracking-wider text-amber-200">EDEL BD</span>
              <span className="text-[9px] font-bold text-amber-300">· LUXURY</span>
            </div>
            <span className="text-[10px] text-rose-200/80 leading-none">Churi · Bridal · Gift Combos</span>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <span className="hidden sm:inline-flex items-center gap-1 text-[10px] text-emerald-300 font-mono tabular-nums font-bold">
            0.4s Edge
          </span>
          <a
            href="https://cryptowebbuild.github.io/edel-bangladesh/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[10px] bg-amber-400 hover:bg-amber-300 text-zinc-950 font-extrabold px-2.5 py-1 rounded-md transition-colors flex items-center gap-1 shadow-sm whitespace-nowrap shrink-0"
          >
            <span>Live Demo</span>
            <ExternalLink className="w-2.5 h-2.5" />
          </a>
        </div>
      </div>

      {/* Middle Mockup Visual Products */}
      <div className="p-3.5 grid grid-cols-2 gap-2.5 flex-1 items-center">
        {/* Product 1 */}
        <div
          onClick={() => setActiveItem(0)}
          className={`p-2.5 rounded-xl border transition-colors cursor-pointer ${
            activeItem === 0
              ? 'bg-[#2E121C] border-amber-400/60'
              : 'bg-[#220D15] border-white/5 opacity-85'
          }`}
        >
          <div className="relative aspect-video rounded-lg overflow-hidden bg-gradient-to-tr from-[#3b0817] to-[#73142e] mb-2 flex items-center justify-center border border-amber-400/20">
            <span className="font-serif text-amber-200 text-xs font-bold tracking-widest text-center px-1">
              মিনা কারি চুড়ি
            </span>
            <span className="absolute top-1 right-1 bg-amber-400 text-zinc-950 text-[8px] font-black px-1.5 rounded tabular-nums">
              -25%
            </span>
          </div>
          <div className="text-[11px] font-bold text-white line-clamp-1">রাজকীয় মিনা কারি চুড়ি সেট</div>
          <div className="flex items-center justify-between mt-1 tabular-nums">
            <div className="font-mono text-amber-300 font-extrabold text-xs">৳১,৮৫০</div>
            <div className="text-[9px] line-through text-zinc-400">৳২,৪৫০</div>
          </div>
          <div className="mt-1.5 text-[9px] bg-rose-900/60 text-rose-200 py-1 text-center rounded font-semibold flex items-center justify-center gap-1">
            <ShoppingBag className="w-2.5 h-2.5" />
            <span>১-ক্লিক অর্ডার</span>
          </div>
        </div>

        {/* Product 2 */}
        <div
          onClick={() => setActiveItem(1)}
          className={`p-2.5 rounded-xl border transition-colors cursor-pointer ${
            activeItem === 1
              ? 'bg-[#2E121C] border-amber-400/60'
              : 'bg-[#220D15] border-white/5 opacity-85'
          }`}
        >
          <div className="relative aspect-video rounded-lg overflow-hidden bg-gradient-to-tr from-[#3b0817] to-[#73142e] mb-2 flex items-center justify-center border border-amber-400/20">
            <span className="font-serif text-amber-200 text-xs font-bold tracking-widest text-center px-1">
              ব্রাইডাল চোকার
            </span>
            <span className="absolute top-1 right-1 bg-amber-400 text-zinc-950 text-[8px] font-black px-1.5 rounded">
              TOP
            </span>
          </div>
          <div className="text-[11px] font-bold text-white line-clamp-1">রয়্যাল ব্রাইডাল চোকার কম্বো</div>
          <div className="flex items-center justify-between mt-1 tabular-nums">
            <div className="font-mono text-amber-300 font-extrabold text-xs">৳৩,৪৫০</div>
            <div className="text-[9px] line-through text-zinc-400">৳৪,২০০</div>
          </div>
          <div className="mt-1.5 text-[9px] bg-rose-900/60 text-rose-200 py-1 text-center rounded font-semibold flex items-center justify-center gap-1">
            <ShoppingBag className="w-2.5 h-2.5" />
            <span>১-ক্লিক অর্ডার</span>
          </div>
        </div>
      </div>

      {/* Bottom Live Conversion Strip */}
      <div className="bg-[#12060A] px-3.5 py-2 border-t border-white/10 flex items-center justify-between text-[10px]">
        <div className="flex items-center gap-1.5 text-zinc-300 truncate max-w-[70%]">
          <span className="truncate">{notifications[activeItem]}</span>
        </div>
        <div className="flex items-center gap-1 text-amber-300 font-bold shrink-0">
          <ShieldCheck className="w-3 h-3 text-emerald-400" />
          <span>Steadfast API</span>
        </div>
      </div>
    </div>
  );
};

export default EdelMockup;
