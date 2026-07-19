import Image from "next/image";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import ActivityGraph from "@/components/ActivityGraph";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <div className="flex flex-wrap items-start gap-6 px-12 pt-8">
        <Image
          src="/cover.png"
          alt="Latif Kalkan"
          width={220}
          height={275}
          className="rounded-card object-cover"
          priority
        />
        <ActivityGraph />
      </div>
      <Hero />
      <Experience />
      <Skills />
      <Projects />
      <Footer />
    </>
  );
}
