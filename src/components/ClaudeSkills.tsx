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

const folders = [
  {
    name: "skills/",
    type: "dir" as const,
    de: "Wiederverwendbare Workflows",
    en: "Reusable workflows",
  },
  {
    name: "rules/",
    type: "dir" as const,
    de: "Pfad-getriggerte Konventionen",
    en: "Path-scoped conventions",
  },
  {
    name: "context/",
    type: "dir" as const,
    de: "Projektwissen",
    en: "Project knowledge",
  },
  {
    name: "hooks/",
    type: "dir" as const,
    de: "Automatisierte Guards",
    en: "Automated guards",
  },
  {
    name: "agents/",
    type: "dir" as const,
    de: "Spezialisierte Subagenten",
    en: "Specialized subagents",
  },
  {
    name: "commands/",
    type: "dir" as const,
    de: "Slash-Commands",
    en: "Slash commands",
  },
  {
    name: "settings.json",
    type: "file" as const,
    de: "Hook-Verdrahtung & Berechtigungen",
    en: "Hook wiring & permissions",
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
        <div className="flex flex-col gap-2.5 font-mono text-base">
          <div className="text-ink">.claude/</div>
          {folders.map((folder, i) => (
            <div
              key={folder.name}
              className="flex flex-wrap items-baseline gap-x-3 gap-y-1 pl-2"
            >
              <span className="text-muted">
                {i === folders.length - 1 ? "└──" : "├──"}
              </span>
              <span className="text-accent">{folder.name}</span>
              <span className="text-muted">→</span>
              <span className="font-body text-sm text-muted normal-case">
                {folder.de} · {folder.en}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
