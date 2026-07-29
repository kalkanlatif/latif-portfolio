import TagPill from "@/components/TagPill";

export const tagLogos: Record<string, string> = {
  "Next.js": "nextdotjs",
  Supabase: "supabase",
  Vercel: "vercel",
  Docker: "docker",
  "GitHub Actions": "githubactions",
  "Anthropic AI SDK": "anthropic",
};

const stundenzettelIcon = (
  <svg
    width="30"
    height="30"
    viewBox="0 0 24 24"
    fill="none"
    stroke="#437d1f"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M9 4h6a1 1 0 0 1 1 1v2H8V5a1 1 0 0 1 1-1Z" />
    <rect x="5" y="6" width="14" height="16" rx="2" />
    <polyline points="9 13 11 15 15 11" />
  </svg>
);

const timerNovaIcon = (
  <svg
    width="30"
    height="30"
    viewBox="0 0 24 24"
    fill="none"
    stroke="#437d1f"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="12" cy="13" r="8" />
    <polyline points="12 9 12 13 15 15" />
    <line x1="9" y1="1.5" x2="15" y2="1.5" />
    <line x1="12" y1="1.5" x2="12" y2="4.5" />
  </svg>
);

const migrantCompassIcon = (
  <svg
    width="30"
    height="30"
    viewBox="0 0 24 24"
    fill="none"
    stroke="#437d1f"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="12" cy="12" r="10" />
    <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" />
  </svg>
);

export const projects = [
  {
    name: "Kalkan Stundenzettel",
    description:
      "Web-App zur Arbeitszeiterfassung mit PDF-Export — live im Einsatz. Von der Eingabe der Arbeitszeiten bis zum fertigen, exportierbaren Stundenzettel.",
    tags: ["Next.js", "Supabase", "Vercel"],
    header: (
      <div className="flex items-center gap-2.5">
        {stundenzettelIcon}
        <span className="font-display text-xl font-bold text-card-dark">
          Kalkan Stundenzettel
        </span>
      </div>
    ),
  },
  {
    name: "TimerNova",
    description:
      "Next.js-Anwendung mit automatisiertem Deployment-Workflow über GitHub Actions und Docker-Containerisierung für konsistente Umgebungen.",
    tags: ["Next.js", "Supabase", "Docker", "GitHub Actions"],
    header: (
      <div className="flex items-center gap-2.5">
        {timerNovaIcon}
        <span className="font-display text-2xl font-bold text-card-dark">
          TimerNova
        </span>
      </div>
    ),
  },
  {
    name: "migrant-compass",
    description:
      "KI-gestützte, mehrsprachige Anwendung mit dem Anthropic AI SDK — zeigt praktische Erfahrung darin, LLM-Funktionalität sauber in ein produktives Next.js/Supabase-Setup zu integrieren.",
    tags: ["Next.js", "Anthropic AI SDK", "Supabase", "next-intl"],
    header: (
      <div className="flex items-center gap-2.5">
        {migrantCompassIcon}
        <span className="font-mono text-xl font-bold text-card-dark">
          migrant-compass
        </span>
      </div>
    ),
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="border-t border-border px-5 pt-10 pb-14 sm:px-8 lg:px-12"
    >
      <div className="mb-2 font-display text-2xl font-bold text-accent">
        Projekte
      </div>
      <p className="mb-4 max-w-2xl font-body text-[13px] leading-[1.5] text-muted">
        Eigene Hobbyprojekte, die ich neben Job und Ausbildung in meiner
        Freizeit entwickelt habe.
      </p>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(260px,1fr))] gap-3.5">
        {projects.map((project) => (
          <div
            key={project.name}
            className="overflow-hidden rounded-card border border-border bg-card"
          >
            <div className="flex h-[90px] items-center justify-center bg-[#eaf7dd]">
              {project.header}
            </div>
            <div className="px-5 pt-[18px] pb-[18px]">
              <div className="mb-1.5 font-display text-base font-semibold">
                {project.name}
              </div>
              <p className="mb-3 font-body text-[12.5px] leading-[1.5] text-muted">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-1.5">
                {project.tags.map((tag) => (
                  <TagPill key={tag} logo={tagLogos[tag]}>
                    {tag}
                  </TagPill>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
