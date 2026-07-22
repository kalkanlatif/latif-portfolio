import Modal from "@/components/Modal";
import ContactForm from "@/components/ContactForm";

export default function Footer() {
  return (
    <footer
      id="contact"
      className="border-t border-border bg-card-dark px-5 py-10 text-on-dark sm:px-8 sm:py-12 lg:px-12"
    >
      <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="font-display text-lg font-bold text-on-dark">
            Latif Kalkan
          </div>
          <p className="mt-2 font-body text-[12.5px] leading-[1.6] text-on-dark-muted">
            Fachinformatiker für Anwendungsentwicklung — Backend-Entwicklung
            mit Next.js und Supabase, mit praktischer Erfahrung in
            KI-Agenten-Workflows.
          </p>
          <div className="mt-3 font-mono text-[10.5px] tracking-[0.04em] text-on-dark-muted uppercase">
            Mannheim, DE
          </div>
          <div className="mt-3 font-body text-[11.5px] leading-[1.6] text-on-dark-muted">
            Vate GmbH (Photovate) · Werner-von-Siemens-Schule Mannheim
          </div>
        </div>

        <div>
          <div className="mb-3 font-mono text-[10px] tracking-[0.08em] text-accent-bright uppercase">
            Navigation
          </div>
          <div className="flex flex-col gap-2 font-body text-[12.5px]">
            <a
              href="#experience"
              className="text-on-dark-muted transition-colors hover:text-on-dark"
            >
              Profil
            </a>
            <a
              href="#projects"
              className="text-on-dark-muted transition-colors hover:text-on-dark"
            >
              Projekte
            </a>
            <a
              href="#skills"
              className="text-on-dark-muted transition-colors hover:text-on-dark"
            >
              Tech-Stack
            </a>
            <Modal
              title="Kontakt"
          contentClassName="bg-accent-bright"
          titleClassName="text-card-dark"
          closeClassName="text-card-dark"
              trigger={
                <button
                  type="button"
                  className="text-left text-on-dark-muted transition-colors hover:text-on-dark"
                >
                  Kontakt
                </button>
              }
            >
              <ContactForm />
            </Modal>
          </div>
        </div>

        <div>
          <div className="mb-3 font-mono text-[10px] tracking-[0.08em] text-accent-bright uppercase">
            Kontakt
          </div>
          <a
            href="mailto:kalkanlatif818@gmail.com"
            className="flex items-center gap-2 font-mono text-[12.5px] text-accent-bright"
          >
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="shrink-0"
            >
              <rect x="2" y="4" width="20" height="16" rx="2" />
              <polyline points="2 7 12 13 22 7" />
            </svg>
            kalkanlatif818@gmail.com
          </a>
          <div className="mt-4 flex items-center gap-4">
            <span aria-hidden="true" className="text-on-dark-muted">
              <svg
                width="17"
                height="17"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M9 19c-4.3 1.4-4.3-2.5-6-3m12 5v-3.5c0-1 .1-1.4-.5-2 2.8-.3 5.5-1.4 5.5-6a4.6 4.6 0 0 0-1.3-3.2 4.2 4.2 0 0 0-.1-3.2s-1.1-.3-3.5 1.3a12.3 12.3 0 0 0-6.2 0C6.5 3.2 5.4 3.5 5.4 3.5a4.2 4.2 0 0 0-.1 3.2A4.6 4.6 0 0 0 4 9.9c0 4.6 2.7 5.7 5.5 6-.6.6-.6 1.2-.5 2V21" />
              </svg>
            </span>
            <a
              href="https://linkedin.com/in/latif-kalkan-9885802b1"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-on-dark-muted transition-colors hover:text-on-dark"
            >
              <svg
                width="17"
                height="17"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect x="2" y="9" width="4" height="12" />
                <circle cx="4" cy="4" r="2" />
              </svg>
            </a>
          </div>
        </div>

        <div>
          <div className="mb-3 font-mono text-[10px] tracking-[0.08em] text-accent-bright uppercase">
            Tech-Stack dieser Seite
          </div>
          <p className="font-body text-[12.5px] leading-[1.6] text-on-dark-muted">
            Next.js, TypeScript, Tailwind CSS und Supabase — gebaut mit
            Claude Code.
          </p>
        </div>
      </div>

      <div className="mt-10 flex flex-wrap items-center justify-between gap-3 border-t border-white/10 pt-6 font-mono text-[10.5px] text-on-dark-muted">
        <span>© 2026 Latif Kalkan</span>
        <span>Mannheim, Deutschland</span>
      </div>
    </footer>
  );
}
