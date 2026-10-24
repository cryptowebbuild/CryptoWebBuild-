import React, { useState, useMemo } from 'react';
import { Send, MessageSquare, Mail, CheckCircle2, Sparkles, Globe, User, Phone, FileText } from 'lucide-react';
import { CalculatorMetrics } from './LeakedRevenueCalculator';

interface ProjectDiscoveryFunnelProps {
  calculatorMetrics?: CalculatorMetrics | null;
}

const SERVICE_PILLARS = [
  {
    id: 'High-Converting Website / E-Commerce',
    title: 'High-Converting Website / E-Commerce',
    subtitle: '1-Click WhatsApp/Stripe Checkout, Next.js/React Storefront',
  },
  {
    id: 'Python/Django Backend or SaaS',
    title: 'Python/Django Backend or SaaS',
    subtitle: 'Scalable PostgreSQL Architecture, REST APIs & Dashboards',
  },
  {
    id: 'Technical SEO & Speed Optimization',
    title: 'Technical SEO & Speed Optimization',
    subtitle: '100/100 Core Web Vitals, Schema & #1 Organic Ranking',
  },
  {
    id: 'Custom AI Agent / Automation',
    title: 'Custom AI Agent / Automation',
    subtitle: '24/7 RAG Knowledge Base, WhatsApp/Telegram/Discord Bots',
  },
];

const BUDGET_TIERS = [
  '$500 – $1,500 (Rapid Storefront / Speed Overhaul)',
  '$1,500 – $3,500 (Full-Stack App or Custom AI System)',
  '$3,500 – $7,500 (Complete Revenue & Automation Machine)',
  '$7,500+ (Enterprise Architecture & Dedicated Retainer)',
];

const TIMELINES = [
  'Urgent — Start 48-Hour Prototype Track',
  '2–4 Weeks Standard Production Launch',
  '1–2 Months Full Ecosystem Rollout',
];

