import React, { useState } from 'react';
import SEO from '../components/SEO';
import BookingModal from '../components/BookingModal';
import { MessageSquare, Send, Mail, Calendar, AlertCircle } from 'lucide-react';

const Contact: React.FC = () => {
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [category, setCategory] = useState('');
  const [budget, setBudget] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    setErrorMessage(null);
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
      } else {
        setErrorMessage(result.message || 'Submission could not be completed. Please message directly on WhatsApp for an immediate response.');
      }
    } catch (err: any) {
      console.error('Form submission error:', err);
      setErrorMessage('Network connection error. Please contact directly via WhatsApp: +880 1618-138820 or email.');
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
    <div className="container mx-auto px-6 min-h-screen py-10">
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
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-black text-gray-900 dark:text-white mb-6 tracking-tight leading-tight">
            Claim Your 48-Hour <br className="hidden lg:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-500">
              Live Staging Prototype
            </span>
          </h1>
          <p className="text-gray-600 dark:text-gray-400 text-base md:text-lg leading-relaxed max-w-xl mx-auto lg:mx-0">
            Pay 50% upfront. Pay the final 50% ONLY after inspecting your custom Next.js Storefront, Full-Stack App, or AI Automation performing live in real tests. 100% protected.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center lg:justify-start gap-3">
            <a
              href={whatsappDirectUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-[#25D366] text-white font-bold text-sm shadow-lg hover:scale-105 transition-transform"
            >
              <MessageSquare className="w-4 h-4" />
              <span>WhatsApp: 01618-138820</span>
            </a>
            <button
              type="button"
              onClick={() => setIsBookingOpen(true)}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-bold text-sm shadow-md hover:scale-105 transition-transform"
            >
              <Calendar className="w-4 h-4 text-indigo-500" />
              <span>Book 15-Min Strategy Call</span>
            </button>
            <a
              href="mailto:hello@cryptowebbuild.com"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 text-gray-900 dark:text-white font-bold text-sm shadow-sm hover:scale-105 transition-transform"
            >
              <Mail className="w-4 h-4 text-purple-500" />
              <span>hello@cryptowebbuild.com</span>
            </a>
          </div>

          <div className="mt-10 p-5 rounded-2xl bg-slate-100 dark:bg-[#11131A] border border-slate-200 dark:border-white/10 text-left space-y-2">
            <div className="text-xs font-mono font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider">
              ✓ 50/50 Architecture Warranty
            </div>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              Every project comes with 30 days of complimentary post-launch performance monitoring, free bug fixes, and full GitHub source code repository handover with zero lock-in.
            </p>
          </div>
        </div>

        {/* Right Form Card */}
        <div
          className="p-8 md:p-12 rounded-[32px] bg-white dark:bg-[#090A0F] glass-panel border border-gray-200 dark:border-white/10 shadow-xl gpu-accelerated animate-slide-up"
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
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Brief Received!</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Sagor Ahamed will inspect your specifications and prepare your 48-hour prototype scope within 24 hours. Want an instant reply?
              </p>
              <a
                href={whatsappDirectUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#25D366] text-white font-bold text-sm shadow-lg hover:opacity-90 transition-opacity"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Chat Instantly on WhatsApp</span>
              </a>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              {errorMessage && (
                <div className="p-4 rounded-xl bg-red-50 dark:bg-red-950/40 border border-red-200 dark:border-red-800 flex items-start gap-3 text-red-700 dark:text-red-300 text-xs">
                  <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
                  <div className="space-y-1">
                    <p className="font-semibold">{errorMessage}</p>
                    <a href={whatsappDirectUrl} target="_blank" rel="noopener noreferrer" className="underline font-bold">
                      Click here to send directly on WhatsApp
                    </a>
                  </div>
                </div>
              )}

              <div className="space-y-2">
                <label
                  htmlFor="name"
                  className="block font-bold text-gray-700 dark:text-gray-300 uppercase tracking-[0.15em] text-xs"
                >
                  Your Name / Brand
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. Alex Morgan / Edel Bangladesh"
                  className="w-full bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-xl px-5 py-3.5 text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all text-sm"
                />
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="email"
                  className="block font-bold text-gray-700 dark:text-gray-300 uppercase tracking-[0.15em] text-xs"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="alex@yourdomain.com"
                  className="w-full bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-xl px-5 py-3.5 text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all text-sm"
                />
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="category"
                  className="block font-bold text-gray-700 dark:text-gray-300 uppercase tracking-[0.15em] text-xs"
                >
                  Project Architecture Pillar
                </label>
                <select
                  id="category"
                  name="category"
                  required
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className="w-full bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-xl px-5 py-3.5 text-gray-900 dark:text-white focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all text-sm appearance-none cursor-pointer"
                >
                  <option value="" disabled className="text-gray-400">
                    Select architecture type
                  </option>
                  <option value="1-Click E-Commerce (Next.js 15 + bKash/Stripe + Courier API)">
                    1-Click E-Commerce (Next.js 15 + bKash/Stripe + Courier API)
                  </option>
                  <option value="Full-Stack Web App / Python Django SaaS Platform">
                    Full-Stack Web App / Python Django SaaS Platform
                  </option>
                  <option value="Technical SEO & 0.4s Google PageSpeed Overhaul">
                    Technical SEO &amp; 0.4s Google PageSpeed Overhaul
                  </option>
                  <option value="24/7 AI Sales Agent & WhatsApp Order Pipeline">
                    24/7 AI Sales Agent &amp; WhatsApp Order Pipeline
                  </option>
                  <option value="Web3 & High-Performance Next.js Platform">
                    Web3 &amp; High-Performance Next.js Platform
                  </option>
                </select>
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="budget"
                  className="block font-bold text-gray-700 dark:text-gray-300 uppercase tracking-[0.15em] text-xs"
                >
                  Investment Range (USD / BDT)
                </label>
                <select
                  id="budget"
                  name="budget"
                  required
                  value={budget}
                  onChange={(e) => setBudget(e.target.value)}
                  className="w-full bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-xl px-5 py-3.5 text-gray-900 dark:text-white focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all text-sm appearance-none cursor-pointer"
                >
                  <option value="" disabled className="text-gray-400">
                    Select your budget range
                  </option>
                  <option value="$350 – $750 (৳35,000 – ৳75,000) · 1-Click Storefront / Fast Prototype">
                    $350 – $750 (৳35,000 – ৳75,000) · 1-Click Storefront / Fast Prototype
                  </option>
                  <option value="$750 – $1,800 (৳75,000 – ৳1,80,000) · Full E-Commerce + Courier Automation">
                    $750 – $1,800 (৳75,000 – ৳1,80,000) · Full E-Commerce + Courier Automation
                  </option>
                  <option value="$1,800 – $4,500 (৳1,80,000 – ৳4,50,000) · Full-Stack Python/Django SaaS or AI Agent">
                    $1,800 – $4,500 (৳1,80,000 – ৳4,50,000) · Full-Stack Python/Django SaaS or AI Agent
                  </option>
                  <option value="$4,500+ · Enterprise Custom Architecture & Dedicated Retainer">
                    $4,500+ · Enterprise Custom Architecture &amp; Dedicated Retainer
                  </option>
                </select>
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="message"
                  className="block font-bold text-gray-700 dark:text-gray-300 uppercase tracking-[0.15em] text-xs"
                >
                  Current URL &amp; Project Requirements
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Describe your current store/app, website URL, target timeline, and specific bottlenecks..."
                  className="w-full bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-xl px-5 py-3.5 text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all text-sm"
                />
              </div>

              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <button
                  type="submit"
                  disabled={submitting}
                  className="flex-1 py-4 px-6 neon-button text-white font-bold rounded-xl shadow-lg text-sm hover:opacity-90 transition-all disabled:opacity-50"
                >
                  {submitting ? 'Transmitting Brief...' : 'Claim 48-Hour Staging Prototype'}
                </button>
                <a
                  href={whatsappDirectUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-4 px-6 rounded-xl bg-[#25D366]/15 border border-[#25D366]/40 text-gray-900 dark:text-white hover:bg-[#25D366] hover:text-white font-bold text-sm flex items-center justify-center gap-2 transition-all shrink-0"
                >
                  <MessageSquare className="w-4 h-4 text-emerald-500" />
                  <span>WhatsApp</span>
                </a>
              </div>
            </form>
          )}
        </div>
      </div>

      <BookingModal isOpen={isBookingOpen} onClose={() => setIsBookingOpen(false)} />
    </div>
  );
};

export default Contact;
