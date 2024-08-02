import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaSquareInstagram } from "react-icons/fa6";

const Billboard = () => {
  return (
    <section
      id="billboard"
      className="relative mt-[140px]  z-10 scroll-mt-[140px] md:scroll-mt-16"
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
          <div className="flex flex-col justify-center items-center gap-10 ">
            <div className="flex flex-col items-start justify-start gap-4">
              <p className="md:text-xl text-green-800 mt-6 m-4 text-left">
                Nudeln haben in China eine lange Geschichte, und jede Region hat
                ihre eigenen charakteristischen Nudelgerichte. Unser Restaurant
                konzentriert sich darauf, die beliebtesten, bissfesten Nudeln
                aus dem Norden Chinas anzubieten, ergänzt durch eine Vielzahl
                von Toppings und eine köstliche Brühe, die stundenlang aus
                Knochen gekocht wird. Unsere Nudeln sind aromatisch und lecker,
                ohne den Zusatz von Glutamat. Außerdem bieten wir eine Auswahl
                an Pilzbrühe für Vegetarier an, um unterschiedliche
                Geschmacksrichtungen zu befriedigen. Wir laden Sie herzlich ein,
                die echten chinesischen Nudeln zu probieren.
              </p>
              <div className="ml-4 flex justify-center items-center gap-4 text-green-800">
                {" "}
                <Link href="https://www.instagram.com/thenoodlehouse_hh/">
                  <FaSquareInstagram color="gray" size={30} />
                </Link>
                <p>Folgen Sie uns auf Instagram</p>
              </div>{" "}
            </div>
            <Link
              href="https://thenoodlehouse.online-karte.com/"
              className="bg-green-800 text-white p-4 rounded-xl text-2xl hover:bg-green-500 transition"
            >
              Bestellen Online
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Billboard;
