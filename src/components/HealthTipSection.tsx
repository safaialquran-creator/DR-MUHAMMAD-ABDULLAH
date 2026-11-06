import React from 'react';
import { AlertCircle, CheckCircle2, Heart, Apple, Dumbbell, ShieldAlert, Sparkles } from 'lucide-react';

export const HealthTipSection: React.FC = () => {
  return (
    <section id="tips" className="py-16 sm:py-20 lg:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-teal-50 text-teal-700 text-xs font-semibold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Doctor's Advice</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
            Health tip: Irritable Bowel Syndrome (IBS)
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600">
            A common disorder of the large intestine.
          </p>
        </div>

        {/* Main Health Card with visual guide & 2-column checklist */}
        <div className="bg-gradient-to-br from-teal-50/70 via-sky-50/50 to-white rounded-3xl p-6 sm:p-8 lg:p-10 border border-teal-100 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
            {/* Visual Medical Infographic Poster */}
            <div className="lg:col-span-5">
              <div className="rounded-2xl overflow-hidden shadow-xs border border-teal-100/80 bg-white">
                <img
                  src="/src/assets/images/gut_health_wellness_1793965793360.jpg"
                  alt="Balanced gut health nutrition and lifestyle guide"
                  referrerPolicy="no-referrer"
                  className="w-full h-auto object-cover max-h-80 sm:max-h-96 mx-auto"
                />
              </div>
            </div>

            {/* Content: Symptoms & Helpful Habits */}
            <div className="lg:col-span-7 space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Common Symptoms Card */}
                <div className="bg-white rounded-2xl p-5 border border-rose-100/80 shadow-xs">
                  <div className="flex items-center gap-2 mb-3.5">
                    <div className="w-8 h-8 rounded-lg bg-rose-50 text-rose-600 flex items-center justify-center shrink-0">
                      <AlertCircle className="w-4 h-4" />
                    </div>
                    <b className="text-sm font-bold text-slate-900">Common symptoms</b>
                  </div>
                  <ul className="space-y-2.5 text-xs sm:text-sm text-slate-600">
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-rose-500 mt-2 shrink-0" />
                      <span>Abdominal pain and cramps</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-rose-500 mt-2 shrink-0" />
                      <span>Bloating and gas</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-rose-500 mt-2 shrink-0" />
                      <span>Constipation or diarrhoea</span>
                    </li>
                  </ul>
                </div>

                {/* Helpful Habits Card */}
                <div className="bg-white rounded-2xl p-5 border border-emerald-100/80 shadow-xs">
                  <div className="flex items-center gap-2 mb-3.5">
                    <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                      <CheckCircle2 className="w-4 h-4" />
                    </div>
                    <b className="text-sm font-bold text-slate-900">Helpful habits</b>
                  </div>
                  <ul className="space-y-2.5 text-xs sm:text-sm text-slate-600">
                    <li className="flex items-start gap-2">
                      <Apple className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>Eat a balanced diet</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Heart className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>Reduce stress</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Dumbbell className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>Exercise regularly</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Mandatory Medical Disclaimer Note */}
              <div className="p-4 rounded-2xl bg-amber-50/80 border border-amber-200/60 flex items-start gap-3">
                <ShieldAlert className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
                <p className="text-xs text-amber-900 leading-relaxed font-medium">
                  General information only. Please consult the doctor for diagnosis and treatment.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
