# Profil & Positionierung

Diese Datei ist mit echten Dokumenten (Zeugnisse, Ausbildungsvertrag, interne Projektseiten) abgeglichen — Stand: 19.07.2026. Kategorisiert statt chronologisch-repetitiv, damit nicht ein einzelnes Unternehmen/Projekt die ganze Seite dominiert.

## Kurzprofil

Latif Kalkan, geboren 16.06.2002, aktuell Mannheim. Fachinformatiker-Azubi, Fachrichtung Anwendungsentwicklung. Kommt nicht als klassischer Schulabgänger in die Ausbildung, sondern mit rund 15 Monaten bezahlter Berufserfahrung als Junior Software Developer davor — das ist ein eigenständiges Pfund, das auf der Seite sichtbar werden soll, nicht nur eine Fußnote.

## Werdegang — kategorisiert

### Schulbildung
Birecik Atatürk Anadolu Lisesi, Türkei (2014–2018) — Allgemeine Hochschulreife, vergleichbar mit Gymnasium/Abitur.

### Berufserfahrung vor der Ausbildung (Industrie-Software, embedded-nah)
- **Predicom Solutions GmbH, Worms** — Junior Developer, 01.06.2024–31.10.2024. Grundlegende Programmierung, Fehlerbehebung/Debugging, Pflege bestehender Software, interne Anwendungen, Programm-/Systemtests, technische Dokumentation, Mitarbeit an Entwicklungsprojekten.
- **Liqwotec Systems GmbH, Worms** — Junior Developer, 01.11.2024–31.08.2025 (interner Wechsel von Predicom, beide Firmen sind verbunden). GUI-Design und -Entwicklung mit GTK und C, IPC-Shared-Memory-Programmierung für Systemprozesse, EtherCAT-Protokoll-Integration mit Beckhoff-PLC-Systemen, vollständige Web-Application-Entwicklung (Frontend & Backend), firmeninterne Tools von Grund auf entwickelt.
- Beide Zwischenzeugnisse fallen durchgehend sehr positiv aus (u. a. "stets sehr pflichtbewusst", "volle Einsatzfreude", "sehr zuverlässig").

Diese Phase zeigt: Software-Erfahrung nicht nur im Web-Umfeld, sondern auch an der Schnittstelle Hardware/Steuerungstechnik (PLC/EtherCAT) — ein Alleinstellungsmerkmal gegenüber anderen Azubi-Bewerbern, kann auf der Seite als eigener kleiner Punkt auftauchen ("auch Erfahrung mit industrieller Automatisierung/PLC-Integration"), muss aber nicht die Haupterzählung sein.

### Aktuelle Ausbildung
**Vate GmbH** (Produktmarke: **Photovate**), Hafenstr. 25, 68159 Mannheim — Ausbildung zum Fachinformatiker Anwendungsentwicklung, 01.09.2025–31.08.2028 (36 Monate, Probezeit 4 Monate). Ausbilder: Alexander Hottong. Berufsschule: Werner-von-Siemens-Schule, Neckarpromenade 17, 68167 Mannheim.

Photovate/SEFlow ist eine Multi-Tenant-B2B-SaaS-Plattform für Solarteure (Vertrieb, Angebote, Auftragsabwicklung, Rechnungen, Banking, Terminplanung, Lager, HR) auf Next.js/Supabase-Basis.

**Hinweis zur Vertraulichkeit:** Interne technische Dokumentation von Photovate/SEFlow (Architekturdetails, Datenbankstruktur, genaue Modulzahlen usw.) ist als vertraulich gekennzeichnet. Auf der Portfolio-Seite dürfen nur die eigenen, konkreten Beiträge in allgemeiner Form beschrieben werden (siehe unten) — keine internen Architekturdetails, keine genauen Zahlen zu Tabellen/Migrationen/Integrationen.

