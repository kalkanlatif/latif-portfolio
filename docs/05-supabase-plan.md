# Supabase-Plan

Ziel: **alle** Inhalte (Skills, Erfahrung, Projekte, Ausbildung) kommen dynamisch aus Supabase, nichts ist im Code hardcoded (Ausnahme: echte Fallback-/Ladezustände).

## Tabellen (Vorschlag)

### `skills`
| Spalte | Typ | Hinweis |
|---|---|---|
| id | uuid, pk | default `gen_random_uuid()` |
| category | text | z. B. "Sprachen & Frameworks", "KI / LLM-Workflows" |
| name | text | z. B. "Claude Code" |
| sort_order | int | für Anzeige-Reihenfolge |

### `experience`
| Spalte | Typ |
|---|---|
| id | uuid, pk |
| company | text |
| role | text |
| period_label | text (z. B. "seit 09/2025") |
| description | text |
| sort_order | int |

### `projects`
| Spalte | Typ |
|---|---|
| id | uuid, pk |
| name | text |
| description | text |
| tech_tags | text[] |
| live_url | text, nullable |
| code_url | text, nullable |
| sort_order | int |

### `education`
| Spalte | Typ |
|---|---|
| id | uuid, pk |
| school | text |
| program | text |
| chamber | text (IHK) |

### `contact_messages`
| Spalte | Typ |
|---|---|
| id | uuid, pk |
| name | text |
| email | text |
| message | text |
| created_at | timestamptz, default `now()` |

## RLS-Policies (Pflicht, ausnahmslos)

- `skills`, `experience`, `projects`, `education`: RLS aktiviert, Policy `select` für `anon`-Rolle erlaubt (public read), **kein** insert/update/delete für `anon`.
- `contact_messages`: RLS aktiviert, Policy `insert` für `anon` erlaubt (nur Insert, kein Read), damit niemand fremde Nachrichten auslesen kann. Lesen nur über den Supabase-Dashboard-Zugang (als Owner) oder eine spätere Admin-Ansicht mit Auth.

Beispiel-Policy-Struktur (als Erinnerung, nicht als fertiges SQL zu verstehen — Claude Code soll das beim Bauen exakt ausformulieren):

```sql
alter table projects enable row level security;

create policy "Public read access"
  on projects for select
  using (true);

alter table contact_messages enable row level security;

create policy "Public insert only"
  on contact_messages for insert
  with check (true);
```

## Daten-Fetching-Ansatz

- Server Components lesen direkt über den Supabase-Server-Client (mit `NEXT_PUBLIC_SUPABASE_URL` + `NEXT_PUBLIC_SUPABASE_ANON_KEY`, kein Service-Role-Key im Client-Bundle).
- Kontaktformular: Client-Komponente (React Hook Form + Zod-Validierung) → Next.js Server Action → Insert in `contact_messages`.
- Seed-Daten für `skills`/`experience`/`projects`/`education` aus `04-content-cv-portfolio.md` übernehmen (als SQL-Insert oder Supabase-Dashboard-Eintrag).

## Offene technische Entscheidung

Supabase-Projekt selbst muss noch angelegt werden (URL + Keys existieren noch nicht) — das ist der erste technische Schritt, bevor Fetching-Code sinnvoll getestet werden kann.
