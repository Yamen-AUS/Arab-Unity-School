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

## 🏗️ CMS — Arab Unity School Content Management System

A full client-side CMS built with HTML/CSS/JS. Accessible at `cms/index.html`.
Changes made in the CMS are **automatically reflected on the public website** via `js/cms-data.js` (localStorage bridge).

### CMS Pages (15 total — all complete ✅)

| File | Description |
|------|-------------|
| `cms/index.html` | Login page — 6 demo accounts, sessionStorage auth (`ausUser` key) |
| `cms/dashboard.html` | Dashboard — stat counters, Chart.js bar chart, activity feed |
| `cms/users.html` | Users & Roles — 17 users table, permissions matrix (24×6), add user modal |
| `cms/media.html` | Media Library — drag-drop upload, grid/list view, folder chips |
| `cms/announcements.html` | Announcements — rich text composer, live preview · **syncs → index.html banner** |
| `cms/page-builder.html` | Page Builder — 9 block types, drag-drop canvas, undo/redo |
| `cms/seo.html` | SEO Manager — score rings, SERP preview, keyword rankings |
| `cms/settings.html` | Settings — general, language, emergency alerts, social media, analytics, backup |
| `cms/pages.html` | Pages Manager — 14 pages table, search/filter, status chips |
| `cms/events.html` | Events Manager — 12 events, category filters, add/edit modal · **syncs → events.html** |
| `cms/staff.html` | Staff Profiles — grid/list view, 12 staff, add/edit modal · **syncs → leadership.html** |
| `cms/admissions-cms.html` | Admissions — pipeline kanban, applications table, fees · **syncs → admissions.html** |
| `cms/results-cms.html` | Results — DSIB cards, IGCSE/A-Level tables, Chart.js charts · **syncs → results.html** |
| `cms/gallery.html` | Gallery — 8 albums, lightbox, drag-drop upload, bulk select |
| `cms/documents.html` | Documents — 15 docs, category nav, upload zone, add/edit modal |

---

## 🔄 CMS ↔ Website Live Sync Architecture

### How It Works
All CMS pages write to `localStorage` on every save. All website pages read from `localStorage` on load.
The bridge is `js/cms-data.js` — a shared data layer included in both environments.

```
CMS Page → AUSData.saveXxx(data) → localStorage → AUSData.getXxx() → Website Page
```

### Sync Map

| CMS Page | localStorage Key | Website Page | What Updates |
|----------|-----------------|--------------|--------------|
| `cms/announcements.html` | `aus_announcements` | `index.html` | Top announcement banner bar |
| `cms/events.html` | `aus_events` | `events.html` | Live events section (CMS-managed events appended below static ones) |
| `cms/staff.html` | `aus_staff` | `leadership.html` | CMS-managed staff cards grid |
| `cms/admissions-cms.html` | `aus_fees` | `admissions.html` | Tuition fees table (`#cms-fees-tbody`) |
| `cms/results-cms.html` | `aus_dsib` · `aus_igcse` · `aus_alevel` | `results.html` | DSIB inspection cards grid (`#dsib-cms-grid`) |

### localStorage Keys Reference

| Key | Type | Default |
|-----|------|---------|
| `aus_announcements` | array | 3 live announcements |
| `aus_events` | array | 12 events |
| `aus_staff` | array | 12 staff members |
| `aus_fees` | array | 8 year-group rows |
| `aus_bus_fees` | array | 4 zones |
| `aus_dsib` | array | 6 inspection cards |
| `aus_igcse` | array | 10 subjects |
| `aus_alevel` | array | 8 subjects |
| `aus_settings` | object | School name, social, alerts |
| `aus_last_sync` | ISO string | Timestamp of last CMS save |

### Sync Badge
Every connected CMS page shows **⚡ Synced DD Mon YYYY at HH:MM** in the header bar after saving.

### CMS Access
Two roles are supported: **Super Admin** (full access) and **Marketing** (content/media/SEO only).

Credentials are **not stored in any source file**. They are configured once via `cms/setup.html` and stored as SHA-256 hashes in `localStorage` under `aus_cms_setup`. To (re-)set credentials, visit `cms/setup.html` and follow the prompts. Credentials are shared with authorised staff privately — never committed to the repository or included in any file.

### Role-Based Access Control (Phase 4)
| Section | Super Admin | Marketing |
|---------|-------------|-----------|
| Dashboard | ✅ | ✅ |
| Announcements, Events, Staff, Media | ✅ | ✅ |
| Admissions, Results, Gallery, Documents | ✅ | ✅ |
| SEO Manager | ✅ | ✅ |
| Pages (view) | ✅ | ✅ |
| **Users & Roles** | ✅ | ❌ hidden |
| **Settings** | ✅ | ❌ hidden |
| **Page Builder** | ✅ | ❌ hidden |

Role enforcement is handled by `cms/auth.js` — loaded in every CMS page's `<head>`. It reads `ausUser` from `sessionStorage`, populates the sidebar user block, and calls `applySidebarRoles()` which hides all `[data-role="superadmin"]` nav items from Marketing users.

### Recent School Website Edits (May 2026)
- **Branding**: All "Executive Director" → "Chairman / Owner" for Ms. Arwa across all pages & `lang.js`
- **Admissions**: Bus fee table updated (Deira/Al Mamzar: 1,800→1,880 / 1,350→1,410), detailed bus transport notes block added
- **Curriculum**: PIRLS removed from Secondary assessment list; "English Literature" → "English Language" (IGCSE + A-Level)
- **Results**: Inclusion & Wellbeing card → Health & Safety Across Phases (Very Good)
- **Leadership**: Paresh Bhatt promoted to CFO with 3-paragraph bio; Yamen Mohamed and Paresh Bhatt cards removed from public page
- **Home page**: Intro splash background changed to blue-green gradient
- **Cache**: All 13 HTML files bumped to `lang.js?v=12` for mobile cache-busting

---

## ⏳ Potential Next Steps
- Add `data-i18n` attributes to deeper content sections on inner pages (about strengths cards, admissions steps, results tables, etc.)
- Provide Arabic translations for events/calendar page entries
- Add a language switcher visible on mobile (currently in nav bar only)
- Consider a RTL-specific font size adjustment for headings (Arabic script is shorter)
- CMS: Connect page builder blocks to live website pages via Table API
- CMS: Implement real file upload for media library
- CMS: Add email notification system for announcements
