
import React from 'react';

const steps = [
  "Basic Details",
  "Skills & Interests",
  "Education",
  "Links",
  "Motivation",
  "Team",
];

const Navbar_popup = ({ num }) => {
  return (
    <div className="relative w-full flex flex-col items-center">
      {/* Progress Bar */}
      <div className="relative w-full h-1 md:bg-black">
        <div
          className="absolute h-full bg-gradient-to-r from-[#6F06C1] via-[#4EA4F9] to-[#36D9FF] transition-all duration-500"
          style={{ width: `${(num / (steps.length - 1)) * 100}%` }}
        />
      </div>

      {/* Step Labels */}
      <div className="relative z-10 mt-3 flex gap-6 md:gap-14 justify-center">
        {steps.map((step, index) => (
          <span
            key={index}
            className={`text-lg ${
              index < num
                ? "md:text-[#530490]  md:flex hidden " // Past steps in violet
                : index === num
                ? "bg-gradient-to-r from-[#6F06C1] via-[#4EA4F9] to-[#36D9FF] bg-clip-text text-transparent font-bold" // Active step in gradient
                : "text-black hidden md:flex" // Future steps hidden
            } transition-all duration-300`}
          >
            {step}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Navbar_popup;
