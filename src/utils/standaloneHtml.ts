export const STANDALONE_HTML_CODE = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
<title>Dr. Muhammad Abdullah – Gastroenterology & Internal Medicine, Gujranwala</title>
<meta name="description" content="Careful, unhurried care for stomach, liver, diabetes and general health by Dr. Muhammad Abdullah (MBBS, FCPS) in Gujranwala and Rahwali. 5.0 Google rating.">
<meta property="og:title" content="Dr. Muhammad Abdullah – Gastroenterology & Internal Medicine, Gujranwala">
<meta property="og:description" content="Specialist in Gastroenterology, Hepatology, Diabetes and Internal Medicine seeing patients in Gujranwala and Rahwali.">
<meta property="og:type" content="website">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap" rel="stylesheet">
<!-- Schema.org Physician & LocalBusiness -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Physician",
      "@id": "https://dr-muhammad-abdullah.pk/#physician",
      "name": "Dr. Muhammad Abdullah",
      "honorificSuffix": "MBBS, FCPS",
      "jobTitle": "Consultant Gastroenterologist & Physician",
      "telephone": "+923001625250",
      "priceRange": "$$",
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "5.0",
        "reviewCount": "67"
      },
      "medicalSpecialty": ["Gastroenterology", "Hepatology", "Endocrinology", "InternalMedicine"],
      "worksFor": [
        {
          "@type": "MedicalClinic",
          "name": "Cheema Heart Complex and General Hospital",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "Mian Mian, Zia ul Haq Rd, Civil Lines",
            "addressLocality": "Gujranwala",
            "postalCode": "55250",
            "addressCountry": "PK"
          },
          "openingHours": "Mo-Su 09:00-22:00"
        },
        {
          "@type": "MedicalClinic",
          "name": "Siddique Family Hospital",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "Rahwali",
            "addressLocality": "Gujranwala",
            "addressCountry": "PK"
          }
        }
      ]
    }
  ]
}
</script>
<style>
:root {
  --bg: #f8fbfd;
  --surface: #ffffff;
  --text: #0f172a;
  --text-muted: #475569;
  --brand-sky: #0284c7;
  --brand-sky-hover: #0369a1;
  --brand-teal: #0d9488;
  --brand-teal-hover: #0f766e;
  --brand-soft-sky: #e0f2fe;
  --brand-soft-teal: #ccfbf1;
  --warm-gold: #f59e0b;
  --line: #e2e8f0;
  --line-soft: #f1f5f9;
  --shadow-sm: 0 1px 3px rgba(15, 23, 42, 0.05);
  --shadow-md: 0 4px 20px -2px rgba(2, 132, 199, 0.08);
  --radius-lg: 20px;
  --radius-xl: 28px;
}
* { box-sizing: border-box; }
html { scroll-behavior: smooth; scroll-padding-top: 80px; }
body {
  margin: 0;
  background: var(--bg);
  color: var(--text);
  font-family: 'Plus Jakarta Sans', system-ui, -apple-system, sans-serif;
  line-height: 1.6;
  -webkit-font-smoothing: antialiased;
}
a { color: inherit; text-decoration: none; }
.wrap { max-width: 1080px; margin: 0 auto; padding: 0 20px; }

/* Sticky Header */
header {
  position: sticky;
  top: 0;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border-bottom: 1px solid var(--line-soft);
  z-index: 100;
  transition: all 0.2s ease;
}
header .wrap {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 68px;
  gap: 16px;
}
.brand-lockup {
  display: flex;
  align-items: center;
  gap: 10px;
  font-weight: 700;
  font-size: 1.1rem;
  color: var(--text);
}
.brand-icon {
  width: 36px;
  height: 36px;
  border-radius: 10px;
  background: linear-gradient(135deg, var(--brand-sky), var(--brand-teal));
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.1rem;
}
nav.desktop-nav {
  display: flex;
  align-items: center;
  gap: 24px;
}
nav.desktop-nav a {
  font-size: 0.92rem;
  font-weight: 500;
  color: var(--text-muted);
  transition: color 0.15s ease;
}
nav.desktop-nav a:hover { color: var(--brand-sky); }

