# Handoff Spec: Portfolio-Website (aus Claude-Design-Export extrahiert)

Quelle: `design-export/Portfolio.dc.html` (echter Export, Werte unten sind exakt daraus abgelesen, nicht geschätzt). Diese Datei ersetzt die alte, gelöschte `03-design-richtlinien.md`.

## ⚠️ Kritischer technischer Hinweis

`Portfolio.dc.html` nutzt Claude Designs eigenes Template-Format (`<sc-for>`, `{{ variable }}`, `<script type="text/x-dc" data-dc-script>` mit einer `DCLogic`-Klasse, `support.js`). **Das ist kein React/Next.js-Code und läuft so nicht im Projekt.** Diese Datei ist ausschließlich eine **visuelle Referenz** (Farben, Abstände, Typografie, Layout-Struktur) — der eigentliche Code muss in echtem React/TypeScript/Tailwind neu geschrieben werden, nicht kopiert.

## Overview

Persönliche Portfolio-Seite, One-Pager mit Anchor-Navigation (Stack / Activity / Projects / Contact). Dunkles Akzent-auf-hell-Design: heller Seitenhintergrund, dunkle Karten als Kontrastelement, giftgrüner/limonengrüner Akzent.

## Design Tokens

| Token | Wert | Verwendung |
|---|---|---|
| `color-bg-page` | `#f4f7f6` | Seitenhintergrund |
| `color-bg-card-light` | `#ffffff` | Helle Karten (Stack, Activity-Chart, Projects) |
| `color-bg-card-dark` | `#141f0e` | Dunkle Karten (KPI-Zeile, Pill-Tags, Contribution-Panel) |
| `color-text-primary` | `#0c1a16` | Haupttext auf hellem Grund |
| `color-text-muted` | `#5d6b66` | Meta-Text, Nav-Icons, Sekundärtext |
| `color-text-on-dark` | `#f4f7f6` | Text auf dunklen Karten (Namen etc.) |
| `color-text-on-dark-muted` | `#6c8a58` / `#8fae6e` | Meta-Text auf dunklen Karten |
| `color-accent` | `#5fae2c` | Links, Icons, Chart-Linie, Sprint-Ring |
| `color-accent-hover` | `#437d1f` | Link-Hover |
| `color-accent-bright` | `#a3e635` (Lime) | Große Zahlen/Werte auf dunklen Karten, Pill-Text auf Dunkel, Avatar-Initialen-BG |
| `color-border` | `#dde6e2` | Alle Kartenrahmen, horizontale Trennlinien |
| `color-selection-bg` / `-text` | `#141f0e` / `#a3e635` | `::selection` |
| `font-display` | Space Grotesk (400/500/600/700) | Name, Headlines, Kartentitel, große Zahlen |
| `font-mono` | JetBrains Mono (400/500/600) | Labels, Nav, Buttons, Pills, Meta-Infos — durchgehend uppercase mit `letter-spacing: 0.03–0.12em` |
| `font-body` | Inter (400/500) | Fließtext (z. B. Projektbeschreibungen) |
| `radius-card` | `16px` | Alle Kartenkomponenten |
| `radius-pill` | `999px` | Buttons, Tags, Avatar |
| `radius-cell` | `2px` | Activity-Heatmap-Zellen |

## Layout

- Max-Width-Container: `1080px` (Hero), `1200px` (restliche Sektionen), horizontales Padding durchgehend `48px`.
- Sektionsabstand: `border-top: 1px solid var(--color-border)` + `padding-top: 40px` zwischen Sektionen, `padding-bottom: 56px`.
- Grids: `grid-template-columns: repeat(auto-fit, minmax(Xpx, 1fr))` — `180px` für KPI-Zeile, `260px` für Stack/Projects. Das ist von Haus aus responsiv, keine manuellen Breakpoints nötig für diese Grids.
- Activity-Sektion: zweispaltig `1.1fr 1fr` (Chart / Sprint-Donut) auf Desktop.

## Komponenten

