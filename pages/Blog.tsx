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
      bg: 'bg-indigo-50 dark:bg-indigo-900/20',
      border: 'group-hover:border-indigo-500/30'
    },
    'Business': {
      color: 'from-emerald-600 to-teal-500',
      text: 'text-emerald-600 dark:text-emerald-400',
      bg: 'bg-emerald-50 dark:bg-emerald-900/20',
      border: 'group-hover:border-emerald-500/30'
    },
    'Tech': {
      color: 'from-cyan-600 to-blue-500',
      text: 'text-cyan-600 dark:text-cyan-400',
      bg: 'bg-cyan-50 dark:bg-cyan-900/20',
      border: 'group-hover:border-cyan-500/30'
    },
    'Case Study': {
      color: 'from-orange-500 to-red-500',
      text: 'text-orange-600 dark:text-orange-400',
      bg: 'bg-orange-50 dark:bg-orange-900/20',
      border: 'group-hover:border-orange-500/30'
    },
  };

  // Enhance posts with styles
  const styledPosts = blogPosts.map((post: BlogPost) => {
    const style = categoryStyles[post.category] || categoryStyles['Guide'];
    return { ...post, ...style };
  });

  // JSON-LD for SEO
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
    "blogPost": styledPosts.map((post) => ({
      "@type": "BlogPosting",
      "headline": post.title,
      "description": post.excerpt,
      "datePublished": post.date, // Assumes date format is parsable or string
      "url": `https://cryptowebbuild.com/blog/${post.slug}`,
      "image": post.image,
      "author": {
        "@type": "Person",
        "name": "Sagor Ahamed"
      }
    }))
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-[#020617] transition-colors duration-500 relative overflow-hidden">
      
      {/* Background Decor */}
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-purple-500/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="fixed bottom-0 right-0 w-[600px] h-[600px] bg-blue-500/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 pt-32 pb-24 relative z-10">
        <SEO 
          title="Web3 Strategy & Dev Insights | CryptoWebBuild Blog"
          description="Expert guides on crypto marketing, smart contract security, and high-performance frontend architecture. No fluff, just engineering truths."
          canonical="/blog"
          schema={jsonLd}
        />
        
        {/* Header Section */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 shadow-sm backdrop-blur-md mb-6 animate-fade-in-up">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
            <span className="text-xs font-black tracking-widest uppercase text-gray-600 dark:text-gray-300">Engineering Blog</span>
          </div>
          
          <h1 className="font-display text-5xl md:text-7xl font-black text-gray-900 dark:text-white mb-6 tracking-tight leading-[1.1] animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            Insights from the <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-500 dark:from-purple-400 dark:to-cyan-400">Codebase</span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto font-medium leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            Strategic guides on scaling Web3 projects. Learn how to build secure, fast, and high-converting decentralized applications.
          </p>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {styledPosts.map((post, idx) => (
            <Link 
              key={post.id} 
              to={`/blog/${post.slug}`}
              className={`group flex flex-col bg-white dark:bg-[#1e293b]/60 backdrop-blur-sm border border-gray-200 dark:border-white/5 rounded-[32px] overflow-hidden hover:shadow-2xl hover:shadow-purple-500/10 transition-all duration-500 hover:-translate-y-2 animate-fade-in-up hover:border-purple-500/30`}
              style={{ animationDelay: `${0.1 + (idx * 0.05)}s` }}
            >
              {/* Image Container */}
              <div className="relative aspect-[16/10] overflow-hidden bg-gray-100 dark:bg-gray-800">
                 {/* Gradient Overlay for better text visibility (optional) */}
                 <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500 z-10" />

                 <OptimizedImage 
                   src={post.image} 
                   alt={post.title}
                   fill={true}
                   priority={idx < 3} // Priority load the first row for LCP
                   className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-700 ease-out"
                 />
                 
                 {/* Category Badge */}
                 <div className="absolute top-4 left-4 z-20">
                   <span className={`px-3 py-1 rounded-full text-[11px] font-black border border-white/20 shadow-lg uppercase tracking-wider backdrop-blur-md ${post.bg} ${post.text}`}>
                     {post.category}
                   </span>
                 </div>
              </div>
              
              {/* Content */}
              <div className="p-8 flex flex-col flex-1">
                  {/* Meta Data */}
                  <div className="flex items-center justify-between text-xs font-bold text-gray-400 dark:text-gray-500 uppercase tracking-widest mb-4">
                    <div className="flex items-center gap-2">
                        <span className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${post.color}`}></span>
                        {post.date}
                    </div>
                    <span>{post.readTime}</span>
                  </div>
                  
                  {/* Title */}
                  <h2 className="font-display text-2xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors leading-tight line-clamp-2">
                    {post.title}
                  </h2>
                  
                  {/* Excerpt */}
                  <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-6 line-clamp-3 flex-1 font-medium">
                    {post.excerpt}
                  </p>
                  
                  {/* Footer Link */}
                  <div className="mt-auto flex items-center text-sm font-bold text-gray-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors gap-2">
                      Read Article 
                      <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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