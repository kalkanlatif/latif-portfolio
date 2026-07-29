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

export const skills = [
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