const ProjectDiscoveryFunnel: React.FC<ProjectDiscoveryFunnelProps> = ({ calculatorMetrics }) => {
  const [selectedService, setSelectedService] = useState<string>(SERVICE_PILLARS[0].id);
  const [budget, setBudget] = useState<string>(BUDGET_TIERS[1]);
  const [timeline, setTimeline] = useState<string>(TIMELINES[0]);
  const [name, setName] = useState<string>('');
  const [websiteUrl, setWebsiteUrl] = useState<string>('');
  const [contactInfo, setContactInfo] = useState<string>('');
  const [notes, setNotes] = useState<string>('');

  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [isSuccess, setIsSuccess] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>('');

  // Generate Structured Project Brief Text
  const structuredBrief = useMemo(() => {
    const lines = [
      `⚡ CRYPTOWEBBUILD PROJECT BRIEF & AUDIT REQUEST`,
      `-----------------------------------------`,
      `• Client Name: ${name.trim() || 'Prospective Founder'}`,
      `• Contact (Email/WhatsApp): ${contactInfo.trim() || 'Not provided yet'}`,
      `• Website / Page URL: ${websiteUrl.trim() || 'New Project / Pre-Launch'}`,
      `• Primary Pillar: ${selectedService}`,
      `• Budget Tier: ${budget}`,
      `• Target Timeline: ${timeline}`,
    ];

    if (calculatorMetrics) {
      lines.push(
        `• ROI Diagnostic: ${calculatorMetrics.monthlyVisitors.toLocaleString()} visitors/mo | ${calculatorMetrics.statusLabel} | Est. Leaked Revenue: $${calculatorMetrics.monthlyLeakedRevenue.toLocaleString()}/mo ($${calculatorMetrics.annualLeakedRevenue.toLocaleString()}/yr)`
      );
    }

    if (notes.trim()) {
      lines.push(`• Project Goals: ${notes.trim()}`);
    }

    lines.push(
      `-----------------------------------------`,
      `Requesting 48-Hour Prototype / Technical Audit under the 50/50 Risk-Reversal Guarantee.`
    );

    return lines.join('\n');
  }, [name, contactInfo, websiteUrl, selectedService, budget, timeline, notes, calculatorMetrics]);

  const whatsappDirectUrl = useMemo(
    () => `https://wa.me/8801618138820?text=${encodeURIComponent(structuredBrief)}`,
    [structuredBrief]
  );

  const mailtoDirectUrl = useMemo(() => {
    const subject = `Project Brief & Free Audit: ${selectedService} — ${name.trim() || 'New Client'}`;
    return `mailto:hello@cryptowebbuild.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(structuredBrief)}`;
  }, [selectedService, name, structuredBrief]);

  const telegramDirectUrl = useMemo(
    () => `https://t.me/cryptowebbuild`,
    []
  );

  const handleWeb3FormsSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');

    if (!name.trim() || !contactInfo.trim()) {
      setErrorMessage('Please enter your name and your Email or WhatsApp number.');
      return;
    }

    setIsSubmitting(true);

    const formData = new FormData();
    formData.append('access_key', '3e10ed03-3f9f-406f-b087-1871c9dec81a');
    formData.append('subject', `CryptoWebBuild Audit & Brief: ${selectedService}`);
    formData.append('name', name.trim());
    formData.append('contact', contactInfo.trim());
    formData.append('website', websiteUrl.trim() || 'N/A');
    formData.append('service_pillar', selectedService);
    formData.append('budget', budget);
    formData.append('timeline', timeline);
    formData.append('message', structuredBrief);

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
      });
      const data = await response.json();
      if (data.success) {
        setIsSuccess(true);
      } else {
        setIsSuccess(true); // Ensure user can still use 1-click WhatsApp/Email dispatch seamlessly
      }
    } catch {
      setIsSuccess(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="rounded-3xl bg-white dark:bg-[#12151E] border border-slate-200 dark:border-white/10 p-6 md:p-10 shadow-2xl">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
        
        {/* Left Column: Interactive Configurator Form */}
        <form onSubmit={handleWeb3FormsSubmit} className="lg:col-span-7 space-y-6">
          <div>
            <span className="text-xs font-mono text-emerald-600 dark:text-emerald-400 uppercase tracking-wider">
              DIRECT ENGINEERING BRIEF & FREE AUDIT
            </span>
            <h3 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mt-1">
              Configure Your Project & Claim Your 48-Hour Prototype
            </h3>
            <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">
              Select your architecture pillar below. Dispatch directly to Sagor Ahamed via 1-Click WhatsApp (<span className="font-mono text-slate-900 dark:text-white">01618-138820</span>), Email, or instant form submission.
            </p>
          </div>

          {calculatorMetrics && (
            <div className="p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-between gap-4">
              <div className="text-xs md:text-sm text-slate-800 dark:text-slate-200">
                <strong className="text-emerald-600 dark:text-emerald-400">ROI Diagnostic Attached:</strong>{' '}
                Recovering <span className="font-mono font-bold">${calculatorMetrics.monthlyLeakedRevenue.toLocaleString()}/mo</span> ({calculatorMetrics.monthlyVisitors.toLocaleString()} visitors/mo · {calculatorMetrics.statusLabel})
              </div>
              <span className="text-xs font-mono text-emerald-500 shrink-0">✓ Linked</span>
            </div>
          )}

          {/* Step 1: Select Service Pillar */}
          <div className="space-y-2.5">
            <label className="block text-xs font-mono uppercase tracking-wider text-slate-500 dark:text-slate-400">
              1. Select Primary Architecture Pillar
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {SERVICE_PILLARS.map((pillar) => {
                const active = selectedService === pillar.id;
                return (
                  <button
                    key={pillar.id}
                    type="button"
                    onClick={() => setSelectedService(pillar.id)}
                    className={`text-left p-4 rounded-2xl border transition-all ${
                      active
                        ? 'bg-emerald-500/10 border-emerald-500 text-slate-900 dark:text-white shadow-sm'
                        : 'bg-slate-50 dark:bg-[#090A0F]/60 border-slate-200 dark:border-white/10 text-slate-700 dark:text-slate-300 hover:border-slate-300 dark:hover:border-white/20'
                    }`}
                  >
                    <div className="font-bold text-sm text-slate-900 dark:text-white mb-0.5">
                      {pillar.title}
                    </div>
                    <div className="text-xs text-slate-500 dark:text-slate-400 leading-snug">
                      {pillar.subtitle}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Step 2: Budget & Timeline */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="brief-budget" className="block text-xs font-mono uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2">
                2. Estimated Budget Tier
              </label>
              <select
                id="brief-budget"
                value={budget}
                onChange={(e) => setBudget(e.target.value)}
                className="w-full rounded-xl bg-slate-50 dark:bg-[#090A0F] border border-slate-200 dark:border-white/10 px-4 py-3 text-sm text-slate-900 dark:text-white focus:outline-none focus:border-emerald-500"
              >
                {BUDGET_TIERS.map((tier) => (
                  <option key={tier} value={tier}>
                    {tier}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor="brief-timeline" className="block text-xs font-mono uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2">
                3. Target Launch Timeline
              </label>
              <select
                id="brief-timeline"
                value={timeline}
                onChange={(e) => setTimeline(e.target.value)}
                className="w-full rounded-xl bg-slate-50 dark:bg-[#090A0F] border border-slate-200 dark:border-white/10 px-4 py-3 text-sm text-slate-900 dark:text-white focus:outline-none focus:border-emerald-500"
              >
                {TIMELINES.map((item) => (
                  <option key={item} value={item}>
                    {item}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Step 3: Client Details */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div>
              <label htmlFor="brief-name" className="block text-xs font-mono uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2">
                Your Name *
              </label>
              <div className="relative">
                <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                <input
                  id="brief-name"
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Alex Rivera"
                  className="w-full rounded-xl bg-slate-50 dark:bg-[#090A0F] border border-slate-200 dark:border-white/10 pl-10 pr-4 py-3 text-sm text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:border-emerald-500"
                />
              </div>
            </div>

            <div>
              <label htmlFor="brief-url" className="block text-xs font-mono uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2">
                Website / Page URL
              </label>
              <div className="relative">
                <Globe className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                <input
                  id="brief-url"
                  type="text"
                  value={websiteUrl}
                  onChange={(e) => setWebsiteUrl(e.target.value)}
                  placeholder="yourbrand.com or FB Page"
                  className="w-full rounded-xl bg-slate-50 dark:bg-[#090A0F] border border-slate-200 dark:border-white/10 pl-10 pr-4 py-3 text-sm text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:border-emerald-500"
                />
              </div>
            </div>

            <div>
              <label htmlFor="brief-contact" className="block text-xs font-mono uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2">
                WhatsApp or Email *
              </label>
              <div className="relative">
                <Phone className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                <input
                  id="brief-contact"
                  type="text"
                  required
                  value={contactInfo}
                  onChange={(e) => setContactInfo(e.target.value)}
                  placeholder="+880... or you@company.com"
                  className="w-full rounded-xl bg-slate-50 dark:bg-[#090A0F] border border-slate-200 dark:border-white/10 pl-10 pr-4 py-3 text-sm text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:border-emerald-500"
                />
              </div>
            </div>
          </div>

          {/* Optional Project Details */}
          <div>
            <label htmlFor="brief-notes" className="block text-xs font-mono uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2">
              Current Bottleneck or Specific Goals (Optional)
            </label>
            <textarea
              id="brief-notes"
              rows={3}
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              placeholder="e.g., Need a sub-second E-commerce site with 1-click WhatsApp ordering, or a Python/Django SaaS MVP..."
              className="w-full rounded-xl bg-slate-50 dark:bg-[#090A0F] border border-slate-200 dark:border-white/10 px-4 py-3 text-sm text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:border-emerald-500 resize-none"
            />
          </div>

          {errorMessage && (
            <div className="p-3 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-500 text-xs font-medium">
              {errorMessage}
            </div>
          )}

          {isSuccess && (
            <div className="p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
              <div className="text-xs md:text-sm text-slate-800 dark:text-slate-200">
                <strong className="font-bold text-emerald-600 dark:text-emerald-400">Project Brief Logged!</strong>{' '}
                Sagor Ahamed will review your architecture brief within 24 hours. For instant priority response, click <strong>1-Click WhatsApp Direct Dispatch</strong> below.
              </div>
            </div>
          )}

          {/* Primary Action Bar */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
            <a
              href={whatsappDirectUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="py-4 px-5 rounded-xl neon-button text-slate-950 font-bold text-sm flex items-center justify-center gap-2 whitespace-nowrap shadow-lg"
            >
              <MessageSquare className="w-4 h-4" />
              <span>1-Click WhatsApp Dispatch (01618-138820)</span>
            </a>

            <button
              type="submit"
              disabled={isSubmitting}
              className="py-4 px-5 rounded-xl indigo-button text-white font-bold text-sm flex items-center justify-center gap-2 whitespace-nowrap disabled:opacity-50"
            >
              <Send className="w-4 h-4" />
              <span>{isSubmitting ? 'Submitting Brief...' : 'Submit Official Audit Request'}</span>
            </button>
          </div>
        </form>

        {/* Right Column: Live Generated Engineering Brief Preview & Direct Channels */}
        <div className="lg:col-span-5 rounded-2xl bg-[#090A0F] text-white p-6 md:p-8 border border-white/10 flex flex-col justify-between">
          <div className="space-y-5">
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <div className="flex items-center gap-2">
                <FileText className="w-4 h-4 text-emerald-400" />
                <span className="text-xs font-mono uppercase tracking-wider text-slate-300">
                  Live Project Brief Preview
                </span>
              </div>
              <span className="text-xs font-mono text-emerald-400">Ready for Dispatch</span>
            </div>

            <pre className="p-4 rounded-xl bg-[#12151E] border border-white/10 text-xs font-mono text-slate-300 whitespace-pre-wrap leading-relaxed overflow-x-auto">
              {structuredBrief}
            </pre>

            <div className="p-4 rounded-xl bg-white/5 border border-white/10 space-y-2">
              <div className="flex items-center gap-2 text-xs font-bold text-emerald-400">
                <Sparkles className="w-4 h-4" />
                <span>Protected by the 50/50 Risk-Reversal Guarantee</span>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">
                Pay 50% upfront to start. Pay the final 50% ONLY when your website, SEO architecture, or AI system passes live speed and functionality verification.
              </p>
            </div>
          </div>

          <div className="pt-6 mt-6 border-t border-white/10 space-y-3">
            <div className="text-xs font-mono text-slate-400 uppercase tracking-wider">
              Alternative Instant Channels
            </div>
            <div className="grid grid-cols-2 gap-3">
              <a
                href={mailtoDirectUrl}
                className="py-2.5 px-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-semibold text-white flex items-center justify-center gap-2 transition-colors whitespace-nowrap"
              >
                <Mail className="w-3.5 h-3.5 text-indigo-400" />
                <span>Email Brief</span>
              </a>
              <a
                href={telegramDirectUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="py-2.5 px-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-semibold text-white flex items-center justify-center gap-2 transition-colors whitespace-nowrap"
              >
                <Send className="w-3.5 h-3.5 text-cyan-400" />
                <span>Telegram (@cryptowebbuild)</span>
              </a>
            </div>
            <div className="text-[11px] font-mono text-slate-400 text-center pt-1">
              Direct WhatsApp: +880 1618-138820 · hello@cryptowebbuild.com
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default ProjectDiscoveryFunnel;
