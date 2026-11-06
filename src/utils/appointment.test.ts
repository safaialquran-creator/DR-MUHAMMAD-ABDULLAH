import test from 'node:test';
import assert from 'node:assert/strict';
import {
  buildWhatsAppMessage,
  buildWhatsAppUrl,
  DOCTOR_INFO,
  CLINIC_LOCATIONS,
  normalizePhone
} from './appointment.ts';

test('DOCTOR_INFO has correct verified data', () => {
  assert.equal(DOCTOR_INFO.name, 'Dr. Muhammad Abdullah');
  assert.equal(DOCTOR_INFO.degrees, 'MBBS, FCPS');
  assert.equal(DOCTOR_INFO.rating, 5.0);
  assert.equal(DOCTOR_INFO.reviewsCount, 67);
  assert.equal(DOCTOR_INFO.phone, '+92 300 1625250');
  assert.equal(DOCTOR_INFO.whatsappRaw, '923001625250');
});

test('CLINIC_LOCATIONS includes both Gujranwala and Rahwali clinics', () => {
  assert.equal(CLINIC_LOCATIONS.length, 2);
  assert.equal(CLINIC_LOCATIONS[0].id, 'cheema-heart-complex');
  assert.equal(CLINIC_LOCATIONS[1].id, 'siddique-family-hospital');
  assert.ok(CLINIC_LOCATIONS[0].facilities.includes('Open daily until 10 PM'));
});

test('normalizePhone removes spaces and non-digits except +', () => {
  assert.equal(normalizePhone('+92 300 1625250'), '+923001625250');
  assert.equal(normalizePhone('0300-1625250'), '03001625250');
});

test('buildWhatsAppMessage produces clean structured markdown text for WhatsApp', () => {
  const msg = buildWhatsAppMessage({
    name: 'Muhammad Asif',
    phone: '03001234567',
    location: 'Cheema Heart Complex, Civil Lines',
    concern: 'Frequent acid reflux and stomach pain',
    preferredDate: 'Tomorrow evening',
  });

  assert.ok(msg.includes('Muhammad Asif'));
  assert.ok(msg.includes('03001234567'));
  assert.ok(msg.includes('Cheema Heart Complex, Civil Lines'));
  assert.ok(msg.includes('Frequent acid reflux and stomach pain'));
  assert.ok(msg.includes('Dr. Muhammad Abdullah (MBBS, FCPS)'));
});

test('buildWhatsAppUrl constructs valid wa.me link with encoded text', () => {
  const url = buildWhatsAppUrl({
    name: 'Zahra Ali',
    phone: '03217654321',
    location: 'Siddique Family Hospital, Rahwali',
  });

  assert.ok(url.startsWith('https://wa.me/923001625250?text='));
  assert.ok(url.includes('Zahra%20Ali'));
  assert.ok(url.includes('Siddique%20Family%20Hospital'));
});
