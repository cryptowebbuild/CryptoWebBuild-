import React, { useState } from 'react';

interface OptimizedImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  className?: string;
  fill?: boolean; // If true, fills the parent container
  priority?: boolean; // If true, loads immediately (LCP optimization)
  width?: number;
  height?: number;
}

const OptimizedImage: React.FC<OptimizedImageProps> = ({ 
  src, 
  alt, 
  className = '', 
  fill = false,
  priority = false,
  width,
  height,
  ...props 
}) => {
  // If priority is true, we assume loaded to prevent LCP delay, 
  // though the browser still needs to fetch it.
  const [isLoaded, setIsLoaded] = useState(priority);

  // 1. Auto-optimize Unsplash URLs (WebP + Quality 75)
  const optimizedSrc = src.includes('images.unsplash.com') && !src.includes('fm=webp')
    ? `${src}&fm=webp&q=75`
    : src;

  // 2. CLS FIX: Calculate Aspect Ratio to reserve space before load
  // This prevents the page from "jumping" when the image appears.
  const aspectRatioStyle = (!fill && width && height) 
    ? { aspectRatio: `${width} / ${height}` } 
    : undefined;

  return (
    <div 
      className={`
        relative overflow-hidden 
        ${fill ? 'absolute inset-0 h-full w-full' : 'w-full'} 
        ${!isLoaded ? 'bg-slate-200 dark:bg-slate-800 animate-pulse' : 'bg-transparent'} 
        ${className}
      `}
      style={aspectRatioStyle}
    >
        <img
            src={optimizedSrc}
            alt={alt}
            width={width}
            height={height}
            // 3. Priority Handling: Eager for Hero images, Lazy for others
            loading={priority ? "eager" : "lazy"}
            decoding="async"
            className={`
              transition-all duration-700 ease-out 
              ${fill ? 'absolute inset-0 h-full w-full object-cover' : 'w-full h-auto'}
              ${isLoaded ? 'opacity-100 scale-100 blur-0' : 'opacity-0 scale-105 blur-xl'}
            `}
            onLoad={() => setIsLoaded(true)}
            {...props}
        />
    </div>
  );
};

export default OptimizedImage;
