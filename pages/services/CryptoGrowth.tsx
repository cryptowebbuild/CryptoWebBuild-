import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../../components/SEO';

const CryptoGrowth: React.FC = () => {
  const faq = [
    {
      question: 'How long before technical SEO shows results?',
      answer:
        'Technical fixes are usually indexed within two to four weeks. Content and entity work compounds over eight to sixteen weeks. Anyone promising page one in seven days is guessing, and your money is the test.',
    },
    {
      question: 'Do you guarantee a number one ranking?',
      answer:
        'No. Rankings depend on competitors, links and Google updates. What is guaranteed is the work: a crawlable site, correct schema, fast pages, clean internal linking, and a written list of what was changed and why.',
    },
    {
      question: 'What do you need access to?',
      answer:
        'Search Console, Google Analytics, the hosting account, and the repository. If the site is on WordPress or Shopify, admin access is enough for most of the technical work.',
    },
    {
      question: 'Is this only for new builds?',
      answer:
        'No. Roughly half of the work is on existing sites: fixing render-blocking scripts, repairing canonical errors, consolidating thin pages, and adding structured data. Existing traffic usually makes the wins visible faster.',
    },
    {
      question: 'How does AI search fit into this?',
      answer:
        'AI answers are built from crawlable passages with clear facts. That means server-rendered HTML, answer-first sections, consistent business data and structured markup. It is the same foundation as normal search, applied to extraction.',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-[#020617] pt-16 pb-24">
      <SEO
        title="Technical SEO, Speed Optimization & Growth Funnels | CryptoWebBuild"
        description="Technical SEO for local service businesses, stores and SaaS: Core Web Vitals, schema, crawl depth and AI search readiness, with a fixed scope."
        canonical="/services/crypto-growth"
        keywords={[
          'technical SEO service',
          'Core Web Vitals optimization',
          'local SEO for service businesses',
          'AI search optimization',
          'schema markup implementation',
          'Next.js SEO',
        ]}
        faq={faq}
      />

      <div className="container mx-auto px-6 max-w-5xl">
        <div className="inline-block px-4 py-1.5 mb-6 rounded-full bg-white dark:bg-white/5 border border-cyan-500/30 text-cyan-600 dark:text-cyan-400 text-sm font-bold tracking-wider uppercase shadow-sm">
          Technical SEO &amp; Conversion Funnels
        </div>
        <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-black text-gray-900 dark:text-white mb-8">
          Technical SEO &amp;{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-purple-600">
            Growth Funnels
          </span>
        </h1>
        <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mb-10 leading-relaxed">
          Technical SEO here means five things: pages that load fast, HTML a crawler can read without running
          JavaScript, structured data that matches reality, internal links that pass context, and content that answers
          one question per section. Everything else is commentary.
        </p>

        <section className="mb-12 grid gap-6 sm:grid-cols-2">
          {[
            {
              title: 'Speed and Core Web Vitals',
              body: 'LCP under 2.5 seconds on mobile, CLS near zero, no layout shift from late-loading images. Usually achieved by removing render-blocking scripts, compressing images and pre-rendering pages.',
            },
            {
              title: 'Crawlable HTML',
              body: 'Content that exists before JavaScript runs. Server rendering or pre-rendering, real links instead of onClick handlers, and a sitemap that matches what is actually indexable.',
            },
            {
              title: 'Structured data',
              body: 'Organization, LocalBusiness, Service, Product, FAQPage and BreadcrumbList where they are true. No markup for reviews that do not exist, no FAQ schema for content that is not on the page.',
            },
            {
              title: 'Entity consistency',
              body: 'One business name, one phone number, one address format across the site and the directories that matter. SameAs links to the profiles you actually maintain.',
            },
            {
              title: 'Content architecture',
              body: 'One page per service, one page per area you genuinely cover, and internal links with descriptive anchors. Thin pages get consolidated instead of multiplied.',
            },
            {
              title: 'AI search readiness',
              body: 'Answer-first sections, comparison tables, explicit numbers, and crawler access for retrieval bots. This is what makes a page quotable in an AI answer.',
            },
          ].map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-gray-200 dark:border-white/10 bg-white dark:bg-[#0f172a] p-6"
            >
              <h2 className="font-display text-lg font-bold text-gray-900 dark:text-white mb-2">{item.title}</h2>
              <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">{item.body}</p>
            </div>
          ))}
        </section>

        <section className="mb-12 rounded-[32px] border border-gray-200 dark:border-white/10 bg-white dark:bg-[#0f172a] p-8 md:p-10">
          <h2 className="font-display text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">
            What the engagement delivers
          </h2>
          <ul className="list-disc pl-6 space-y-3 text-gray-600 dark:text-gray-300">
            <li>A written audit of crawl, index, speed and schema issues, ordered by revenue impact.</li>
            <li>Implementation, not a slide deck. Code changes ship to your repository or your CMS.</li>
            <li>Structured data for Organization, Service, Product and FAQ, validated before launch.</li>
            <li>Internal linking map: which page links to which, with the anchor text to use.</li>
            <li>Search Console and Analytics wiring, including form and checkout events.</li>
            <li>A handover document listing every change, so the next developer is not guessing.</li>
          </ul>
        </section>

        <section className="mb-12 rounded-[32px] border border-gray-200 dark:border-white/10 bg-white dark:bg-[#0f172a] p-8 md:p-10">
          <h2 className="font-display text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-3">
            Two builds that show the pattern
          </h2>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-5">
            The two case studies answer different questions. One is a local service business that needed pages for
            every service and town. The other is a storefront that needed speed before anything else.
          </p>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-gray-200 dark:border-white/10 overflow-hidden">
              <img
                src="/projects/justimagine-hero.webp"
                alt="Just Imagine Heating homepage with Gas Safe registration and emergency call button"
                width={1600}
                height={1000}
                className="w-full h-auto"
                loading="lazy"
                decoding="async"
              />
              <div className="p-5">
                <h3 className="font-display font-bold text-gray-900 dark:text-white mb-1">Just Imagine Heating</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300 mb-3">
                  Six service pages, eight area pages, call-first mobile layout. Rugby, UK.
                </p>
                <Link to="/justimagine" className="text-sm font-bold text-cyan-600 dark:text-cyan-400 hover:underline">
                  Read the case study
                </Link>
              </div>
            </div>
            <div className="rounded-2xl border border-gray-200 dark:border-white/10 overflow-hidden">
              <img
                src="/projects/shopfast.webp"
                alt="ShopFast storefront with product card, speed score badge and add to cart button"
                width={1600}
                height={944}
                className="w-full h-auto"
                loading="lazy"
                decoding="async"
              />
              <div className="p-5">
                <h3 className="font-display font-bold text-gray-900 dark:text-white mb-1">ShopFast storefront</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300 mb-3">
                  WooCommerce at 4.8 seconds replaced with a pre-rendered storefront at 0.4 seconds.
                </p>
                <Link to="/shopfast" className="text-sm font-bold text-cyan-600 dark:text-cyan-400 hover:underline">
                  Read the case study
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-12 rounded-[32px] border border-gray-200 dark:border-white/10 bg-white dark:bg-[#0f172a] p-8 md:p-10">
          <h2 className="font-display text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">
            How the first three weeks run
          </h2>
          <ol className="space-y-4 text-gray-600 dark:text-gray-300">
            <li>
              <strong className="text-gray-900 dark:text-white">Week 1, measurement.</strong> Crawl the site, pull
              Search Console data, run mobile PageSpeed, and list every page that cannot be indexed or is competing
              with itself.
            </li>
            <li>
              <strong className="text-gray-900 dark:text-white">Week 2, fixes.</strong> Ship the technical changes:
              render path, canonicals, sitemap, schema, image weight, internal links. Nothing here is theoretical, it
              all lands in the repo.
            </li>
            <li>
              <strong className="text-gray-900 dark:text-white">Week 3, content and verification.</strong> Rewrite the
              money pages with answer-first sections, add the missing FAQ blocks, then confirm indexing and structured
              data validity.
            </li>
          </ol>
        </section>

        <section className="mb-12 rounded-[32px] border border-gray-200 dark:border-white/10 bg-white dark:bg-[#0f172a] p-8 md:p-10">
          <h2 className="font-display text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-6">
            Questions before you start
          </h2>
          <div className="space-y-3">
            {faq.map((item) => (
              <details
                key={item.question}
                className="group rounded-xl border border-gray-200 dark:border-white/10 px-5 py-4"
              >
                <summary className="flex cursor-pointer list-none items-start justify-between gap-4">
                  <span role="heading" aria-level={3} className="font-semibold text-sm sm:text-base text-gray-900 dark:text-white">
                    {item.question}
                  </span>
                  <span aria-hidden="true" className="text-cyan-500 text-lg leading-none transition-transform group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="mt-3 text-sm text-gray-600 dark:text-gray-300 leading-relaxed">{item.answer}</p>
              </details>
            ))}
          </div>
        </section>

        <section className="mb-12 rounded-[32px] border border-gray-200 dark:border-white/10 bg-white dark:bg-[#0f172a] p-8 md:p-10">
          <h2 className="font-display text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-3">
            Read before you hire anyone
          </h2>
          <div className="grid gap-3 sm:grid-cols-2 text-sm">
            {[
              { to: '/blog/ai-search-citations-geo-playbook', label: 'How AI answers choose sources' },
              { to: '/blog/local-service-website-that-books-jobs', label: 'The local service page structure' },
              { to: '/blog/hidden-cost-of-slow-websites', label: 'What slow pages cost in revenue' },
              { to: '/blog/local-business-website-seo-checklist', label: 'The local SEO checklist' },
            ].map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="rounded-xl border border-gray-200 dark:border-white/10 px-4 py-3 font-semibold text-gray-800 dark:text-gray-200 hover:border-cyan-500/40 transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </section>

        <div className="flex flex-wrap gap-4">
          <Link
            to="/contact"
            className="inline-block neon-button text-white font-bold py-4 px-8 rounded-xl shadow-lg"
          >
            Book a Technical SEO Audit
          </Link>
          <Link
            to="/pricing"
            className="inline-block bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 text-gray-900 dark:text-white font-bold py-4 px-8 rounded-xl hover:border-purple-500/40 transition"
          >
            See module pricing
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CryptoGrowth;
