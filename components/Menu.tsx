"use client";

import Image from "next/image";
import React from "react";

const Menu = () => {
  return (
    <section
      id="menu"
      className="relative mt-6 xl:mt-[80px]  z-10 w-3/4 scroll-mt-20 md:scroll-mt-16"
    >
      <div className="flex flex-col items-center justify-start mx-auto ">
        <p className="font-bold text-2xl self-start text-green-800 mb-2 xl:mb-6">
          Menu
        </p>
        <div className="flex gap-2 flex-wrap">
          <Image
            src="/1.png"
            width={700}
            height={300}
            alt="logo"
            quality={100}
          />
          <Image
            src="/2.png"
            width={700}
            height={300}
            alt="logo"
            quality={100}
          />
        </div>
      </div>
    </section>
  );
};

export default Menu;
