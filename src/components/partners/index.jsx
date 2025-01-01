import React from 'react';
import Image from 'next/image';
import { Hubot_Sans } from "next/font/google";
const hubotSans = Hubot_Sans({
  subsets: ["latin"],
  weight: ["400", "600"],
});

import logoEsi from './images/Logo Esi.svg';
import location from './images/location.svg';

const Partners = ()=>{
  return(
   <section className=' text-Monotone-White flex flex-col gap-[40px] pt-[80px] pb-[160px] pr-[120] pl-[120px]'>
      <div className='flex justify-center'>
        <h2 className={`${hubotSans.className} text-[48px] font-[600]`}>Our Partners</h2>
      </div>
      <div className='flex items-center ml-[5rem] gap-[100px]'>
        <Image
          src={logoEsi}
          alt='ESI logo'
        />
        <div className='flex flex-col items-start gap-[32px] border-l-Primary-600 border-l-[4px] pt-[24px] pr-[64px] pb-[24px] pl-[64px]'  style={{
    background: "linear-gradient(270deg, rgba(1, 13, 26, 0) -0.97%, rgba(3, 52, 102, 0.16) 100%)",}}>
          <p>Ecole Nationale Supérieur d&#39;Informatique</p>
          <div className='flex items-center gap-[8px]'>
            <Image
              src={location}
              alt='Location icon'
            />
            <p>Oued Smar, Algiers</p>
          </div>
        </div>
      </div>
   </section>
  );
}

export default Partners ;
