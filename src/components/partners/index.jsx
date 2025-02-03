import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { Hubot_Sans } from "next/font/google";

const hubotSans = Hubot_Sans({
  subsets: ["latin"],
  weight: ["600"],
});

import logoEsi from "./images/Logo Esi.svg";
import location from "./images/location.svg";

const Partners = () => {
  const [borderColor, setBorderColor] = useState("border-l-Primary-600");
  const sectionRef = useRef(null);

  const checkScrollPosition = () => {
    if (!sectionRef.current) return;
    
    const rect = sectionRef.current.getBoundingClientRect();
    const viewportHeight = window.innerHeight;
    
    const scrollProgress = (viewportHeight - rect.top) / viewportHeight;
    
    if (rect.top < viewportHeight && scrollProgress >= 0.55) {
      setBorderColor("border-l-Primary-900");
    } else {
      setBorderColor("border-l-Primary-600");
    }
  };

  useEffect(() => {

    checkScrollPosition();
    
    window.addEventListener("scroll", checkScrollPosition);
    
    return () => {
      window.removeEventListener("scroll", checkScrollPosition);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="text-Monotone-White flex flex-col gap-[40px] pt-[80px] pb-[160px] pr-[120px] pl-[120px]"
    >
      <div className="flex justify-center">
        <h2 className={`${hubotSans.className} text-[48px] font-[600]`}>
          Our Partners
        </h2>
      </div>
      <div className="flex pl-[5%] gap-[10%]">
        <Image src={logoEsi} alt="ESI logo" />
        <div
          className={`flex flex-col items-start gap-[32px] ${borderColor} border-l-[4px] pt-[24px] pr-[64px] pb-[24px] pl-[64px] min-w-[100px] transition-colors duration-300`}
          style={{
            background:
              "linear-gradient(270deg, rgba(1, 13, 26, 0) -0.97%, rgba(3, 52, 102, 0.16) 100%)",
          }}
        >
          <p>Ecole Nationale Supérieure d&#39;Informatique</p>
          <div className="flex items-center gap-[8px]">
            <Image src={location} alt="Location icon" />
            <p>Oued Smar, Algiers</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partners;