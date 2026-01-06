import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../../components/SEO';

const NewsPhotoCard: React.FC = () => {
  const image = "/projects/project-newsphotocard.jpg"; // Local path
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Case Study: News Photo Card - Viral Social Media Content Generator",
    "image": "https://cryptowebbuild.com" + image,
    "author": {
      "@type": "Organization",
      "name": "CryptoWebBuild"
    },
    "description": "How we built a client-side viral news card generator using React and Canvas API. Features authentic templates, custom image upload, and instant download.",
    "keywords": "Viral News Generator, React Canvas App, Social Media Tool, Fake News Card Maker, Meme Generator Development"
  };

  return (
    <div className="container mx-auto px-6 pt-32 pb-20">
      <SEO
        title="Viral News Card Generator Development | Case Study"
        description="Case study on building a high-performance, client-side social media graphic generator using React and HTML5 Canvas. Zero server costs, 100% viral potential."
        keywords={['News Card Generator', 'React Canvas Application', 'Viral Marketing Tool', 'Social Media Graphics Tool', 'Frontend Development Case Study']}
        image={image}
        type="article"
        publishedTime="2025-12-28"
        schema={jsonLd}
      />

      <div className="max-w-4xl mx-auto animate-slide-up">
        <nav className="flex items-center gap-2 text-sm text-gray-500 mb-8">
            <Link to="/" className="hover:text-purple-600 transition-colors">Home</Link>
            <span>/</span>
            <Link to="/projects" className="hover:text-purple-600 transition-colors">Projects</Link>
            <span>/</span>
            <span className="text-gray-900 dark:text-gray-300 font-medium">NewsCard</span>
        </nav>

        <div className="inline-block px-3 py-1 mb-6 rounded-full bg-red-100 dark:bg-red-900/30 border border-red-200 dark:border-red-800 text-red-600 dark:text-red-300 text-xs font-bold uppercase tracking-wider shadow-sm">
          Case Study
        </div>
        <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-8 leading-tight">
          News Photo Card — <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-orange-500">Viral Generator</span>
        </h1>

        <div className="rounded-3xl overflow-hidden shadow-2xl border border-slate-200 dark:border-slate-800 mb-12 relative group">
            {/* Display the screenshot */}
            <img
              src={image}
              alt="News Photo Card Generator Interface"
              className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-16">
          <div className="glass-panel p-6 rounded-2xl bg-white dark:bg-slate-900 border border-gray-200 dark:border-white/10">
            <h3 className="text-gray-500 dark:text-gray-400 text-xs font-bold uppercase tracking-widest mb-2">Stack</h3>
            <p className="text-gray-900 dark:text-white font-bold text-lg">React, Canvas API</p>
          </div>
          <div className="glass-panel p-6 rounded-2xl bg-white dark:bg-slate-900 border border-gray-200 dark:border-white/10">
            <h3 className="text-gray-500 dark:text-gray-400 text-xs font-bold uppercase tracking-widest mb-2">Type</h3>
            <p className="text-gray-900 dark:text-white font-bold text-lg">Viral Marketing Tool</p>
          </div>
          <div className="glass-panel p-6 rounded-2xl bg-white dark:bg-slate-900 border border-gray-200 dark:border-white/10">
            <h3 className="text-gray-500 dark:text-gray-400 text-xs font-bold uppercase tracking-widest mb-2">Result</h3>
            <p className="text-green-500 font-bold text-lg">10k+ Daily Users</p>
          </div>
        </div>

        <div className="prose prose-lg prose-slate dark:prose-invert max-w-none">
          <h2>The Goal: Democratizing Viral Content</h2>
          <p>
            In the age of social media, "News Cards" (images with a headline, photo, and logo) are the most shared format on platforms like Facebook and Twitter. However, creating them usually requires Photoshop or complex design tools.
          </p>
          <p>
            The goal of <strong>News Photo Card</strong> was to build a zero-friction tool that allows anyone to generate professional-quality news cards in under 30 seconds, directly from their browser, without installing any app.
          </p>

          <h2>The Solution: Client-Side Canvas Engine</h2>
          <p>
            We engineered the entire application using <strong>React</strong> and the HTML5 <strong>Canvas API</strong>. This architecture offers significant advantages:
          </p>
          <ul>
            <li><strong>Privacy First:</strong> All image processing happens locally on the user's device. No images are uploaded to a server, ensuring user privacy and reducing server costs to zero.</li>
            <li><strong>Real-Time Preview:</strong> As users type headlines or adjust image positioning, the canvas updates instantly (60fps), providing immediate feedback.</li>
            <li><strong>Cross-Platform:</strong> The tool is fully responsive, offering a desktop-class editing experience on mobile devices.</li>
          </ul>

          <h3>Key Technical Features</h3>
          <div className="grid md:grid-cols-2 gap-6 my-8 not-prose">
            <div className="p-6 bg-gray-50 dark:bg-white/5 rounded-xl border border-gray-200 dark:border-white/10">
                <h4 className="font-bold text-gray-900 dark:text-white mb-2">Dynamic Text Rendering</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                    Custom algorithms to handle text wrapping, font resizing, and Bangla language support (complex scripts) perfectly on the canvas.
                </p>
            </div>
            <div className="p-6 bg-gray-50 dark:bg-white/5 rounded-xl border border-gray-200 dark:border-white/10">
                <h4 className="font-bold text-gray-900 dark:text-white mb-2">Smart Image Manipulation</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                    Touch-friendly controls for zooming, panning, and rotating images within the template frame.
                </p>
            </div>
          </div>

          <h2>The Outcome</h2>
          <p>
            The tool quickly went viral among content creators and journalists. Because it's a Progressive Web App (PWA), users can "install" it on their phones for offline access. The project demonstrates how powerful client-side web technologies can replace native mobile apps.
          </p>
        </div>

        <div className="mt-16 flex flex-col sm:flex-row gap-4 justify-center pt-10 border-t border-gray-200 dark:border-white/10">
          <a href="https://newsphotocard.pages.dev/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center px-8 py-3 bg-red-600 text-white font-bold rounded-xl transition-transform hover:scale-105 shadow-lg shadow-red-500/30">
            Launch Generator
            <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
          </a>
          <Link to="/contact" className="inline-flex items-center justify-center px-8 py-3 bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 text-gray-900 dark:text-white font-bold rounded-xl hover:bg-gray-50 dark:hover:bg-white/10 transition-colors">
            Order a Custom Tool
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NewsPhotoCard;
