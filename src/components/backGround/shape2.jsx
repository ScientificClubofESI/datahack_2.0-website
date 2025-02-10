import React from 'react';
import Image from "next/image";


const BackgroundShapes_two = () => (
  <div className=" top-0 inset-0 pointer-events-none z-0">
    <Image 
      src="/images/background/shape4.png"
      alt="" 
      width={400}
      height={500}
      className="absolute  opacity-20" 
    />
    <Image 
      src="/images/background/shape3.png"
      alt="" 
      width={600}
      height={900}
      className="absolute right-0 opacity-20" 
    />
  </div>
);

export default BackgroundShapes_two;

