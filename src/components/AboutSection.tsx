import React from 'react';
import { UserCheck, Clock, Users, BookOpen, Sparkles } from 'lucide-react';
import { DOCTOR_INFO } from '../utils/appointment';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-16 sm:py-20 lg:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sky-50 text-sky-700 text-xs font-semibold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Physician Profile</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
            About the doctor
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600">
            Patients describe him as attentive, kind and thorough.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Clinic Photo & Patient Consultation Atmosphere */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="relative rounded-3xl overflow-hidden shadow-md border border-slate-100 group">
              <img
                src="/src/assets/images/clinic_consultation_room_1793965776117.jpg"
                alt="Unhurried medical consultation environment"
                referrerPolicy="no-referrer"
                className="w-full h-72 sm:h-80 lg:h-96 object-cover group-hover:scale-102 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-900/20 to-transparent flex flex-col justify-end p-6 text-white">
                <span className="text-xs font-semibold text-teal-300 uppercase tracking-wider">
                  Patient Experience
                </span>
                <p className="text-sm sm:text-base font-medium mt-1 text-slate-100">
                  Calm, unhurried consultations where every symptom is carefully explored.
                </p>
              </div>
            </div>
          </div>

          {/* Description & Clinical Care Philosophy */}
          <div className="lg:col-span-7 order-1 lg:order-2 space-y-6">
            <div className="bg-gradient-to-br from-sky-50/50 via-teal-50/30 to-white rounded-3xl p-6 sm:p-8 border border-sky-100 shadow-xs">
              <p className="text-base sm:text-lg text-slate-800 leading-relaxed font-normal">
                {DOCTOR_INFO.bio}
              </p>
            </div>

            {/* 3 Core Patient Values Highlight Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="p-4 rounded-2xl bg-slate-50/80 border border-slate-100 hover:border-sky-200 transition-colors">
                <div className="w-9 h-9 rounded-xl bg-sky-100 text-sky-700 flex items-center justify-center mb-3">
                  <Clock className="w-5 h-5" />
                </div>
                <h3 className="text-sm font-bold text-slate-900 mb-1">Ample Time</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Never rushed. Every patient receives a comprehensive medical evaluation.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-slate-50/80 border border-slate-100 hover:border-teal-200 transition-colors">
                <div className="w-9 h-9 rounded-xl bg-teal-100 text-teal-700 flex items-center justify-center mb-3">
                  <BookOpen className="w-5 h-5" />
                </div>
                <h3 className="text-sm font-bold text-slate-900 mb-1">Clear Explanations</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Diagnoses and test results explained in plain, reassuring language.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-slate-50/80 border border-slate-100 hover:border-amber-200 transition-colors">
                <div className="w-9 h-9 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center mb-3">
                  <Users className="w-5 h-5" />
                </div>
                <h3 className="text-sm font-bold text-slate-900 mb-1">Family Involved</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Family members are welcomed and guided through every step of treatment.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
