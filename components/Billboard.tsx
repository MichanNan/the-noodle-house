import Image from "next/image";
import React from "react";

const Billboard = () => {
  return (
    <section id="billboard" className="relative flex flex-col items-center">
      {/* <Image
        src="/一碗面.png"
        width={100}
        height={100}
        alt="noodle"
        className="absolute top-5 -left-20 rotate-[10deg] opacity-70"
      />
      <Image
        src="/小麦.png"
        width={50}
        height={50}
        alt="noodle"
        className="absolute bottom-5 -left-2 rotate-12 opacity-70"
      />
      <Image
        src="/小麦.png"
        width={50}
        height={50}
        alt="noodle"
        className="absolute bottom-6 -left-5 rotate-[-10deg] opacity-70"
      />

      <Image
        src="/洋葱.png"
        width={120}
        height={120}
        alt="noodle"
        className="absolute top-[200px] -right-[150px] rotate-20 opacity-70"
      />
      <Image
        src="/胡萝卜.png"
        width={80}
        height={80}
        alt="noodle"
        className="absolute bottom-[90px] -left-20 rotate-[15deg] opacity-70"
  />*/}
      <Image
        src="/logo.png"
        width={300}
        height={300}
        alt="logo"
        className="animate-spin-slow mt-10"
      />
      <p className="text-md md:ext-xl text-green-800 mt-6 m-4 ">
        Bald können wir Ihnen köstliche chinesische Nudeln anbieten. Wir freuen
        uns auf Ihren Besuch.
      </p>
    </section>
  );
};

export default Billboard;
