import React from 'react';
import { Phone, MessageCircle, MapPin, Clock, Stethoscope, Heart, Code2 } from 'lucide-react';
import { DOCTOR_INFO, CLINIC_LOCATIONS } from '../utils/appointment';

interface FooterProps {
  onOpenStandaloneModal?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenStandaloneModal }) => {
  return (
    <footer className="bg-white border-t border-slate-200/80 pt-14 pb-12 text-slate-600 text-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 pb-12 border-b border-slate-100">
          {/* Brand & Doctor Info */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-sky-500 to-teal-500 flex items-center justify-center text-white shrink-0">
                <Stethoscope className="w-5 h-5" />
              </div>
              <span className="text-lg font-bold text-slate-900 tracking-tight">
                {DOCTOR_INFO.name}
              </span>
            </div>
            <p className="text-xs text-slate-500 leading-relaxed max-w-sm">
              MBBS, FCPS · Consultant in Gastroenterology, Hepatology, Diabetes and Internal Medicine seeing patients across Gujranwala and Rahwali.
            </p>
            <div className="flex flex-col sm:flex-row gap-2 pt-1">
              <a
                href={`tel:${DOCTOR_INFO.phone}`}
                className="inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-sky-50 text-sky-700 hover:bg-sky-100 transition-colors text-xs font-semibold"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>Call {DOCTOR_INFO.phone}</span>
              </a>
              <a
                href={`https://wa.me/${DOCTOR_INFO.whatsappRaw}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-teal-50 text-teal-700 hover:bg-teal-100 transition-colors text-xs font-semibold"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span>WhatsApp Appointment</span>
              </a>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider">
              Quick Navigation
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#about" className="hover:text-sky-600 transition-colors">
                  About the Doctor
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-sky-600 transition-colors">
                  Areas of Care (Services)
                </a>
              </li>
              <li>
                <a href="#tips" className="hover:text-sky-600 transition-colors">
                  Health Tip: IBS Care
                </a>
              </li>
              <li>
                <a href="#locations" className="hover:text-sky-600 transition-colors">
                  Clinic Locations
                </a>
              </li>
              <li>
                <a href="#reviews" className="hover:text-sky-600 transition-colors">
                  Patient Reviews (5.0 ★)
                </a>
              </li>
              <li>
                <a href="#book" className="hover:text-sky-600 transition-colors">
                  Book WhatsApp Appointment
                </a>
              </li>
            </ul>
          </div>

          {/* Clinic Addresses */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider">
              Practice Locations
            </h4>
            <div className="space-y-3 text-xs">
              <div className="p-3 rounded-xl bg-slate-50 border border-slate-100">
                <b className="text-slate-900 block font-semibold">
                  Cheema Heart Complex and General Hospital
                </b>
                <span className="text-slate-500 block mt-0.5">
                  Mian Mian, Zia ul Haq Rd, Civil Lines, Gujranwala 55250
                </span>
                <span className="text-sky-600 font-medium block mt-1">
                  Open daily until 10 PM
                </span>
              </div>
              <div className="p-3 rounded-xl bg-slate-50 border border-slate-100">
                <b className="text-slate-900 block font-semibold">
                  Siddique Family Hospital
                </b>
                <span className="text-slate-500 block mt-0.5">
                  Rahwali, Gujranwala
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Credits & Mandatory Reference Line */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 text-center sm:text-left">
          <div>
            <span className="font-semibold text-slate-800">{DOCTOR_INFO.name}</span> · {DOCTOR_INFO.degrees} · Call / WhatsApp:{' '}
            <a href={`tel:${DOCTOR_INFO.phone}`} className="text-sky-600 font-medium hover:underline">
              {DOCTOR_INFO.phone}
            </a>
            <div className="mt-1 text-slate-600 font-medium">
              This is a demo website designed by Safai Web Development Agency.
            </div>
          </div>

          {onOpenStandaloneModal && (
            <button
              onClick={onOpenStandaloneModal}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors font-medium text-xs"
            >
              <Code2 className="w-3.5 h-3.5 text-sky-600" />
              <span>Get Standalone HTML</span>
            </button>
          )}
        </div>
      </div>
    </footer>
  );
};
