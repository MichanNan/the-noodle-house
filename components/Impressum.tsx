import Link from "next/link";
import React from "react";

const Impressum = () => {
  return (
    <section
      id="special"
      className="relative mt-6 xl:mt-[80px] z-10 scroll-mt-20 md:scroll-mt-16 "
    >
      <div className="flex gap-4 items-center justify-start w-3/4 ">
        <Link href="/Impressum">IMPRESSUM</Link>
        <Link href="/Datenschutz">DATENSCHUTZ</Link>
      </div>
    </section>
  );
};

export default Impressum;
