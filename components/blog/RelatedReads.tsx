import React, { useMemo } from 'react';
import { Link } from 'react-router-dom';
import { blogPosts } from '../../data/blogPosts';

interface RelatedReadsProps {
  currentSlug: string;
  keywords?: string[];
  category?: string;
}

const STOP = new Set([
  'the', 'and', 'for', 'with', 'from', 'that', 'this', 'your', 'you', 'are', 'how', 'why', 'what',
  'website', 'websites', 'cost', 'costs', '2026', 'build', 'building', 'guide', 'design', 'business',
  'development', 'developer', 'page', 'pages', 'site', 'sites', 'more', 'than', 'into', 'when',
]);

const tokenize = (value: string) =>
  value
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, ' ')
    .split(/\s+/)
    .filter((word) => word.length > 3 && !STOP.has(word));

const RelatedReads: React.FC<RelatedReadsProps> = ({ currentSlug, keywords = [], category }) => {
  const picks = useMemo(() => {
    const keywordTokens = new Set(keywords.flatMap(tokenize));
    const slugTokens = new Set(tokenize(currentSlug.replace(/-/g, ' ')));

    const scored = blogPosts
      .filter((post) => post.slug !== currentSlug)
      .map((post) => {
        const postKeywords = new Set(post.keywords.flatMap(tokenize));
        const postTitle = new Set(tokenize(post.title));

        let keywordHits = 0;
        postKeywords.forEach((token) => {
          if (keywordTokens.has(token)) keywordHits += 1;
        });

        let titleHits = 0;
        postTitle.forEach((token) => {
          if (keywordTokens.has(token) || slugTokens.has(token)) titleHits += 1;
        });

        let slugHits = 0;
        postKeywords.forEach((token) => {
          if (slugTokens.has(token)) slugHits += 1;
        });

        const score = keywordHits * 3 + titleHits + slugHits * 2 + (category && post.category === category ? 2 : 0);
        return { post, score, keywordHits };
      })
      .filter((entry) => entry.keywordHits > 0 || entry.score >= 4)
      .sort((a, b) => b.score - a.score)
      .slice(0, 3)
      .map((entry) => entry.post);

    if (scored.length >= 3) return scored;

    const fallback = blogPosts
      .filter((post) => post.slug !== currentSlug && !scored.some((p) => p.slug === post.slug))
      .filter((post) => (category ? post.category === category : true))
      .slice(0, 3 - scored.length);

    return [...scored, ...fallback];
  }, [currentSlug, keywords, category]);

  if (picks.length === 0) return null;

  return (
    <section className="mt-16" aria-labelledby="related-reads">
      <div className="flex items-center gap-3 mb-6">
        <h2 id="related-reads" className="font-display text-2xl font-black text-gray-900 dark:text-white tracking-tight">
          Related reads
        </h2>
        <span className="h-px flex-1 bg-gray-200 dark:bg-white/10" />
      </div>

      <div className="grid gap-4 sm:grid-cols-3">
        {picks.map((post) => (
          <Link
            key={post.slug}
            to={`/blog/${post.slug}`}
            className="group rounded-2xl border border-gray-200 dark:border-white/10 bg-white dark:bg-[#0f172a] overflow-hidden hover:border-indigo-400/50 transition-colors"
          >
            <div className="aspect-[16/9] overflow-hidden bg-gray-100 dark:bg-[#020617]">
              <img
                src={post.image.startsWith('/blog/covers/') ? post.image.replace('.webp', '-800.webp') : post.image}
                alt={post.title}
                width={800}
                height={450}
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500"
              />
            </div>
            <div className="p-4">
              <div className="text-[10px] font-mono font-bold uppercase tracking-widest text-indigo-600 dark:text-indigo-400 mb-2">
                {post.category}
              </div>
              <h3 className="font-display text-sm font-bold text-gray-900 dark:text-white leading-snug line-clamp-3 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                {post.title}
              </h3>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default RelatedReads;