/* Buttons */
.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  background: linear-gradient(135deg, var(--brand-sky), var(--brand-teal));
  color: #fff;
  padding: 12px 22px;
  border-radius: 12px;
  font-weight: 600;
  border: 0;
  cursor: pointer;
  font-size: 0.95rem;
  box-shadow: 0 2px 8px rgba(2, 132, 199, 0.2);
  transition: transform 0.15s, opacity 0.15s;
  min-height: 44px;
  white-space: nowrap;
}
.btn:hover { opacity: 0.95; transform: translateY(-1px); }
.btn.alt {
  background: #ffffff;
  color: var(--brand-teal);
  border: 1.5px solid var(--brand-teal);
  box-shadow: none;
}
.btn.alt:hover { background: var(--brand-soft-teal); }
.btn-wa {
  background: linear-gradient(135deg, #10b981, #0d9488);
  box-shadow: 0 2px 8px rgba(16, 185, 129, 0.25);
}

/* Mobile Nav Toggle */
.menu-btn {
  display: none;
  background: transparent;
  border: 1px solid var(--line);
  padding: 8px 12px;
  border-radius: 10px;
  font-size: 1.2rem;
  cursor: pointer;
  color: var(--text);
  min-height: 44px;
  min-width: 44px;
}
.mobile-drawer {
  display: none;
  flex-direction: column;
  background: #fff;
  border-top: 1px solid var(--line);
  padding: 16px 20px;
  gap: 12px;
}
.mobile-drawer.active { display: flex; }
.mobile-drawer a {
  padding: 10px 0;
  font-weight: 500;
  color: var(--text);
  border-bottom: 1px solid var(--line-soft);
}

/* Hero Section */
.hero {
  padding: 60px 0 54px;
  background: linear-gradient(180deg, #f0f9ff 0%, #f0fdfa 50%, var(--bg) 100%);
  border-bottom: 1px solid rgba(2, 132, 199, 0.08);
}
.hero .wrap {
  display: grid;
  grid-template-columns: 1.25fr 1fr;
  gap: 40px;
  align-items: center;
}
.tag {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  background: #ffffff;
  border: 1px solid rgba(245, 158, 11, 0.4);
  color: #b45309;
  padding: 6px 14px;
  border-radius: 99px;
  font-size: 0.85rem;
  font-weight: 600;
  margin-bottom: 16px;
  box-shadow: var(--shadow-sm);
}
h1 {
  font-size: 2.6rem;
  line-height: 1.2;
  margin: 0 0 14px;
  font-weight: 800;
  letter-spacing: -0.02em;
  color: #0f172a;
}
h1 span {
  background: linear-gradient(135deg, var(--brand-sky), var(--brand-teal));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
.hero p {
  color: var(--text-muted);
  font-size: 1.1rem;
  margin: 0 0 24px;
  line-height: 1.65;
}
.cta-group {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
}

/* Cards & Surfaces */
.card {
  background: var(--surface);
  border: 1px solid var(--line);
  border-radius: var(--radius-xl);
  padding: 28px;
  box-shadow: var(--shadow-sm);
  transition: box-shadow 0.2s, border-color 0.2s;
}
.card:hover {
  box-shadow: var(--shadow-md);
  border-color: #cbd5e1;
}
.avatar {
  width: 120px;
  height: 120px;
  border-radius: 50%;
  background: linear-gradient(135deg, var(--brand-sky), var(--brand-teal));
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2.5rem;
  font-weight: 800;
  margin: 0 auto 16px;
  box-shadow: 0 4px 14px rgba(2, 132, 199, 0.2);
}
.stats-strip {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 10px;
  background: #f8fafc;
  padding: 14px;
  border-radius: var(--radius-lg);
  border: 1px solid var(--line-soft);
  text-align: center;
}
.stat b {
  display: block;
  font-size: 1.45rem;
  font-weight: 800;
  color: var(--text);
  font-variant-numeric: tabular-nums;
}
.stat span { color: var(--text-muted); font-size: 0.85rem; font-weight: 500; }

/* Sections */
section { padding: 64px 0; }
section.tinted { background: #f0fdfa; border-top: 1px solid #e0f2fe; border-bottom: 1px solid #e0f2fe; }
.section-header { text-align: center; max-width: 650px; margin: 0 auto 40px; }
h2 { font-size: 2rem; margin: 0 0 8px; font-weight: 800; letter-spacing: -0.01em; }
.sub { color: var(--text-muted); margin: 0; font-size: 1.05rem; }

/* Grid Layouts */
.grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 20px; }
.card h3 { margin: 0 0 8px; font-size: 1.15rem; font-weight: 700; color: var(--text); }
.card p { margin: 0; color: var(--text-muted); font-size: 0.95rem; }
.ic {
  width: 44px;
  height: 44px;
  border-radius: 12px;
  background: var(--brand-soft-sky);
  color: var(--brand-sky);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  margin-bottom: 14px;
}

/* Health Tip */
.tip-container {
  background: linear-gradient(135deg, #f0fdf4 0%, #f0f9ff 100%);
  border: 1px solid #ccfbf1;
  border-radius: var(--radius-xl);
  padding: 32px;
}
.tip-cols {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 28px;
}
.tip-box {
  background: #ffffff;
  padding: 22px;
  border-radius: var(--radius-lg);
  border: 1px solid #e2e8f0;
}
.tip-box b {
  display: block;
  font-size: 1.05rem;
  color: var(--text);
  margin-bottom: 10px;
}
.tip-box ul {
  margin: 0;
  padding-left: 20px;
  color: var(--text-muted);
  line-height: 1.8;
}
.note {
  font-size: 0.85rem;
  color: #b45309;
  background: #fffbeb;
  border: 1px solid #fef3c7;
  padding: 12px 18px;
  border-radius: 12px;
  margin-top: 18px;
  font-weight: 500;
}

/* Locations */
.loc-card {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.loc-badge {
  display: inline-block;
  font-size: 0.75rem;
  font-weight: 700;
  color: var(--brand-sky);
  background: var(--brand-soft-sky);
  padding: 3px 10px;
  border-radius: 99px;
  margin-bottom: 10px;
}

/* Reviews */
.stars {
  color: #f59e0b;
  letter-spacing: 2px;
  font-size: 1.1rem;
  margin-bottom: 10px;
}
.author {
  margin-top: 14px;
  font-weight: 700;
  font-size: 0.88rem;
  color: var(--text);
}

/* Appointment Form */
.form-card {
  background: #ffffff;
  max-width: 580px;
  margin: 0 auto;
  border-radius: var(--radius-xl);
  padding: 36px;
  border: 1px solid var(--line);
  box-shadow: var(--shadow-md);
}
form { display: grid; gap: 16px; }
label { font-size: 0.82rem; font-weight: 700; color: var(--text); text-transform: uppercase; letter-spacing: 0.04em; }
input, select, textarea {
  width: 100%;
  padding: 13px 16px;
  border-radius: 12px;
  border: 1.5px solid var(--line);
  background: #ffffff;
  color: var(--text);
  font: inherit;
  font-size: 0.95rem;
  transition: border-color 0.15s, box-shadow 0.15s;
  min-height: 46px;
}
input:focus, select:focus, textarea:focus {
  outline: none;
  border-color: var(--brand-sky);
  box-shadow: 0 0 0 3px rgba(2, 132, 199, 0.15);
}

/* Footer */
footer {
  background: #ffffff;
  border-top: 1px solid var(--line);
  padding: 40px 0;
  color: var(--text-muted);
  font-size: 0.92rem;
  text-align: center;
}
footer a { color: var(--brand-sky); font-weight: 600; }
.footer-note { margin-top: 8px; font-size: 0.85rem; color: #64748b; }

/* Floating WhatsApp Button for Mobile */
.floating-wa {
  position: fixed;
  bottom: 20px;
  right: 20px;
  background: linear-gradient(135deg, #10b981, #0d9488);
  color: #fff;
  border-radius: 99px;
  padding: 12px 20px;
  display: flex;
  align-items: center;
  gap: 8px;
  font-weight: 700;
  font-size: 0.95rem;
  box-shadow: 0 4px 18px rgba(16, 185, 129, 0.35);
  z-index: 999;
  min-height: 48px;
}

/* Responsive Breakpoints */
@media (max-width: 820px) {
  nav.desktop-nav { display: none; }
  .menu-btn { display: inline-flex; }
  .hero .wrap { grid-template-columns: 1fr; }
  .tip-cols { grid-template-columns: 1fr; }
  h1 { font-size: 2.1rem; }
  section { padding: 48px 0; }
  .form-card { padding: 24px; }
}
@media (max-width: 480px) {
  h1 { font-size: 1.85rem; }
  .cta-group .btn { width: 100%; }
  .stats-strip { grid-template-columns: 1fr 1fr 1fr; gap: 6px; padding: 10px; }
  .stat b { font-size: 1.25rem; }
  .stat span { font-size: 0.75rem; }
}
</style>
</head>
<body>

<header>
  <div class="wrap">
    <a class="brand-lockup" href="#top">
      <div class="brand-icon">🩺</div>
      <span>Dr. Muhammad Abdullah</span>
    </a>
    <nav class="desktop-nav">
      <a href="#about">About</a>
      <a href="#services">Services</a>
      <a href="#tips">Health Tip</a>
      <a href="#locations">Locations</a>
      <a href="#reviews">Reviews</a>
    </nav>
    <div style="display:flex;align-items:center;gap:10px;">
      <a class="btn" href="#book">Book Appointment</a>
      <button class="menu-btn" id="menuToggle" aria-label="Toggle navigation menu">☰</button>
    </div>
  </div>
  <div class="mobile-drawer" id="mobileDrawer">
    <a href="#about" onclick="closeDrawer()">About the doctor</a>
    <a href="#services" onclick="closeDrawer()">Areas of care (Services)</a>
    <a href="#tips" onclick="closeDrawer()">Health Tip (IBS)</a>
    <a href="#locations" onclick="closeDrawer()">Clinic Locations</a>
    <a href="#reviews" onclick="closeDrawer()">Patient Reviews</a>
    <a href="#book" onclick="closeDrawer()" style="font-weight:700;color:var(--brand-sky);">Book on WhatsApp</a>
  </div>
</header>

<div class="hero" id="top">
  <div class="wrap">
    <div>
      <span class="tag">★ 5.0 on Google · 67 reviews</span>
      <h1>Careful, unhurried care for your <span>stomach, liver</span> and general health</h1>
      <p>Dr. Muhammad Abdullah (MBBS, FCPS) sees patients in Gujranwala and Rahwali, specialising in gastroenterology, diabetes and internal medicine.</p>
      <div class="cta-group">
        <a class="btn" href="#book">Book an appointment</a>
        <a class="btn alt" href="https://wa.me/923001625250" target="_blank">WhatsApp us</a>
      </div>
    </div>
    <div class="card" style="text-align:center;">
      <div class="avatar">MA</div>
      <div style="margin-bottom:14px;">
        <b style="display:block;font-size:1.15rem;color:var(--text);">Dr. Muhammad Abdullah</b>
        <span style="font-size:0.85rem;color:var(--text-muted);">MBBS, FCPS · Consultant Physician</span>
      </div>
      <div class="stats-strip">
        <div class="stat"><b>5.0</b><span>Rating</span></div>
        <div class="stat"><b>2</b><span>Clinics</span></div>
        <div class="stat"><b>10 PM</b><span>Closes</span></div>
      </div>
    </div>
  </div>
</div>

<section id="about">
  <div class="wrap">
    <div class="section-header">
      <h2>About the doctor</h2>
      <p class="sub">Patients describe him as attentive, kind and thorough.</p>
    </div>
    <div class="card" style="line-height:1.8;font-size:1.05rem;">
      <p style="color:var(--text);margin:0;">
        Dr. Muhammad Abdullah holds MBBS and FCPS qualifications and focuses on gastroenterology and hepatology, diabetes and internal medicine. Reviewers regularly mention that he gives each patient enough time, explains the diagnosis clearly and involves the family in every step of treatment.
      </p>
    </div>
  </div>
</section>

<section id="services" class="tinted">
  <div class="wrap">
    <div class="section-header">
      <h2>Areas of care</h2>
      <p class="sub">Please call to confirm the full list of services.</p>
    </div>
    <div class="grid">
      <div class="card">
        <div class="ic">🩺</div>
        <h3>Gastroenterology</h3>
        <p>Abdominal pain, bloating, gas, constipation, diarrhoea and IBS.</p>
      </div>
      <div class="card">
        <div class="ic">🫀</div>
        <h3>Hepatology</h3>
        <p>Liver-related concerns and follow-up care.</p>
      </div>
      <div class="card">
        <div class="ic">💧</div>
        <h3>Diabetes</h3>
        <p>Diagnosis, treatment and ongoing monitoring.</p>
      </div>
      <div class="card">
        <div class="ic">🏥</div>
        <h3>Internal medicine</h3>
        <p>Thorough assessment of general adult health problems.</p>
      </div>
    </div>
  </div>
</section>

<section id="tips">
  <div class="wrap">
    <div class="section-header">
      <h2>Health tip: Irritable Bowel Syndrome (IBS)</h2>
      <p class="sub">A common disorder of the large intestine.</p>
    </div>
    <div class="tip-container">
      <div class="tip-cols">
        <div class="tip-box">
          <b>Common symptoms</b>
          <ul>
            <li>Abdominal pain and cramps</li>
            <li>Bloating and gas</li>
            <li>Constipation or diarrhoea</li>
          </ul>
        </div>
        <div class="tip-box">
          <b>Helpful habits</b>
          <ul>
            <li>Eat a balanced diet</li>
            <li>Reduce stress</li>
            <li>Exercise regularly</li>
          </ul>
        </div>
      </div>
      <div class="note">
        General information only. Please consult the doctor for diagnosis and treatment.
      </div>
    </div>
  </div>
</section>

<section id="locations" class="tinted">
  <div class="wrap">
    <div class="section-header">
      <h2>Locations</h2>
      <p class="sub">Appointments are recommended.</p>
    </div>
    <div class="grid" style="grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));">
      <div class="card loc-card">
        <div>
          <span class="loc-badge">Civil Lines</span>
          <h3>📍 Cheema Heart Complex and General Hospital</h3>
          <p>Mian Mian, Zia ul Haq Rd, Civil Lines, Gujranwala 55250</p>
          <p style="margin-top:12px;font-size:0.9rem;color:var(--text-muted);background:#f8fafc;padding:12px;border-radius:12px;border:1px solid var(--line-soft);">
            Open daily until 10 PM · On-site and paid parking · Wheelchair accessible · Credit cards accepted
          </p>
        </div>
        <div style="margin-top:20px;">
          <a class="btn" href="#book" onclick="setClinic('Cheema Heart Complex, Civil Lines')" style="width:100%;">Book at this location</a>
        </div>
      </div>

      <div class="card loc-card">
        <div>
          <span class="loc-badge" style="background:var(--brand-soft-teal);color:var(--brand-teal);">Rahwali</span>
          <h3>📍 Siddique Family Hospital</h3>
          <p>Rahwali, Gujranwala</p>
          <p style="margin-top:12px;font-size:0.9rem;color:var(--text-muted);background:#f8fafc;padding:12px;border-radius:12px;border:1px solid var(--line-soft);">
            Convenient consultation visits for patients in Rahwali and surrounding areas.
          </p>
        </div>
        <div style="margin-top:20px;">
          <a class="btn" href="#book" onclick="setClinic('Siddique Family Hospital, Rahwali')" style="width:100%;">Book at this location</a>
        </div>
      </div>
    </div>
  </div>
</section>

<section id="reviews">
  <div class="wrap">
    <div class="section-header">
      <h2>What patients say</h2>
      <p class="sub">Summarised from Google reviews.</p>
    </div>
    <div class="grid">
      <div class="card">
        <div class="stars">★★★★★</div>
        <p>Professional, kind and attentive. He explained everything clearly and I felt in good hands.</p>
        <div class="author">— Asad B.</div>
      </div>
      <div class="card">
        <div class="stars">★★★★★</div>
        <p>Highly intelligent and caring, not commercial. He gives enough time and studies each case carefully.</p>
        <div class="author">— Noor A.</div>
      </div>
      <div class="card">
        <div class="stars">★★★★★</div>
        <p>Gave my family member ample time for assessment and involved us in every step of treatment.</p>
        <div class="author">— Dr. Aurangzeb K.</div>
      </div>
    </div>
  </div>
</section>

<section id="book" class="tinted">
  <div class="wrap">
    <div class="section-header">
      <h2>Request an appointment</h2>
      <p class="sub">Your request opens in WhatsApp so the clinic can confirm a time.</p>
    </div>
    <div class="form-card">
      <form id="f">
        <div>
          <label for="n">Your Name *</label>
          <input id="n" placeholder="e.g. Asad Beg" required>
        </div>
        <div>
          <label for="p">Phone Number *</label>
          <input id="p" placeholder="e.g. 0300 1234567" required>
        </div>
        <div>
          <label for="l">Location *</label>
          <select id="l">
            <option value="Cheema Heart Complex, Civil Lines">Cheema Heart Complex, Civil Lines</option>
            <option value="Siddique Family Hospital, Rahwali">Siddique Family Hospital, Rahwali</option>
          </select>
        </div>
        <div>
          <label for="m">Describe your concern (optional)</label>
          <textarea id="m" rows="3" placeholder="Briefly describe your symptoms or reason for visit..."></textarea>
        </div>
        <button class="btn btn-wa" type="submit" style="width:100%;font-size:1rem;">Send on WhatsApp</button>
      </form>
    </div>
  </div>
</section>

<footer>
  <div class="wrap">
    <b style="color:var(--text);font-size:1.05rem;">Dr. Muhammad Abdullah</b> · MBBS, FCPS · Call / WhatsApp: <a href="tel:+923001625250">+92 300 1625250</a>
    <div class="footer-note">This is a demo website designed by Safai Web Development Agency.</div>
  </div>
</footer>

<a class="floating-wa" href="https://wa.me/923001625250" target="_blank" aria-label="WhatsApp Appointment">
  💬 WhatsApp
</a>

<script>
// Mobile Drawer Toggle
var menuBtn = document.getElementById('menuToggle');
var drawer = document.getElementById('mobileDrawer');
menuBtn.addEventListener('click', function() {
  drawer.classList.toggle('active');
});
function closeDrawer() {
  drawer.classList.remove('active');
}

// Select Clinic Helper
function setClinic(name) {
  var select = document.getElementById('l');
  if (select) {
    select.value = name;
  }
}

// WhatsApp Appointment Trigger
document.getElementById('f').addEventListener('submit', function(e) {
  e.preventDefault();
  var name = document.getElementById('n').value;
  var phone = document.getElementById('p').value;
  var loc = document.getElementById('l').value;
  var msg = document.getElementById('m').value;
  
  var text = 'Appointment request%0AName: ' + encodeURIComponent(name) +
             '%0APhone: ' + encodeURIComponent(phone) +
             '%0ALocation: ' + encodeURIComponent(loc);
  if (msg && msg.trim()) {
    text += '%0AConcern: ' + encodeURIComponent(msg);
  }
  
  window.open('https://wa.me/923001625250?text=' + text, '_blank');
});
</script>
</body>
</html>`;
