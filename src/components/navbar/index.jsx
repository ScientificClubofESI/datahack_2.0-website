import { useState } from "react";
import { useRouter } from "next/router";
import Education from "../registrationForm/education_Links/education";
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
  const [activeLink, setActiveLink] = useState("home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isRegistrationModalOpen, setIsRegistrationModalOpen] = useState(false);

  const openRegistrationModal = () => {
    setIsRegistrationModalOpen(true);
  };

  const closeRegistrationModal = () => {
    setIsRegistrationModalOpen(false);
  };

  return (
    <nav className="top-0 z-10 sticky text-white font-bold">
      <div className="flex justify-between items-center bg-background-Dark md:bg-transparent px-8 h-20">
        {/* Logo */}
        <div className="flex items-center">
          <img src="/images/navbar/logo.png" alt="Logo" className="w-12 h-12 object-cover" />
        </div>

        {/* Navigation Links (Desktop) */}
        <div className="md:flex sm:gap-2 lg:gap-8 space-x-8 hidden text-center text-sm">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => setActiveLink(link.name)}
              className={activeLink === link.name ? "text-Primary-300 underline underline-offset-8" : "hover:text-Primary-300 focus:text-Primary-700"}
            >
              {link.name}
            </button>
          ))}
        </div>

        {/* Right Side Buttons */}
        <div className="flex items-center space-x-4">
          {/* Register Button */}
          <button
            onClick={openRegistrationModal}
            className="md:block hidden bg-Primary-500 active:bg-Primary-800 hover:shadow-[0px_0px_16px_3px_rgba(34,211,238,0.3)] px-4 py-2 rounded-lg w-40 text-Neutral-950 transition hover:-translate-x-[2px] hover:-translate-y-[2px] duration-300"
          >
            Register
          </button>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-gray-800 focus:outline-none" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? (
              <img src="/images/navbar/close.png" className="w-12" alt="close" />
            ) : (
              <img src="/images/navbar/menu.png" className="w-12" alt="menu" />
            )}
          </button>

          {/* Registration Modal */}
          <RegistrationModal isOpen={isRegistrationModalOpen} onClose={closeRegistrationModal} />
        </div>
      </div>

      {/* Mobile Menu (Dropdown) */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-20 left-0 w-full bg-black text-white py-4">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => {
                setActiveLink(link.name);
                setIsMenuOpen(false);
              }}
              className="block py-2 px-6 hover:bg-gray-800"
            >
              {link.name}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
}