| Komponente | Variante | Spezifikation | Hinweis |
|---|---|---|---|
| Nav | — | `padding: 18px 48px`, `border-bottom: 1px solid #dde6e2`, Name links (Space Grotesk 700/18px), Links rechts (Mono 10.5px uppercase) + GitHub/LinkedIn-Icons (17×17, `#5d6b66`) | Original verlinkt Platzhalter-URLs (`github.com/`, `linkedin.com/`) — durch echte Profile ersetzen |
| Live-Uhr-Widget | — | Uhr-Icon (SVG, 14×14) + "Mannheim · {{ time }}" in Mono 10.5px uppercase, `#5d6b66` | Zeit real client-seitig berechnen (`Europe/Berlin`, `toLocaleTimeString('en-GB', {hour:'2-digit', minute:'2-digit'})`), alle 30s aktualisieren — im Export per `setInterval` gelöst, Next.js-Äquivalent: `useEffect` + `setInterval` in Client Component |
| Hero-Headline | — | `font-size: clamp(36px, 5vw, 58px)`, weight 700, `line-height: 1.06`, `letter-spacing: -0.02em`, ein Wort in `color-accent` | Text laut `04-content-cv-portfolio.md` anpassen, nicht "reliable software" wörtlich übernehmen |
| Button primär | gefüllt | `background: #141f0e`, `color: #a3e635`, `padding: 13px 26px`, `border-radius: 999px`, Mono 11.5px uppercase, Icon + Label, `gap: 8px` | Hover-State fehlt im Export — sinnvoll: leichte Aufhellung (`background: #1c2417`) |
| Button sekundär | outline | `background: transparent`, `border: 1px solid #0c1a16`, sonst wie primär | Hover-State fehlt — sinnvoll: `background: #0c1a16`, `color: #f4f7f6` |
| Karte (dunkel) | KPI/Contribution | `background: #141f0e`, `border-radius: 16px`, `padding: 24px 22px` | Für KPI-Zeile: **Inhalt ist Fake, siehe unten** |
| Karte (hell) | Stack/Activity/Projects | `background: #ffffff`, `border: 1px solid #dde6e2`, `border-radius: 16px`, `padding: 20–24px` | — |
| Pill-Tag | auf Dunkel | `background: #141f0e`, `color: #a3e635`, `padding: 7px 14px`, Mono 10.5px | Für Skills/Stack |
| Pill-Tag | auf Hell (Projekt-Tags) | `background: #f4f7f6`, `border: 1px solid #dde6e2`, `color: #0c1a16`, `padding: 5px 11px`, Mono 9.5px | Kleinere Variante, für Projekt-Karten |
| Projekt-Karte | — | 90px hohe dunkle Kopfzone mit zentriertem Icon, darunter `padding: 18px 20px`: Titel (Space Grotesk 16px/600) + externer-Link-Icon, Beschreibung (Inter 12.5px, `#5d6b66`), Tag-Reihe | Icon in der Kopfzone ist generisch (Pfeile) — pro echtem Projekt evtl. passenderes Icon oder Screenshot |
| Footer | — | `padding: 36px 48px`, `border-top`, Name+Ort links, Mailto-Link rechts (Mono 13px, `color-accent`, Mail-Icon) | E-Mail im Export ist Platzhalter (`latif.kalkan@example.com`) — echte Adresse `kalkanlatif818@gmail.com` verwenden |

## Fake-/Platzhalterinhalte — ersetzen, nicht übernehmen

| Element | Im Export | Ersetzen durch |
|---|---|---|
| KPI-Zeile | Projects 12, Commits 480, Hours 620, Uptime 99.2 % — frei erfunden | Mit Latif abstimmen, ob überhaupt gewünscht; falls ja, nur echte, aus Supabase gezählte Werte (z. B. `count(projects)`), sonst Sektion weglassen |
| Stack → "Backend" | Java, C#, .NET, SQL | Echter Stack: Supabase, PostgreSQL, Next.js API Routes/Server Actions (siehe `02-tech-stack-und-konventionen.md`) |
| Activity-Sektion (komplett) | GitHub-artige Contribution-Heatmap mit pseudo-zufällig generierten Daten, "Weekly commits"-Chart, "Sprint progress"-Donut (65 %), Skill-Balken Java/C#/SQL/Docker mit Fantasie-Prozentwerten | Komplett verwerfen (bereits mit Latif so entschieden) — visuelle Kartenkomponente (Layout/Radius/Farben) darf für andere, echte Inhalte wiederverwendet werden |
| Projects-Grid | "Project One–Four", Platzhaltertexte, Java/C#/.NET-Tags | Echte drei Projekte: Kalkan Stundenzettel, TimerNova, migrant-compass (Inhalte in `04-content-cv-portfolio.md`) |
| Kontakt-Mail, Social-Links | Platzhalter-URLs/E-Mail | Echte Werte einsetzen |

## Neu hinzuzufügen (im Export nicht vorhanden, aber mit Latif vereinbart)

- **Navigationskarten → Modal-Muster**: Karten für Berufserfahrung, Kenntnisse, Ausbildung, **Lebenslauf** fehlen im Export komplett und müssen ergänzt werden — Kartenoptik 1:1 von den Stack-/Projekt-Karten übernehmen. Klick öffnet ein Radix-UI-Dialog-Modal.
- **Lebenslauf-Karte**: Modal mit eingebettetem PDF-Viewer (`assets/Latif_Kalkan_CV.pdf` → `public/cv/`) + Download-Button. Lesbare Größe, scrollbar, kein Vollbild.
- **Cover-Image**: `design-export/uploads/CV cover Image.png`, Platzierung laut Latif: direkt unterhalb der Nav, **linksbündig, oben** (nicht zentriert, kein Vollbild-Hintergrund) — im Export nicht vorhanden, beim Bauen ergänzen.

## Responsive Verhalten (im Export nicht explizit spezifiziert — sinnvolle Ergänzung)

| Breakpoint | Verhalten |
|---|---|
| Desktop (>1024px) | Layout wie oben beschrieben, Activity zweispaltig |
| Tablet (768–1024px) | Grids fallen durch `auto-fit` automatisch auf 2 Spalten; Activity-Sektion auf eine Spalte stapeln |
| Mobile (<768px) | Nav-Links ggf. in Menü einklappen (im Export nicht gelöst — mit Latif abstimmen, ob Hamburger-Menü gewünscht ist); horizontales Padding von 48px auf ca. 20px reduzieren; Hero-Headline nutzt bereits `clamp()`, skaliert automatisch |

## Barrierefreiheit — zu prüfen

- Kontrast `#a3e635` (Text) auf `#141f0e` (Hintergrund) und `#6c8a58` auf `#141f0e` vor Launch mit dem `design:accessibility-review`-Skill prüfen (WCAG AA) — Lime-auf-Dunkelgrün könnte je nach Textgröße knapp sein.
- Icon-only Social-Links (GitHub/LinkedIn) brauchen `aria-label`.
- Modal (neu, Karte→Lebenslauf etc.) braucht Fokus-Trap, ESC-zum-Schließen, `aria-modal="true"` — Radix UI Dialog übernimmt das größtenteils automatisch, trotzdem im Review gegenchecken.
