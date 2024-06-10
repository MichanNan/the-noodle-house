import Image from "next/image";
import React from "react";

const Spacial = () => {
  return (
    <section id="billboard" className="relative mt-[100px]  z-10 scroll-mt-16">
      <div className="flex flex-col items-center justify-start w-3/4 mx-auto">
        <p className="font-bold text-2xl self-start text-green-800">
          Our Specialty
        </p>{" "}
        <div className="flex flex-col md:flex-row gap-10 items-center mt-5">
          <Image src="/刀削面.png" width={200} height={200} alt="dao-xiao" />
          <p className="text-3xl font-bold text-green-800">Dao-Xiao Nudeln</p>
        </div>
        <div className="flex flex-col justify-center xl:flex-row xl:justify-between  items-center xl:gap-12 xl:mt-10">
          <p className="md:text-xl text-green-800 mt-6 m-4 text-left">
            Dao-Xiao Nudeln, auch bekannt als handgeschabte, stammen aus der
            chinesischen Küche, insbesondere aus der Shanxi-Provinz. Der Name
            "Dao-Xiao" bedeutet wörtlich "mit dem Messer geschabte" Nudeln.
            Diese Nudeln sind besonders für ihre einzigartige Herstellungsweise
            und ihren kräftigen Geschmack bekannt. Dadurch entstehen
            gleichmäßige, leicht gekräuselte Nudeln mit einer festen und dennoch
            zarten Textur. Dao-Xiao noodles, also known as hand-shaved,
            originate from Chinese cuisine, particularly from the Shanxi
            Province. The name "Dao-Xiao" literally means "knife-shaved"
            noodles. These noodles are renowned for their unique method of
            preparation and robust flavor. This results in uniform, lightly
            curled noodles with a firm yet delicate texture.
          </p>{" "}
          <Image
            src="/刀削面海报.png"
            width={400}
            height={400}
            alt="logo"
            className="mt-10"
          />
        </div>
      </div>
    </section>
  );
};

export default Spacial;
