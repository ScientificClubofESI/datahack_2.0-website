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
   <main className='text-Monotone-White pt-12 xl:pt-20  flex flex-col justify-center gap-16 items-center   mb-24 relative '>
        <h1 className='font-hubotSans text-2xl 2lg:text-5xl font-semibold mx-auto text-white'>Workshops</h1>
        <section className='flex flex-col justify-center gap-10 xl:gap-12 xl:flex-row xl:justify-around xl:items-center'>

          <div className=" font-semibold bg-Tritary-400 py-2 px-12 rounded transition-all duration-300 
                hover:shadow-[0_0_25px_rgba(136,232,255,0.6)] hover:transform hover:scale-105
                 shadow-[0_0_15px_rgba(136,232,255,0.4)]
                
                before:from-transparent before:to-[rgba(136,232,255,0.1)] before:opacity-0
                hover:before:opacity-100 before:transition-opacity before:duration-300
                ">
            COMING SOON !! 
          </div>
          {/*   <section className='flex justify-center items-center'>
         
              <section className='grid grid-cols-1 gap-4 items-center justify-center lg:w-[400px] lg:ml-10'>
                  <p className={`text-sm border-2 border-solid bg-Monotone-Black px-8 py-2 lg:py-4 rounded-sm lg:font-semibold lg:text-base ${ activeWorkshop === "Data visualization" ? "gradient-border gradient-text  xl:scale-[1.15] xl:font-bold" : "border-Neutral-950" }`}>Data visualization</p>
                  <p className={`text-sm border-2 border-solid bg-Monotone-Black px-8 py-2 lg:py-4 rounded-sm lg:font-semibold lg:text-base ${ activeWorkshop === "Effective Storytelling with Data" ? "gradient-border gradient-text scale-110 xl:scale-[1.15] xl:font-bold" : "border-Neutral-950" }`}>Effective Storytelling with Data</p>
                  <p className={`text-sm border-2 border-solid bg-Monotone-Black px-8 py-2 lg:py-4 rounded-sm lg:font-semibold lg:text-base ${ activeWorkshop === "How to Build a Winning Datathon Strategy" ? "gradient-border gradient-text scale-110 xl:scale-[1.15] xl:font-bold" : "border-Neutral-950" }`}>How to Build a Winning Datathon Strategy</p>
                  <p className={`text-sm border-2 border-solid bg-Monotone-Black px-8 py-2 lg:py-4 rounded-sm lg:font-semibold lg:text-base ${ activeWorkshop === "Mastering Python for Data Analysis" ? "gradient-border gradient-text scale-110 xl:scale-[1.15] xl:font-bold" : "border-Neutral-950" }`}>Mastering Python for Data Analysis</p>
                  <p className={`text-sm border-2 border-solid bg-Monotone-Black px-8 py-2 lg:py-4 rounded-sm lg:font-semibold lg:text-base ${ activeWorkshop === "Time Series Analysis" ? "gradient-border gradient-text scale-110 xl:scale-[1.15] xl:font-bold" : "border-Neutral-950" }`}>Time Series Analysis</p>

              </section>
            </section>
          
            <div className='px-10 py-6 max-w-[800px] flex flex-col gap-[6px] lg:gap-6'>
              <div className='flex flex-col gap-[6px] lg:gap-2'>
                <h1 className='text-lg font-semibold font-hubotSans lg:text-2xl '>{activeWorkshop}</h1>
                <h2 className='text-sm font-aspekta font-medium text-Primary-300 lg:text-lg '>From Basics to Best Practices</h2>
              </div>
              <p className='text-Neutral-400 text-sm font-aspekta font-normal lg:text-base'>Lorem ipsum dolor sit amet consectetur. Tortor tempor augue orci vulputate. Turpis quam nibh sit nullam maecenas viverra volutpat. Nec pretium odio tortor urna nibh condimentum est imperdiet. Eu nunc dui hendrerit convallis viverra eu quis. Pharetra consequat felis volutpat leo magna aliquam amet mauris dictumst.</p>
              <nav className='flex flex-row justify-between text-neutral-300'>
                <p className='text-sm lg:text-base font-aspekta font-semibold'>1PM-3PM</p>
                <p className='text-base lg:text-lg font-aspekta font-medium'>11.01.2025</p>
              </nav>
            </div>*/}
        </section>
    </main>
  
  
  );
}

export default Workshops ;