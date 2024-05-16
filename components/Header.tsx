import React from "react";

const Header = () => {
  return (
    <div className="w-full flex flex-col justify-evenly items-center md:flex-row mt-5 md:mt-10">
      <div className="text-2xl md:text-3xl  text-green-800 font-bold">
        The Noodle House
      </div>
      <div className="flex justify-center text-lg md:text-xl gap-5 items-center text-green-800 font-bold">
        <p>Our Story</p>
        <p>Menü</p>
        <p>Event</p>
        <p>Kontakt</p>
      </div>
    </div>
  );
};

export default Header;
