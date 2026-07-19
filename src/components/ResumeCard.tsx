"use client";

import Modal from "@/components/Modal";

export default function ResumeCard() {
  return (
    <div className="max-w-[1200px] px-12 pt-10">
      <Modal
        title="Lebenslauf"
        wide
        trigger={
          <button
            type="button"
            className="flex w-full items-center gap-4 rounded-card border border-border bg-card px-6 py-5 text-left transition-colors hover:border-accent"
          >
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-pill bg-card-dark">
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#a3e635"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
                <polyline points="14 2 14 8 20 8" />
                <line x1="8" y1="13" x2="16" y2="13" />
                <line x1="8" y1="17" x2="16" y2="17" />
              </svg>
            </div>
            <div className="flex-1">
              <div className="font-display text-base font-semibold">
                Lebenslauf
              </div>
              <p className="font-body text-[12.5px] text-muted">
                Vollständiger CV als PDF, direkt hier einsehbar oder
                herunterladen.
              </p>
            </div>
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="shrink-0 text-muted"
            >
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </button>
        }
      >
        <div className="flex flex-col gap-4">
          <embed
            src="/cv/Latif_Kalkan_CV.pdf"
            type="application/pdf"
            className="h-[65vh] w-full rounded-md border border-border"
          />
          <div className="flex items-center justify-between gap-3">
            <p className="font-body text-[11.5px] text-muted">
              PDF wird nicht angezeigt?{" "}
              <a
                href="/cv/Latif_Kalkan_CV.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent"
              >
                In neuem Tab öffnen
              </a>
            </p>
            <a
              href="/cv/Latif_Kalkan_CV.pdf"
              download
              className="inline-flex shrink-0 items-center gap-2 rounded-pill bg-card-dark px-5 py-2.5 font-mono text-[10.5px] uppercase tracking-[0.08em] text-accent-bright transition-colors hover:bg-[#1c2417]"
            >
              <svg
                width="13"
                height="13"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" y1="15" x2="12" y2="3" />
              </svg>
              Download
            </a>
          </div>
        </div>
      </Modal>
    </div>
  );
}
