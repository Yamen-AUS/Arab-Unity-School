/* ================================================================
   js/nav.js  v22 — AUS Sevenoaks Navigation  (Bilingual EN/AR)
   LEFT:   "I am looking for..." dropdown
   CENTER: Logo + school name
   RIGHT:  Language toggle | Book a Visit | Search | Hamburger
   PANEL:  Full-screen slide-in menu
================================================================ */
(function() {
  'use strict';

  /* ── Helper: get translation (falls back to EN) ────────────── */
  function tr(key, lang) {
    if (window.AUS_TRANSLATIONS) {
      var entry = window.AUS_TRANSLATIONS[key];
      if (entry) return entry[lang] || entry['en'] || '';
    }
    /* Inline fallbacks so nav works even if lang.js loads after */
    var FB = {
      'nav.looking':    { en: 'I am looking for...', ar: 'أبحث عن...' },
      'nav.apply':      { en: 'Apply for Admission', ar: 'التقدم للقبول' },
      'nav.policies':   { en: 'Key Documents & Policies', ar: 'الوثائق والسياسات الرئيسية' },
      'nav.visit':      { en: 'Book a School Visit', ar: 'حجز زيارة للمدرسة' },
      'nav.tour':       { en: 'Virtual Tour', ar: 'الجولة الافتراضية' },
      'nav.fees':       { en: 'Fees & Finance', ar: 'الرسوم والتمويل' },
      'nav.calendar':   { en: '📅 Approved School Calendar', ar: '📅 التقويم المدرسي المعتمد' },
      'nav.events':     { en: '🎉 School Events Calendar', ar: '🎉 تقويم الفعاليات المدرسية' },
      'nav.contact':    { en: 'Contact Us', ar: 'تواصل معنا' },
      'nav.book':       { en: 'Book a Visit', ar: 'احجز زيارة' },
      'nav.about':      { en: 'About Us', ar: 'من نحن' },
      'nav.admissions': { en: 'Admissions', ar: 'القبول والتسجيل' },
      'nav.academic':   { en: 'Academic', ar: 'الشؤون الأكاديمية' },
      'nav.results':    { en: 'Results', ar: 'النتائج الأكاديمية' },
      'nav.alumni':     { en: 'Alumni', ar: 'الخريجون' },
      'nav.leadership': { en: 'Leadership', ar: 'فريق القيادة' },
      'nav.community':  { en: 'Community', ar: 'مجتمعنا' },
      'nav.lms':        { en: 'Student LMS Portal', ar: 'بوابة نظام التعلم' },
      'nav.payment':    { en: 'Online Payment', ar: 'الدفع الإلكتروني' },
      'nav.lang':       { en: 'العربية', ar: 'English' },
      'footer.tagline': { en: 'A British school at the heart of Dubai since 1975.', ar: 'مدرسة بريطانية في قلب دبي منذ عام 1975.' },
      'footer.quick':   { en: 'Quick Links', ar: 'روابط سريعة' },
      'footer.academic':{ en: 'Academic', ar: 'الأكاديميات' },
      'footer.contacth':{ en: 'Contact', ar: 'التواصل' },
      'footer.aboutaus':{ en: 'About AUS', ar: 'عن مدرسة الوحدة العربية' },
      'footer.curriculum': { en: 'British Curriculum', ar: 'المنهج البريطاني' },
      'footer.admfees': { en: 'Admissions & Fees', ar: 'القبول والرسوم' },
      'footer.acadresults': { en: 'Academic Results', ar: 'النتائج الأكاديمية' },
      'footer.vtour':   { en: 'Virtual Tour', ar: 'الجولة الافتراضية' },
      'footer.leadership': { en: 'Leadership Team', ar: 'فريق القيادة' },
      'footer.testimonials': { en: 'Testimonials', ar: 'آراء أولياء الأمور' },
      'footer.alumnif': { en: 'Alumni', ar: 'الخريجون' },
      'footer.docpol':  { en: 'Key Documents & Policies', ar: 'الوثائق والسياسات' },
      'footer.eyfs':    { en: 'Early Years (FS2)', ar: 'مرحلة رياض الأطفال (FS2)' },
      'footer.primary': { en: 'Primary School', ar: 'المرحلة الابتدائية' },
      'footer.secondary': { en: 'Secondary School', ar: 'المرحلة الإعدادية' },
      'footer.sixthform': { en: 'Sixth Form', ar: 'الصف السادس (A-Level)' },
      'footer.igcse':   { en: 'Cambridge IGCSE', ar: 'كامبريدج IGCSE' },
      'footer.alevels': { en: 'A-Level Results', ar: 'نتائج A-Level' },
      'footer.address': { en: '5, 3a Street Al Mizhar 1<br>PO Box 10563, Dubai, UAE', ar: 'شارع 3a، رقم 5، الميزر 1<br>صندوق بريد 10563، دبي، الإمارات' },
      'footer.hours1':  { en: 'Mon–Thu: 7:30am – 1:50pm', ar: 'الاثنين–الخميس: 7:30ص – 1:50م' },
      'footer.hours2':  { en: 'Fri: 7:30am – 11:00am', ar: 'الجمعة: 7:30ص – 11:00ص' },
      'footer.copyright': { en: '© 2026 Arab Unity School LLC · Est. 1975', ar: '© 2026 مدرسة الوحدة العربية ذ.م.م · تأسست 1975' },
      'footer.badge1':  { en: 'Cambridge Accredited', ar: 'معتمدة من كامبريدج' },
      'footer.badge2':  { en: 'KHDA Licensed', ar: 'مرخصة من هيئة المعرفة والتنمية البشرية' },
      'footer.badge3':  { en: 'British Curriculum', ar: 'المنهج البريطاني' }
    };
    var fb = FB[key];
    if (fb) return fb[lang] || fb['en'] || '';
    return '';
  }

  /* ── Build NAV HTML ────────────────────────────────────────── */
  function buildNav(lang) {
    var isAr = (lang === 'ar');
    var toggleLabel = isAr ? 'English' : 'العربية';
    var toggleLang  = isAr ? 'en' : 'ar';
    return [
      '<nav id="navbar">',
      '  <div class="nav-inner-aus">',

      '    <!-- LEFT -->',
      '    <div class="nav-quickbox" id="navQuickBox">',
      '      <button class="nav-quick-btn" id="navQuickBtn" onclick="ausToggleQuick()" aria-expanded="false">',
      '        <span>' + tr('nav.looking', lang) + '</span>',
      '        <svg class="nav-quick-arrow" width="14" height="14" viewBox="0 0 14 14" fill="none">',
      '          <path d="M2 4.5L7 9.5L12 4.5" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>',
      '        </svg>',
      '      </button>',
      '      <div class="nav-quick-drop" id="navQuickDrop">',
      '        <a href="admissions.html" class="nqd-item nqd-red">' + tr('nav.apply', lang) + '</a>',
      '        <a href="policies.html" class="nqd-item nqd-green">' + tr('nav.policies', lang) + '</a>',
      '        <a href="contact.html" class="nqd-item nqd-teal">' + tr('nav.visit', lang) + '</a>',
      '        <a href="virtual-tour.html" class="nqd-item nqd-purple">' + tr('nav.tour', lang) + '</a>',
      '        <a href="admissions.html#fees" class="nqd-item nqd-orange">' + tr('nav.fees', lang) + '</a>',
      '        <a href="calendar.html" class="nqd-item nqd-blue">' + tr('nav.calendar', lang) + '</a>',
      '        <a href="events.html" class="nqd-item nqd-pink">' + tr('nav.events', lang) + '</a>',
      '        <a href="contact.html" class="nqd-item nqd-lavender">' + tr('nav.contact', lang) + '</a>',
      '      </div>',
      '    </div>',

      '    <!-- CENTER: Logo -->',
      '    <a href="index.html" class="nav-brand-center">',
      '      <img src="images/school-logo.png" alt="Arab Unity School" class="nav-logo-img"',
      '        style="background:transparent;padding:0;border-radius:0;"',
      '        onerror="this.onerror=null;this.src=\'https://www.arabunityschool.ae/wp-content/uploads/2021/08/AUS-FINAL-LOGO-2024-1-300x252.png\'">',
      '      <span class="nav-school-name">Arab Unity School</span>',
      '    </a>',

      '    <!-- RIGHT -->',
      '    <div class="nav-right-actions">',
      '      <button class="aus-lang-toggle" onclick="AUS_LANG.toggle()" lang="' + toggleLang + '" title="Switch language">' + toggleLabel + '</button>',
      '      <a href="contact.html" class="nav-book-visit">' + tr('nav.book', lang) + '</a>',
      '      <button class="nav-search-btn" id="navSearchBtn" onclick="ausToggleSearch()" aria-label="Search">',
      '        <svg width="18" height="18" viewBox="0 0 20 20" fill="none">',
      '          <circle cx="8.5" cy="8.5" r="5.5" stroke="currentColor" stroke-width="1.8"/>',
      '          <path d="M13 13L17.5 17.5" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/>',
      '        </svg>',
      '      </button>',
      '      <button class="nav-menu-btn" id="navMenuBtn" onclick="ausToggleMenu()" aria-label="Open menu">',
      '        <span class="hmb-line"></span>',
      '        <span class="hmb-line"></span>',
      '        <span class="hmb-line"></span>',
      '      </button>',
      '    </div>',

      '  </div>',

      '  <!-- Search bar -->',
      '  <div class="nav-search-bar" id="navSearchBar">',
      '    <div class="nav-search-inner">',
      '      <input type="text" placeholder="' + (isAr ? 'ابحث في مدرسة الوحدة العربية...' : 'Search Arab Unity School...') + '" class="nav-search-input" id="navSearchInput"',
      '        onkeydown="if(event.key===\'Escape\')ausToggleSearch()">',
      '      <button onclick="ausToggleSearch()" class="nav-search-close">&#10005;</button>',
      '    </div>',
      '  </div>',
      '</nav>',

      /* Full-screen panel */
      '<div class="nav-panel" id="navPanel">',
      '  <div class="nav-panel-inner">',
      '    <div class="nav-panel-header">',
      '      <div class="nav-panel-portals">',
      '        <a href="https://uae.edu-nation.net/" target="_blank" rel="noopener" class="npp-lms">',
      '          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" style="flex-shrink:0">',
      '            <rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" stroke-width="1.8"/>',
      '            <path d="M3 9h18M9 21V9" stroke="currentColor" stroke-width="1.8"/>',
      '          </svg>',
      '          ' + tr('nav.lms', lang),
      '        </a>',
      '        <span class="npp-divider">|</span>',
      '        <a href="https://skiply.ae/" target="_blank" rel="noopener" class="npp-pay">',
      '          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" style="flex-shrink:0">',
      '            <rect x="1" y="4" width="22" height="16" rx="2" stroke="currentColor" stroke-width="1.8"/>',
      '            <path d="M1 10h22" stroke="currentColor" stroke-width="1.8"/>',
      '          </svg>',
      '          ' + tr('nav.payment', lang),
      '        </a>',
      '      </div>',
      '      <button class="nav-panel-close" onclick="ausToggleMenu()" aria-label="Close menu">',
      '        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">',
      '          <path d="M2 2L18 18M18 2L2 18" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>',
      '        </svg>',
      '      </button>',
      '    </div>',
      '    <nav class="nav-panel-nav">',
      '      <a href="about.html"        class="nav-panel-item">' + tr('nav.about', lang) + ' <span>&#8250;</span></a>',
      '      <a href="admissions.html"   class="nav-panel-item">' + tr('nav.admissions', lang) + ' <span>&#8250;</span></a>',
      '      <a href="curriculum.html"   class="nav-panel-item">' + tr('nav.academic', lang) + ' <span>&#8250;</span></a>',
      '      <a href="results.html"      class="nav-panel-item">' + tr('nav.results', lang) + ' <span>&#8250;</span></a>',
      '      <a href="alumni.html"       class="nav-panel-item">' + tr('nav.alumni', lang) + ' <span>&#8250;</span></a>',
      '      <a href="virtual-tour.html" class="nav-panel-item">' + tr('nav.tour', lang) + ' <span>&#8250;</span></a>',
      '      <a href="leadership.html"   class="nav-panel-item">' + tr('nav.leadership', lang) + ' <span>&#8250;</span></a>',
      '      <a href="testimonials.html" class="nav-panel-item">' + tr('nav.community', lang) + ' <span>&#8250;</span></a>',
      '      <a href="contact.html"      class="nav-panel-item">' + tr('nav.contact', lang) + ' <span>&#8250;</span></a>',
      '      <a href="policies.html"     class="nav-panel-item">' + tr('nav.policies', lang) + ' <span>&#8250;</span></a>',
      '    </nav>',
      '    <div class="nav-panel-footer">',
      '      <div class="nav-panel-social">',
      '        <a href="https://www.facebook.com/arabunityschool2021/" target="_blank" rel="noopener" class="nps-link" title="Facebook">',
      '          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/></svg>',
      '        </a>',
      '        <a href="https://www.instagram.com/arabunityschoolcommunity/" target="_blank" rel="noopener" class="nps-link" title="Instagram">',
      '          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="5"/><circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none"/></svg>',
      '        </a>',
      '        <a href="https://www.youtube.com/@arabunityschool3443" target="_blank" rel="noopener" class="nps-link" title="YouTube">',
      '          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M22.54 6.42a2.78 2.78 0 00-1.95-1.97C18.88 4 12 4 12 4s-6.88 0-8.59.45A2.78 2.78 0 001.46 6.42 29 29 0 001 12a29 29 0 00.46 5.58A2.78 2.78 0 003.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.45a2.78 2.78 0 001.95-1.95A29 29 0 0023 12a29 29 0 00-.46-5.58zM9.75 15.02V8.98L15.5 12l-5.75 3.02z"/></svg>',
      '        </a>',
      '      </div>',
      '      <a href="admissions.html" class="nav-panel-apply">' + tr('nav.apply', lang) + ' &rarr;</a>',
      '      <div class="nav-panel-contact">',
      '        <span>&#128222; +971 (0)4 288 6226</span>',
      '        <span>&#9993; info@arabunityschool.ae</span>',
      '      </div>',
      '    </div>',
      '  </div>',
      '</div>',
      '<div class="nav-panel-backdrop" id="navBackdrop" onclick="ausToggleMenu()"></div>'
    ].join('\n');
  }

  /* ── Build FOOTER HTML ─────────────────────────────────────── */
  function buildFooter(lang) {
    return [
      '<footer class="aus-footer">',
      '  <div class="aus-footer-inner">',
      '    <div class="aus-footer-brand">',
      '      <img src="images/school-logo.png" alt="Arab Unity School"',
      '        style="height:68px;width:auto;background:transparent;border-radius:0;padding:0;filter:none;opacity:1;display:block;margin-bottom:16px;"',
      '        onerror="this.onerror=null;this.src=\'https://www.arabunityschool.ae/wp-content/uploads/2021/08/AUS-FINAL-LOGO-2024-1-300x252.png\'">',
      '      <p class="aus-footer-tagline">' + tr('footer.tagline', lang) + '</p>',
      '      <div class="aus-footer-social">',
      '        <a href="https://www.facebook.com/arabunityschool2021/" target="_blank" rel="noopener" title="Facebook">',
      '          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/></svg>',
      '        </a>',
      '        <a href="https://www.instagram.com/arabunityschoolcommunity/" target="_blank" rel="noopener" title="Instagram">',
      '          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="5"/><circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none"/></svg>',
      '        </a>',
      '        <a href="https://www.youtube.com/@arabunityschool3443" target="_blank" rel="noopener" title="YouTube">',
      '          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M22.54 6.42a2.78 2.78 0 00-1.95-1.97C18.88 4 12 4 12 4s-6.88 0-8.59.45A2.78 2.78 0 001.46 6.42 29 29 0 001 12a29 29 0 00.46 5.58A2.78 2.78 0 003.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.45a2.78 2.78 0 001.95-1.95A29 29 0 0023 12a29 29 0 00-.46-5.58zM9.75 15.02V8.98L15.5 12l-5.75 3.02z"/></svg>',
      '        </a>',
      '      </div>',
      '    </div>',
      '    <div>',
      '      <h5>' + tr('footer.quick', lang) + '</h5>',
      '      <ul>',
      '        <li><a href="about.html">' + tr('footer.aboutaus', lang) + '</a></li>',
      '        <li><a href="curriculum.html">' + tr('footer.curriculum', lang) + '</a></li>',
      '        <li><a href="admissions.html">' + tr('footer.admfees', lang) + '</a></li>',
      '        <li><a href="results.html">' + tr('footer.acadresults', lang) + '</a></li>',
      '        <li><a href="virtual-tour.html">' + tr('footer.vtour', lang) + '</a></li>',
      '        <li><a href="leadership.html">' + tr('footer.leadership', lang) + '</a></li>',
      '        <li><a href="testimonials.html">' + tr('footer.testimonials', lang) + '</a></li>',
      '        <li><a href="alumni.html">' + tr('footer.alumnif', lang) + '</a></li>',
      '        <li><a href="policies.html">' + tr('footer.docpol', lang) + '</a></li>',
      '      </ul>',
      '    </div>',
      '    <div>',
      '      <h5>' + tr('footer.academic', lang) + '</h5>',
      '      <ul>',
      '        <li><a href="curriculum.html#eyfs">' + tr('footer.eyfs', lang) + '</a></li>',
      '        <li><a href="curriculum.html#primary">' + tr('footer.primary', lang) + '</a></li>',
      '        <li><a href="curriculum.html#secondary">' + tr('footer.secondary', lang) + '</a></li>',
      '        <li><a href="curriculum.html#sixthform">' + tr('footer.sixthform', lang) + '</a></li>',
      '        <li><a href="results.html">' + tr('footer.igcse', lang) + '</a></li>',
      '        <li><a href="results.html">' + tr('footer.alevels', lang) + '</a></li>',
      '      </ul>',
      '    </div>',
      '    <div>',
      '      <h5>' + tr('footer.contacth', lang) + '</h5>',
      '      <ul class="aus-footer-contact">',
      '        <li>' + tr('footer.address', lang) + '</li>',
      '        <li>+971 (0)4 288 6226</li>',
      '        <li>info@arabunityschool.ae</li>',
      '        <li>' + tr('footer.hours1', lang) + '</li>',
      '        <li>' + tr('footer.hours2', lang) + '</li>',
      '      </ul>',
      '    </div>',
      '  </div>',
      '  <div class="aus-footer-accred">',
      '    <span class="aus-accred-pill">Cambridge Assessment International Education &mdash; Cambridge International School</span>',
      '    <span class="aus-accred-dot"></span>',
      '    <span class="aus-accred-pill">Pearson BTEC &mdash; Approved Centre</span>',
      '    <span class="aus-accred-dot"></span>',
      '    <span class="aus-accred-pill">OxfordAQA Centre</span>',
      '    <span class="aus-accred-dot"></span>',
      '    <span class="aus-accred-pill">KHDA Licensed</span>',
      '  </div>',
      '  <div class="aus-footer-bottom">',
      '    <p>' + tr('footer.copyright', lang) + '</p>',
      '    <div class="aus-footer-badges">',
      '      <span>' + tr('footer.badge1', lang) + '</span>',
      '      <span>' + tr('footer.badge2', lang) + '</span>',
      '      <span>' + tr('footer.badge3', lang) + '</span>',
      '    </div>',
      '  </div>',
      '</footer>',
      '<button id="scrollTop" onclick="window.scrollTo({top:0,behavior:\'smooth\'})" aria-label="Back to top">&#8593;</button>'
    ].join('\n');
  }

  /* ── INJECT NAV + FOOTER ──────────────────────────────────── */
  var _currentLang = (localStorage.getItem('aus_lang')) || 'en';

  function injectAll(lang) {
    lang = lang || _currentLang;
    _currentLang = lang;

    /* Remove existing nav/footer if re-injecting */
    var oldNav      = document.getElementById('navbar');
    var oldPanel    = document.getElementById('navPanel');
    var oldBackdrop = document.getElementById('navBackdrop');
    var oldFooter   = document.querySelector('footer.aus-footer');
    var oldScrollTop= document.getElementById('scrollTop');
    if (oldNav)      oldNav.remove();
    if (oldPanel)    oldPanel.remove();
    if (oldBackdrop) oldBackdrop.remove();
    if (oldFooter)   oldFooter.remove();
    if (oldScrollTop)oldScrollTop.remove();

    document.body.insertAdjacentHTML('afterbegin', buildNav(lang));
    document.body.insertAdjacentHTML('beforeend', buildFooter(lang));

    /* Re-attach active link state */
    var page = window.location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('.nav-panel-item').forEach(function(a) {
      if (a.getAttribute('href') === page) a.classList.add('active');
    });

    /* Re-attach scroll handler */
    onScroll();
  }

  /* Expose for lang.js to call on language switch */
  window._ausNavInjectFn = injectAll;

  /* Initial inject */
  injectAll(_currentLang);

  /* ── SCROLL: solid navbar + scroll-top button ─────────────── */
  function onScroll() {
    var nb = document.getElementById('navbar');
    var st = document.getElementById('scrollTop');
    if (nb) nb.classList.toggle('scrolled', window.scrollY > window.innerHeight * 0.2);
    if (st) st.classList.toggle('visible', window.scrollY > 500);
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* ── INTERSECTION OBSERVER: fade-in ──────────────────────── */
  var fObs = new IntersectionObserver(function(entries) {
    entries.forEach(function(e) {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
        fObs.unobserve(e.target);
      }
    });
  }, { threshold: 0.07 });

  document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.fade-in').forEach(function(el) {
      var r = el.getBoundingClientRect();
      if (r.top < window.innerHeight && r.bottom > 0) {
        el.style.cssText = 'opacity:1;transform:none;';
      } else {
        fObs.observe(el);
      }
    });
  });

})(); /* end IIFE */

