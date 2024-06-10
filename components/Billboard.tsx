import Image from "next/image";
import React from "react";

const Billboard = () => {
  return (
    <section
      id="billboard"
      className="relative mt-[100px]  z-10 scroll-mt-20 md:scroll-mt-16"
    >
      <div className="flex flex-col items-center justify-start w-3/4 mx-auto">
        <p className="font-bold text-2xl self-start text-green-800">
          Our Story
        </p>
        <div className="flex flex-col justify-center xl:flex-row xl:justify-between  items-center xl:gap-12 xl:mt-10">
          <Image
            src="/logo.png"
            width={400}
            height={400}
            alt="logo"
            className="mt-10"
          />
          <p className="md:text-xl text-green-800 mt-6 m-4 text-left">
            Nudeln haben in China eine lange Geschichte, und jede Region hat
            ihre eigenen charakteristischen Nudelgerichte. Unser Restaurant
            konzentriert sich darauf, die beliebtesten, bissfesten Nudeln aus
            dem Norden Chinas anzubieten, ergänzt durch eine Vielzahl von
            Toppings und eine köstliche Brühe, die stundenlang aus Knochen
            gekocht wird. Unsere Nudeln sind aromatisch und lecker, ohne den
            Zusatz von Glutamat. Außerdem bieten wir eine Auswahl an Pilzbrühe
            für Vegetarier an, um unterschiedliche Geschmacksrichtungen zu
            befriedigen. Wir laden Sie herzlich ein, die echten chinesischen
            Nudeln zu probieren.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Billboard;
