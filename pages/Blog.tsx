import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import OptimizedImage from '../components/OptimizedImage';
import { blogPosts, BlogPost } from '../data/blogPosts';

const Blog: React.FC = () => {
  // Mapping categories to styling
  const categoryStyles: Record<string, { color: string, text: string, bg: string, border: string }> = {
    'Guide': {
      color: 'from-indigo-600 to-purple-600',
      text: 'text-indigo-600 dark:text-indigo-400',
      bg: 'bg-indigo-100 dark:bg-indigo-900/30',
      border: 'group-hover:border-indigo-500/50'
    },
    'Business': {
      color: 'from-emerald-600 to-teal-500',
      text: 'text-emerald-600 dark:text-emerald-400',
      bg: 'bg-emerald-100 dark:bg-emerald-900/30',
      border: 'group-hover:border-emerald-500/50'
    },
    'Tech': {
      color: 'from-cyan-600 to-blue-500',
      text: 'text-cyan-600 dark:text-cyan-400',
      bg: 'bg-cyan-100 dark:bg-cyan-900/30',
      border: 'group-hover:border-cyan-500/50'
    },
    'Case Study': {
      color: 'from-orange-500 to-red-500',
      text: 'text-orange-600 dark:text-orange-400',
      bg: 'bg-orange-100 dark:bg-orange-900/30',
      border: 'group-hover:border-orange-500/50'
    },
  };

  const posts = blogPosts.map((post: BlogPost) => {
    const style = categoryStyles[post.category] || categoryStyles['Guide'];
    return {
      ...post,
      ...style,
      desc: post.excerpt
    };
  });

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "name": "CryptoWebBuild Insights",
    "url": "https://cryptowebbuild.com/blog",
    "description": "Deep dives into Web3 architecture, frontend performance, and the business of blockchain.",
    "publisher": {
      "@type": "Organization",
      "name": "CryptoWebBuild",
      "logo": {
        "@type": "ImageObject",
        "url": "https://cryptowebbuild.com/favicon.svg"
      }
    },
    "blogPost": posts.map((post: any) => ({
      "@type": "BlogPosting",
      "headline": post.title,
      "description": post.desc,
      "datePublished": new Date(post.date).toISOString().split('T')[0],
      // FIX: Ensure absolute URL structure includes /blog/ prefix
      "url": `https://cryptowebbuild.com/blog/${post.slug}`,
      "image": post.image,
      "author": {
        "@type": "Person",
        "name": "Sagor Ahamed"
      }
    }))
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-[#020617] transition-colors duration-300">
      
      {/* Ambient Glow for Depth */}
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-full h-[600px] bg-purple-500/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 pt-32 pb-24 relative z-10">
        <SEO 
          title="Web3 & Tech Strategy Insights | CryptoWebBuild"
          description="Expert guides on crypto marketing, development costs, hiring strategies, and web architecture. Built for founders who want to scale."
          canonical="/blog"
          schema={jsonLd}
        />
        
        {/* Header Section */}
        <div className="text-center mb-24 animate-slide-up">
          <div className="inline-block px-5 py-2 mb-6 rounded-full bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 text-gray-900 dark:text-white text-xs font-black tracking-widest uppercase shadow-lg backdrop-blur-md">
            Knowledge Hub • 2026
          </div>
          <h1 className="font-display text-5xl md:text-7xl font-black text-gray-900 dark:text-white mb-6 tracking-tight">
            Insights from the <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-500 dark:from-purple-400 dark:to-blue-400">Codebase</span>
          </h1>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-lg md:text-xl leading-relaxed font-medium">
            Strategic guides on Web3 architecture, frontend performance, and business growth. No fluff, just engineering truths.
          </p>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, idx) => (
            <Link 
              key={post.slug} 
              // FIX: Explicitly adding /blog/ prefix so routing matches App.tsx
              to={`/blog/${post.slug}`}
              className={`group flex flex-col bg-white dark:bg-[#1e293b] border border-gray-200 dark:border-white/5 rounded-[32px] overflow-hidden hover:shadow-2xl hover:shadow-purple-500/10 transition-all duration-500 hover:-translate-y-2 animate-slide-up border-t-4 ${post.border}`}
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              {/* Image Container with Zoom Effect */}
              <div className="relative h-64 overflow-hidden bg-gray-100 dark:bg-gray-800">
                 <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500 z-10" />
                 <OptimizedImage 
                   src={post.image} 
                   alt={post.title}
                   fill={true}
                   priority={idx < 3} // Load first 3 images instantly for LCP score
                   className="object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out"
                 />
                 
                 {/* Category Badge */}
                 <div className="absolute top-4 left-4 z-20">
                   <span className={`px-4 py-1.5 backdrop-blur-md rounded-full text-xs font-bold border border-white/20 shadow-lg uppercase tracking-wide ${post.bg} ${post.text}`}>
                     {post.category}
                   </span>
                 </div>
              </div>
              
              {/* Card Content */}
              <div className="p-8 flex flex-col flex-1 relative">
                  {/* Meta Data */}
                  <div className="flex items-center justify-between text-xs font-bold text-gray-400 dark:text-gray-500 uppercase tracking-widest mb-5">
                    <div className="flex items-center gap-2">
                        <span className={`w-2 h-2 rounded-full bg-gradient-to-r ${post.color}`}></span>
                        {post.date}
                    </div>
                    {/* READ TIME DISPLAY - Pulled correctly from blogPosts.ts */}
                    <span>{post.readTime}</span>
                  </div>
                  
                  {/* Title */}
                  <h2 className="font-display text-2xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors leading-[1.2] line-clamp-2">
                    {post.title}
                  </h2>
                  
                  {/* Description */}
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-sm mb-8 line-clamp-3 flex-1 font-medium">
                    {post.desc}
                  </p>
                  
                  {/* Footer Arrow */}
                  <div className="mt-auto flex items-center text-sm font-bold text-gray-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                      Read Article 
                      <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-2 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                  </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;