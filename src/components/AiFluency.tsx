const competencies = [
  {
    name: "Delegation",
    de: "Entscheiden, ob, wann und wie KI eingesetzt wird.",
  },
  {
    name: "Description",
    de: "Ziele klar formulieren, damit KI nützliche Ergebnisse liefert.",
  },
  {
    name: "Discernment",
    de: "KI-Ausgaben kritisch und richtig einschätzen.",
  },
  {
    name: "Diligence",
    de: "Verantwortung für KI-Einsatz und Ergebnisse übernehmen.",
  },
];

export default function AiFluency() {
  return (
    <div>
      <div className="mb-1.5 font-mono text-[10px] tracking-[0.08em] text-muted uppercase">
        Anthropic — AI Fluency Framework
      </div>
      <p className="mb-5 max-w-2xl font-body text-[12.5px] leading-[1.5] text-muted">
        Aus Anthropics AI-Fluency-Kurs: vier Kompetenzen für einen effektiven,
        sicheren und verantwortungsvollen Umgang mit KI-Systemen.
      </p>
      <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-4 sm:gap-3.5">
        {competencies.map((c) => (
          <div
            key={c.name}
            className="rounded-card border border-border bg-card px-3.5 py-3 sm:px-4 sm:py-4"
          >
            <div className="font-display text-[13px] font-semibold text-accent sm:text-sm">
              {c.name}
            </div>
            <p className="mt-1 font-body text-[10.5px] leading-[1.4] text-muted sm:text-[11.5px]">
              {c.de}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
