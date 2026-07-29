import type { Metadata } from "next";
import Image from "next/image";
import { experience } from "@/components/Experience";
import { education } from "@/components/Education";
import { skillGroups } from "@/components/Skills";
import { competencies } from "@/components/AiFluency";
import { languages, certificates } from "@/components/LanguagesCertificates";
import { projects, tagLogos } from "@/components/Projects";

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
    <div className="mb-2.5 font-display text-[17px] font-bold text-accent">
      {children}
    </div>
  );
}

function Intro({ children }: { children: React.ReactNode }) {
  return (
    <p className="mb-3.5 font-body text-[11.5px] leading-[1.5] text-muted">
      {children}
    </p>
  );
}

function Pill({
  name,
  logo,
  bold,
}: {
  name: string;
  logo?: string;
  bold?: boolean;
}) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-pill bg-accent-bright py-[4px] pr-2.5 pl-1.5 font-mono text-[9.5px] text-card-dark ${bold ? "font-bold" : ""}`}
    >
      {logo && (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={`https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/${logo}.svg`}
          alt=""
          width={13}
          height={13}
          className="shrink-0"
        />
      )}
      {name}
    </span>
  );
}

const folderIcon = (
  <svg
    width="14"
    height="14"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" />
  </svg>
);

const ribbonIcon = (
  <svg
    width="13"
    height="13"
    viewBox="0 0 24 24"
    fill="none"
    stroke="#5fae2c"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="mt-0.5 shrink-0"
  >
    <circle cx="12" cy="8" r="6" />
    <path d="M8.7 13.5 7 22l5-3 5 3-1.7-8.5" />
  </svg>
);

export default function LebenslaufPage() {
  return (
    <main className="min-h-screen w-full bg-card text-ink">
      <div className="mx-auto max-w-[680px] px-6 py-9">
        {/* Kopf */}
        <div className="flex items-start gap-6 border-b border-border pb-5">
          <Image
            src="/cover.png"
            alt="Latif Kalkan"
            width={104}
            height={130}
            className="h-[130px] w-[104px] shrink-0 rounded-card object-cover"
          />
          <div className="flex-1">
            <h1 className="font-display text-[32px] font-bold">
              Latif Kalkan
            </h1>
            <p className="mt-1 font-mono text-[12.5px] font-semibold text-accent uppercase">
              Fachinformatiker für Anwendungsentwicklung — Azubi
            </p>
            <div className="mt-2.5 grid grid-cols-2 gap-x-6 gap-y-1.5">
              {contact.map((row) => (
                <div key={row.label} className="flex min-w-0 gap-2 text-[11.5px]">
                  <span className="w-24 shrink-0 font-mono text-[9.5px] tracking-[0.04em] text-muted uppercase">
                    {row.label}
                  </span>
                  <span className="min-w-0 font-body break-words text-ink">
                    {row.value}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Profil */}
        <section className="mt-6 break-inside-avoid">
          <SectionTitle>Profil</SectionTitle>
          <p className="font-body text-[11.5px] leading-[1.55] text-muted">
            {profileText}
          </p>
        </section>

        {/* Berufserfahrung */}
        <section className="mt-6">
          <SectionTitle>Berufserfahrung</SectionTitle>
          <div className="flex flex-col gap-4">
            {experience.map((entry) => (
              <div key={entry.company} className="flex gap-3 break-inside-avoid">
                <div
                  className={`mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-pill ${entry.badgeClass}`}
                >
                  {entry.icon}
                </div>
                <div className="min-w-0 flex-1">
                  <div className="flex items-baseline justify-between gap-3">
                    <div className="font-display text-[13px] font-semibold">
                      {entry.company}
                    </div>
                    <div className="shrink-0 font-mono text-[9.5px] tracking-[0.03em] text-muted uppercase">
                      {entry.period}
                    </div>
                  </div>
                  <div className="font-mono text-[9.5px] tracking-[0.03em] text-muted uppercase">
                    {entry.role}
                  </div>
                  <p className="mt-0.5 font-body text-[11px] text-muted italic">
                    {entry.meta}
                  </p>
                  {entry.bullets.length > 0 && (
                    <ul className="mt-1.5 list-disc space-y-1 pl-4 font-body text-[11px] leading-[1.45] text-muted">
                      {entry.bullets.map((bullet) => (
                        <li key={bullet}>{bullet}</li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Ausbildung */}
        <section className="mt-6">
          <SectionTitle>Ausbildung</SectionTitle>
          <div className="flex flex-col gap-4">
            {education.map((entry) => (
              <div key={entry.school} className="flex gap-3 break-inside-avoid">
                <div
                  className={`mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-pill ${entry.badgeClass}`}
                >
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M22 10 12 5 2 10l10 5 10-5Z" />
                    <path d="M6 12v5c0 1.5 3 3 6 3s6-1.5 6-3v-5" />
                  </svg>
                </div>
                <div className="min-w-0 flex-1">
                  <div className="flex items-baseline justify-between gap-3">
                    <div className="font-display text-[13px] font-semibold">
                      {entry.school}
                    </div>
                    <div className="shrink-0 font-mono text-[9.5px] tracking-[0.03em] text-muted uppercase">
                      {entry.period}
                    </div>
                  </div>
                  <p className="mt-0.5 font-body text-[11px] text-muted italic">
                    {entry.meta}
                  </p>
                  {entry.bullets.length > 0 && (
                    <ul className="mt-1.5 list-disc space-y-1 pl-4 font-body text-[11px] leading-[1.45] text-muted">
                      {entry.bullets.map((bullet) => (
                        <li key={bullet}>{bullet}</li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Werkzeuge & Technologien */}
        <section className="mt-6 break-inside-avoid">
          <SectionTitle>Werkzeuge &amp; Technologien</SectionTitle>
          <Intro>
            Diese Sprachen, Frameworks und Tools kenne ich nicht nur vom
            Namen — ich habe damit produktiv gearbeitet und praktische
            Erfahrung gesammelt.
          </Intro>
          <div className="flex flex-col gap-2.5">
            {skillGroups.map((group) => (
              <div key={group.category} className="flex items-start gap-3">
                <div className="w-[108px] shrink-0 pt-0.5 font-display text-[11px] font-semibold">
                  {group.category}
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {group.items.map((item) => (
                    <Pill
                      key={item.name}
                      name={item.name}
                      logo={item.logo}
                      bold={item.bold}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Claude-Kompetenz */}
        <section className="mt-6 break-inside-avoid">
          <div className="mb-2.5 flex items-center gap-2">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/claude.svg"
              alt=""
              width={17}
              height={17}
            />
            <span className="font-display text-[17px] font-bold text-accent">
              Claude-Kompetenz
            </span>
          </div>
          <Intro>
            So setze ich Claude in der Praxis ein — eigenständiges Context
            Engineering (.claude/-Regeln, Skills, Agents) und Konzeption
            mehrstufiger KI-Agenten-Pipelines, orientiert an Anthropics
            AI-Fluency-Framework:
          </Intro>
          <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
            {competencies.map((c) => (
              <div
                key={c.name}
                className="rounded-card border border-border px-2.5 py-2"
              >
                <div className="mb-1 flex items-center gap-1.5">
                  {c.icon}
                  <div className="font-display text-[11px] font-semibold text-accent">
                    {c.name}
                  </div>
                </div>
                <p className="font-body text-[9.5px] leading-[1.35] text-muted">
                  {c.de}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Projekte */}
        <section className="mt-6 break-inside-avoid">
          <SectionTitle>Projekte</SectionTitle>
          <Intro>
            Eigene Hobbyprojekte, die ich neben Job und Ausbildung in meiner
            Freizeit entwickelt habe.
          </Intro>
          <div className="flex flex-col gap-3.5">
            {projects.map((project) => (
              <div key={project.name} className="flex gap-3">
                <div className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-pill bg-accent-bright text-card-dark">
                  {folderIcon}
                </div>
                <div className="min-w-0 flex-1">
                  <div className="font-display text-[13px] font-semibold">
                    {project.name}
                  </div>
                  <p className="mt-0.5 font-body text-[11px] leading-[1.45] text-muted">
                    {project.description}
                  </p>
                  <div className="mt-1.5 flex flex-wrap gap-1.5">
                    {project.tags.map((tag) => (
                      <Pill key={tag} name={tag} logo={tagLogos[tag]} />
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Sprachen */}
        <section className="mt-6 break-inside-avoid">
          <SectionTitle>Sprachen</SectionTitle>
          <Intro>Diese Sprachen spreche ich im Alltag und im Arbeitskontext.</Intro>
          <div className="grid grid-cols-4 gap-2.5">
            {languages.map((lang) => (
              <div
                key={lang.name}
                className="rounded-card p-[2px]"
                style={{ background: lang.flagGradient }}
              >
                <div className="rounded-card bg-card px-2.5 py-2">
                  <div className="font-display text-[11.5px] font-semibold text-ink">
                    {lang.name}
                  </div>
                  <div className="font-mono text-[9px] tracking-[0.03em] text-accent uppercase">
                    {lang.level}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Zertifikate */}
        <section className="mt-6 mb-2 break-inside-avoid">
          <SectionTitle>Zertifikate</SectionTitle>
          <Intro>
            Online-Kurse, die ich außerhalb des Jobs in meiner Freizeit
            gemacht habe, um mich selbst weiterzubilden.
          </Intro>
          <div className="grid grid-cols-2 gap-x-6 gap-y-1.5">
            {certificates.map((cert) => (
              <div
                key={cert.issuer + cert.name}
                className="flex items-start gap-1.5 font-body text-[11px] text-muted"
              >
                {ribbonIcon}
                <span>
                  <span className="font-semibold text-ink">{cert.issuer}</span>{" "}
                  — {cert.name}
                </span>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
