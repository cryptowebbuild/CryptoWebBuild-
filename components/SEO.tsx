import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string[];
  canonical?: string;
  image?: string;
  type?: 'website' | 'article';
  name?: string;
  publishedTime?: string;
  author?: string;
  noIndex?: boolean;
  schema?: Record<string, any>;
}

const SEO: React.FC<SEOProps> = ({ 
  title, 
  description, 
  keywords = [],
  canonical, 
  image = 'https://cryptowebbuild.com/hero-avatar.webp',
  type = 'website',
  name = 'CryptoWebBuild',
  publishedTime,
  author = 'Sagor Ahamed',
  noIndex = false,
  schema
}) => {
  const siteUrl = 'https://cryptowebbuild.com';
  
  // Default SEO Values (Fallback if not provided)
  const defaultTitle = "Sagor Ahamed | Web3 & Crypto Website Developer";
  const defaultDescription = "Professional freelance developer specializing in high-performance React websites for Token Launches, Meme Coins, and E-commerce.";
  
  // Use provided values or fall back to defaults
  const finalTitle = title || defaultTitle;
  const finalDescription = description || defaultDescription;

  // Robust Canonical Logic:
  // 1. If explicit canonical is passed, use it.
  // 2. If not passed, use window.location.pathname (Clean URL) to strip query params.
  // 3. Fallback to siteUrl.
  const getCanonicalUrl = () => {
    if (canonical) {
      return canonical.startsWith('http') ? canonical : `${siteUrl}${canonical}`;
    }
    if (typeof window !== 'undefined') {
      return `${siteUrl}${window.location.pathname}`;
    }
    return siteUrl;
  };

  const fullCanonical = getCanonicalUrl();

  // Default keywords + any specific ones
  const defaultKeywords = ['Web3 Developer', 'Crypto Website', 'React Developer', 'E-commerce Builder'];
  const allKeywords = [...new Set([...defaultKeywords, ...keywords])]; // Remove duplicates

  return (
    <Helmet>
      {/* Standard Metadata */}
      <title>{finalTitle}</title>
      <meta name="description" content={finalDescription} />
      <meta name="keywords" content={allKeywords.join(', ')} />
      <link rel="canonical" href={fullCanonical} />
      
      {/* Robots Control */}
      <meta 
        name="robots" 
        content={noIndex 
          ? "noindex, nofollow" 
          : "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
        } 
      />

      {/* Open Graph / Facebook */}
      <meta property="og:site_name" content={name} />
      <meta property="og:type" content={type} />
      <meta property="og:url" content={fullCanonical} />
      <meta property="og:title" content={finalTitle} />
      <meta property="og:description" content={finalDescription} />
      <meta property="og:image" content={image} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:locale" content="en_US" />

      {/* Article Specific Open Graph */}
      {type === 'article' && publishedTime && (
        <meta property="article:published_time" content={publishedTime} />
      )}
      {type === 'article' && (
        <meta property="article:author" content={author} />
      )}

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@WebBuildDev" />
      <meta name="twitter:creator" content="@WebBuildDev" />
      <meta name="twitter:title" content={finalTitle} />
      <meta name="twitter:description" content={finalDescription} />
      <meta name="twitter:image" content={image} />

      {/* JSON-LD Schema Injection */}
      {schema && (
        <script type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      )}
    </Helmet>
  );
};

export default SEO;