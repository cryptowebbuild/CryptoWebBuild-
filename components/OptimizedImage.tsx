import React, { useState, useEffect } from 'react';

interface OptimizedImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  className?: string;
  fill?: boolean;
  priority?: boolean;
}

const OptimizedImage: React.FC<OptimizedImageProps> = ({ 
  src, 
  alt, 
  className = '', 
  fill = false,
  priority = false,
  ...props 
}) => {
  const [isLoaded, setIsLoaded] = useState(priority);

  // Auto-optimize Unsplash URLs for WebP and efficient quality if not already present
  const optimizedSrc = src.includes('images.unsplash.com') && !src.includes('fm=webp')
    ? `${src}&fm=webp&q=75`
    : src;

  useEffect(() => {
    if (priority) {
      const img = new Image();
      img.src = optimizedSrc;
      img.onload = () => setIsLoaded(true);
    }
  }, [optimizedSrc, priority]);

  // If fill is true, wrapper handles positioning, img fills it
  const wrapperClasses = fill 
    ? 'absolute inset-0 w-full h-full' 
    : 'relative w-full h-auto';

  const imgClasses = fill
    ? 'absolute inset-0 w-full h-full object-cover'
    : 'w-full h-auto';
  
  // Smooth blur-up transition
  const transitionClasses = priority
    ? 'opacity-100 blur-0'
    : isLoaded 
      ? 'opacity-100 scale-100 blur-0' 
      : 'opacity-0 scale-105 blur-md';

  return (
    <div className={`overflow-hidden bg-slate-200 dark:bg-slate-800 animate-pulse ${wrapperClasses} ${className}`} style={{ animationDuration: '2s' }}>
        <img
            src={optimizedSrc}
            alt={alt}
            loading={priority ? "eager" : "lazy"}
            decoding={priority ? "sync" : "async"}
            className={`transition-all duration-700 ease-out ${imgClasses} ${transitionClasses}`}
            onLoad={(e) => {
              setIsLoaded(true);
              // Remove pulse animation from parent by manipulating DOM directly or relying on image covering it
              const parent = e.currentTarget.parentElement;
              if(parent) parent.style.animation = 'none';
            }}
            {...props}
        />
    </div>
  );
};

export default OptimizedImage;