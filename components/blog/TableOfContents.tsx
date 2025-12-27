import React, { useEffect, useState } from 'react';

const TableOfContents: React.FC = () => {
  const [headings, setHeadings] = useState<{ id: string; text: string; level: number }[]>([]);
  const [activeId, setActiveId] = useState<string>('');

  useEffect(() => {
    // Timeout ensures DOM is fully painted before querying
    const timer = setTimeout(() => {
        // Query only within the article content (avoiding footer/header headings)
        const contentArea = document.querySelector('article');
        if (!contentArea) return;

        const elements = Array.from(contentArea.querySelectorAll('h2, h3'));
        
        const mappedHeadings = elements.map((elem, index) => {
            // Auto-generate ID if missing
            if (!elem.id) {
                const text = elem.textContent || `section-${index}`;
                elem.id = text.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]/g, '');
            }
            return {
                id: elem.id,
                text: elem.textContent || '',
                level: Number(elem.tagName.substring(1))
            };
        });
        setHeadings(mappedHeadings);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: '-20% 0% -60% 0%' } // Optimized for reading flow
    );

    headings.forEach((heading) => {
      const element = document.getElementById(heading.id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, [headings]);

  if (headings.length === 0) return null;

  return (
    <div className="p-6 rounded-[24px] bg-white/50 dark:bg-[#1e293b]/50 backdrop-blur-xl border border-gray-200 dark:border-white/10 shadow-lg">
      <h4 className="flex items-center gap-3 font-display font-black text-xs uppercase tracking-widest text-gray-900 dark:text-white mb-6">
        <span className="flex h-2 w-2 rounded-full bg-purple-500 animate-pulse"></span>
        Content Navigator
      </h4>
      
      <div className="relative">
        {/* Vertical Track Line */}
        <div className="absolute left-[7px] top-2 bottom-2 w-[2px] bg-gray-200 dark:bg-white/10 rounded-full" />

        <ul className="space-y-4 relative">
            {headings.map((heading) => {
                const isActive = activeId === heading.id;
                return (
                    <li key={heading.id} className="relative group">
                        <a
                            href={`#${heading.id}`}
                            onClick={(e) => {
                                e.preventDefault();
                                document.getElementById(heading.id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                                setActiveId(heading.id); // Immediate feedback
                            }}
                            className={`flex items-start gap-4 text-sm transition-all duration-300 ${
                                isActive 
                                ? 'text-purple-600 dark:text-purple-400 font-bold translate-x-1' 
                                : 'text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:translate-x-1'
                            }`}
                            style={{ marginLeft: heading.level === 3 ? '16px' : '0px' }}
                        >
                            {/* Dot Indicator */}
                            <span className={`shrink-0 mt-1.5 w-3.5 h-3.5 rounded-full border-[3px] transition-colors duration-300 z-10 bg-white dark:bg-[#0f172a] ${
                                isActive 
                                ? 'border-purple-500 scale-110' 
                                : 'border-gray-300 dark:border-gray-600 group-hover:border-purple-300'
                            }`} />
                            
                            <span className="leading-snug">
                                {heading.text}
                            </span>
                        </a>
                    </li>
                );
            })}
        </ul>
      </div>
    </div>
  );
};

export default TableOfContents;