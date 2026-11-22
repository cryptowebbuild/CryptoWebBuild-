import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import ProjectScopeBuilder from '../components/ProjectScopeBuilder';

const Pricing: React.FC = () => {
  const faq = [
    {
      question: 'Is this a fixed price or an estimate?',
      answer:
        'The module prices are fixed. The total in the builder is an estimate until we confirm scope on a 15 minute call, after which it becomes a written fixed quote. Nothing is added later without your approval in writing.',
    },
    {
      question: 'What does the first 50% cover?',
      answer:
        'Design direction, build, checkout or backend work, and the staging deployment. It is the work up to the point where you can click through the real system on a private URL.',
    },
    {
      question: 'When is the final 50% due?',
      answer:
        'After you test the staging build on your own device: pages, forms, payments, and the admin screens you will actually use. The final payment releases the repository handover and the production deploy.',
    },
    {
      question: 'Can I add modules later?',
      answer:
        'Yes. Each module is priced separately, so adding technical SEO to a live storefront later costs the same as adding it at the start. The only difference is that some work is faster when done during the initial build.',
    },
    {
      question: 'Do you charge for hosting or maintenance?',
      answer:
        'No. Hosting runs on your own Cloudflare or Vercel account, usually free or a few dollars a month. Optional maintenance is a separate monthly arrangement you can cancel, and the site keeps working either way.',
    },
    {
      question: 'What if I only need one page?',
      answer:
        'A single landing page with a contact form is USD 350 to 550 (BDT 42,000 to 66,000) depending on copy and imagery. It is not in the builder because it is a smaller scope than the storefront module.',
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10 space-y-10">
      <SEO
        title="Pricing and Instant Estimate | CryptoWebBuild"
        description="Module pricing in USD and BDT for Next.js storefronts, checkout, Django, SEO, and automation. Fixed quote after a 15-minute scope call. 50% due after staging."
        canonical="/pricing"
        keywords={[
          'website pricing Bangladesh',
          'Next.js development cost',
          'bKash checkout integration price',
          'Django development price',
          'website cost Bangladesh 2026',
        ]}
        faq={faq}
      />

      <div className="max-w-3xl space-y-4">
        <div className="text-xs font-bold uppercase tracking-widest text-indigo-600 dark:text-indigo-400">
          Pricing
        </div>
        <h1 className="font-display text-3xl sm:text-5xl font-bold text-slate-900 dark:text-white tracking-tight">
          Price it before you talk to me.
        </h1>
        <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl">
          Module prices in both currencies. This is an estimate; it becomes a fixed quote after a 15 minute scope
          call. The final 50% is only due after you test the staging build.
        </p>
      </div>

      <ProjectScopeBuilder hideStep />

      <section className="grid gap-6 md:grid-cols-3">
        {[
          {
            step: '01',
            title: 'Scope call, 15 minutes',
            body: 'You describe the business and the bottleneck. I map it to modules and confirm what is genuinely needed, including the parts you can skip.',
          },
          {
            step: '02',
            title: 'Staging in 48 hours',
            body: 'The working build goes to a private URL. You test pages, checkout and admin on your own phone before any final payment is due.',
          },
          {
            step: '03',
            title: 'Handover, then support',
            body: 'Repository, domain, hosting and analytics move to your accounts at launch. Thirty days of bug fixes are included after go live.',
          },
        ].map((item) => (
          <div
            key={item.step}
            className="rounded-2xl border border-slate-200 dark:border-white/10 bg-white dark:bg-[#11131A] p-6"
          >
            <div className="text-xs font-mono font-bold text-indigo-600 dark:text-indigo-400 mb-3">{item.step}</div>
            <h2 className="font-display text-lg font-bold text-slate-900 dark:text-white mb-2">{item.title}</h2>
            <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">{item.body}</p>
          </div>
        ))}
      </section>

      <section className="rounded-2xl border border-slate-200 dark:border-white/10 bg-white dark:bg-[#11131A] p-6 sm:p-10">
        <h2 className="font-display text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white tracking-tight mb-4">
          What sits inside every build
        </h2>
        <div className="grid sm:grid-cols-2 gap-x-10 gap-y-3 text-sm text-slate-600 dark:text-slate-300">
          {[
            'Responsive layout tested on a real mid-range Android phone',
            'Semantic HTML with one H1 and a logical heading order',
            'Open Graph and Twitter cards with a proper 1200x630 image',
            'Sitemap, robots directives and per-page canonical URLs',
            'Compressed WebP images with explicit width and height',
            'Analytics events for forms and checkout steps',
            'Accessible focus states and keyboard navigation',
            'Deployment on your own hosting account, not mine',
          ].map((item) => (
            <div key={item} className="flex gap-2.5">
              <span className="text-emerald-500 font-bold shrink-0">+</span>
              <span>{item}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="rounded-2xl border border-slate-200 dark:border-white/10 bg-white dark:bg-[#11131A] p-6 sm:p-10">
        <h2 className="font-display text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white tracking-tight mb-6">
          Questions that come up before a deposit
        </h2>
        <div className="space-y-3">
          {faq.map((item) => (
            <details
              key={item.question}
              className="group rounded-xl border border-slate-200 dark:border-white/10 px-5 py-4"
            >
              <summary className="flex cursor-pointer list-none items-start justify-between gap-4">
                <span role="heading" aria-level={3} className="font-semibold text-sm sm:text-base text-slate-900 dark:text-white">
                  {item.question}
                </span>
                <span aria-hidden="true" className="text-indigo-500 text-lg leading-none transition-transform group-open:rotate-45">
                  +
                </span>
              </summary>
              <p className="mt-3 text-sm text-slate-600 dark:text-slate-300 leading-relaxed">{item.answer}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="rounded-2xl border border-slate-200 dark:border-white/10 bg-white dark:bg-[#11131A] p-6 sm:p-10">
        <h2 className="font-display text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white tracking-tight mb-3">
          Why the numbers are public
        </h2>
        <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed max-w-3xl">
          Most studios hide pricing so every conversation starts from zero. Publishing modules means you can budget
          before you email, compare against a cheaper quote line by line, and notice when something important is
          missing. If a competitor is 40% cheaper, check whether checkout, courier automation and performance work are
          inside their number.
        </p>
        <p className="mt-4 text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed max-w-3xl">
          The full reasoning, including the four price bands in BDT and what to refuse to pay for, is in{' '}
          <Link to="/blog/website-cost-bangladesh-2026" className="text-indigo-600 dark:text-indigo-400 font-semibold hover:underline">
            the 2026 website cost breakdown
          </Link>
          . For what gets built at each tier, see{' '}
          <Link to="/services/ecommerce-development-bangladesh" className="text-indigo-600 dark:text-indigo-400 font-semibold hover:underline">
            e-commerce development
          </Link>{' '}
          and{' '}
          <Link to="/projects" className="text-indigo-600 dark:text-indigo-400 font-semibold hover:underline">
            live case studies
          </Link>
          .
        </p>
      </section>

    </div>
  );
};

export default Pricing;
