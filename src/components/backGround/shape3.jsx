import React from 'react';
import Image from "next/image";


const BackgroundShapes_three = () => (
  <div className=" top-0 inset-0 pointer-events-none z-0">
    <Image 
      src="/images/background/shape5.png"
      alt="" 
      width={400}
      height={500}
      className="absolute  opacity-20" 
    />
    <Image 
      src="/images/background/shape6.png"
      alt="" 
      width={600}
      height={900}
      className="absolute  left-1/2 -translate-x-1/2 -translate-y-1/2  opacity-20" 
    />
  </div>
);

export default BackgroundShapes_three;

