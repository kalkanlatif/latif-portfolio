const education = [
  {
    school: "Werner-von-Siemens-Schule Mannheim",
    period: "seit 09/2025",
    description:
      "Berufsschule zur Ausbildung Fachinformatiker Anwendungsentwicklung · IHK Rhein-Neckar",
  },
  {
    school: "Birecik Atatürk Anadolu Lisesi, Türkei",
    period: "2014–2018",
    description:
      "Allgemeine Hochschulreife (vergleichbar mit Gymnasium/Abitur)",
  },
];

export default function Education() {
  return (
    <div>
      <div className="mb-4 font-display text-2xl font-bold text-accent">
        Ausbildung
      </div>
      <div className="flex flex-col gap-4">
        {education.map((entry) => (
          <div
            key={entry.school}
            className="overflow-hidden rounded-card border border-border bg-card"
          >
            <div className="flex h-20 items-center justify-center bg-card-dark">
              <svg
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#a3e635"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M22 10 12 5 2 10l10 5 10-5Z" />
                <path d="M6 12v5c0 1.5 3 3 6 3s6-1.5 6-3v-5" />
                <path d="M22 10v6" />
              </svg>
            </div>
            <div className="px-6 py-5">
              <div className="font-display text-base font-semibold">
                {entry.school}
              </div>
              <div className="mt-1 font-mono text-[10.5px] tracking-[0.04em] text-muted uppercase">
                {entry.period}
              </div>
              <p className="mt-2 font-body text-[12.5px] leading-[1.5] text-muted">
                {entry.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
