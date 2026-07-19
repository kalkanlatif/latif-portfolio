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
    description: "Allgemeine Hochschulreife (vergleichbar mit Gymnasium/Abitur)",
  },
];

export default function Education() {
  return (
    <section
      id="education"
      className="max-w-[1200px] border-t border-border px-12 pt-10 pb-14"
    >
      <div className="mb-[18px] font-mono text-[10.5px] tracking-[0.12em] text-muted uppercase">
        Ausbildung
      </div>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(260px,1fr))] gap-3.5">
        {education.map((entry) => (
          <div
            key={entry.school}
            className="rounded-card border border-border bg-card px-[22px] py-5"
          >
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
        ))}
      </div>
    </section>
  );
}
