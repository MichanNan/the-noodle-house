import React from "react";

const Header = () => {
  return (
    <div className="w-full flex justify-evenly align-middle items-center">
      <div className="text-3xl  text-green-800 font-bold">The Noodle House</div>
      <div className="flex text-xl gap-5 items-center text-green-800 font-bold">
        <p>Our Story</p>
        <p>Menü</p>
        <p>Event</p>
        <p>Kontakt</p>
      </div>
    </div>
  );
};

export default Header;
