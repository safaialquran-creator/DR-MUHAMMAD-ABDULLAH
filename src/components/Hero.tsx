import React from 'react';
import { Star, Calendar, MessageCircle, Clock, MapPin, ShieldCheck, HeartPulse } from 'lucide-react';
import { DOCTOR_INFO } from '../utils/appointment';

interface HeroProps {
  onBookClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onBookClick }) => {
  return (
    <section
      id="top"
      className="relative overflow-hidden pt-8 pb-16 sm:pt-12 sm:pb-20 lg:pt-16 lg:pb-24 bg-gradient-to-b from-sky-50/80 via-teal-50/30 to-white border-b border-sky-100/50"
    >
      {/* Subtle organic light accent blobs for cheerful, fresh aesthetic */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-sky-200/25 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-teal-200/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Value Proposition & CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start">
            {/* Google Rating Social Proof Kicker (Clean unboxed metadata) */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/90 border border-amber-200/80 shadow-sm text-xs font-semibold text-slate-800 mb-5">
              <div className="flex items-center text-amber-500">
                <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
              </div>
              <span className="text-slate-700 font-bold">5.0 on Google</span>
              <span className="text-slate-300">·</span>
              <span className="text-slate-600 font-medium">67 patient reviews</span>
            </div>

            {/* Primary Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.18] mb-5 text-balance">
              Careful, unhurried care for your <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-600 to-teal-600">stomach, liver</span> and general health
            </h1>

            {/* Subtitle with exact qualifications & coverage */}
            <p className="text-base sm:text-lg text-slate-600 mb-8 leading-relaxed max-w-2xl">
              <strong className="text-slate-800 font-semibold">{DOCTOR_INFO.name} ({DOCTOR_INFO.degrees})</strong> sees patients in Gujranwala and Rahwali, specialising in gastroenterology, diabetes and internal medicine.
            </p>

            {/* CTAs: Primary and Secondary with fluid responsive full-width on mobile */}
            <div className="w-full sm:w-auto flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 mb-8">
              <button
                onClick={onBookClick}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 text-base font-semibold text-white bg-gradient-to-r from-sky-600 to-teal-600 hover:from-sky-500 hover:to-teal-500 rounded-xl shadow-md shadow-sky-600/20 active:scale-[0.98] transition-all min-h-[48px]"
              >
                <Calendar className="w-5 h-5" />
                <span>Book an appointment</span>
              </button>

              <a
                href={`https://wa.me/${DOCTOR_INFO.whatsappRaw}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 text-base font-semibold text-teal-800 bg-white hover:bg-teal-50/70 border border-teal-200 rounded-xl shadow-sm active:scale-[0.98] transition-all min-h-[48px]"
              >
                <MessageCircle className="w-5 h-5 text-teal-600" />
                <span>WhatsApp us</span>
              </a>
            </div>

            {/* Quick Practice Highlights */}
            <div className="w-full pt-6 border-t border-slate-200/60 grid grid-cols-2 sm:grid-cols-3 gap-4 text-xs text-slate-600">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-teal-600 shrink-0" />
                <span>MBBS, FCPS Certified</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-sky-600 shrink-0" />
                <span>Open daily until 10 PM</span>
              </div>
              <div className="flex items-center gap-2 col-span-2 sm:col-span-1">
                <MapPin className="w-4 h-4 text-rose-500 shrink-0" />
                <span>Civil Lines & Rahwali</span>
              </div>
            </div>
          </div>

          {/* Right Column: Doctor Profile Card & Verified Stats */}
          <div className="lg:col-span-5">
            <div className="bg-white rounded-3xl p-6 sm:p-7 shadow-lg shadow-sky-950/5 border border-sky-100/90 relative">
              {/* Doctor Visual with photo & fallback avatar */}
              <div className="relative mb-6">
                <div className="relative mx-auto w-36 h-36 sm:w-44 sm:h-44 rounded-full overflow-hidden p-1.5 bg-gradient-to-tr from-sky-400 via-teal-300 to-amber-200 shadow-md">
                  <div className="w-full h-full rounded-full overflow-hidden bg-slate-100 relative">
                    <img
                      src="/src/assets/images/dr_abdullah_portrait_1793965760487.jpg"
                      alt="Dr. Muhammad Abdullah (MBBS, FCPS)"
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover object-top"
                      onError={(e) => {
                        // Fallback to avatar if image fails
                        e.currentTarget.style.display = 'none';
                        const parent = e.currentTarget.parentElement;
                        if (parent) {
                          const fb = parent.querySelector('.avatar-fallback');
                          if (fb) fb.classList.remove('hidden');
                        }
                      }}
                    />
                    <div className="avatar-fallback hidden w-full h-full bg-gradient-to-br from-sky-600 to-teal-600 flex items-center justify-center text-white text-3xl font-bold">
                      MA
                    </div>
                  </div>
                </div>

                {/* Qualification badge */}
                <div className="text-center mt-3">
                  <span className="text-lg font-bold text-slate-900 block">
                    {DOCTOR_INFO.name}
                  </span>
                  <span className="text-xs font-semibold text-sky-700 bg-sky-50 px-2.5 py-0.5 rounded-full border border-sky-100 inline-block mt-1">
                    {DOCTOR_INFO.degrees} · Consultant Physician
                  </span>
                </div>
              </div>

              {/* Exact Stats Grid from Reference (5.0 Rating, 2 Clinics, 10 PM Closes) */}
              <div className="grid grid-cols-3 gap-2.5 sm:gap-3 p-3 bg-gradient-to-b from-sky-50/60 to-teal-50/40 rounded-2xl border border-sky-100/70 text-center">
                <div className="p-2 sm:p-2.5 bg-white rounded-xl shadow-xs border border-sky-50">
                  <b className="block text-xl sm:text-2xl font-extrabold text-slate-900 tabular-nums">
                    5.0
                  </b>
                  <span className="text-xs font-medium text-slate-500">Rating</span>
                </div>
                <div className="p-2 sm:p-2.5 bg-white rounded-xl shadow-xs border border-sky-50">
                  <b className="block text-xl sm:text-2xl font-extrabold text-slate-900 tabular-nums">
                    2
                  </b>
                  <span className="text-xs font-medium text-slate-500">Clinics</span>
                </div>
                <div className="p-2 sm:p-2.5 bg-white rounded-xl shadow-xs border border-sky-50">
                  <b className="block text-xl sm:text-2xl font-extrabold text-slate-900 whitespace-nowrap">
                    10 PM
                  </b>
                  <span className="text-xs font-medium text-slate-500">Closes</span>
                </div>
              </div>

              {/* Verified patient quote snippet */}
              <div className="mt-5 p-3.5 rounded-xl bg-slate-50/90 border border-slate-100 text-xs text-slate-600 flex items-start gap-2.5">
                <HeartPulse className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                <p className="italic">
                  &ldquo;He gives ample time for assessment and explains the diagnosis clearly.&rdquo;
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
