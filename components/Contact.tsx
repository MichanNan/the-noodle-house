import Image from "next/image";
import React from "react";

const Contact = () => {
  return (
    <section id="contact" className="relative mt-6 xl:mt-[80px]  z-10 w-3/4">
      <div className="flex flex-col  justify-start  mx-auto ">
        <p className="font-bold text-2xl self-start mb-2 text-green-800 xl:mb-6">
          Contact
        </p>
        <div className="flex flex-col xl:flex-row justify-evenly items-center gap-5">
          <div className="flex flex-col  text-xl text-green-800 gap-2 font-bold ">
            <p>Kontakt:</p>
            <p>Iffland Str. 92</p>
            <p>22087 Hamburg</p>
            <p>Tel:+49 40 22759255</p>
            <p>Email:Info@the-noodle-house.de</p>
            <p className="mt-4">Open:</p>
            <p>Di-Mi 17:00-21:00</p>
            <p>Do-Fr 12:00-15:00 17:00-21:00</p>
            <p>Sa-So 12:00-21:00</p>
            <p>Mo geschlossen</p>
          </div>
          <div className="flex flex-col">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2369.6735615648386!2d10.021485277113849!3d53.56359455844577!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47b18f662626a9a1%3A0x8bcc10eae9105c54!2sThe%20noodle%20house!5e0!3m2!1szh-CN!2sde!4v1717449839909!5m2!1szh-CN!2sde"
              width="300"
              height="300"
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
