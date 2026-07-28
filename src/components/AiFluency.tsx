const iconProps = {
  width: 18,
  height: 18,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "#5fae2c",
  strokeWidth: 1.8,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

const competencies = [
  {
    name: "Delegation",
    de: "Entscheiden, ob, wann und wie KI eingesetzt wird.",
    icon: (
      <svg {...iconProps}>
        <circle cx="18" cy="5" r="3" />
        <circle cx="6" cy="12" r="3" />
        <circle cx="18" cy="19" r="3" />
        <line x1="8.6" y1="10.5" x2="15.4" y2="6.5" />
        <line x1="8.6" y1="13.5" x2="15.4" y2="17.5" />
      </svg>
    ),
  },
  {
    name: "Description",
    de: "Ziele klar formulieren, damit KI nützliche Ergebnisse liefert.",
    icon: (
      <svg {...iconProps}>
        <path d="M12 20h9" />
        <path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4Z" />
      </svg>
    ),
  },
  {
    name: "Discernment",
    de: "KI-Ausgaben kritisch und richtig einschätzen.",
    icon: (
      <svg {...iconProps}>
        <path d="M1 12s4-7 11-7 11 7 11 7-4 7-11 7-11-7-11-7Z" />
        <circle cx="12" cy="12" r="3" />
      </svg>
    ),
  },
  {
    name: "Diligence",
    de: "Verantwortung für KI-Einsatz und Ergebnisse übernehmen.",
    icon: (
      <svg {...iconProps}>
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z" />
        <polyline points="9 12 11.5 14.5 15.5 9.5" />
      </svg>
    ),
  },
];

export default function AiFluency() {
  return (
    <div>
      <div className="mb-1.5 flex items-center gap-1.5">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/anthropic.svg"
          alt=""
          width={13}
          height={13}
        />
        <span className="font-mono text-[10px] tracking-[0.08em] text-muted uppercase">
          Anthropic — AI Fluency Framework
        </span>
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
            <div className="mb-1.5 flex items-center gap-2">
              {c.icon}
              <div className="font-display text-[13px] font-semibold text-accent sm:text-sm">
                {c.name}
              </div>
            </div>
            <p className="font-body text-[10.5px] leading-[1.4] text-muted sm:text-[11.5px]">
              {c.de}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
