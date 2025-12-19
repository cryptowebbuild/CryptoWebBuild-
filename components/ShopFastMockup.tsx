import React from 'react';

interface ShopFastMockupProps {
  className?: string;
}

const ShopFastMockup: React.FC<ShopFastMockupProps> = ({ className = '' }) => {
  return (
    <div className={`bg-[#F5F5F7] relative overflow-hidden flex flex-col font-sans select-none ${className}`}>
      {/* Navbar */}
      <div className="h-14 px-6 flex items-center justify-between bg-white/80 backdrop-blur-md sticky top-0 z-20 border-b border-gray-200">
        <span className="font-bold text-lg tracking-tight text-black">ShopFast.</span>
        <div className="flex gap-5 text-sm font-medium text-gray-500">
            <span>Men</span>
            <span>Women</span>
            <span>New</span>
        </div>
        <div className="flex gap-3">
            <div className="w-5 h-5 rounded-full border border-gray-300"></div>
            <div className="w-5 h-5 bg-black text-white text-[8px] flex items-center justify-center rounded-full">2</div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6 flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16">
        
        {/* Product Image area */}
        <div className="w-64 h-64 md:w-80 md:h-80 bg-white rounded-3xl shadow-xl flex items-center justify-center relative">
            <div className="absolute top-4 left-4 bg-black text-white text-[10px] font-bold px-2 py-1 rounded-full">NEW ARRIVAL</div>
            
            {/* Simple geometric representation of a shoe/product */}
            <div className="relative">
                <div className="w-48 h-24 bg-gradient-to-r from-gray-200 to-gray-300 rounded-xl transform -rotate-12 shadow-lg"></div>
                <div className="w-48 h-24 bg-gradient-to-r from-gray-900 to-black rounded-xl transform -rotate-12 absolute -top-4 -left-4 shadow-2xl"></div>
            </div>

            {/* Floating details */}
            <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-2xl shadow-lg border border-gray-100 flex flex-col items-center animate-bounce" style={{ animationDuration: '3s' }}>
                <span className="text-xs font-bold text-gray-400 uppercase">Speed Score</span>
                <span className="text-2xl font-black text-green-500">100/100</span>
            </div>
        </div>

        {/* Product Details */}
        <div className="max-w-xs space-y-6">
            <div>
                <h2 className="text-3xl font-bold text-black leading-tight mb-2">Ultra Runner <br/>Carbon Edition</h2>
                <p className="text-gray-500 text-sm leading-relaxed">
                    Engineered for speed. Minimalist design meets maximum performance. Pre-rendered static pages for instant load.
                </p>
            </div>

            <div>
                <span className="text-2xl font-bold text-black">$199.00</span>
            </div>

            <div className="flex gap-3">
                <div className="w-8 h-8 rounded-full bg-black border-2 border-white ring-1 ring-gray-200 cursor-pointer"></div>
                <div className="w-8 h-8 rounded-full bg-gray-400 border-2 border-white ring-1 ring-gray-200 cursor-pointer"></div>
                <div className="w-8 h-8 rounded-full bg-blue-600 border-2 border-white ring-1 ring-gray-200 cursor-pointer"></div>
            </div>

            <div className="flex gap-4 pt-2">
                <div className="flex-1 h-12 bg-black text-white font-bold rounded-full flex items-center justify-center hover:scale-105 transition-transform shadow-xl shadow-black/20 cursor-pointer text-sm">
                    Add to Cart
                </div>
                <div className="w-12 h-12 rounded-full border border-gray-300 flex items-center justify-center cursor-pointer hover:bg-gray-100">
                    ♥
                </div>
            </div>
        </div>

      </div>
    </div>
  );
};

export default ShopFastMockup;