import React from 'react';
import { Link } from 'react-router-dom';
import BlogPostLayout from '../../components/blog/BlogPostLayout';
import KeyTakeaways from '../../components/blog/KeyTakeaways';
import ProTip from '../../components/blog/ProTip';
import ExpertBox from '../../components/blog/ExpertBox';
import HireUsCTA from '../../components/blog/HireUsCTA';
import BlogFAQ from '../../components/blog/BlogFAQ';

const AiSearchCitationsGeoPlaybook: React.FC = () => {
  const takeaways = [
    'AI answers are assembled from passages, not pages. One clear, self-contained paragraph that answers the question outright is worth more than a long introduction.',
    'Three things decide whether you get cited: the page is crawlable without JavaScript, the answer is stated in the first two sentences of a section, and the facts are corroborated elsewhere on the web.',
    'Comparison tables, price ranges and step lists are cited far more often than opinion pieces, because they are easy to quote accurately.',
    'Schema markup does not guarantee a citation, but it removes ambiguity about who you are, what you sell and where you operate.',
    'Measure AI traffic by referrer: chatgpt.com, perplexity.ai, gemini.google.com and copilot.microsoft.com show up as separate sources in most analytics tools.',
  ];

  const faq = [
    {
      question: 'What is GEO, and is it different from SEO?',
      answer:
        'Generative Engine Optimization is the practice of structuring content so AI answer engines can extract and cite it. It overlaps heavily with SEO: crawlable HTML, clear headings, structured data and authoritative sourcing. The difference is emphasis on self-contained answer passages rather than keyword density and click-through.',
    },
    {
      question: 'Does blocking GPTBot hurt my business?',
      answer:
        'If your business depends on being recommended by assistants, yes. Blocking all AI crawlers removes you from that surface. Many publishers block training crawlers but allow retrieval crawlers. The decision should be deliberate and documented, not inherited from a template robots.txt.',
    },
    {
      question: 'How long does it take to appear in AI answers?',
      answer:
        'For branded questions, often days once the page is indexed. For competitive category questions, typically eight to sixteen weeks, because the model ecosystem needs repeated corroboration from independent sources before it treats you as a stable answer.',
    },
    {
      question: 'Do FAQ sections still help?',
      answer:
        'Yes, as content structure. A question-shaped heading followed by a two-sentence answer is exactly the shape a retrieval system wants. Note that Google restricted FAQ rich results to authoritative government and health sites in 2023, so the benefit is now extraction and clarity rather than a guaranteed SERP feature.',
    },
    {
      question: 'Should I write llms.txt?',
      answer:
        'It is a proposed convention, not an official standard, and support is inconsistent. It costs an hour and does no harm, but it is not a substitute for clean HTML, internal linking and a sitemap. Treat it as a nice-to-have.',
    },
  ];

  return (
    <BlogPostLayout
      title="AI Search Citations: How to Get Quoted by ChatGPT, Perplexity and AI Overviews"
      description="A practical GEO playbook for 2026: passage-level answers, entity consistency, schema, crawler access, comparison content and how to measure AI referrals without guessing."
      publishedTime="2026-11-22T11:00:00.000Z"
      modifiedTime="2026-11-22T11:00:00.000Z"
      category="Tech"
      image="/og-default.png"
      keywords={[
        'AI SEO 2026',
        'generative engine optimization',
        'get cited by ChatGPT',
        'AI Overviews optimization',
        'Perplexity SEO',
        'llms.txt',
        'answer engine optimization',
      ]}
      canonical="/blog/ai-search-citations-geo-playbook"
      faq={faq}
    >
      <KeyTakeaways points={takeaways} />

      <p className="lead text-xl md:text-2xl font-medium text-gray-700 dark:text-gray-300 leading-relaxed">
        To get cited by AI search engines, publish pages where each section opens with a direct, self-contained answer,
        keep the HTML readable without JavaScript, and make your business facts consistent everywhere they appear. The
        engine is looking for a sentence it can quote with confidence, not a brand story.
      </p>

      <p>
        This is the practical version. No mystery algorithm, no &ldquo;10x your AI traffic&rdquo; promises. It is the
        set of changes that reliably move a site from invisible in AI answers to occasionally quoted, and then to
        regularly quoted.
      </p>

      <h2>How an AI answer actually gets built</h2>

      <p>
        Most answer engines run a variation of the same loop: interpret the question, retrieve candidate passages from
        an index, rank them for relevance and reliability, then compose an answer with citations. You do not optimise
        for a ranking position. You optimise for being the passage that survives extraction.
      </p>

      <h3>Retrieval rewards specificity</h3>
      <p>
        A passage that says &ldquo;we build fast websites&rdquo; is unusable. A passage that says &ldquo;a storefront
        with 1-click bKash and COD checkout in Bangladesh costs BDT 84,000 and takes three to four days&rdquo; can be
        quoted verbatim. Numbers, places, timeframes and named tools are retrievable. Adjectives are not.
      </p>

      <h3>Composition rewards structure</h3>
      <p>
        Engines chunk pages by headings. If your H2 says &ldquo;Our Philosophy&rdquo; and the answer to the user&apos;s
        question is buried in paragraph six, the chunk that gets retrieved is the wrong one. If the H2 is the question
        and the first sentence is the answer, the chunk is self-sufficient.
      </p>

      <h3>Trust rewards corroboration</h3>
      <p>
        A claim that appears on one site is a claim. The same claim on your site, a directory, a trade body listing and
        two independent mentions is a fact. This is why local businesses with consistent name, address and phone across
        the web get picked up faster than a better-designed site with inconsistent details.
      </p>

      <h2>The answer-first block, with a real example</h2>

      <p>
        Every important section on your site should open with a 40 to 60 word answer that stands alone. After that,
        add the detail, the caveats and the proof.
      </p>

      <div className="my-8 rounded-2xl border border-gray-200 dark:border-white/10 bg-gray-50 dark:bg-white/[0.03] p-6">
        <div className="text-xs font-bold uppercase tracking-widest text-indigo-600 dark:text-indigo-400 mb-3">
          Weak version
        </div>
        <p className="text-gray-600 dark:text-gray-400 mb-5">
          &ldquo;Choosing the right e-commerce platform is one of the most important decisions a growing brand will
          make. There are many factors to consider, and every business is different...&rdquo;
        </p>
        <div className="text-xs font-bold uppercase tracking-widest text-emerald-600 dark:text-emerald-400 mb-3">
          Citable version
        </div>
        <p className="text-gray-800 dark:text-gray-200">
          &ldquo;A headless storefront on Next.js costs $450 (BDT 54,000) and loads in under 0.5 seconds on 4G. It suits
          catalogues of 20 to 200 products. A Django backend adds $400 when stock, dealer pricing or multi-user admin
          becomes necessary.&rdquo;
        </p>
      </div>

      <p>
        The second version will be quoted. It contains a price, a performance number, a catalogue range and a clear
        condition for the next step. It is also more useful to a human reader, which is the point.
      </p>

      <ProTip
        title="Write the answer, then delete the wind-up"
        tip="Most drafts open with two sentences of throat-clearing. Delete them and check whether the paragraph still makes sense. If it does, that is your answer-first block, and the deleted sentences were costing you citations."
      />

      <h2>Content types that get cited, ranked by hit rate</h2>

      <div className="my-8 overflow-x-auto rounded-2xl border border-gray-200 dark:border-white/10 bg-white dark:bg-white/[0.02]">
        <table className="w-full min-w-[520px] sm:min-w-0 text-sm border-collapse">
          <caption className="sm:hidden px-4 pt-3 pb-1 text-left text-[11px] font-medium text-gray-500 dark:text-gray-400">
            Swipe sideways to see every column.
          </caption>
          <thead>
            <tr className="border-b border-gray-200 dark:border-white/10 bg-gray-50 dark:bg-white/[0.04]">
              <th className="text-left py-3 px-4 font-bold text-gray-900 dark:text-white align-bottom">Format</th>
              <th className="text-left py-3 px-4 font-bold text-gray-900 dark:text-white align-bottom">Why it gets extracted</th>
              <th className="text-left py-3 px-4 font-bold text-gray-900 dark:text-white align-bottom">Effort</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 dark:divide-white/10">
            <tr>
              <td className="py-3 px-4 align-top">Price and cost breakdowns</td>
              <td className="py-3 px-4 align-top">Specific numbers answer the most common commercial question</td>
              <td className="py-3 px-4 align-top">Low</td>
            </tr>
            <tr>
              <td className="py-3 px-4 align-top">X vs Y comparison tables</td>
              <td className="py-3 px-4 align-top">Structured rows are easy to quote accurately</td>
              <td className="py-3 px-4 align-top">Low</td>
            </tr>
            <tr>
              <td className="py-3 px-4 align-top">Step-by-step technical guides</td>
              <td className="py-3 px-4 align-top">Ordered lists map to &ldquo;how do I&rdquo; questions</td>
              <td className="py-3 px-4 align-top">Medium</td>
            </tr>
            <tr>
              <td className="py-3 px-4 align-top">Definitions with one-sentence summaries</td>
              <td className="py-3 px-4 align-top">Direct match for &ldquo;what is&rdquo; queries</td>
              <td className="py-3 px-4 align-top">Low</td>
            </tr>
            <tr>
              <td className="py-3 px-4 align-top">Original data from your own projects</td>
              <td className="py-3 px-4 align-top">Nothing else to cite, so it becomes the source</td>
              <td className="py-3 px-4 align-top">High</td>
            </tr>
            <tr>
              <td className="py-3 px-4 align-top">Opinion and commentary</td>
              <td className="py-3 px-4 align-top">Rarely quoted without a factual anchor</td>
              <td className="py-3 px-4 align-top">Low value</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p>
        If you only have time for two formats, build a pricing page with real numbers and one honest comparison page
        against the alternative your customers are actually considering. Those two earn citations faster than a month
        of blog posts.
      </p>

      <h2>Entity clarity: the part most sites skip</h2>

      <p>
        Before an engine quotes you, it has to know who you are. That means one consistent identity across every surface
        it can see.
      </p>

      <ul>
        <li>
          <strong>One canonical name.</strong> Not a trading name on the site, a different one on LinkedIn and an
          abbreviation on directories.
        </li>
        <li>
          <strong>One phone number and address format.</strong> The same digits, the same country code, everywhere.
        </li>
        <li>
          <strong>Organization schema with <code>sameAs</code>.</strong> Links to your profiles tell the engine these
          accounts are the same entity.
        </li>
        <li>
          <strong>Service and area data.</strong> <code>areaServed</code> and <code>makesOffer</code> remove guesswork
          about what you actually sell and where.
        </li>
        <li>
          <strong>A real about page.</strong> A named person, a photograph, a location. Anonymous sites are harder to
          trust and harder to cite.
        </li>
      </ul>

      <p>
        Schema does not create authority, but it prevents misreading. The reference for the vocabulary is{' '}
        <a href="https://schema.org/Organization" target="_blank" rel="noopener noreferrer" className="text-indigo-600 dark:text-indigo-400 font-semibold hover:underline">
          schema.org
        </a>
        , and Google&apos;s documentation on{' '}
        <a href="https://developers.google.com/search/docs/appearance/ai-features" target="_blank" rel="noopener noreferrer" className="text-indigo-600 dark:text-indigo-400 font-semibold hover:underline">
          AI features in Search
        </a>{' '}
        explains how these surfaces relate to normal indexing.
      </p>

      <ExpertBox author="Sagor Ahamed" role="Lead Full-Stack and AI Architect" avatar="/hero-avatar.webp">
        &ldquo;The sites that get quoted are boring in the best way. Every section states a fact, then proves it. There
        is nothing for the model to misinterpret, which is exactly why it gets used.&rdquo;
      </ExpertBox>

      <h2>Technical requirements that are non-negotiable</h2>

      <h3>The answer must exist in the HTML</h3>
      <p>
        If your content only appears after a client-side fetch, a crawler that does not execute JavaScript sees an empty
        page. Server-rendered or pre-rendered HTML is the safe default. This is one reason static and Next.js builds
        outperform page builders in this channel.
      </p>

      <h3>Speed still matters</h3>
      <p>
        Retrieval systems have crawl budgets and timeouts. A page that takes six seconds to respond gets crawled less
        often. Google&apos;s{' '}
        <a href="https://web.dev/articles/lcp" target="_blank" rel="noopener noreferrer" className="text-indigo-600 dark:text-indigo-400 font-semibold hover:underline">
          LCP guidance
        </a>{' '}
        is a reasonable target for humans and crawlers alike.
      </p>

      <h3>Crawler access is a business decision</h3>
      <p>
        Check your robots.txt for inherited blocks on AI crawlers. If you want to be recommended, retrieval crawlers need
        access. If you publish content you sell, you may want to allow retrieval but block training. Either way, decide
        deliberately. OpenAI documents its crawlers at{' '}
        <a href="https://platform.openai.com/docs/bots" target="_blank" rel="noopener noreferrer" className="text-indigo-600 dark:text-indigo-400 font-semibold hover:underline">
          platform.openai.com/docs/bots
        </a>
        .
      </p>

      <h3>Internal links that describe the destination</h3>
      <p>
        &ldquo;Read more&rdquo; tells a retrieval system nothing. &ldquo;The 2026 website cost breakdown for
        Bangladesh&rdquo; tells it exactly what is on the other side. Anchor text is free context.
      </p>

      <h2>Measuring AI traffic without inventing numbers</h2>

      <p>
        AI referrals arrive with recognisable referrers. In GA4 or Plausible, build a segment for chatgpt.com,
        perplexity.ai, gemini.google.com, copilot.microsoft.com and claude.ai. Expect a small absolute number. The
        interesting metric is not volume, it is conversion rate: AI referrals tend to arrive pre-qualified because the
        user already received a summary.
      </p>

      <p>
        Watch two secondary signals. First, branded search volume in Search Console: when assistants mention you, people
        search your name afterwards. Second, direct traffic with no referrer, which is where many assistant clicks land.
        Neither is proof on its own, but together they show whether the channel is working.
      </p>

      <h2>A 30-day starting sequence</h2>

      <ol>
        <li>
          <strong>Days 1 to 3:</strong> audit robots.txt and confirm your key pages render without JavaScript.
        </li>
        <li>
          <strong>Days 4 to 7:</strong> add Organization or LocalBusiness schema with <code>sameAs</code> and correct
          service areas.
        </li>
        <li>
          <strong>Days 8 to 14:</strong> rewrite the top five commercial pages so each section opens with a direct
          answer.
        </li>
        <li>
          <strong>Days 15 to 21:</strong> publish one pricing page with real numbers and one comparison table against the
          realistic alternative.
        </li>
        <li>
          <strong>Days 22 to 30:</strong> fix name, address and phone consistency across directories, then set up the AI
          referrer segment in analytics.
        </li>
      </ol>

      <p>
        That sequence is unglamorous and it works. For the wider strategy behind it, including how this fits with normal
        search, read the{' '}
        <Link to="/blog/ai-seo-generative-engine-optimization-2026" className="text-indigo-600 dark:text-indigo-400 font-semibold hover:underline">
          AI SEO and GEO strategy guide
        </Link>
        . For local businesses, the{' '}
        <Link to="/blog/local-service-website-that-books-jobs" className="text-indigo-600 dark:text-indigo-400 font-semibold hover:underline">
          local service blueprint
        </Link>{' '}
        shows how this looks on a 20-page trade site.
      </p>

      <p>
        If you want the technical layer handled, the{' '}
        <Link to="/services/crypto-growth" className="text-indigo-600 dark:text-indigo-400 font-semibold hover:underline">
          technical SEO and GEO service
        </Link>{' '}
        covers schema, rendering, speed and the content structure in one build. You can also see the published numbers
        on the <Link to="/pricing" className="text-indigo-600 dark:text-indigo-400 font-semibold hover:underline">pricing page</Link>.
      </p>

      <BlogFAQ items={faq} />

      <HireUsCTA />
    </BlogPostLayout>
  );
};

export default AiSearchCitationsGeoPlaybook;
