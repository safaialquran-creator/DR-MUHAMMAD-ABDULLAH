import React from 'react';
import { MapPin, Clock, Car, Accessibility, CreditCard, ExternalLink, Calendar, Phone } from 'lucide-react';
import { CLINIC_LOCATIONS, DOCTOR_INFO } from '../utils/appointment';

interface LocationsSectionProps {
  onSelectClinic: (clinicName: string) => void;
}

export const LocationsSection: React.FC<LocationsSectionProps> = ({ onSelectClinic }) => {
  return (
    <section id="locations" className="py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-sky-50/50 via-teal-50/30 to-white border-y border-sky-100/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <span className="inline-block px-3 py-1 rounded-full bg-sky-50 text-sky-700 text-xs font-semibold uppercase tracking-wider mb-3">
            Clinic Locations
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
            Locations
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600">
            Appointments are recommended.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Clinic 1: Cheema Heart Complex */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm hover:shadow-md transition-shadow duration-200 border border-slate-100 hover:border-sky-200 flex flex-col justify-between">
            <div>
              <div className="flex items-start justify-between gap-3 mb-4">
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 rounded-xl bg-sky-100 text-sky-700 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-sky-600" />
                  </div>
                  <div>
                    <span className="text-[11px] font-semibold text-sky-700 uppercase tracking-wider block">
                      Main Hospital
                    </span>
                    <h3 className="text-lg sm:text-xl font-bold text-slate-900">
                      Cheema Heart Complex and General Hospital
                    </h3>
                  </div>
                </div>
              </div>

              <p className="text-sm font-medium text-slate-700 mb-4 flex items-start gap-2">
                <span className="text-slate-400 mt-0.5">📍</span>
                <span>Mian Mian, Zia ul Haq Rd, Civil Lines, Gujranwala 55250</span>
              </p>

              {/* Exact reference features */}
              <div className="p-4 rounded-2xl bg-sky-50/50 border border-sky-100 mb-6">
                <div className="flex items-center gap-2 text-xs font-semibold text-slate-800 mb-2">
                  <Clock className="w-4 h-4 text-sky-600" />
                  <span>Open daily until 10 PM</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-600">
                  <div className="flex items-center gap-1.5">
                    <Car className="w-3.5 h-3.5 text-teal-600" />
                    <span>On-site & paid parking</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Accessibility className="w-3.5 h-3.5 text-teal-600" />
                    <span>Wheelchair accessible</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <CreditCard className="w-3.5 h-3.5 text-teal-600" />
                    <span>Credit cards accepted</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-slate-100">
              <button
                onClick={() => onSelectClinic('Cheema Heart Complex, Civil Lines')}
                className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 text-xs sm:text-sm font-semibold text-white bg-sky-600 hover:bg-sky-500 rounded-xl shadow-xs transition-colors min-h-[44px]"
              >
                <Calendar className="w-4 h-4" />
                <span>Book at Civil Lines</span>
              </button>

              <a
                href={CLINIC_LOCATIONS[0].googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-1.5 px-4 py-2.5 text-xs sm:text-sm font-semibold text-slate-700 bg-slate-50 hover:bg-slate-100 border border-slate-200 rounded-xl transition-colors min-h-[44px]"
              >
                <ExternalLink className="w-4 h-4" />
                <span>Directions</span>
              </a>
            </div>
          </div>

          {/* Clinic 2: Siddique Family Hospital */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm hover:shadow-md transition-shadow duration-200 border border-slate-100 hover:border-teal-200 flex flex-col justify-between">
            <div>
              <div className="flex items-start justify-between gap-3 mb-4">
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 rounded-xl bg-teal-100 text-teal-700 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-teal-600" />
                  </div>
                  <div>
                    <span className="text-[11px] font-semibold text-teal-700 uppercase tracking-wider block">
                      Rahwali Clinic
                    </span>
                    <h3 className="text-lg sm:text-xl font-bold text-slate-900">
                      Siddique Family Hospital
                    </h3>
                  </div>
                </div>
              </div>

              <p className="text-sm font-medium text-slate-700 mb-4 flex items-start gap-2">
                <span className="text-slate-400 mt-0.5">📍</span>
                <span>Rahwali, Gujranwala</span>
              </p>

              <div className="p-4 rounded-2xl bg-teal-50/50 border border-teal-100 mb-6">
                <div className="flex items-center gap-2 text-xs font-semibold text-slate-800 mb-2">
                  <Clock className="w-4 h-4 text-teal-600" />
                  <span>Consultations by appointment</span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Convenient outpatient specialist consultations for patients in Rahwali and surrounding areas.
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-slate-100">
              <button
                onClick={() => onSelectClinic('Siddique Family Hospital, Rahwali')}
                className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 text-xs sm:text-sm font-semibold text-white bg-teal-600 hover:bg-teal-500 rounded-xl shadow-xs transition-colors min-h-[44px]"
              >
                <Calendar className="w-4 h-4" />
                <span>Book at Rahwali</span>
              </button>

              <a
                href={CLINIC_LOCATIONS[1].googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-1.5 px-4 py-2.5 text-xs sm:text-sm font-semibold text-slate-700 bg-slate-50 hover:bg-slate-100 border border-slate-200 rounded-xl transition-colors min-h-[44px]"
              >
                <ExternalLink className="w-4 h-4" />
                <span>Directions</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
