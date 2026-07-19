# Kontext: Latif Kalkan — Portfolio-Website

Dieses Verzeichnis ist der Kontext-Ordner für den Bau meiner persönlichen Portfolio-Website mit Claude Code. Lies vor dem ersten Vorschlag/Code die Dateien in `docs/` — sie enthalten alles, was zu Ziel, Inhalt und technischer Umsetzung bereits entschieden wurde.

## Ziel

Eine Next.js-Portfolio-Website, die mich als Fachinformatiker-Azubi (Anwendungsentwicklung) bewirbt — Zielgruppe: Firmen, die einen neuen Ausbildungsplatz ab 2. Lehrjahr anbieten, idealerweise mit Berührungspunkten zu KI/LLM-gestützter Entwicklung. Die Seite soll sowohl klassische Backend/Web-Skills zeigen als auch meine praktische, **produktiv nachweisbare** Erfahrung mit Agenten-/LLM-Workflows (Claude Code, MCP, Context Engineering, Anthropic AI SDK) — siehe `01-profil-und-ziel.md` für die konkreten, verifizierten Belege.

## Design

Verbindliche Quellen: `design-export/Portfolio.dc.html` (echter Claude-Design-Export, **nur visuelle Referenz — das Templateformat darin ist kein React/Next.js und darf nicht kopiert werden**, siehe `design-export/README.md`) und `docs/07-design-handoff-spec.md` (daraus abgeleitete, konkrete Tokens/Komponenten-Tabelle inkl. Liste der Fake-Inhalte, die NICHT übernommen werden dürfen). `07-design-handoff-spec.md` ist der praktische Ausgangspunkt zum Bauen, nicht die rohe HTML-Datei.

## Arbeitsweise — sehr wichtig, gilt für die gesamte Umsetzung

- **Schritt für Schritt, unter meiner Kontrolle.** Nicht in einem Rutsch das ganze Projekt durchbauen. Nach jedem sinnvollen Abschnitt (z. B. Grundgerüst, dann Hero, dann eine Sektion, dann Supabase-Anbindung) anhalten, zeigen was gemacht wurde, auf mein Go warten.
- **Atomare Commits.** Ein Commit = eine zusammenhängende, in sich sinnvolle Änderung. Keine Sammel-Commits über mehrere unabhängige Themen.
- **Vor jedem Commit: testen/bauen.** Mindestens `bun run build` (und Lint, falls konfiguriert) muss grün sein, bevor committet wird. Kaputten Zwischenstand nicht committen.
- Conventional Commits, niemals force push, niemals `co-authored-by`.
- Bei Unsicherheit lieber nachfragen als raten oder große Annahmen treffen.

## Wichtig: Was NICHT in Code, Kommentare oder Inhalte darf

Es gibt private/rechtliche Informationen (u. a. zur aufenthaltsrechtlichen Situation), die in einer separaten, nicht mit diesem Projekt verbundenen Notiz existieren. Diese haben **nichts** mit der Portfolio-Website zu tun und dürfen unter keinen Umständen in Code, Kommentare, Commit-Messages, Seed-Daten oder sonstige Inhalte dieses Projekts einfließen — auch nicht angedeutet.

## Dateien in docs/ — Reihenfolge zum Lesen

1. `01-profil-und-ziel.md` — wer ich bin, warum ich wechsle, welche Positionierung die Seite transportieren soll
2. `02-tech-stack-und-konventionen.md` — Stack + verbindliche Code-Konventionen
3. `04-content-cv-portfolio.md` — deutsche Textbausteine für alle Seitenabschnitte
4. `05-supabase-plan.md` — Datenbankschema, RLS, wie Daten dynamisch geladen werden
5. `06-schule-und-ausbildung.md` — Hintergrundinfos zu Schule/IHK (Referenz)
6. `99-naechste-schritte.md` — konkreter Startpunkt für die erste Claude-Code-Session
7. `assets/Latif_Kalkan_CV.pdf` — die finale, echte CV-Datei, die im Lebenslauf-Modal eingebettet/herunterladbar sein muss
8. `design-export/` (separat geliefert, falls vorhanden) — das eigentliche Design, siehe oben

## Nicht verhandelbare Leitplanken

- TypeScript strict, niemals `any`.
- Server Components by default, `"use client"` nur wenn zwingend nötig (Modal, Live-Uhr-Widget u. Ä. brauchen es).
- Alle Inhalte (Projekte, Skills, Erfahrung) kommen aus Supabase — nichts hardcoden außer echten Fallbacks. Keine erfundenen Zahlen/Statistiken.
- RLS ist in Supabase Pflicht, ausnahmslos.
- Bun statt npm/yarn.
- Design richtet sich nach dem separat gelieferten Design-Material (siehe oben) — nicht nach alten Beschreibungen in diesem Ordner.

## Was noch offen ist

Es existiert ein alter, veralteter Next.js-Codestand in einem separaten `latif-portfolio/`-Ordner aus einer früheren Session — **kompletter Fehlstart, nicht als Ausgangspunkt verwenden**.
