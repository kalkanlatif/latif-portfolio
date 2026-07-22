import Image from "next/image";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import ActivityGraph from "@/components/ActivityGraph";
import AboutBlurb from "@/components/AboutBlurb";
import IdCard from "@/components/IdCard";
import Experience from "@/components/Experience";
import ClaudeCompetency from "@/components/ClaudeCompetency";
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
            className="h-[150px] w-[120px] rounded-card object-cover sm:h-[275px] sm:w-[220px]"
            priority
          />
          <div className="flex flex-col gap-5 lg:absolute lg:top-8 lg:right-12 lg:w-full lg:max-w-lg">
            <div className="order-1">
              <IdCard />
            </div>
            <div className="order-2 lg:order-3">
              <AboutBlurb />
            </div>
            <div className="order-3 lg:order-2">
              <ActivityGraph />
            </div>
          </div>
        </div>
      </div>
      <Hero />
      <Experience />
      <ClaudeCompetency />
      <ClaudeSkills />
      <Projects />
      <Footer />
    </>
  );
}
