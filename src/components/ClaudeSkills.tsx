"use client";

import { useEffect, useState } from "react";

const dotIconProps = {
  width: 12,
  height: 12,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2.2,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

const skills = [
  {
    name: "deep-task-prep",
    de: "Context-First-Vorbereitung — sammelt Referenzen und Patterns vor dem Code, zerlegt Arbeit in atomare Schritte.",
    icon: (
      <svg {...dotIconProps}>
        <circle cx="11" cy="11" r="7" />
        <line x1="21" y1="21" x2="16.65" y2="16.65" />
      </svg>
    ),
  },
  {
    name: "fix-issue",
    de: "Minimal-Fix-Disziplin — verstehen, eingrenzen, minimal beheben, verifizieren. Kein unbezogenes Refactoring.",
    icon: (
      <svg {...dotIconProps}>
        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94z" />
      </svg>
    ),
  },
  {
    name: "review-changes",
    de: "Self-Review vor jedem Commit — prüft Typsicherheit, Sicherheit und Debug-Reste.",
    icon: (
      <svg {...dotIconProps}>
        <polyline points="20 6 9 17 4 12" />
      </svg>
    ),
  },
  {
    name: "create-module",
    de: "Pattern-basiertes Scaffolding — neue Module entlang bestehender Muster, nicht auf der grünen Wiese.",
    icon: (
      <svg {...dotIconProps}>
        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z" />
        <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
        <line x1="12" y1="22.08" x2="12" y2="12" />
      </svg>
    ),
  },
  {
    name: "pr-prep",
    de: "Quality-Gate vor jedem Merge Request — Type-Check, Linting, aussagekräftige Beschreibung.",
    icon: (
      <svg {...dotIconProps}>
        <circle cx="18" cy="18" r="3" />
        <circle cx="6" cy="6" r="3" />
        <path d="M13 6h3a2 2 0 0 1 2 2v7" />
        <line x1="6" y1="9" x2="6" y2="21" />
      </svg>
    ),
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
      <div className="mb-2 flex items-center gap-2.5">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/claude.svg"
          alt=""
          width={28}
          height={28}
        />
        <span className="font-display text-3xl font-bold text-accent">
          Claude Skills
        </span>
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
                  className={`flex h-7 w-7 items-center justify-center rounded-full border-[3px] transition-all duration-500 ${
                    isActive
                      ? "scale-125 border-accent-bright bg-accent-bright text-card-dark"
                      : i < active
                        ? "border-accent-bright bg-accent-bright text-card-dark"
                        : "border-border bg-page text-muted"
                  }`}
                >
                  {skill.icon}
                </div>
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
