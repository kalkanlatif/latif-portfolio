const nodes = [
  { prefix: "├── ", name: "skills/", de: "Wiederverwendbare Workflows" },
  { prefix: "├── ", name: "rules/", de: "Pfad-getriggerte Konventionen" },
  { prefix: "├── ", name: "context/", de: "Projektwissen" },
  { prefix: "├── ", name: "hooks/", de: "Automatisierte Guards" },
  { prefix: "├── ", name: "agents/", de: "Spezialisierte Subagenten" },
  { prefix: "├── ", name: "commands/", de: "Slash-Commands" },
  {
    prefix: "└── ",
    name: "settings.json",
    de: "Hook-Verdrahtung & Berechtigungen",
  },
];

export default function ClaudeArchitecture() {
  return (
    <div>
      <div className="mb-4 font-mono text-xs tracking-[0.08em] text-muted uppercase">
        .claude/ — Architecture
      </div>
      <div className="rounded-card border border-border bg-card-dark p-5 sm:p-6">
        <div className="font-mono text-[13px] font-semibold text-accent-bright sm:text-sm">
          .claude/
        </div>
        <div className="mt-2.5 flex flex-col gap-1.5">
          {nodes.map((node) => (
            <div
              key={node.name}
              className="flex flex-wrap items-baseline gap-x-2 font-mono text-[11.5px] sm:text-[12.5px]"
            >
              <span className="text-on-dark-muted whitespace-pre">
                {node.prefix}
              </span>
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
