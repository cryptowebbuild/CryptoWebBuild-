import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import OptimizedImage from '../components/OptimizedImage';

const About: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-[#020617] relative overflow-hidden transition-colors duration-500">
        <SEO
            title="About Sagor Ahamed | Senior Web3 Developer & Architect"
            description="Meet the developer behind CryptoWebBuild. 6+ years of experience in Full-Stack, Blockchain, and High-Performance Web Engineering."
            canonical="/about"
        />

        {/* Background Gradients */}
        <div className="fixed top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
            <div className="absolute top-[10%] right-[5%] w-[600px] h-[600px] bg-purple-500/10 blur-[100px] rounded-full mix-blend-multiply dark:mix-blend-screen animate-blob" />
            <div className="absolute bottom-[10%] left-[5%] w-[500px] h-[500px] bg-blue-500/10 blur-[100px] rounded-full mix-blend-multiply dark:mix-blend-screen animate-blob animation-delay-2000" />
        </div>

        <div className="container mx-auto px-4 md:px-6 pt-32 pb-24 relative z-10">
            
            {/* Header Section */}
            <div className="max-w-4xl mx-auto mb-20">
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-12 h-[2px] bg-purple-500"></div>
                  <span className="text-purple-500 font-bold uppercase tracking-widest text-sm">About Me</span>
                </div>
                <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-500">Architecting</span> the future of <br/>Web3 & Finance.
                </h1>
                <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
                  I am <strong className="text-gray-900 dark:text-white">Sagor Ahamed</strong>, a Senior Full-Stack Engineer with over 6 years of deep-dive experience in building scalable digital products.
                </p>
                <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                  I don't just write code; I build <strong>revenue-generating engines</strong>. From high-frequency trading dashboards to viral Solana meme coin launches, I understand the intersection of <em>Performance</em>, <em>Security</em>, and <em>User Psychology</em>.
                </p>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-6 mt-8">
                <div className="p-6 bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-2xl shadow-sm">
                  <div className="text-4xl font-black text-gray-900 dark:text-white mb-1">6+</div>
                  <div className="text-sm font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wide">Years Exp.</div>
                </div>
                <div className="p-6 bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-2xl shadow-sm">
                  <div className="text-4xl font-black text-purple-600 mb-1">$50M+</div>
                  <div className="text-sm font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wide">TVL Handled</div>
                </div>
                <div className="p-6 bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-2xl shadow-sm">
                  <div className="text-4xl font-black text-blue-500 mb-1">40+</div>
                  <div className="text-sm font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wide">Projects</div>
                </div>
                <div className="p-6 bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-2xl shadow-sm">
                  <div className="text-4xl font-black text-green-500 mb-1">100%</div>
                  <div className="text-sm font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wide">Success Rate</div>
                </div>
              </div>
            </div>

            {/* Bio Section */}
            <div className="mb-32 relative">
                 <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 transform -skew-y-2 rounded-3xl shadow-2xl opacity-90"></div>
                 <div className="relative bg-[#0f172a] rounded-3xl p-8 md:p-12 lg:p-16 flex flex-col md:flex-row items-center gap-12 overflow-hidden">
                    
                    {/* Decorative Circles */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>

                    <div className="w-48 h-48 md:w-64 md:h-64 shrink-0 rounded-full border-4 border-white/20 shadow-2xl overflow-hidden relative group">
                        <OptimizedImage
                            src="/hero-avatar.webp"
                            alt="Sagor Ahamed"
                            className="object-cover w-full h-full transform group-hover:scale-110 transition-transform duration-700"
                        />
                    </div>

                    <div className="text-center md:text-left">
                        <h2 className="text-white font-display font-bold text-2xl tracking-tight">Sagor Ahamed</h2>
                        <p className="text-purple-300 font-medium mb-6">Senior Web3 Engineer & Architect</p>
                        <p className="text-gray-300 leading-relaxed text-lg max-w-2xl">
                            "I believe in code that survives the hype cycle. Whether it's a smart contract holding millions or a landing page handling viral traffic, I build with <span className="text-white font-bold">Obsessive Precision</span>."
                        </p>

                        {/* Socials */}
                        <div className="flex flex-wrap justify-center md:justify-start gap-4 mt-8">
                            {[
                                { name: 'GitHub', url: 'https://github.com/cryptowebbuild', icon: 'M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z', color: 'bg-gray-800 text-white' },
                                { name: 'X / Twitter', url: 'https://x.com/CryptowebbuildX', icon: 'M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z', color: 'bg-black text-white' },
                                { name: 'YouTube', url: 'https://www.youtube.com/@cryptowebbuild', icon: 'M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z', color: 'bg-red-600 text-white' }
                            ].map(social => (
                                <a 
                                    key={social.name}
                                    href={social.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={`group flex items-center gap-3 pl-3 pr-4 py-2.5 rounded-xl text-white font-bold text-sm transition-all hover:scale-105 shadow-lg ${social.color} hover:shadow-xl`}
                                >
                                    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d={social.icon} /></svg>
                                    {social.name}
                                </a>
                            ))}
                        </div>
                    </div>
                 </div>
            </div>

            {/* Tech Stack */}
            <div className="mb-32">
                 <h2 className="text-3xl font-display font-bold text-gray-900 dark:text-white mb-12 text-center">Technical Arsenal</h2>
                 <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
                    {['React', 'Next.js', 'TypeScript', 'Node.js', 'Solana', 'Rust', 'Tailwind', 'PostgreSQL', 'Docker', 'AWS', 'GraphQL', 'Figma'].map(tech => (
                        <div key={tech} className="p-4 bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-xl flex items-center justify-center font-bold text-gray-700 dark:text-gray-300 shadow-sm hover:border-purple-500/50 hover:shadow-lg transition-all">
                            {tech}
                        </div>
                    ))}
                 </div>
            </div>

            {/* CTA Section */}
            <div className="relative py-24 overflow-hidden rounded-[3rem] text-center">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 opacity-90"></div>
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150"></div>

                <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
                <h2 className="font-display text-4xl font-bold text-white mb-6">Ready to work with the best?</h2>
                <p className="text-xl text-white/90 max-w-2xl mx-auto mb-10 leading-relaxed">
                    I am currently accepting new projects for <span className="text-white font-bold">Q4 2025</span>. If you need a developer who cares about your business growth as much as the code, let's talk.
                </p>
                <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 px-8 py-4 bg-white text-purple-600 font-black text-lg rounded-full shadow-2xl hover:bg-gray-100 hover:scale-105 transition-all"
                >
                    Start a Project
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                </Link>
                </div>
            </div>

        </div>
    </div>
  );
};

export default About;