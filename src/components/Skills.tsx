function TechPill({
  name,
  logo,
  bold,
}: {
  name: string;
  logo?: string;
  bold?: boolean;
}) {
  return (
    <span
      className={`inline-flex items-center gap-2 rounded-pill bg-accent-bright py-[6px] pr-3.5 pl-2 font-mono text-[10.5px] tracking-[0.02em] text-card-dark ${bold ? "font-bold" : ""}`}
    >
      {logo && (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={`https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/${logo}.svg`}
          alt=""
          width={22}
          height={22}
          className="shrink-0"
        />
      )}
      {name}
    </span>
  );
}

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

const skillGroups = [
  {
    category: "Sprachen & Frameworks",
    items: [
      { name: "TypeScript", logo: "typescript" },
      { name: "JavaScript", logo: "javascript" },
      { name: "Next.js (App Router)", logo: "nextdotjs" },
      { name: "React 19", logo: "react" },
      { name: "Tailwind CSS v4", logo: "tailwindcss" },
      { name: "PHP", logo: "php" },
      { name: "HTML", logo: "html5" },
      { name: "CSS", logo: "css3" },
      { name: "SQL" },
      { name: "C", logo: "c" },
    ],
    icon: (
      <svg {...iconProps}>
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
      </svg>
    ),
  },
  {
    category: "Backend & Daten",
    items: [
      { name: "Supabase", logo: "supabase" },
      { name: "PostgreSQL", logo: "postgresql" },
      { name: "Row Level Security" },
    ],
    icon: (
      <svg {...iconProps}>
        <rect x="2" y="3" width="20" height="7" rx="1" />
        <rect x="2" y="14" width="20" height="7" rx="1" />
        <line x1="6" y1="6.5" x2="6.01" y2="6.5" />
        <line x1="6" y1="17.5" x2="6.01" y2="17.5" />
      </svg>
    ),
  },
  {
    category: "Tooling",
    items: [
      { name: "Bun", logo: "bun" },
      { name: "Docker", logo: "docker" },
      { name: "Vercel", logo: "vercel" },
      { name: "Git", logo: "git" },
      { name: "Jira", logo: "jira" },
      { name: "Gitlab CI/CD", logo: "gitlab" },
      { name: "Slack", logo: "slack" },
      { name: "Cypress", logo: "cypress" },
      { name: "Canva", logo: "canva" },
      { name: "Figma", logo: "figma" },
    ],
    icon: (
      <svg {...iconProps}>
        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94z" />
      </svg>
    ),
  },
  {
    category: "KI / Agenten-Workflows",
    items: [
      { name: "Anthropic AI SDK", logo: "anthropic" },
      { name: "Claude Code", logo: "claude" },
      { name: "MCP (Model Context Protocol)" },
      { name: "Multi-Agent-Pipelines" },
      { name: "Context Engineering" },
    ],
    icon: (
      <svg {...iconProps}>
        <polygon points="12 2 2 7 12 12 22 7 12 2" />
        <polyline points="2 17 12 22 22 17" />
        <polyline points="2 12 12 17 22 12" />
      </svg>
    ),
  },
  {
    category: "Sonstiges",
    items: [
      { name: "GTK", logo: "gtk" },
      { name: "EtherCAT / PLC-Integration (Beckhoff)" },
      { name: "Linux", logo: "linux" },
      { name: "IntiAS", bold: true },
    ],
    icon: (
      <svg {...iconProps}>
        <rect x="4" y="4" width="16" height="16" rx="2" />
        <rect x="9" y="9" width="6" height="6" />
        <line x1="9" y1="1" x2="9" y2="4" />
        <line x1="15" y1="1" x2="15" y2="4" />
        <line x1="9" y1="20" x2="9" y2="23" />
        <line x1="15" y1="20" x2="15" y2="23" />
      </svg>
    ),
  },
];

export default function Skills() {
  return (
    <div>
      <div className="mb-2 font-display text-2xl font-bold text-accent">
        Werkzeuge &amp; Technologien
      </div>
      <p className="mb-4 max-w-2xl font-body text-[13px] leading-[1.5] text-muted">
        Diese Sprachen, Frameworks und Tools kenne ich nicht nur vom Namen —
        ich habe damit produktiv gearbeitet und praktische Erfahrung
        gesammelt.
      </p>
      <div className="overflow-hidden rounded-card border border-border bg-[#eaf7dd]">
        <div className="hidden grid-cols-[minmax(160px,220px)_1fr] sm:grid">
          <div className="border-b-2 border-accent px-6 py-3">
            <span className="font-mono text-[10px] tracking-[0.08em] text-ink uppercase">
              Kategorie
            </span>
          </div>
          <div className="border-b-2 border-accent border-l border-border/60 px-6 py-3">
            <span className="font-mono text-[10px] tracking-[0.08em] text-ink uppercase">
              Technologien
            </span>
          </div>
        </div>
        {skillGroups.map((group, i) => (
          <div
            key={group.category}
            className={`grid grid-cols-1 transition-colors hover:bg-[#dcf2c6] sm:grid-cols-[minmax(160px,220px)_1fr] ${
              i !== 0 ? "border-t border-border/60" : ""
            }`}
          >
            <div className="flex items-center gap-[9px] px-5 py-3 sm:px-6 sm:py-4">
              {group.icon}
              <span className="font-display text-[14px] font-semibold">
                {group.category}
              </span>
            </div>
            <div className="flex flex-wrap items-center gap-1.5 px-5 pb-4 sm:border-l sm:border-border/60 sm:px-6 sm:py-4">
              {group.items.map((item) => (
                <TechPill
                  key={item.name}
                  name={item.name}
                  logo={item.logo}
                  bold={item.bold}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
