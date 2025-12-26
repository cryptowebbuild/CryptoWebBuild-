import React, { useMemo } from 'react';
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
  image?: string; // Optional now, as we auto-generate it
  category: string;
  readTime?: string; // Optional, we calculate it
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
  if (typeof node === "object" && "props" in node && (node as any).props.children) {
    return extractTextFromNode((node as any).props.children);
  }
  return "";
};

// --- HELPER: Smart Image Mapper ---
const getContextualImage = (title: string, category: string, providedImage?: string) => {
  // If a specific image is provided via props (and isn't the default placeholder), use it.
  // Otherwise, generate one based on keywords.
  if (providedImage && !providedImage.includes('hero-avatar')) return providedImage;

  const t = title.toLowerCase();
  const c = category.toLowerCase();

  if (t.includes('solana') || t.includes('meme') || c.includes('web3')) {
    return "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&w=1200&q=80"; // Crypto/Blockchain
  }
  if (t.includes('marketing') || t.includes('growth') || t.includes('seo')) {
    return "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80"; // Analytics/Growth
  }
  if (t.includes('shop') || t.includes('commerce') || c.includes('business')) {
    return "https://images.unsplash.com/photo-1556742049-0cfed4f7a07d?auto=format&fit=crop&w=1200&q=80"; // E-commerce
  }
  // Default for Dev/Coding/Security
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
    const minutes = Math.ceil(words / 200); // Average reading speed
    return `${minutes} min read`; // Returns "5 min read"
  }, [children]);

  // 2. Get Auto Contextual Image
  const finalImage = useMemo(() => 
    getContextualImage(title, category, image), 
  [title, category, image]);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-[#020617] transition-colors duration-300">
      <SEO
        title={title}
        description={description}
        keywords={keywords}
        canonical={canonical}
        type="article"
        publishedTime={publishedTime}
        image={finalImage} // Injecting the smart image into Meta Tags
        author="Sagor Ahamed"
      />

      {/* --- Progress Bar (Optional Placeholder) --- */}
      <div className="fixed top-0 left-0 w-full h-1 z-50 bg-transparent" />

      {/* --- Hero Section (Glassmorphism) --- */}
      <header className="relative pt-32 pb-16 md:pt-48 md:pb-32 px-6 overflow-hidden">
        {/* Background Gradients */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none">
            <div className="absolute top-[20%] left-[10%] w-[500px] h-[500px] bg-purple-500/20 blur-[120px] rounded-full mix-blend-multiply dark:mix-blend-screen animate-blob" />
            <div className="absolute top-[20%] right-[10%] w-[400px] h-[400px] bg-cyan-500/20 blur-[100px] rounded-full mix-blend-multiply dark:mix-blend-screen animate-blob animation-delay-2000" />
        </div>

        <div className="container mx-auto max-w-4xl relative z-10 text-center">
            {/* Back to Library Button */}
            <div className="mb-8 flex justify-center">
                <Link to="/blog" className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 dark:bg-white/10 border border-gray-200 dark:border-white/10 backdrop-blur-md text-sm font-bold text-gray-700 dark:text-gray-200 hover:bg-white hover:text-purple-600 dark:hover:bg-white/20 dark:hover:text-purple-400 transition-all shadow-sm hover:shadow-md group">
                    <svg className="w-4 h-4 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path></svg>
                    Back to Library
                </Link>
            </div>

            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/50 dark:bg-white/5 border border-purple-500/20 backdrop-blur-md mb-8 shadow-sm">
                <span className="w-2 h-2 rounded-full bg-purple-500 animate-pulse"></span>
                <span className="text-sm font-bold text-purple-700 dark:text-purple-300 uppercase tracking-widest">{category}</span>
            </div>

            <h1 className="font-display text-4xl md:text-5xl lg:text-7xl font-black text-slate-900 dark:text-slate-50 mb-8 leading-[1.1] tracking-tight text-balance">
                {title}
            </h1>

            <div className="flex flex-wrap items-center justify-center gap-6 text-gray-600 dark:text-gray-400 font-medium text-sm md:text-base">
                <div className="flex items-center gap-2">
                    <img src="/hero-avatar.webp" alt="Sagor Ahamed" className="w-8 h-8 rounded-full border border-white/20" />
                    <span className="text-slate-900 dark:text-slate-50 font-bold">Sagor Ahamed</span>
                </div>
                <span>•</span>
                <span>{publishedTime}</span>
                <span>•</span>
                <span className="flex items-center gap-1 text-purple-600 dark:text-purple-400 font-bold bg-purple-50 dark:bg-purple-900/20 px-3 py-1 rounded-full">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                    {calculatedReadTime}
                </span>
            </div>
        </div>
      </header>

      {/* --- Main Content Layout --- */}
      <main className="container mx-auto px-6 pb-24 max-w-7xl">

        {/* Featured Image (Auto-Contextual) */}
        <div className="max-w-5xl mx-auto mb-16 rounded-[40px] overflow-hidden shadow-2xl shadow-purple-900/20 border-4 border-white dark:border-white/5 relative aspect-video bg-gray-200 dark:bg-gray-800">
            <OptimizedImage
                src={finalImage}
                alt={title}
                fill={true}
                priority={true} // Google LCP Boost
                className="object-cover w-full h-full transform hover:scale-105 transition-transform duration-700"
            />
        </div>

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 items-start relative">

            {/* Sidebar (Fixed Sticky Logic) */}
            <aside className="hidden lg:block w-72 shrink-0 sticky top-32 h-fit max-h-[calc(100vh-100px)] overflow-y-auto custom-scrollbar">
                <TableOfContents />
            </aside>

            {/* Article Body */}
            <article className="flex-1 min-w-0">

                {/* Content Typography Engine */}
                <div className="prose prose-lg md:prose-xl dark:prose-invert max-w-none
                    prose-headings:font-display prose-headings:font-bold prose-headings:tracking-tight
                    prose-h2:text-3xl prose-h2:mt-16 prose-h2:mb-6 prose-h2:text-slate-900 dark:prose-h2:text-slate-50
                    prose-h3:text-2xl prose-h3:mt-12 prose-h3:mb-4 prose-h3:text-slate-800 dark:prose-h3:text-slate-100
                    prose-p:text-slate-700 dark:prose-p:text-slate-300 prose-p:leading-relaxed prose-p:mb-8
                    prose-a:text-purple-600 dark:prose-a:text-purple-400 prose-a:no-underline prose-a:font-bold hover:prose-a:underline
                    prose-strong:text-slate-900 dark:prose-strong:text-slate-50 prose-strong:font-black
                    prose-li:text-slate-700 dark:prose-li:text-slate-300 prose-li:my-2
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