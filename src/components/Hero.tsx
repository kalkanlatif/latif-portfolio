import LiveClock from "@/components/LiveClock";

export default function Hero() {
  return (
    <section className="mx-auto max-w-[1080px] px-12 pt-[52px] pb-10">
      <div className="mb-[18px]">
        <LiveClock />
      </div>

      <p className="mb-[14px] font-mono text-[11px] uppercase tracking-[0.12em] text-muted">
        Fachinformatiker für Anwendungsentwicklung — Azubi, 2. Lehrjahr
      </p>

      <h1 className="mb-4 max-w-3xl font-display text-[clamp(36px,5vw,58px)] leading-[1.06] font-bold tracking-[-0.02em]">
        Code, der funktioniert. <span className="text-accent">Agenten</span>, die
        mitdenken.
      </h1>

      <p className="mb-7 max-w-xl font-body text-sm text-muted">
        Backend-Entwicklung mit Next.js und Supabase — mit produktiv
        eingesetzten Beiträgen zu KI-Agenten-Pipelines, nicht nur Experimenten.
      </p>

      <div className="flex flex-wrap gap-3">
        <a
          href="#projects"
          className="inline-flex items-center gap-2 rounded-pill bg-card-dark px-[26px] py-[13px] font-mono text-[11.5px] uppercase tracking-[0.08em] text-accent-bright transition-colors hover:bg-[#1c2417]"
        >
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <rect x="3" y="3" width="7" height="7" />
            <rect x="14" y="3" width="7" height="7" />
            <rect x="14" y="14" width="7" height="7" />
            <rect x="3" y="14" width="7" height="7" />
          </svg>
          Projekte ansehen ↗
        </a>
        <a
          href="#contact"
          className="inline-flex items-center gap-2 rounded-pill border border-ink px-[26px] py-3 font-mono text-[11.5px] uppercase tracking-[0.08em] text-ink transition-colors hover:bg-ink hover:text-page"
        >
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M4 4h16v13H7l-3 3z" />
          </svg>
          Kontakt
        </a>
      </div>
    </section>
  );
}
