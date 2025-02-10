import React, { useState, useEffect } from 'react';

const Navbar_popup = ({ num }) => {

  return (
   <div>
     <div className="absolute w-1/2 md:w-5/12 h-1 bg-gradient-to-r from-[#6F06C1] via-[#4EA4F9] to-[#36D9FF] mt-0 z-10"></div>
    <div className="absolute z-10 mt-3 flex gap-14 mb-12 flex-center ml-8">
        <span className="hidden md:flex text-[#530490]">Basic Details</span>
        <span className="text-[#530490] hidden md:flex">Skills & Interests</span>
        <span className="text-[#530490] hidden md:flex">Education</span>
        <span className="text-xl bg-gradient-to-r from-[#6F06C1] via-[#4EA4F9] to-[#36D9FF] bg-clip-text text-transparent">
            Links
        </span>
    </div>
   </div>
  );
}

export default Navbar_popup;