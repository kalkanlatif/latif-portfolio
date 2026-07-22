import TagPill from "@/components/TagPill";

const projects = [
  {
    name: "Kalkan Stundenzettel",
    description:
      "Web-App zur Arbeitszeiterfassung mit PDF-Export — live im Einsatz. Von der Eingabe der Arbeitszeiten bis zum fertigen, exportierbaren Stundenzettel.",
    tags: ["Next.js", "Supabase", "Vercel"],
  },
  {
    name: "TimerNova",
    description:
      "Next.js-Anwendung mit automatisiertem Deployment-Workflow über GitHub Actions und Docker-Containerisierung für konsistente Umgebungen.",
    tags: ["Next.js", "Supabase", "Docker", "GitHub Actions"],
  },
  {
    name: "migrant-compass",
    description:
      "KI-gestützte, mehrsprachige Anwendung mit dem Anthropic AI SDK — zeigt praktische Erfahrung darin, LLM-Funktionalität sauber in ein produktives Next.js/Supabase-Setup zu integrieren.",
    tags: ["Next.js", "Anthropic AI SDK", "Supabase", "next-intl"],
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="border-t border-border px-5 pt-10 pb-14 sm:px-8 lg:px-12"
    >
      <div className="mb-4 font-display text-2xl font-bold text-accent">
        Projekte
      </div>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(260px,1fr))] gap-3.5">
        {projects.map((project) => (
          <div
            key={project.name}
            className="overflow-hidden rounded-card border border-border bg-card"
          >
            <div className="flex h-[90px] items-center justify-center bg-[#eaf7dd]">
              <svg
                width="26"
                height="26"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#437d1f"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="16 18 22 12 16 6" />
                <polyline points="8 6 2 12 8 18" />
              </svg>
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
                  <TagPill key={tag}>{tag}</TagPill>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
