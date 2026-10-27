import React from 'react';
import { X, Calendar, Video, Clock, ShieldCheck, ExternalLink } from 'lucide-react';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const BookingModal: React.FC<BookingModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  // Official Cal.com direct booking link
  const calLink = 'https://cal.com/cryptowebbuilddev/15min';

  return (
    <div
      className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200"
      role="dialog"
      aria-modal="true"
      aria-label="Book 15-Minute Technical Strategy Call"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="relative w-full max-w-2xl bg-white dark:bg-[#0f141f] rounded-t-3xl sm:rounded-3xl border-t sm:border border-slate-200 dark:border-white/10 shadow-2xl overflow-hidden flex flex-col max-h-[88vh] animate-in slide-in-from-bottom duration-300 sm:zoom-in-95">
        {/* iOS Pull Handle on Mobile */}
        <div className="w-12 h-1.5 bg-slate-300 dark:bg-white/20 rounded-full mx-auto mt-2.5 mb-1 sm:hidden shrink-0" />

        {/* Modal Header */}
        <div className="px-6 py-5 border-b border-slate-200 dark:border-white/10 flex items-center justify-between bg-slate-50 dark:bg-[#090A0F]">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 flex items-center justify-center">
              <Calendar className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-display font-bold text-lg text-slate-900 dark:text-white">
                Book 15-Min Technical Strategy Call
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                1-on-1 with Principal Architect Sagor Ahamed · Via Google Meet
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-2 rounded-xl text-slate-500 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/10 transition-colors"
            aria-label="Close booking modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto space-y-6">
          {/* Trust Highlights */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
            <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-white/[0.03] border border-slate-200/80 dark:border-white/[0.06] flex items-center gap-2.5">
              <Clock className="w-4 h-4 text-indigo-500 shrink-0" />
              <span className="font-medium text-slate-700 dark:text-slate-300">15 Minutes Quick Audit</span>
            </div>
            <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-white/[0.03] border border-slate-200/80 dark:border-white/[0.06] flex items-center gap-2.5">
              <Video className="w-4 h-4 text-emerald-500 shrink-0" />
              <span className="font-medium text-slate-700 dark:text-slate-300">Google Meet Link Sent</span>
            </div>
            <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-white/[0.03] border border-slate-200/80 dark:border-white/[0.06] flex items-center gap-2.5">
              <ShieldCheck className="w-4 h-4 text-indigo-500 shrink-0" />
              <span className="font-medium text-slate-700 dark:text-slate-300">Zero Sales Pressure</span>
            </div>
          </div>

          {/* Interactive Scheduling Card */}
          <div className="p-6 rounded-2xl border border-indigo-500/30 bg-gradient-to-br from-indigo-500/[0.05] to-transparent space-y-4 text-center">
            <h4 className="font-display font-bold text-xl text-slate-900 dark:text-white">
              Instant Calendar Reservation
            </h4>
            <p className="text-sm text-slate-600 dark:text-slate-300 max-w-md mx-auto leading-relaxed">
              Pick your preferred time slot on Cal.com. An automatic Google Meet invitation and calendar invite will be sent to your email instantly.
            </p>

            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
              <a
                href={calLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-8 py-3.5 rounded-xl neon-button text-white font-semibold text-sm flex items-center justify-center gap-2"
              >
                <Calendar className="w-4 h-4" />
                <span>Open Cal.com Scheduler</span>
                <ExternalLink className="w-4 h-4" />
              </a>
              <a
                href="https://wa.me/8801618138820?text=Hi%20Sagor%2C%20I%20would%20like%20to%20schedule%20a%2015-minute%20Google%20Meet%20strategy%20call%20with%20you!"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-900 dark:text-white font-semibold text-sm hover:border-indigo-500/40 transition-colors"
              >
                Or Chat on WhatsApp
              </a>
            </div>
          </div>

          <div className="text-center text-xs text-slate-500 dark:text-slate-400">
            For international enterprise or $1,000+ builds (US, UK, EU, UAE). Local Bangladesh clients can also reach out via WhatsApp at 01618-138820.
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingModal;
