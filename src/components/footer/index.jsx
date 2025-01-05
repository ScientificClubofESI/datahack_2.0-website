import React from 'react';
import Image from "next/image";
import CSElogo from "../../../public/images/CSElogo.svg";
import Facebook from "../../../public/images/facebook.svg";
import Twitter from "../../../public/images/twitter.svg";
import Instagram from "../../../public/images/instagram.svg";
import Linkedin from "../../../public/images/linkedin.svg";
import Youtube from "../../../public/images/youtube.svg";
import Datahack from "../../../public/images/Logo - Datahack.svg";
import Assets from "../../../public/images/Assets.svg";
import Assets1 from "../../../public/images/Assets1.svg";
import Assets2 from "../../../public/images/Assets2.svg";

const Cseanddatahacklogo = () => {
  return (
    <div className="flex space-x-[7rem] md:space-x-12 justify-center">
      <Image src={CSElogo} alt="CSE Logo" width={160} height={160} />
      <Image src={Datahack} alt="Datahack Logo" width={160} height={160} />
    </div>
  );
};

const Footer = () => {
  return (
    <footer className="bg-background-Dark text-white py-8 relative bg-cover bg-no-repeat opacity-100">
      {/* Background Images */}
      <div className="absolute inset-0 z-0">
        {/* Background Image for Assets */}
        <div
          className="hidden sm:block absolute inset-0 opacity-20"
          style={{
            backgroundImage: `url(${Assets.src})`,
            backgroundSize: 'cover', // Default cover for larger screens
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center 60%',
          }}
        />
        {/* For mobile: Override background size */}
        <div
          className="md:block absolute inset-0 opacity-20"
          style={{
            backgroundImage: `url(${Assets.src})`,
            backgroundSize: '150%', // Apply for smaller screens
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center -25%',
          }}
        />
        {/* Background Images for Assets1 and Assets2 */}
        <div
          className="absolute inset-0 bg-cover opacity-40 md:bg-[left_5%_top_25%]"
          style={{
            backgroundImage: `url(${Assets1.src})`,
            backgroundSize: '4%',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'left 5% top 29%',
          }}
        />
        <div
          className="absolute inset-0 bg-cover opacity-50 md:bg-[right_6%_top_8%]"
          style={{
            backgroundImage: `url(${Assets2.src})`,
            backgroundSize: '4%',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'right 6% top 8%',
          }}
        />
      </div>

      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center mt-16 md:mt-32 z-10 relative px-4 md:px-0">
        {/* Logos */}
        <div className="mb-8 text-center md:mb-2 md:text-left md:ml-[7rem]">
          <Cseanddatahacklogo />
        </div>

        <div className="backdrop-blur-sm sm:h-[9.2rem] md:h-[12rem] md:ml-[4rem]">
          {/* Contact Section */}
          <div className="flex flex-col md:flex-row items-start md:items-start mr-[12rem] md:mr-[0rem] md:ml-[35rem] mb-8 md:mb-0 relative">
            {/* Wrapper for the line and text */}
            <div className="flex items-start md:items-center">
              {/* Vertical Line for Mobile */}
              <div className="block md:hidden border-l-[3px] border-Primary-500 h-[9.2rem] mr-3"></div>
              
              {/* Text Section */}
              <div className="font-semibold text-Monotone-white text-left md:text-right">
                <p className="text-lg md:text-2xl md:text-2xl mb-5">Still Have Questions About</p>
                <p className="text-lg md:text-3xl mb-5 font-extrabold md:font-semibold">Contact Us</p>
                <p className="text-xs md:text-sm mb-2 font-normal md:font-semibold">
                  By email <a href="mailto:cse@esi.dz">cse@esi.dz</a>
                </p>
                <p className="text-xs md:text-sm font-normal md:font-semibold">Or on social media</p>
              </div>
            </div>

            {/* Vertical Line for Desktop */}
            <div className="hidden md:block border-l-[3px] border-Primary-500 h-[12rem] ml-[1rem]"></div>
          </div>
        </div>

        {/* Social Media Links */}
        <div className="flex flex-col items-center space-y-4 md:items-start md:flex-row md:space-x-8 md:mr-[5rem]">
          {/* Social Media Icons */}
          <div className="flex space-x-12 md:space-x-0 md:flex-col md:space-y-[0.83rem]">
            <a href="https://www.facebook.com/club.scientifique.esi" target="_blank" rel="noopener noreferrer">
              <Image src={Facebook} alt="Facebook" width={28} height={28} />
            </a>
            <a href="https://twitter.com/csesi_club" target="_blank" rel="noopener noreferrer">
              <Image src={Twitter} alt="Twitter" width={28} height={28} />
            </a>
            <a href="https://www.instagram.com/cse.club" target="_blank" rel="noopener noreferrer">
              <Image src={Instagram} alt="Instagram" width={28} height={28} />
            </a>
            <a href="https://dz.linkedin.com/company/cse-club" target="_blank" rel="noopener noreferrer">
              <Image src={Linkedin} alt="LinkedIn" width={28} height={28} />
            </a>
            <a href="https://www.youtube.com/@ClubScientifiqueESI-CSE" target="_blank" rel="noopener noreferrer">
              <Image src={Youtube} alt="YouTube" width={28} height={28} />
            </a>
          </div>
        </div>
      </div>

      {/* Footer Bottom Text */}
      <div className="mt-4 text-center text-xs md:text-base font-medium text-Neutral-300">
        Copyright © 2025 Club Scientifique de l'ESI. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
