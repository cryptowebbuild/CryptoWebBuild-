import React from 'react';
import { Link } from 'react-router-dom';
import BlogPostLayout from '../../components/blog/BlogPostLayout';
import KeyTakeaways from '../../components/blog/KeyTakeaways';
import ProTip from '../../components/blog/ProTip';
import ExpertBox from '../../components/blog/ExpertBox';
import BlogFAQ from '../../components/blog/BlogFAQ';
import HireUsCTA from '../../components/blog/HireUsCTA';

const ShopifyVsCustomNextjs2026: React.FC = () => {
  const takeaways = [
    'Under 500 products, one country and one warehouse, Shopify is usually the cheaper decision. It is not a compromise, it is the correct tool.',
    'A custom Next.js storefront costs $700 to $1,600 (BDT 84,000 to 1,92,000) to build and roughly $0 to $20 a month to host. Shopify costs less upfront and more per month once apps stack up.',
    'The break-even is not about size. It is about checkout friction, page speed and how many third-party apps you need to match your market.',
    'In Bangladesh, bKash, Nagad and courier automation are first-class requirements. On Shopify they arrive as apps and manual steps. On a custom build they are part of the checkout.',
    'Migration is reversible. Run the storefront on Next.js and keep the operational stack you already trust, or keep Shopify and fix the theme and app bloat first.',
  ];

  const faq = [
    {
      question: 'Is Shopify cheaper than a custom website?',
      answer:
        'In year one, usually yes. A Shopify plan plus a paid theme plus five apps often lands under the cost of a custom build. By year two the subscription, apps and transaction fees can pass the one-time build cost of a custom storefront, especially at higher order volume.',
    },
    {
      question: 'Can I use bKash and Nagad on Shopify?',
      answer:
        'Only through third-party apps or manual payment capture, depending on your plan and region. That usually means a screenshot upload step, manual verification, and no true one-click flow. A custom checkout can call the bKash and Nagad APIs directly and confirm payment in the same screen.',
    },
    {
      question: 'Will a Next.js storefront be faster than Shopify?',
      answer:
        'It can be, because you control the render path, the JavaScript you ship and the image pipeline. A pre-rendered storefront commonly lands at 0.4 to 0.8 seconds LCP on 4G. A heavily apped Shopify theme typically sits between 2 and 4 seconds unless it is carefully rebuilt.',
    },
    {
      question: 'Do I lose SEO if I migrate?',
      answer:
        'Not if the migration preserves URLs, redirects the old paths, keeps titles and descriptions, and ships the same content. Traffic drops happen when a migration is treated as a redesign and nobody maps the old URLs to the new ones.',
    },
    {
      question: 'What about payments, tax and inventory?',
      answer:
        'A custom storefront still needs a source of truth for stock and orders. That is the Django or PostgreSQL layer in this stack. If you already run Shopify as that source of truth, a headless build can keep it and only replace the customer-facing layer.',
    },
  ];

  return (
    <BlogPostLayout
      title="Shopify vs Custom Next.js Storefront: 2026 Costs"
      description="What Shopify really costs over 24 months, where a custom Next.js storefront wins, and the checklist to run before you migrate either way."
      publishedTime="2026-11-22T14:00:00.000Z"
      modifiedTime="2026-11-22T14:00:00.000Z"
      category="Business"
      image="/projects/shopfast.webp"
      keywords={[
        'Shopify vs custom website',
        'Shopify vs Next.js storefront',
        'headless commerce 2026',
        'Shopify total cost of ownership',
        'custom ecommerce development Bangladesh',
        'Shopify to headless migration',
      ]}
      canonical="/blog/shopify-vs-custom-nextjs-2026"
      faq={faq}
    >
      <KeyTakeaways points={takeaways} />

      <p className="lead text-xl md:text-2xl font-medium text-gray-700 dark:text-gray-300 leading-relaxed">
        For a store under 500 products selling in one country, Shopify is usually the cheaper and faster decision. A
        custom Next.js storefront becomes the better choice when checkout friction, page speed or per-order costs are
        the bottleneck rather than the catalogue.
      </p>

      <p>
        This is not a pitch for custom code. Half the stores I look at should stay on Shopify and fix their theme and
        app stack first. The other half are paying for a platform that fights their market every day, usually because
        of payments or courier workflows.
      </p>

      <h2>What each option actually costs over 24 months</h2>

      <div className="my-8 overflow-x-auto rounded-2xl border border-gray-200 dark:border-white/10 bg-white dark:bg-white/[0.02]">
        <table className="w-full min-w-[520px] sm:min-w-0 text-sm border-collapse">
          <caption className="sm:hidden px-4 pt-3 pb-1 text-left text-[11px] font-medium text-gray-500 dark:text-gray-400">
            Swipe sideways to see every column.
          </caption>
          <thead>
            <tr className="border-b border-gray-200 dark:border-white/10 bg-gray-50 dark:bg-white/[0.04]">
              <th className="text-left py-3 px-4 font-bold text-gray-900 dark:text-white align-bottom">Line item</th>
              <th className="text-left py-3 px-4 font-bold text-gray-900 dark:text-white align-bottom">Shopify</th>
              <th className="text-left py-3 px-4 font-bold text-gray-900 dark:text-white align-bottom">Custom Next.js</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 dark:divide-white/10">
            <tr>
              <td className="py-3 px-4 align-top">Build cost</td>
              <td className="py-3 px-4 align-top">Theme plus setup, often $0 to $300</td>
              <td className="py-3 px-4 align-top tabular-nums whitespace-nowrap">$700 to $1,600</td>
            </tr>
            <tr>
              <td className="py-3 px-4 align-top">Platform fees</td>
              <td className="py-3 px-4 align-top">Monthly plan plus third-party gateway fee</td>
              <td className="py-3 px-4 align-top">Hosting, usually $0 to $20 a month</td>
            </tr>
            <tr>
              <td className="py-3 px-4 align-top">Apps</td>
              <td className="py-3 px-4 align-top">$19 to $99 each, five apps is normal</td>
              <td className="py-3 px-4 align-top">Built into the codebase, no per-app fee</td>
            </tr>
            <tr>
              <td className="py-3 px-4 align-top">Checkout control</td>
              <td className="py-3 px-4 align-top">Limited on non-Plus plans</td>
              <td className="py-3 px-4 align-top">Full, including local payment APIs</td>
            </tr>
            <tr>
              <td className="py-3 px-4 align-top">Speed ceiling</td>
              <td className="py-3 px-4 align-top">Depends on theme and app count</td>
              <td className="py-3 px-4 align-top">Set by your render and image choices</td>
            </tr>
            <tr>
              <td className="py-3 px-4 align-top">Ownership</td>
              <td className="py-3 px-4 align-top">Platform account, theme licence</td>
              <td className="py-3 px-4 align-top">Repository in your GitHub</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p>
        The honest reading: Shopify is cheaper to start and more expensive to keep. A custom build is the reverse. The
        question is which curve matches your order volume. At 200 orders a month, apps and platform fees are noise. At
        2,000 orders a month, they are a line item worth redesigning around.
      </p>

      <ProTip
        title="Count your apps before you count your products"
        tip="Open your Shopify admin and list every app with a monthly fee. If the total is above $150 a month, that is $1,800 a year, which is more than the difference between a theme and a proper storefront build."
      />

      <h2>Where Shopify is the right answer</h2>

      <ul>
        <li>
          <strong>You sell physical products with simple variants.</strong> Size, colour, weight. No configurators, no
          deposits, no quote requests.
        </li>
        <li>
          <strong>You want the operations handled.</strong> Inventory, tax, refunds, discounts and fulfilment in one
          admin, with a support team behind it.
        </li>
        <li>
          <strong>You are testing a market.</strong> A themed store in two weeks beats a custom build you cannot
          afford to iterate on.
        </li>
      </ul>

      <p>
        If those three describe you, the highest return work is not migration. It is removing apps that load scripts on
        every page, compressing images, and rewriting product pages so the first screen answers price, delivery and
        returns.
      </p>

      <h2>Where a custom storefront wins</h2>

      <h3>Local payments are the product</h3>
      <p>
        In Bangladesh, checkout means bKash, Nagad and cash on delivery with a confirmation step. On Shopify those
        arrive as apps, manual capture or screenshot verification, and every extra step costs completed orders. A
        custom checkout calls the payment APIs directly and confirms in one screen. The build is{' '}
        <Link to="/services/ecommerce-development-bangladesh" className="text-indigo-600 dark:text-indigo-400 font-semibold hover:underline">
          the e-commerce service
        </Link>
        , and the cost is published on the{' '}
        <Link to="/pricing" className="text-indigo-600 dark:text-indigo-400 font-semibold hover:underline">
          pricing page
        </Link>
        .
      </p>

      <h3>Courier automation</h3>
      <p>
        Steadfast, Pathao and RedX all have APIs. When an order is placed, the consignment should be created
        automatically. If a staff member is copying addresses into a portal, you are paying for that in salary and in
        returned parcels. This is the single most underrated reason BD stores move off hosted platforms.
      </p>

      <h3>Speed as a competitive edge</h3>
      <p>
        A pre-rendered storefront can hold 0.4 to 0.8 seconds LCP on 4G because there is no app script queue and no
        theme JavaScript you cannot remove. The{' '}
        <Link to="/shopfast" className="text-indigo-600 dark:text-indigo-400 font-semibold hover:underline">
          ShopFast case study
        </Link>{' '}
        documents that migration, including the 4.8 second starting point.
      </p>

      <ExpertBox author="Sagor Ahamed" role="Lead Full-Stack and AI Architect" avatar="/hero-avatar.webp">
        &ldquo;The migration question is rarely about design. It is almost always about the three steps between
        choosing a product and confirming an order. On a hosted platform you rent those steps. On your own storefront
        you own them.&rdquo;
      </ExpertBox>

      <h2>The part nobody prices: checkout friction</h2>

      <p>
        Take your current store and count the taps from product page to confirmed order. A good local flow is three:
        choose variant, enter phone and address, confirm. Every additional screen is a place where a buyer on a slow
        connection closes the tab.
      </p>

      <p>
        On a hosted platform, the checkout is a black box you can theme but not restructure. That is the trade: safety
        in exchange for control. It is a good trade until checkout becomes your biggest leak.
      </p>

      <h2>Migration without losing traffic</h2>

      <ol>
        <li>Export every product URL and map it to the new path, one to one.</li>
        <li>Keep titles, descriptions and H1s. A migration is not a rebrand.</li>
        <li>Redirect old paths with 301s and keep the sitemap clean.</li>
        <li>Verify Search Console coverage before and after, then compare for 30 days.</li>
        <li>Move the domain at low traffic hours and keep the old store reachable for a week.</li>
      </ol>

      <p>
        The mechanics are in the{' '}
        <Link to="/blog/woocommerce-to-headless-nextjs-migration-guide" className="text-indigo-600 dark:text-indigo-400 font-semibold hover:underline">
          WooCommerce to headless migration guide
        </Link>
        . The same discipline applies to Shopify.
      </p>

      <h2>The decision checklist</h2>

      <p>Move to a custom storefront if three or more of these are true:</p>
      <ul>
        <li>Checkout needs bKash or Nagad without manual verification.</li>
        <li>Orders must create courier consignments automatically.</li>
        <li>App subscriptions exceed $150 a month.</li>
        <li>Mobile LCP is above 2.5 seconds after theme cleanup.</li>
        <li>You need pricing logic a theme cannot express, such as dealer tiers or deposits.</li>
        <li>You want the code in your own repository, not a rented theme.</li>
      </ul>

      <p>
        Stay on Shopify if the list is mostly false. Fix the theme, cut the apps, and spend the difference on
        photography and ad creative. That is usually the higher return decision, and it is the one I recommend most
        often.
      </p>

      <BlogFAQ items={faq} />

      <HireUsCTA />
    </BlogPostLayout>
  );
};

export default ShopifyVsCustomNextjs2026;
