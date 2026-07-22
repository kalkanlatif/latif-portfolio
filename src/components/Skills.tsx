import CertificateCard from "@/components/CertificateCard";

function TechPill({ children }: { children: string }) {
  return (
    <span className="rounded-pill bg-accent-bright px-3 py-[6px] font-mono text-[10.5px] tracking-[0.02em] text-card-dark">
      {children}
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
      "TypeScript",
      "JavaScript",
      "Next.js (App Router)",
      "React 19",
      "Tailwind CSS v4",
      "PHP",
      "HTML",
      "CSS",
      "SQL",
      "C",
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
    items: ["Supabase", "PostgreSQL", "Row Level Security"],
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
      "Bun",
      "Docker",
      "Vercel",
      "Git",
      "Jira",
      "Gitlab CI/CD",
      "Slack",
      "Cypress",
      "Canva",
      "Figma",
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
      "Anthropic AI SDK",
      "Claude Code",
      "MCP (Model Context Protocol)",
      "Multi-Agent-Pipelines",
      "Context Engineering",
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
    items: ["GTK", "EtherCAT / PLC-Integration (Beckhoff)", "Linux"],
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

const languages = [
  {
    code: "DE",
    name: "Deutsch",
    level: "B2",
    flagBorder: "[border-image:linear-gradient(to_right,#000000,#dd0000,#ffce00)_1]",
  },
  {
    code: "EN",
    name: "Englisch",
    level: "C1",
    flagBorder: "[border-image:linear-gradient(to_right,#00247d,#ffffff,#cf142b)_1]",
  },
  {
    code: "TR",
    name: "Türkisch",
    level: "Muttersprache",
    flagBorder: "[border-image:linear-gradient(to_right,#e30a17,#ffffff)_1]",
  },
  {
    code: "KU",
    name: "Kurdisch",
    level: "Muttersprache",
    flagBorder: "[border-image:linear-gradient(to_right,#007a3d,#ffce00,#ed1c24)_1]",
  },
];

const certificates = [
  {
    issuer: "Anthropic",
    name: "AI Fluency: Framework & Foundations",
    image: "/certificates/ai-fluency.png",
  },
  {
    issuer: "Coursera",
    name: "C Programming: Getting Started",
    image: "/certificates/coursera-c-programming.png",
  },
  { issuer: "Anthropic", name: "Model Context Protocol (MCP)" },
  { issuer: "Anthropic", name: "Building with the Claude API" },
  {
    issuer: "Anthropic",
    name: "Claude Code In Action",
    image: "/certificates/claude-code-in-action.png",
  },
  {
    issuer: "Anthropic",
    name: "Claude 101",
    image: "/certificates/claude-101.png",
  },
  {
    issuer: "Anthropic",
    name: "Claude Code 101",
    image: "/certificates/claude-code-101.png",
  },
  {
    issuer: "Anthropic",
    name: "Introduction to Claude Cowork",
    image: "/certificates/claude-cowork.png",
  },
  {
    issuer: "BTK Akademi",
    name: "Python-Programmierung – Einsteiger bis Fortgeschritten",
    image: "/certificates/btk-python.png",
  },
  { issuer: "W3Schools", name: "JavaScript, HTML & CSS" },
];

export default function Skills() {
  return (
    <div>
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
                <TechPill key={item}>{item}</TechPill>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-10">
        <div className="mb-4 font-display text-2xl font-bold text-accent">
          Sprachen
        </div>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(160px,1fr))] gap-3.5">
          {languages.map((lang) => (
            <div
              key={lang.name}
              className={`rounded-card border-[3px] bg-card px-5 py-4 transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-[0_14px_28px_-10px_rgba(20,31,14,0.15)] ${lang.flagBorder}`}
            >
              <div className="font-display text-base font-semibold text-ink">
                {lang.name}
              </div>
              <div className="mt-1 font-mono text-[11px] tracking-[0.03em] text-accent uppercase">
                {lang.level}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-8">
        <div className="mb-4 font-display text-2xl font-bold text-accent">
          Zertifikate
        </div>
        <div className="grid grid-cols-3 gap-2 sm:grid-cols-[repeat(auto-fit,minmax(170px,1fr))] sm:gap-3.5">
          {certificates.map((cert) => (
            <CertificateCard
              key={cert.issuer + cert.name}
              issuer={cert.issuer}
              name={cert.name}
              image={cert.image}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
