export default function TagPill({ children }: { children: string }) {
  return (
    <span className="rounded-pill bg-accent-bright px-3 py-[6px] font-mono text-[10.5px] tracking-[0.02em] text-card-dark">
      {children}
    </span>
  );
}
