"use client";

import { forwardRef } from "react";
import type { ComponentPropsWithoutRef, ReactNode } from "react";
import Modal from "@/components/Modal";

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

function TagPill({ children }: { children: ReactNode }) {
  return (
    <span className="rounded-pill border border-border bg-page px-[11px] py-[5px] font-mono text-[9.5px] tracking-[0.03em] text-ink">
      {children}
    </span>
  );
}

const experience = [
  {
    company: "Vate GmbH (Photovate)",
    role: "Fachinformatiker-Azubi, Anwendungsentwicklung",
    period: "seit 09/2025, Mannheim",
    description:
      "Photovate (SEFlow) ist eine B2B-SaaS-Plattform für Solarteure — Vertrieb, Angebote, Auftragsabwicklung und mehr, auf Next.js/Supabase-Basis. Eigene Beiträge, produktiv live geschaltet:",
    bullets: [
      "Microsoft-SSO-Integration",
      "Receipt Automation — OCR- und Zahlungsabgleich-Pipeline",
      "SNRG-Webhook-Integration (Kontaktsynchronisation SEFlow → SAP)",
      "Konzeption einer autonomen KI-Agenten-Pipeline für die Softwareentwicklung (Ticket → Implementierung → Review → Merge-Request), inkl. Multi-Agent-Review und mehrstufigem Sicherheitsmodell",
    ],
  },
  {
    company: "Liqwotec Systems GmbH, Worms",
    role: "Junior Developer",
    period: "11/2024–08/2025",
    description:
      "GUI-Design und -Entwicklung mit GTK und C, IPC-Shared-Memory-Programmierung für Systemprozesse, EtherCAT-Protokoll-Integration mit Beckhoff-PLC-Systemen, vollständige Web-Application-Entwicklung (Frontend & Backend).",
    bullets: [],
  },
  {
    company: "Predicom Solutions GmbH, Worms",
    role: "Junior Developer",
    period: "06/2024–10/2024",
    description:
      "Grundlegende Programmierung, Fehlerbehebung und Debugging, Pflege bestehender Software, Entwicklung interner Anwendungen, Mitarbeit an Entwicklungsprojekten.",
    bullets: [],
  },
];

const projects = [
  {
    name: "Kalkan Stundenzettel",
    description:
      "Web-App zur Arbeitszeiterfassung mit PDF-Export — live im Einsatz. Von der Eingabe der Arbeitszeiten bis zum fertigen, exportierbaren Stundenzettel.",
    tags: ["Next.js", "Supabase", "Vercel"],
  },
  {
    name: "TimerNova",
    description:
      "Next.js-Anwendung mit automatisiertem Deployment-Workflow über GitHub Actions und Docker-Containerisierung für konsistente Umgebungen.",
    tags: ["Next.js", "Supabase", "Docker", "GitHub Actions"],
  },
  {
    name: "migrant-compass",
    description:
      "KI-gestützte, mehrsprachige Anwendung mit dem Anthropic AI SDK — zeigt praktische Erfahrung darin, LLM-Funktionalität sauber in ein produktives Next.js/Supabase-Setup zu integrieren.",
    tags: ["Next.js", "Anthropic AI SDK", "Supabase", "next-intl"],
  },
];

const skillGroups = [
  {
    category: "Sprachen & Frameworks",
    items: ["TypeScript", "Next.js (App Router)", "React 19", "Tailwind CSS v4", "SQL", "C"],
  },
  {
    category: "Backend & Daten",
    items: ["Supabase", "PostgreSQL", "Row Level Security"],
  },
  {
    category: "Tooling",
    items: ["Bun", "Docker", "Vercel", "Git", "Jira"],
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
  },
  {
    category: "Sonstiges",
    items: ["GTK", "EtherCAT / PLC-Integration (Beckhoff)"],
  },
];

