import React, { useState, useEffect } from "react";
import Image from "next/image";
import FormController from "../registrationForm";


const RegistrationModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;
  return <FormController onClose={onClose} />;
};

const HomeSection = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isRegistrationModalOpen, setIsRegistrationModalOpen] = useState(false);

  const openRegistrationModal = () => {
    setIsRegistrationModalOpen(true);
  };

  const closeRegistrationModal = () => {
    setIsRegistrationModalOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      const position = window.scrollY;
      const maxScroll = window.innerHeight / 10;
      setScrollProgress(Math.min(position / maxScroll, 1));
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const borderGradient = `rgb(${136 - scrollProgress * 50}, ${51 + scrollProgress * 100}, ${255 - scrollProgress * 50})`;

  return (
    <section className="relative  text-white min-h-screen flex items-center justify-center px-4 md:px-20 overflow-hidden">
      <div className="w-full max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Main Content */}
          <div className="w-full md:w-[800px] space-y-6 backdrop-blur-sm ">
            {/* DataHack Logo */}
            <div className="relative w-full h-36 mb-8 -ml-4">
              <Image
                src="/images/LogoDatahack.png"
                alt="Data Hack"
                fill
                className="object-contain object-center md:object-left"
                priority
              />
            </div>
            {/* Content with Gradient Border */}
            <div className="pl-4 transition-all duration-150 " style={{ borderLeft: `4px solid ${borderGradient}` }}>
              <h2 className="text-2xl font-medium mb-6 pl-14">
                <span className="bg-gradient-to-r font-hubotSans from-[#8833FF] to-[#00C2FF] bg-clip-text text-transparent">
                  // In Data We Trust
                </span>
              </h2>
              <p className="text-gray-300 mb-6 pl-14 line-clamp-2 text-base max-w-3xl text-opacity-70 ">
                  Join us in a 3-day datathon where participants build and train AI solutions to solve real-world problems using practical datasets. Compete, innovate, and win!              </p>
              <div className="space-y-2 text-gray-300 mb-6 pl-14 font-semibold">
                <p>January 14th - 16th</p>
                <p>ESI - Ecole National Supérieur d'Informatique</p>
                <p>Algiers, Oued Smar</p>
              </div>
              <button
                className="ml-14 font-semibold bg-Tritary-400 py-2 px-10 rounded transition-all duration-300 
                hover:shadow-[0_0_25px_rgba(136,232,255,0.6)] hover:transform hover:scale-105
                active:scale-95 active:shadow-[0_0_15px_rgba(136,232,255,0.4)]
                before:content-[''] before:absolute before:inset-0 before:bg-gradient-to-r 
                before:from-transparent before:to-[rgba(136,232,255,0.1)] before:opacity-0
                hover:before:opacity-100 before:transition-opacity before:duration-300
                relative overflow-hidden"
                onClick={openRegistrationModal}
              >
                Grab Your Spot!
              </button>
            </div>
          </div>
          {/* Right Logo */}
          <div className="hidden md:block relative w-[240px] h-[240px] mt-8">
            <Image
              src="/images/logo.svg"
              alt="DH Logo"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>
      </div>

      {/* Registration Modal */}
      <RegistrationModal isOpen={isRegistrationModalOpen} onClose={closeRegistrationModal} />
    </section>

  );
};

export default HomeSection;