import React, { useState } from 'react';
import SEO from '../components/SEO';
import { MessageSquare, Send, Mail } from 'lucide-react';

const Contact: React.FC = () => {
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [category, setCategory] = useState('');
  const [budget, setBudget] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    const form = e.currentTarget;
    const formData = new FormData(form);
    formData.append('access_key', '3e10ed03-3f9f-406f-b087-1871c9dec81a');
    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
      });
      const result = await response.json();
      if (result.success) {
        setSubmitted(true);
      }
    } catch (err) {
      console.error('Form submission error:', err);
    } finally {
      setSubmitting(false);
    }
  };

  const whatsappDirectUrl = `https://wa.me/8801618138820?text=${encodeURIComponent(
    `Hi Sagor, I'm reaching out from CryptoWebBuild.com!\n• Name: ${name || 'Prospective Client'}\n• Email: ${email || 'N/A'}\n• Service: ${category || 'Full-Stack Web / SEO / AI'}\n• Budget: ${budget || 'To Discuss'}\n• Details: ${message || 'I would like to claim my 48-hour prototype / free audit.'}`
  )}`;

  const contactSchema = {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    name: 'Contact CryptoWebBuild',
    description: 'Claim your 48-Hour Prototype or Free Website & SEO Audit. Contact Sagor Ahamed at CryptoWebBuild.',
    url: 'https://cryptowebbuild.com/contact',
    mainEntity: {
      '@type': 'ProfessionalService',
      name: 'CryptoWebBuild',
      logo: {
        '@type': 'ImageObject',
        url: 'https://cryptowebbuild.com/hero-avatar.webp',
      },
      image: 'https://cryptowebbuild.com/hero-avatar.webp',
      priceRange: '$$-$$$',
      telephone: '+8801618138820',
      email: 'hello@cryptowebbuild.com',
      contactPoint: {
        '@type': 'ContactPoint',
        contactType: 'sales',
        telephone: '+8801618138820',
        email: 'hello@cryptowebbuild.com',
        availableLanguage: ['English', 'Bengali'],
      },
    },
  };

  return (
    <div className="container mx-auto px-6 min-h-screen">
      <SEO
        title="Contact CryptoWebBuild | Claim 48-Hour Prototype & Audit"
        description="Ready to scale? Contact CryptoWebBuild for sub-second Full-Stack Websites (Python/Django & Next.js), Technical SEO, and 24/7 RAG AI Agents."
        keywords={[
          'Hire Full-Stack Developer',
          'Website Development Quote',
          'Contact CryptoWebBuild',
          'Hire React Next.js Python Developer',
        ]}
        canonical="/contact"
        schema={contactSchema}
      />

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        {/* Left Column */}
        <div className="text-center lg:text-left mb-12 lg:mb-0 gpu-accelerated animate-slide-up">
          <div className="inline-block px-4 py-1.5 mb-4 rounded-full bg-cyan-100 dark:bg-cyan-900/30 border border-cyan-200 dark:border-cyan-500/20 text-cyan-700 dark:text-cyan-400 text-sm font-bold tracking-wider uppercase shadow-sm">
            Open for Work • 2 Slots Left
          </div>
          <h1 className="font-display text-5xl md:text-6xl font-black text-gray-900 dark:text-white mb-6 tracking-tight">
            Claim Your 48-Hour <br className="hidden lg:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-cyan-500">
              Live Prototype
            </span>
          </h1>
          <p className="text-gray-600 dark:text-gray-400 text-lg md:text-xl leading-relaxed max-w-xl mx-auto lg:mx-0">
            Pay 50% upfront. Pay the final 50% ONLY when you see your custom Website, E-Commerce Store, or AI Agent performing live in a real test. Zero risk.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center lg:justify-start gap-3">
            <a
              href={whatsappDirectUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-[#25D366] text-white font-bold text-sm shadow-lg hover:scale-105 transition-transform"
            >
              <MessageSquare className="w-4 h-4" />
              <span>WhatsApp: +880 1618-138820</span>
            </a>
            <a
              href="https://t.me/cryptowebbuild"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-[#229ED9] text-white font-bold text-sm shadow-lg hover:scale-105 transition-transform"
            >
              <Send className="w-4 h-4" />
              <span>Telegram: @cryptowebbuild</span>
            </a>
            <a
              href="mailto:hello@cryptowebbuild.com"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 text-gray-900 dark:text-white font-bold text-sm shadow-sm hover:scale-105 transition-transform"
            >
              <Mail className="w-4 h-4 text-purple-500" />
              <span>hello@cryptowebbuild.com</span>
            </a>
          </div>
        </div>

        {/* Right Form Card (Exact Original SaaS Glass Panel) */}
        <div
          className="p-8 md:p-12 rounded-[32px] bg-white dark:bg-[#020617] glass-panel border border-gray-200 dark:border-white/5 shadow-xl gpu-accelerated animate-slide-up"
          style={{ animationDelay: '0.1s' }}
        >
          {submitted ? (
            <div className="p-8 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-2xl text-center space-y-4">
              <svg
                className="w-16 h-16 text-green-500 mx-auto"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Request received!</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Sagor Ahamed will review your brief and respond within 24 hours. Want an immediate reply?
              </p>
              <a
                href={whatsappDirectUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#25D366] text-white font-bold text-sm shadow-lg"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Send Brief on WhatsApp Now (01618-138820)</span>
              </a>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label
                    htmlFor="name"
                    className="block font-bold text-gray-600 dark:text-gray-400 uppercase tracking-[0.2em] text-xs"
                  >
                    Your Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="John Doe"
                    className="w-full bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/5 rounded-xl px-5 py-4 text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all hover:border-purple-500/30"
                  />
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="email"
                    className="block font-bold text-gray-600 dark:text-gray-400 uppercase tracking-[0.2em] text-xs"
                  >
                    Your Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@example.com"
                    className="w-full bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/5 rounded-xl px-5 py-4 text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all hover:border-purple-500/30"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="category"
                  className="block font-bold text-gray-600 dark:text-gray-400 uppercase tracking-[0.2em] text-xs"
                >
                  Project Category
                </label>
                <select
                  id="category"
                  name="category"
                  required
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className="w-full bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/5 rounded-xl px-5 py-4 text-gray-900 dark:text-white focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all appearance-none cursor-pointer hover:border-purple-500/30"
                >
                  <option value="" disabled className="text-gray-400">
                    Select a project type
                  </option>
                  <option value="Full-Stack Web / Python Django SaaS">Full-Stack Web / Python Django SaaS</option>
                  <option value="1-Click E-Commerce / F-Commerce Store">1-Click E-Commerce / F-Commerce Store</option>
                  <option value="Technical SEO & <0.8s Speed Overhaul">Technical SEO &amp; &lt;0.8s Speed Overhaul</option>
                  <option value="Custom RAG AI Agent & Automation">Custom RAG AI Agent &amp; Automation</option>
                  <option value="Elite Crypto / Web3 Platform UI/UX">Elite Crypto / Web3 Platform UI/UX</option>
                </select>
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="budget"
                  className="block font-bold text-gray-600 dark:text-gray-400 uppercase tracking-[0.2em] text-xs"
                >
                  Project Budget
                </label>
                <select
                  id="budget"
                  name="budget"
                  required
                  value={budget}
                  onChange={(e) => setBudget(e.target.value)}
                  className="w-full bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/5 rounded-xl px-5 py-4 text-gray-900 dark:text-white focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all appearance-none cursor-pointer hover:border-purple-500/30"
                >
                  <option value="" disabled className="text-gray-400">
                    Select your budget
                  </option>
                  <option value="$300 – $1,000 (Fast Storefront / SEO / Small Automation)">
                    $300 – $1,000 (Fast Storefront / SEO / Small Automation)
                  </option>
                  <option value="$1,000 – $3,000 (Custom Full-Stack / AI Pilot)">
                    $1,000 – $3,000 (Custom Full-Stack / AI Pilot)
                  </option>
                  <option value="$3,000 – $7,500 (Full SaaS / AI + Web Integration)">
                    $3,000 – $7,500 (Full SaaS / AI + Web Integration)
                  </option>
                  <option value="$7,500+ (Enterprise Architecture)">$7,500+ (Enterprise Architecture)</option>
                </select>
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="message"
                  className="block font-bold text-gray-600 dark:text-gray-400 uppercase tracking-[0.2em] text-xs"
                >
                  Project Details &amp; Website URL
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Tell me about your business goals, current website URL (if any), and timeline..."
                  className="w-full bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/5 rounded-xl px-5 py-4 text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all hover:border-purple-500/30"
                />
              </div>

              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <button
                  type="submit"
                  disabled={submitting}
                  className="flex-1 py-4 px-6 neon-button text-white font-bold rounded-xl shadow-lg text-base hover:scale-[1.01] transition-all disabled:opacity-50"
                >
                  {submitting ? 'Sending Request...' : 'Claim 48-Hour Prototype'}
                </button>
                <a
                  href={whatsappDirectUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-4 px-6 rounded-xl bg-[#25D366]/15 border border-[#25D366]/40 text-gray-900 dark:text-white hover:bg-[#25D366] hover:text-white font-bold text-sm flex items-center justify-center gap-2 transition-all"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>1-Click WhatsApp</span>
                </a>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default Contact;
