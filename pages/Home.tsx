import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import OptimizedImage from '../components/OptimizedImage';

const Home: React.FC = () => {
  const [text, setText] = useState('');

  // Updated Phrases to target diverse clients
  const phrases = [
    'Crypto Launch Websites.',
    'Fast Business Websites.',
    'Conversion-Focused Landing Pages.',
    'SEO-Friendly Custom Builds.'
  ];
  
  const proofPoints = [
    'Custom React and static-first builds',
    'Clean SEO structure with technical setup',
    'Mobile-first pages focused on clarity and speed',
    'Direct communication with Sagor Ahamed'
  ];
  
  // Typing Effect Logic
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

  return (
    <div className="space-y-24 md:space-y-48 overflow-hidden bg-gray-50 dark:bg-[#020617] transition-colors duration-300">
      
      {/* --- SEO Configuration --- */}
      <SEO 
        title="CryptoWebBuild | Fast Websites for Crypto, Business & E-commerce"
        description="CryptoWebBuild builds fast, modern websites for crypto projects, businesses, and e-commerce brands with strong SEO structure, clean design, and conversion-focused UX."
        keywords={[
          'Crypto Website Developer',
          'Business Website Developer', 
          'E-commerce Website Developer',
          'Technical SEO Web Design',
          'React Website Development',
          'Conversion Focused Website Design'
        ]}
        canonical="/"
        schemaType="Organization"
      />
      
      {/* --- Hero Section --- */}
      <section className="relative px-6 min-h-[90vh] flex flex-col items-center justify-center text-center">
        
        {/* Glow Effects - GPU Accelerated */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] md:w-[700px] h-[300px] md:h-[700px] bg-purple-500/20 dark:bg-purple-500/20 blur-[100px] rounded-full pointer-events-none transition-colors duration-500 mix-blend-multiply dark:mix-blend-screen will-change-transform" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[250px] md:w-[500px] h-[250px] md:h-[500px] bg-cyan-500/20 dark:bg-cyan-500/20 blur-[90px] rounded-full animate-pulse-slow pointer-events-none transition-colors duration-500 mix-blend-multiply dark:mix-blend-screen will-change-transform" />

        <div className="relative z-10 max-w-6xl mx-auto flex flex-col items-center">
          
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/80 dark:bg-white/10 backdrop-blur-md border border-gray-200 dark:border-white/10 shadow-sm mb-8 md:mb-10 animate-slide-up hover:border-purple-500/50 transition-colors">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
            </span>
            <span className="text-xs md:text-sm font-bold text-gray-600 dark:text-gray-300 uppercase tracking-wide">Available for New Projects</span>
          </div>

          {/* H1 Title */}
          <h1 className="font-display text-5xl sm:text-6xl md:text-8xl font-black tracking-tight mb-8 leading-[1.1] animate-slide-up text-gray-900 dark:text-white text-balance">
            High-Performance <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-cyan-600 to-purple-600 dark:from-purple-400 dark:via-cyan-400 dark:to-purple-400 bg-[length:200%_auto] animate-shimmer">
              Web Solutions
            </span>
          </h1>

          {/* Typing Container */}
          <div className="min-h-[4rem] sm:min-h-[3rem] md:min-h-[4.5rem] mb-10 md:mb-12 animate-slide-up flex flex-col md:flex-row md:items-center justify-center gap-2" style={{ animationDelay: '0.2s' }}>
            <span className="text-2xl sm:text-3xl md:text-5xl text-gray-600 dark:text-gray-400 font-medium">I build</span>
            <span className="text-2xl sm:text-3xl md:text-5xl text-gray-900 dark:text-white font-bold relative inline-block break-words min-w-[280px] text-left">
              {text}
              <span className="animate-pulse text-cyan-500 ml-1">|</span>
            </span>
          </div>

          <p className="text-lg md:text-2xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-12 leading-relaxed animate-slide-up font-medium text-balance" style={{ animationDelay: '0.4s' }}>
            I build fast, modern websites for <strong>crypto projects</strong>, <strong>growing businesses</strong>, and <strong>e-commerce brands</strong> that need better clarity, stronger SEO structure, and cleaner conversion flow.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center items-center w-full sm:w-auto animate-slide-up" style={{ animationDelay: '0.6s' }}>
            <Link 
              to="/contact" 
              className="relative px-8 py-4 md:px-10 md:py-5 bg-gray-900 text-white dark:bg-white dark:text-black font-bold text-lg md:text-xl rounded-2xl overflow-hidden transition-all active:scale-95 hover:scale-105 shadow-xl shadow-purple-500/10 w-full sm:w-auto flex items-center justify-center"
            >
              <span className="relative z-10">Start Your Project</span>
            </Link>
            
            <Link 
              to="/projects"
              className="px-8 py-4 md:px-10 md:py-5 text-gray-900 dark:text-white font-bold text-lg md:text-xl rounded-2xl border border-gray-200 dark:border-white/10 bg-white/50 dark:bg-white/5 hover:bg-gray-100 dark:hover:bg-white/10 transition-all active:scale-95 shadow-sm w-full sm:w-auto text-center backdrop-blur-md"
            >
              View Recent Work
            </Link>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce-slow text-gray-400 opacity-60 hidden md:block">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path></svg>
        </div>
      </section>

      {/* --- Services Preview --- */}
      <section className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 md:mb-20 gap-6">
          <div className="max-w-2xl">
            <h2 className="font-display text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-4 md:mb-6">
              Services I Provide
            </h2>
            <p className="text-gray-600 dark:text-gray-400 text-lg md:text-xl leading-relaxed">
              Full-stack and static-first websites tailored for performance and growth.
            </p>
          </div>
          <Link to="/services" className="text-cyan-600 dark:text-cyan-400 font-bold text-lg hover:text-cyan-500 transition-colors flex items-center gap-2 group border-b-2 border-transparent hover:border-cyan-500 pb-1">
            All Services <span className="group-hover:translate-x-1 transition-transform">→</span>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          
          {/* Service 1 - Crypto */}
          <div className="group relative overflow-hidden p-8 rounded-[32px] bg-white dark:bg-[#1e293b] border border-gray-200 dark:border-white/5 hover:border-purple-500/50 transition-all duration-300 shadow-sm hover:shadow-xl hover:shadow-purple-500/10">
            <div className="w-16 h-16 md:w-20 md:h-20 mb-6 md:mb-8 rounded-2xl bg-purple-50 dark:bg-purple-900/20 border border-purple-200 dark:border-purple-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                 <svg className="w-8 h-8 md:w-10 md:h-10 text-purple-600 dark:text-purple-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M6 3L2 9L12 21L22 9L18 3H6Z" />
                    <path d="M11 3L8 9L12 21L16 9L13 3" />
                 </svg>
            </div>
            <h3 className="font-display text-2xl font-bold text-gray-900 dark:text-white mb-3">Crypto & Web3</h3>
            <p className="text-gray-600 dark:text-gray-400 text-base leading-relaxed font-medium">
              Token landing pages, presale flows, and on-page SEO tailored for token launches.
            </p>
          </div>

          {/* Service 2 - E-commerce */}
          <div className="group relative overflow-hidden p-8 rounded-[32px] bg-white dark:bg-[#1e293b] border border-gray-200 dark:border-white/5 hover:border-cyan-500/50 transition-all duration-300 shadow-sm hover:shadow-xl hover:shadow-cyan-500/10">
            <div className="w-16 h-16 md:w-20 md:h-20 mb-6 md:mb-8 rounded-2xl bg-cyan-50 dark:bg-cyan-900/20 border border-cyan-200 dark:border-cyan-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                 <svg className="w-8 h-8 md:w-10 md:h-10 text-cyan-600 dark:text-cyan-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="9" cy="21" r="1" />
                    <circle cx="20" cy="21" r="1" />
                    <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
                 </svg>
            </div>
            <h3 className="font-display text-2xl font-bold text-gray-900 dark:text-white mb-3">E-Commerce</h3>
            <p className="text-gray-600 dark:text-gray-400 text-base leading-relaxed font-medium">
              Product pages, JavaScript carts and secure payment gateways optimized for sales.
            </p>
          </div>

           {/* Service 3 - Business */}
          <div className="group relative overflow-hidden p-8 rounded-[32px] bg-white dark:bg-[#1e293b] border border-gray-200 dark:border-white/5 hover:border-blue-500/50 transition-all duration-300 shadow-sm hover:shadow-xl hover:shadow-blue-500/10">
             <div className="w-16 h-16 md:w-20 md:h-20 mb-6 md:mb-8 rounded-2xl bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                 <svg className="w-8 h-8 md:w-10 md:h-10 text-blue-600 dark:text-blue-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M3 21h18" />
                    <path d="M5 21V7" />
                    <path d="M9 21V11" />
                    <path d="M13 21V3" />
                    <path d="M17 21v6" />
                 </svg>
            </div>
            <h3 className="font-display text-2xl font-bold text-gray-900 dark:text-white mb-3">Business Sites</h3>
            <p className="text-gray-600 dark:text-gray-400 text-base leading-relaxed font-medium">
              Responsive websites for startups with SEO-focused content and clear CTAs.
            </p>
          </div>

           {/* Service 4 - Blogs */}
          <div className="group relative overflow-hidden p-8 rounded-[32px] bg-white dark:bg-[#1e293b] border border-gray-200 dark:border-white/5 hover:border-pink-500/50 transition-all duration-300 shadow-sm hover:shadow-xl hover:shadow-pink-500/10">
             <div className="w-16 h-16 md:w-20 md:h-20 mb-6 md:mb-8 rounded-2xl bg-pink-50 dark:bg-pink-900/20 border border-pink-200 dark:border-pink-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                 <svg className="w-8 h-8 md:w-10 md:h-10 text-pink-600 dark:text-pink-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 19l7-7 3 3-7 7-3-3z" />
                    <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" />
                    <path d="M2 2l7.586 7.586" />
                 </svg>
            </div>
            <h3 className="font-display text-2xl font-bold text-gray-900 dark:text-white mb-3">Blogs & Portfolios</h3>
            <p className="text-gray-600 dark:text-gray-400 text-base leading-relaxed font-medium">
              Fast static blogs for personal branding and organic traffic growth.
            </p>
          </div>

        </div>
      </section>

      {/* --- Technical Philosophy (Why Static First) --- */}
      <section className="container mx-auto px-6 relative z-10">
        <div className="p-8 md:p-12 rounded-[32px] bg-white dark:bg-[#1e293b] border border-gray-200 dark:border-white/10 shadow-xl relative overflow-hidden">
             {/* Background Mesh */}
             <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-purple-500/5 to-transparent pointer-events-none" />
             
            <div className="flex flex-col lg:flex-row gap-12 items-center relative z-10">
                <div className="flex-1 space-y-6">
                    <div className="inline-block px-4 py-1.5 rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 text-xs font-bold uppercase tracking-wider">
                        Engineering Philosophy
                    </div>
                    <h2 className="font-display text-3xl md:text-5xl font-bold text-gray-900 dark:text-white leading-tight">
                        Why My Sites <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-cyan-500 dark:from-purple-400 dark:to-cyan-400">Rank & Convert</span>
                    </h2>
                    <div className="prose prose-lg text-gray-600 dark:text-gray-300 font-medium">
                        <p>
                            In 2026, standard templates don't cut it. I build using a <strong>Static-First Architecture</strong>. This means your site isn't generated on the fly every time a user visits—it's pre-built and served from the edge.
                        </p>
                        <ul className="space-y-3 mt-6">
                            {[
                                "SEO-ready structure with clean metadata, schema, and crawlable pages.",
                                "Static-first architecture that reduces bloat and improves stability.",
                                "Cloudflare delivery for faster global performance and simpler deployment."
                            ].map((item) => (
                                <li key={item} className="flex items-center gap-3">
                                    <span className="w-5 h-5 rounded-full bg-green-500/20 text-green-600 flex items-center justify-center text-xs">✓</span>
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
                <div className="flex-1 w-full max-w-md">
                    <div className="grid grid-cols-2 gap-4">
                        {proofPoints.map((point) => (
                          <div key={point} className="p-6 bg-gray-50 dark:bg-black/20 rounded-2xl border border-gray-200 dark:border-white/5 text-center hover:border-cyan-500/50 transition-colors">
                            <div className="text-sm md:text-base font-bold text-gray-900 dark:text-white leading-relaxed">{point}</div>
                          </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
      </section>

      {/* --- Launch Protocol (Process) --- */}
      <section className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-12 md:mb-20">
          <div className="inline-block px-4 py-1.5 mb-6 rounded-full bg-white dark:bg-white/5 border border-purple-500/30 text-purple-600 dark:text-purple-400 text-sm font-bold tracking-wider uppercase shadow-sm">
            Launch Protocol
          </div>
          <h2 className="font-display text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            From Concept to <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-cyan-500 dark:from-purple-400 dark:to-cyan-400">Launch</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg md:text-xl leading-relaxed">
            A proven workflow designed to take your project from raw idea to global launch in weeks.
          </p>
        </div>

        <div className="relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-1 bg-gradient-to-r from-transparent via-purple-500/20 to-transparent -translate-y-1/2 z-0" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 relative z-10">
            {/* Step 1 */}
            <div className="group p-8 rounded-[32px] bg-white dark:bg-[#1e293b] border border-gray-200 dark:border-white/5 hover:border-purple-500 transition-all duration-500 hover:-translate-y-2 shadow-sm hover:shadow-xl">
              <div className="w-16 h-16 rounded-2xl bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center text-purple-600 dark:text-purple-400 font-bold text-2xl mb-6 relative group-hover:scale-110 transition-transform">
                1
              </div>
              <h3 className="font-display text-2xl font-bold text-gray-900 dark:text-white mb-3">Discovery</h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-sm font-medium">
                We map your goals, audience, and features to build a roadmap that ensures a successful liftoff.
              </p>
            </div>

            {/* Step 2 */}
            <div className="group p-8 rounded-[32px] bg-white dark:bg-[#1e293b] border border-gray-200 dark:border-white/5 hover:border-blue-500 transition-all duration-500 hover:-translate-y-2 lg:translate-y-12 shadow-sm hover:shadow-xl">
              <div className="w-16 h-16 rounded-2xl bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 dark:text-blue-400 font-bold text-2xl mb-6 relative group-hover:scale-110 transition-transform">
                2
              </div>
              <h3 className="font-display text-2xl font-bold text-gray-900 dark:text-white mb-3">Design</h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-sm font-medium">
                Blueprinting the stack. High-fidelity UI design to captivate investors and customers instantly.
              </p>
            </div>

            {/* Step 3 */}
            <div className="group p-8 rounded-[32px] bg-white dark:bg-[#1e293b] border border-gray-200 dark:border-white/5 hover:border-cyan-500 transition-all duration-500 hover:-translate-y-2 shadow-sm hover:shadow-xl">
              <div className="w-16 h-16 rounded-2xl bg-cyan-100 dark:bg-cyan-900/30 flex items-center justify-center text-cyan-600 dark:text-cyan-400 font-bold text-2xl mb-6 relative group-hover:scale-110 transition-transform">
                3
              </div>
              <h3 className="font-display text-2xl font-bold text-gray-900 dark:text-white mb-3">Development</h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-sm font-medium">
                Coding with clean, semantic architecture. Rigorous testing, SEO injection, and mobile optimization.
              </p>
            </div>

            {/* Step 4 */}
            <div className="group p-8 rounded-[32px] bg-white dark:bg-[#1e293b] border border-gray-200 dark:border-white/5 hover:border-emerald-500 transition-all duration-500 hover:-translate-y-2 lg:translate-y-12 shadow-sm hover:shadow-xl">
              <div className="w-16 h-16 rounded-2xl bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center text-emerald-600 dark:text-emerald-400 font-bold text-2xl mb-6 relative group-hover:scale-110 transition-transform">
                4
              </div>
              <h3 className="font-display text-2xl font-bold text-gray-900 dark:text-white mb-3">Launch</h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-sm font-medium">
                Deployment to global edge networks. Analytics setup. Your project is live, secure, and ready for traffic.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* --- Proof / Positioning Section --- */}
      <section className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-20">
          <h2 className="font-display text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            Built for clarity, speed, and trust
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg md:text-xl leading-relaxed">
            CryptoWebBuild focuses on fast execution, clean frontend architecture, and practical SEO structure — without bloated agency process.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          <div className="p-8 md:p-10 rounded-[32px] bg-white dark:bg-[#1e293b] border border-gray-200 dark:border-white/5 shadow-sm hover:shadow-xl transition-all duration-300">
            <h3 className="font-display text-2xl font-bold text-gray-900 dark:text-white mb-4">Fast build process</h3>
            <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed font-medium">Direct communication, clean delivery, and less back-and-forth so projects move faster.</p>
          </div>
          <div className="p-8 md:p-10 rounded-[32px] bg-white dark:bg-[#1e293b] border border-gray-200 dark:border-white/5 shadow-sm hover:shadow-xl transition-all duration-300">
            <h3 className="font-display text-2xl font-bold text-gray-900 dark:text-white mb-4">Modern frontend quality</h3>
            <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed font-medium">Responsive layouts, sharper messaging, and cleaner UI decisions that make websites feel more credible.</p>
          </div>
          <div className="p-8 md:p-10 rounded-[32px] bg-white dark:bg-[#1e293b] border border-gray-200 dark:border-white/5 shadow-sm hover:shadow-xl transition-all duration-300">
            <h3 className="font-display text-2xl font-bold text-gray-900 dark:text-white mb-4">SEO-ready foundation</h3>
            <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed font-medium">Technical setup, structured content, and conversion-focused pages built to support long-term growth.</p>
          </div>
        </div>
      </section>

      {/* --- CTA Section --- */}
      <section className="container mx-auto px-6 relative z-10">
        <div className="relative rounded-[32px] md:rounded-[48px] overflow-hidden p-10 md:p-32 text-center border border-white/10 group bg-slate-900 shadow-2xl shadow-purple-900/20">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-900/40 to-blue-900/40 opacity-100 group-hover:opacity-90 transition-opacity duration-500" />
          <div className="absolute inset-0 backdrop-blur-3xl" />
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>
          
          <div className="relative z-10">
            <h2 className="font-display text-4xl md:text-7xl font-bold text-white mb-8 md:mb-10 tracking-tight">
              Ready to build?
            </h2>
            <p className="text-slate-300 mb-12 md:mb-14 text-lg md:text-2xl font-medium max-w-2xl mx-auto leading-relaxed">
              Send your project details and I’ll review the scope, suggest the best direction, and reply with a practical plan.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center">
                <Link 
                to="/contact" 
                className="inline-flex items-center justify-center px-10 py-5 md:px-12 md:py-6 bg-white text-slate-900 text-lg md:text-xl font-bold rounded-2xl hover:scale-105 active:scale-95 transition-all shadow-xl shadow-white/10"
                >
                Send Project Details
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