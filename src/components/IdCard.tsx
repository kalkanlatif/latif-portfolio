import LiveClock from "@/components/LiveClock";

const rows: { label: string; value: string; href?: string }[] = [
  { label: "Firma", value: "Vate GmbH (Photovate)" },
  { label: "Schule", value: "Werner-von-Siemens-Schule Mannheim" },
  {
    label: "Telefon",
    value: "0163 620 9803",
    href: "tel:+4901636209803",
  },
  {
    label: "E-Mail",
    value: "kalkanlatif818@gmail.com",
    href: "mailto:kalkanlatif818@gmail.com",
  },
  {
    label: "LinkedIn",
    value: "latif-kalkan",
    href: "https://linkedin.com/in/latif-kalkan-9885802b1",
  },
  {
    label: "GitHub",
    value: "GitHub",
    href: "https://github.com/",
  },
];

export default function IdCard() {
  return (
    <div className="rounded-card border border-border bg-card p-4">
      <LiveClock />
      <p className="mt-2.5 font-mono text-[10.5px] uppercase tracking-[0.08em] text-muted">
        Fachinformatiker für Anwendungsentwicklung — Azubi, 2. Lehrjahr
      </p>

      <div className="mt-3.5 grid grid-cols-2 gap-x-4 gap-y-3 border-t border-border pt-3.5">
        {rows.map((row) => (
          <div key={row.label} className="min-w-0">
            <div className="font-mono text-[8.5px] tracking-[0.06em] text-muted uppercase">
              {row.label}
            </div>
            {row.href ? (
              <a
                href={row.href}
                target={row.href.startsWith("http") ? "_blank" : undefined}
                rel={
                  row.href.startsWith("http")
                    ? "noopener noreferrer"
                    : undefined
                }
                className="block font-body text-[12px] leading-[1.3] text-ink transition-colors hover:text-accent"
              >
                {row.value}
              </a>
            ) : (
              <div className="font-body text-[12px] leading-[1.3] text-ink">
                {row.value}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
