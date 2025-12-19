import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

const Videos: React.FC = () => {
  const videos = [
    {
      id: 'android-app',
      title: "Build an Android App on Mobile (No Laptop!)",
      desc: "Full guide on creating a homework solver app using only a mobile phone and AI tools like Claude. No PC required.",
      url: "https://www.youtube.com/embed/nRlcTomEEqc",
      link: "https://youtu.be/nRlcTomEEqc",
      date: "Nov 04, 2025",
      highlights: [
        "Full mobile dev workflow setup",
        "Generating functional code with Claude AI",
        "Free hosting & monetization guide"
      ]
    },
    {
      id: 'gta-6-ai',
      title: "I Challenged AI to Build GTA 6 From Scratch",
      desc: "A coding battle between ChatGPT and Claude AI. ChatGPT attempts 3D while Claude builds a polished 2D shooter.",
      url: "https://www.youtube.com/embed/v2ypUO0cr7Q",
      link: "https://youtu.be/v2ypUO0cr7Q",
      date: "Nov 20, 2025",
      highlights: [
        "ChatGPT's 3D generation struggle",
        "Claude's advanced 2D game logic",
        "Implementing a 'Wanted' level system"
      ]
    },
    {
      id: 'sora-2-game',
      title: "I Asked Sora 2 to Make Video Games (Scary Real)",
      desc: "Testing Sora 2 AI to generate realistic gameplay footage for Minecraft, Roblox, GTA, and more. Is this the future of game engines?",
      url: "https://www.youtube.com/embed/erslja3K9TI",
      link: "https://youtu.be/erslja3K9TI",
      date: "Nov 26, 2025",
      highlights: [
        "Sora 2 vs Real Gameplay comparison",
        "Generating Minecraft physics",
        "The future of AI 'Dream' engines"
      ]
    }
  ];

  // Schema.org Structured Data
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "itemListElement": videos.map((video, index) => ({
      "@type": "VideoObject",
      "position": index + 1,
      "name": video.title,
      "description": video.desc,
      "uploadDate": "2025-11-20", // Generalized for static output
      "thumbnailUrl": `https://img.youtube.com/vi/${video.url.split('/').pop()}/maxresdefault.jpg`,
      "contentUrl": video.link,
      "embedUrl": video.url
    }))
  };

  return (
    <div className="container mx-auto px-6 pt-32 pb-20">
      <SEO 
        title="AI Coding Experiments & Tutorials | CryptoWebBuild"
        description="Watch AI coding experiments: Building apps on mobile, generative game design, and modern web development tutorials."
      />
      
      {/* Inject JSON-LD */}
      <script type="application/ld+json">
        {JSON.stringify(jsonLd)}
      </script>

      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-20 animate-slide-up">
        <div className="inline-block px-4 py-1.5 mb-4 rounded-full bg-red-900/20 border border-red-800 text-red-400 text-xs font-bold tracking-wider uppercase shadow-sm">
          Tutorials & Experiments
        </div>
        <h1 className="font-display text-5xl md:text-6xl font-bold text-text-main mb-6 leading-tight">
          AI Coding <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500">Experiments</span>
        </h1>
        <p className="text-lg text-text-muted leading-relaxed">
          Pushing the boundaries of what's possible with Generative AI, Mobile Development, and Game Design.
        </p>
      </div>

      {/* Video Grid */}
      <div className="space-y-24">
        {videos.map((video, idx) => (
          <article 
            key={video.id} 
            className="group relative glass-panel rounded-[32px] p-1 border border-white/10 overflow-hidden hover:border-purple-500/50 transition-all duration-500 animate-slide-up bg-surface"
            style={{ animationDelay: `${idx * 0.15}s` }}
          >
            {/* Background Glow */}
            <div className="absolute inset-0 bg-gradient-to-b from-purple-900/10 to-surface opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            
            <div className="flex flex-col lg:flex-row gap-8 bg-surface/50 backdrop-blur-xl rounded-[28px] p-6 md:p-8 relative z-10">
              
              {/* Video Player Side */}
              <div className="w-full lg:w-2/3">
                <div className="relative pb-[56.25%] h-0 rounded-2xl overflow-hidden bg-black shadow-2xl shadow-purple-900/10 border border-white/5 group-hover:shadow-[0_0_30px_rgba(124,58,237,0.2)] transition-shadow duration-500">
                  <iframe 
                    src={`${video.url}?rel=0&modestbranding=1`} 
                    title={video.title}
                    className="absolute top-0 left-0 w-full h-full border-0"
                    allowFullScreen
                    loading="lazy"
                  />
                </div>
              </div>

              {/* Content Side */}
              <div className="w-full lg:w-1/3 flex flex-col">
                <div className="flex items-center gap-3 mb-4">
                   <span className="text-xs font-bold text-text-muted uppercase tracking-widest">{video.date}</span>
                   <div className="h-px flex-1 bg-white/10"></div>
                </div>

                <h2 className="font-display text-2xl md:text-3xl font-bold text-text-main mb-4 leading-tight group-hover:text-purple-400 transition-all">
                  {video.title}
                </h2>
                
                <p className="text-text-muted mb-6 leading-relaxed text-sm">
                  {video.desc}
                </p>

                {/* Highlights Box */}
                <div className="mt-auto bg-surface-highlight/50 border border-white/10 rounded-xl p-5 mb-6 hover:bg-white/5 transition-colors">
                  <h4 className="text-cyan-400 text-xs font-bold uppercase tracking-wider mb-3 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-500 animate-pulse"></span>
                    Key Takeaways
                  </h4>
                  <ul className="space-y-2">
                    {video.highlights.map((item, i) => (
                      <li key={i} className="text-text-muted text-sm flex items-start gap-2">
                        <span className="text-purple-500 mt-1">▹</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-wrap gap-3">
                  <a 
                    href={video.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 text-white font-bold rounded-xl transition-all shadow-lg shadow-red-900/20 hover:-translate-y-0.5 text-sm"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/></svg>
                    Watch Now
                  </a>
                  <a 
                    href="https://youtube.com/@cryptowebbuild?sub_confirmation=1" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="px-6 py-3 bg-surface border border-white/10 text-text-main hover:bg-surface-highlight font-bold rounded-xl transition-all text-sm hover:border-white/20"
                  >
                    Subscribe
                  </a>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* Bottom CTA */}
      <div className="mt-32 relative group">
        <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-[32px] blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
        <div className="relative glass-panel p-12 md:p-20 rounded-[32px] text-center overflow-hidden bg-surface/90">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-cyan-500/10 blur-[120px] rounded-full pointer-events-none"></div>
          
          <h2 className="relative z-10 font-display text-3xl md:text-5xl font-bold text-text-main mb-6">
            Need a Custom Website or App?
          </h2>
          <p className="relative z-10 text-text-muted text-lg mb-10 max-w-2xl mx-auto">
            I build professional crypto websites, mobile apps, and AI-integrated solutions using the same tech stack shown in my videos.
          </p>
          <Link 
            to="/contact" 
            className="relative z-10 inline-flex items-center justify-center px-10 py-4 bg-text-main text-surface font-bold text-lg rounded-2xl hover:scale-105 transition-transform shadow-xl shadow-purple-500/10"
          >
            Hire Me
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Videos;