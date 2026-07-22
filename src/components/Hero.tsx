import ResumeCard from "@/components/ResumeCard";
import Modal from "@/components/Modal";
import ContactForm from "@/components/ContactForm";

export default function Hero() {
  return (
    <section className="px-5 pt-10 pb-10 sm:px-8 sm:pt-[52px] lg:px-12">
      <h1 className="mb-4 max-w-3xl font-display text-[clamp(36px,5vw,58px)] leading-[1.06] font-bold tracking-[-0.02em]">
        Code, der funktioniert. <span className="text-accent">Agenten</span>, die
        mitdenken.
      </h1>

      <p className="mb-7 max-w-xl font-body text-sm text-muted">
        Backend-Entwicklung mit Next.js und Supabase — mit produktiv
        eingesetzten Beiträgen zu KI-Agenten-Pipelines, nicht nur Experimenten.
      </p>

      <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
        <div className="order-1 grid grid-cols-2 gap-3 sm:contents">
          <Modal
            title="Kontakt"
            trigger={
              <button
                type="button"
                className="order-1 inline-flex w-full items-center justify-center gap-2 rounded-pill border border-ink px-[26px] py-3 font-mono text-[11.5px] uppercase tracking-[0.08em] text-ink transition-colors hover:bg-ink hover:text-page sm:order-2 sm:w-auto"
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
              </button>
            }
          >
            <ContactForm />
          </Modal>
          <ResumeCard />
        </div>
        <a
          href="#projects"
          className="order-2 inline-flex items-center justify-center gap-2 rounded-pill bg-card-dark px-[26px] py-[13px] font-mono text-[11.5px] uppercase tracking-[0.08em] text-accent-bright transition-colors hover:bg-[#1c2417] sm:order-1"
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
          Hobbyprojekte ansehen ↗
        </a>
      </div>
    </section>
  );
}
