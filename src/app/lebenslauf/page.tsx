import type { Metadata } from "next";
import Image from "next/image";
import { experience } from "@/components/Experience";
import { education } from "@/components/Education";
import { skillGroups } from "@/components/Skills";
import { competencies } from "@/components/AiFluency";
import { languages, certificates } from "@/components/LanguagesCertificates";

export const metadata: Metadata = {
  title: "Lebenslauf — Latif Kalkan",
  robots: { index: false, follow: false },
};

const contact = [
  { label: "Geburtsdatum", value: "16.06.2002" },
  { label: "Adresse", value: "Bebelstr. 17, 67549 Worms" },
  { label: "Telefon", value: "0163 620 9803" },
  { label: "E-Mail", value: "kalkanlatif818@gmail.com" },
  { label: "LinkedIn", value: "linkedin.com/in/latif-kalkan-9885802b1" },
];

const profileText =
  "Fachinformatiker-Azubi (Anwendungsentwicklung) mit rund 15 Monaten Berufserfahrung als Junior Developer vor der Ausbildung. Backend-Entwicklung mit Next.js, TypeScript und Supabase, mit produktiv eingesetzten Beiträgen zu KI-Agenten-Pipelines und mehreren live geschalteten Integrationen bei Photovate. Interesse an agentenbasierter Softwareentwicklung (Claude Code, MCP, Context Engineering) über den reinen Anwendungsfall hinaus. Zuvor Erfahrung in der industriellen Automatisierung: GUI-Entwicklung mit C und GTK unter Linux sowie EtherCAT-Integration mit Beckhoff-PLC-Systemen.";

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <div className="mb-3 font-display text-lg font-bold text-accent">
      {children}
    </div>
  );
}

export default function LebenslaufPage() {
  return (
    <main className="min-h-screen w-full bg-card text-ink">
      <div className="mx-auto max-w-[820px] px-10 py-12 print:px-0 print:py-0">
      {/* Kopf */}
      <div className="flex items-start gap-6">
        <Image
          src="/cover.png"
          alt="Latif Kalkan"
          width={110}
          height={137}
          className="h-[137px] w-[110px] shrink-0 rounded-card object-cover"
        />
        <div className="flex-1 border-b border-border pb-5">
          <h1 className="font-display text-4xl font-bold">Latif Kalkan</h1>
          <p className="mt-1 font-mono text-sm font-semibold text-accent uppercase">
            Fachinformatiker für Anwendungsentwicklung — Azubi
          </p>
          <div className="mt-3 grid grid-cols-2 gap-x-6 gap-y-1.5">
            {contact.map((row) => (
              <div key={row.label} className="flex gap-2 text-[12px]">
                <span className="w-28 shrink-0 font-mono text-[10px] tracking-[0.04em] text-muted uppercase">
                  {row.label}
                </span>
                <span className="font-body text-ink">{row.value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Profil */}
      <section className="mt-7 break-inside-avoid">
        <SectionTitle>Profil</SectionTitle>
        <p className="font-body text-[12.5px] leading-[1.6] text-muted">
          {profileText}
        </p>
      </section>

      {/* Berufserfahrung */}
      <section className="mt-7">
        <SectionTitle>Berufserfahrung</SectionTitle>
        <div className="flex flex-col gap-4">
          {experience.map((entry) => (
            <div key={entry.company} className="break-inside-avoid">
              <div className="flex items-baseline justify-between gap-3">
                <div className="font-display text-[13.5px] font-semibold">
                  {entry.company}
                </div>
                <div className="shrink-0 font-mono text-[10px] tracking-[0.03em] text-muted uppercase">
                  {entry.period}
                </div>
              </div>
              <div className="font-mono text-[10px] tracking-[0.03em] text-muted uppercase">
                {entry.role}
              </div>
              <p className="mt-0.5 font-body text-[11.5px] text-muted italic">
                {entry.meta}
              </p>
              {entry.bullets.length > 0 && (
                <ul className="mt-1.5 list-disc space-y-1 pl-5 font-body text-[11.5px] leading-[1.5] text-muted">
                  {entry.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Ausbildung */}
      <section className="mt-7">
        <SectionTitle>Ausbildung</SectionTitle>
        <div className="flex flex-col gap-4">
          {education.map((entry) => (
            <div key={entry.school} className="break-inside-avoid">
              <div className="flex items-baseline justify-between gap-3">
                <div className="font-display text-[13.5px] font-semibold">
                  {entry.school}
                </div>
                <div className="shrink-0 font-mono text-[10px] tracking-[0.03em] text-muted uppercase">
                  {entry.period}
                </div>
              </div>
              <p className="mt-0.5 font-body text-[11.5px] text-muted italic">
                {entry.meta}
              </p>
              {entry.bullets.length > 0 && (
                <ul className="mt-1.5 list-disc space-y-1 pl-5 font-body text-[11.5px] leading-[1.5] text-muted">
                  {entry.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Werkzeuge & Technologien */}
      <section className="mt-7 break-inside-avoid">
        <SectionTitle>Werkzeuge &amp; Technologien</SectionTitle>
        <div className="flex flex-col gap-2.5">
          {skillGroups.map((group) => (
            <div key={group.category} className="flex gap-3 text-[11.5px]">
              <div className="w-36 shrink-0 font-display font-semibold">
                {group.category}
              </div>
              <div className="font-body text-muted">
                {group.items.map((item) => item.name).join(" · ")}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Claude-Kompetenz */}
      <section className="mt-7 break-inside-avoid">
        <SectionTitle>Claude-Kompetenz</SectionTitle>
        <p className="mb-3 font-body text-[12.5px] leading-[1.6] text-muted">
          Ich setze Claude Code produktiv als Entwicklungswerkzeug ein — von
          eigenständigem Context Engineering (.claude/-Regeln, Skills, Agents)
          bis zur Konzeption mehrstufiger KI-Agenten-Pipelines. Nach Anthropics
          AI-Fluency-Framework orientiere ich mich an vier Kompetenzen:
        </p>
        <div className="grid grid-cols-4 gap-2.5">
          {competencies.map((c) => (
            <div key={c.name} className="rounded-card border border-border px-3 py-2.5">
              <div className="font-display text-[12px] font-semibold text-accent">
                {c.name}
              </div>
              <p className="mt-0.5 font-body text-[10.5px] leading-[1.4] text-muted">
                {c.de}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Sprachen */}
      <section className="mt-7 break-inside-avoid">
        <SectionTitle>Sprachen</SectionTitle>
        <div className="flex flex-wrap gap-x-8 gap-y-1.5">
          {languages.map((lang) => (
            <div key={lang.name} className="flex items-baseline gap-2 text-[12px]">
              <span className="font-display font-semibold">{lang.name}</span>
              <span className="font-mono text-[10px] text-muted uppercase">
                {lang.level}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Zertifikate */}
      <section className="mt-7 break-inside-avoid">
        <SectionTitle>Zertifikate</SectionTitle>
        <ul className="grid grid-cols-2 gap-x-6 gap-y-1 font-body text-[11.5px] text-muted">
          {certificates.map((cert) => (
            <li key={cert.issuer + cert.name}>
              <span className="font-semibold text-ink">{cert.issuer}</span> —{" "}
              {cert.name}
            </li>
          ))}
        </ul>
      </section>
      </div>
    </main>
  );
}
