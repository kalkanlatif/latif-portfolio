import type { Metadata } from "next";
import Image from "next/image";
import AboutBlurb from "@/components/AboutBlurb";
import ActivityGraph from "@/components/ActivityGraph";
import Experience from "@/components/Experience";
import ClaudeCompetency from "@/components/ClaudeCompetency";
import { skills as claudeSkills } from "@/lib/claude-skills-data";
import Projects from "@/components/Projects";
import LanguagesCertificates from "@/components/LanguagesCertificates";

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

export default function LebenslaufPage() {
  return (
    <main className="min-h-screen w-full bg-card text-ink">
      <div className="mx-auto max-w-[680px]">
      <div className="px-5 pt-10 sm:px-8">
        {/* Kopf */}
        <div className="flex items-start gap-6 border-b border-border pb-6">
          <Image
            src="/cover.png"
            alt="Latif Kalkan"
            width={110}
            height={137}
            className="h-[137px] w-[110px] shrink-0 rounded-card object-cover"
          />
          <div className="flex-1">
            <h1 className="font-display text-4xl font-bold">Latif Kalkan</h1>
            <p className="mt-1 font-mono text-sm font-semibold text-accent uppercase">
              Fachinformatiker für Anwendungsentwicklung — Azubi
            </p>
            <div className="mt-3 grid grid-cols-2 gap-x-6 gap-y-1.5">
              {contact.map((row) => (
                <div key={row.label} className="flex min-w-0 gap-2 text-[12px]">
                  <span className="w-24 shrink-0 font-mono text-[10px] tracking-[0.04em] text-muted uppercase">
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

        <div className="mt-6">
          <AboutBlurb />
        </div>

        {/* Profil */}
        <section className="mt-6 break-inside-avoid">
          <div className="mb-3 font-display text-lg font-bold text-accent">
            Profil
          </div>
          <p className="font-body text-[12.5px] leading-[1.6] text-muted">
            {profileText}
          </p>
        </section>

        <div className="mt-8 pb-2">
          <ActivityGraph />
        </div>
      </div>

      <div className="force-open">
        <Experience />
      </div>

      <ClaudeCompetency />

      {/* Claude Skills — statische Liste (Original hat auto-advancing Timeline, im PDF unpassend) */}
      <section className="border-t border-border px-5 pt-10 pb-14 sm:px-8">
        <div className="mb-2 flex items-center gap-2.5">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/claude.svg"
            alt=""
            width={26}
            height={26}
          />
          <span className="font-display text-2xl font-bold text-accent">
            Claude Skills
          </span>
        </div>
        <p className="mb-5 max-w-2xl font-body text-[13px] leading-[1.5] text-muted">
          Eigene, selbst entwickelte Claude-Code-Skills für den täglichen
          Entwicklungsworkflow.
        </p>
        <div className="grid grid-cols-2 gap-2.5">
          {claudeSkills.map((skill) => (
            <div
              key={skill.name}
              className="flex items-start gap-2.5 rounded-card border border-border px-4 py-3"
            >
              <span className="mt-0.5 shrink-0 text-accent">{skill.icon}</span>
              <div>
                <div className="font-mono text-[11px] font-semibold text-ink">
                  {skill.name}
                </div>
                <p className="mt-0.5 font-body text-[11px] leading-[1.4] text-muted">
                  {skill.de}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Projects />

      <LanguagesCertificates />
      </div>
    </main>
  );
}
