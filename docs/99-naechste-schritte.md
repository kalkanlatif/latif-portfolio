# Nächste Schritte — Start mit Claude Code

## 1. Ordner platzieren

Diesen `latif-context/`-Ordner als Projekt-Root für Claude Code verwenden — entweder direkt darin das Next.js-Projekt aufbauen, oder als `context/`-Unterordner in ein neu angelegtes Projekt legen. `CLAUDE.md` im Root wird von Claude Code automatisch als Projektgedächtnis gelesen. Falls vorhanden: den per Claude Design exportierten HTML/CSS-Ordner ("Export as standalone HTML") ebenfalls hier ablegen, z. B. unter `design-export/`.

## 2. Erste Prompt-Idee für Claude Code

> Lies CLAUDE.md und alle Dateien in docs/, inklusive design-export/ falls vorhanden. Wir bauen Schritt für Schritt, nicht alles auf einmal — nach jedem Abschnitt anhalten und auf mein Go warten. Vor jedem Commit muss `bun run build` grün sein. Fang mit Schritt 1 aus der Liste unten an und sonst nichts.

## 3. Sinnvolle Reihenfolge beim Bauen (jeder Schritt = eigener Commit, mit meinem Go dazwischen)

1. Next.js-Projekt-Grundgerüst (Tailwind v4, Fonts, `globals.css` nach den Tokens aus `07-design-handoff-spec.md`) — Build muss grün sein, dann committen.
2. Statische Version der Hero-Sektion (Live-Uhr-Widget, Headline, Buttons) mit Inhalten aus `04-content-cv-portfolio.md`.
3. Navigationskarten-Grid (Berufserfahrung, Projekte, Kenntnisse, Ausbildung, Kontakt, Lebenslauf) — zunächst mit statischem Inhalt, Karten noch ohne Modal-Funktion.
4. Modal-Komponente (Radix UI Dialog) für die Karten bauen, inhaltlich befüllen.
5. Lebenslauf-Modal speziell: `assets/Latif_Kalkan_CV.pdf` nach `public/cv/` übernehmen, PDF-Viewer im Modal einbetten, Download-Button ergänzen.
6. Supabase-Projekt anlegen, Schema aus `05-supabase-plan.md` umsetzen, RLS-Policies setzen.
7. Seed-Daten einspielen, Fetching von hardcoded auf Server Components/Supabase umstellen.
8. Kontaktformular mit Server Action + Zod-Validierung, Insert in `contact_messages`.
9. Deployment auf Vercel vorbereiten, Env-Variablen dokumentieren (nicht committen).

## 4. Vor dem Live-Gang klären

- `[TODO]`-Stellen in `04-content-cv-portfolio.md` (Photovate-KI-Nutzung, Projekt-URLs) mit mir final abstimmen.
- Welche Kategorien tatsächlich als Navigationskarten erscheinen, final mit mir absprechen (richtet sich nach dem gelieferten Design).
- Berichtsheft-Status hat nichts mit dieser Website zu tun, aber nicht vergessen: läuft parallel als offener Punkt für den möglichen Ausbildungswechsel.

## 5. Danach

LinkedIn-Profil auf Basis derselben Inhalte (`04-content-cv-portfolio.md`) angehen. Das Lebenslauf-PDF (`assets/Latif_Kalkan_CV.pdf`) ist bereits fertig und muss nur noch eingebunden werden.
