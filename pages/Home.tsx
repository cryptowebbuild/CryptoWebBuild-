import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

const Home: React.FC = () => {
  const [text, setText] = useState('');
  const phrases = [
    'High-Converting Business Sites.',
    'Viral Meme Coin Portals.',
    'Secure E-commerce Stores.',
    'Personal Portfolio Brands.'
  ];

  useEffect(() => {
    let phraseIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let timer: any;

    const type = () => {
      const current = phrases[phraseIndex % phrases.length];
      if (!isDeleting) {
        setText(current.slice(0, charIndex + 1));
        charIndex++;
        if (charIndex === current.length) {
          isDeleting = true;
          timer = setTimeout(type, 2000);
        } else {
          timer = setTimeout(type, 80);
        }
      } else {
        setText(current.slice(0, charIndex - 1));
        charIndex--;
        if (charIndex === 0) {
          isDeleting = false;
          phraseIndex++;
          timer = setTimeout(type, 300);
        } else {
          timer = setTimeout(type, 50);
        }
      }
    };
    timer = setTimeout(type, 500);
    return () => clearTimeout(timer);
  }, []);

  // Updated Schema to tell Google you do EVERYTHING
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "CryptoWebBuild - Sagor Ahamed",
    "url": "https://cryptowebbuild.com",
    "logo": "https://cryptowebbuild.com/icons/favicon.svg",
    "founder": {
      "@type": "Person",
      "name": "Sagor Ahamed"
    },
    "description": "Premium website development agency. We build Crypto/Web3 sites, E-commerce stores, Business portfolios, Blogs, and Landing Pages.",
    "priceRange": "$$-$$$",
    "knowsAbout": [
      "Web3 Development", 
      "Business Website Design", 
      "E-commerce", 
      "Blog Development", 
      "SEO Optimization", 
      "React", 
      "Solana"
    ],
    "sameAs": [
      "https://x.com/WebBuildDev",
      "https://t.me/CryptoWebBuild",
      "https://github.com/cryptowebbuild",
      "https://www.youtube.com/@cryptowebbuild"
    ]
  };

  return (
    <div className="space-y-24 md:space-y-48 pb-32">
      <SEO 
        title="Web3, Business & E-commerce Website Developer | Sagor Ahamed"
        description="Hire a top-rated developer for Crypto, Business, Portfolio, and E-commerce websites. Fast, secure, and SEO-optimized web development."
        schema={organizationSchema}
        keywords={['Business Website Developer', 'Portfolio Designer', 'Crypto Developer', 'E-commerce Builder', 'Blog Developer']}
      />
      
      <section className="relative pt-20 pb-24 px-6 min-h-[90vh] flex flex-col items-center justify-center text-center overflow-hidden">
        {/* Stellar Glows */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] md:w-[800px] h-[300px] md:h-[800px] bg-purple-600/10 blur-[150px] rounded-full pointer-events-none animate-pulse" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200px] md:w-[600px] h-[200px] md:h-[600px] bg-cyan-400/5 blur-[120px] rounded-full pointer-events-none animate-pulse delay-1000" />
        
        <div className="relative z-10 max-w-6xl mx-auto flex flex-col items-center">
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full glass-panel mb-12 animate-float">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
            </span>
            <span className="text-[10px] font-bold text-cyan-400 uppercase tracking-[0.2em]">Available for New Projects</span>
          </div>

          {/* H1 Optimized for SEO: Includes "Web3", "Business", "E-commerce" indirectly via layout */}
          <h1 className="font-display text-5xl sm:text-7xl md:text-8xl font-bold tracking-tighter mb-8 leading-[0.95] animate-slide-up">
            Architecting <br/>
            <span className="text-gradient">Modern Digital Assets</span>
          </h1>

          <div className="h-16 mb-12 animate-slide-up flex flex-col md:flex-row md:items-center justify-center gap-3 opacity-90" style={{ animationDelay: '0.2s' }}>
            <span className="text-xl md:text-3xl text-slate-400 font-medium">Building</span>
            <span className="text-xl md:text-3xl text-white font-bold relative inline-block">
              {text}
              <span className="animate-pulse text-cyan-400 ml-1">_</span>
            </span>
          </div>

          <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-12 animate-slide-up leading-relaxed" style={{ animationDelay: '0.4s' }}>
            Transforming ideas into high-performance websites. From <strong>Corporate Businesses</strong> and <strong>Portfolios</strong> to <strong>Crypto Launchpads</strong> and <strong>Online Stores</strong>.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center w-full sm:w-auto animate-slide-up" style={{ animationDelay: '0.6s' }}>
            <Link 
              to="/contact" 
              className="px-10 py-4 bg-white text-black font-bold text-sm rounded-full hover:scale-105 transition-all shadow-[0_0_30px_rgba(255,255,255,0.2)] uppercase tracking-widest"
            >
              Start Project
            </Link>
            <Link 
              to="/projects" 
              className="px-10 py-4 glass-panel text-white font-bold text-sm rounded-full hover:bg-white/10 transition-all uppercase tracking-widest"
            >
              View Portfolio
            </Link>
          </div>
        </div>
      </section>

      {/* Services Grid - Explicitly Listing Categories for SEO */}
      <section className="container mx-auto px-6">
        <h2 className="sr-only">Web Development Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { title: 'Crypto & Web3', desc: 'Secure token launch sites and DApps.', color: 'purple' },
            { title: 'Business Sites', desc: 'Professional corporate portfolios & blogs.', color: 'blue' },
            { title: 'E-commerce', desc: 'High-speed online stores (Shopify/Custom).', color: 'cyan' },
            { title: 'Landing Pages', desc: 'High-conversion marketing funnels.', color: 'pink' }
          ].map((s, i) => (
            <div key={i} className="glass-panel p-8 rounded-[40px] hover:translate-y-[-10px] transition-all group overflow-hidden relative">
              <div className={`absolute top-0 right-0 w-24 h-24 bg-${s.color}-500/10 blur-[40px] rounded-full group-hover:bg-${s.color}-500/20 transition-all`} />
              <h3 className="font-display text-2xl font-bold mb-4 text-white">{s.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{s.desc}</p>
              <div className="mt-8 flex items-center text-xs font-bold text-cyan-400 uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
                Explore →
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;