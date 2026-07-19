# Tech-Stack & Konventionen

## Stack für dieses Projekt

- **Framework:** Next.js (App Router), aktuelle stabile Version
- **Sprache:** TypeScript, `strict: true`, niemals `any`
- **UI:** React 19, Tailwind CSS v4
- **Formulare/Validierung:** React Hook Form + Zod (fürs Kontaktformular)
- **UI-Primitives:** Radix UI wo sinnvoll (z. B. für Dialoge/Tooltips)
- **State:** Zustand nur falls tatsächlich Client-State nötig ist (bei einer Portfolio-Seite vermutlich kaum)
- **Backend/Daten:** Supabase (PostgreSQL), alle Inhalte dynamisch aus der DB
- **Paketmanager:** Bun (nicht npm/yarn)
- **Deployment:** Vercel
- **Versionierung:** Git, Conventional Commits

Das ist derselbe Stack wie im Ausbildungsbetrieb (Photovate) und in meinen anderen persönlichen Projekten (TimerNova, Kalkan Stundenzettel) — bewusst gewählt, weil es zeigt, dass ich mit meinem Alltags-Stack auch privat baue, und weil es keine zusätzliche Lernkurve für dieses Projekt bedeutet.

## Verbindliche Konventionen

- **TypeScript strict, kein `any`.** Wenn ein Typ unklar ist, lieber ein echtes Interface/Type bauen oder `unknown` + Narrowing verwenden.
- **Server Components by default.** `"use client"` nur dort, wo Interaktivität zwingend ist (z. B. Kontaktformular, Live-Uhr-Widget, evtl. Theme-Toggle falls gewünscht).
- **RLS (Row Level Security) ist in Supabase ausnahmslos Pflicht.** Auch für reine "public read"-Tabellen (Projekte, Skills etc.) explizite Policies schreiben, nicht auf Supabase-Standardverhalten verlassen.
- **Bun** für alle Paketmanager-Operationen (`bun install`, `bun run dev`, `bun run build`).
- **Conventional Commits** (`feat:`, `fix:`, `chore:`, `docs:` usw.).
- **Niemals force push.**
- **Niemals `co-authored-by`** in Commit-Messages.
- Env-Variablen (`NEXT_PUBLIC_SUPABASE_URL`, `NEXT_PUBLIC_SUPABASE_ANON_KEY`, ggf. Service-Role-Key nur serverseitig) sauber in `.env.local` halten, `.env.example` mit Platzhaltern committen.

## Bereits vorhandene persönliche Projekte (als Referenz/Vorbild für Code-Stil)

- **TimerNova** — Next.js + Supabase + Docker + GitHub Actions (automatisiertes Deployment)
- **Kalkan Stundenzettel** — Zeiterfassung + PDF-Export, live auf Vercel
- **migrant-compass** — Anthropic AI SDK + Next.js + Supabase + next-intl (mehrsprachig)

Diese drei Projekte werden auch inhaltlich auf der Portfolio-Seite gezeigt (siehe `04-content-cv-portfolio.md`).
