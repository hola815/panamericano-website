# Service-Struktur — Colegio Panamericano Website

## Projektübersicht

| Feld | Wert |
|------|------|
| **Projektname** | Colegio Panamericano Guatemala |
| **Technologie** | Next.js 14 (App Router), TypeScript, Tailwind CSS, Framer Motion, Lucide React |
| **Projektart** | Onepager + 1 Unterseite (Noticias/Blog) |
| **Sprache** | Spanisch (Guatemala) |
| **Domain** | https://www.panamericano.edu.gt |
| **Hauptdateien** | `app/page.tsx`, `app/layout.tsx`, `app/globals.css`, `components/*.tsx` |
| **Build-Output** | `out/` (statischer Export für Netlify) |

---

## Seitenübersicht

### Seite 1: Startseite (Onepager)
- **Route:** `/`
- **Datei:** `app/page.tsx`
- **Art:** Onepager — alle Sections auf einer Seite, Navigation per Anker-Links

### Seite 2: Noticias-Detailseite
- **Route:** `/noticias/[slug]`
- **Datei:** `app/noticias/[slug]/page.tsx`
- **Art:** Dynamische Seite, Inhalte als Array in der Datei selbst

---

## Section-Mapping

Alle Sections auf der Startseite sind mit `data-block`, `data-section` und `id` markiert.

### GLOBAL-NAV — Navigation
- **ID:** `global-nav`
- **data-block:** `GLOBAL-NAV`
- **data-component:** `Header`, `Navigation`
- **Datei:** `components/Navbar.tsx`
- **Typische Änderungen:**
  - Nav-Links ändern → `navLinks` Array in Navbar.tsx (Zeile 10–26)
  - Logo austauschen → `src="/logo.png"` in Navbar.tsx (Zeile 74 / 185)
  - CTA-Button "Inscríbete" → `data-editable="button"` (Zeile 151–156)

---

### HOME-A-HERO — Hero-Bereich
- **ID:** `inicio`
- **data-block:** `HOME-A-HERO`
- **data-section:** `Startseite / Hero`
- **Datei:** `components/Hero.tsx`
- **Markierte Elemente:**
  - `data-editable="headline"` — Hauptüberschrift H1
  - `data-editable="text"` — Untertitel
  - `data-editable="button"` — CTA-Buttons (2×)
- **Typische Änderungen:**
  - Hauptüberschrift → `<motion.h1 data-editable="headline">` (Zeile ~93)
  - Untertitel → `<motion.p data-editable="text">` (Zeile ~105)
  - CTA-Button-Text → `<Link data-editable="button">` (Zeile ~124, 135)
  - Mini-Stats ("+30", "100%", "Nacional") → `stats`-Array (Zeile ~149–153)
  - Badge-Text ("Educación innovadora desde 1996") → Inline-Text (Zeile ~87)

---

### HOME-B-STATS — Statistiken
- **ID:** `home-b-stats`
- **data-block:** `HOME-B-STATS`
- **data-section:** `Startseite / Statistiken`
- **Datei:** `components/Stats.tsx`
- **Typische Änderungen:**
  - Werte und Labels → `stats` Array (Zeile 28–69) — `value`, `label`, `description` pro Karte

---

### HOME-C-ABOUT — Über uns
- **ID:** `nosotros`
- **data-block:** `HOME-C-ABOUT`
- **data-section:** `Startseite / Über uns`
- **Datei:** `components/About.tsx`
- **Markierte Elemente:**
  - `data-editable="headline"` — H2 Überschrift
  - `data-editable="text"` — Hauptabsatz
- **Typische Änderungen:**
  - Überschrift → `<motion.h2 data-editable="headline">` (Zeile ~75)
  - Absatz-Text → `<motion.p data-editable="text">` (Zeile ~84)
  - Werte-Karten → `values` Array (Zeile 9–14)
  - Bilder → Unsplash-URLs in `<img src="...">` (Zeile ~163, ~173)
  - Floating Badge → Zeile ~183

---

