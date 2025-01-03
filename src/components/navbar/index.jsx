import { useState } from "react";
const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Workshops", href: "#workshops" },
  { name: "Mentors", href: "#mentors" },
  { name: "Agenda", href: "#agenda" },
  { name: "FAQ", href: "#faq" },
];

export default function NavBar() {
  const [activeLink, setActiveLink] = useState("Home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <nav className="top-0 z-10 sticky text-white">
      <div className="flex justify-between items-center bg-background-Dark sm:bg-transparent px-8 h-20">
        {/* Logo */}
        <div className="flex items-center">
          <img
            src="/images/navbar/logo.png"
            alt="Logo"
            className="w-12 h-12 object-cover"
          />
        </div>

        {/* Center Links (Hidden on Small Screens) */}
        <div className="md:flex md:gap-2 lg:gap-8 space-x-8 hidden text-center text-sm">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setActiveLink(link.name)}
              className={`${
                activeLink === link.name
                  ? "text-Primary-300 underline underline-offset-8 outline-8"
                  : "hover:text-Primary-300 focus:text-Primary-700"
              }`}
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Register Button */}
        <div className="flex items-center space-x-4">
          <button className="md:block hidden bg-Primary-500 active:bg-Primary-800 hover:shadow-[0px_0px_16px_3px_rgba(34,211,238,0.3)] px-4 py-2 rounded-lg w-40 text-Neutral-950 transition hover:-translate-x-1 hover:-translate-y-1 duration-300"

          >
            Register
          </button>

          {/* Menu Icon (Visible on Small Screens) */}
          <button
            className="md:hidden text-gray-800 focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <img src="/images/navbar/close.png" className="w-12" alt="close" />
            ) : (
              <img src="/images/navbar/menu.png" className="w-12" alt="menu" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="right-0 absolute flex-center md:hidden bg-background-Dark w-44 h-[calc(100vh-80px)]">
          <div className="flex flex-col gap-10 space-y-4 px-10 pt-6 text-center text-white">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setActiveLink(link.name)}
                className={`${
                  activeLink === link.name
                    ? "text-Primary-300 underline underline-offset-8 outline-8"
                    : "hover:text-Primary-300 focus:text-Primary-700"
                }`}
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
