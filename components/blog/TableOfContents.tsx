import React, { useEffect, useState } from 'react';

const TableOfContents: React.FC = () => {
  const [headings, setHeadings] = useState<{ id: string; text: string; level: number }[]>([]);
  const [activeId, setActiveId] = useState<string>('');

  useEffect(() => {
    const elements = Array.from(document.querySelectorAll('h2, h3'))
      .map((elem) => ({
        id: elem.id,
        text: elem.textContent || '',
        level: Number(elem.tagName.substring(1))
      }));
    setHeadings(elements);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: '0px 0px -40% 0px' }
    );

    elements.forEach((heading) => {
      const el = document.getElementById(heading.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  if (headings.length === 0) return null;

  return (
    <div className="hidden lg:block w-72 h-fit max-h-[80vh] overflow-y-auto pr-4 scrollbar-hide">
      <div className="p-6 bg-white/50 dark:bg-white/5 rounded-3xl border border-gray-200 dark:border-white/10 backdrop-blur-xl">
        <h4 className="font-display font-black text-gray-900 dark:text-white mb-6 uppercase tracking-widest text-xs flex items-center gap-2">
            <svg className="w-4 h-4 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7"></path></svg>
            On This Page
        </h4>
        <ul className="space-y-4">
            {headings.map((heading) => (
            <li key={heading.id} style={{ paddingLeft: (heading.level - 2) * 12 }}>
                <a
                href={`#${heading.id}`}
                onClick={(e) => {
                    e.preventDefault();
                    document.getElementById(heading.id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }}
                className={`text-sm transition-all duration-300 block leading-tight ${
                    activeId === heading.id
                    ? 'text-purple-600 dark:text-purple-400 font-bold translate-x-1'
                    : 'text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:translate-x-1'
                }`}
                >
                {heading.text}
                </a>
            </li>
            ))}
        </ul>
      </div>
    </div>
  );
};

export default TableOfContents;
