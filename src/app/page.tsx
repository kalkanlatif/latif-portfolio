import Image from "next/image";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import ActivityGraph from "@/components/ActivityGraph";
import AboutBlurb from "@/components/AboutBlurb";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import ClaudeSkills from "@/components/ClaudeSkills";
import Projects from "@/components/Projects";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <div className="px-5 pt-8 sm:px-8 lg:px-12">
        <div className="relative flex flex-col gap-6 lg:block">
          <Image
            src="/cover.png"
            alt="Latif Kalkan"
            width={220}
            height={275}
            className="rounded-card object-cover"
            priority
          />
          <div className="lg:absolute lg:top-8 lg:right-12 lg:w-full lg:max-w-md">
            <ActivityGraph />
            <AboutBlurb />
          </div>
        </div>
      </div>
      <Hero />
      <Experience />
      <Skills />
      <ClaudeSkills />
      <Projects />
      <Footer />
    </>
  );
}
