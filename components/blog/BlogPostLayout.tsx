import React, { useMemo, useEffect, useState } from 'react';
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
  image?: string;
  category: string;
  readTime?: string;
  keywords: string[];
  canonical: string;
  children: React.ReactNode;
}

// --- HELPER: Extract text from React Children to count words ---
const extractTextFromNode = (node: React.ReactNode): string => {
  if (!node) return "";
  if (typeof node === "string") return node;
  if (typeof node === "number") return node.toString();
  if (Array.isArray(node)) return node.map(extractTextFromNode).join(" ");
  if (React.isValidElement(node) && node.props && (node.props as any).children) {
    return extractTextFromNode((node.props as any).children);
  }
  return "";
};

// --- HELPER: Smart Image Mapper ---
const getContextualImage = (title: string, category: string, providedImage?: string) => {
  if (providedImage && !providedImage.includes('hero-avatar')) return providedImage;
  const t = title.toLowerCase();
  const c = category.toLowerCase();

  if (t.includes('solana') || t.includes('meme') || c.includes('web3') || t.includes('crypto')) {
    return "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&w=1200&q=80";
  }
  if (t.includes('marketing') || t.includes('growth') || t.includes('seo') || t.includes('traffic')) {
    return "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80";
  }
  if (t.includes('shop') || t.includes('commerce') || c.includes('business') || t.includes('cost')) {
    return "https://images.unsplash.com/photo-1556742049-0cfed4f7a07d?auto=format&fit=crop&w=1200&q=80";
  }
  return "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&q=80"; 
};

