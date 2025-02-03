import React, { useEffect, useState } from 'react';
import DayCard from './DayCard';
import PauseIcon from '../../../public/icons/pause_icon.svg';
import PlayIcon from '../../../public/icons/play_icon.svg';
import LeftIcon from '../../../public/icons/right_arrow_icon.svg';
import RightIcon from '../../../public/icons/left_arrow_icon.svg';

const Agenda = () => {
  const days = [3, 1, 2]; // Days array

  // States for current index and pause/play toggle
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [progress, setProgress] = useState(0);

  // Automatic sliding logic
  useEffect(() => {
    if (isPaused) return; // Pause slider if paused

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % days.length); // Rotate cards
    }, 5000);

    return () => clearInterval(interval); // Cleanup interval
  }, [isPaused]); // Runs when paused status changes


  // Progress bar logic
  useEffect(() => {
    let interval;
    if (!isPaused) {
      setProgress(0);
      interval = setInterval(() => {
        setProgress((prevProgress) => {
          if (prevProgress >= 100) {
            clearInterval(interval);
            return 100;
          }
          return prevProgress + 1;
        });
      }, 50);
    } else {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [currentIndex, isPaused]);

   // Manual navigation
   const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % days.length);
  };

  const goToPrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + days.length) % days.length);
  };


  return (
    <section className="overflow-hidden h-full flex flex-col justify-center items-center text-Monotone-White">
      <h1 className='text-5xl mt-4'>Agenda</h1>
      <div className="relative flex items-center justify-center w-[100vh] h-[100vh]">
        {days.map((day, index) => {
          // Calculate position relative to the center (looping effect)
          const position = (index - currentIndex + days.length) % days.length;

          // Dynamic positioning and scaling
          const translateX = (position - 1) * 75; // Moves relative to center
          const scale = position === 1 ? 'scale-110 z-10' : 'scale-90'; // Highlight the center card

          return (
            <div
              key={index}
              className={`absolute transition-all duration-500 ease-in-out ${scale}`}
              style={{
                transform: `translateX(${translateX}%)`, // Slide dynamically
                width: '33.33vw',
              }}
            >
              <DayCard
                number={day}
                isTheOneInTheCenter={position === 1}
              />
            </div>
          );
        })}
      </div>

      

       {/* Progress Bar */}
       <div className="w-[40%] h-1 bg-gray-200 rounded">
        <div
          className="h-full bg-blue-500 rounded"
          style={{ width: `${progress}%` }}
        ></div>
      </div>

      

      <div className='flex flex-row w-[40%] justify-between'>
        {/* Pause/Play Button */}
      <button
        onClick={() => setIsPaused(!isPaused)}
        className="px-4 py-2 text-white rounded justify-self-start"
      >
        <img src={isPaused ? PlayIcon : PauseIcon} alt="" />
      </button>
      
      {/* Navigation Arrows */}
      <div className='flex flex-rom'>
      <button
        onClick={goToPrev}
        className="px-4 py-2 text-white rounded w-4 h-4"
      >
        <img src={RightIcon} alt="" className='w-4 h-4'/>
      </button>
      <button
        onClick={goToNext}
        className="px-4 py-2 text-white rounded"
      >
        <img src={LeftIcon} alt="" className='w-4 h-4' />
      </button>
      </div>
      


      </div>

    </section>
  );
};

export default Agenda;
