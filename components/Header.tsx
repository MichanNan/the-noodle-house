import Link from "next/link";
import React from "react";

const Header = () => {
  const links = [
    { name: "Our Story", link: "billboard" },
    { name: "Our Special", link: "special" },
    { name: "Menu", link: "menu" },
    { name: "Events", link: "events" },
    { name: "Contact", link: "contact" },
  ];
  return (
    <div className="fixed top-0 w-full flex flex-col justify-evenly items-center md:flex-row py-3 bg-white opacity-[80%] z-50">
      <div className="text-2xl md:text-3xl  text-green-800 font-bold">
        The Noodle House
      </div>
      <div className="flex justify-center text-lg md:text-xl gap-2 md:gap-6 flex-wrap items-center text-green-800 font-bold">
        {links.map((link) => (
          <Link
            key={link.name}
            href={`#${link.link}`}
            className="hover:text-green-600"
          >
            {link.name}
          </Link>
        ))}
        <Link
          href="https://eat.allo.restaurant/restaurant/the-noodle-house"
          className="bg-green-800 text-white p-2 rounded-xl  hover:bg-green-500"
        >
          Bestellen Online
        </Link>
      </div>
    </div>
  );
};

export default Header;
