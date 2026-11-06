export interface AppointmentFormData {
  name: string;
  phone: string;
  location: string;
  concern?: string;
  preferredDate?: string;
  preferredTime?: string;
}

export const CLINIC_LOCATIONS = [
  {
    id: 'cheema-heart-complex',
    name: 'Cheema Heart Complex and General Hospital',
    shortName: 'Cheema Heart Complex, Civil Lines',
    address: 'Mian Mian, Zia ul Haq Rd, Civil Lines, Gujranwala 55250',
    city: 'Gujranwala',
    hours: 'Open daily until 10 PM',
    closesAt: '10:00 PM',
    facilities: [
      'Open daily until 10 PM',
      'On-site and paid parking',
      'Wheelchair accessible',
      'Credit cards accepted',
    ],
    googleMapsUrl: 'https://maps.google.com/?q=Cheema+Heart+Complex+and+General+Hospital+Gujranwala',
    isPrimary: true,
  },
  {
    id: 'siddique-family-hospital',
    name: 'Siddique Family Hospital',
    shortName: 'Siddique Family Hospital, Rahwali',
    address: 'Main Bazar / GT Road area, Rahwali, Gujranwala',
    city: 'Rahwali, Gujranwala',
    hours: 'Consultations by scheduled appointment',
    closesAt: 'Evening clinics',
    facilities: [
      'Convenient Rahwali location',
      'Family medicine & specialist visits',
      'Dedicated nursing care',
      'Pharmacy nearby',
    ],
    googleMapsUrl: 'https://maps.google.com/?q=Siddique+Family+Hospital+Rahwali+Gujranwala',
    isPrimary: false,
  },
];

export const DOCTOR_INFO = {
  name: 'Dr. Muhammad Abdullah',
  degrees: 'MBBS, FCPS',
  specialties: ['Gastroenterology', 'Hepatology', 'Diabetes', 'Internal Medicine'],
  phone: '+92 300 1625250',
  whatsappRaw: '923001625250',
  rating: 5.0,
  reviewsCount: 67,
  headline: 'Careful, unhurried care for your stomach, liver and general health',
  bio: 'Dr. Muhammad Abdullah holds MBBS and FCPS qualifications and focuses on gastroenterology and hepatology, diabetes and internal medicine. Reviewers regularly mention that he gives each patient enough time, explains the diagnosis clearly and involves the family in every step of treatment.',
};

/**
 * Normalizes phone string for display or link
 */
export function normalizePhone(raw: string): string {
  return raw.replace(/[^0-9+]/g, '');
}

/**
 * Builds formatted text message for WhatsApp appointment request
 */
export function buildWhatsAppMessage(data: AppointmentFormData): string {
  const lines: string[] = [
    `Assalam-o-Alaikum, I would like to request an appointment with Dr. Muhammad Abdullah (MBBS, FCPS).`,
    ``,
    `*Patient Name:* ${data.name.trim() || 'Not specified'}`,
    `*Phone Number:* ${data.phone.trim() || 'Not specified'}`,
    `*Hospital / Clinic:* ${data.location || CLINIC_LOCATIONS[0].shortName}`,
  ];

  if (data.preferredDate) {
    lines.push(`*Preferred Date:* ${data.preferredDate}`);
  }
  if (data.preferredTime) {
    lines.push(`*Preferred Time:* ${data.preferredTime}`);
  }
  if (data.concern && data.concern.trim()) {
    lines.push(`*Reason / Concern:* ${data.concern.trim()}`);
  }

  lines.push(``);
  lines.push(`Please let me know the available time slot. Thank you!`);

  return lines.join('\n');
}

/**
 * Creates valid wa.me URL
 */
export function buildWhatsAppUrl(data: AppointmentFormData): string {
  const message = buildWhatsAppMessage(data);
  return `https://wa.me/${DOCTOR_INFO.whatsappRaw}?text=${encodeURIComponent(message)}`;
}
