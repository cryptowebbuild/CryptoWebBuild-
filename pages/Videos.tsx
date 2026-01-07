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
    },
    {
      id: 'video-adzd',
      title: "Build a $3,000 Food Delivery App (DoorDash Clone)",
      desc: "Watch me build a complete Food Delivery platform (like Uber Eats) from scratch. Covering Frontend UI, Backend Database, and the 'No Code' tools used to ship fast.",
      url: "https://www.youtube.com/embed/ADZdY0_nQpU",
      link: "https://youtu.be/ADZdY0_nQpU",
      date: "Dec 28, 2025",
      highlights: [
        "Full-Stack Food Delivery Clone",
        "Frontend & Backend Integration",
        "Real-world $3000 Project Breakdown"
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
    <div className="container mx-auto px-6 pt-32 pb-20 bg-gray-50 dark:bg-[#020617] transition-colors duration-300 min-h-screen">
      
      {/* --- SEO Configuration --- */}
      <SEO 
        title="AI Coding Experiments & Tutorials | CryptoWebBuild"
        description="Watch AI coding experiments: Building apps on mobile, generative game design, and modern web development tutorials."
        keywords={['AI Coding Tutorials', 'Mobile Coding Guide', 'Build App without Laptop', 'Generative AI Coding']}
        canonical="/videos"
      />
      
      {/* Inject JSON-LD */}
      <script type="application/ld+json">
        {JSON.stringify(jsonLd)}
      </script>

      {/* --- Header --- */}
      <div className="text-center max-w-3xl mx-auto mb-20 animate-slide-up">
        <div className="inline-block px-4 py-1.5 mb-4 rounded-full bg-red-100 dark:bg-red-900/20 border border-red-200 dark:border-red-800 text-red-600 dark:text-red-400 text-xs font-bold tracking-wider uppercase shadow-sm">
          Tutorials & Experiments
        </div>
        <h1 className="font-display text-5xl md:text-6xl font-black text-gray-900 dark:text-white mb-6 leading-tight tracking-tight">
          AI Coding <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-orange-500">Experiments</span>
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed font-medium">
          Pushing the boundaries of what's possible with Generative AI, Mobile Development, and Game Design.
        </p>
      </div>

      {/* --- Video Grid --- */}
      <div className="space-y-24 max-w-5xl mx-auto">
        {videos.map((video, idx) => (
          <article 
            key={video.id} 
            className="group relative rounded-[32px] p-1 overflow-hidden transition-all duration-500 animate-slide-up bg-white dark:bg-[#1e293b] border border-gray-200 dark:border-white/10 shadow-xl"
            style={{ animationDelay: `${idx * 0.15}s` }}
          >
            {/* Background Glow */}
            <div className="absolute inset-0 bg-gradient-to-b from-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
            
            <div className="flex flex-col lg:flex-row gap-8 p-6 md:p-8 relative z-10">
              
              {/* Video Player Side */}
              <div className="w-full lg:w-2/3">
                <div className="relative pb-[56.25%] h-0 rounded-2xl overflow-hidden bg-black shadow-2xl border border-gray-200 dark:border-white/5 group-hover:shadow-[0_0_30px_rgba(124,58,237,0.2)] transition-shadow duration-500">
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
              <div className="w-full lg:w-1/3 flex flex-col justify-between">
                <div>
                    <div className="flex items-center gap-3 mb-4">
                        <span className="text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-widest">{video.date}</span>
                        <div className="h-px flex-1 bg-gray-200 dark:bg-white/10"></div>
                    </div>

                    <h2 className="font-display text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4 leading-tight group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                        {video.title}
                    </h2>
                    
                    <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed text-sm font-medium">
                        {video.desc}
                    </p>

                    {/* Highlights Box */}
                    <div className="bg-gray-100 dark:bg-black/20 border border-gray-200 dark:border-white/10 rounded-xl p-5 mb-6 hover:border-purple-500/30 transition-colors">
                        <h4 className="text-purple-600 dark:text-purple-400 text-xs font-bold uppercase tracking-wider mb-3 flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-purple-500 animate-pulse"></span>
                            Key Takeaways
                        </h4>
                        <ul className="space-y-2">
                            {video.highlights.map((item, i) => (
                            <li key={i} className="text-gray-700 dark:text-gray-300 text-sm flex items-start gap-2 font-medium">
                                <span className="text-purple-500 mt-1">▹</span>
                                {item}
                            </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className="flex flex-wrap gap-3 mt-4">
                  <a 
                    href={video.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-3 bg-red-600 hover:bg-red-700 text-white font-bold rounded-xl transition-all shadow-lg hover:-translate-y-0.5 text-sm"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/></svg>
                    Watch Now
                  </a>
                  <a 
                    href="https://youtube.com/@cryptowebbuild?sub_confirmation=1" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="px-6 py-3 bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 text-gray-900 dark:text-white hover:bg-gray-50 dark:hover:bg-white/10 font-bold rounded-xl transition-all text-sm"
                  >
                    Subscribe
                  </a>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* --- Bottom CTA --- */}
      <div className="mt-32 relative group max-w-4xl mx-auto text-center">
        <div className="relative p-12 md:p-20 rounded-[48px] bg-white dark:bg-[#1e293b] border border-gray-200 dark:border-white/10 overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-500/10 blur-[120px] rounded-full pointer-events-none"></div>
          
          <h2 className="relative z-10 font-display text-3xl md:text-5xl font-black text-gray-900 dark:text-white mb-6">
            Need a Custom App?
          </h2>
          <p className="relative z-10 text-gray-600 dark:text-gray-400 text-lg mb-10 max-w-2xl mx-auto font-medium">
            I build professional crypto websites, mobile apps, and AI-integrated solutions using the same tech stack shown in my videos.
          </p>
          <Link 
            to="/contact" 
            className="relative z-10 inline-flex items-center justify-center px-10 py-4 bg-gray-900 text-white dark:bg-white dark:text-black font-bold text-lg rounded-2xl hover:scale-105 transition-transform shadow-xl"
          >
            Hire Me
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Videos;