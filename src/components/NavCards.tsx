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

const experience = [
  {
    company: "Vate GmbH (Photovate)",
    role: "Fachinformatiker-Azubi, Anwendungsentwicklung",
    period: "seit 09/2025",
    meta: "Mannheim · B2B-SaaS-Plattform (SEFlow) für Solarteure, Next.js/Supabase-Stack",
    bullets: [
      "Microsoft-SSO-Integration — produktiv live",
      "Receipt Automation — OCR- und Zahlungsabgleich-Pipeline — produktiv live",
      "SNRG-Webhook-Integration — Kontaktsynchronisation SEFlow → SAP",
      "Konzeption einer autonomen KI-Agenten-Pipeline für die Softwareentwicklung (Ticket → Implementierung → Review → Merge-Request) mit mehrstufigem Sicherheitsmodell",
    ],
  },
  {
    company: "Liqwotec Systems GmbH",
    role: "Junior Developer",
    period: "11/2024–08/2025",
    meta: "Worms · Industrielle Automatisierung / Steuerungstechnik",
    bullets: [
      "GUI-Design und -Entwicklung mit GTK und C",
      "EtherCAT-Protokoll-Integration mit Beckhoff-PLC-Systemen",
      "IPC-Shared-Memory-Programmierung für Systemprozesse",
      "Kleine Web-Applikationen-Entwicklung für Internal (Frontend & Backend)",
    ],
  },
  {
    company: "Predicom Solutions GmbH",
    role: "Junior Developer",
    period: "06/2024–10/2024",
    meta: "Worms · Prozessüberwachung / Sensorlösungen",
    bullets: [
      "Grundlegende Programmierung, Fehlerbehebung und Debugging",
      "Pflege bestehender Software, Entwicklung interner Anwendungen",
      "Mitarbeit an Planung und Umsetzung von Entwicklungsprojekten",
    ],
  },
  {
    company: "Süral Resort Hotel, Antalya",
    role: "Rezeptionist",
    period: "03/2021–09/2022",
    meta: "Empfang, Reservierungen, Kundenservice",
    bullets: [],
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
    items: ["Bun", "Docker", "Vercel", "Git", "Jira", "Gitlab CI/CD", "Slack"],
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
    items: ["GTK", "EtherCAT / PLC-Integration (Beckhoff)", "Linux"],
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
                <p className="mt-1 font-body text-[12px] text-muted italic">
                  {entry.meta}
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

            <div>
              <div className="mb-2 font-mono text-[10.5px] tracking-[0.08em] text-muted uppercase">
                Sprachen
              </div>
              <div className="flex flex-col gap-1">
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

            <div>
              <div className="mb-2 font-mono text-[10.5px] tracking-[0.08em] text-muted uppercase">
                Zertifikate
              </div>
              <ul className="list-disc space-y-1 pl-4 font-body text-[12.5px] leading-[1.5] text-muted">
                {certificates.map((cert) => (
                  <li key={cert}>{cert}</li>
                ))}
              </ul>
            </div>
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
          <div className="flex flex-col gap-4">
            <div>
              <div className="font-display text-sm font-semibold">
                Werner-von-Siemens-Schule Mannheim
              </div>
              <div className="font-mono text-[10.5px] tracking-[0.04em] text-muted uppercase">
                seit 09/2025
              </div>
              <p className="mt-2 font-body text-[12.5px] leading-[1.5] text-muted">
                Berufsschule zur Ausbildung Fachinformatiker
                Anwendungsentwicklung · IHK Rhein-Neckar
              </p>
            </div>
            <div>
              <div className="font-display text-sm font-semibold">
                Birecik Atatürk Anadolu Lisesi, Türkei
              </div>
              <div className="font-mono text-[10.5px] tracking-[0.04em] text-muted uppercase">
                2014–2018
              </div>
              <p className="mt-2 font-body text-[12.5px] leading-[1.5] text-muted">
                Allgemeine Hochschulreife (vergleichbar mit
                Gymnasium/Abitur)
              </p>
            </div>
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
