import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

// Import Mockup Components (Ensure these exist in your project)
import AutoGitMockup from '../components/AutoGitMockup';
import SolNovaMockup from '../components/SolNovaMockup';
import QuackInuMockup from '../components/QuackInuMockup';
import GigaChadMockup from '../components/GigaChadMockup';
import ShopFastMockup from '../components/ShopFastMockup';

// Define project interface for type safety
interface ProjectItem {
  id: string;
  title: string;
  category: string;
  desc: string;
  tech: string[];
  link: string; // Internal Link for Case Study
  liveUrl: string; // External Link
  img?: string; // Fallback Image URL
}

const Projects: React.FC = () => {
  
  // --- PROJECT DATA ---
  const projects: ProjectItem[] = [
    {
      id: 'newsphotocard',
      title: 'News Photo Card',
      category: 'Viral Generator',
      desc: 'A client-side viral marketing tool that allows users to create authentic-looking news cards and social media visuals in seconds. 100% privacy-focused with no server uploads.',
      tech: ['React', 'Canvas API', 'Tailwind'],
      link: '/newsphotocard',
      liveUrl: 'https://tools.cryptowebbuild.com/',
      img: '/projects/project-newsphotocard.jpg'
    },
    {
      id: 'gigasolana',
      title: '$GIGA Solana',
      category: 'Meme & Utility',
      desc: 'A high-energy "Chad" themed meme coin site featuring a custom "Moon Math" calculator to drive investor engagement and viral sharing.',
      tech: ['React', 'Moon Math UI', 'Tailwind'],
      link: '/gigasolana',
      liveUrl: 'https://giga-solana.pages.dev'
    },
    {
      id: 'autogithub',
      title: 'AutoGit Deployer',
      category: 'DevOps SaaS',
      desc: "The world's first Client-Side DevOps Engine. Deploy static sites directly from your browser. No Command Line. No Servers. No Fees.",
      tech: ['React', 'GitHub API', 'Client-Side'],
      link: '/autogithub',
      liveUrl: 'https://autogithub.pages.dev'
    },
    {
      id: 'tokenlaunch',
      title: 'SolNova Protocol',
      category: 'Solana Presale',
      desc: 'High-yield Solana aggregation protocol. Features a real-time presale dashboard, wallet integration, and on-chain data visualization.',
      tech: ['React', 'Solana Web3.js', 'Cloudflare'],
      link: '/tokenlaunch',
      liveUrl: 'https://solnova.pages.dev'
    },
    {
      id: 'memecoinsite',
      title: 'BNB Quack Inu',
      category: 'Viral Meme Coin',
      desc: 'Gamified meme coin experience on BNB Chain. Features a "Spin to Win" mechanic, jungle-themed UI, and custom wood-textured interface elements.',
      tech: ['Gamification', 'CSS Animations', 'Viral UI'],
      link: '/memecoinsite',
      liveUrl: 'https://quackmeme.pages.dev'
    },
    {
      id: 'shopfast',
      title: 'ShopFast E-commerce',
      category: 'Headless Commerce',
      desc: 'Ultra-fast static storefront with sub-second load times. Features a headless architecture, Stripe integration, and client-side cart logic.',
      tech: ['Static Frontend', 'Stripe', 'Client-side Cart'],
      link: '/shopfast',
      liveUrl: 'https://e-commercesagor.pages.dev/'
    }
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "Portfolio Case Studies",
    "url": "https://cryptowebbuild.com/projects",
    "description": "Selected projects and case studies in Web3 and E-commerce development.",
    "mainEntity": {
      "@type": "ItemList",
      "itemListElement": projects.map((p, i) => ({
        "@type": "CreativeWork",
        "position": i + 1,
        "name": p.title,
        "description": p.desc,
        "url": `https://cryptowebbuild.com${p.link}`,
        "image": `https://cryptowebbuild.com/default-project.jpg`
      }))
    }
  };

  return (
    <div className="container mx-auto px-6 pt-32 pb-20 bg-gray-50 dark:bg-[#020617] transition-colors duration-300 min-h-screen">
      
      {/* --- SEO Configuration --- */}
      <SEO 
        title="Web3 Projects & Crypto Website Portfolio | Case Studies"
        description="Explore my web development portfolio: High-performance Solana token launches, viral meme coin sites, and headless e-commerce stores."
        keywords={['Web3 Portfolio', 'Crypto Website Examples', 'E-commerce Case Studies', 'React Projects', 'Meme Coin Design Portfolio']}
        canonical="/projects"
        schema={jsonLd}
      />

      {/* --- Header Section --- */}
      <div className="text-center mb-16 animate-slide-up">
        <div className="inline-block px-4 py-1.5 mb-6 rounded-full bg-white dark:bg-white/5 border border-purple-500/30 text-purple-600 dark:text-purple-400 text-sm font-bold tracking-wider uppercase shadow-sm">
            Selected Works
        </div>
        <h1 className="font-display text-5xl md:text-6xl font-black text-gray-900 dark:text-white mb-6">
          Web3 Projects & <br/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-cyan-600 dark:from-purple-400 dark:to-cyan-400">Case Studies</span>
        </h1>
        <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed font-medium">
          Explore recent work in <Link to="/services" className="text-purple-600 dark:text-purple-400 hover:underline font-bold">Crypto & Web3</Link>, <Link to="/services" className="text-cyan-600 dark:text-cyan-400 hover:underline font-bold">E-commerce</Link>, and Custom Software.
        </p>
      </div>

      {/* --- Projects Grid --- */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, idx) => (
          <article 
            key={project.id} 
            className="group relative h-[500px] rounded-[32px] overflow-hidden shadow-2xl animate-slide-up bg-white dark:bg-slate-900 border border-gray-200 dark:border-white/10"
            style={{ animationDelay: `${idx * 0.1}s` }}
          >
            {/* --- Visual Container (Mockup Component) --- */}
            <div className="absolute inset-0 overflow-hidden bg-gray-100 dark:bg-slate-900">
               {/* Conditional Rendering for Mockups */}
               {project.id === 'autogithub' ? (
                 <AutoGitMockup className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105" />
               ) : project.id === 'tokenlaunch' ? (
                 <SolNovaMockup className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105" />
               ) : project.id === 'memecoinsite' ? (
                 <QuackInuMockup className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105" />
               ) : project.id === 'gigasolana' ? (
                 <GigaChadMockup className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105" />
               ) : project.id === 'shopfast' ? (
                 <ShopFastMockup className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105" />
               ) : (
                 // Fallback Image
                 <img 
                   src={project.img || '/default-project.jpg'} 
                   alt={`Preview of ${project.title}`} 
                   className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110 group-hover:rotate-1"
                   loading="lazy"
                   decoding="async"
                 />
               )}
               
               {/* Gradient Overlay for Readability */}
               <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent opacity-90" />
            </div>
            
            {/* --- Content Container --- */}
            <div className="absolute inset-0 flex flex-col justify-end p-8 z-10">
              
              {/* Category Badge (Slides in on hover) */}
              <div className="absolute top-8 left-8 transform -translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-out pointer-events-none">
                <span className="inline-block px-3 py-1 bg-white/20 backdrop-blur-md border border-white/30 text-white text-xs font-bold rounded-full uppercase tracking-wider shadow-lg">
                  {project.category}
                </span>
              </div>

              {/* Title & Tags */}
              <div className="transform transition-transform duration-500 group-hover:-translate-y-2">
                <h3 className="font-display text-3xl font-bold text-white mb-2 drop-shadow-md">
                  {project.title}
                </h3>
                
                {/* Tech Tags (Hidden on hover to make space) */}
                <div className="flex flex-wrap gap-2 transition-opacity duration-300 group-hover:opacity-0 group-hover:hidden delay-100">
                  {project.tech.map((t, i) => (
                    <span key={i} className="text-[10px] font-bold text-slate-300 bg-white/10 border border-white/20 px-2 py-1 rounded-full uppercase tracking-wide">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Reveal Content (Description & Buttons) */}
              <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-all duration-500 ease-in-out">
                <div className="overflow-hidden">
                  <div className="pt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100">
                    <p className="text-slate-300 text-sm mb-6 leading-relaxed border-l-2 border-purple-500 pl-4 font-medium">
                      {project.desc}
                    </p>
                    
                    <div className="flex flex-col sm:flex-row gap-3">
                      <a 
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 inline-flex items-center justify-center py-3 px-4 bg-white text-slate-900 font-bold rounded-xl hover:bg-cyan-50 transition-colors shadow-lg text-sm group/btn"
                      >
                          Live Demo
                          <svg className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                      </a>
                      
                      {/* Check if Case Study exists (internal link) */}
                      {project.link !== '/projects' ? (
                        <Link 
                          to={project.link}
                          className="flex-1 inline-flex items-center justify-center py-3 px-4 bg-white/10 backdrop-blur-md text-white border border-white/20 font-bold rounded-xl hover:bg-white/20 transition-colors text-sm"
                        >
                          Case Study
                        </Link>
                      ) : (
                        <span className="flex-1 inline-flex items-center justify-center py-3 px-4 bg-white/5 backdrop-blur-sm text-slate-400 border border-white/10 font-bold rounded-xl text-sm cursor-default">
                          Details Soon
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </article>
        ))}
      </div>

      {/* --- CTA Section --- */}
      <div className="mt-24 text-center animate-slide-up" style={{ animationDelay: '0.4s' }}>
        <div className="inline-block p-8 md:p-12 rounded-[32px] bg-white dark:bg-[#1e293b] border border-gray-200 dark:border-white/10 shadow-xl max-w-2xl mx-auto">
          <h3 className="font-display text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-2">Ready to start your own project?</h3>
          <p className="text-gray-600 dark:text-gray-400 mb-8 font-medium">I'm currently accepting new contracts for Q4 2025.</p>
          <Link to="/contact" className="inline-flex items-center justify-center px-10 py-4 text-base font-bold text-white transition-all duration-200 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-xl hover:scale-105 shadow-lg shadow-purple-500/30">
            Get a Quote
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Projects;