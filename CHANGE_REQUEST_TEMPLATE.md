# Änderungsanfrage — Colegio Panamericano Website

Du bist Claude Code und sollst die bestehende Website des Colegio Panamericano Guatemala gezielt ändern.

**Lies zuerst `SERVICE_STRUCTURE.md`**, um die richtige Seite, Section, Komponente und Datei zu finden.

---

## Änderungsdaten

**Kunde / Unternehmen:**
[NAME]

**Website:**
https://www.panamericano.edu.gt

**Seite:**
[Startseite / Noticias-Detail / Alle Seiten]

**Bereich / Section:**
[z. B.: Hero / Über uns / Programme / Online-Bildung / Neuigkeiten / Zugänge / Kontakt / Navigation / Footer]

**Änderungstyp:**
[TEXT ÄNDERN / BILD AUSTAUSCHEN / NEUEN INHALT HINZUFÜGEN / LINK ÄNDERN / FORMULAR ANPASSEN / LAYOUT ANPASSEN / SONSTIGES]

**Beschreibung:**
[BESCHREIBUNG]

**Exakter neuer Text / neuer Inhalt:**
[NEUER_INHALT]

**Hochgeladene Dateien:**
[DATEIEN — z. B. neues Logo, neues Bild]

**Dringlichkeit:**
[HOCH / MITTEL / NIEDRIG]

**Sonstige Hinweise:**
[HINWEISE]

---

## Aufgabe für Claude Code

1. **Lies `SERVICE_STRUCTURE.md`** — finde die passende Section, Komponente und Datei.
2. **Lokalisiere den Bereich** — nutze `data-section`, `data-block`, `data-editable` oder `data-component` Attribute sowie die Zeilenangaben aus SERVICE_STRUCTURE.md.
3. **Ändere nur den gewünschten Bereich** — keine benachbarten Sections oder Komponenten anfassen.
4. **Erhalte:** Design, Layout, Farben (`primary-700`, `accent-500`), Typografie, Tailwind-Klassen und Responsiveness.
5. **Prüfe Anker-Links** — `#inicio`, `#nosotros`, `#programas`, `#online`, `#noticias`, `#accesos`, `#contacto` dürfen nicht umbenannt werden.
6. **Bei hochgeladenen Dateien:** Lege sie in `public/` (oder `public/images/`) ab und passe den Pfad in der Komponente an.
7. **Keine neuen Libraries** hinzufügen — Framer Motion und Lucide React sind bereits vorhanden.
8. **TypeScript-Fehler** sofort beheben — `npm run build` sollte fehlerfrei durchlaufen.

### Abschlussbericht

Fasse am Ende zusammen:
- Welche Dateien wurden geändert?
- Was genau wurde geändert (Zeile / Bereich)?
- Wurden alle Anforderungen umgesetzt?
- Gibt es offene Rückfragen?

---

## Schnellreferenz: Wo liegt was?

| Inhalt | Datei | Stelle |
|--------|-------|--------|
| Hero-Überschrift | `components/Hero.tsx` | `data-editable="headline"` |
| Hero-Subtext | `components/Hero.tsx` | `data-editable="text"` |
| Hero-Buttons | `components/Hero.tsx` | `data-editable="button"` |
| Navigation-Links | `components/Navbar.tsx` | `navLinks` Array Zeile 10 |
| Logo (Navbar + Footer) | `public/logo.png` | Datei überschreiben |
| Statistiken | `components/Stats.tsx` | `stats` Array Zeile 28 |
| Über uns — Headline | `components/About.tsx` | `data-editable="headline"` |
| Über uns — Text | `components/About.tsx` | `data-editable="text"` |
| Programm-Karten | `components/Programs.tsx` | `programs` Array Zeile 9 |
| Online-Headline | `components/OnlineEducation.tsx` | `data-editable="headline"` |
| Online-Features | `components/OnlineEducation.tsx` | `features` Array Zeile 8 |
| News-Karten | `components/News.tsx` | `posts` Array Zeile 11 |
| News-Volltext | `app/noticias/[slug]/page.tsx` | `articles` Array Zeile 6 |
| Zugangskarten | `components/Accesos.tsx` | `accesos` Array Zeile 8 |
| Kontaktdaten | `components/Contact.tsx` | `contactInfo` Array Zeile 16 |
| Kontakt-Headline | `components/Contact.tsx` | `data-editable="headline"` |
| Formular-Aktion | `components/Contact.tsx` | `handleSubmit` Zeile 67 |
| Footer-Links | `components/Footer.tsx` | `footerLinks` Zeile 6 |
| Social-Links | `components/Footer.tsx` | `socialLinks` Zeile 33 |
| Copyright-Text | `components/Footer.tsx` | `<p>` im Bottom-Bar |
| WhatsApp-Nummer | `components/WhatsAppButton.tsx` | Zeile 11 |
| SEO-Metadaten | `app/layout.tsx` | `metadata` Zeile 12 |

---

## Sicherheitsregeln

- **Anker-IDs nicht umbenennen** — Navigation bricht sonst zusammen
- **Bestehende `data-block` Attribute nicht entfernen** — für Identifikation benötigt
- **`framer-motion` Attribute (`initial`, `animate`, `transition`) nicht entfernen** — Animation bricht sonst
- **Tailwind-Klassen mit `primary-*` und `accent-*` erhalten** — benutzerdefinierte Farben aus `tailwind.config.ts`
- **`"use client"` Direktive in Komponenten erhalten** — Next.js App Router Anforderung
- **Wenn Änderung riskant oder unklar** — nichts ändern, stattdessen Rückfrage formulieren

---

## Beispiel-Anfragen

### Beispiel 1: Text ändern
```
Seite: Startseite
Bereich: Hero
Änderungstyp: TEXT ÄNDERN
Beschreibung: Die Hauptüberschrift soll geändert werden
Neuer Text: "Formando el futuro de Guatemala"
```
→ Claude sucht `data-editable="headline"` in `components/Hero.tsx` und ändert nur diesen Text.

---

### Beispiel 2: Neuen Blog-Post hinzufügen
```
Seite: Startseite + Noticias-Detail
Bereich: Neuigkeiten
Änderungstyp: NEUEN INHALT HINZUFÜGEN
Beschreibung: Neuen News-Artikel hinzufügen
Titel: "Panamericano abre nueva sede en Quetzaltenango"
Datum: 20 de abril, 2026
Kategorie: Noticias
Volltext: [TEXT]
```
→ Claude ergänzt Eintrag in `posts` Array (News.tsx) UND `articles` Array (noticias/page.tsx).

---

### Beispiel 3: Telefonnummer ändern
```
Seite: Alle Seiten
Bereich: Kontakt + WhatsApp
Änderungstyp: TEXT ÄNDERN
Neuer Wert: 5555-1234
```
→ Claude ändert `contactInfo` in Contact.tsx Zeile 18 UND `whatsappNumber` in WhatsAppButton.tsx Zeile 11.

---

### Beispiel 4: Logo tauschen
```
Änderungstyp: BILD AUSTAUSCHEN
Beschreibung: Neues Logo
Hochgeladene Datei: neues-logo.png
```
→ Claude speichert die Datei als `public/logo.png` (überschreibt bestehende Datei — kein Code-Änderung nötig, da alle Komponenten bereits `/logo.png` nutzen).
