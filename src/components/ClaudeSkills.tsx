"use client";

import { useEffect, useState } from "react";

const skills = [
  {
    name: "deep-task-prep",
    de: "Context-First-Vorbereitung — sammelt Recherche, Design-/Schema-Referenzen und Code-Patterns vor dem ersten Code und zerlegt die Arbeit in atomare Schritte.",
    en: "Context-first preparation — gathers research, design/schema references and code patterns before any code and slices the work into atomic steps.",
  },
  {
    name: "fix-issue",
    de: "Minimal-Fix-Bugdisziplin — verstehen, eingrenzen, planen, minimal beheben, verifizieren; kein unbezogenes Refactoring.",
    en: "Minimal-fix bug discipline — understand, isolate, plan, fix minimally, verify; no unrelated refactoring.",
  },
  {
    name: "review-changes",
    de: "Self-Review vor jedem Commit — prüft Typsicherheit, Übersetzungen, Sicherheit und Debug-Reste per Checkliste.",
    en: "Self-review before every commit — checks type safety, translations, security and leftover debug code against a checklist.",
  },
  {
    name: "create-module",
    de: "Pattern-basiertes Scaffolding — erzeugt neue Module entlang bestehender Muster statt auf der grünen Wiese.",
    en: "Pattern-based scaffolding — creates new modules along existing patterns rather than from scratch.",
  },
  {
    name: "pr-prep",
    de: "Quality-Gate vor jedem Merge Request — Type-Check, Linting und aussagekräftige MR-Beschreibung als fester Durchlauf.",
    en: "Quality gate before every merge request — type-check, linting and a meaningful MR description as a fixed pass.",
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
      <div className="mb-8 font-display text-2xl font-bold text-accent">
        Claude Skills
      </div>

      <div className="relative mb-4 h-[2px] w-full bg-border">
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
                className={`h-4 w-4 rounded-full border-2 transition-all duration-500 ${
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

      <div className="mb-12 flex justify-between">
        {skills.map((skill, i) => (
          <span
            key={skill.name}
            className={`font-mono text-[10.5px] tracking-[0.02em] transition-colors duration-500 ${
              i === active ? "font-semibold text-ink" : "text-muted"
            }`}
          >
            {skill.name}
          </span>
        ))}
      </div>

      <div className="mb-14 min-h-[90px] max-w-2xl">
        <p key={`de-${active}`} className="font-body text-[13.5px] leading-[1.6] text-ink">
          <span className="mr-2 font-mono text-[10px] text-muted uppercase">
            DE
          </span>
          {skills[active].de}
        </p>
        <p className="mt-2 font-body text-[13.5px] leading-[1.6] text-muted">
          <span className="mr-2 font-mono text-[10px] text-muted uppercase">
            EN
          </span>
          {skills[active].en}
        </p>
      </div>

      <div>
        <div className="mb-4 font-mono text-[10.5px] tracking-[0.08em] text-muted uppercase">
          .claude/ — Architecture
        </div>
        <div className="flex flex-col gap-1.5 font-mono text-[13px]">
          <div className="text-ink">.claude/</div>
          {folders.map((folder, i) => (
            <div
              key={folder.name}
              className="flex flex-wrap items-baseline gap-x-2 gap-y-0.5 pl-2"
            >
              <span className="text-muted">
                {i === folders.length - 1 ? "└──" : "├──"}
              </span>
              <span className="text-accent">{folder.name}</span>
              <span className="text-muted">→</span>
              <span className="font-body text-[12px] text-muted normal-case">
                {folder.de} · {folder.en}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
