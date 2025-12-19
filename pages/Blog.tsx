import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import OptimizedImage from '../components/OptimizedImage';

const Blog: React.FC = () => {
  const posts = [
    {
      slug: '/website-builder-vs-developer',
      title: 'Best Website Builder vs Hiring a Developer: The Honest Truth',
      date: 'Nov 25, 2025',
      category: 'Tech Strategy',
      image: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=800&q=80',
      desc: 'Why Wix and Squarespace might be killing your business. A breakdown of ownership, speed, SEO, and ROI.'
    },
    {
      slug: '/best-website-developer',
      title: 'How to Find the Best Website Developer in 2026',
      date: 'Nov 16, 2025',
      category: 'Hiring',
      image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80',
      desc: 'The definitive guide to hiring top developers. Pricing, skills checklist, SEO, and avoiding mistakes.'
    },
    {
      slug: '/static-vs-dynamic-website',
      title: 'Static vs Dynamic Websites: Which Grows Business Faster?',
      date: 'Nov 12, 2025',
      category: 'Tech Strategy',
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80',
      desc: 'Learn about speed, SEO, scalability, and costs. A complete 2026 guide for business owners.'
    },
    {
      slug: '/crypto-website-cost',
      title: 'How Much Does a Crypto Website Cost?',
      date: 'Nov 04, 2025',
      category: 'Pricing',
      image: 'https://images.unsplash.com/photo-1518186285589-2f7649de83e0?auto=format&fit=crop&w=800&q=80',
      desc: 'Practical breakdown of costs for 2025-2026. Packages, hidden fees, and developer insights.'
    },
    {
      slug: '/crypto-project-website',
      title: 'Why Your Crypto Project Needs a Professional Website',
      date: 'Nov 03, 2025',
      category: 'Web3 Growth',
      image: 'https://images.unsplash.com/photo-1639322537228-f710d846310a?auto=format&fit=crop&w=800&q=80',
      desc: 'Build trust, control your message, and rank on Google. Beyond just social media.'
    },
    {
      slug: '/meme-coin-website-features',
      title: '5 Must-Have Features for a Successful Meme Coin Site',
      date: 'Nov 03, 2025',
      category: 'Viral Marketing',
      image: 'https://images.unsplash.com/photo-1621504450168-38f647315661?auto=format&fit=crop&w=800&q=80',
      desc: 'Essential features to build trust and attract holders. Checklist and examples included.'
    }
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "name": "CryptoWebBuild Insights",
    "url": "https://cryptowebbuild.com/blog",
    "description": "Guides, case studies, and insights on building fast, SEO-first websites for the Web3 era.",
    "publisher": {
      "@type": "Organization",
      "name": "CryptoWebBuild",
      "logo": {
        "@type": "ImageObject",
        "url": "https://cryptowebbuild.com/logo.png"
      }
    },
    "blogPost": posts.map(post => ({
      "@type": "BlogPosting",
      "headline": post.title,
      "description": post.desc,
      "datePublished": new Date(post.date).toISOString().split('T')[0],
      "url": `https://cryptowebbuild.com${post.slug}`,
      "image": post.image,
      "author": {
        "@type": "Person",
        "name": "Sagor Ahamed"
      }
    }))
  };

  return (
    <div className="container mx-auto px-6 pt-32 pb-20">
      <SEO 
        title="Web3 Development & SEO Blog | CryptoWebBuild"
        description="Expert guides on crypto website costs, hiring developers, meme coin marketing features, and static vs dynamic web architecture."
      />
      <script type="application/ld+json">
        {JSON.stringify(jsonLd)}
      </script>
      <div className="text-center mb-20 animate-float">
        <h1 className="font-display text-5xl md:text-6xl font-bold text-text-main mb-6">Blog & <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">Insights</span></h1>
        <p className="text-text-muted max-w-2xl mx-auto text-lg">
          Guides, case studies, and insights on building fast, SEO-first websites for the Web3 era.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((post, idx) => (
          <Link 
            key={post.slug} 
            to={post.slug}
            className="group flex flex-col bg-surface border border-white/5 rounded-[32px] overflow-hidden hover:border-purple-500/50 hover:shadow-2xl hover:shadow-purple-500/10 transition-all duration-500 hover:-translate-y-2 animate-slide-up"
            style={{ animationDelay: `${idx * 0.1}s` }}
          >
            {/* Image Container */}
            <div className="relative h-64 overflow-hidden bg-surface-highlight">
               <div className="absolute inset-0 bg-void/10 group-hover:bg-transparent transition-colors duration-500 z-10" />
               <OptimizedImage 
                 src={post.image} 
                 alt={post.title}
                 fill={true}
                 // Prioritize loading the first 2 images for LCP speed
                 priority={idx < 2}
                 className="object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
               />
               <div className="absolute top-4 left-4 z-20">
                 <span className="px-3 py-1 bg-surface/90 backdrop-blur-md rounded-full text-xs font-bold text-text-main border border-white/10 shadow-sm">
                   {post.category}
                 </span>
               </div>
            </div>
            
            <div className="p-8 flex flex-col flex-1 relative">
                <div className="text-xs font-bold text-cyan-500 uppercase tracking-widest mb-3">{post.date}</div>
                
                <h2 className="font-display text-2xl font-bold text-text-main mb-4 group-hover:text-purple-400 transition-colors leading-tight line-clamp-2">
                {post.title}
                </h2>
                
                <p className="text-text-muted leading-relaxed text-sm mb-6 line-clamp-3 flex-1">
                  {post.desc}
                </p>
                
                <div className="mt-auto flex items-center text-sm font-bold text-text-main group-hover:text-purple-400 transition-colors">
                    Read Article 
                    <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Blog;