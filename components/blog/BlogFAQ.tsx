import React from 'react';

interface BlogFAQProps {
  items: Array<{ question: string; answer: string }>;
}

/**
 * Visible FAQ block. The same questions are passed to SEO as FAQPage schema,
 * so the on-page content and the structured data stay in sync.
 */
const BlogFAQ: React.FC<BlogFAQProps> = ({ items }) => {
  if (!items || items.length === 0) return null;

  return (
    <section className="my-16" aria-labelledby="faq-heading">
      <div className="flex items-center gap-3 mb-6">
        <span className="h-px flex-1 bg-gray-200 dark:bg-white/10" />
        <h2 id="faq-heading" className="font-display text-2xl md:text-3xl font-black text-gray-900 dark:text-white tracking-tight text-center">
          Frequently asked questions
        </h2>
        <span className="h-px flex-1 bg-gray-200 dark:bg-white/10" />
      </div>

      <div className="space-y-3">
        {items.map((item) => (
          <details
            key={item.question}
            className="group rounded-2xl border border-gray-200 dark:border-white/10 bg-white dark:bg-[#0f172a] px-5 py-4 open:border-indigo-300 dark:open:border-indigo-500/40 transition-colors"
          >
            <summary className="flex cursor-pointer list-none items-start justify-between gap-4 text-left">
              <span
                role="heading"
                aria-level={3}
                className="font-display text-base md:text-lg font-bold text-gray-900 dark:text-white leading-snug"
              >
                {item.question}
              </span>
              <span
                aria-hidden="true"
                className="mt-0.5 shrink-0 text-indigo-600 dark:text-indigo-400 text-xl leading-none transition-transform group-open:rotate-45"
              >
                +
              </span>
            </summary>
            <p className="mt-3 text-sm md:text-base text-gray-600 dark:text-gray-300 leading-relaxed">
              {item.answer}
            </p>
          </details>
        ))}
      </div>
    </section>
  );
};

export default BlogFAQ;