### HOME-D-SERVICES — Programme
- **ID:** `programas`
- **data-block:** `HOME-D-SERVICES`
- **data-section:** `Startseite / Programme`
- **Datei:** `components/Programs.tsx`
- **Markierte Elemente:**
  - `data-editable="headline"` — H2 Überschrift
- **Typische Änderungen:**
  - Programm-Karten → `programs` Array (Zeile 9–83) — `level`, `grades`, `description`, `highlights` pro Karte
  - Überschrift → `<h2 data-editable="headline">` (Zeile ~107)
  - Bild → `src="/student3.png"` (Zeile ~167)

---

### HOME-E-ONLINE — Online-Bildung
- **ID:** `online`
- **data-block:** `HOME-E-ONLINE`
- **data-section:** `Startseite / Online-Bildung`
- **Datei:** `components/OnlineEducation.tsx`
- **Markierte Elemente:**
  - `data-editable="headline"` — H2 Überschrift
  - `data-editable="text"` — Hauptabsatz
- **Typische Änderungen:**
  - Feature-Karten → `features` Array (Zeile 8–33)
  - Überschrift → `<h2 data-editable="headline">` (Zeile ~74)
  - Text → `<p data-editable="text">` (Zeile ~79)
  - CTA-Button → Zeile ~109

---

### HOME-F-NEWS — Neuigkeiten / Blog
- **ID:** `noticias`
- **data-block:** `HOME-F-NEWS`
- **data-section:** `Startseite / Neuigkeiten`
- **Datei:** `components/News.tsx`
- **Markierte Elemente:**
  - `data-editable="headline"` — H2 Überschrift
- **Typische Änderungen:**
  - Blog-Posts → `posts` Array (Zeile 11–50) — `title`, `excerpt`, `image`, `date`, `category`, `slug` pro Post
  - Volltext der Posts → `app/noticias/[slug]/page.tsx` — `articles` Array
  - Neuen Post hinzufügen: In `posts` (News.tsx) UND `articles` (page.tsx) gleichzeitig ergänzen

---

### HOME-G-ACCESOS — Schnellzugänge
- **ID:** `accesos`
- **data-block:** `HOME-G-ACCESOS`
- **data-section:** `Startseite / Zugänge`
- **Datei:** `components/Accesos.tsx`
- **Typische Änderungen:**
  - Zugangs-Links → `accesos` Array (Zeile 8–39) — `title`, `description`, `href` pro Karte

---

### HOME-H-CTA-CONTACT — Kontakt
- **ID:** `contacto`
- **data-block:** `HOME-H-CTA-CONTACT`
- **data-section:** `Startseite / Kontakt`
- **Datei:** `components/Contact.tsx`
- **Markierte Elemente:**
  - `data-editable="headline"` — H2 Überschrift
  - `data-component="ContactForm"` — das Formular
- **Typische Änderungen:**
  - Kontaktdaten (Telefon, E-Mail) → `contactInfo` Array (Zeile 16–41)
  - Formular-Felder → im `<form data-component="ContactForm">` Block
  - Formular-Aktion → `handleSubmit` Funktion (Zeile 67–74) — aktuell Simulation, API-URL eintragen

---

### GLOBAL-FOOTER — Footer
- **ID:** `global-footer`
- **data-block:** `GLOBAL-FOOTER`
- **data-component:** `Footer`
- **Datei:** `components/Footer.tsx`
- **Typische Änderungen:**
  - Footer-Links → `footerLinks` Objekt (Zeile 6–31)
  - Social-Links → `socialLinks` Array (Zeile 33–55)
  - Copyright-Text → `<p data-editable...>` (Zeile ~113)
  - Logo → `<Image src="/logo.png">` (Zeile ~72)

---

### Globale Floating-Elemente
- **WhatsApp-Button:** `components/WhatsAppButton.tsx`
  - Telefonnummer: `whatsappNumber = "50230175602"` (Zeile 11)
  - Nachricht: `message = encodeURIComponent(...)` (Zeile 12–14)
- **Scroll-Fortschrittsbalken:** `components/ScrollProgressBar.tsx`
- **Dekorative Studentenbilder** (Contact/Footer-Grenze): `app/page.tsx` Zeile 47–66
  - Bilder: `/bild9.png` (links), `/bild13.png` (rechts)

