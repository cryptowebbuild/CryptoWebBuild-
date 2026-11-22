import React from 'react';
import { Link } from 'react-router-dom';
import BlogPostLayout from '../../components/blog/BlogPostLayout';
import KeyTakeaways from '../../components/blog/KeyTakeaways';
import ProTip from '../../components/blog/ProTip';
import ExpertBox from '../../components/blog/ExpertBox';
import BlogFAQ from '../../components/blog/BlogFAQ';
import HireUsCTA from '../../components/blog/HireUsCTA';

const AgencyVsDirectEngineer2026: React.FC = () => {
  const takeaways = [
    'An agency price includes coordination: account manager, project manager, designer, QA. On a $700 to $1,600 build that layer can be larger than the engineering itself.',
    'A direct engineer removes handoffs but also removes capacity. One person cannot run six workstreams, a media buy and a 40 page content programme at the same time.',
    'The right question is not which model is cheaper. It is how much coordination your scope genuinely needs.',
    'Five questions reveal which model you are buying: who writes the code, who answers at 9pm, what happens on the third revision, who owns the repo, and what is excluded.',
    'Hybrids work. Engineer for the build, freelancer for design, you for the copy. Most small brands do not need a full agency roster.',
  ];

  const faq = [
    {
      question: 'Is an agency always more expensive?',
      answer:
        'For the same scope, usually yes, because you are also paying for account management, project coordination and QA. That premium is worth it when the scope is large enough that coordination is a real cost, such as a six month roadmap with several people working in parallel.',
    },
    {
      question: 'What is the biggest risk with a direct engineer?',
      answer:
        'Bus factor. If one person disappears, the project stops. Ask for the repository, a written handover and credentials in your own accounts from day one, so the site is never hostage to one calendar.',
    },
    {
      question: 'What is the biggest risk with an agency?',
      answer:
        'The person who sold the project is often not the person who builds it. Ask to meet the engineer who will actually write the code, and ask how many projects that engineer is running at the same time.',
    },
    {
      question: 'How do I compare two quotes fairly?',
      answer:
        'Put both on one page and compare line by line: pages, payment methods, courier integration, performance target, revision policy, handover, and what is explicitly excluded. Two totals mean nothing until the line items match.',
    },
    {
      question: 'Can I start with one and switch later?',
      answer:
        'Yes, if the handover is clean. Repository ownership, documented deployment, and accounts in your name make switching a week of work rather than a rebuild. That is exactly why the handover clause matters more than the price.',
    },
  ];

  return (
    <BlogPostLayout
      title="Agency vs Direct Engineer: What You Pay For in 2026"
      description="A line by line comparison of agency and direct engineer pricing: coordination overhead, delivery risk, handover and the questions that reveal the model."
      publishedTime="2026-11-22T15:00:00.000Z"
      modifiedTime="2026-11-22T15:00:00.000Z"
      category="Business"
      image="/blog/covers/agency-vs-direct-engineer-2026.webp"
      keywords={[
        'agency vs freelancer',
        'hire web developer vs agency',
        'web design agency cost',
        'direct engineer hire',
        'how to compare web development quotes',
        'outsourcing web development 2026',
      ]}
      canonical="/blog/agency-vs-direct-engineer-2026"
      faq={faq}
    >
      <KeyTakeaways points={takeaways} />

      <p className="lead text-xl md:text-2xl font-medium text-gray-700 dark:text-gray-300 leading-relaxed">
        An agency sells coordination as much as code. A direct engineer sells hours and accountability. For a build
        under $2,000 the coordination layer often costs more than it saves; for a multi-month roadmap with several
        people working at once, it is the only way the work arrives.
      </p>

      <p>
        I write this from the direct side, so weigh it accordingly. But the comparison below is the one I use with
        clients who are deciding between me and a studio, and it includes the cases where the studio is the better
        answer.
      </p>

      <h2>Where the money actually goes</h2>

      <div className="my-8 overflow-x-auto rounded-2xl border border-gray-200 dark:border-white/10 bg-white dark:bg-white/[0.02]">
        <table className="w-full min-w-[520px] sm:min-w-0 text-sm border-collapse">
          <caption className="sm:hidden px-4 pt-3 pb-1 text-left text-[11px] font-medium text-gray-500 dark:text-gray-400">
            Swipe sideways to see every column.
          </caption>
          <thead>
            <tr className="border-b border-gray-200 dark:border-white/10 bg-gray-50 dark:bg-white/[0.04]">
              <th className="text-left py-3 px-4 font-bold text-gray-900 dark:text-white align-bottom">Role</th>
              <th className="text-left py-3 px-4 font-bold text-gray-900 dark:text-white align-bottom">Agency</th>
              <th className="text-left py-3 px-4 font-bold text-gray-900 dark:text-white align-bottom">Direct engineer</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 dark:divide-white/10">
            <tr>
              <td className="py-3 px-4 align-top">Sales and scoping</td>
              <td className="py-3 px-4 align-top">Account manager, proposal deck</td>
              <td className="py-3 px-4 align-top">The engineer, in writing</td>
            </tr>
            <tr>
              <td className="py-3 px-4 align-top">Project management</td>
              <td className="py-3 px-4 align-top">Dedicated PM, weekly calls</td>
              <td className="py-3 px-4 align-top">Shared board, direct messages</td>
            </tr>
            <tr>
              <td className="py-3 px-4 align-top">Design</td>
              <td className="py-3 px-4 align-top">In-house designer</td>
              <td className="py-3 px-4 align-top">You, a freelancer, or me</td>
            </tr>
            <tr>
              <td className="py-3 px-4 align-top">Build</td>
              <td className="py-3 px-4 align-top">Junior to mid engineer</td>
              <td className="py-3 px-4 align-top">The person you spoke to</td>
            </tr>
            <tr>
              <td className="py-3 px-4 align-top">QA</td>
              <td className="py-3 px-4 align-top">Separate QA pass</td>
              <td className="py-3 px-4 align-top">You test staging, I fix</td>
            </tr>
            <tr>
              <td className="py-3 px-4 align-top">Overhead in price</td>
              <td className="py-3 px-4 align-top">Typically 30 to 50 percent</td>
              <td className="py-3 px-4 align-top">Near zero, plus your own time</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p>
        The overhead is not waste. It buys a person whose job is to keep three workstreams moving and to absorb your
        questions. If your project is one storefront and two integrations, that person has little to do.
      </p>

      <h2>When the agency premium is worth it</h2>

      <ul>
        <li>
          <strong>The scope needs four disciplines at once.</strong> Brand, UX, engineering, content and paid media
          running in the same month.
        </li>
        <li>
          <strong>Procurement demands a company.</strong> Invoices, insurance, NDAs, a legal entity on the contract.
        </li>
        <li>
          <strong>You cannot manage the work yourself.</strong> If nobody on your side can review staging and answer
          questions, coordination has to come from somewhere.
        </li>
        <li>
          <strong>Downtime is expensive.</strong> A team with cover beats a single person who gets sick in launch week.
        </li>
      </ul>

      <h2>When the direct model wins</h2>

      <h3>The build is one clear system</h3>
      <p>
        A storefront with checkout, a Django backend, a marketing site, a migration. One engineer can hold the whole
        picture in their head, which removes the handoff where requirements get lost. The{' '}
        <Link to="/justimagine" className="text-indigo-600 dark:text-indigo-400 font-semibold hover:underline">
          Just Imagine build
        </Link>{' '}
        is a good example: twenty pages, one structure, one person accountable for all of it.
      </p>

      <h3>Speed of decision matters more than process</h3>
      <p>
        Direct means a question gets an answer, not a meeting. For a two week build, three meetings about a button is
        the whole budget.
      </p>

      <h3>You want the code</h3>
      <p>
        Repository in your GitHub, hosting in your account, domain in your name. That is the default here and it
        should be the default everywhere. If a proposal treats handover as an extra, that is the signal.
      </p>

      <ProTip
        title="Ask this one question before you sign"
        tip="Who will write the code, and can I speak to them for ten minutes before the deposit? An agency that says yes is confident. An agency that says the team is assigned later is selling you a lottery ticket with your logo on it."
      />

      <h2>Five questions that reveal the model</h2>

      <ol>
        <li>
          <strong>Who writes the code?</strong> A name, not a department. Ask to meet them.
        </li>
        <li>
          <strong>What happens on revision three?</strong> Written revision limits are normal. Unlimited revisions are
          a red flag in both models, because nobody can afford them.
        </li>
        <li>
          <strong>Who owns the repository on day one?</strong> Correct answer: you, from the first commit.
        </li>
        <li>
          <strong>Who answers at 9pm during launch?</strong> Get a name and a channel, not a support inbox.
        </li>
        <li>
          <strong>What is excluded?</strong> Copywriting, photography, ad accounts, content migration. The excluded
          list is where budgets actually break.
        </li>
      </ol>

      <ExpertBox author="Sagor Ahamed" role="Lead Full-Stack and AI Architect" avatar="/hero-avatar.webp">
        &ldquo;The cheapest project I have rescued was quoted at a third of the eventual cost, because the first
        quote excluded checkout, migration and the courier integration. Nobody lied. Nobody read the exclusions
        either.&rdquo;
      </ExpertBox>

      <h2>Red flags in both directions</h2>

      <div className="grid gap-4 sm:grid-cols-2 my-6">
        <div className="rounded-2xl border border-gray-200 dark:border-white/10 p-5">
          <h3 className="font-display font-bold text-gray-900 dark:text-white mb-2">Agency red flags</h3>
          <ul className="text-sm space-y-2 text-gray-600 dark:text-gray-300">
            <li>Case studies with no live URLs.</li>
            <li>The salesperson cannot explain the stack.</li>
            <li>Monthly fee that includes access to your own site.</li>
            <li>Timeline quoted before anyone asked about your checkout.</li>
          </ul>
        </div>
        <div className="rounded-2xl border border-gray-200 dark:border-white/10 p-5">
          <h3 className="font-display font-bold text-gray-900 dark:text-white mb-2">Freelancer red flags</h3>
          <ul className="text-sm space-y-2 text-gray-600 dark:text-gray-300">
            <li>No written scope, only a chat thread.</li>
            <li>Portfolio screenshots with no working links.</li>
            <li>Wants 100% upfront or payment outside any traceable method.</li>
            <li>Cannot name what they will not do.</li>
          </ul>
        </div>
      </div>

      <h2>The hybrid that usually wins</h2>

      <p>
        Most small brands do not need a roster. They need one accountable engineer, a designer for two weeks, and
        their own product knowledge. That combination costs less than a studio and moves faster than a committee,
        provided the handover is clean and the scope is written down.
      </p>

      <p>
        If you want the pricing side of this, the{' '}
        <Link to="/blog/website-cost-bangladesh-2026" className="text-indigo-600 dark:text-indigo-400 font-semibold hover:underline">
          2026 cost breakdown
        </Link>{' '}
        lists every module in USD and BDT, and the{' '}
        <Link to="/pricing" className="text-indigo-600 dark:text-indigo-400 font-semibold hover:underline">
          pricing page
        </Link>{' '}
        lets you build a scope without talking to anyone.
      </p>

      <BlogFAQ items={faq} />

      <HireUsCTA />
    </BlogPostLayout>
  );
};

export default AgencyVsDirectEngineer2026;
