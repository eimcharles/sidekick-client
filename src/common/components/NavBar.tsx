import { useState } from "react";
import Logo from "./Logo";
import NavLink from "./NavLink"

const Navbar = () => {
  
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="flex justify-between items-center px-6 py-6 bg-white relative w-full">

      {/* Logo */}
      <Logo />

      {/* Desktop Menu Navigation links*/}
      <div className="hidden lg:flex gap-8">
        <NavLink href="/home" label="Home" textSize="text-[14px]" />
        <NavLink href="/about" label="About" textSize="text-[14px]" />
        <NavLink href="/docs" label="Docs" textSize="text-[14px]" />
      </div>

      {/* Hamburger Menu*/}
      <button onClick={() => setIsOpen(!isOpen)} className="lg:hidden flex flex-col gap-1.5 z-50 p-2"> 
        <span className={`h-0.5 w-6 bg-gray-600 transition-all duration-300 ${isOpen ? "rotate-45 translate-y-2" : ""}`}/>
        <span className={`h-0.5 w-6 bg-gray-600 transition-all duration-300 ${isOpen ? "opacity-0" : ""}`}/>
        <span className={`h-0.5 w-6 bg-gray-600 transition-all duration-300 ${isOpen ? "-rotate-45 -translate-y-2" : ""}`}/>
      </button>

      {/* Mobile Menu Navigation Links*/}
      <div className={`fixed inset-0 bg-white z-40 flex flex-col items-center justify-center gap-8 transition-transform duration-300 lg:hidden 
        ${isOpen ? "translate-x-0" : "translate-x-full"}`}>
        <NavLink href="/home" label="Home" textSize="text-[20px]" />
        <NavLink href="/about" label="About" textSize="text-[20px]" />
        <NavLink href="/docs" label="Docs" textSize="text-[20px]" />
      </div>
    </nav>
  );
};

export default Navbar;