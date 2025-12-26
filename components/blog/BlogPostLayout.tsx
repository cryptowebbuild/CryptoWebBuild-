import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../SEO';
import OptimizedImage from '../OptimizedImage';
import TableOfContents from './TableOfContents';
import AuthorBio from './AuthorBio';

interface BlogPostLayoutProps {
  title: string;
  description: string;
  publishedTime: string;
  modifiedTime?: string;
  image: string;
  category: string;
  readTime: string;
  keywords: string[];
  canonical: string;
  children: React.ReactNode;
}

const BlogPostLayout: React.FC<BlogPostLayoutProps> = ({
  title,
  description,
  publishedTime,
  modifiedTime,
  image,
  category,
  readTime,
  keywords,
  canonical,
  children
}) => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-[#020617] transition-colors duration-300">
      <SEO
        title={title}
        description={description}
        keywords={keywords}
        canonical={canonical}
        type="article"
        publishedTime={publishedTime}
        image={image}
        author="Sagor Ahamed"
      />

      {/* --- Progress Bar (Optional Polish) --- */}
      <div className="fixed top-0 left-0 w-full h-1 z-50 bg-transparent">
         {/* Implement Scroll Progress later if needed */}
      </div>

      {/* --- Hero Section (Glassmorphism) --- */}
      <header className="relative pt-32 pb-16 md:pt-48 md:pb-32 px-6 overflow-hidden">
        {/* Background Gradients */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none">
            <div className="absolute top-[20%] left-[10%] w-[500px] h-[500px] bg-purple-500/20 blur-[120px] rounded-full mix-blend-multiply dark:mix-blend-screen animate-blob" />
            <div className="absolute top-[20%] right-[10%] w-[400px] h-[400px] bg-cyan-500/20 blur-[100px] rounded-full mix-blend-multiply dark:mix-blend-screen animate-blob animation-delay-2000" />
        </div>

        <div className="container mx-auto max-w-4xl relative z-10 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/50 dark:bg-white/5 border border-purple-500/20 backdrop-blur-md mb-8 shadow-sm">
                <span className="w-2 h-2 rounded-full bg-purple-500 animate-pulse"></span>
                <span className="text-sm font-bold text-purple-700 dark:text-purple-300 uppercase tracking-widest">{category}</span>
            </div>

            <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-black text-gray-900 dark:text-white mb-8 leading-[1.1] tracking-tight text-balance">
                {title}
            </h1>

            <div className="flex flex-wrap items-center justify-center gap-6 text-gray-600 dark:text-gray-400 font-medium text-sm md:text-base">
                <div className="flex items-center gap-2">
                    <img src="/hero-avatar.webp" alt="Sagor Ahamed" className="w-8 h-8 rounded-full border border-white/20" />
                    <span className="text-gray-900 dark:text-white font-bold">Sagor Ahamed</span>
                </div>
                <span>•</span>
                <span>{publishedTime}</span>
                <span>•</span>
                <span className="flex items-center gap-1 text-purple-600 dark:text-purple-400">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                    {readTime}
                </span>
            </div>
        </div>
      </header>

      {/* --- Main Content Layout --- */}
      <main className="container mx-auto px-6 pb-24 max-w-7xl">

        {/* Featured Image (LCP Optimized) */}
        <div className="max-w-5xl mx-auto mb-16 rounded-[40px] overflow-hidden shadow-2xl shadow-purple-900/20 border-4 border-white dark:border-white/5 relative aspect-video">
            <OptimizedImage
                src={image}
                alt={title}
                fill={true}
                priority={true} // LCP Fix
                className="object-cover"
            />
        </div>

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24">

            {/* Sidebar (Desktop TOC) */}
            <aside className="hidden lg:block w-64 shrink-0">
                <div className="sticky top-32">
                    <TableOfContents />
                </div>
            </aside>

            {/* Article Body */}
            <article className="flex-1 min-w-0">
                <div className="prose prose-lg md:prose-xl dark:prose-invert max-w-none
                    prose-headings:font-display prose-headings:font-bold prose-headings:tracking-tight
                    prose-h2:text-3xl prose-h2:mt-16 prose-h2:mb-6 prose-h2:text-gray-900 dark:prose-h2:text-white
                    prose-h3:text-2xl prose-h3:mt-12 prose-h3:mb-4 prose-h3:text-gray-800 dark:prose-h3:text-gray-100
                    prose-p:text-gray-600 dark:prose-p:text-gray-300 prose-p:leading-relaxed prose-p:mb-8
                    prose-a:text-purple-600 dark:prose-a:text-purple-400 prose-a:no-underline prose-a:font-bold hover:prose-a:underline
                    prose-strong:text-gray-900 dark:prose-strong:text-white prose-strong:font-black
                    prose-li:text-gray-600 dark:prose-li:text-gray-300 prose-li:my-2
                    prose-code:text-purple-600 dark:prose-code:text-purple-300 prose-code:bg-purple-50 dark:prose-code:bg-purple-900/30 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded-md prose-code:font-mono prose-code:text-sm
                    prose-pre:bg-[#0f172a] prose-pre:border prose-pre:border-white/10 prose-pre:rounded-2xl prose-pre:shadow-xl
                ">
                    {children}
                </div>

                {/* Footer Section */}
                <div className="mt-20 pt-10 border-t border-gray-200 dark:border-white/10">
                    <AuthorBio />
                </div>
            </article>
        </div>
      </main>
    </div>
  );
};

export default BlogPostLayout;
