# Content-Bausteine (Deutsch, einsatzbereit)

Diese Texte können direkt in Supabase-Seed-Daten oder Komponenten übernommen werden. Stellen mit `[TODO: ...]` vor dem finalen Launch mit mir abklären, nicht raten. Basis: reale Dokumente (Zeugnisse, Ausbildungsvertrag, interne Projektseiten), Stand 19.07.2026.

## Hero

**Label (Mono):** `Fachinformatiker für Anwendungsentwicklung — Azubi, 2. Lehrjahr`

**Headline (Serif, Beispiel-Varianten zur Auswahl):**
- „Ich baue Software, die man wirklich *nutzt*."
- „Vom PLC-Controller bis zur KI-Agenten-Pipeline."
- „Code, der funktioniert. Agenten, die mitdenken."

**Subtext:** „Backend-Entwicklung mit Next.js und Supabase — mit produktiv eingesetzten Beiträgen zu KI-Agenten-Pipelines, nicht nur Experimenten."

**Buttons:** „Projekte ansehen ↗" (primär) / „Kontakt" (sekundär)

## Skills (gruppiert, für Pill-Tags)

**Sprachen & Frameworks**
`TypeScript` `Next.js (App Router)` `React 19` `Tailwind CSS v4` `SQL` `C`

**Backend & Daten**
`Supabase` `PostgreSQL` `Row Level Security`

**Tooling**
`Bun` `Docker` `Vercel` `Git` `Jira`

**KI / Agenten-Workflows**
`Anthropic AI SDK` `Claude Code` `MCP (Model Context Protocol)` `Multi-Agent-Pipelines` `Context Engineering`

**Sonstiges** *(Differenzierung, aus vorheriger Industrie-Erfahrung)*
`GTK` `EtherCAT / PLC-Integration (Beckhoff)` — zeigt Erfahrung an der Schnittstelle Hardware/Software, nicht nur klassische Web-Entwicklung.

## Erfahrung

### Vate GmbH (Photovate) — Fachinformatiker-Azubi, Anwendungsentwicklung
Zeitraum: seit 09/2025, Mannheim

„Photovate (SEFlow) ist eine B2B-SaaS-Plattform für Solarteure — Vertrieb, Angebote, Auftragsabwicklung und mehr, auf Next.js/Supabase-Basis. Eigene Beiträge, produktiv live geschaltet:"
- Microsoft-SSO-Integration
- Receipt Automation — OCR- und Zahlungsabgleich-Pipeline
- SNRG-Webhook-Integration (Kontaktsynchronisation SEFlow → SAP)
- Konzeption einer autonomen KI-Agenten-Pipeline für die Softwareentwicklung (Ticket → Implementierung → Review → Merge-Request), inkl. Multi-Agent-Review und mehrstufigem Sicherheitsmodell

`[TODO: Exakte Formulierung der Pipeline-Beschreibung vor Veröffentlichung gegenlesen — allgemein genug halten, keine internen Architektur-/Metrik-Details über das oben Genannte hinaus.]`

### Liqwotec Systems GmbH, Worms — Junior Developer
Zeitraum: 11/2024–08/2025

„GUI-Design und -Entwicklung mit GTK und C, IPC-Shared-Memory-Programmierung für Systemprozesse, EtherCAT-Protokoll-Integration mit Beckhoff-PLC-Systemen, vollständige Web-Application-Entwicklung (Frontend & Backend)."

### Predicom Solutions GmbH, Worms — Junior Developer
Zeitraum: 06/2024–10/2024

„Grundlegende Programmierung, Fehlerbehebung und Debugging, Pflege bestehender Software, Entwicklung interner Anwendungen, Mitarbeit an Entwicklungsprojekten."

*(Hinweis: Ob beide Vorstationen einzeln auf der Website erscheinen oder zu einer Zeile "Junior Developer, Predicom/Liqwotec Systems, 06/2024–08/2025" zusammengefasst werden, ist eine Geschmacksfrage — bei Bedarf mit mir kurz abstimmen.)*

## Projekte

### Kalkan Stundenzettel
„Web-App zur Arbeitszeiterfassung mit PDF-Export — live im Einsatz. Von der Eingabe der Arbeitszeiten bis zum fertigen, exportierbaren Stundenzettel."
Tech: `Next.js` `Supabase` `Vercel`
Links: `[TODO: Live-URL]` · `[TODO: GitHub-Repo, falls öffentlich]`

### TimerNova
„Next.js-Anwendung mit automatisiertem Deployment-Workflow über GitHub Actions und Docker-Containerisierung für konsistente Umgebungen."
Tech: `Next.js` `Supabase` `Docker` `GitHub Actions`
Links: `[TODO: Live-URL]` · `[TODO: GitHub-Repo]`

### migrant-compass
„KI-gestützte, mehrsprachige Anwendung mit dem Anthropic AI SDK — zeigt praktische Erfahrung darin, LLM-Funktionalität sauber in ein produktives Next.js/Supabase-Setup zu integrieren."
Tech: `Next.js` `Anthropic AI SDK` `Supabase` `next-intl`
Links: `[TODO: Live-URL]` · `[TODO: GitHub-Repo]`

## „Wie ich mit KI arbeite" — eigener Abschnitt (jetzt mit echtem Beleg statt Behauptung)

„Ich nutze Claude Code und MCP-Server aktiv im Entwicklungsalltag — nicht nur zum Codegenerieren, sondern um Agenten-Workflows zu entwerfen und komplexe Aufgaben in überprüfbare Schritte zu zerlegen. Bei Photovate habe ich eine autonome Agenten-Pipeline für die Softwareentwicklung mitkonzipiert (Ticket → Implementierung → Review → Merge-Request, mit mehrstufigem Sicherheitsmodell) und mehrere produktiv laufende Integrationen umgesetzt. Dieses Portfolio selbst ist ebenfalls mit Claude Code gebaut."

`[TODO: Formulierung mit mir gegenlesen, bevor sie live geht.]`

## Ausbildung (Footer/About)

„Werner-von-Siemens-Schule Mannheim · Fachinformatiker Anwendungsentwicklung · IHK Rhein-Neckar"

*(Zuvor: Allgemeine Hochschulreife, Birecik Atatürk Anadolu Lisesi, Türkei — optional, nur falls ein ausführlicherer „Werdegang"-Bereich gewünscht ist, für die Kurzversion der Seite eher nicht nötig.)*

## Kontakt

E-Mail: `kalkanlatif818@gmail.com`
Ort: Mannheim *(nur Stadt angeben, keine vollständige Adresse)*

Kontaktformular: Name, E-Mail, Nachricht → Server Action → Insert in Supabase-Tabelle `contact_messages` (siehe `05-supabase-plan.md`).

## Ausdrücklich ausgeschlossen

Keine Inhalte zur aufenthaltsrechtlichen/privaten Situation, keine internen/vertraulichen Photovate-Architekturdetails über das oben freigegebene Maß hinaus, keine vollständige Wohnadresse.
