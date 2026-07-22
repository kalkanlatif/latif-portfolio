import CertificateCard from "@/components/CertificateCard";

const languages = [
  {
    code: "DE",
    name: "Deutsch",
    level: "B2",
    flagGradient:
      "linear-gradient(to right, #000000 0%, #000000 33.33%, #dd0000 33.33%, #dd0000 66.66%, #ffce00 66.66%, #ffce00 100%)",
  },
  {
    code: "EN",
    name: "Englisch",
    level: "C1",
    flagGradient:
      "linear-gradient(to right, #00247d 0%, #00247d 33.33%, #ffffff 33.33%, #ffffff 66.66%, #cf142b 66.66%, #cf142b 100%)",
  },
  {
    code: "TR",
    name: "Türkisch",
    level: "Muttersprache",
    flagGradient:
      "linear-gradient(to right, #e30a17 0%, #e30a17 50%, #ffffff 50%, #ffffff 100%)",
  },
  {
    code: "KU",
    name: "Kurdisch",
    level: "Muttersprache",
    flagGradient:
      "linear-gradient(to right, #007a3d 0%, #007a3d 33.33%, #ffce00 33.33%, #ffce00 66.66%, #ed1c24 66.66%, #ed1c24 100%)",
  },
];

const certificates = [
  {
    issuer: "Anthropic",
    name: "AI Fluency: Framework & Foundations",
    image: "/certificates/ai-fluency.png",
  },
  {
    issuer: "Coursera",
    name: "C Programming: Getting Started",
    image: "/certificates/coursera-c-programming.png",
  },
  { issuer: "Anthropic", name: "Model Context Protocol (MCP)" },
  { issuer: "Anthropic", name: "Building with the Claude API" },
  {
    issuer: "Anthropic",
    name: "Claude Code In Action",
    image: "/certificates/claude-code-in-action.png",
  },
  {
    issuer: "Anthropic",
    name: "Claude 101",
    image: "/certificates/claude-101.png",
  },
  {
    issuer: "Anthropic",
    name: "Claude Code 101",
    image: "/certificates/claude-code-101.png",
  },
  {
    issuer: "Anthropic",
    name: "Introduction to Claude Cowork",
    image: "/certificates/claude-cowork.png",
  },
  {
    issuer: "BTK Akademi",
    name: "Python-Programmierung – Einsteiger bis Fortgeschritten",
    image: "/certificates/btk-python.png",
  },
  { issuer: "W3Schools", name: "JavaScript, HTML & CSS" },
];

export default function LanguagesCertificates() {
  return (
    <section className="border-t border-border px-5 pt-10 pb-14 sm:px-8 lg:px-12">
      <div className="mb-4 font-display text-2xl font-bold text-accent">
        Sprachen
      </div>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(160px,1fr))] gap-3.5">
        {languages.map((lang) => (
          <div
            key={lang.name}
            className="rounded-card p-[3px] transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-[0_14px_28px_-10px_rgba(20,31,14,0.15)]"
            style={{ background: lang.flagGradient }}
          >
            <div className="h-full rounded-card bg-card px-5 py-4">
              <div className="font-display text-base font-semibold text-ink">
                {lang.name}
              </div>
              <div className="mt-1 font-mono text-[11px] tracking-[0.03em] text-accent uppercase">
                {lang.level}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8">
        <div className="mb-4 font-display text-2xl font-bold text-accent">
          Zertifikate
        </div>
        <div className="grid grid-cols-3 gap-2 sm:grid-cols-[repeat(auto-fit,minmax(170px,1fr))] sm:gap-3.5">
          {certificates.map((cert) => (
            <CertificateCard
              key={cert.issuer + cert.name}
              issuer={cert.issuer}
              name={cert.name}
              image={cert.image}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
