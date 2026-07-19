import type { ReactNode } from "react";

type NavCard = {
  title: string;
  description: string;
  icon: ReactNode;
};

const iconProps = {
  width: 16,
  height: 16,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "#5fae2c",
  strokeWidth: 1.8,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

const cards: NavCard[] = [
  {
    title: "Berufserfahrung",
    description:
      "Photovate, Liqwotec, Predicom — vom PLC-Controller zur B2B-SaaS-Plattform.",
    icon: (
      <svg {...iconProps}>
        <rect x="2" y="7" width="20" height="14" rx="2" />
        <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
      </svg>
    ),
  },
  {
    title: "Projekte",
    description:
      "Kalkan Stundenzettel, TimerNova, migrant-compass — drei live eingesetzte Anwendungen.",
    icon: (
      <svg {...iconProps}>
        <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" />
      </svg>
    ),
  },
  {
    title: "Kenntnisse",
    description:
      "Next.js, Supabase, TypeScript — und praktische Erfahrung mit Agenten-Workflows.",
    icon: (
      <svg {...iconProps}>
        <polygon points="12 2 2 7 12 12 22 7 12 2" />
        <polyline points="2 17 12 22 22 17" />
        <polyline points="2 12 12 17 22 12" />
      </svg>
    ),
  },
  {
    title: "Ausbildung",
    description:
      "Fachinformatiker Anwendungsentwicklung, Werner-von-Siemens-Schule Mannheim.",
    icon: (
      <svg {...iconProps}>
        <path d="M22 10 12 5 2 10l10 5 10-5Z" />
        <path d="M6 12v5c0 1.5 3 3 6 3s6-1.5 6-3v-5" />
      </svg>
    ),
  },
  {
    title: "Kontakt",
    description: "Fragen, Angebote, Feedback — schreib mir direkt.",
    icon: (
      <svg {...iconProps}>
        <rect x="2" y="4" width="20" height="16" rx="2" />
        <polyline points="2 7 12 13 22 7" />
      </svg>
    ),
  },
  {
    title: "Lebenslauf",
    description:
      "Vollständiger CV als PDF, direkt hier einsehbar oder herunterladen.",
    icon: (
      <svg {...iconProps}>
        <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="8" y1="13" x2="16" y2="13" />
        <line x1="8" y1="17" x2="16" y2="17" />
      </svg>
    ),
  },
];

export default function NavCards() {
  return (
    <section className="max-w-[1200px] px-12 pt-10 pb-14">
      <div className="grid grid-cols-[repeat(auto-fit,minmax(260px,1fr))] gap-3.5">
        {cards.map((card) => (
          <div
            key={card.title}
            className="cursor-default rounded-card border border-border bg-card px-[22px] py-5"
          >
            <div className="mb-3 flex items-center gap-[9px]">
              {card.icon}
              <span className="font-display text-[15px] font-semibold">
                {card.title}
              </span>
            </div>
            <p className="font-body text-[12.5px] leading-[1.5] text-muted">
              {card.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
