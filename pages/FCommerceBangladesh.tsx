import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  MessageSquare,
  Zap,
  CheckCircle2,
  ShieldCheck,
  TrendingUp,
  Clock,
  ArrowRight,
  Truck,
  CreditCard,
  ExternalLink,
  Star,
  Users,
} from 'lucide-react';
import SEO from '../components/SEO';
import BookingModal from '../components/BookingModal';
import BeforeAfterSlider from '../components/BeforeAfterSlider';
import TrustBadges from '../components/TrustBadges';

const FCommerceBangladesh: React.FC = () => {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [dailyOrders, setDailyOrders] = useState(25);

  const monthlyOrders = dailyOrders * 30;
  const hoursSavedPerMonth = Math.round((monthlyOrders * 4) / 60); // ~4 mins saved per order in inbox chat
  const estExtraRevenue = Math.round(monthlyOrders * 1250 * 0.35); // 35% conversion lift at ৳1250 avg order value

  const whatsappUrl = `https://wa.me/8801618138820?text=${encodeURIComponent(
    `হাই সাগর ভাই, আমি CryptoWebBuild-এর ১-ক্লিক ওয়েবসাইট ও স্টেডফাস্ট অটোমেশন প্যাকেজ নিয়ে কথা বলতে চাই। আমার প্রতিদিন প্রায় ${dailyOrders}টি অর্ডার আসে।`
  )}`;

  return (
    <div className="space-y-16 md:space-y-24 py-8">
      <SEO
        title="১-ক্লিক ই-কমার্স ও স্টেডফাস্ট অটোমেশন ওয়েবসাইট | CryptoWebBuild"
        description="ফেসবুক পেইজে 'Inbox for Price' বলে আর কাস্টমার হারাবেন না। ০.৪ সেকেন্ডের 1-ক্লিক ওয়েবসাইট, বিকাশ/ক্যাশ-অন-ডেলিভারি এবং অটোমেটিক স্টেডফাস্ট কুরিয়ার বুকিং।"
        keywords={[
          'Bangladesh F-Commerce Website Development',
          '1-Click Checkout Website Bangladesh',
          'Steadfast Courier API Integration Website',
          'bKash Nagad Payment Gateway Website',
          'Next.js Ecommerce Developer Bangladesh',
          'Sagor Ahamed CryptoWebBuild',
        ]}
        canonical="/fcommerce"
        schemaType="Service"
      />

      {/* HERO SECTION IN BENGALI */}
      <section className="max-w-7xl mx-auto px-6 pt-4 text-center space-y-6">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 text-xs font-mono font-bold uppercase tracking-wider">
          <Zap className="w-3.5 h-3.5" />
          <span>বাংলাদেশি এফ-কমার্স ও ডি২সি ব্র্যান্ডের জন্য স্পেশাল সলিউশন</span>
        </div>

        <h1
          className="font-display text-3xl sm:text-5xl lg:text-6xl font-black text-slate-900 dark:text-white tracking-tight leading-[1.12] max-w-4xl mx-auto"
          style={{ textWrap: 'balance' }}
        >
          ফেসবুক ইনবক্সে &ldquo;Inbox for Price&rdquo; বলে আর{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
            কাস্টমার হারাবেন না।
          </span>
        </h1>

        <p className="text-slate-600 dark:text-slate-300 text-base sm:text-xl max-w-2xl mx-auto leading-relaxed">
          আপনার ফেসবুক পেইজ বা স্লো ওয়েবসাইটে ৬০% কাস্টমার ইনবক্সে মেসেজের রিপ্লাইয়ের অপেক্ষায় ড্রপ করে। আমরা তৈরি করি{' '}
          <strong className="text-slate-900 dark:text-white">০.৪ সেকেন্ডের ১-ক্লিক ওয়েবসাইট</strong> যেখানে কাস্টমার সরাসরি বিকাশ বা ক্যাশ-অন-ডেলিভারিতে অর্ডার করবে এবং{' '}
          <strong className="text-slate-900 dark:text-white">স্টেডফাস্ট/পাঠাও কুরিয়ারে অটো বুকিং</strong> হয়ে যাবে।
        </p>

        {/* 3 Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-3.5 pt-2">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="py-4 px-8 neon-button text-white font-bold rounded-2xl text-sm sm:text-base flex items-center gap-2 shadow-lg shadow-indigo-500/25 hover:opacity-95 transition-opacity"
          >
            <MessageSquare className="w-4 h-4 text-white" />
            <span>সরাসরি হোয়াটসঅ্যাপে কথা বলুন (01618-138820)</span>
          </a>

          <button
            type="button"
            onClick={() => setIsBookingOpen(true)}
            className="py-4 px-6 rounded-2xl bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-bold text-sm sm:text-base hover:opacity-90 transition-opacity"
          >
            ১৫ মিনিটের কল বুক করুন
          </button>
        </div>

        {/* 4 Proof Pills */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-6 max-w-4xl mx-auto tabular-nums">
          {[
            { val: '০.৪ সেকেন্ড', label: 'সুপারফাস্ট মোবাইল লোড' },
            { val: '১-ক্লিক', label: 'বিকাশ / নগদ / COD পে' },
            { val: '১০০% অটো', label: 'স্টেডফাস্ট কুরিয়ার সিঙ্ক' },
            { val: '৫০ / ৫০', label: 'লাইভ টেস্টের পর বাকি পে' },
          ].map((item) => (
            <div
              key={item.label}
              className="p-4 rounded-2xl bg-white dark:bg-[#11131A] border border-slate-200 dark:border-white/10 text-center"
            >
              <div className="font-display font-bold text-xl sm:text-2xl text-slate-900 dark:text-white">
                {item.val}
              </div>
              <div className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">{item.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* TRUST BADGES */}
      <section className="max-w-7xl mx-auto px-6">
        <TrustBadges />
      </section>

      {/* REAL CASE STUDY HIGHLIGHT: EDEL BANGLADESH */}
      <section className="max-w-7xl mx-auto px-6">
        <div className="rounded-3xl glass-panel p-8 sm:p-12 border border-amber-500/20 bg-amber-500/[0.02] grid lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-5 text-left">
            <div className="flex items-center gap-1 text-amber-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
              ))}
              <span className="text-xs font-mono font-bold text-slate-600 dark:text-slate-400 ml-2">
                ভেরিফায়েড ক্লায়েন্ট ফলাফল
              </span>
            </div>

            <h2 className="font-display text-2xl sm:text-4xl font-bold text-slate-900 dark:text-white tracking-tight">
              &ldquo;১ম মাসেই অর্ডার বেড়েছে ২৪০% এবং সারাদিন ইনবক্সে রিপ্লাই দেওয়ার ঝামেলা শেষ!&rdquo;
            </h2>

            <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
              Edel Bangladesh-এর লাক্সারি ব্রাইডাল চুড়ি ও জুয়েলারি বিক্রির জন্য ফেসবুক পেইজে দিনে শত শত মেসেজের রিপ্লাই দিতে গিয়ে প্রচুর কাস্টমার ড্রপ করতো। সাগর ভাইয়ের তৈরি করা <strong>০.৪ সেকেন্ডের ১-ক্লিক ওয়েবসাইট</strong> চালু করার পর কাস্টমার নিজেই সাইজ ও কালার সিলেক্ট করে অর্ডার কনফার্ম করে ফেলে। সাথে সাথে স্টেডফাস্টে পার্সেল জেনারেট হয়ে যায়।
            </p>

            <div className="pt-2 flex flex-wrap gap-4 text-xs font-semibold">
              <a
                href="https://cryptowebbuild.github.io/edel-bangladesh/"
                target="_blank"
                rel="noopener noreferrer"
                className="py-2.5 px-4 rounded-xl bg-slate-900 dark:bg-white text-white dark:text-slate-900 inline-flex items-center gap-2 hover:opacity-90"
              >
                <span>লাইভ ওয়েবসাইট ভিজিট করুন</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
              <Link
                to="/auracommerce"
                className="py-2.5 px-4 rounded-xl border border-slate-200 dark:border-white/10 text-slate-800 dark:text-white inline-flex items-center gap-1.5"
              >
                <span>কেস স্টাডি পড়ুন</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          <div className="lg:col-span-5 space-y-3 p-6 rounded-2xl bg-white dark:bg-[#090A0F] border border-slate-200 dark:border-white/10 font-mono text-xs">
            <div className="text-slate-400 uppercase tracking-wider text-[11px] font-bold">
              Edel BD লাইভ মেট্রিক্স
            </div>
            <div className="flex justify-between py-2 border-b border-slate-200 dark:border-white/10">
              <span className="text-slate-500">মোবাইল স্পিড:</span>
              <span className="text-emerald-500 font-bold">০.৪ সেকেন্ড</span>
            </div>
            <div className="flex justify-between py-2 border-b border-slate-200 dark:border-white/10">
              <span className="text-slate-500">গুগল পেজস্পিড:</span>
              <span className="text-emerald-500 font-bold">১০০ / ১০০</span>
            </div>
            <div className="flex justify-between py-2 border-b border-slate-200 dark:border-white/10">
              <span className="text-slate-500">অর্ডার বৃদ্ধি:</span>
              <span className="text-emerald-500 font-bold">+২৪০% ১ম মাস</span>
            </div>
            <div className="flex justify-between py-2">
              <span className="text-slate-500">কুরিয়ার বুকিং:</span>
              <span className="text-indigo-400 font-bold">অটোমেটিক স্টেডফাস্ট API</span>
            </div>
          </div>
        </div>
      </section>

      {/* BEFORE / AFTER SLIDER */}
      <section className="max-w-7xl mx-auto px-6">
        <BeforeAfterSlider
          title="ওয়ার্ডপ্রেস বনাম আমাদের ১-ক্লিক ওয়েবসাইট"
          subtitle="মাউস দিয়ে টেনে দেখুন আপনার স্লো ওয়ার্ডপ্রেস সাইট এবং আমাদের ০.৪ সেকেন্ডের ওয়েবসাইটের পার্থক্য।"
          beforeLabel="আগে: স্লো ওয়ার্ডপ্রেস / ফেসবুক ইনবক্স"
          afterLabel="পরে: ০.৪s নেক্সট.জেএস + স্টেডফাস্ট"
          beforeTime="৪.৮ সেকেন্ড লোড"
          afterTime="০.৪ সেকেন্ড লোড"
          beforeScore="৪২ / ১০০"
          afterScore="১০০ / ১০০"
          beforeMetric="৬০% কাস্টমার ড্রপ"
          afterMetric="+২৪০% সেলস বৃদ্ধি"
        />
      </section>

      {/* INTERACTIVE SAVINGS & ROI CALCULATOR */}
      <section className="max-w-7xl mx-auto px-6">
        <div className="p-8 sm:p-12 rounded-3xl glass-panel space-y-8 border border-indigo-500/20">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <div className="text-xs font-mono font-bold uppercase tracking-wider text-indigo-500">
              অটোমেশন ক্যালকুলেটর
            </div>
            <h2 className="font-display text-2xl sm:text-4xl font-bold text-slate-900 dark:text-white">
              ১-ক্লিক ওয়েবসাইটে আপনার কত টাকা ও সময় বাঁচবে?
            </h2>
          </div>

          <div className="max-w-xl mx-auto space-y-4">
            <div className="flex justify-between items-center text-sm font-semibold text-slate-800 dark:text-slate-200">
              <span>প্রতিদিন আপনার পেইজে আনুমানিক অর্ডার:</span>
              <span className="font-mono text-indigo-600 dark:text-indigo-400 text-lg font-bold">
                {dailyOrders} টি
              </span>
            </div>
            <input
              type="range"
              min="5"
              max="150"
              value={dailyOrders}
              onChange={(e) => setDailyOrders(parseInt(e.target.value))}
              className="w-full accent-indigo-500 h-2 bg-slate-200 dark:bg-slate-700 rounded-lg cursor-pointer"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 max-w-4xl mx-auto text-center font-mono">
            <div className="p-5 rounded-2xl bg-white dark:bg-[#11131A] border border-slate-200 dark:border-white/10 space-y-1">
              <div className="text-xs text-slate-500 dark:text-slate-400">প্রতি মাসে অর্ডার</div>
              <div className="text-2xl font-bold text-slate-900 dark:text-white">{monthlyOrders.toLocaleString()} টি</div>
            </div>
            <div className="p-5 rounded-2xl bg-white dark:bg-[#11131A] border border-slate-200 dark:border-white/10 space-y-1">
              <div className="text-xs text-slate-500 dark:text-slate-400">ইনবক্স চ্যাট সময় বাঁচবে</div>
              <div className="text-2xl font-bold text-emerald-500">~{hoursSavedPerMonth} ঘণ্টা / মাস</div>
            </div>
            <div className="p-5 rounded-2xl bg-white dark:bg-[#11131A] border border-slate-200 dark:border-white/10 space-y-1">
              <div className="text-xs text-slate-500 dark:text-slate-400">সম্ভাব্য অতিরিক্ত সেলস</div>
              <div className="text-2xl font-bold text-indigo-500">~৳{estExtraRevenue.toLocaleString()}</div>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL 50/50 GUARANTEE CALL TO ACTION */}
      <section className="max-w-7xl mx-auto px-6 pb-12">
        <div className="p-8 sm:p-14 rounded-3xl glass-panel text-center space-y-6 border border-emerald-500/30 bg-emerald-500/[0.02]">
          <div className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
            <ShieldCheck className="w-4 h-4" />
            <span>৫০ / ৫০ মাইলস্টোন গ্যারান্টি · কোনো রিস্ক নেই</span>
          </div>

          <h2 className="font-display text-3xl sm:text-5xl font-black text-slate-900 dark:text-white max-w-3xl mx-auto leading-tight">
            ৪৮ ঘণ্টার মধ্যে লাইভ প্রোটোটাইপ টেস্ট করুন, তারপর সিদ্ধান্ত নিন।
          </h2>

          <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg max-w-2xl mx-auto">
            আমরা সম্পূর্ণ সাইটটি একটি প্রাইভেট লাইভ লিংকে টেস্ট করাবো। আপনি নিজে মোবাইল থেকে বিকাশ পে ও কুরিয়ার বুকিং টেস্ট করবেন। শতভাগ সন্তুষ্ট হলে তবেই ফাইনাল ৫০% পে করবেন।
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="py-4 px-8 neon-button text-white font-bold rounded-2xl text-base shadow-xl hover:opacity-95"
            >
              হোয়াটসঅ্যাপে ৪৮ ঘণ্টার প্রোটোটাইপ দাবি করুন
            </a>
          </div>
        </div>
      </section>

      <BookingModal isOpen={isBookingOpen} onClose={() => setIsBookingOpen(false)} />
    </div>
  );
};

export default FCommerceBangladesh;
