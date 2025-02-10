import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { Location } from "iconsax-react";
import partner1 from "../../../public/images/partners/partner_image1.png";



const Partners = () => {
  const [borderColor, setBorderColor] = useState("border-l-Primary-600");
  const sectionRef = useRef(null);

  const checkScrollPosition = () => {
    if (!sectionRef.current) return;

    const rect = sectionRef.current.getBoundingClientRect();
    const viewportHeight = window.innerHeight;

    const scrollProgress = (viewportHeight - rect.top) / viewportHeight;

    if (rect.top < viewportHeight && scrollProgress >= 0.8) {
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
      className="text-Monotone-White flex flex-col items-center justify-center gap-10 py-24 lg:px-28"
    >
      <h2 className="font-hubotSans text-3xl lg:text-5xl font-semibold text-center">
        Our Partner
      </h2>
      <div className="flex w-full justify-start items-center flex-col lg:flex-row gap-10 lg:gap-5 max-w-6xl">
        {/* Image Container */}
        <Image src={partner1} alt="ESI logo" className="h-1/4 w-1/4"/>
        {/* Info Container */}
        <div
          className={`flex flex-col flex-grow items-start gap-8 ${borderColor} border-l-4 py-6 px-6 lg:px-16 bg-gradient-to-l from-transparent to-[#03346620] backdrop-blur-md  transition-colors duration-1000`}>
          <p className="text-base lg:text-xl font-aspekta font-medium">Ecole Nationale Supérieure d&#39;Informatique</p>
          <div className="flex items-center justify-center gap-2">
            <Location size="24" color="#b0f0ff" variant="Bold"/>
            <p className="text-sm lg:text-lg font-aspekta font-normal text-Primary-200">Oued Smar, Algiers</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partners;