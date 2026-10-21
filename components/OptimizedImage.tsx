import React, { useState } from 'react';

interface OptimizedImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  className?: string;
  fill?: boolean;
  priority?: boolean;
  width?: number;
  height?: number;
  aspectRatio?: string;
}

const OptimizedImage: React.FC<OptimizedImageProps> = ({ 
  src, 
  alt, 
  className = '', 
  fill = false,
  priority = false,
  width,
  height,
  aspectRatio,
  ...props 
}) => {
  const [isLoaded, setIsLoaded] = useState(priority);
  const [hasError, setHasError] = useState(false);

  const separator = src.includes('?') ? '&' : '?';
  const optimizedSrc = src.includes('images.unsplash.com') && !src.includes('fm=webp')
    ? `${src}${separator}fm=webp&q=75`
    : src;

  const aspectRatioStyle = (!fill && (aspectRatio || (width && height)))
    ? { aspectRatio: aspectRatio || `${width} / ${height}` }
    : undefined;

  return (
    <div 
      className={`
        relative overflow-hidden 
        ${fill ? 'absolute inset-0 h-full w-full' : 'w-full'} 
        ${!isLoaded && !hasError ? 'bg-slate-200 dark:bg-[#12151E] animate-pulse' : 'bg-transparent'}
        ${className}
      `}
      style={aspectRatioStyle}
    >
      {!hasError ? (
        <img
          src={optimizedSrc}
          alt={alt}
          width={width}
          height={height}
          referrerPolicy="no-referrer"
          loading={priority ? "eager" : "lazy"}
          // @ts-ignore
          fetchPriority={priority ? "high" : "auto"}
          decoding="async"
          className={`
            ${!priority && 'transition-all duration-500 ease-out'}
            ${fill ? 'absolute inset-0 h-full w-full object-cover' : 'w-full h-auto'}
            ${isLoaded || priority ? 'opacity-100 scale-100' : 'opacity-0 scale-105'}
          `}
          onLoad={() => setIsLoaded(true)}
          onError={() => {
            setIsLoaded(true);
            setHasError(true);
          }}
          {...props}
        />
      ) : (
        <div className={`flex flex-col items-center justify-center p-6 text-center bg-gradient-to-br from-[#12151E] via-[#090A0F] to-[#1A1E2B] text-slate-300 border border-white/5 ${fill ? 'absolute inset-0 w-full h-full' : 'w-full min-h-[220px] h-full'}`}>
          <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 mb-3">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.75" d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
          <span className="text-xs font-mono text-emerald-400 tracking-wider mb-1">CryptoWebBuild Architecture</span>
          <span className="text-sm font-semibold text-white max-w-md line-clamp-2">{alt}</span>
        </div>
      )}
    </div>
  );
};

export default OptimizedImage;