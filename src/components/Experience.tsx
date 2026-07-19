import type { ReactNode } from "react";
import Education from "@/components/Education";

const briefcaseIcon = (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect x="2" y="7" width="20" height="14" rx="2" />
    <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
  </svg>
);

const chipIcon = (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect x="4" y="4" width="16" height="16" rx="2" />
    <rect x="9" y="9" width="6" height="6" />
    <line x1="9" y1="1" x2="9" y2="4" />
    <line x1="15" y1="1" x2="15" y2="4" />
    <line x1="9" y1="20" x2="9" y2="23" />
    <line x1="15" y1="20" x2="15" y2="23" />
  </svg>
);

const wrenchIcon = (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94z" />
  </svg>
);

const bellIcon = (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M18 8a6 6 0 0 0-12 0c0 7-3 9-3 9h18s-3-2-3-9" />
    <path d="M13.73 21a2 2 0 0 1-3.46 0" />
  </svg>
);

const experience: {
  company: string;
  role: string;
  period: string;
  meta: string;
  bullets: string[];
  icon: ReactNode;
  badgeClass: string;
}[] = [
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
    icon: briefcaseIcon,
    badgeClass: "bg-accent-bright text-card-dark",
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
    icon: chipIcon,
    badgeClass: "bg-[#1f7a7a] text-white",
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
    icon: wrenchIcon,
    badgeClass: "bg-accent text-white",
  },
  {
    company: "Süral Resort Hotel, Antalya",
    role: "Rezeptionist",
    period: "03/2021–09/2022",
    meta: "Empfang, Reservierungen, Kundenservice",
    bullets: [],
    icon: bellIcon,
    badgeClass: "bg-border text-ink",
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="max-w-[1200px] border-t border-border px-12 pt-10 pb-14"
    >
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1.4fr_1fr]">
        <div>
          <div className="mb-[18px] font-mono text-[10.5px] tracking-[0.12em] text-muted uppercase">
            Berufserfahrung
          </div>
          <div className="flex flex-col gap-4">
            {experience.map((entry) => {
              const header = (
                <div className="flex flex-1 items-start gap-4">
                  <div
                    className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-pill ${entry.badgeClass}`}
                  >
                    {entry.icon}
                  </div>
                  <div className="flex-1">
                    <div className="font-display text-base font-semibold">
                      {entry.company}
                    </div>
                    <div className="mt-1 font-mono text-[10.5px] tracking-[0.04em] text-muted uppercase">
                      {entry.role} · {entry.period}
                    </div>
                    <p className="mt-1 font-body text-[12px] text-muted italic">
                      {entry.meta}
                    </p>
                  </div>
                </div>
              );

              if (entry.bullets.length === 0) {
                return (
                  <div
                    key={entry.company}
                    className="rounded-card border border-border bg-card px-6 py-5"
                  >
                    {header}
                  </div>
                );
              }

              return (
                <details
                  key={entry.company}
                  className="group rounded-card border border-border bg-card px-6 py-5"
                >
                  <summary className="flex cursor-pointer list-none items-start gap-4 marker:content-none [&::-webkit-details-marker]:hidden">
                    {header}
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="mt-1 shrink-0 text-muted transition-transform group-open:rotate-90"
                    >
                      <polyline points="9 18 15 12 9 6" />
                    </svg>
                  </summary>
                  <ul className="mt-3 list-disc space-y-1.5 pl-[3.5rem] font-body text-[12.5px] leading-[1.5] text-muted">
                    {entry.bullets.map((bullet) => (
                      <li key={bullet}>{bullet}</li>
                    ))}
                  </ul>
                </details>
              );
            })}
          </div>
        </div>

        <Education />
      </div>
    </section>
  );
}
