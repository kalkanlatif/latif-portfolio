export default function TagPill({
  children,
  logo,
}: {
  children: string;
  logo?: string;
}) {
  return (
    <span className="inline-flex items-center gap-2 rounded-pill bg-accent-bright py-[6px] pr-3.5 pl-2 font-mono text-[10.5px] tracking-[0.02em] text-card-dark">
      {logo && (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={`https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/${logo}.svg`}
          alt=""
          width={22}
          height={22}
          className="shrink-0"
        />
      )}
      {children}
    </span>
  );
}
