import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

interface LayoutProps {
  children?: React.ReactNode;
}

const LogoIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 128 128" width="128" height="128" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="logoGrad" x1="0" y1="0" x2="128" y2="128" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#b026ff" />
        <stop offset="100%" stopColor="#00f5ff" />
      </linearGradient>
    </defs>
    <path d="M44 36C44 36 28 50 28 64C28 78 44 92 44 92" stroke="url(#logoGrad)" strokeWidth="12" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M84 36C84 36 100 50 100 64C100 78 84 92 84 92" stroke="url(#logoGrad)" strokeWidth="12" strokeLinecap="round" strokeLinejoin="round" />
    <circle cx="64" cy="64" r="8" fill="url(#logoGrad)" />
  </svg>
);

const SocialIcon = ({ href, label, path, colorClass }: { href: string; label: string; path: string; colorClass: string }) => (
  <a 
    href={href} 
    target="_blank" 
    rel="noopener noreferrer" 
    aria-label={label}
    className={`w-10 h-10 flex items-center justify-center rounded-full bg-white/5 border border-white/10 text-slate-400 transition-all duration-300 hover:scale-110 hover:text-white hover:border-white/30 ${colorClass}`}
  >
    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
      <path d={path} />
    </svg>
  </a>
);

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const navLinks = [
    { path: '/', label: 'Base' },
    { path: '/services', label: 'Systems' },
    { path: '/projects', label: 'Manifests' },
    { path: '/blog', label: 'Logs' },
    { path: '/about', label: 'Intelligence' },
  ];

  return (
    <div className="min-h-screen relative flex flex-col overflow-x-hidden">
      
      {/* Dynamic Cosmic Background */}
      <div className="cosmic-bg">
        <div className="stars"></div>
        <div className="nebula top-[-10%] left-[-10%] bg-purple-600/10"></div>
        <div className="nebula bottom-[-10%] right-[-10%] bg-cyan-500/10 animate-delay-2000"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#02010a]/50 to-[#02010a]"></div>
      </div>

      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'py-4' : 'py-8'}`}>
        <div className="container mx-auto px-4">
          <nav className={`mx-auto max-w-6xl flex items-center justify-between px-6 py-2.5 rounded-full transition-all duration-500 ${scrolled ? 'glass-panel border-white/10' : 'bg-transparent'}`}>
            <Link to="/" className="flex items-center gap-2 group">
              <LogoIcon className="w-8 h-8 transition-transform group-hover:rotate-180 duration-700" />
              <span className="font-display font-bold text-xl tracking-tighter text-white">CryptoWebBuild</span>
            </Link>

            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <Link 
                  key={link.path} 
                  to={link.path} 
                  className={`px-4 py-2 text-sm font-medium rounded-full transition-all ${location.pathname === link.path ? 'bg-white/10 text-cyan-400' : 'text-slate-400 hover:text-white hover:bg-white/5'}`}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            <div className="flex items-center gap-4">
              <Link to="/contact" className="hidden md:block px-6 py-2 bg-gradient-to-r from-purple-600 to-cyan-600 text-white font-bold rounded-full text-xs hover:scale-105 transition-transform shadow-[0_0_20px_rgba(176,38,255,0.3)]">
                Initialize Contact
              </Link>
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="lg:hidden p-2 text-white bg-white/5 rounded-full border border-white/10">
                <div className="w-5 h-4 flex flex-col justify-between">
                  <span className={`h-0.5 bg-current w-full rounded-full transition-all ${isMenuOpen ? 'rotate-45 translate-y-[7px]' : ''}`} />
                  <span className={`h-0.5 bg-current w-full rounded-full transition-all ${isMenuOpen ? 'opacity-0' : ''}`} />
                  <span className={`h-0.5 bg-current w-full rounded-full transition-all ${isMenuOpen ? '-rotate-45 -translate-y-[7px]' : ''}`} />
                </div>
              </button>
            </div>
          </nav>

          {/* Mobile Menu */}
          <div className={`lg:hidden absolute top-full left-4 right-4 mt-4 transition-all duration-500 ${isMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'}`}>
            <div className="glass-panel rounded-3xl p-6 shadow-2xl overflow-hidden">
              <div className="flex flex-col space-y-2">
                {navLinks.map((link) => (
                  <Link 
                    key={link.path} 
                    to={link.path} 
                    className={`block px-4 py-3 text-lg font-medium rounded-2xl ${location.pathname === link.path ? 'bg-white/10 text-cyan-400' : 'text-slate-400'}`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}
                <Link to="/contact" className="block w-full py-3 mt-4 text-center bg-gradient-to-r from-purple-600 to-cyan-600 text-white font-bold rounded-2xl">
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="flex-grow pt-24">{children}</main>

      <footer className="mt-32 border-t border-white/5 bg-[#02010a]/80 backdrop-blur-xl">
        <div className="container mx-auto px-6 py-16">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-10">
            
            {/* Logo & Tagline */}
            <div className="text-center lg:text-left">
              <Link to="/" className="flex items-center justify-center lg:justify-start gap-3 mb-4 group">
                <LogoIcon className="w-8 h-8 group-hover:scale-110 transition-transform" />
                <span className="font-display font-bold text-2xl text-white">CryptoWebBuild</span>
              </Link>
              <p className="text-slate-400 text-sm max-w-xs leading-relaxed">
                Architecting the decentralized frontier with pixel-perfect cosmic precision.
              </p>
            </div>

            {/* Social Icons - Center aligned on mobile, right on desktop */}
            <div className="flex gap-4">
               {/* Facebook */}
               <SocialIcon 
                 href="https://www.facebook.com/CryptoWebBuild" 
                 label="Facebook" 
                 colorClass="hover:bg-[#1877F2] hover:border-[#1877F2]"
                 path="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"
               />
               
               {/* YouTube */}
               <SocialIcon 
                 href="https://youtube.com/@CryptoWebBuild" 
                 label="YouTube" 
                 colorClass="hover:bg-[#FF0000] hover:border-[#FF0000]"
                 path="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"
               />
               
               {/* Telegram */}
               <SocialIcon 
                 href="https://t.me/CryptoWebBuild" 
                 label="Telegram" 
                 colorClass="hover:bg-[#229ED9] hover:border-[#229ED9]"
                 path="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.415-.752-.21-1.349-.321-1.298-.678.027-.184.285-.372.75-.567 2.943-1.28 4.909-2.126 5.895-2.54 2.809-1.176 3.39-1.38 3.766-1.386.082-.002.268.006.416.093z"
               />

               {/* GitHub */}
               <SocialIcon 
                 href="https://github.com/cryptowebbuild" 
                 label="GitHub" 
                 colorClass="hover:bg-white hover:text-black hover:border-white"
                 path="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
               />

               {/* X (Twitter) */}
               <SocialIcon 
                 href="https://x.com/WebBuildDev" 
                 label="X (Twitter)" 
                 colorClass="hover:bg-black hover:border-white"
                 path="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"
               />
            </div>
          </div>

          <div className="mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-center md:text-left text-slate-600 text-[10px] uppercase tracking-widest font-bold">
              © 2025 CryptoWebBuild // Intelligence Stream Active
            </div>
            
            <div className="flex gap-8 text-xs font-bold text-slate-500 uppercase tracking-widest">
              <Link to="/privacy" className="hover:text-cyan-400 transition-colors">Privacy</Link>
              <Link to="/terms" className="hover:text-purple-400 transition-colors">Terms</Link>
              <a href="mailto:hello@cryptowebbuild.com" className="hover:text-cyan-400 transition-colors">Secure Mail</a>
            </div>
          </div>

        </div>
      </footer>
    </div>
  );
};

export default Layout;