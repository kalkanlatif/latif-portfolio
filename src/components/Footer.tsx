export default function Footer() {
  return (
    <footer
      id="contact"
      className="flex flex-wrap items-end justify-between gap-5 border-t border-border px-12 py-9"
    >
      <div>
        <div className="mb-[5px] font-display text-base font-semibold text-[color:var(--scroll-fg)] transition-colors duration-300">
          Latif Kalkan
        </div>
        <div className="font-mono text-[10.5px] tracking-[0.04em] text-[color:var(--scroll-fg-muted)] transition-colors duration-300">
          Mannheim, DE
        </div>
      </div>
      <a
        href="mailto:kalkanlatif818@gmail.com"
        className="flex items-center gap-2 font-mono text-sm tracking-[0.03em] text-accent"
      >
        <svg
          width="15"
          height="15"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect x="2" y="4" width="20" height="16" rx="2" />
          <polyline points="2 7 12 13 22 7" />
        </svg>
        kalkanlatif818@gmail.com
      </a>
    </footer>
  );
}
