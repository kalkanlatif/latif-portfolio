import Image from "next/image";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import ActivityGraph from "@/components/ActivityGraph";
import AboutBlurb from "@/components/AboutBlurb";
import IdCard from "@/components/IdCard";
import AusbildungBanner from "@/components/AusbildungBanner";
import Experience from "@/components/Experience";
import ClaudeCompetency from "@/components/ClaudeCompetency";
import ClaudeSkills from "@/components/ClaudeSkills";
import Projects from "@/components/Projects";
import LanguagesCertificates from "@/components/LanguagesCertificates";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <div className="px-5 pt-8 sm:px-8 lg:px-12">
        <div className="flex flex-col gap-6 lg:grid lg:grid-cols-[1fr_auto] lg:items-start lg:gap-x-12 lg:gap-y-6">
          <Image
            src="/cover.png"
            alt="Latif Kalkan"
            width={220}
            height={275}
            className="h-[150px] w-[120px] rounded-card object-cover sm:h-[275px] sm:w-[220px] lg:col-start-1 lg:row-start-1"
            priority
          />
          <div className="flex flex-col gap-5 lg:col-start-2 lg:row-start-1 lg:row-span-2 lg:max-w-lg">
            <div className="order-1">
              <AusbildungBanner />
            </div>
            <div className="order-2">
              <IdCard />
            </div>
            <div className="order-3 lg:order-4">
              <AboutBlurb />
            </div>
            <div className="order-4 lg:order-3">
              <ActivityGraph />
            </div>
          </div>
          <div className="lg:col-start-1 lg:row-start-2">
            <Hero />
          </div>
        </div>
      </div>
      <Experience />
      <ClaudeCompetency />
      <ClaudeSkills />
      <Projects />
      <LanguagesCertificates />
      <Footer />
    </>
  );
}