const BlogPostLayout: React.FC<BlogPostLayoutProps> = ({
  title,
  description,
  publishedTime,
  modifiedTime,
  image,
  category,
  keywords,
  canonical,
  children
}) => {
  
  // 1. Calculate Real Read Time
  const calculatedReadTime = useMemo(() => {
    const text = extractTextFromNode(children);
    const words = text.split(/\s+/).length;
    const minutes = Math.ceil(words / 200); 
    return `${minutes} min read`; 
  }, [children]);

  // 2. Get Auto Contextual Image
  const finalImage = useMemo(() => 
    getContextualImage(title, category, image), 
  [title, category, image]);

  // 3. Scroll Progress Logic
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const updateScrollProgress = () => {
      const currentScroll = window.scrollY;
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (scrollHeight) {
        setScrollProgress((currentScroll / scrollHeight) * 100);
      }
    };
    window.addEventListener("scroll", updateScrollProgress);
    return () => window.removeEventListener("scroll", updateScrollProgress);
  }, []);

  return (
    <div className="min-h-screen bg-white dark:bg-[#020617] transition-colors duration-300">
      <SEO
        title={title}
        description={description}
        keywords={keywords}
        canonical={canonical}
        type="article"
        publishedTime={publishedTime}
        image={finalImage} 
        author="Sagor Ahamed"
      />

      {/* --- Progress Bar --- */}
      <div 
        className="fixed top-0 left-0 h-1 z-[60] bg-gradient-to-r from-purple-500 to-cyan-500 transition-all duration-100 ease-out" 
        style={{ width: `${scrollProgress}%` }}
      />

      {/* --- Hero Section --- */}
      <header className="relative pt-32 pb-16 md:pt-48 md:pb-24 px-6 overflow-hidden">
        {/* Background Gradients */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none">
            <div className="absolute top-[20%] left-[10%] w-[500px] h-[500px] bg-purple-500/10 blur-[120px] rounded-full mix-blend-multiply dark:mix-blend-screen animate-blob" />
            <div className="absolute top-[20%] right-[10%] w-[400px] h-[400px] bg-blue-500/10 blur-[100px] rounded-full mix-blend-multiply dark:mix-blend-screen animate-blob animation-delay-2000" />
        </div>

        <div className="container mx-auto max-w-4xl relative z-10 text-center">
            {/* Back Button */}
            <div className="mb-8 flex justify-center animate-fade-in-up">
                <Link to="/blog" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 backdrop-blur-md text-sm font-bold text-gray-700 dark:text-gray-300 hover:bg-white hover:text-purple-600 dark:hover:bg-white/10 dark:hover:text-purple-400 transition-all shadow-sm hover:shadow-md group">
                    <svg className="w-4 h-4 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path></svg>
                    Back to Library
                </Link>
            </div>

            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-50 dark:bg-purple-900/20 border border-purple-100 dark:border-purple-800 backdrop-blur-md mb-8 shadow-sm animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
                <span className="w-2 h-2 rounded-full bg-purple-500 animate-pulse"></span>
                <span className="text-xs font-black text-purple-700 dark:text-purple-300 uppercase tracking-widest">{category}</span>
            </div>

            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 dark:text-white mb-8 leading-[1.1] tracking-tight text-balance animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                {title}
            </h1>

            <div className="flex flex-wrap items-center justify-center gap-6 text-gray-600 dark:text-gray-400 font-medium text-sm md:text-base animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
                <div className="flex items-center gap-2">
                    <img src="/hero-avatar.webp" alt="Sagor Ahamed" className="w-8 h-8 rounded-full border border-gray-200 dark:border-gray-700 object-cover" />
                    <span className="text-slate-900 dark:text-slate-200 font-bold">Sagor Ahamed</span>
                </div>
                <span className="opacity-30">•</span>
                <span>{publishedTime}</span>
                <span className="opacity-30">•</span>
                <span className="flex items-center gap-1.5 text-purple-600 dark:text-purple-400 font-bold bg-purple-50 dark:bg-purple-900/10 px-3 py-1 rounded-full text-xs uppercase tracking-wide">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                    {calculatedReadTime}
                </span>
            </div>
        </div>
      </header>

      {/* --- Main Content --- */}
      <main className="container mx-auto px-4 md:px-6 pb-24 max-w-7xl">

        {/* Featured Image */}
        <div className="max-w-5xl mx-auto mb-16 rounded-[32px] md:rounded-[48px] overflow-hidden shadow-2xl shadow-purple-900/10 border-[6px] border-white dark:border-[#1e293b] relative aspect-[16/9] bg-gray-200 dark:bg-gray-800 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <OptimizedImage
                src={finalImage}
                alt={title}
                fill={true}
                priority={true}
                className="object-cover w-full h-full"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent pointer-events-none" />
        </div>

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start relative">

            {/* Sidebar (TOC) */}
            <aside className="hidden lg:block w-72 shrink-0 sticky top-32 h-fit max-h-[calc(100vh-150px)] overflow-y-auto custom-scrollbar pr-4">
                <TableOfContents />
            </aside>

            {/* Article Body */}
            <article className="flex-1 min-w-0">

                <div className="prose prose-lg md:prose-xl dark:prose-invert max-w-none
                    prose-headings:font-display prose-headings:font-bold prose-headings:tracking-tight prose-headings:scroll-mt-32
                    prose-h2:text-3xl prose-h2:mt-16 prose-h2:mb-6 prose-h2:text-slate-900 dark:prose-h2:text-white
                    prose-h3:text-2xl prose-h3:mt-10 prose-h3:mb-4 prose-h3:text-slate-800 dark:prose-h3:text-slate-100
                    prose-p:text-slate-600 dark:prose-p:text-slate-300 prose-p:leading-relaxed prose-p:mb-8
                    prose-a:text-purple-600 dark:prose-a:text-purple-400 prose-a:no-underline prose-a:font-bold hover:prose-a:underline hover:prose-a:text-purple-500 transition-colors
                    prose-strong:text-slate-900 dark:prose-strong:text-white prose-strong:font-black
                    prose-li:text-slate-600 dark:prose-li:text-slate-300 prose-li:my-2 marker:text-purple-500
                    prose-code:text-purple-600 dark:prose-code:text-purple-300 prose-code:bg-purple-50 dark:prose-code:bg-purple-900/30 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded-md prose-code:font-mono prose-code:text-sm prose-code:font-bold before:content-none after:content-none
                    prose-pre:bg-[#0f172a] prose-pre:border prose-pre:border-white/10 prose-pre:rounded-2xl prose-pre:shadow-xl prose-pre:p-6
                    prose-blockquote:border-l-4 prose-blockquote:border-purple-500 prose-blockquote:pl-6 prose-blockquote:italic prose-blockquote:text-slate-700 dark:prose-blockquote:text-slate-300 prose-blockquote:bg-gray-50 dark:prose-blockquote:bg-white/5 prose-blockquote:py-4 prose-blockquote:pr-4 prose-blockquote:rounded-r-xl
                ">
                    {children}
                </div>

                {/* Footer Section */}
                <div className="mt-24 pt-12 border-t border-gray-200 dark:border-white/10">
                    <AuthorBio />
                </div>
            </article>
        </div>
      </main>
    </div>
  );
};

export default BlogPostLayout;