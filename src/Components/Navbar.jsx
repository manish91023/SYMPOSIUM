import { useState } from "react";
import { Menu, X } from "lucide-react"; // Icons for hamburger menu
import Announcement from "./Announcement";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <div className="fixed top-0 left-0 mb-8 w-full bg-emerald-50 text-black shadow-md z-50">
      <div className="container mx-auto flex justify-between items-center p-4">
        <img className=" w-[250px] h-[70px]" src="/vmccavit.webp" alt="" />

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6">
          <NavItem to="/" text="Home" />
          <NavItem to="/about" text="About" />
          <NavItem to="/contacts" text="Contact" />
        </ul>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={toggleMenu}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-gray-900 p-4 space-y-4">
          <NavItem to="/" text="Home" onClick={toggleMenu} />
          <NavItem to="/about" text="About" onClick={toggleMenu} />
          <NavItem to="/contacts" text="Contact" onClick={toggleMenu} />
        </div>
      )}
      <Announcement/>
    </div>
  );
};

const NavItem = ({ to, text, onClick }) => (
  <a
    href={`${to}`}
    className="block text-lg font-bold bg-black rounded-full text-white pr-10 pl-10 pt-3 pb-3 hover:bg-violet-500 hover:text-blue-400 transition cursor-pointer"
    onClick={onClick}
  >
    {text}
  </a>
);

export default Navbar;
