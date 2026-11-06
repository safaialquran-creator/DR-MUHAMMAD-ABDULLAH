import React, { useState } from 'react';
import { MessageCircle, Phone, CheckCircle, Calendar, User, Clock, Building, Send, Copy, ExternalLink } from 'lucide-react';
import { DOCTOR_INFO, CLINIC_LOCATIONS, AppointmentFormData, buildWhatsAppMessage, buildWhatsAppUrl } from '../utils/appointment';

interface AppointmentSectionProps {
  selectedClinic: string;
  onLocationChange: (loc: string) => void;
}

export const AppointmentSection: React.FC<AppointmentSectionProps> = ({
  selectedClinic,
  onLocationChange,
}) => {
  const [formData, setFormData] = useState<AppointmentFormData>({
    name: '',
    phone: '',
    location: selectedClinic || CLINIC_LOCATIONS[0].shortName,
    concern: '',
    preferredDate: '',
    preferredTime: 'Evening (5:00 PM - 9:30 PM)',
  });

  const [submitted, setSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);

  // Sync if prop changes
  React.useEffect(() => {
    if (selectedClinic) {
      setFormData((prev) => ({ ...prev, location: selectedClinic }));
    }
  }, [selectedClinic]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (name === 'location') {
      onLocationChange(value);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const waUrl = buildWhatsAppUrl(formData);
    setSubmitted(true);
    
    // Open WhatsApp link in new tab
    const newWindow = window.open(waUrl, '_blank');
    if (!newWindow || newWindow.closed || typeof newWindow.closed === 'undefined') {
      // Fallback location href if popup blocked
      window.location.href = waUrl;
    }
  };

  const handleCopyMessage = () => {
    const message = buildWhatsAppMessage(formData);
    navigator.clipboard.writeText(message).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    });
  };

  const currentWaUrl = buildWhatsAppUrl(formData);

  return (
    <section id="book" className="py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-teal-50/40 via-sky-50/50 to-white border-t border-sky-100/70">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-teal-50 text-teal-700 text-xs font-semibold uppercase tracking-wider mb-3">
            <Calendar className="w-3.5 h-3.5" />
            <span>Fast WhatsApp Booking</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
            Request an appointment
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600">
            Your request opens in WhatsApp so the clinic can confirm a time.
          </p>
        </div>

        <div className="bg-white rounded-3xl p-6 sm:p-10 shadow-lg shadow-sky-950/5 border border-sky-100">
          <form id="f" onSubmit={handleSubmit} className="space-y-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {/* Patient Name */}
              <div>
                <label htmlFor="n" className="block text-xs font-bold text-slate-700 mb-2 uppercase tracking-wider">
                  Your Full Name <span className="text-rose-500">*</span>
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                    <User className="w-5 h-5" />
                  </div>
                  <input
                    id="n"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="e.g. Asad Beg"
                    className="w-full pl-11 pr-4 py-3 rounded-xl border border-slate-200 focus:border-sky-500 focus:ring-2 focus:ring-sky-100 outline-none text-slate-900 placeholder:text-slate-400 transition-colors text-sm min-h-[48px]"
                  />
                </div>
              </div>

              {/* Phone Number */}
              <div>
                <label htmlFor="p" className="block text-xs font-bold text-slate-700 mb-2 uppercase tracking-wider">
                  Phone Number <span className="text-rose-500">*</span>
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                    <Phone className="w-5 h-5" />
                  </div>
                  <input
                    id="p"
                    name="phone"
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="e.g. 0300 1234567"
                    className="w-full pl-11 pr-4 py-3 rounded-xl border border-slate-200 focus:border-sky-500 focus:ring-2 focus:ring-sky-100 outline-none text-slate-900 placeholder:text-slate-400 transition-colors text-sm min-h-[48px]"
                  />
                </div>
              </div>
            </div>

            {/* Clinic Location Dropdown */}
            <div>
              <label htmlFor="l" className="block text-xs font-bold text-slate-700 mb-2 uppercase tracking-wider">
                Select Hospital / Clinic Location <span className="text-rose-500">*</span>
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                  <Building className="w-5 h-5" />
                </div>
                <select
                  id="l"
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                  className="w-full pl-11 pr-10 py-3 rounded-xl border border-slate-200 focus:border-sky-500 focus:ring-2 focus:ring-sky-100 outline-none text-slate-900 bg-white text-sm appearance-none transition-colors min-h-[48px] cursor-pointer"
                >
                  <option value="Cheema Heart Complex, Civil Lines">
                    Cheema Heart Complex, Civil Lines (Open until 10 PM)
                  </option>
                  <option value="Siddique Family Hospital, Rahwali">
                    Siddique Family Hospital, Rahwali
                  </option>
                </select>
                <div className="absolute inset-y-0 right-0 pr-3.5 flex items-center pointer-events-none text-slate-400">
                  ▼
                </div>
              </div>
            </div>

            {/* Optional Concern / Description */}
            <div>
              <label htmlFor="m" className="block text-xs font-bold text-slate-700 mb-2 uppercase tracking-wider">
                Briefly describe your concern <span className="text-slate-400 font-normal lowercase">(optional)</span>
              </label>
              <textarea
                id="m"
                name="concern"
                rows={3}
                value={formData.concern}
                onChange={handleChange}
                placeholder="e.g. Acid reflux, persistent stomach discomfort, liver follow-up or diabetes check..."
                className="w-full p-3.5 rounded-xl border border-slate-200 focus:border-sky-500 focus:ring-2 focus:ring-sky-100 outline-none text-slate-900 placeholder:text-slate-400 transition-colors text-sm resize-y"
              />
            </div>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row gap-3.5 items-stretch">
              <button
                type="submit"
                className="flex-1 inline-flex items-center justify-center gap-2.5 px-6 py-3.5 text-base font-semibold text-white bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 rounded-xl shadow-md shadow-emerald-600/20 active:scale-[0.98] transition-all min-h-[48px]"
              >
                <Send className="w-5 h-5" />
                <span>Send on WhatsApp</span>
              </button>

              <a
                href={currentWaUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="sm:hidden inline-flex items-center justify-center gap-2 px-4 py-3 text-sm font-semibold text-teal-800 bg-teal-50 rounded-xl border border-teal-200"
              >
                <ExternalLink className="w-4 h-4" />
                <span>Direct WhatsApp Link</span>
              </a>

              <a
                href={`tel:${DOCTOR_INFO.phone}`}
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 text-sm font-semibold text-slate-700 bg-slate-50 hover:bg-slate-100 border border-slate-200 rounded-xl transition-colors min-h-[48px]"
              >
                <Phone className="w-4 h-4 text-sky-600" />
                <span>Call Clinic Directly</span>
              </a>
            </div>

            {/* Live Message Preview Accordion / Box */}
            <div className="mt-6 pt-5 border-t border-slate-100">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-semibold text-slate-500 flex items-center gap-1.5">
                  <MessageCircle className="w-3.5 h-3.5 text-teal-600" />
                  <span>WhatsApp Message Preview:</span>
                </span>
                <button
                  type="button"
                  onClick={handleCopyMessage}
                  className="text-xs text-sky-600 hover:text-sky-700 font-medium inline-flex items-center gap-1 focus:outline-none"
                >
                  <Copy className="w-3.5 h-3.5" />
                  <span>{copied ? 'Copied!' : 'Copy text'}</span>
                </button>
              </div>
              <pre className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/70 text-slate-700 text-xs font-mono whitespace-pre-wrap leading-relaxed select-all">
                {buildWhatsAppMessage(formData)}
              </pre>
            </div>
          </form>

          {/* Feedback reassurance */}
          {submitted && (
            <div className="mt-5 p-4 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center gap-3 text-emerald-800 text-xs sm:text-sm">
              <CheckCircle className="w-5 h-5 text-emerald-600 shrink-0" />
              <span>
                Opening WhatsApp! If WhatsApp did not open automatically, click the &ldquo;Direct WhatsApp Link&rdquo; or copy the message above.
              </span>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
