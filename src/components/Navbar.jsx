import { useState } from "react";
import logo from "../assets/logo.webp";
import { RiCloseLine, RiMenu3Line } from "@remixicon/react";
import { LINKS } from "../constants";
const Navbar = () => {
  const [isOpen, setOpen] = useState(false);
  const toggleMenu = () => {
    setOpen(!isOpen);
  };
  return (
    <nav className="border-b border-neutral-400 p-2">
      <div className="max-w-7xl pl-4 py-4 px-4 flex justify-between items-center mx-auto">
        <div className="pl-2">
          <a href="#">
            <img src={logo} alt="logo" width={150} height={15} />
          </a>
        </div>

        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-2xl pr-2 focus:outline-none"
            aria-label={isOpen ? "Close Menu" : "Open Menu"}
          >
            {isOpen ? <RiCloseLine /> : <RiMenu3Line />}
          </button>
        </div>
        <div className="hidden md:flex space-x-8 md:space-x-4 pr-2">
          {LINKS.map((link, index) => (
            <a
              href={link.href}
              key={index}
              className="uppercase font-medium text-sm scroll-smooth cursor-pointer"
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
      <div
        className={`${
          isOpen ? "block" : "hidden"
        } md:hidden absolute mt-2 w-full bg-neutral-50 py-4 px-2 border-b-4`}
      >
        {LINKS.map((link, index) => (
          <a
            href={link.href}
            key={index}
            className="uppercase font-medium text-lg py-2 tracking-wide block scroll-smooth cursor-pointer"
          >
            {link.name}
          </a>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
