export default function AusbildungBanner() {
  return (
    <div className="rounded-card border-2 border-[#f97316] bg-[#ffd400] px-4 py-3.5">
      <div className="mb-1.5 flex items-center gap-2">
        <svg
          width="15"
          height="15"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#c2410c"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="shrink-0"
        >
          <path d="M3 11l18-5v12L3 14v-3z" />
          <path d="M11.6 16.8a3 3 0 1 1-5.8-1.6" />
        </svg>
        <span className="font-mono text-[10px] tracking-[0.08em] text-[#c2410c] uppercase">
          Status: Ausbildungsplatz gesucht
        </span>
      </div>
      <p className="font-body text-[12.5px] leading-[1.5] text-[#451a03]">
        Diese Seite dient Arbeitgebern als Referenz zu meinem Werdegang und
        aktuellen Stand: Ich suche ab sofort eine neue Ausbildungsstelle, um
        meine Ausbildung zum Fachinformatiker für Anwendungsentwicklung ab
        dem 2. Lehrjahr fortzusetzen.
      </p>
    </div>
  );
}
