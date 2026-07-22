export default function AusbildungBanner() {
  return (
    <div className="rounded-card border-2 border-[#d97706] bg-[#fef3c7] px-4 py-3.5">
      <div className="mb-1.5 flex items-center gap-2">
        <svg
          width="15"
          height="15"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#92400e"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="shrink-0"
        >
          <path d="M3 11l18-5v12L3 14v-3z" />
          <path d="M11.6 16.8a3 3 0 1 1-5.8-1.6" />
        </svg>
        <span className="font-mono text-[10px] tracking-[0.08em] text-[#92400e] uppercase">
          Status: Ausbildungsplatz gesucht
        </span>
      </div>
      <p className="font-body text-[12.5px] leading-[1.5] text-[#78350f]">
        Diese Seite dient Arbeitgebern als Referenz zu meinem Werdegang und
        aktuellen Stand: Ich suche ab sofort eine neue Ausbildungsstelle, um
        meine Ausbildung zum Fachinformatiker für Anwendungsentwicklung ab
        dem 2. Lehrjahr fortzusetzen.
      </p>
    </div>
  );
}
