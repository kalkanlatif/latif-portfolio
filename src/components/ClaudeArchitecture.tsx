const nodeIconProps = {
  width: 14,
  height: 14,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "#a3e635",
  strokeWidth: 2,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

const rootFolderIcon = (
  <svg {...nodeIconProps} width={16} height={16}>
    <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" />
  </svg>
);

const nodes = [
  {
    prefix: "├── ",
    name: "skills/",
    de: "Wiederverwendbare Workflows",
    icon: (
      <svg {...nodeIconProps}>
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
      </svg>
    ),
  },
  {
    prefix: "├── ",
    name: "rules/",
    de: "Pfad-getriggerte Konventionen",
    icon: (
      <svg {...nodeIconProps}>
        <path d="M9 4h6a1 1 0 0 1 1 1v2H8V5a1 1 0 0 1 1-1Z" />
        <rect x="5" y="6" width="14" height="16" rx="2" />
        <line x1="9" y1="12" x2="15" y2="12" />
        <line x1="9" y1="16" x2="15" y2="16" />
      </svg>
    ),
  },
  {
    prefix: "├── ",
    name: "context/",
    de: "Projektwissen",
    icon: (
      <svg {...nodeIconProps}>
        <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
        <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2Z" />
      </svg>
    ),
  },
  {
    prefix: "├── ",
    name: "hooks/",
    de: "Automatisierte Guards",
    icon: (
      <svg {...nodeIconProps}>
        <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
        <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
      </svg>
    ),
  },
  {
    prefix: "├── ",
    name: "agents/",
    de: "Spezialisierte Subagenten",
    icon: (
      <svg {...nodeIconProps}>
        <rect x="3" y="8" width="18" height="12" rx="2" />
        <circle cx="9" cy="14" r="1" />
        <circle cx="15" cy="14" r="1" />
        <path d="M12 8V4" />
        <circle cx="12" cy="3" r="1" />
      </svg>
    ),
  },
  {
    prefix: "├── ",
    name: "commands/",
    de: "Slash-Commands",
    icon: (
      <svg {...nodeIconProps}>
        <polyline points="4 17 10 11 4 5" />
        <line x1="12" y1="19" x2="20" y2="19" />
      </svg>
    ),
  },
  {
    prefix: "└── ",
    name: "settings.json",
    de: "Hook-Verdrahtung & Berechtigungen",
    icon: (
      <svg {...nodeIconProps}>
        <circle cx="12" cy="12" r="3" />
        <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1Z" />
      </svg>
    ),
  },
];

export default function ClaudeArchitecture() {
  return (
    <div>
      <div className="mb-4 flex items-center gap-2">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/claude.svg"
          alt=""
          width={14}
          height={14}
        />
        <span className="font-mono text-xs tracking-[0.08em] text-muted uppercase">
          .claude/ — Architecture
        </span>
      </div>
      <div className="rounded-card border border-border bg-card-dark p-5 sm:p-6">
        <div className="flex items-center gap-2 font-mono text-[13px] font-semibold text-accent-bright sm:text-sm">
          {rootFolderIcon}
          .claude/
        </div>
        <div className="mt-2.5 flex flex-col gap-2">
          {nodes.map((node) => (
            <div
              key={node.name}
              className="flex flex-wrap items-center gap-x-2 font-mono text-[11.5px] sm:text-[12.5px]"
            >
              <span className="text-on-dark-muted whitespace-pre">
                {node.prefix}
              </span>
              <span className="shrink-0">{node.icon}</span>
              <span className="font-semibold text-on-dark">{node.name}</span>
              <span className="text-on-dark-muted">— {node.de}</span>
            </div>
          ))}
        </div>
        <p className="mt-5 max-w-2xl border-t border-white/10 pt-4 font-body text-[12.5px] leading-[1.6] text-accent-bright">
          Diese Struktur nutze ich, weil sie Halluzinationen reduziert und
          Claude über ein ganzes Projekt hinweg konsistent auf demselben
          Kontext arbeiten lässt — und ehrlich gesagt macht es mir einfach
          Spaß, so zu arbeiten.
        </p>
      </div>
    </div>
  );
}
