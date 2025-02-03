import { useState, useEffect } from "react";
import { useRouter } from "next/router"; 

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Workshops", href: "#workshops" },
  { name: "Mentors", href: "#mentors" },
  { name: "Agenda", href: "#agenda" },
  { name: "FAQ", href: "#faq" },
];

export default function NavBar() {
  const router = useRouter(); 
  const [activeLink, setActiveLink] = useState("home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = navLinks
        .map((link) => document.querySelector(link.href))
        .filter(Boolean);

      const currentSection = sections.find((section) => {
        const rect = section.getBoundingClientRect();
        return rect.top <= 150 && rect.bottom >= 150;
      });

      if (currentSection) {
        const currentId = currentSection.id;
        const matchingLink = navLinks.find(
          (link) => `#${currentId}` === link.href
        );
        if (matchingLink) {
          setActiveLink(matchingLink.name);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); 
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = (name, href) => {
    setActiveLink(name);
    const targetElement = document.querySelector(href);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setIsMenuOpen(false);
  };

  const isActive = (name) => {
    return activeLink === name
      ? "text-Primary-300 underline underline-offset-8"
      : "hover:text-Primary-300 focus:text-Primary-700";
  };

  const navigateToRegistrationForm = () => {
    router.push("/registrationForm"); 
  };

  return (
    <nav className="top-0 z-10 sticky text-white  font-bold">
      <div className="flex justify-between items-center bg-background-Dark md:bg-transparent px-8 h-20">
        <div className="flex items-center">
          <img
            src="/images/navbar/logo.png"
            alt="Logo"
            className="w-12 h-12 object-cover"
          />
        </div>

        <div className="md:flex sm:gap-2 lg:gap-8 space-x-8 hidden text-center text-sm">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => handleClick(link.name, link.href)}
              className={isActive(link.name)}
            >
              {link.name}
            </button>
          ))}
        </div>

        <div className="flex items-center space-x-4">
          <button
            onClick={navigateToRegistrationForm}
            className="md:block hidden bg-Primary-500 active:bg-Primary-800 hover:shadow-[0px_0px_16px_3px_rgba(34,211,238,0.3)] px-4 py-2 rounded-lg w-40 text-Neutral-950 transition hover:-translate-x-[2px] hover:-translate-y-[2px] duration-300"
          >
            Register
          </button>

          <button
            className="md:hidden text-gray-800 focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <img
                src="/images/navbar/close.png"
                className="w-12"
                alt="close"
              />
            ) : (
              <img src="/images/navbar/menu.png" className="w-12" alt="menu" />
            )}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="right-0 absolute flex-center md:hidden bg-background-Dark w-44 h-[calc(100vh-80px)]">
          <div className="flex flex-col gap-10 space-y-4 px-10 pt-6 text-center text-white">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => handleClick(link.name, link.href)}
                className={isActive(link.name)}
              >
                {link.name}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
