'use client'

import React, { useEffect, useState } from 'react';


const Workshops = ()=>{
  const [index, setIndex] = useState(0)
  const workshops = [
        'Data visualization',
        'Effective Storytelling with Data',
        'How to Build a Winning Datathon Strategy',
        'Mastering Python for Data Analysis',
        'Time Series Analysis'
  ]
  const [activeWorkshop, setActiveWorkshop] = useState(workshops[0])
  useEffect(() => {
    const timer = setTimeout(() => {
      setIndex((index + 1) % workshops.length)
      setActiveWorkshop(workshops[index])
    }, 5000)
    return () => clearTimeout(timer)
  }, [activeWorkshop, index])
  return(
    <main className='text-Monotone-White pt-12 xl:pt-20  flex flex-col justify-center gap-16 items-center  relative '>
        <h1 className='text-3xl font-medium xl:font-bold xl:text-5xl '>Workshops</h1>
        <section className='flex flex-col justify-center gap-10 xl:gap-12 xl:flex-row xl:justify-around xl:items-center'>
            <section className='flex justify-center items-center'>
         
              <section className='grid grid-cols-1 gap-4 items-center justify-center xl:w-[400px] xl:ml-10'>
                  <p className={`text-sm border-2 border-solid  bg-Monotone-Black px-2 py-2 xl:py-4 rounded-sm xl:font-medium xl:text-lg ${ activeWorkshop === "Data visualization" ? "gradient-border gradient-text scale-110 xl:scale-[1.15] xl:font-bold" : "border-Neutral-900" }`}>Data visualization</p>
                  <p className={`text-sm border-2 border-solid  bg-Monotone-Black px-2 py-2 xl:py-4 rounded-sm xl:font-medium xl:text-lg ${ activeWorkshop === "Effective Storytelling with Data" ? "gradient-border gradient-text scale-110 xl:scale-[1.15] xl:font-bold" : "border-Neutral-900" }`}>Effective Storytelling with Data</p>
                  <p className={`text-sm border-2 border-solid  bg-Monotone-Black px-2 py-2 xl:py-4 rounded-sm xl:font-medium xl:text-lg ${ activeWorkshop === "How to Build a Winning Datathon Strategy" ? "gradient-border gradient-text scale-110 xl:scale-[1.15] xl:font-bold" : "border-Neutral-900" }`}>How to Build a Winning Datathon Strategy</p>
                  <p className={`text-sm border-2 border-solid  bg-Monotone-Black px-2 py-2 xl:py-4 rounded-sm xl:font-medium xl:text-lg ${ activeWorkshop === "Mastering Python for Data Analysis" ? "gradient-border gradient-text scale-110 xl:scale-[1.15] xl:font-bold" : "border-Neutral-900" }`}>Mastering Python for Data Analysis</p>
                  <p className={`text-sm border-2 border-solid  bg-Monotone-Black px-2 py-2 xl:py-4 rounded-sm xl:font-medium xl:text-lg ${ activeWorkshop === "Time Series Analysis" ? "gradient-border gradient-text scale-110 xl:scale-[1.15] xl:font-bold" : "border-Neutral-900" }`}>Time Series Analysis</p>

              </section>
            </section>
          
            <article className='px-4 xl:w-[55%]'>
              <div className='flex flex-col gap-[12px]'>
                <h1 className='text-2xl font-medium xl:text-3xl '>{activeWorkshop}</h1>
                <h2 className='text-xl  text-Primary-300 xl:text-2xl '>From Basics to Best Practices</h2>
              </div>
            
              <br />
              <p className='text-Neutral-400 xl:text-lg'>Lorem ipsum dolor sit amet consectetur. Tortor tempor augue orci vulputate. Turpis quam nibh sit nullam maecenas viverra volutpat. Nec pretium odio tortor urna nibh condimentum est imperdiet. Eu nunc dui hendrerit convallis viverra eu quis. Pharetra consequat felis volutpat leo magna aliquam amet mauris dictumst.</p>
              <br />
              <nav className='flex flex-row justify-between'>
                <p className='text-xl'>1PM-3PM</p>
                <p className='text-xl mr-2'>11.01.2025</p>
              </nav>
            </article>
        </section>
    </main>
  
  );
}

export default Workshops ;