---

## Komponentenübersicht

| Komponente | Datei | data-component | Beschreibung |
|-----------|-------|----------------|--------------|
| Header / Navbar | `components/Navbar.tsx` | `Header`, `Navigation` | Fixierte Navigation mit Dropdown und Mobile-Menü |
| Hero | `components/Hero.tsx` | — | Fullscreen-Hero mit Animations |
| Statistiken | `components/Stats.tsx` | — | 4 Zählkarten mit Counter-Animation |
| Über uns | `components/About.tsx` | — | Text + Bilder-Collage |
| Programme | `components/Programs.tsx` | — | 4 aufklappbare Programm-Karten |
| Online-Bildung | `components/OnlineEducation.tsx` | — | Feature-Karten + Browser-Mockup |
| Neuigkeiten | `components/News.tsx` | — | 3 Blog-Karten |
| Zugänge | `components/Accesos.tsx` | — | 3 externe Plattform-Links |
| Kontakt | `components/Contact.tsx` | `ContactForm` | Info-Karten + Dual-Formular |
| Footer | `components/Footer.tsx` | `Footer` | Links, Social, Copyright |
| WhatsApp-Button | `components/WhatsAppButton.tsx` | — | Floating Chat-Button |
| Scroll-Balken | `components/ScrollProgressBar.tsx` | — | Fortschrittsbalken oben |
| Galerie | `components/Gallery.tsx` | — | **Inaktiv** — nicht in page.tsx eingebunden |

---

## Content-Struktur

**Texte liegen direkt im Code** (keine separate Content-Datei / kein CMS).

| Art | Wo | Wie ändern |
|-----|----|-----------|
| Section-Überschriften | Direkt in JSX, markiert mit `data-editable="headline"` | In der jeweiligen `components/*.tsx` Datei |
| Fließtexte / Absätze | Direkt in JSX, markiert mit `data-editable="text"` | In der jeweiligen `components/*.tsx` Datei |
| Karten-Inhalte (Stats, Programme, Features, News) | Arrays am Dateianfang jeder Komponente | Array-Einträge in der jeweiligen Datei bearbeiten |
| Blog-Volltexte | `articles` Array in `app/noticias/[slug]/page.tsx` | Neuen Eintrag im `articles` Array hinzufügen |
| Nav-Links | `navLinks` Array in `components/Navbar.tsx` Zeile 10 | Einträge bearbeiten oder ergänzen |
| Footer-Links | `footerLinks` Objekt in `components/Footer.tsx` Zeile 6 | Einträge bearbeiten oder ergänzen |
| SEO-Metadaten | `app/layout.tsx` — `metadata` Objekt (Zeile 12) | `title`, `description`, `keywords` etc. |
| Strukturierte Daten (Schema.org) | `app/layout.tsx` — `structuredData` Objekt (Zeile 75) | JSON-Objekt anpassen |

---

## Asset-Struktur

Alle Assets liegen in `public/` (Next.js-Standard).

```
public/
├── logo.jpg          — Logo (JPG-Version, nicht aktiv genutzt)
├── logo.png          — Logo Hauptdatei (aktiv: Navbar, Footer, Social)
├── student.png       — Studentenbild (inaktiv)
├── student2.png      — Studentenbild (inaktiv)
├── student3.png      — Studentenbild (aktiv: Programs-Section)
├── bild9.png         — Studentenbild links (aktiv: Dekorationselement)
├── bild10.png        — Studentenbild (inaktiv)
├── bild13.png        — Studentenbild rechts (aktiv: Dekorationselement)
├── robots.txt        — SEO
└── sitemap.xml       — SEO
```

**Unterordner fehlen noch.** Verschieben wäre riskant, da alle Pfade als `/dateiname.png` in den Komponenten hardcodiert sind. Empfehlung: Neue Assets nach `public/images/`, `public/logos/` etc. ablegen und die Pfade direkt in der jeweiligen Komponente anpassen.