export default function NavCards() {
  return (
    <section id="cards" className="max-w-[1200px] px-12 pt-10 pb-14">
      <div className="grid grid-cols-[repeat(auto-fit,minmax(260px,1fr))] gap-3.5">
        <Modal
          title="Berufserfahrung"
          trigger={
            <Card
              title="Berufserfahrung"
              description="Photovate, Liqwotec, Predicom — vom PLC-Controller zur B2B-SaaS-Plattform."
              icon={
                <svg {...iconProps}>
                  <rect x="2" y="7" width="20" height="14" rx="2" />
                  <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
                </svg>
              }
            />
          }
        >
          <div className="flex flex-col gap-5">
            {experience.map((entry) => (
              <div key={entry.company}>
                <div className="font-display text-sm font-semibold">
                  {entry.company}
                </div>
                <div className="font-mono text-[10.5px] tracking-[0.04em] text-muted uppercase">
                  {entry.role} · {entry.period}
                </div>
                <p className="mt-2 font-body text-[12.5px] leading-[1.5] text-muted">
                  {entry.description}
                </p>
                {entry.bullets.length > 0 && (
                  <ul className="mt-2 list-disc space-y-1 pl-4 font-body text-[12.5px] leading-[1.5] text-muted">
                    {entry.bullets.map((bullet) => (
                      <li key={bullet}>{bullet}</li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </Modal>

        <Modal
          title="Projekte"
          trigger={
            <Card
              title="Projekte"
              description="Kalkan Stundenzettel, TimerNova, migrant-compass — drei live eingesetzte Anwendungen."
              icon={
                <svg {...iconProps}>
                  <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" />
                </svg>
              }
            />
          }
        >
          <div className="flex flex-col gap-5">
            {projects.map((project) => (
              <div key={project.name}>
                <div className="font-display text-sm font-semibold">
                  {project.name}
                </div>
                <p className="mt-2 font-body text-[12.5px] leading-[1.5] text-muted">
                  {project.description}
                </p>
                <div className="mt-2 flex flex-wrap gap-1.5">
                  {project.tags.map((tag) => (
                    <TagPill key={tag}>{tag}</TagPill>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Modal>

        <Modal
          title="Kenntnisse"
          trigger={
            <Card
              title="Kenntnisse"
              description="Next.js, Supabase, TypeScript — und praktische Erfahrung mit Agenten-Workflows."
              icon={
                <svg {...iconProps}>
                  <polygon points="12 2 2 7 12 12 22 7 12 2" />
                  <polyline points="2 17 12 22 22 17" />
                  <polyline points="2 12 12 17 22 12" />
                </svg>
              }
            />
          }
        >
          <div className="flex flex-col gap-4">
            {skillGroups.map((group) => (
              <div key={group.category}>
                <div className="mb-2 font-mono text-[10.5px] tracking-[0.08em] text-muted uppercase">
                  {group.category}
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {group.items.map((item) => (
                    <Pill key={item}>{item}</Pill>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Modal>

        <Modal
          title="Ausbildung"
          trigger={
            <Card
              title="Ausbildung"
              description="Fachinformatiker Anwendungsentwicklung, Werner-von-Siemens-Schule Mannheim."
              icon={
                <svg {...iconProps}>
                  <path d="M22 10 12 5 2 10l10 5 10-5Z" />
                  <path d="M6 12v5c0 1.5 3 3 6 3s6-1.5 6-3v-5" />
                </svg>
              }
            />
          }
        >
          <p className="font-body text-[12.5px] leading-[1.6] text-muted">
            Werner-von-Siemens-Schule Mannheim · Fachinformatiker
            Anwendungsentwicklung · IHK Rhein-Neckar
          </p>
        </Modal>

        <Modal
          title="Kontakt"
          trigger={
            <Card
              title="Kontakt"
              description="Fragen, Angebote, Feedback — schreib mir direkt."
              icon={
                <svg {...iconProps}>
                  <rect x="2" y="4" width="20" height="16" rx="2" />
                  <polyline points="2 7 12 13 22 7" />
                </svg>
              }
            />
          }
        >
          <div className="flex flex-col gap-3">
            <a
              href="mailto:kalkanlatif818@gmail.com"
              className="font-mono text-sm text-accent"
            >
              kalkanlatif818@gmail.com
            </a>
            <p className="font-mono text-[10.5px] tracking-[0.04em] text-muted uppercase">
              Mannheim
            </p>
            <p className="font-body text-[12px] text-muted">
              Kontaktformular folgt, sobald die Supabase-Anbindung steht —
              bis dahin gerne direkt per E-Mail.
            </p>
          </div>
        </Modal>

        <Modal
          title="Lebenslauf"
          wide
          trigger={
            <Card
              title="Lebenslauf"
              description="Vollständiger CV als PDF, direkt hier einsehbar oder herunterladen."
              icon={
                <svg {...iconProps}>
                  <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
                  <polyline points="14 2 14 8 20 8" />
                  <line x1="8" y1="13" x2="16" y2="13" />
                  <line x1="8" y1="17" x2="16" y2="17" />
                </svg>
              }
            />
          }
        >
          <div className="flex flex-col gap-4">
            <embed
              src="/cv/Latif_Kalkan_CV.pdf"
              type="application/pdf"
              className="h-[65vh] w-full rounded-md border border-border"
            />
            <div className="flex items-center justify-between gap-3">
              <p className="font-body text-[11.5px] text-muted">
                PDF wird nicht angezeigt?{" "}
                <a
                  href="/cv/Latif_Kalkan_CV.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent"
                >
                  In neuem Tab öffnen
                </a>
              </p>
              <a
                href="/cv/Latif_Kalkan_CV.pdf"
                download
                className="inline-flex shrink-0 items-center gap-2 rounded-pill bg-card-dark px-5 py-2.5 font-mono text-[10.5px] uppercase tracking-[0.08em] text-accent-bright transition-colors hover:bg-[#1c2417]"
              >
                <svg
                  width="13"
                  height="13"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                  <polyline points="7 10 12 15 17 10" />
                  <line x1="12" y1="15" x2="12" y2="3" />
                </svg>
                Download
              </a>
            </div>
          </div>
        </Modal>
      </div>
    </section>
  );
}

const Card = forwardRef<
  HTMLButtonElement,
  ComponentPropsWithoutRef<"button"> & {
    title: string;
    description: string;
    icon: ReactNode;
  }
>(({ title, description, icon, className, ...props }, ref) => {
  return (
    <button
      ref={ref}
      type="button"
      className={`w-full cursor-pointer rounded-card border border-border bg-card px-[22px] py-5 text-left transition-colors hover:border-accent ${className ?? ""}`}
      {...props}
    >
      <div className="mb-3 flex items-center gap-[9px]">
        {icon}
        <span className="font-display text-[15px] font-semibold">
          {title}
        </span>
      </div>
      <p className="font-body text-[12.5px] leading-[1.5] text-muted">
        {description}
      </p>
    </button>
  );
});
Card.displayName = "Card";
