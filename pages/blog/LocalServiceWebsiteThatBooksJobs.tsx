import React from 'react';
import { Link } from 'react-router-dom';
import BlogPostLayout from '../../components/blog/BlogPostLayout';
import KeyTakeaways from '../../components/blog/KeyTakeaways';
import ProTip from '../../components/blog/ProTip';
import ExpertBox from '../../components/blog/ExpertBox';
import HireUsCTA from '../../components/blog/HireUsCTA';
import BlogFAQ from '../../components/blog/BlogFAQ';

const LocalServiceWebsiteThatBooksJobs: React.FC = () => {
  const takeaways = [
    'A local service site books jobs when three things are true: every service has its own page, every town you actually cover has its own page, and the phone number is on screen before the first scroll.',
    'One-page sites fail because they answer one question. A blocked boiler, a landlord certificate and a bathroom leak are three different searches with three different intents.',
    'Area pages are not the problem. Thin area pages are. If 80% of a town page is copied from the service page, it deserves to be ignored.',
    'Mobile is the whole business. Most emergency searches happen on a phone, often one-handed, often on a slow connection at night.',
    'Track calls and forms separately. A site with 400 visits and 2 calls is a design problem. A site with 40 visits and 6 calls is a traffic problem. The fixes are not the same.',
  ];

  const faq = [
    {
      question: 'How many pages does a plumber or heating engineer need?',
      answer:
        'Six service pages, one page for each town you genuinely cover, one proof page, one contact page and a FAQ page. That is roughly 15 to 20 pages. Fewer than that and you are asking one page to rank for a dozen different searches.',
    },
    {
      question: 'Do area pages still work in 2026, or are they penalised?',
      answer:
        'Area pages work when each one carries information that only applies to that town: coverage radius, response times, local jobs, parking or access notes, and the services you actually deliver there. They stop working when they are the same paragraph with the town name swapped.',
    },
    {
      question: 'Should the site have a contact form or just a phone number?',
      answer:
        'Both, plus WhatsApp. Emergencies go to the phone. Planned work goes to a form or WhatsApp with a photo. The form should ask for three fields only: name, phone, and what needs fixing.',
    },
    {
      question: 'How fast does a local service site need to load?',
      answer:
        'Under 1.5 seconds on a mid-range Android phone on 4G for the first screen. Google measures this as LCP, and anything above 2.5 seconds is rated poor. A static site with compressed images gets there without a server.',
    },
    {
      question: 'Does a local business need AI SEO?',
      answer:
        'It needs to be readable by AI answer engines, which mostly means clean HTML, one clear answer per section, structured data with your service area, and consistent business details across the web. That is the same work that helps normal search.',
    },
  ];

  return (
    <BlogPostLayout
      title="The Local Service Website That Books Jobs: 2026 Blueprint for Trades"
      description="How plumbers and heating engineers turn local searches into calls: service pages, area pages, mobile call paths and local schema."
      publishedTime="2026-11-22T10:00:00.000Z"
      modifiedTime="2026-11-22T10:00:00.000Z"
      category="Guide"
      image="/projects/justimagine-hero.webp"
      keywords={[
        'local service website design',
        'plumber website that generates leads',
        'heating engineer website',
        'local business website structure',
        'service area pages SEO',
        'local service website conversion',
      ]}
      canonical="/blog/local-service-website-that-books-jobs"
      faq={faq}
    >
      <KeyTakeaways points={takeaways} />

      <p className="lead text-xl md:text-2xl font-medium text-gray-700 dark:text-gray-300 leading-relaxed">
        A local service website books jobs when every service has its own page, every town you actually cover has its
        own page, and a phone number is visible before the visitor scrolls. Design matters, but structure is what
        decides whether the site answers the search that brought someone there.
      </p>

      <p>
        This is the blueprint we used for{' '}
        <Link to="/justimagine" className="text-indigo-600 dark:text-indigo-400 font-semibold hover:underline">
          Just Imagine Heating
        </Link>
        , a Gas Safe engineer in Rugby: six service pages, eight area pages, a proof section, and a call-first mobile
        layout. It applies to plumbers, electricians, roofers, locksmiths and any trade where the customer has an
        urgent problem and a short list of options.
      </p>

      <h2>Why most trade websites get visits but no calls</h2>

      <p>
        Three failures account for almost all of it, and none of them are about colour or animation.
      </p>

      <h3>1. The whole business is on one page</h3>
      <p>
        A one-page site answers one question. But &ldquo;boiler not firing&rdquo;, &ldquo;landlord gas safety
        certificate&rdquo; and &ldquo;leaking radiator valve&rdquo; are three different people with three different
        levels of urgency. When they all land on the same block of text, each of them has to work out whether you do
        their job. Most do not bother.
      </p>

      <h3>2. The only contact path is a form</h3>
      <p>
        Someone with no hot water and a house full of people is not filling in a five-field form and waiting for an
        email. They are calling the first number they see. If your number sits in the footer, they call someone else
        first.
      </p>

      <h3>3. There is no proof above the fold</h3>
      <p>
        Registration numbers, insurance, years in the area, and a photograph of an actual person do more work than any
        headline. A visitor is deciding whether you are safe to let into their home. Answer that before you ask them to
        scroll.
      </p>

      <h2>The page map that covers the searches</h2>

      <div className="my-8 overflow-x-auto rounded-2xl border border-gray-200 dark:border-white/10 bg-white dark:bg-white/[0.02]">
        <table className="w-full min-w-[520px] sm:min-w-0 text-sm border-collapse">
          <caption className="sm:hidden px-4 pt-3 pb-1 text-left text-[11px] font-medium text-gray-500 dark:text-gray-400">
            Swipe sideways to see every column.
          </caption>
          <thead>
            <tr className="border-b border-gray-200 dark:border-white/10 bg-gray-50 dark:bg-white/[0.04]">
              <th className="text-left py-3 px-4 font-bold text-gray-900 dark:text-white align-bottom">Page</th>
              <th className="text-left py-3 px-4 font-bold text-gray-900 dark:text-white align-bottom">Search it answers</th>
              <th className="text-left py-3 px-4 font-bold text-gray-900 dark:text-white align-bottom">Primary action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 dark:divide-white/10">
            <tr>
              <td className="py-3 px-4 align-top">Home</td>
              <td className="py-3 px-4 align-top">&ldquo;heating engineer near me&rdquo;</td>
              <td className="py-3 px-4 align-top">Call</td>
            </tr>
            <tr>
              <td className="py-3 px-4 align-top">Service pages, one per job</td>
              <td className="py-3 px-4 align-top">&ldquo;boiler repair&rdquo;, &ldquo;boiler installation&rdquo;, &ldquo;CP12 certificate&rdquo;</td>
              <td className="py-3 px-4 align-top">Call or quote</td>
            </tr>
            <tr>
              <td className="py-3 px-4 align-top">Area pages, one per town</td>
              <td className="py-3 px-4 align-top">&ldquo;boiler repair Coventry&rdquo;</td>
              <td className="py-3 px-4 align-top">Call</td>
            </tr>
            <tr>
              <td className="py-3 px-4 align-top">Proof and about</td>
              <td className="py-3 px-4 align-top">Brand name searches, &ldquo;is this company legit&rdquo;</td>
              <td className="py-3 px-4 align-top">Trust</td>
            </tr>
            <tr>
              <td className="py-3 px-4 align-top">FAQ</td>
              <td className="py-3 px-4 align-top">Price, timing, coverage, guarantees</td>
              <td className="py-3 px-4 align-top">Remove the last doubt</td>
            </tr>
            <tr>
              <td className="py-3 px-4 align-top">Contact or quote</td>
              <td className="py-3 px-4 align-top">&ldquo;emergency plumber&rdquo; plus intent to book</td>
              <td className="py-3 px-4 align-top">Book</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p>
        That is roughly 15 to 20 pages for a single engineer. It sounds like a lot until you notice you are not writing
        20 essays, you are writing six service explanations and eight local variations with real local detail.
      </p>

      <h2>What goes on a service page that actually converts</h2>

      <p>
        A service page has one job: confirm you do this exact job, in this exact area, at a price the visitor can
        roughly predict. The order below is the order a nervous customer thinks in.
      </p>

      <ol>
        <li>
          <strong>An H1 that names the job and the place.</strong> &ldquo;Boiler repair in Rugby&rdquo; beats
          &ldquo;Our Services&rdquo;. It also matches how people search.
        </li>
        <li>
          <strong>Two sentences on what happens next.</strong> Who arrives, how quickly, and what it costs to find out
          what is wrong.
        </li>
        <li>
          <strong>A price range, not a mystery.</strong> A diagnostic fee, a typical repair range, and a note that the
          final price is confirmed before work starts.
        </li>
        <li>
          <strong>What is included.</strong> Parts, testing, certification, cleanup, and whether the work is guaranteed.
        </li>
        <li>
          <strong>Proof.</strong> Registration number, insurance, a photograph, a recent job in the same town.
        </li>
        <li>
          <strong>Five questions answered.</strong> The same five that come up on every call. These become your FAQ
          schema as well.
        </li>
        <li>
          <strong>A sticky call bar on mobile.</strong> Not a chat widget that covers the number.
        </li>
      </ol>

      <ProTip
        title="Write the H2s as the questions people ask on the phone"
        tip="Pull your last 20 enquiry calls and write down the first sentence each caller said. Those sentences are your headings. They are also the phrases AI assistants quote when someone asks a similar question."
      />

      <h2>Area pages without the thin-content problem</h2>

      <p>
        Area pages get a bad reputation because most of them are the same page with a different town name. That version
        deserves to be ignored. A real area page carries information that is only true for that place.
      </p>

      <ul>
        <li>Which services you actually deliver there, not the full menu by default.</li>
        <li>Realistic response time from your base, including the honest caveat about traffic or distance.</li>
        <li>Local detail: housing stock, common boiler types, parking and access quirks, local landmarks for orientation.</li>
        <li>One or two jobs completed nearby, described without inventing customer names.</li>
        <li>Internal links to the two or three service pages most requested in that town.</li>
        <li>Structured data with <code>areaServed</code> matching the town, not the whole country.</li>
      </ul>

      <p>
        If a town page cannot fill 400 words of genuinely local content, you do not need that page yet. Publish the
        towns you genuinely cover and expand when you have real jobs to describe. Google&apos;s guidance on{' '}
        <a href="https://developers.google.com/search/docs/appearance/structured-data/local-business" target="_blank" rel="noopener noreferrer" className="text-indigo-600 dark:text-indigo-400 font-semibold hover:underline">
          LocalBusiness structured data
        </a>{' '}
        is worth reading before you template 30 towns at once.
      </p>

      <ExpertBox author="Sagor Ahamed" role="Lead Full-Stack and AI Architect" avatar="/hero-avatar.webp">
        &ldquo;Every trade site I audit has the same missing page: the one for the job that pays best. They write five
        hundred words about being family run and nothing about the certificate a landlord needs before Friday.&rdquo;
      </ExpertBox>

      <h2>Mobile is the business, not a breakpoint</h2>

      <p>
        Most emergency searches happen on a phone, often one-handed, often late. Four details decide whether that
        person becomes a call or a bounce.
      </p>

      <h3>Tap to call, always visible</h3>
      <p>
        A fixed bar at the bottom of the screen with one number and one label. No menu, no accordion, no &ldquo;contact
        us&rdquo; link. Thumb reach matters more than symmetry.
      </p>

      <h3>WhatsApp with the message already written</h3>
      <p>
        A pre-filled message containing the postcode and the problem turns a chat into a two-tap job. Something like
        &ldquo;Hi, boiler issue at CV22, no hot water since this morning&rdquo; removes the blank-screen hesitation that
        kills half of WhatsApp enquiries.
      </p>

      <h3>A three-field callback form</h3>
      <p>
        Name, phone, what needs fixing. Every additional field costs completions. Postcode can come on the call. If you
        need photos, ask for them in the WhatsApp thread after first contact.
      </p>

      <h3>Fast first paint on a real phone</h3>
      <p>
        Compressed images, no carousel of stock photos, no video hero. A static page with system fonts and two images
        will beat a page-builder site every time on a mid-range Android. This is the same argument as{' '}
        <Link to="/blog/hidden-cost-of-slow-websites" className="text-indigo-600 dark:text-indigo-400 font-semibold hover:underline">
          the hidden cost of slow websites
        </Link>
        , applied to a business where the visitor is standing in a cold kitchen.
      </p>

      <h2>What we shipped for Just Imagine Heating</h2>

      <p>
        The Rugby build has six service pages (boiler repair, installation, servicing, landlord CP12, radiators and
        heating, plumbing and leaks), eight area pages covering Rugby, Coventry, Leicester, Northampton, Leamington Spa,
        Warwick, Kenilworth and Milton Keynes, plus a proof section, an FAQ page and a quote page.
      </p>

      <ul>
        <li>Gas Safe registration above the fold, with the number readers can verify themselves.</li>
        <li>Three contact paths: call, WhatsApp with a 10 second quote prompt, and a callback form.</li>
        <li>Static HTML and CSS, so the first screen arrives fast on a phone with two bars of signal.</li>
        <li>Cookie consent that sets nothing unless accepted.</li>
      </ul>

      <p>
        The full breakdown, including the screenshots and the page structure, is on the{' '}
        <Link to="/justimagine" className="text-indigo-600 dark:text-indigo-400 font-semibold hover:underline">
          Just Imagine case study
        </Link>
        . If you run a local trade and want the same structure, the{' '}
        <Link to="/services/crypto-growth" className="text-indigo-600 dark:text-indigo-400 font-semibold hover:underline">
          technical SEO service page
        </Link>{' '}
        covers the build side.
      </p>

      <h2>Local SEO in 2026 is three surfaces, not one</h2>

      <h3>The map pack</h3>
      <p>
        Your Google Business Profile does more for emergency searches than the website does. Categories, service list,
        service area, photos, and a steady flow of reviews mentioning the actual jobs. Google&apos;s{' '}
        <a href="https://support.google.com/business/answer/3038177" target="_blank" rel="noopener noreferrer" className="text-indigo-600 dark:text-indigo-400 font-semibold hover:underline">
          business profile guidelines
        </a>{' '}
        are short and worth reading once, properly.
      </p>

      <h3>The website</h3>
      <p>
        Service and area pages with real content, internal links between them, and{' '}
        <a href="https://schema.org/LocalBusiness" target="_blank" rel="noopener noreferrer" className="text-indigo-600 dark:text-indigo-400 font-semibold hover:underline">
          LocalBusiness schema
        </a>{' '}
        that matches your real name, address, phone and opening hours. Consistency matters more than volume here.
      </p>

      <h3>AI answers</h3>
      <p>
        When someone asks an assistant &ldquo;who fixes boilers in Rugby on a Sunday&rdquo;, the answer is assembled
        from pages that state the service, the area and the hours in plain sentences. Short factual lines beat clever
        marketing lines in that context. The{' '}
        <Link to="/blog/ai-search-citations-geo-playbook" className="text-indigo-600 dark:text-indigo-400 font-semibold hover:underline">
          AI citation playbook
        </Link>{' '}
        covers how to structure for it.
      </p>

      <h2>Measure calls separately from forms</h2>

      <p>
        A contact form event in analytics tells you someone typed. It does not tell you whether the phone rang. Use call
        tracking numbers or, at minimum, ask every caller &ldquo;where did you find us&rdquo; for four weeks and tally
        the answers. Then compare cost per booked job against your ad spend, not cost per visit.
      </p>

      <p>
        If the numbers say the site gets traffic but no calls, fix the page structure and the mobile call path first.
        If the numbers say the site converts but gets no traffic, the build is fine and the problem is visibility. Those
        are different invoices, and confusing them wastes money in both directions.
      </p>

      <BlogFAQ items={faq} />

      <HireUsCTA />
    </BlogPostLayout>
  );
};

export default LocalServiceWebsiteThatBooksJobs;
