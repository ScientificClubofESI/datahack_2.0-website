import { useState, useEffect } from "react";
import FormController from "../registrationForm";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Workshops", href: "#workshops" },
  { name: "Mentors", href: "#mentors" },
  { name: "Agenda", href: "#agenda" },
  { name: "FAQ", href: "#faq" },
];

const RegistrationModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;
  return <FormController onClose={onClose} />;
};

export default function NavBar() {
  const [activeLink, setActiveLink] = useState("Home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isRegistrationModalOpen, setIsRegistrationModalOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  const openRegistrationModal = () => {
    setIsRegistrationModalOpen(true);
  };

  const closeRegistrationModal = () => {
    setIsRegistrationModalOpen(false);
  };

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Update active link and scroll progress on scroll
  useEffect(() => {
    const handleScroll = () => {
      // Update active link
      const sections = navLinks.map((link) => document.getElementById(link.href.substring(1)));
      const scrollPosition = window.scrollY + 100;

      sections.forEach((section, index) => {
        if (
          section.offsetTop <= scrollPosition &&
          section.offsetTop + section.offsetHeight > scrollPosition
        ) {
          setActiveLink(navLinks[index].name);
        }
      });

      // Update scroll progress
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Navbar */}
      <nav className="top-0 z-50 fixed w-full text-white font-bold backdrop-blur-md bg-gradient-to-r from-background-Dark/80 to-background-Dark/50 border-b border-gray-700 shadow-lg">
        <div className="flex justify-between items-center px-6 lg:px-20 py-4">
          {/* Logo */}
          <div className="flex items-center">
            <img
              src="/images/navbar/logo.png"
              alt="Logo"
              className="w-12 h-12 object-cover hover:scale-110 transition-transform duration-300"
            />
          </div>

          {/* Navigation Links (Desktop) */}
          <div className="lg:flex sm:gap-2 lg:gap-8 hidden text-center text-sm">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(link.href.substring(1));
                  setActiveLink(link.name);
                }}
                className={
                  activeLink === link.name
                    ? "text-Primary-300 font-bold underline underline-offset-8 px-2"
                    : "hover:text-Primary-300 transition-all duration-300 px-2"
                }
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Right Side Buttons */}
          <div className="flex items-center space-x-4">
            {/* Register Button */}
            <button
              onClick={openRegistrationModal}
              className="lg:block hidden bg-Primary-500 active:bg-Primary-800 hover:shadow-[0px_0px_16px_3px_rgba(34,211,238,0.3)] px-4 py-2 rounded-lg w-40 text-Neutral-950 transition hover:-translate-x-[2px] hover:-translate-y-[2px] duration-300"
            >
              Register
            </button>

            {/* Mobile Menu Button */}
            <button
              aria-label="Toggle menu"
              className="lg:hidden text-gray-800 focus:outline-none"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <img src="/images/navbar/close.png" className="w-12" alt="close" />
              ) : (
                <img src="/images/navbar/menu.png" className="w-12" alt="menu" />
              )}
            </button>

            {/* Registration Modal */}
          </div>
        </div>


        {/* Scroll Progress Bar */}
        <div className="absolute bottom-0 left-0 h-1 bg-Primary-300" style={{ width: `${scrollProgress}%` }}></div>

        {/* Mobile Menu (Dropdown) */}
        {isMenuOpen && (
          <div className="lg:hidden fixed top-20 left-0 w-full bg-black/95 text-white py-4 transform transition-transform duration-300 ease-in-out">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(link.href.substring(1));
                  setActiveLink(link.name);
                  setIsMenuOpen(false);
                }}
                className="block py-2 px-6 hover:bg-gray-800 transition-all duration-300"
              >
                {link.name}
              </a>
            ))}
          </div>
        )}
      </nav>
      <RegistrationModal isOpen={isRegistrationModalOpen} onClose={closeRegistrationModal} />

    </>
  );
}