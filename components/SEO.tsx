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
  schemaType?: 'Person' | 'Organization' | 'Service' | 'FAQPage' | 'Article';
  faq?: Array<{ question: string; answer: string }>;
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
  schema,
  schemaType = 'Person',
  faq
}) => {
  const siteUrl = 'https://cryptowebbuild.com';
  
  // 1. Default Identity (Broad Authority)
  const defaultTitle = "Sagor Ahamed | Senior Full-Stack & Web3 Developer";
  const defaultDescription = "Expert React & Next.js Developer for high-performance Websites. Specializing in Crypto Projects, E-commerce Stores, and Custom Business Solutions.";
  const defaultImage = `${siteUrl}/default-og-image.jpg`;

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
  const globalKeywords = [
    'Full-Stack Developer', 
    'React Expert', 
    'Next.js Developer', 
    'High-Performance Web Design', 
    'Custom Website Development', 
    'E-commerce Developer',
    'Web3 Integration' 
  ];
  
  const allKeywords = [...new Set([...keywords, ...globalKeywords])];

  // 5. Advanced Schema (Professional Service + Person + Organization + FAQ + Article)
  const generateSchema = () => {
    if (schema) return schema;

    const baseSchema: Record<string, any> = {
      "@context": "https://schema.org",
      "url": fullCanonical,
      "image": finalImage,
      "description": finalDescription,
      "sameAs": [
          "https://github.com/cryptowebbuild",
          "https://twitter.com/WebBuildDev",
          "https://www.youtube.com/@cryptowebbuild",
          "https://t.me/CryptoWebBuild"
      ]
    };

    if (schemaType === 'Organization') {
      return {
        ...baseSchema,
        "@type": "Organization",
        "name": "CryptoWebBuild Agency",
        "logo": `${siteUrl}/favicon.svg`,
        "founder": {
           "@type": "Person",
           "name": "Sagor Ahamed"
        },
        "contactPoint": {
          "@type": "ContactPoint",
          "contactType": "customer support",
          "email": "hello@cryptowebbuild.com"
        }
      };
    }

    if (schemaType === 'Service') {
      return {
        ...baseSchema,
        "@type": "Service",
        "name": finalTitle,
        "provider": {
          "@type": "Organization",
          "name": "CryptoWebBuild"
        },
        "areaServed": "Global",
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Web Development Services",
          "itemListElement": [
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Crypto Website Development" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "E-commerce Development" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Custom Business Sites" } }
          ]
        }
      };
    }

    // --- 6. Schema Generation (Decoupled Logic) ---
    // We generate potential schemas independently to allow combination (e.g. Article + FAQ)

    let articleSchema: Record<string, any> | null = null;
    let faqSchema: Record<string, any> | null = null;

    // A. Article Schema Logic
    if (schemaType === 'Article' || type === 'article') {
       articleSchema = {
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": fullCanonical
          },
          "headline": finalTitle,
          "description": finalDescription,
          "image": finalImage,
          "author": {
            "@type": "Person",
            "name": author,
            "url": "https://cryptowebbuild.com/about"
          },
          "publisher": {
            "@type": "Organization",
            "name": "CryptoWebBuild",
            "logo": {
              "@type": "ImageObject",
              "url": `${siteUrl}/favicon.svg`
            }
          },
          "datePublished": publishedTime || new Date().toISOString(),
          "dateModified": publishedTime || new Date().toISOString()
       };
    }

    // B. FAQ Schema Logic
    if (schemaType === 'FAQPage' || (faq && faq.length > 0)) {
        faqSchema = {
          ...baseSchema, // Uses base context
          "@type": "FAQPage",
          "mainEntity": faq?.map(item => ({
            "@type": "Question",
            "name": item.question,
            "acceptedAnswer": {
              "@type": "Answer",
              "text": item.answer
            }
          })) || []
        };
    }

    // --- 7. Return Final Schema Structure ---

    // If both exist, return them as a graph array (Standard for multiple schemas)
    if (articleSchema && faqSchema) {
      return [articleSchema, faqSchema];
    }

    // If only one exists, return it
    if (articleSchema) return articleSchema;
    if (faqSchema) return faqSchema;

    // Default: Person
    return {
      ...baseSchema,
      "@type": "Person",
      "name": author,
      "jobTitle": "Senior Full-Stack Architect",
      "knowsAbout": [
        "Web Development",
        "React.js",
        "Next.js",
        "Blockchain Technology",
        "E-commerce",
        "Technical SEO"
      ]
    };
  };

  const finalSchema = generateSchema();

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
