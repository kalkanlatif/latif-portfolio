import AiFluency from "@/components/AiFluency";
import Skills from "@/components/Skills";
import ClaudeArchitecture from "@/components/ClaudeArchitecture";

export default function ClaudeCompetency() {
  return (
    <section
      id="skills"
      className="border-t border-border px-5 pt-10 pb-14 sm:px-8 lg:px-12"
    >
      <div className="mb-2 font-display text-2xl font-bold text-accent">
        Claude-Kompetenz
      </div>
      <p className="mb-8 max-w-2xl font-body text-[13px] leading-[1.5] text-muted">
        So setze ich Claude in der Praxis ein — von den AI-Fluency-Grundlagen
        über meinen Tech-Stack bis zu meiner eigenen .claude/-Architektur.
      </p>

      <div className="flex flex-col gap-10">
        <AiFluency />
        <Skills />
        <ClaudeArchitecture />
      </div>
    </section>
  );
}