/* ── GLOBAL TOGGLE FUNCTIONS ──────────────────────────────── */
function ausToggleMenu() {
  var panel    = document.getElementById('navPanel');
  var backdrop = document.getElementById('navBackdrop');
  var btn      = document.getElementById('navMenuBtn');
  if (!panel) return;
  var open = panel.classList.toggle('open');
  if (backdrop) backdrop.classList.toggle('open', open);
  document.body.style.overflow = open ? 'hidden' : '';
  if (btn) {
    var lines = btn.querySelectorAll('.hmb-line');
    if (open) {
      lines[0].style.cssText = 'transform:rotate(45deg) translate(5px,5px)';
      lines[1].style.cssText = 'opacity:0;transform:scaleX(0)';
      lines[2].style.cssText = 'transform:rotate(-45deg) translate(5px,-5px)';
    } else {
      lines.forEach(function(l) { l.style.cssText = ''; });
    }
  }
  ausCloseQuick();
}

function ausToggleQuick() {
  var drop = document.getElementById('navQuickDrop');
  var btn  = document.getElementById('navQuickBtn');
  if (!drop) return;
  var open = drop.classList.toggle('open');
  if (btn) btn.setAttribute('aria-expanded', open);
  var arrow = btn && btn.querySelector('.nav-quick-arrow');
  if (arrow) arrow.style.transform = open ? 'rotate(180deg)' : 'rotate(0deg)';
}

function ausCloseQuick() {
  var drop = document.getElementById('navQuickDrop');
  var btn  = document.getElementById('navQuickBtn');
  if (drop) drop.classList.remove('open');
  if (btn)  btn.setAttribute('aria-expanded', 'false');
  var arrow = btn && btn.querySelector('.nav-quick-arrow');
  if (arrow) arrow.style.transform = 'rotate(0deg)';
}

function ausToggleSearch() {
  var bar   = document.getElementById('navSearchBar');
  var input = document.getElementById('navSearchInput');
  if (!bar) return;
  var open = bar.classList.toggle('open');
  if (open && input) input.focus();
}

/* Close quick-drop on outside click */
document.addEventListener('click', function(e) {
  var box = document.getElementById('navQuickBox');
  if (box && !box.contains(e.target)) ausCloseQuick();
});
