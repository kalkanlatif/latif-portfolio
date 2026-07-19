const graduationCapIcon = (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M22 10 12 5 2 10l10 5 10-5Z" />
    <path d="M6 12v5c0 1.5 3 3 6 3s6-1.5 6-3v-5" />
  </svg>
);

const education: {
  school: string;
  period: string;
  meta: string;
  bullets: string[];
  badgeClass: string;
}[] = [
  {
    school: "Werner-von-Siemens-Schule Mannheim",
    period: "seit 09/2025",
    meta: "Mannheim · Klasse E1FI1 · Fachinformatiker Anwendungsentwicklung · IHK Rhein-Neckar",
    bullets: [
      "BWL — Rechtsformen, Kennziffern, Organisationsstruktur, Markt, Unternehmensziele",
      "Web-Entwicklung — HTML, PHP Grundlagen",
      "SQL — SELECT, GROUP BY, JOIN, XAMPP",
      "Netzwerktechnik — OSI-Modell, IPv4/6, Subnetting, DNS, WLAN, VPN, Routing, RAID, USV",
      "IT-Sicherheit — BSI 200-2, Hashing, Kryptografie",
      "Gemeinschaftskunde — Migration, Demografie, Medien, Wahlen",
      "Wirtschafts- und Sozialkunde — Arbeitsvertrag, Sozialversicherung, Betriebsrat, Tarifvertrag",
    ],
    badgeClass: "bg-accent-bright text-card-dark",
  },
  {
    school: "Birecik Atatürk Anadolu Lisesi, Türkei",
    period: "2014–2018",
    meta: "Allgemeine Hochschulreife (vergleichbar mit Gymnasium/Abitur)",
    bullets: [],
    badgeClass: "bg-border text-ink",
  },
];

export default function Education() {
  return (
    <div>
      <div className="mb-4 font-display text-2xl font-bold text-accent">
        Ausbildung
      </div>
      <div className="flex flex-col gap-4">
        {education.map((entry) => {
          const header = (
            <div className="flex flex-1 items-start gap-4">
              <div
                className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-pill ${entry.badgeClass}`}
              >
                {graduationCapIcon}
              </div>
              <div className="flex-1">
                <div className="font-display text-base font-semibold">
                  {entry.school}
                </div>
                <div className="mt-1 font-mono text-[10.5px] tracking-[0.04em] text-muted uppercase">
                  {entry.period}
                </div>
                <p className="mt-1 font-body text-[12px] text-muted italic">
                  {entry.meta}
                </p>
              </div>
            </div>
          );

          if (entry.bullets.length === 0) {
            return (
              <div
                key={entry.school}
                className="rounded-card border border-border bg-card px-6 py-5"
              >
                {header}
              </div>
            );
          }

          return (
            <details
              key={entry.school}
              className="group rounded-card border border-border bg-card px-6 py-5"
            >
              <summary className="flex cursor-pointer list-none items-start gap-4 marker:content-none [&::-webkit-details-marker]:hidden">
                {header}
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="mt-1 shrink-0 text-muted transition-transform group-open:rotate-90"
                >
                  <polyline points="9 18 15 12 9 6" />
                </svg>
              </summary>
              <ul className="mt-3 list-disc space-y-1.5 pl-[3.5rem] font-body text-[12.5px] leading-[1.5] text-muted">
                {entry.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
            </details>
          );
        })}
      </div>
    </div>
  );
}
