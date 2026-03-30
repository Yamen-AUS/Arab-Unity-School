# Arab Unity School — Website

Premium British-curriculum school website for Arab Unity School, Dubai.

---

## ✅ Completed Features

### Bilingual Engine — Latest Fixes (March 2026)
- `about.html`: Added `data-i18n` to all 8 DSIB Key Strength cards, the 11 Official Ratings cards, and the "Key Strengths / Key Inspection Strengths" section labels
- `events.html`: Added `data-i18n` to filter buttons 4–7 (Sports, Arts & Culture, Community, Exams), all term-divider banners, and every `Completed`/`Upcoming` badge
- `calendar.html`: Added `data-i18n` to all 4 term names, all row labels (Term Starts, Mid-Term Break, Term Ends, School Days, Key Holiday, exam row labels), all 11 holiday table rows, type badges (Public Holiday / School Break), and the footnote
- `virtual-tour.html`: Added `data-i18n` to the entire Location section (How to Find Us, address, bus routes, by car, school hours, Google Maps button) and the CTA section
- `policies.html`: Added `data-i18n` to the footnote and the full CTA section (eyebrow, heading, lead, both buttons, hours)
- `index.html`: Added `data-i18n` to testimonials eyebrow, h2, all 5 quote paragraphs, all 5 attribution spans, Read All Testimonials link, and 3 slideshow captions
- `results.html`: Added `data-i18n` to all 6 DSIB inspection cards (category labels, rating words, body paragraphs) and source note
- `curriculum.html`: Added `data-i18n` to the "University Destinations" heading and sub-paragraph
- `js/lang.js` (v=3): Added 60+ new translation keys covering all areas above with accurate Modern Standard Arabic



### Core Pages (13 total)
- `index.html` — Home page with hero slideshow, ticker, pillars, numbers, explore panels, video, testimonials, CTA
- `about.html` — School history, Key Strengths (8 cards), values, milestones
- `curriculum.html` — Four coloured curriculum cards (green/green/blue/blue), stage details
- `results.html` — Cambridge IGCSE & A-Level results data
- `admissions.html` — Admissions process, fees table, FAQs
- `leadership.html` — Leadership team profiles
- `testimonials.html` — Parent & pupil testimonials
- `virtual-tour.html` — Campus photo slideshow, facility grid
- `contact.html` — Contact form, map, address
- `policies.html` — Key documents & policies
- `calendar.html` — Academic calendar 2023–2024
- `events.html` — School events calendar
- `alumni.html` — Alumni stories & network

### Navigation & Footer (`js/nav.js?v=22`)
- Fully bilingual: renders translated nav and footer in EN or AR
- Left: "I am looking for…" quick-access dropdown
- Centre: Logo + school name
- Right: Language toggle (EN ↔ AR) · Book a Visit · Search · Hamburger
- Full-screen slide-in panel with all page links
- Footer: brand, quick links, academic links, contact, accreditation strip (Cambridge · Pearson BTEC · OxfordAQA · KHDA)

### Bilingual System (`js/lang.js?v=1`)
- Full EN ↔ AR toggle persisted to `localStorage`
- Accurate Modern Standard Arabic translations for all sections
- `data-i18n` attributes on all translateable elements on all pages
- On language switch: `_ausNavInjectFn` re-renders the entire nav & footer in the new language
- RTL layout applied via `html[dir="rtl"]` CSS rules in all three stylesheets
- Arabic font: Cairo (Google Fonts) for all headings and body text in AR mode

### Hero Slideshow (index.html)
- 4 slides: Students on laptop · Science lab · UAE National Day · AUS Basketball Team
- Basketball team slide uses `object-fit: contain` + blurred backdrop panel for portrait image

### Zoom Effects Removed
- `.aus-slide` photo slideshow — no scale transform
- `.vt-slide` virtual tour slideshow — no scale transform
- `.pp-top img` / `.pp-bottom img` — no hover zoom
- `.ep-panel .ep-bg` — no hover zoom (only flex-grow expansion remains)
- `.video-thumb:hover img` — no hover zoom
- `.facility-item:hover img` (virtual-tour inline CSS) — removed

---

## 📁 File Structure

```
index.html, about.html, curriculum.html, results.html,
admissions.html, leadership.html, testimonials.html,
virtual-tour.html, contact.html, policies.html,
calendar.html, events.html, alumni.html

css/
  style.css?v=28     Global styles + nav + RTL overrides
  home.css?v=35      Home page premium layout + RTL overrides
  inner.css?v=29     Inner pages + curriculum cards + RTL overrides

js/
  lang.js?v=1        Bilingual engine (EN/AR), 200+ translations
  nav.js?v=22        Navigation, footer injection, bilingual support

images/              School photos, logo, basketball team photo
```

---

## 🌐 CSS Version History
- `style.css` → v=28 (RTL overrides added)
- `home.css` → v=35 (RTL + zoom removal)
- `inner.css` → v=29 (curriculum card colours, RTL)
- `nav.js` → v=22 (fully bilingual buildNav/buildFooter functions)
- `lang.js` → v=1 (initial bilingual engine)

---

## ⏳ Potential Next Steps
- Add `data-i18n` attributes to deeper content sections on inner pages (about strengths cards, admissions steps, results tables, etc.)
- Provide Arabic translations for events/calendar page entries
- Add a language switcher visible on mobile (currently in nav bar only)
- Consider a RTL-specific font size adjustment for headings (Arabic script is shorter)