### Warum ein Wechsel für das 2. Lehrjahr geprüft wird
Photovate wirkt finanziell angeschlagen (Vollzeitkräfte wurden bereits entlassen), trotz eines vielversprechenden Projekts in der Pipeline. Ich prüfe daher proaktiv einen Wechsel zum 2. Lehrjahr, statt abzuwarten. Der rechtliche Fahrplan dazu (Aufhebungsvertrag, Anrechnung bei der IHK) ist an anderer Stelle dokumentiert und nicht Teil dieses Website-Projekts.

## Positionierung der Website — jetzt mit echten Belegen

Die Seite soll nicht "klassischer Web-Azubi" wirken, sondern gezielt Richtung **KI-gestützte / agentenbasierte Entwicklung** positionieren — und das jetzt mit konkreten, verifizierten Ergebnissen statt allgemeiner Aussagen:

- **Autonomous AI Development Pipeline** — ein von mir verfasstes internes Engineering-Konzept (9 autonome Schritte, 1 menschliches Gate) für eine Jira-Ticket-zu-Merge-Request-Pipeline mit Multi-Agent-Review, MCP-Anbindung (Atlassian MCP, Browser MCP), zweigleisiger QA (visuell + funktional) und gestuften Sicherheits-Guardrails (Scope-Tiers, nie autonome DB-Migrationen/RLS/Secrets).
- **Claude-Automatisierungssystem** — begleitende Team-Dokumentation zu einem produktiven Ticket-zu-MR-Bot (Label-getriebene State Machine über Jira, GitLab-CI-Jobs, Modell-Eskalationsleiter Haiku→Sonnet, Kostenoptimierung von ca. 2,00 $ auf 0,30–0,50 $ pro Ticket, mehrschichtiges Sicherheitsmodell).
- **Konkrete, produktiv live geschaltete Beiträge** (laut interner Projektdokumentation "Built by Latif Kalkan", Status "Live in Production"):
  - Microsoft-SSO-Integration
  - Receipt Automation — OCR- & Zahlungsabgleich-Pipeline
  - SNRG-Webhook-Integration (Kontakte SEFlow → SAP)
- **migrant-compass** (persönliches Projekt): Next.js + Anthropic AI SDK + Supabase + next-intl.
- **Claude Code 101** — abgeschlossenes Anthropic-Zertifikat, als kleiner Vertrauens-/Kompetenznachweis nutzbar.

Diese Punkte sind der eigentliche Kern der AI-Positionierung — nicht "ich benutze gerne Claude Code", sondern "ich habe damit produktiv etwas gebaut, das läuft". Formulierungen für die Website sollen das nüchtern und nachweisbar darstellen, nicht werblich übertreiben.

**Wie das auf der Seite dargestellt wird:** allgemein genug, um keine internen/vertraulichen Details preiszugeben (kein Ticket-System-Name, keine exakte Architektur, keine internen Metriken über die oben genannten hinaus, die bereits verallgemeinert sind), aber konkret genug, um als echte, überprüfbare Leistung zu wirken. Im Zweifel: lieber eine Formulierung mit mir gegenlesen, bevor sie live geht.

## Zielgruppe

Ausbildungsbetriebe (2. Lehrjahr, Fachinformatiker Anwendungsentwicklung), idealerweise mit Tech-Stack-Überschneidung (Next.js/TypeScript/Supabase) oder mit Interesse an agentenbasierter/KI-gestützter Produktentwicklung. Die Seite ist eine Bewerbungs-Visitenkarte, kein allgemeines Blog/Showcase.

## Was explizit NICHT auf die Seite gehört

- Keine Details zur aufenthaltsrechtlichen/privaten Situation — völlig irrelevant für dieses Projekt und darf in keiner Form (auch nicht angedeutet) in CV, Portfolio-Inhalten oder Code-Kommentaren auftauchen.
- Keine internen/vertraulichen Architektur- oder Geschäftsdetails von Photovate/SEFlow über das oben freigegebene Maß hinaus.
- Keine genauen Wohnadressen (nur Stadt, z. B. "Mannheim").
