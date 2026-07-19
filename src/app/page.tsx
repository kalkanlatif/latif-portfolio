import Image from "next/image";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import NavCards from "@/components/NavCards";

export default function Home() {
  return (
    <>
      <Nav />
      <div className="px-12 pt-8">
        <Image
          src="/cover.png"
          alt="Latif Kalkan"
          width={220}
          height={275}
          className="rounded-card object-cover"
          priority
        />
      </div>
      <Hero />
      <NavCards />
    </>
  );
}
