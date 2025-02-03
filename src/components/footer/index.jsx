import React from 'react';
import Image from "next/image";
import { Facebook, Instagram, Youtube } from 'iconsax-react';
import CSElogo from "../../../public/images/CSElogo.svg";
import Datahack from "../../../public/images/Logo-Datahack.svg";
import Twiter from "../../../public/images/footer/twitter.svg";
import Linkedin from "../../../public/images/footer/linkedin.svg";

const Footer = () => {
  return (
    <footer className="relative  flex flex-col items-center py-6 pt-40 gap-20">
      <div className="flex flex-col lg:flex-row justify-center items-center gap-8 lg:gap-20 w-full px-6 lg:px-24">
        {/* Logos */}
        <div className="flex justify-between items-center flex-grow lg:gap-16 lg:flex-grow-0 w-full max-w-80 lg:w-fit lg:max-w-full">
          <Image
            src={CSElogo}
            alt="CSE Logo"
            className="w-32 h-32 lg:w-40 lg:h-40"
          />
          <Image
            src={Datahack}
            alt="Datahack Logo"
            className="w-32 h-32 lg:w-40 lg:h-40"
          />
        </div>

        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 flex-grow w-full max-w-80 lg:w-fit lg:max-w-full">
          {/* Contact Section */}
          <div className="flex flex-col items-start lg:items-end justify-center py-4 gap-2 lg:gap-6 pl-6 lg:pr-10 lg:pl-0 border-l-2 lg:border-l-0 lg:border-r-4 bg-gradient-to-l lg:bg-gradient-to-r from-transparent to-[#03346620] border-Primary-500 backdrop-blur-md text-Monotone-White flex-grow w-full">
            <p className="text-lg lg:text-2xl font-medium font-hubotSans">
              Still Have Questions About
            </p>
            <p className="text-lg lg:text-3xl font-medium font-hubotSans">
              Contact Us
            </p>
            <div className="flex flex-col justify-between items-start lg:items-end gap-1 lg:gap-2">
              <p className="text-xs lg:text-sm font-normal font-aspekta">
                <a
                  href="mailto:cse@esi.dz"
                  aria-label="Send an email to cse@esi.dz">
                  By email cse@esi.dz
                </a>
              </p>
              <p className="text-xs lg:text-sm font-normal font-aspekta">
                Or on social media
              </p>
            </div>
          </div>

          {/* Social Media Links */}
          <div className="flex flex-row lg:flex-col items-center justify-between gap-[15px] flex-grow w-full max-w-64 lg:w-fit">
            <a
              href="https://www.facebook.com/club.scientifique.esi"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Facebook size="24" className="lg:w-7 lg:h-7" color="#D9F8FF" variant="Bold" />
            </a>
            <a
              href="https://www.instagram.com/cse.club"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Instagram size="24" className="lg:w-7 lg:h-7" color="#D9F8FF" variant="Bold" />
            </a>
            <a
              href="https://dz.linkedin.com/company/cse-club"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image src={Linkedin} alt="Linkedin" className="w-6 h-6 lg:w-7 lg:h-7" />
            </a>
            <a
              href="https://www.youtube.com/@ClubScientifiqueESI-CSE"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Youtube size="24" className="lg:w-7 lg:h-7" color="#D9F8FF" variant="Bold" />
            </a>
            <a
              href="https://twitter.com/csesi_club"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image src={Twiter} alt="Twiter" className="w-6 h-6 lg:w-7 lg:h-7" />
            </a>
          </div>
        </div>
      </div>

      {/* Footer Bottom Text */}
      <div className="text-xs lg:text-base text-neutral-300 font-aspekta font-light">
        Copyright © 2025 Club Scientifique de l'ESI. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;