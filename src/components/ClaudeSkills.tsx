"use client";

import { useEffect, useState } from "react";

const skills = [
  {
    name: "deep-task-prep",
    de: "Context-First-Vorbereitung — sammelt Referenzen und Patterns vor dem Code, zerlegt Arbeit in atomare Schritte.",
  },
  {
    name: "fix-issue",
    de: "Minimal-Fix-Disziplin — verstehen, eingrenzen, minimal beheben, verifizieren. Kein unbezogenes Refactoring.",
  },
  {
    name: "review-changes",
    de: "Self-Review vor jedem Commit — prüft Typsicherheit, Sicherheit und Debug-Reste.",
  },
  {
    name: "create-module",
    de: "Pattern-basiertes Scaffolding — neue Module entlang bestehender Muster, nicht auf der grünen Wiese.",
  },
  {
    name: "pr-prep",
    de: "Quality-Gate vor jedem Merge Request — Type-Check, Linting, aussagekräftige Beschreibung.",
  },
];

const folderIcon = (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" />
  </svg>
);

const fileIcon = (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
    <polyline points="14 2 14 8 20 8" />
  </svg>
);

const folders = [
  {
    name: "skills/",
    type: "dir" as const,
    de: "Wiederverwendbare Workflows",
  },
  {
    name: "rules/",
    type: "dir" as const,
    de: "Pfad-getriggerte Konventionen",
  },
  {
    name: "context/",
    type: "dir" as const,
    de: "Projektwissen",
  },
  {
    name: "hooks/",
    type: "dir" as const,
    de: "Automatisierte Guards",
  },
  {
    name: "agents/",
    type: "dir" as const,
    de: "Spezialisierte Subagenten",
  },
  {
    name: "commands/",
    type: "dir" as const,
    de: "Slash-Commands",
  },
  {
    name: "settings.json",
    type: "file" as const,
    de: "Hook-Verdrahtung & Berechtigungen",
  },
];

export default function ClaudeSkills() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % skills.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const progress = (active / (skills.length - 1)) * 100;

  return (
    <section
      id="claude-skills"
      className="border-t border-border px-12 pt-10 pb-14"
    >
      <div className="mb-10 font-display text-3xl font-bold text-accent">
        Claude Skills
      </div>

      <div className="relative mb-6 h-[3px] w-full bg-border">
        <div
          className="absolute top-0 left-0 h-full bg-accent-bright transition-all duration-700 ease-in-out"
          style={{ width: `${progress}%` }}
        />
        <div className="absolute top-1/2 flex w-full -translate-y-1/2 justify-between">
          {skills.map((skill, i) => {
            const isActive = i === active;
            return (
              <div
                key={skill.name}
                className={`h-6 w-6 rounded-full border-[3px] transition-all duration-500 ${
                  isActive
                    ? "scale-125 border-accent-bright bg-accent-bright"
                    : i < active
                      ? "border-accent-bright bg-accent-bright"
                      : "border-border bg-page"
                }`}
              />
            );
          })}
        </div>
      </div>

      <div className="mb-16 flex justify-between">
        {skills.map((skill, i) => (
          <span
            key={skill.name}
            className={`font-mono text-sm tracking-[0.02em] transition-colors duration-500 ${
              i === active ? "font-semibold text-ink" : "text-muted"
            }`}
          >
            {skill.name}
          </span>
        ))}
      </div>

      <div className="mb-16 min-h-[70px] max-w-3xl">
        <p
          key={`de-${active}`}
          className="font-body text-lg leading-[1.6] text-ink"
        >
          {skills[active].de}
        </p>
      </div>

      <div>
        <div className="mb-5 font-mono text-xs tracking-[0.08em] text-muted uppercase">
          .claude/ — Architecture
        </div>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-3.5">
          {folders.map((folder) => (
            <div
              key={folder.name}
              className="rounded-card border border-border bg-card px-5 py-4"
            >
              <div className="mb-2.5 flex items-center gap-2.5">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-pill bg-page text-accent">
                  {folder.type === "dir" ? folderIcon : fileIcon}
                </div>
                <span className="font-mono text-[13px] font-semibold text-ink">
                  {folder.name}
                </span>
              </div>
              <p className="font-body text-[12.5px] leading-[1.5] text-muted">
                {folder.de}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
