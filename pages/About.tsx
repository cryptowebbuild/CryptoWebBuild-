import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

const About: React.FC = () => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    "mainEntity": {
      "@type": "Person",
      "name": "Sagor Ahamed",
      "alternateName": "CryptoWebBuild",
      "jobTitle": "Senior Web3 Developer",
      "image": "https://cryptowebbuild.com/sagor-avatar.png",
      "description": "Founder of CryptoWebBuild Agency. Specialized in high-performance Web3 interfaces, e-commerce, and modern web architecture.",
      "url": "https://cryptowebbuild.com/about",
      "sameAs": [
        "https://x.com/CryptowebbuildX",
        "https://t.me/CryptoWebBuild",
        "https://github.com/cryptowebbuild",
        "https://www.youtube.com/@cryptowebbuild"
      ],
      "knowsAbout": ["React", "Solana", "Next.js", "Technical SEO", "Smart Contract Integration"]
    }
  };

  const socialLinks = [
    { 
      name: 'Telegram', 
      label: '@CryptoWebBuild', 
      url: 'https://t.me/CryptoWebBuild', 
      color: 'bg-[#229ED9]', 
      icon: <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.415-.752-.21-1.349-.321-1.298-.678.027-.184.285-.372.75-.567 2.943-1.28 4.909-2.126 5.895-2.54 2.809-1.176 3.39-1.38 3.766-1.386.082-.002.268.006.416.093z"/></svg>
    },
    { 
      name: 'X (Twitter)', 
      label: '@CryptoWebBuildX' , 
      url: 'https://x.com/CryptowebbuildX', 
      color: 'bg-black border border-white/20', 
      icon: <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
    },
    { 
      name: 'GitHub', 
      label: '@cryptowebbuild', 
      url: 'https://github.com/cryptowebbuild', 
      color: 'bg-[#333]', 
      icon: <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
    },
    { 
      name: 'YouTube', 
      label: 'Watch Tutorials', 
      url: 'https://www.youtube.com/@cryptowebbuild', 
      color: 'bg-[#FF0000]', 
      icon: <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/></svg>
    },
    {
      name: 'Email',
      label: 'hello@cryptowebbuild.com',
      url: 'mailto:hello@cryptowebbuild.com',
      color: 'bg-gradient-to-r from-purple-600 to-blue-600',
      icon: <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>
    }
  ];

  const techStack = [
    { name: 'React & Next.js', icon: '⚛️', desc: 'Architecture' },
    { name: 'TypeScript', icon: 'TS', desc: 'Type Safety' },
    { name: 'Tailwind CSS', icon: '🎨', desc: 'Design System' },
    { name: 'Solana Web3', icon: '◎', desc: 'Blockchain' },
    { name: 'Ethers.js', icon: 'Ξ', desc: 'EVM Integration' },
    { name: 'Cloudflare', icon: '☁️', desc: 'Edge Deploy' }
  ];

  const stats = [
    { label: 'Years Experience', value: '5+' },
    { label: 'Projects Shipped', value: '100+' },
    { label: 'Client Raised', value: '$10M+' },
    { label: 'Avg Load Time', value: '< 0.8s' }
  ];

  return (
    <div className="container mx-auto px-6 pt-32 pb-20 bg-gray-50 dark:bg-[#020617] transition-colors duration-300 min-h-screen">
      <SEO 
        title="About Sagor Ahamed | Senior Web3 Developer"
        description="Meet Sagor Ahamed, founder of CryptoWebBuild. Expert full-stack developer specialized in React, Solana, and high-performance web architecture."
        keywords={['Sagor Ahamed', 'CryptoWebBuild Founder', 'Senior React Developer', 'Web3 Expert', 'Frontend Architect']}
        image="https://cryptowebbuild.com/sagor-avatar.png"
        canonical="/about"
      />
      <script type="application/ld+json">
        {JSON.stringify(jsonLd)}
      </script>

      {/* --- HERO: Founder Profile & Social Command Center --- */}
      <div className="relative mb-32 animate-slide-up">
        {/* Background Decorative Elements */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-purple-500/10 blur-[120px] rounded-full pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-cyan-500/10 blur-[100px] rounded-full pointer-events-none"></div>

        <div className="rounded-[3rem] p-6 md:p-12 border-t border-purple-200 dark:border-purple-800 shadow-2xl shadow-purple-500/10 bg-white dark:bg-[#1e293b] relative z-10 overflow-hidden">
            {/* Grid Pattern Overlay */}
            <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: `linear-gradient(#6366f1 1px, transparent 1px), linear-gradient(to right, #6366f1 1px, transparent 1px)`, backgroundSize: '40px 40px' }}></div>
            
            <div className="relative z-10 flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
                
                {/* Visual Side: Avatar + Holographic Effect */}
                <div className="shrink-0 relative group perspective-1000">
                    {/* Glow adjusted to match the yellow/gold theme of the avatar */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-yellow-400 via-orange-500 to-yellow-300 rounded-[2.5rem] blur-[30px] opacity-40 group-hover:opacity-60 transition-opacity duration-700 animate-pulse-slow"></div>
                    
                    <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-[2.5rem] overflow-hidden border-4 border-yellow-400/20 shadow-[0_0_50px_rgba(250,204,21,0.2)] bg-[#0F172A] transform transition-transform duration-700 group-hover:rotate-y-6 group-hover:scale-[1.02]">
                        <img 
                            src="/sagor-avatar.png" 
                            alt="Sagor Ahamed - CryptoWebBuild Founder" 
                            className="w-full h-full object-cover"
                            loading="eager"
                        />
                        {/* Overlay Gradient */}
                        <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] via-transparent to-transparent opacity-30"></div>
                        
                        {/* Name Badge */}
                        <div className="absolute bottom-6 left-6 right-6">
                            <div className="inline-block px-3 py-1 mb-2 rounded-full bg-green-500/20 border border-green-500/50 text-green-400 text-xs font-bold uppercase tracking-wider backdrop-blur-md">
                                ● Online Now
                            </div>
                            <h2 className="text-white font-display font-bold text-2xl tracking-tight">Sagor Ahamed</h2>
                            <p className="text-slate-400 text-sm font-medium">Founder & Lead Architect</p>
                        </div>
                    </div>
                </div>

                {/* Content Side: Bio + Social Grid */}
                <div className="flex-1 text-center lg:text-left">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 rounded-full bg-purple-100 dark:bg-purple-900/30 border border-purple-200 dark:border-purple-800 text-purple-600 dark:text-purple-300 text-xs font-bold tracking-wider uppercase shadow-sm">
                        <span className="w-2 h-2 rounded-full bg-purple-500 animate-ping"></span>
                        The Mind Behind The Agency
                    </div>
                    
                    <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
                        About Sagor Ahamed: <br/>
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500 animate-shimmer">Decentralized Architect</span>
                    </h1>
                    
                    <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 leading-relaxed mb-8 font-light max-w-2xl mx-auto lg:mx-0">
                        I am <strong>Sagor Ahamed</strong>, the founder of <span className="text-gray-900 dark:text-white font-bold">CryptoWebBuild Agency</span>. We don't just write code; we build high-performance digital assets that turn visitors into investors and customers. From viral meme coins to institutional DeFi protocols.
                    </p>

                    {/* Social Command Center */}
                    <div className="mb-8">
                        <h3 className="text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-widest mb-4 opacity-70">Connect Directly</h3>
                        <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
                            {socialLinks.map((social) => (
                                <a 
                                    key={social.name}
                                    href={social.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={`group flex items-center gap-3 pl-3 pr-4 py-2.5 rounded-xl text-white font-bold text-sm transition-all hover:scale-105 shadow-lg ${social.color} hover:shadow-xl`}
                                >
                                    <div className="bg-white/20 p-1 rounded-lg group-hover:bg-white/30 transition-colors">
                                        {social.icon}
                                    </div>
                                    <span>{social.name}</span>
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Stats Bar */}
            <div className="mt-12 pt-8 border-t border-gray-200 dark:border-white/10 grid grid-cols-2 md:grid-cols-4 gap-6 relative z-10">
                {stats.map((stat, i) => (
                    <div key={i} className="text-center group cursor-default">
                        <div className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-gray-900 to-gray-600 dark:from-white dark:to-gray-400 mb-1 group-hover:scale-110 transition-transform">
                            {stat.value}
                        </div>
                        <div className="text-xs font-bold text-cyan-600 uppercase tracking-widest">{stat.label}</div>
                    </div>
                ))}
            </div>
        </div>
      </div>

      {/* --- Philosophy / Agency Story --- */}
      <div className="grid md:grid-cols-2 gap-12 md:gap-24 mb-32 items-center animate-slide-up" style={{ animationDelay: '0.2s' }}>
        <div className="space-y-8 order-2 md:order-1">
            <h2 className="font-display text-3xl md:text-5xl font-bold text-gray-900 dark:text-white leading-tight">
                More than a Developer. <br/>
                <span className="text-purple-600 dark:text-purple-400">I am your Agency.</span>
            </h2>
            <div className="prose prose-lg text-gray-600 dark:text-gray-400">
                <p>
                    In 2026, a website isn't just a digital brochure; it's a conversion engine. Whether you are launching a Solana token, dropping an NFT collection, or scaling an e-commerce brand, <strong>speed and trust are your currency.</strong>
                </p>
                <p>
                    I started <strong>CryptoWebBuild</strong> with a singular mission: to eliminate the bloat of traditional agencies. No middlemen, no "account managers" who don't code, and no delays. 
                </p>
                <p className="border-l-4 border-cyan-500 pl-4 italic text-gray-900 dark:text-white font-medium">
                    "I obsess over milliseconds so you don't lose customers. I build assets that appreciate in value."
                </p>
                <p>
                    My agency model is unique: You get the personal attention of a freelancer with the output quality of a full-scale studio. I personally architect every project to ensure it meets my strict standards for SEO, Security, and Performance.
                </p>
            </div>
        </div>

        {/* The Tech Arsenal */}
        <div className="order-1 md:order-2">
            <div className="p-8 rounded-3xl bg-white dark:bg-[#1e293b] border border-gray-200 dark:border-white/10 relative overflow-hidden shadow-xl">
                <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/20 blur-[50px] rounded-full pointer-events-none"></div>
                <h3 className="font-display text-2xl font-bold text-gray-900 dark:text-white mb-8 flex items-center gap-3">
                    <span className="w-2 h-8 bg-gradient-to-b from-purple-500 to-cyan-500 rounded-full"></span>
                    The Agency Arsenal
                </h3>
                
                <div className="grid grid-cols-2 gap-4">
                    {techStack.map((tech, i) => (
                        <div key={i} className="group p-4 bg-gray-50 dark:bg-black/20 border border-gray-200 dark:border-white/10 hover:border-purple-500/40 rounded-2xl transition-all hover:-translate-y-1 hover:shadow-lg">
                            <div className="flex items-center gap-3 mb-2">
                                <span className="text-2xl filter grayscale group-hover:grayscale-0 transition-all">{tech.icon === 'TS' ? (
                                    <svg className="w-6 h-6 text-blue-600" viewBox="0 0 24 24" fill="currentColor"><path d="M1.125 0C0.502 0 0 0.502 0 1.125v21.75C0 23.498 0.502 24 1.125 24h21.75c0.623 0 1.125-0.502 1.125-1.125V1.125C24 0.502 23.498 0 22.875 0H1.125zM15.266 18.063h-3.328v-1.782h3.328v1.782zm-8.832 0H3.106v-7.149h5.188v1.782H4.888v1.781h1.547v1.782H4.888v1.804zm6.602-5.367H11.25v-1.782h3.328v1.782z"/></svg>
                                ) : tech.icon}</span>
                                <span className="font-bold text-gray-900 dark:text-white text-sm">{tech.name}</span>
                            </div>
                            <p className="text-[10px] text-gray-500 dark:text-gray-400 font-bold uppercase tracking-wide opacity-60 group-hover:opacity-100">{tech.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
      </div>

      {/* --- Timeline / Journey --- */}
      <div className="max-w-4xl mx-auto mb-32 animate-slide-up" style={{ animationDelay: '0.4s' }}>
        <h2 className="font-display text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">The Evolution</h2>
        <div className="relative border-l-2 border-gray-200 dark:border-slate-800 ml-6 md:ml-0 md:pl-0 space-y-12">
            
            <div className="relative md:grid md:grid-cols-2 md:gap-12 items-center">
                <div className="hidden md:block text-right pr-12">
                     <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">CryptoWebBuild Agency</h3>
                     <p className="text-purple-600 dark:text-purple-400 font-bold text-sm uppercase tracking-wide">Present</p>
                </div>
                <div className="absolute -left-[9px] md:left-1/2 md:-ml-[9px] top-0 w-4 h-4 rounded-full bg-purple-500 border-4 border-white dark:border-[#020617] z-10 shadow-[0_0_15px_#a855f7]"></div>
                <div className="pl-12 md:pl-0">
                    <div className="md:hidden mb-2">
                        <span className="text-purple-600 dark:text-purple-400 font-bold text-xs uppercase tracking-wide">Present</span>
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white">CryptoWebBuild Agency</h3>
                    </div>
                    <p className="text-gray-600 dark:text-gray-400">Scaling the agency to serve high-stakes launches. Building custom DApps, Meme Coin Generators, and Enterprise E-commerce solutions.</p>
                </div>
            </div>

            <div className="relative md:grid md:grid-cols-2 md:gap-12 items-center">
                 <div className="pl-12 md:text-right md:pl-0 md:pr-12 order-1">
                     <div className="md:hidden mb-2">
                         <span className="text-gray-500 dark:text-gray-400 font-bold text-xs uppercase tracking-wide">2023 - 2024</span>
                         <h3 className="text-xl font-bold text-gray-900 dark:text-white">Lead Web3 Architect</h3>
                     </div>
                     <p className="text-gray-600 dark:text-gray-400">Led frontend development for multiple DeFi protocols. Mastered wallet integration (Wagmi/Solana) and real-time data visualization.</p>
                </div>
                <div className="absolute -left-[9px] md:left-1/2 md:-ml-[9px] top-0 w-4 h-4 rounded-full bg-gray-300 dark:bg-slate-700 border-4 border-white dark:border-[#020617] z-10"></div>
                <div className="hidden md:block order-2">
                     <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">Lead Web3 Architect</h3>
                     <p className="text-gray-500 dark:text-gray-400 font-bold text-sm uppercase tracking-wide">2023 - 2024</p>
                </div>
            </div>

            <div className="relative md:grid md:grid-cols-2 md:gap-12 items-center">
                 <div className="hidden md:block text-right pr-12">
                     <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">Full Stack Developer</h3>
                     <p className="text-gray-500 dark:text-gray-400 font-bold text-sm uppercase tracking-wide">2021 - 2023</p>
                </div>
                <div className="absolute -left-[9px] md:left-1/2 md:-ml-[9px] top-0 w-4 h-4 rounded-full bg-gray-300 dark:bg-slate-700 border-4 border-white dark:border-[#020617] z-10"></div>
                <div className="pl-12 md:pl-0">
                     <div className="md:hidden mb-2">
                        <span className="text-gray-500 dark:text-gray-400 font-bold text-xs uppercase tracking-wide">2021 - 2023</span>
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white">Full Stack Developer</h3>
                     </div>
                    <p className="text-gray-600 dark:text-gray-400">Built custom MERN stack applications and headless CMS solutions. Learned the importance of SEO and Server-Side Rendering.</p>
                </div>
            </div>
        </div>
      </div>

      {/* --- CTA --- */}
      <div className="relative group rounded-[3rem] overflow-hidden bg-slate-900 border border-white/10 p-12 text-center shadow-2xl">
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 via-cyan-500 to-green-500"></div>
        
        <div className="relative z-10 max-w-2xl mx-auto">
            <h2 className="font-display text-4xl font-bold text-white mb-6">Ready to work with the best?</h2>
            <p className="text-slate-300 text-lg mb-8 leading-relaxed">
                I am currently accepting new projects for <span className="text-white font-bold">Q4 2025</span>. If you need a developer who cares about your business growth as much as the code, let's talk.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact" className="inline-flex items-center justify-center px-10 py-5 bg-gradient-to-r from-purple-600 to-cyan-600 text-white font-bold rounded-xl shadow-xl hover:scale-105 transition-transform hover:shadow-purple-500/30">
                    Start Your Project
                </Link>
                <a href="https://t.me/CryptoWebBuild" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center px-10 py-5 bg-white/10 border border-white/20 text-white font-bold rounded-xl hover:bg-white/20 transition-colors backdrop-blur-md">
                    Telegram Chat
                </a>
            </div>
        </div>
      </div>

    </div>
  );
};

export default About;