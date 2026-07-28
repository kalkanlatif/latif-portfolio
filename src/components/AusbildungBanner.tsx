"use client";

import { useState } from "react";

export default function AusbildungBanner() {
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  return (
    <div className="relative rounded-card border-2 border-accent-bright bg-card-dark px-4 py-3.5">
      <button
        type="button"
        onClick={() => setVisible(false)}
        aria-label="Ausblenden"
        className="absolute top-3 right-3 text-accent-bright/70 transition-colors hover:text-accent-bright"
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
          <line x1="18" y1="6" x2="6" y2="18" />
          <line x1="6" y1="6" x2="18" y2="18" />
        </svg>
      </button>
      <div className="mb-1.5 flex items-center gap-2 pr-6">
        <svg
          width="15"
          height="15"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#a3e635"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="shrink-0"
        >
          <path d="M3 11l18-5v12L3 14v-3z" />
          <path d="M11.6 16.8a3 3 0 1 1-5.8-1.6" />
        </svg>
        <span className="font-mono text-[10px] tracking-[0.08em] text-accent-bright uppercase">
          Status: Ausbildungsplatz gesucht
        </span>
      </div>
      <p className="font-body text-[12.5px] leading-[1.5] text-accent-bright">
        Diese Seite dient Arbeitgebern als Referenz zu meinem Werdegang und
        aktuellen Stand: Ich suche{" "}
        <span className="bg-accent-bright px-1 py-0.5 font-semibold text-card-dark">
          ab sofort eine neue Ausbildungsstelle
        </span>
        , um meine Ausbildung zum Fachinformatiker für Anwendungsentwicklung{" "}
        <span className="bg-accent-bright px-1 py-0.5 font-semibold text-card-dark">
          ab dem 2. Lehrjahr
        </span>{" "}
        fortzusetzen.
      </p>
    </div>
  );
}
