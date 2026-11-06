import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { ServicesSection } from './components/ServicesSection';
import { HealthTipSection } from './components/HealthTipSection';
import { LocationsSection } from './components/LocationsSection';
import { ReviewsSection } from './components/ReviewsSection';
import { AppointmentSection } from './components/AppointmentSection';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { StandaloneExportModal } from './components/StandaloneExportModal';
import { STANDALONE_HTML_CODE } from './utils/standaloneHtml';

export default function App() {
  const [selectedClinic, setSelectedClinic] = useState<string>('Cheema Heart Complex, Civil Lines');
  const [isExportModalOpen, setIsExportModalOpen] = useState<boolean>(false);

  const scrollToBook = () => {
    const el = document.getElementById('book');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectClinic = (clinicName: string) => {
    setSelectedClinic(clinicName);
    scrollToBook();
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-800 font-sans selection:bg-sky-200 selection:text-sky-900">
      {/* 1. Header with mobile hamburger and always-visible Book button */}
      <Header onBookClick={scrollToBook} />

      <main className="flex-1">
        {/* 2. Hero Section */}
        <Hero onBookClick={scrollToBook} />

        {/* 3. About the Doctor Section */}
        <AboutSection />

        {/* 4. Areas of Care (Services) */}
        <ServicesSection />

        {/* 5. Health Tip: Irritable Bowel Syndrome (IBS) */}
        <HealthTipSection />

        {/* 6. Clinic Locations */}
        <LocationsSection onSelectClinic={handleSelectClinic} />

        {/* 7. What Patients Say (Reviews) */}
        <ReviewsSection />

        {/* 8. Request an Appointment Form */}
        <AppointmentSection
          selectedClinic={selectedClinic}
          onLocationChange={setSelectedClinic}
        />
      </main>

      {/* 9. Footer with exact demo agency attribution & clinic info */}
      <Footer onOpenStandaloneModal={() => setIsExportModalOpen(true)} />

      {/* Floating WhatsApp Action Button for mobile & desktop */}
      <FloatingWhatsApp />

      {/* Standalone Single-File HTML Export & Download Modal */}
      <StandaloneExportModal
        isOpen={isExportModalOpen}
        onClose={() => setIsExportModalOpen(false)}
        standaloneHtmlCode={STANDALONE_HTML_CODE}
      />
    </div>
  );
}
