import React, { useState } from 'react';

interface OptimizedImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  className?: string;
  fill?: boolean; // If true, fills the parent container
  priority?: boolean; // If true, loads immediately (LCP optimization)
  width?: number;
  height?: number;
  aspectRatio?: string; // Optional manual aspect ratio (e.g. "16/9")
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
  // If priority is true, we assume loaded to prevent LCP delay, 
  // though the browser still needs to fetch it.
  const [isLoaded, setIsLoaded] = useState(priority);
  const [hasError, setHasError] = useState(false);

  // 1. Auto-optimize Unsplash URLs (WebP + Quality 75)
  const separator = src.includes('?') ? '&' : '?';
  const optimizedSrc = src.includes('images.unsplash.com') && !src.includes('fm=webp')
    ? `${src}${separator}fm=webp&q=75`
    : src;

  // 2. CLS FIX: Calculate Aspect Ratio to reserve space before load
  // This prevents the page from "jumping" when the image appears.
  const aspectRatioStyle = (!fill && (aspectRatio || (width && height)))
    ? { aspectRatio: aspectRatio || `${width} / ${height}` }
    : undefined;

  return (
    <div 
      className={`
        relative overflow-hidden 
        ${fill ? 'absolute inset-0 h-full w-full' : 'w-full'} 
        ${!isLoaded && !hasError ? 'bg-slate-200 dark:bg-slate-800 animate-pulse' : 'bg-transparent'}
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
              // 3. Priority Handling: Eager for Hero images, Lazy for others
              loading={priority ? "eager" : "lazy"}
              // @ts-ignore - fetchPriority is a valid attribute but React types might not know it yet
              fetchPriority={priority ? "high" : "auto"}
              decoding="async"
              className={`
                ${!priority && 'transition-all duration-700 ease-out'}
                ${fill ? 'absolute inset-0 h-full w-full object-cover' : 'w-full h-auto'}
                ${isLoaded || priority ? 'opacity-100 scale-100 blur-0' : 'opacity-0 scale-105 blur-xl'}
              `}
              onLoad={() => setIsLoaded(true)}
              onError={() => {
                setIsLoaded(true);
                setHasError(true);
              }}
              {...props}
          />
        ) : (
          <div className={`flex items-center justify-center bg-gray-100 dark:bg-gray-800 text-gray-400 ${fill ? 'absolute inset-0 w-full h-full' : 'w-full h-full'}`}>
             <svg className="w-1/2 h-1/2 opacity-20" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
          </div>
        )}
    </div>
  );
};

export default OptimizedImage;