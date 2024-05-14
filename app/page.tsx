import Header from "@/components/Header";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex  flex-col items-center justify-between mt-10">
      <Header />
      <Image
        src="/logo.png"
        width={500}
        height={500}
        alt="logo"
        className="animate-spin-slow mt-10"
      />
      <p className="text-xl text-green-800 mt-10">
        Bald können wir Ihnen köstliche chinesische Nudeln anbieten. Wir freuen
        uns auf Ihren Besuch.
      </p>
    </main>
  );
}
