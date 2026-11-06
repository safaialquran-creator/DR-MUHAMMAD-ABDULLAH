import React, { useState, useEffect } from 'react';
import { MessageCircle, Phone, X } from 'lucide-react';
import { DOCTOR_INFO } from '../utils/appointment';

export const FloatingWhatsApp: React.FC = () => {
  return (
    <div className="fixed bottom-5 right-5 z-50">
      <a
        href={`https://wa.me/${DOCTOR_INFO.whatsappRaw}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat directly on WhatsApp with Dr. Muhammad Abdullah"
        className="group flex items-center gap-2.5 px-4 py-3 rounded-full bg-gradient-to-r from-emerald-500 to-teal-600 text-white shadow-lg shadow-emerald-600/30 hover:shadow-xl hover:shadow-emerald-600/40 hover:scale-105 active:scale-95 transition-all duration-200 min-h-[48px] focus:outline-none focus:ring-4 focus:ring-emerald-300"
      >
        <div className="relative">
          <MessageCircle className="w-5 h-5 fill-white text-emerald-500 group-hover:rotate-12 transition-transform" />
          <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-amber-400 border-2 border-emerald-600 rounded-full" />
        </div>
        <span className="text-xs sm:text-sm font-bold tracking-wide whitespace-nowrap">
          WhatsApp
        </span>
      </a>
    </div>
  );
};
