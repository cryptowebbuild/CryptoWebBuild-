import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import OptimizedImage from '../components/OptimizedImage';

const Home: React.FC = () => {
  const [text, setText] = useState('');

  const phrases = [
    'Viral Meme Coin Sites.',
    'Secure Token Presales.',
    'Fast E-commerce Stores.',
    'SEO-Ready Brand Sites.'
  ];
  
  const testimonials = [
    {
      name: "Alex R.",
      role: "Founder",
      company: "Solana Token Launch",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
      quote: "Sagor delivered our presale page in 2 days. The load speed was instant and we hit our hard cap in 12 hours. Best dev we've hired."
    },
    {
      name: "Sarah J.",
      role: "CEO",
      company: "ModernShop E-com",
      image: "https://randomuser.me/api/portraits/women/44.jpg",
      quote: "The static site architecture changed everything. Our bounce rate dropped by 40% immediately. Highly recommended for performance."
    },
    {
      name: "Mike T.",
      role: "Lead Dev",
      company: "DeFi Dashboard Protocol",
      image: "https://randomuser.me/api/portraits/men/86.jpg",
      quote: "Clean code, great communication, and he actually understands Web3 context. The wallet integration was flawless."
    }
  ];
  
  useEffect(() => {
    let phraseIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let timer: ReturnType<typeof setTimeout>;

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

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "CryptoWebBuild",
    "image": "https://cryptowebbuild.com/hero-avatar.webp", // Ensure a fallback image exists in public folder
    "url": "https://cryptowebbuild.com",
    "telephone": "",
    "priceRange": "$$-$$$",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "Remote"
    },
    "description": "Expert Web3 and Crypto Website Developer. Specializing in high-performance React websites for Token Launches, Meme Coins, and E-commerce.",
    "founder": {
      "@type": "Person",
      "name": "Sagor Ahamed"
    },
    "knowsAbout": [
        "Web3 Development",
        "React.js",
        "Solana Web3",
        "Search Engine Optimization (SEO)",
        "E-commerce Development"
    ],
    "sameAs": [
      "https://x.com/WebBuildDev",
      "https://t.me/CryptoWebBuild",
      "https://github.com/cryptowebbuild"
    ]
  };

  return (
    <div className="space-y-24 md:space-y-48 pb-32 overflow-hidden">
      <SEO 
        title="Web3 & Crypto Website Developer | Sagor Ahamed"
        description="Hire a top-rated Web3 developer for fast, secure Crypto, Meme Coin, and Token Launch websites. Expert in React, Solana, and SEO-first architecture."
        keywords={['Web3 Developer', 'Crypto Website Designer', 'Hire React Developer', 'Solana Web Developer', 'Meme Coin Website Builder', 'CryptoWebBuild']}
        canonical="/"
        schema={jsonLd}
      />
      
      {/* --- Hero Section --- */}
      <section className="relative pt-20 pb-24 md:pt-32 md:pb-32 px-6 min-h-[90vh] flex flex-col items-center justify-center text-center">
        
        {/* Glow Effects - GPU Accelerated */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] md:w-[700px] h-[300px] md:h-[700px] bg-purple-500/20 dark:bg-purple-500/20 blur-[100px] rounded-full pointer-events-none transition-colors duration-500 gpu-accelerated mix-blend-multiply dark:mix-blend-screen will-change-transform" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[250px] md:w-[500px] h-[250px] md:h-[500px] bg-cyan-500/20 dark:bg-cyan-500/20 blur-[90px] rounded-full animate-pulse-slow pointer-events-none transition-colors duration-500 gpu-accelerated mix-blend-multiply dark:mix-blend-screen will-change-transform" />

        <div className="relative z-10 max-w-6xl mx-auto flex flex-col items-center">
          
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-surface/50 backdrop-blur-sm border border-border-glass shadow-sm mb-8 md:mb-10 animate-float hover:border-purple-500/50 transition-colors gpu-accelerated">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
            </span>
            <span className="text-xs md:text-sm font-bold text-text-muted uppercase tracking-wide">Available for New Projects</span>
          </div>

          {/* H1 Optimized for LCP */}
          <h1 className="font-display text-5xl sm:text-6xl md:text-8xl font-bold tracking-tight mb-8 leading-[1.1] animate-slide-up text-text-main text-balance">
            High-Performance <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-cyan-600 to-purple-600 dark:from-purple-400 dark:via-cyan-400 dark:to-purple-400 bg-[length:200%_auto] animate-shimmer">
              Web3 & Crypto Developer
            </span>
          </h1>

          {/* Typing Container - Fixed min-height to prevent layout shift (CLS) */}
          <div className="min-h-[4rem] sm:min-h-[3rem] md:min-h-[4.5rem] mb-10 md:mb-12 animate-slide-up flex flex-col md:flex-row md:items-center justify-center gap-2" style={{ animationDelay: '0.2s' }}>
            <span className="text-2xl sm:text-3xl md:text-5xl text-text-muted font-medium">I build</span>
            <span className="text-2xl sm:text-3xl md:text-5xl text-text-main font-bold relative inline-block break-words min-w-[280px] text-left">
              {text}
              <span className="animate-pulse text-cyan-500 ml-1">|</span>
            </span>
          </div>

          <p className="text-lg md:text-2xl text-text-muted max-w-3xl mx-auto mb-12 leading-relaxed animate-slide-up font-medium text-balance" style={{ animationDelay: '0.4s' }}>
            Turn traffic into holders. I architect secure, SEO-first websites tailored for <strong>token launches</strong>, <strong>meme coins</strong>, and <strong>high-conversion e-commerce</strong>.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center items-center w-full sm:w-auto animate-slide-up" style={{ animationDelay: '0.6s' }}>
            <Link 
              to="/contact" 
              className="relative px-8 py-4 md:px-10 md:py-5 bg-text-main text-white dark:bg-white dark:text-black font-bold text-lg md:text-xl rounded-2xl overflow-hidden transition-all active:scale-95 hover:scale-105 shadow-xl shadow-purple-500/10 w-full sm:w-auto flex items-center justify-center"
            >
              <span className="relative z-10">Get a Quote</span>
            </Link>
            
            <Link 
              to="/services" 
              className="px-8 py-4 md:px-10 md:py-5 text-text-main font-bold text-lg md:text-xl rounded-2xl border border-border-glass bg-surface/50 hover:bg-surface-highlight hover:border-purple-500/30 transition-all active:scale-95 shadow-sm w-full sm:w-auto text-center"
            >
              View Services
            </Link>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce-slow text-text-muted opacity-60 hidden md:block">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path></svg>
        </div>
      </section>

      {/* --- Services Preview --- */}
      <section className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 md:mb-20 gap-6">
          <div className="max-w-2xl">
            <h2 className="font-display text-4xl md:text-6xl font-bold text-text-main mb-4 md:mb-6">
              Services I Provide
            </h2>
            <p className="text-text-muted text-lg md:text-xl leading-relaxed">
              Full-stack and static-first websites tailored for performance and growth.
            </p>
          </div>
          <Link to="/services" className="text-cyan-600 dark:text-cyan-400 font-bold text-lg hover:text-cyan-500 transition-colors flex items-center gap-2 group border-b-2 border-transparent hover:border-cyan-500 pb-1">
            All Services <span className="group-hover:translate-x-1 transition-transform">→</span>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          
          {/* Service 1 - Crypto */}
          <div className="glass-panel p-8 rounded-[32px] hover:border-purple-500/50 transition-all duration-300 active:scale-[0.98] group relative overflow-hidden bg-surface shadow-sm hover:shadow-xl hover:shadow-purple-500/10">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative z-10">
              <div className="w-16 h-16 md:w-20 md:h-20 mb-6 md:mb-8 rounded-2xl bg-surface-highlight border border-purple-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-500 shadow-sm group-hover:shadow-md">
                 <svg className="w-8 h-8 md:w-10 md:h-10 text-purple-600 dark:text-purple-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M6 3L2 9L12 21L22 9L18 3H6Z" />
                    <path d="M11 3L8 9L12 21L16 9L13 3" />
                 </svg>
              </div>
              <h3 className="font-display text-2xl font-bold text-text-main mb-3 md:mb-4">Crypto & Web3</h3>
              <p className="text-text-muted text-base md:text-lg leading-relaxed">
                Token landing pages, tokenomics, presale flows, contract links and on-page SEO tailored for token launches.
              </p>
            </div>
          </div>

          {/* Service 2 - E-commerce */}
          <div className="glass-panel p-8 rounded-[32px] hover:border-cyan-500/50 transition-all duration-300 active:scale-[0.98] group relative overflow-hidden bg-surface shadow-sm hover:shadow-xl hover:shadow-cyan-500/10">
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative z-10">
              <div className="w-16 h-16 md:w-20 md:h-20 mb-6 md:mb-8 rounded-2xl bg-surface-highlight border border-cyan-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-500 shadow-sm group-hover:shadow-md">
                 <svg className="w-8 h-8 md:w-10 md:h-10 text-cyan-600 dark:text-cyan-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="9" cy="21" r="1" />
                    <circle cx="20" cy="21" r="1" />
                    <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
                 </svg>
              </div>
              <h3 className="font-display text-2xl font-bold text-text-main mb-3 md:mb-4">E-Commerce</h3>
              <p className="text-text-muted text-base md:text-lg leading-relaxed">
                Product pages, JavaScript carts and secure payment gateways — optimized for speed, UX and SEO.
              </p>
            </div>
          </div>

           {/* Service 3 - Business */}
          <div className="glass-panel p-8 rounded-[32px] hover:border-blue-500/50 transition-all duration-300 active:scale-[0.98] group relative overflow-hidden bg-surface shadow-sm hover:shadow-xl hover:shadow-blue-500/10">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative z-10">
               <div className="w-16 h-16 md:w-20 md:h-20 mb-6 md:mb-8 rounded-2xl bg-surface-highlight border border-blue-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-500 shadow-sm group-hover:shadow-md">
                 <svg className="w-8 h-8 md:w-10 md:h-10 text-blue-600 dark:text-blue-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M3 21h18" />
                    <path d="M5 21V7" />
                    <path d="M9 21V11" />
                    <path d="M13 21V3" />
                    <path d="M17 21v6" />
                 </svg>
              </div>
              <h3 className="font-display text-2xl font-bold text-text-main mb-3 md:mb-4">Business Sites</h3>
              <p className="text-text-muted text-base md:text-lg leading-relaxed">
                Responsive websites for local businesses and startups with SEO-focused content and clear CTAs.
              </p>
            </div>
          </div>

           {/* Service 4 - Blogs */}
          <div className="glass-panel p-8 rounded-[32px] hover:border-pink-500/50 transition-all duration-300 active:scale-[0.98] group relative overflow-hidden bg-surface shadow-sm hover:shadow-xl hover:shadow-pink-500/10">
            <div className="absolute inset-0 bg-gradient-to-br from-pink-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative z-10">
               <div className="w-16 h-16 md:w-20 md:h-20 mb-6 md:mb-8 rounded-2xl bg-surface-highlight border border-pink-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-500 shadow-sm group-hover:shadow-md">
                 <svg className="w-8 h-8 md:w-10 md:h-10 text-pink-600 dark:text-pink-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 19l7-7 3 3-7 7-3-3z" />
                    <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" />
                    <path d="M2 2l7.586 7.586" />
                    <circle cx="11" cy="11" r="2" />
                 </svg>
              </div>
              <h3 className="font-display text-2xl font-bold text-text-main mb-3 md:mb-4">Blogs & Portfolios</h3>
              <p className="text-text-muted text-base md:text-lg leading-relaxed">
                Fast static blogs and portfolios for personal branding, case studies and organic traffic growth.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* --- Technical Philosophy --- */}
      <section className="container mx-auto px-6">
        <div className="glass-panel p-8 md:p-12 rounded-[32px] bg-surface border-t border-purple-500/20 shadow-xl">
            <div className="flex flex-col md:flex-row gap-12 items-center">
                <div className="flex-1 space-y-6">
                    <h2 className="font-display text-3xl md:text-4xl font-bold text-text-main">
                        The Technical Edge: Why My Sites <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">Rank & Convert</span>
                    </h2>
                    <div className="prose prose-lg text-text-muted">
                        <p>
                            In the competitive Web3 and E-commerce landscape, standard templates don't cut it. I build using a <strong>Static-First Architecture</strong>. This means your site isn't generated on the fly every time a user visits—it's pre-built and served from the edge (CDN).
                        </p>
                        <p>
                            <strong>Why this matters for your project:</strong>
                        </p>
                        <ul className="list-disc pl-5 space-y-2">
                            <li><strong>SEO Dominance:</strong> Google Core Web Vitals score near 100/100. This is a direct ranking factor for organic search traffic.</li>
                            <li><strong>Security:</strong> With no database to hack, your landing page is virtually impervious to SQL injection and common CMS vulnerabilities.</li>
                            <li><strong>Global Speed:</strong> Assets are distributed globally via Cloudflare, ensuring your Token Presale loads instantly in Asia, Europe, and the US simultaneously.</li>
                        </ul>
                    </div>
                </div>
                <div className="flex-1 w-full">
                    <div className="grid grid-cols-2 gap-4">
                        <div className="p-4 bg-surface-highlight rounded-xl border border-border-glass text-center">
                            <div className="text-3xl font-bold text-green-500 mb-1">100</div>
                            <div className="text-xs font-bold uppercase tracking-widest text-text-muted">Performance</div>
                        </div>
                        <div className="p-4 bg-surface-highlight rounded-xl border border-border-glass text-center">
                            <div className="text-3xl font-bold text-blue-500 mb-1">0.8s</div>
                            <div className="text-xs font-bold uppercase tracking-widest text-text-muted">LCP (Load Time)</div>
                        </div>
                        <div className="p-4 bg-surface-highlight rounded-xl border border-border-glass text-center">
                            <div className="text-3xl font-bold text-purple-500 mb-1">A+</div>
                            <div className="text-xs font-bold uppercase tracking-widest text-text-muted">Security Score</div>
                        </div>
                        <div className="p-4 bg-surface-highlight rounded-xl border border-border-glass text-center">
                            <div className="text-3xl font-bold text-cyan-500 mb-1">100%</div>
                            <div className="text-xs font-bold uppercase tracking-widest text-text-muted">Uptime</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </section>

      {/* --- Why Choose Me --- */}
      <section className="container mx-auto px-6">
        <div className="bg-surface/50 border border-border-glass rounded-[32px] md:rounded-[48px] p-8 md:p-24 relative overflow-hidden shadow-2xl shadow-purple-500/5">
          <div className="absolute top-0 right-0 w-[300px] md:w-[800px] h-[300px] md:h-[800px] bg-purple-600/10 blur-[100px] md:blur-[150px] rounded-full pointer-events-none" />
          
          <div className="relative z-10 text-center max-w-4xl mx-auto mb-12 md:mb-20">
            <h2 className="font-display text-4xl md:text-6xl font-bold text-text-main mb-6 md:mb-8">
              Why Choose Me
            </h2>
            <p className="text-text-muted text-lg md:text-2xl font-light">
              I deliver high-performance digital assets that drive growth.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 relative z-10">
            {[
              { title: 'Global Performance', desc: 'Speed-first static/CDN architecture for global availability.' },
              { title: 'SEO Optimized', desc: 'SEO-first templates, JSON-LD, and sitemaps for Google & AI.' },
              { title: 'Measurable Growth', desc: 'Conversion-focused CTAs and analytics for real results.' }
            ].map((item, i) => (
              <div key={i} className="text-center group p-6 md:p-8 rounded-3xl hover:bg-surface-highlight/50 hover:shadow-xl transition-all border border-transparent hover:border-border-glass active:scale-[0.99]">
                 <div className="w-16 h-16 mx-auto bg-surface rounded-full flex items-center justify-center text-text-main font-display font-bold text-2xl mb-6 border border-border-glass group-hover:border-cyan-400 group-hover:text-cyan-400 transition-all shadow-md group-hover:scale-110">
                  {i + 1}
                </div>
                <h3 className="text-2xl font-bold text-text-main mb-4">{item.title}</h3>
                <p className="text-text-muted text-lg leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- Testimonials Section --- */}
      <section className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-20">
          <h2 className="font-display text-4xl md:text-6xl font-bold text-text-main mb-6">
            Trusted by Builders
          </h2>
          <p className="text-text-muted text-xl">
            Here's what founders and teams say about working with me.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((t, i) => (
            <div key={i} className="glass-panel p-8 md:p-10 rounded-[32px] bg-surface/50 hover:border-purple-500/50 transition-all duration-300 relative shadow-sm hover:shadow-lg active:scale-[0.98]">
              {/* Quote Icon */}
              <div className="text-purple-500 mb-6 md:mb-8 opacity-50">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H15.017C14.4647 8 14.017 8.44772 14.017 9V11C14.017 11.5523 13.5693 12 13.017 12H12.017V5H22.017V15C22.017 18.3137 19.3307 21 16.017 21H14.017ZM5.0166 21L5.0166 18C5.0166 16.8954 5.91203 16 7.0166 16H10.0166C10.5689 16 11.0166 15.5523 11.0166 15V9C11.0166 8.44772 10.5689 8 10.0166 8H6.0166C5.46432 8 5.0166 8.44772 5.0166 9V11C5.0166 11.5523 4.56889 12 4.0166 12H3.0166V5H13.0166V15C13.0166 18.3137 10.3303 21 7.0166 21H5.0166Z" />
                </svg>
              </div>
              <p className="text-text-muted text-lg md:text-xl mb-8 leading-relaxed font-medium italic">"{t.quote}"</p>
              <div className="flex items-center gap-5 pt-8 border-t border-border-glass">
                 <div className="relative w-12 h-12 md:w-14 md:h-14 rounded-full overflow-hidden border-2 border-white/10 shadow-md shrink-0">
                    <OptimizedImage 
                      src={t.image} 
                      alt={t.name}
                      fill={true}
                      className="object-cover"
                    />
                 </div>
                 <div>
                    <div className="font-bold text-text-main text-lg">{t.name}</div>
                    <div className="text-sm text-text-muted font-medium">{t.role}, {t.company}</div>
                 </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* --- Launch Protocol --- */}
      <section className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-12 md:mb-20">
          <div className="inline-block px-4 py-1.5 mb-6 rounded-full bg-surface border border-purple-500/30 text-purple-600 dark:text-purple-400 text-sm font-bold tracking-wider uppercase shadow-sm animate-pulse-slow">
            Launch Protocol
          </div>
          <h2 className="font-display text-4xl md:text-6xl font-bold text-text-main mb-6">
            From Concept to <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">Orbit</span>
          </h2>
          <p className="text-text-muted text-lg md:text-xl leading-relaxed">
            A proven, high-velocity workflow designed to take your project from raw idea to global launch in weeks, not months.
          </p>
        </div>

        <div className="relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-1 bg-gradient-to-r from-transparent via-purple-500/20 to-transparent -translate-y-1/2 z-0" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 relative z-10">
            {/* Step 1 */}
            <div className="group glass-panel p-8 rounded-[32px] bg-surface hover:border-purple-500 transition-all duration-500 hover:-translate-y-2 active:scale-[0.98]">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-600 to-indigo-600 flex items-center justify-center text-white font-bold text-2xl shadow-lg shadow-purple-500/30 mb-6 relative group-hover:scale-110 transition-transform">
                1
                <div className="absolute inset-0 bg-white/20 rounded-2xl animate-pulse-slow" />
              </div>
              <h3 className="font-display text-2xl font-bold text-text-main mb-3">Ignition</h3>
              <p className="text-text-muted leading-relaxed text-sm">
                <strong>Discovery & Strategy.</strong> We map your goals, tokenomics, and target audience to build a roadmap that ensures a successful liftoff.
              </p>
            </div>

            {/* Step 2 */}
            <div className="group glass-panel p-8 rounded-[32px] bg-surface hover:border-blue-500 transition-all duration-500 hover:-translate-y-2 lg:translate-y-12 active:scale-[0.98]">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-600 to-cyan-600 flex items-center justify-center text-white font-bold text-2xl shadow-lg shadow-blue-500/30 mb-6 relative group-hover:scale-110 transition-transform">
                2
                <div className="absolute inset-0 bg-white/20 rounded-2xl animate-pulse-slow" />
              </div>
              <h3 className="font-display text-2xl font-bold text-text-main mb-3">Trajectory</h3>
              <p className="text-text-muted leading-relaxed text-sm">
                <strong>Architecture & Design.</strong> Blueprinting the stack. Next.js for speed, Cloudflare for scale, and high-fidelity UI design to captivate investors.
              </p>
            </div>

            {/* Step 3 */}
            <div className="group glass-panel p-8 rounded-[32px] bg-surface hover:border-cyan-500 transition-all duration-500 hover:-translate-y-2 active:scale-[0.98]">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-600 to-teal-600 flex items-center justify-center text-white font-bold text-2xl shadow-lg shadow-cyan-500/30 mb-6 relative group-hover:scale-110 transition-transform">
                3
                <div className="absolute inset-0 bg-white/20 rounded-2xl animate-pulse-slow" />
              </div>
              <h3 className="font-display text-2xl font-bold text-text-main mb-3">Propulsion</h3>
              <p className="text-text-muted leading-relaxed text-sm">
                <strong>Development & Optimization.</strong> Coding the asset with clean, semantic architecture. rigorous testing, SEO injection, and mobile-first optimization.
              </p>
            </div>

            {/* Step 4 */}
            <div className="group glass-panel p-8 rounded-[32px] bg-surface hover:border-emerald-500 transition-all duration-500 hover:-translate-y-2 lg:translate-y-12 active:scale-[0.98]">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-teal-600 to-emerald-600 flex items-center justify-center text-white font-bold text-2xl shadow-lg shadow-emerald-500/30 mb-6 relative group-hover:scale-110 transition-transform">
                4
                <div className="absolute inset-0 bg-white/20 rounded-2xl animate-pulse-slow" />
              </div>
              <h3 className="font-display text-2xl font-bold text-text-main mb-3">Orbit</h3>
              <p className="text-text-muted leading-relaxed text-sm">
                <strong>Launch & Scale.</strong> Deployment to global edge networks, analytics setup, and final hand-off. Your project is live, secure, and ready for traffic.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* --- CTA Section --- */}
      <section className="container mx-auto px-6">
        <div className="relative rounded-[32px] md:rounded-[48px] overflow-hidden p-10 md:p-32 text-center border border-white/10 group bg-slate-900 shadow-2xl shadow-purple-900/20">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-900/40 to-blue-900/40 opacity-100 group-hover:opacity-90 transition-opacity duration-500" />
          <div className="absolute inset-0 backdrop-blur-3xl" />
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>
          
          <div className="relative z-10">
            <h2 className="font-display text-4xl md:text-7xl font-bold text-white mb-8 md:mb-10 tracking-tight">
              Ready to build?
            </h2>
            <p className="text-slate-300 mb-12 md:mb-14 text-lg md:text-2xl font-medium max-w-2xl mx-auto leading-relaxed">
              Book a free consultation and I’ll share a roadmap tailored to your project.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center">
                <Link 
                to="/contact" 
                className="inline-flex items-center justify-center px-10 py-5 md:px-12 md:py-6 bg-white text-slate-900 text-lg md:text-xl font-bold rounded-2xl hover:scale-105 active:scale-95 transition-all shadow-xl shadow-white/10"
                >
                Get a Free Consultation
                </Link>
                <Link 
                to="/projects" 
                className="inline-flex items-center justify-center px-10 py-5 md:px-12 md:py-6 bg-white/10 border border-white/20 text-white text-lg md:text-xl font-bold rounded-2xl hover:bg-white/20 transition-all backdrop-blur-md"
                >
                See Portfolio
                </Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;