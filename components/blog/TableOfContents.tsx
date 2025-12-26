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
    <div className="hidden lg:block w-72 sticky top-32 ml-12 h-fit max-h-[80vh] overflow-y-auto">
      <h4 className="font-display font-bold text-gray-900 dark:text-white mb-4 uppercase tracking-wider text-sm">Contents</h4>
      <ul className="space-y-3 border-l-2 border-gray-100 dark:border-white/5 pl-4">
        {headings.map((heading) => (
          <li key={heading.id} style={{ marginLeft: (heading.level - 2) * 12 }}>
            <a
              href={`#${heading.id}`}
              className={`text-sm transition-colors duration-200 block ${
                activeId === heading.id
                  ? 'text-purple-600 dark:text-purple-400 font-bold -ml-[18px] border-l-2 border-purple-500 pl-4'
                  : 'text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
              }`}
            >
              {heading.text}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TableOfContents;
