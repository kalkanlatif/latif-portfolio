import Modal from "@/components/Modal";
import ContactForm from "@/components/ContactForm";

export default function Nav() {
  return (
    <header className="flex flex-wrap items-center justify-between gap-y-3 border-b border-border px-5 py-4 sm:px-8 sm:py-[18px] lg:px-12">
      <span className="font-display text-lg font-bold text-ink [-webkit-text-stroke:0.6px_currentColor] sm:text-xl">
        Latif Kalkan
      </span>
      <div className="flex flex-wrap items-center gap-4 sm:gap-7">
        <a
          href="#experience"
          className="font-mono text-[10.5px] tracking-[0.1em] text-ink uppercase"
        >
          Profil
        </a>
        <a
          href="#projects"
          className="font-mono text-[10.5px] tracking-[0.1em] text-ink uppercase"
        >
          Projekte
        </a>
        <Modal
          title="Kontakt"
          contentClassName="bg-accent-bright"
          titleClassName="text-card-dark"
          closeClassName="text-card-dark"
          trigger={
            <button
              type="button"
              className="font-mono text-[10.5px] tracking-[0.1em] text-ink uppercase"
            >
              Kontakt
            </button>
          }
        >
          <ContactForm />
        </Modal>
        <span aria-hidden="true" className="text-muted">
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
          className="text-muted"
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
    </header>
  );
}
