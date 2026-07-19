import type { ReactNode } from "react";

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

function Pill({ children }: { children: ReactNode }) {
  return (
    <span className="rounded-pill bg-card-dark px-3.5 py-1.5 font-mono text-[10.5px] tracking-[0.03em] text-accent-bright">
      {children}
    </span>
  );
}

const skillGroups = [
  {
    category: "Sprachen & Frameworks",
    items: [
      "TypeScript",
      "Next.js (App Router)",
      "React 19",
      "Tailwind CSS v4",
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
    items: ["Bun", "Docker", "Vercel", "Git", "Jira", "Gitlab CI/CD", "Slack"],
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
  { name: "Deutsch", level: "B2" },
  { name: "Englisch", level: "C1" },
  { name: "Türkisch", level: "Muttersprache" },
  { name: "Kurdisch", level: "Muttersprache" },
];

const certificates = [
  "Anthropic — Claude Code 101",
  "Anthropic — Introduction to Claude Cowork",
  "Anthropic — Claude Code In Action",
  "Anthropic — AI Fluency: Framework & Foundations",
  "Anthropic — Building with the Claude API",
  "Anthropic — Model Context Protocol (MCP)",
  "Anthropic — Claude Platform 101",
  "Coursera — Advanced C Programming Language with Linux Specialization",
  "BTK Akademi — Python, Cybersicherheit in Linux",
  "W3Schools — JavaScript, HTML & CSS",
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="max-w-[1200px] border-t border-border px-12 pt-10 pb-14"
    >
      <div className="mb-[18px] font-mono text-[10.5px] tracking-[0.12em] text-muted uppercase">
        Kenntnisse
      </div>

      <div className="grid grid-cols-[repeat(auto-fit,minmax(260px,1fr))] gap-3.5">
        {skillGroups.map((group) => (
          <div
            key={group.category}
            className="rounded-card border border-border bg-card px-[22px] py-5"
          >
            <div className="mb-3 flex items-center gap-[9px]">
              {group.icon}
              <span className="font-display text-[15px] font-semibold">
                {group.category}
              </span>
            </div>
            <div className="flex flex-wrap gap-1.5">
              {group.items.map((item) => (
                <Pill key={item}>{item}</Pill>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 grid grid-cols-[repeat(auto-fit,minmax(260px,1fr))] gap-3.5">
        <div className="rounded-card border border-border bg-card px-[22px] py-5">
          <div className="mb-3 font-display text-[15px] font-semibold">
            Sprachen
          </div>
          <div className="flex flex-col gap-1.5">
            {languages.map((lang) => (
              <div
                key={lang.name}
                className="flex justify-between font-body text-[12.5px] text-ink"
              >
                <span>{lang.name}</span>
                <span className="text-muted">{lang.level}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-card border border-border bg-card px-[22px] py-5 sm:col-span-2">
          <div className="mb-3 font-display text-[15px] font-semibold">
            Zertifikate
          </div>
          <ul className="list-disc space-y-1 pl-4 font-body text-[12.5px] leading-[1.5] text-muted">
            {certificates.map((cert) => (
              <li key={cert}>{cert}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
