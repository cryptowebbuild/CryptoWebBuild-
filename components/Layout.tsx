import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

interface LayoutProps {
  children?: React.ReactNode;
}

// --- SVG Icons ---
const ThemeToggle = ({ isDark, toggle }: { isDark: boolean; toggle: () => void }) => (
  <button
    onClick={toggle}
    className="w-10 h-10 flex items-center justify-center rounded-full text-gray-600 dark:text-gray-400 hover:text-purple-600 hover:bg-gray-100 dark:hover:bg-white/10 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
    aria-label={isDark ? "Switch to Light Mode" : "Switch to Dark Mode"}
  >
    {isDark ? (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
    ) : (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" /></svg>
    )}
  </button>
);

const LogoIcon = ({ className, idSuffix = 'header' }: { className?: string, idSuffix?: string }) => (
  <svg viewBox="0 0 128 128" width="128" height="128" className={className} fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="CryptoWebBuild Logo" role="img">
    <defs>
      <linearGradient id={`logoGradient-${idSuffix}`} x1="0" y1="0" x2="128" y2="128" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#7C3AED" />
        <stop offset="50%" stopColor="#8B5CF6" />
        <stop offset="100%" stopColor="#06B6D4" />
      </linearGradient>
    </defs>
    <path d="M44 36C44 36 28 50 28 64C28 78 44 92 44 92" stroke={`url(#logoGradient-${idSuffix})`} strokeWidth="14" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M84 36C84 36 100 50 100 64C100 78 84 92 84 92" stroke={`url(#logoGradient-${idSuffix})`} strokeWidth="14" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M48 64H80" stroke={`url(#logoGradient-${idSuffix})`} strokeWidth="12" strokeLinecap="round" opacity="0.8" />
    <circle cx="28" cy="64" r="6" fill="currentColor" />
    <circle cx="100" cy="64" r="6" fill="currentColor" />
  </svg>
);

const SocialIcon = ({ d }: { d: string }) => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d={d} /></svg>
);

