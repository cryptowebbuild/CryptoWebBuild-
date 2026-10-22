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
  schemaType = 'Organization',
  faq
}) => {
  const siteUrl = 'https://cryptowebbuild.com';
  
  // 1. Unified Brand Identity: CryptoWebBuild by Sagor Ahamed
  const defaultTitle = "CryptoWebBuild | Full-Stack Web Engineering, Technical SEO & AI Automation";
  const defaultDescription = "Don't just build a website. Build a high-speed revenue & automation machine. Sub-second E-commerce storefronts, Python/Django & Next.js apps, #1 Technical SEO, and 24/7 AI Agents by Sagor Ahamed.";
  const defaultImage = `${siteUrl}/hero-avatar.webp`;

  // 2. Resolve Final Values (Clean any residual CryptoWebBuild references automatically)
  const rawTitle = title ? title.replace(/CryptoWebBuild/gi, 'CryptoWebBuild') : defaultTitle;
  const finalTitle = rawTitle.includes('CryptoWebBuild') ? rawTitle : `${rawTitle} | CryptoWebBuild`;
  const finalDescription = (description || defaultDescription).replace(/CryptoWebBuild/gi, 'CryptoWebBuild');
  const cleanImage = image ? image.replace(/https?:\/\/CryptoWebBuild\.com/gi, siteUrl) : '';
  const finalImage = cleanImage ? (cleanImage.startsWith('http') ? cleanImage : `${siteUrl}${cleanImage}`) : defaultImage;

  // 3. Robust Canonical Logic
  const getCanonicalUrl = () => {
    if (canonical) {
      const cleaned = canonical.replace(/https?:\/\/CryptoWebBuild\.com/gi, siteUrl);
      return cleaned.startsWith('http') ? cleaned : `${siteUrl}${cleaned}`;
    }
    if (typeof window !== 'undefined') {
      return `${siteUrl}${window.location.pathname}`;
    }
    return siteUrl;
  };

  const fullCanonical = getCanonicalUrl();

  // 4. Comprehensive High-Intent Keywords
  const globalKeywords = [
    'CryptoWebBuild',
    'Sagor Ahamed',
    'Full-Stack Product Engineer',
    'Python Django Developer',
    'React Next.js Agency',
    'Technical SEO Optimization',
    'High-Converting E-Commerce Website',
    'Custom AI Agents & RAG Automation',
    'Web3 Infrastructure Architect'
  ];
  
  const allKeywords = [...new Set([...keywords.map(k => k.replace(/CryptoWebBuild/gi, 'CryptoWebBuild')), ...globalKeywords])];

  // 5. Structured Data (Schema.org JSON-LD)
  const generateSchema = () => {
    if (schema) return schema;

    const baseSchema: Record<string, any> = {
      "@context": "https://schema.org",
      "url": fullCanonical,
      "image": {
        "@type": "ImageObject",
        "url": finalImage
      },
      "description": finalDescription,
      "sameAs": [
        "https://github.com/cryptowebbuild",
        "https://x.com/CryptoWebBuildX",
        "https://www.youtube.com/@cryptowebbuild",
        "https://t.me/cryptowebbuild",
        "https://wa.me/8801618138820"
      ]
    };

    if (schemaType === 'Organization') {
      return {
        "@context": "https://schema.org",
        "@graph": [
          {
            "@type": "ProfessionalService",
            "@id": `${siteUrl}/#organization`,
            "name": "CryptoWebBuild",
            "alternateName": "CryptoWebBuild Engineering Studio by Sagor Ahamed",
            "url": siteUrl,
            "image": finalImage,
            "description": finalDescription,
            "logo": {
              "@type": "ImageObject",
              "url": `${siteUrl}/hero-avatar.webp`
            },
            "priceRange": "$$-$$$",
            "telephone": "+8801618138820",
            "email": "hello@cryptowebbuild.com",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Sylhet",
              "addressCountry": "BD"
            },
            "founder": {
              "@type": "Person",
              "@id": `${siteUrl}/#founder`,
              "name": "Sagor Ahamed",
              "jobTitle": "Founder & Principal Full-Stack Architect",
              "url": `${siteUrl}/about`,
              "sameAs": [
                "https://github.com/cryptowebbuild",
                "https://x.com/CryptoWebBuildX",
                "https://www.youtube.com/@cryptowebbuild"
              ]
            },
            "sameAs": [
              "https://github.com/cryptowebbuild",
              "https://x.com/CryptoWebBuildX",
              "https://www.youtube.com/@cryptowebbuild",
              "https://t.me/cryptowebbuild",
              "https://wa.me/8801618138820"
            ],
            "contactPoint": [
              {
                "@type": "ContactPoint",
                "contactType": "sales",
                "telephone": "+8801618138820",
                "email": "hello@cryptowebbuild.com",
                "availableLanguage": ["English", "Bengali"]
              }
            ]
          },
          {
            "@type": "WebSite",
            "@id": `${siteUrl}/#website`,
            "url": siteUrl,
            "name": "CryptoWebBuild",
            "publisher": {
              "@id": `${siteUrl}/#organization`
            }
          },
          {
            "@type": "ItemList",
            "name": "Verified Live Client Systems & Case Studies",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "Edel Bangladesh — 1-Click Luxury E-Commerce Storefront",
                "url": "https://cryptowebbuild.github.io/edel-bangladesh/"
              },
              {
                "@type": "ListItem",
                "position": 2,
                "name": "ClickRunClaw — Cloud Automation SaaS",
                "url": "https://clickrunclaw.com/"
              },
              {
                "@type": "ListItem",
                "position": 3,
                "name": "ShopFast — Headless Next.js E-Commerce",
                "url": `${siteUrl}/shopfast`
              }
            ]
          }
        ]
      };
    }

    if (schemaType === 'Service') {
      return {
        ...baseSchema,
        "@type": "Service",
        "name": finalTitle,
        "provider": {
          "@type": "Organization",
          "name": "CryptoWebBuild",
          "url": siteUrl,
          "logo": {
            "@type": "ImageObject",
            "url": `${siteUrl}/hero-avatar.webp`
          }
        },
        "areaServed": "Global",
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Full-Stack Web Engineering, Technical SEO & AI Automation Services",
          "itemListElement": [
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "High-Converting Web & Full-Stack Product Engineering (Python/Django, React, Next.js)" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Technical SEO & Sub-Second Speed Optimization (100/100 PageSpeed)" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Custom AI Agents & Business Workflow Automation (RAG, WhatsApp, Telegram)" } }
          ]
        }
      };
    }

    let articleSchema: Record<string, any> | null = null;
    let faqSchema: Record<string, any> | null = null;

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
          "url": `${siteUrl}/about`
        },
        "publisher": {
          "@type": "Organization",
          "name": "CryptoWebBuild",
          "logo": {
            "@type": "ImageObject",
            "url": `${siteUrl}/hero-avatar.webp`
          }
        },
        "datePublished": publishedTime || new Date().toISOString(),
        "dateModified": publishedTime || new Date().toISOString()
      };
    }

    if (schemaType === 'FAQPage' || (faq && faq.length > 0)) {
      faqSchema = {
        ...baseSchema,
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

    if (articleSchema && faqSchema) {
      return [articleSchema, faqSchema];
    }
    if (articleSchema) return articleSchema;
    if (faqSchema) return faqSchema;

    return {
      ...baseSchema,
      "@type": "Person",
      "name": author,
      "jobTitle": "Full-Stack Product Engineer & AI Automation Architect",
      "worksFor": {
        "@type": "Organization",
        "name": "CryptoWebBuild",
        "url": siteUrl
      },
      "knowsAbout": [
        "Python",
        "Django",
        "PostgreSQL",
        "React.js",
        "Next.js",
        "Technical SEO",
        "E-Commerce Conversion Optimization",
        "RAG AI Agents",
        "Web3 Infrastructure"
      ]
    };
  };

  const finalSchema = generateSchema();

  return (
    <Helmet>
      <title>{finalTitle}</title>
      <meta name="description" content={finalDescription} />
      <meta name="keywords" content={allKeywords.slice(0, 15).join(', ')} />
      <link rel="canonical" href={fullCanonical} />
      <meta name="author" content={author} />
      
      <meta 
        name="robots" 
        content={noIndex 
          ? "noindex, nofollow" 
          : "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
        } 
      />

      {/* Open Graph */}
      <meta property="og:site_name" content="CryptoWebBuild" />
      <meta property="og:type" content={type} />
      <meta property="og:url" content={fullCanonical} />
      <meta property="og:title" content={finalTitle} />
      <meta property="og:description" content={finalDescription} />
      <meta property="og:image" content={finalImage} />
      <meta property="og:image:alt" content={finalTitle} />
      <meta property="og:locale" content="en_US" />

      {/* Twitter Cards */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@CryptoWebBuildX" />
      <meta name="twitter:creator" content="@CryptoWebBuildX" />
      <meta name="twitter:title" content={finalTitle} />
      <meta name="twitter:description" content={finalDescription} />
      <meta name="twitter:image" content={finalImage} />

      {type === 'article' && publishedTime && (
        <meta property="article:published_time" content={publishedTime} />
      )}
      {type === 'article' && (
        <meta property="article:author" content={author} />
      )}

      <script type="application/ld+json">
        {JSON.stringify(finalSchema)}
      </script>
    </Helmet>
  );
};

export default SEO;
