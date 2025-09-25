"use client";

import Image from "next/image";
import React from "react";

const Events = () => {
  return (
    <section
      id="events"
      className="relative mt-6 xl:mt-[80px]  z-10 w-3/4 scroll-mt-[140px] md:scroll-mt-16"
    >
      <div className="flex flex-col items-center justify-start  mx-auto ">
        <p className="font-bold text-2xl self-start text-green-800 mb-2 xl:mb-6">
          Events
        </p>
        <div className="flex gap-2 flex-wrap">
          <p className="font-bold text-xl text-green-800 mb-2 xl:mb-6">
            Genuss-Guide Hamburg Empfehlung
          </p>
          <Image
            src="/hamburg.jpg"
            width={1500}
            height={300}
            alt="logo"
            quality={100}
          />
        </div>
      </div>
    </section>
  );
};

export default Events;
