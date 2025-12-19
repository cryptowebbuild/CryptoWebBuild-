import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title: string;
  description: string;
  keywords?: string[];
  canonical?: string;
  image?: string;
  type?: 'website' | 'article';
  name?: string;
  publishedTime?: string;
  author?: string;
  noIndex?: boolean;
  schema?: Record<string, any>; // New prop for structured data
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
  // Ensure canonical is absolute
  const fullCanonical = canonical 
    ? (canonical.startsWith('http') ? canonical : `${siteUrl}${canonical}`)
    : (typeof window !== 'undefined' ? window.location.href : siteUrl);

  // Default keywords if none provided (Fallbacks)
  const defaultKeywords = ['Web3 Developer', 'Crypto Website', 'React Developer', 'E-commerce Builder'];
  const allKeywords = keywords.length > 0 ? keywords : defaultKeywords;

  return (
    <Helmet>
      {/* Standard Metadata */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={allKeywords.join(', ')} />
      <link rel="canonical" href={fullCanonical} />
      
      {/* Robots Control: Critical for SEO health */}
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
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
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
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
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