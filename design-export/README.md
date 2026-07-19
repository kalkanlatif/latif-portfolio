# Design-Export (aus Claude Design, verbindliche visuelle Referenz)

`Portfolio.dc.html` + `support.js` sind der echte, aus Claude Design exportierte Code — das ist die **einzige** gültige Design-Quelle für dieses Projekt. Es gibt keine schriftliche Design-Spec (.md) mehr, siehe CLAUDE.md.

Verwendete Fonts (aus dem Export, im `<head>` verlinkt): **Space Grotesk** (Display/Headlines), **JetBrains Mono** (Labels/Meta), **Inter** (Fließtext). Diese Fonts in das Next.js-Projekt übernehmen (z. B. via `next/font/google`).

## uploads/ — enthaltene Assets

- `CV cover Image.png` — **Platzierungshinweis von Latif:** Dieses Bild kommt ganz oben auf die Seite, direkt unterhalb der Kopfzeile/Nav, **linksbündig oben** platziert (nicht zentriert, nicht als Vollbild-Hero-Hintergrund). Bei der Umsetzung entsprechend positionieren.
- `Kalkan Latif Actuall CV - 2026.pdf` — identisch mit `docs/assets/Latif_Kalkan_CV.pdf`, das ist die finale CV-Datei fürs Lebenslauf-Modal (siehe dort, keine zweite Quelle nötig).
- `pasted-1784474499160-0.png` — weiteres Asset aus der Design-Session, Zweck beim Bauen im Kontext des HTML-Exports prüfen.

## Bekannte Fake-Inhalte im Export — nicht übernehmen

Der Export enthält (aus der Claude-Design-Vorlage) Platzhalter-/Fantasiedaten, die **nicht** in die echte Seite übernommen werden dürfen:
- Stat-Karten "Projects / Commits / Hours / Uptime" mit erfundenen Zahlen
- GitHub-artiger Activity-Heatmap-Kalender mit Fake-Daten
- Skill-Prozentbalken (Java/C#/.NET-Werte) — falscher Stack, siehe `docs/02-tech-stack-und-konventionen.md` für den echten Stack

Diese Elemente visuell (Kartenkomponente, Farben, Layout) als Vorlage nehmen, aber inhaltlich durch echte, aus Supabase geladene Daten ersetzen (siehe `docs/05-supabase-plan.md`) — bei Unsicherheit, welche Karten/Sektionen am Ende bleiben, mit Latif abstimmen statt selbst zu entscheiden.