// --- Updated Social Links ---
const socialLinks = [
  { 
    label: 'YouTube', 
    href: 'https://www.youtube.com/@cryptowebbuild', 
    d: "M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" 
  },
  { 
    label: 'GitHub', 
    href: 'https://github.com/cryptowebbuild', 
    d: "M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" 
  },
  { 
    label: 'X (Twitter)', 
    href: 'https://x.com/CryptowebbuildX', 
    d: "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" 
  },
  { 
    label: 'Telegram', 
    href: 'https://t.me/CryptoWebBuild', 
    d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.48-1.02-2.4-1.62-1.06-.69-.37-1.07.23-1.68.16-.16 2.87-2.63 2.92-2.85.01-.03.01-.14-.06-.2-.06-.05-.16-.04-.23-.02-.1.02-1.72 1.1-4.86 3.22-.46.32-.88.47-1.25.46-.4-.01-1.18-.23-1.75-.38-.7-.18-1.26-.28-1.21-.6.03-.16.24-.32.65-.49 2.56-1.11 4.27-1.84 5.12-2.2 2.43-1.01 2.93-1.19 3.26-1.19.07 0 .23.02.33.09.09.08.12.19.13.29v.04z" 
  },
  { 
    label: 'Email', 
    href: 'mailto:hello@cryptowebbuild.com', 
    d: "M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" 
  }
];

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  
  // Initialize theme
  const [theme, setTheme] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('theme') || 'light';
    }
    return 'light';
  });
  
  const location = useLocation();

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => setTheme(prev => prev === 'dark' ? 'light' : 'dark');

  // Performance Optimized Scroll Handler
  useEffect(() => {
    let ticking = false;
    
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrolled(window.scrollY > 20);
          setShowScrollTop(window.scrollY > 500);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  // Close menu on route change & Scroll top
  useEffect(() => {
    setIsMenuOpen(false);
    window.scrollTo(0,0);
  }, [location.pathname]);

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/services', label: 'Services' },
    { path: '/projects', label: 'Work' },
    { path: '/videos', label: 'Videos' },
    { path: '/blog', label: 'Blog' },
    { path: '/about', label: 'About' },
  ];

  return (
    <div className="min-h-screen relative font-sans text-gray-900 dark:text-white overflow-x-hidden flex flex-col transition-colors duration-500">
      
      {/* --- Skip to Content Link (A11y) --- */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-6 focus:py-3 focus:bg-white focus:text-purple-600 focus:rounded-xl focus:shadow-2xl focus:outline-none focus:ring-4 focus:ring-purple-500 font-bold"
      >
        Skip to content
      </a>

      {/* --- Optimized Background --- */}
      <div className="fixed inset-0 z-0 bg-white dark:bg-[#020617] pointer-events-none overflow-hidden transition-colors duration-500">
        <div className="absolute top-[-10%] right-[-5%] w-[70vw] h-[70vw] bg-purple-300/30 dark:bg-purple-600/10 rounded-full blur-[120px] animate-blob mix-blend-multiply dark:mix-blend-screen transition-colors duration-1000 will-change-transform" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[70vw] h-[70vw] bg-cyan-300/30 dark:bg-blue-600/10 rounded-full blur-[120px] animate-blob animation-delay-2000 mix-blend-multiply dark:mix-blend-screen transition-colors duration-1000 will-change-transform" />
        <div className="absolute inset-0 opacity-[0.4] dark:opacity-[0.2]" style={{ backgroundImage: `linear-gradient(var(--grid-color) 1px, transparent 1px), linear-gradient(to right, var(--grid-color) 1px, transparent 1px)`, backgroundSize: '64px 64px' }}></div>
      </div>

      {/* --- HEADER --- */}
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-4`}>
        <div className="container mx-auto px-4 md:px-6">
          <nav className={`mx-auto max-w-7xl flex items-center justify-between px-5 py-3 rounded-2xl transition-all duration-500 relative z-50 ${scrolled ? 'bg-white/80 dark:bg-[#0f172a]/80 shadow-sm backdrop-blur-md border border-gray-200 dark:border-white/10' : 'bg-transparent'}`}>
            
            <Link to="/" className="flex items-center gap-3 group" aria-label="CryptoWebBuild Home">
              <div aria-hidden="true">
                <LogoIcon className="w-9 h-9 text-gray-900 dark:text-white" />
              </div>
              <span className="font-display font-bold text-xl tracking-tight text-gray-900 dark:text-white">CryptoWebBuild</span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <Link key={link.path} to={link.path} className={`px-4 py-2 text-sm font-semibold rounded-lg transition-colors ${location.pathname === link.path ? 'bg-gray-100 dark:bg-white/10 text-purple-600 dark:text-purple-400' : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-white/5'}`}>
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Actions */}
            <div className="flex items-center gap-3">
              <ThemeToggle isDark={theme === 'dark'} toggle={toggleTheme} />
              
              <Link to="/contact" className="hidden md:block px-5 py-2.5 bg-gray-900 text-white dark:bg-white dark:text-black font-bold rounded-xl text-sm hover:scale-105 transition-transform shadow-lg shadow-purple-500/10">
                Hire Me
              </Link>

              {/* Mobile Hamburger */}
              <button 
                onClick={() => setIsMenuOpen(!isMenuOpen)} 
                className="lg:hidden p-2 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-purple-500 bg-gray-100 dark:bg-white/10 rounded-lg"
                aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
              >
                <div className="w-5 h-4 flex flex-col justify-between relative">
                  <span className={`h-0.5 bg-current w-full rounded-full transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-[7px]' : ''}`} />
                  <span className={`h-0.5 bg-current w-full rounded-full transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`} />
                  <span className={`h-0.5 bg-current w-full rounded-full transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-[7px]' : ''}`} />
                </div>
              </button>
            </div>
          </nav>

          {/* Mobile Menu Dropdown */}
          <div className={`lg:hidden absolute top-full left-0 right-0 p-4 transition-all duration-300 ease-in-out z-40 ${isMenuOpen ? 'opacity-100 translate-y-0 visible' : 'opacity-0 -translate-y-4 pointer-events-none invisible'}`}>
            <div className="bg-white/90 dark:bg-[#0f172a]/90 backdrop-blur-xl border border-gray-200 dark:border-white/10 shadow-2xl rounded-3xl p-4 overflow-hidden">
              <div className="flex flex-col space-y-1">
                {navLinks.map((link) => (
                  <Link 
                    key={link.path} 
                    to={link.path} 
                    className={`block px-4 py-3 text-lg font-medium rounded-xl transition-colors ${location.pathname === link.path ? 'bg-purple-500/10 text-purple-600 dark:text-purple-400' : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-white/5 hover:text-gray-900 dark:hover:text-white'}`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
              
              <div className="pt-4 mt-4 border-t border-gray-200 dark:border-white/10">
                <div className="flex justify-center gap-6 mb-4">
                  {socialLinks.map((social) => (
                    <a 
                      key={social.label} 
                      href={social.href} 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-500 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors p-2"
                      aria-label={social.label}
                    >
                      <SocialIcon d={social.d} />
                    </a>
                  ))}
                </div>
                <Link 
                  to="/contact" 
                  className="flex items-center justify-center w-full px-6 py-4 bg-gray-900 text-white dark:bg-white dark:text-black font-bold rounded-xl text-lg shadow-lg"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Hire Me
                </Link>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main id="main-content" tabIndex={-1} className="relative z-10 flex-grow pt-20 md:pt-32 pb-24 focus:outline-none">{children}</main>

      {/* Scroll To Top Button */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-8 right-8 z-40 p-4 rounded-full bg-purple-600 text-white shadow-lg shadow-purple-500/30 transition-all duration-500 transform hover:scale-110 hover:bg-purple-500 focus:outline-none focus:ring-4 focus:ring-purple-500/50 ${showScrollTop ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0 pointer-events-none'}`}
        aria-label="Scroll to top"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 10l7-7m0 0l7 7m-7-7v18"></path></svg>
      </button>

      {/* --- FOOTER (Enhanced Internal Linking & Socials) --- */}
      <footer className="relative z-10 mt-32 bg-white dark:bg-[#0f172a] border-t border-gray-200 dark:border-white/5">
        <div className="container mx-auto px-6 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12">
            
            {/* 1. Brand & Socials */}
            <div className="lg:col-span-4 space-y-6">
              <Link to="/" className="flex items-center gap-3">
                <LogoIcon className="w-8 h-8 text-gray-900 dark:text-white" idSuffix="footer" />
                <span className="font-display font-bold text-2xl text-gray-900 dark:text-white">CryptoWebBuild</span>
              </Link>
              <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed max-w-sm">
                Forging the decentralized web with pixel-perfect precision. Specializing in high-performance Web3 interfaces.
              </p>
              
              <div className="flex gap-3 pt-2">
                {socialLinks.map((social) => (
                  <a 
                    key={social.label} 
                    href={social.href} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 text-gray-600 dark:text-gray-400 flex items-center justify-center hover:bg-purple-600 hover:text-white hover:border-purple-600 transition-all duration-300"
                    aria-label={social.label}
                  >
                    <SocialIcon d={social.d} />
                  </a>
                ))}
              </div>
            </div>

            {/* 2. Main Pages (Navigation) */}
            <div className="lg:col-span-2">
              <h3 className="font-display font-bold text-gray-900 dark:text-white mb-6 text-sm uppercase tracking-wider">Main Pages</h3>
              <ul className="space-y-3 text-gray-600 dark:text-gray-400 text-sm font-medium">
                {navLinks.map(link => (
                  <li key={link.path}><Link to={link.path} className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors">{link.label}</Link></li>
                ))}
              </ul>
            </div>

            {/* 3. Resources & Legal (Zero Orphan) */}
            <div className="lg:col-span-2">
              <h3 className="font-display font-bold text-gray-900 dark:text-white mb-6 text-sm uppercase tracking-wider">Resources</h3>
              <ul className="space-y-3 text-gray-600 dark:text-gray-400 text-sm font-medium">
                <li><Link to="/contact" className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors">Get a Quote</Link></li>
                <li><Link to="/faq" className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors">FAQ & Support</Link></li>
                <li><Link to="/privacy" className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors">Privacy Policy</Link></li>
                <li><Link to="/terms" className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors">Terms of Service</Link></li>
              </ul>
            </div>

            {/* 4. High-Value Guides (SEO Silo) */}
            <div className="lg:col-span-4">
              <h3 className="font-display font-bold text-gray-900 dark:text-white mb-6 text-sm uppercase tracking-wider">Growth Guides</h3>
              <ul className="grid grid-cols-1 gap-3 text-gray-600 dark:text-gray-400 text-sm font-medium">
                <li><Link to="/blog/crypto-marketing-guide" className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors flex items-center gap-2"><span className="text-cyan-500">★</span> 2026 Crypto Marketing Strategy</Link></li>
                <li><Link to="/blog/best-website-developer" className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors">Hiring the Best Developer</Link></li>
                <li><Link to="/blog/meme-coin-website-features" className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors">Viral Meme Coin Features</Link></li>
                <li><Link to="/blog/crypto-website-cost" className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors">Crypto Website Pricing</Link></li>
                <li><Link to="/blog/static-vs-dynamic-website" className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors">Static vs Dynamic Performance</Link></li>
                <li><Link to="/blog/solana-meme-coin-guide" className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors">Solana Meme Coin Guide</Link></li>
                <li><Link to="/blog/crypto-project" className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors">Launch a Crypto Project</Link></li>
                <li><Link to="/blog/presale-guide" className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors">Presale Launch Guide</Link></li>
                <li><Link to="/blog/crypto-seo-guide" className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors">Crypto SEO Mastery</Link></li>
                <li><Link to="/blog/website-builder-vs-developer" className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors">Website Builder vs Developer</Link></li>
              </ul>
            </div>
          </div>

          <div className="mt-16 pt-8 border-t border-gray-200 dark:border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-gray-600 dark:text-gray-400 text-sm font-medium">© 2025 CryptoWebBuild. All rights reserved.</p>
            <div className="flex gap-8 text-sm font-bold text-gray-600 dark:text-gray-400">
              <a href="https://github.com/cryptowebbuild" target="_blank" rel="noopener noreferrer" className="hover:text-gray-900 dark:hover:text-white transition-colors">GitHub</a>
              <a href="https://www.youtube.com/@cryptowebbuild" target="_blank" rel="noopener noreferrer" className="hover:text-gray-900 dark:hover:text-white transition-colors">YouTube</a>
              <a href="https://x.com/CryptowebbuildX" target="_blank" rel="noopener noreferrer" className="hover:text-gray-900 dark:hover:text-white transition-colors">X (Twitter)</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;