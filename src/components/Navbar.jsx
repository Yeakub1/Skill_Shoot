import { useState } from "react";
import Headroom from "react-headroom";
import { MdWindow } from "react-icons/md";
import { VscChromeClose } from "react-icons/vsc";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Course", href: "#course" },
    { name: "Subscribe", href: "#subscribe" },
    { name: "About", href: "#about" },
    { name: "Testimoni", href: "#testimoni" },
  ];

  return (
    <Headroom>
      <div className="relative bg-[#245D51] text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center py-6">
            <div className="flex items-center">
              <a href="/" className="text-2xl font-bold">
                Skill <span className="text-[#CB8461]">Shoot</span>
              </a>
            </div>
            <div className="hidden md:block">
              <nav className="flex space-x-4">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className="text-sm font-medium"
                  >
                    {link.name}
                  </a>
                ))}
              </nav>
            </div>
            <div className="hidden md:block">
              <nav className="flex space-x-4 items-center">
                <a href="#" className="text-sm font-medium">
                  Login
                </a>
                <button className="text-sm font-medium bg-[#CB8461] text-white py-2 px-6 rounded-md">
                  Register
                </button>
              </nav>
            </div>
            <div className="md:hidden">
              <button onClick={toggleNavbar} className="text-3xl">
                {isOpen ? <VscChromeClose /> : <MdWindow />}
              </button>
            </div>
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-[#245D51] shadow-md">
            <nav className="flex flex-col space-y-4 p-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-sm font-medium"
                >
                  {link.name}
                </a>
              ))}
              <a href="#" className="text-sm font-medium">
                Login
              </a>
              <button className="text-sm font-medium bg-[#CB8461] text-white py-2 px-6 rounded-md w-full">
                Register
              </button>
            </nav>
          </div>
        )}
      </div>
    </Headroom>
  );
}
