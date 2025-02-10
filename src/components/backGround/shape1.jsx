import React from 'react';
import Image from "next/image";


const BackgroundShapes = () => (
  <div className=" top-0 inset-0 pointer-events-none z-0">
    <Image 
      src="/images/background/shape1.png"
      alt="" 
      width={300}
      height={400}
      className="absolute  opacity-20" 
    />
    <Image 
      src="/images/background/shape2.png"
      alt="" 
      width={1200}
      height={2000}
      className="absolute right-0  opacity-20" 
    />
  </div>
);

export default BackgroundShapes;

