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
            &quot;Dao-Xiao&quot; bedeutet wörtlich &quot;mit dem Messer
            geschabte &quot; Nudeln. Diese Nudeln sind besonders für ihre
            einzigartige Herstellungsweise und ihren kräftigen Geschmack
            bekannt. Dadurch entstehen gleichmäßige, leicht gekräuselte Nudeln
            mit einer festen und dennoch zarten Textur.
          </p>{" "}
          <Image
            src="/daoxiao.gif"
            width={500}
            height={500}
            alt="logo"
            className="mt-10"
          />
        </div>
      </div>
    </section>
  );
};

export default Spacial;