**Bilder aus Unsplash (extern, kein Upload):**
- About-Section: 2 Bilder von Unsplash (Zeile ~163, ~173 in About.tsx)
- News-Karten: 3 Bilder von Unsplash (in `posts` Array in News.tsx)
- News-Volltext-Header: Unsplash-URLs in `articles` Array in page.tsx

**Empfehlung für neue Assets:**
- Logo-Ersatz → `public/logo.png` überschreiben (gleicher Name, keine Code-Änderung nötig)
- Neue Bilder → `public/images/[name].jpg` ablegen, Pfad in der Komponente anpassen

---

## Formular-Hinweise

**Kontaktformular** (`components/Contact.tsx`, Zeile 67–74):
- Aktuell **Simulation ohne echte Übermittlung** (setTimeout, kein API-Call)
- Für echte Übermittlung: `handleSubmit` Funktion anpassen → z. B. Formspree, Netlify Forms oder eigene API
- Felder: Name, Telefon, E-Mail, Programm-Auswahl, Nachricht + optionales Datum bei "Cita"
- Zwei Modi: "Solicitar Información" und "Reservar Cita" (Toggle-Buttons)

---

## Mehrsprachigkeit

Das Projekt ist **einsprachig (Spanisch / Guatemala)**, keine i18n-Struktur vorhanden.

---

## Änderungsregeln

1. **Design erhalten** — Tailwind-Klassen, Farben (`primary-700`, `accent-500`) und Animationen nicht entfernen
2. **Nur angefragte Bereiche ändern** — keine benachbarten Blöcke anfassen
3. **Keine neuen Libraries** — Framer Motion und Lucide React sind bereits installiert
4. **Mobile Ansicht prüfen** — alle Sections sind responsive, Tailwind-Breakpoints beachten (`sm:`, `lg:`)
5. **Anker-IDs nicht umbenennen** — `#inicio`, `#nosotros`, `#programas`, `#online`, `#noticias`, `#accesos`, `#contacto` werden von Navigation genutzt
6. **Build testen** — `npm run build` nach jeder Änderung; Fehler in TypeScript sofort beheben
7. **Bilder-Pfade prüfen** — Next.js `<Image>` erwartet optimierbare Pfade; externe URLs (Unsplash) als `unoptimized` oder über `next.config.mjs` `remotePatterns` konfigurieren

---

## Typische Änderungsfälle

| Änderung | Datei | Zeile / Bereich |
|---------|-------|-----------------|
| Hero-Überschrift | `components/Hero.tsx` | `data-editable="headline"` ~Zeile 93 |
| Hero-Subtext | `components/Hero.tsx` | `data-editable="text"` ~Zeile 105 |
| Hero-Button-Text | `components/Hero.tsx` | `data-editable="button"` ~Zeile 124, 135 |
| Logo tauschen | `public/logo.png` überschreiben | Kein Code-Änderung nötig |
| Telefonnummer | `components/Contact.tsx` Zeile 18, `components/WhatsAppButton.tsx` Zeile 11 | `contactInfo` Array + WhatsApp-Nummer |
| Navigation-Links | `components/Navbar.tsx` Zeile 10 | `navLinks` Array |
| Programm-Karte bearbeiten | `components/Programs.tsx` Zeile 9 | `programs` Array — `level`, `description`, `highlights` |
| News-Vorschaukarte | `components/News.tsx` Zeile 11 | `posts` Array |
| News-Volltext | `app/noticias/[slug]/page.tsx` Zeile 6 | `articles` Array |
| Statistiken | `components/Stats.tsx` Zeile 28 | `stats` Array — `value`, `label`, `description` |
| Footer-Links | `components/Footer.tsx` Zeile 6 | `footerLinks` Objekt |
| Social-Links | `components/Footer.tsx` Zeile 33 | `socialLinks` Array |
| SEO-Titel & Description | `app/layout.tsx` Zeile 12 | `metadata` Objekt |
| Kontaktdaten | `components/Contact.tsx` Zeile 16 | `contactInfo` Array |
| WhatsApp-Nummer | `components/WhatsAppButton.tsx` Zeile 11 | `whatsappNumber` Variable |
| Formular-Aktion | `components/Contact.tsx` Zeile 67 | `handleSubmit` Funktion |
