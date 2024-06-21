import Billboard from "@/components/Billboard";
import Contact from "@/components/Contact";
import Events from "@/components/Event";
import Header from "@/components/Header";
import Impressum from "@/components/Impressum";
import Menu from "@/components/Menu";
import Special from "@/components/Special";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center w-full pb-12">
      <Header />
      <Billboard />
      <Special />
      <Menu />
      <Events />
      <Contact />
      <Impressum />
    </main>
  );
}
