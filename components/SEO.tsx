import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string[];
  canonical?: string;
  image?: string;
  type?: 'website' | 'article' | 'profile';
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
  publishedTime,
  author = 'Sagor Ahamed',
  noIndex = false,
  schema
}) => {
  const siteUrl = 'https://cryptowebbuild.com';
  
  // 1. Default Identity (Broad Authority)
  // এটি আপনাকে "Web3" এর পাশাপাশি "General Expert" হিসেবে দেখাবে
  const defaultTitle = "Sagor Ahamed | Senior Full-Stack & Web3 Developer";
  const defaultDescription = "Expert React & Next.js Developer for high-performance Websites. Specializing in Crypto Projects, E-commerce Stores, and Custom Business Solutions.";
  const defaultImage = `${siteUrl}/default-og-image.jpg`; // Make sure to have a generic tech image in public folder

  // 2. Resolve Final Values
  const finalTitle = title || defaultTitle;
  const finalDescription = description || defaultDescription;
  const finalImage = image ? (image.startsWith('http') ? image : `${siteUrl}${image}`) : defaultImage;

  // 3. Robust Canonical Logic (Prevents Duplicate Content Issues)
  const getCanonicalUrl = () => {
    if (canonical) {
      return canonical.startsWith('http') ? canonical : `${siteUrl}${canonical}`;
    }
    // Fallback using window (safe for client-side)
    if (typeof window !== 'undefined') {
      return window.location.href.split('?')[0].split('#')[0]; // Clean URL
    }
    return siteUrl;
  };

  const fullCanonical = getCanonicalUrl();

  // 4. Keyword Strategy (Anti-Cannibalization)
  // Global Keywords: আপনার মূল স্কিলসেট (সবার জন্য প্রযোজ্য)
  const globalKeywords = [
    'Full-Stack Developer', 
    'React Expert', 
    'Next.js Developer', 
    'High-Performance Web Design', 
    'Custom Website Development', 
    'E-commerce Developer',
    'Web3 Integration' 
  ];
  
  // পেজ স্পেসিফিক কিওয়ার্ডের সাথে গ্লোবাল কিওয়ার্ড মার্জ করা হলো
  const allKeywords = [...new Set([...keywords, ...globalKeywords])];

  // 5. Advanced Schema (Professional Service + Person)
  // এটি গুগলকে বলবে আপনি একজন "প্রফেশনাল", শুধু ব্লগার নন।
  const defaultSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": author,
    "url": siteUrl,
    "jobTitle": "Senior Full-Stack Architect",
    "image": finalImage,
    "description": finalDescription,
    "knowsAbout": [
      "Web Development",
      "React.js",
      "Next.js",
      "Blockchain Technology",
      "E-commerce",
      "Technical SEO"
    ],
    "sameAs": [
        "https://github.com/cryptowebbuild", 
        "https://twitter.com/WebBuildDev",
        "https://linkedin.com/in/sagor-ahamed" // Add your real links
    ]
  };

  const finalSchema = schema || defaultSchema;

  return (
    <Helmet>
      {/* --- Standard Metadata --- */}
      <title>{finalTitle}</title>
      <meta name="description" content={finalDescription} />
      <meta name="keywords" content={allKeywords.slice(0, 15).join(', ')} /> {/* Limit to top 15 to avoid spam flags */}
      <link rel="canonical" href={fullCanonical} />
      <meta name="author" content={author} />
      
      {/* --- Robots Control --- */}
      <meta 
        name="robots" 
        content={noIndex 
          ? "noindex, nofollow" 
          : "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
        } 
      />

      {/* --- Open Graph (Facebook/LinkedIn) --- */}
      <meta property="og:site_name" content="CryptoWebBuild" />
      <meta property="og:type" content={type} />
      <meta property="og:url" content={fullCanonical} />
      <meta property="og:title" content={finalTitle} />
      <meta property="og:description" content={finalDescription} />
      <meta property="og:image" content={finalImage} />
      <meta property="og:image:alt" content={finalTitle} />
      <meta property="og:locale" content="en_US" />

      {/* --- Twitter Cards (Large Image for better CTR) --- */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@WebBuildDev" />
      <meta name="twitter:creator" content="@WebBuildDev" />
      <meta name="twitter:title" content={finalTitle} />
      <meta name="twitter:description" content={finalDescription} />
      <meta name="twitter:image" content={finalImage} />

      {/* --- Article Specific Tags --- */}
      {type === 'article' && publishedTime && (
        <meta property="article:published_time" content={publishedTime} />
      )}
      {type === 'article' && (
        <meta property="article:author" content={author} />
      )}

      {/* --- Schema Injection --- */}
      <script type="application/ld+json">
        {JSON.stringify(finalSchema)}
      </script>
    </Helmet>
  );
};

export default SEO;