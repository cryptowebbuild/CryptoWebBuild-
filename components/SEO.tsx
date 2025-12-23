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
  image, 
  type = 'website',
  name = 'CryptoWebBuild',
  publishedTime,
  author = 'Sagor Ahamed',
  noIndex = false,
  schema
}) => {
  const siteUrl = 'https://cryptowebbuild.com';
  
  // 1. Defaut Values
  const defaultTitle = "Sagor Ahamed | Web3 & Crypto Website Developer";
  const defaultDescription = "Professional freelance developer specializing in high-performance React websites for Token Launches, Meme Coins, and E-commerce.";
  const defaultImage = `${siteUrl}/hero-avatar.webp`; // Ensure this image exists in public folder

  // 2. Resolve Final Values
  const finalTitle = title || defaultTitle;
  const finalDescription = description || defaultDescription;
  const finalImage = image ? (image.startsWith('http') ? image : `${siteUrl}${image}`) : defaultImage;

  // 3. Robust Canonical Logic
  const getCanonicalUrl = () => {
    if (canonical) {
      return canonical.startsWith('http') ? canonical : `${siteUrl}${canonical}`;
    }
    // Safe check for window availability (prevents build crashes)
    if (typeof window !== 'undefined') {
      return window.location.href.split('?')[0]; // Removes query params like ?fbclid=...
    }
    return siteUrl;
  };

  const fullCanonical = getCanonicalUrl();

  // 4. Keywords
  const defaultKeywords = ['Web3 Developer', 'Crypto Website', 'React Developer', 'Solana Developer', 'Frontend Engineer'];
  const allKeywords = [...new Set([...defaultKeywords, ...keywords])];

  // 5. Default JSON-LD Schema (Vital for SEO)
  // If no custom schema is provided, we tell Google this is a "Person" (You)
  const defaultSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": author,
    "url": siteUrl,
    "jobTitle": "Web3 Developer",
    "image": finalImage,
    "description": finalDescription,
    "sameAs": [
        "https://github.com/YourGithubUsername", // Update this later
        "https://twitter.com/WebBuildDev"
    ]
  };

  const finalSchema = schema || defaultSchema;

  return (
    <Helmet>
      {/* Standard Metadata */}
      <title>{finalTitle}</title>
      <meta name="description" content={finalDescription} />
      <meta name="keywords" content={allKeywords.join(', ')} />
      <link rel="canonical" href={fullCanonical} />
      <meta name="author" content={author} />
      
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
      <meta property="og:image" content={finalImage} />
      <meta property="og:locale" content="en_US" />

      {/* Article Specific Open Graph */}
      {type === 'article' && publishedTime && (
        <meta property="article:published_time" content={publishedTime} />
      )}

      {/* Twitter Cards */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@WebBuildDev" />
      <meta name="twitter:creator" content="@WebBuildDev" />
      <meta name="twitter:title" content={finalTitle} />
      <meta name="twitter:description" content={finalDescription} />
      <meta name="twitter:image" content={finalImage} />

      {/* JSON-LD Schema Injection */}
      <script type="application/ld+json">
        {JSON.stringify(finalSchema)}
      </script>
    </Helmet>
  );
};

export default SEO;
