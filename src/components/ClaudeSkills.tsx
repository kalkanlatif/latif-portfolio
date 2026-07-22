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
      className="border-t border-border px-5 pt-10 pb-14 sm:px-8 lg:px-12"
    >
      <div className="mb-2 font-display text-3xl font-bold text-accent">
        Claude Skills
      </div>
      <p className="mb-10 max-w-2xl font-body text-sm text-muted">
        Eigene, selbst entwickelte Claude-Code-Skills für den täglichen
        Entwicklungsworkflow.
      </p>

      <div className="relative mb-6 h-[3px] w-full bg-border">
        <div
          className="absolute top-0 left-0 h-full bg-accent-bright transition-all duration-700 ease-in-out"
          style={{ width: `${progress}%` }}
        />
        <div className="absolute top-1/2 grid w-full -translate-y-1/2 grid-cols-5">
          {skills.map((skill, i) => {
            const isActive = i === active;
            return (
              <div
                key={skill.name}
                className={`flex ${
                  i === 0
                    ? "justify-start"
                    : i === skills.length - 1
                      ? "justify-end"
                      : "justify-center"
                }`}
              >
                <div
                  className={`h-6 w-6 rounded-full border-[3px] transition-all duration-500 ${
                    isActive
                      ? "scale-125 border-accent-bright bg-accent-bright"
                      : i < active
                        ? "border-accent-bright bg-accent-bright"
                        : "border-border bg-page"
                  }`}
                />
              </div>
            );
          })}
        </div>
      </div>

      <div className="mb-16 grid grid-cols-5 gap-1">
        {skills.map((skill, i) => (
          <span
            key={skill.name}
            className={`font-mono text-[9px] leading-tight tracking-[0.02em] transition-colors duration-500 sm:text-sm ${
              i === 0 ? "text-left" : i === skills.length - 1 ? "text-right" : "text-center"
            } ${i === active ? "font-semibold text-ink" : "text-muted"}`}
          >
            {skill.name}
          </span>
        ))}
      </div>

      <div className="min-h-[70px] max-w-3xl">
        <p
          key={`de-${active}`}
          className="font-body text-lg leading-[1.6] text-ink"
        >
          {skills[active].de}
        </p>
      </div>
    </section>
  );
}
