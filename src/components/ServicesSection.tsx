import React from 'react';
import { Stethoscope, Activity, Droplets, Building2, PhoneCall } from 'lucide-react';
import { DOCTOR_INFO } from '../utils/appointment';

export const ServicesSection: React.FC = () => {
  const services = [
    {
      id: 'gastroenterology',
      title: 'Gastroenterology',
      icon: Stethoscope,
      accentBg: 'bg-sky-100 text-sky-700',
      badge: 'Stomach & Intestinal Health',
      description: 'Abdominal pain, bloating, gas, constipation, diarrhoea and IBS.',
      focusItems: [
        'Abdominal pain & cramping',
        'Persistent bloating & gas',
        'Constipation or chronic diarrhoea',
        'Irritable Bowel Syndrome (IBS)',
      ],
    },
    {
      id: 'hepatology',
      title: 'Hepatology',
      icon: Activity,
      accentBg: 'bg-teal-100 text-teal-700',
      badge: 'Liver Health',
      description: 'Liver-related concerns and follow-up care.',
      focusItems: [
        'Fatty liver assessment',
        'Elevated liver enzyme evaluation',
        'Hepatitis care & regular monitoring',
        'Long-term liver health follow-up',
      ],
    },
    {
      id: 'diabetes',
      title: 'Diabetes',
      icon: Droplets,
      accentBg: 'bg-emerald-100 text-emerald-700',
      badge: 'Endocrine Care',
      description: 'Diagnosis, treatment and ongoing monitoring.',
      focusItems: [
        'Early diabetes screening & diagnosis',
        'Blood sugar & HbA1c control plans',
        'Medication & dietary guidance',
        'Prevention of complications',
      ],
    },
    {
      id: 'internal-medicine',
      title: 'Internal medicine',
      icon: Building2,
      accentBg: 'bg-indigo-100 text-indigo-700',
      badge: 'Comprehensive Adult Care',
      description: 'Thorough assessment of general adult health problems.',
      focusItems: [
        'Blood pressure management',
        'General systemic health checkups',
        'Unexplained fatigue & weakness',
        'Multi-condition coordinating care',
      ],
    },
  ];

  return (
    <section id="services" className="py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-sky-50/50 via-teal-50/20 to-white border-y border-sky-100/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <span className="inline-block px-3 py-1 rounded-full bg-teal-50 text-teal-700 text-xs font-semibold uppercase tracking-wider mb-3">
            Clinical Focus
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
            Areas of care
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600">
            Please call to confirm the full list of services.
          </p>
        </div>

        {/* 4 Responsive Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.id}
                className="bg-white rounded-3xl p-6 shadow-sm hover:shadow-md transition-all duration-200 border border-slate-100 hover:border-sky-200 flex flex-col justify-between group"
              >
                <div>
                  <div className={`w-12 h-12 rounded-2xl ${service.accentBg} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-200`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider block mb-1">
                    {service.badge}
                  </span>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">
                    {service.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed mb-4">
                    {service.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100">
                  <ul className="space-y-1.5 text-xs text-slate-500">
                    {service.focusItems.map((item, i) => (
                      <li key={i} className="flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-teal-500 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>

        {/* Direct Phone Assistance Banner */}
        <div className="mt-10 p-5 rounded-2xl bg-white border border-sky-100 shadow-xs flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3 text-center sm:text-left">
            <div className="w-10 h-10 rounded-xl bg-sky-100 text-sky-700 flex items-center justify-center shrink-0">
              <PhoneCall className="w-5 h-5" />
            </div>
            <div>
              <p className="text-sm font-semibold text-slate-900">
                Need consultation on a specific condition?
              </p>
              <p className="text-xs text-slate-500">
                Call or WhatsApp the clinic team directly to inquire about procedures and schedules.
              </p>
            </div>
          </div>
          <a
            href={`tel:${DOCTOR_INFO.phone}`}
            className="w-full sm:w-auto inline-flex items-center justify-center px-4 py-2.5 text-xs sm:text-sm font-semibold text-sky-700 bg-sky-50 hover:bg-sky-100 rounded-xl transition-colors min-h-[44px]"
          >
            Call {DOCTOR_INFO.phone}
          </a>
        </div>
      </div>
    </section>
  );
};
