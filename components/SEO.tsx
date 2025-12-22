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
  // Updated default title/desc to be broader
  const finalTitle = title || "Sagor Ahamed | Professional Website Developer (Crypto, Business, E-com)";
  const finalDescription = description || "Hire Sagor Ahamed for high-performance website development. Specializing in Web3, E-commerce Stores, Business Portfolios, and Blogs using React & Next.js.";

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
  // Expanded Keyword List for broader SEO reach
  const defaultKeywords = [
    'Website Developer', 
    'Web3 Developer', 
    'Business Website Builder', 
    'E-commerce Developer', 
    'Portfolio Website Design', 
    'Blog Development',
    'React Developer',
    'Crypto Website', 
    'Solana Development',
    'Landing Page Expert'
  ];
  const allKeywords = [...new Set([...defaultKeywords, ...keywords])];

  return (
    <Helmet>
      <title>{finalTitle}</title>
      <meta name="description" content={finalDescription} />
      <meta name="keywords" content={allKeywords.join(', ')} />
      <link rel="canonical" href={fullCanonical} />
      <meta name="robots" content={noIndex ? "noindex, nofollow" : "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"} />
      <meta name="author" content={author} />

      {/* Open Graph / Facebook */}
      <meta property="og:site_name" content={name} />
      <meta property="og:type" content={type} />
      <meta property="og:url" content={fullCanonical} />
      <meta property="og:title" content={finalTitle} />
      <meta property="og:description" content={finalDescription} />
      <meta property="og:image" content={image} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      {publishedTime && <meta property="article:published_time" content={publishedTime} />}

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@WebBuildDev" />
      <meta name="twitter:creator" content="@WebBuildDev" />
      <meta name="twitter:title" content={finalTitle} />
      <meta name="twitter:description" content={finalDescription} />
      <meta name="twitter:image" content={image} />

      {/* Structured Data (JSON-LD) */}
      {schema && (
        <script type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      )}
    </Helmet>
  );
};

export default SEO;