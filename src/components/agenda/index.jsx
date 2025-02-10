import React, { useEffect, useState } from 'react';
import DayCard from './dayCard';
import PauseIcon from '../../../public/icons/pause_icon.svg';
import PlayIcon from '../../../public/icons/play_icon.svg';
import LeftIcon from '../../../public/icons/right_arrow_icon.svg';
import RightIcon from '../../../public/icons/left_arrow_icon.svg';
import { ArrowRight2,ArrowLeft2 , Pause, Play } from "iconsax-react";

const Agenda = () => {
  const days = [
    {
      number: 1,
      date: 'Thu 14. 01. 2025',
      schedule: [
        { time: '5 PM - 6 PM', activity: 'Check In' },
        { time: '6 PM - 7 PM', activity: 'Opening Ceremony' },
        { time: '7 PM - 8 PM', activity: 'Ice Break Activities' },
        { time: '8 PM - 9 PM', activity: 'Diner' },
        { time: '9 PM - 11 PM', activity: 'Hacking Starts' },
        { time: '11 PM - 12 AM', activity: 'Break' }
      ]
    },
    {
      number: 2,
      date: 'Fri 14. 01. 2025',
      schedule: [
        { time: '5 PM - 6 PM', activity: 'Check In' },
        { time: '6 PM - 7 PM', activity: 'Opening Ceremony' },
        { time: '7 PM - 8 PM', activity: 'Ice Break Activities' },
        { time: '8 PM - 9 PM', activity: 'Diner' },
        { time: '9 PM - 11 PM', activity: 'Hacking Starts' },
        { time: '11 PM - 12 AM', activity: 'Break' }
      ]
    },
    {
      number: 3,
      date: 'Sat 14. 01. 2025',
      schedule: [
        { time: '5 PM - 6 PM', activity: 'Check In' },
        { time: '6 PM - 7 PM', activity: 'Opening Ceremony' },
        { time: '7 PM - 8 PM', activity: 'Ice Break Activities' },
        { time: '8 PM - 9 PM', activity: 'Diner' },
        { time: '9 PM - 11 PM', activity: 'Hacking Starts' },
        { time: '11 PM - 12 AM', activity: 'Break' }
      ]
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % days.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isPaused]);

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

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % days.length);
  };

  const goToPrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + days.length) % days.length);
  };

  return (
    <section className="overflow-hidden min-h-screen w-full flex flex-col justify-center items-center text-Monotone-White px-4">
      <h1 className="text-3xl md:text-5xl mb-32 md:mb-6">Agenda</h1>
      <div className="relative flex items-center justify-center w-full h-auto md:h-[80vh] py-8">
        {days.map((day, index) => {
          const position = (index - currentIndex + days.length) % days.length;
          const translateX = (position - 1) * 100;
          
          return (
            <div
              key={index}
              className={`
                absolute transition-all duration-500 ease-in-out w-full md:w-[80%] lg:w-[30vw]
                ${position !== 1 && 'hidden md:block'}
              `}
              style={{
                transform: `translateX(${translateX}%) ${position === 1 ? 'scale(1)' : 'scale(0.75)'}`,
                opacity: position === 1 ? 1 : 0.6,
                zIndex: position === 1 ? 20 : 10
              }}
            >
              <div className={`
                relative p-4 md:p-8 rounded-xl 
                backdrop-blur-lg
                border border-[#ffffff20] 
                shadow-lg
                ${position === 1 ? 'bg-[#00050A]/40' : 'bg-[#00050A]/30'}
                h-auto md:h-full
                max-h-[70vh] md:max-h-none
                overflow-y-auto md:overflow-visible
              `}>
                <h2 className={`
                  text-center text-2xl md:text-3xl mb-3 font-semibold
                  ${position === 1 ? 'bg-gradient-to-r from-[#6F06C1] via-[#4EA4F9] to-[#36D9FF] bg-clip-text text-transparent' : 'text-white'}
                `}>
                  DAY {day.number}
                </h2>
                <p className="text-xs md:text-sm text-Primary-300 mb-4 md:mb-6 text-center">{day.date}</p>
                <div className="space-y-4 md:space-y-6">
                  {day.schedule.map((item, idx) => (
                    <div key={idx} className="flex justify-between items-start gap-4">
                      <span className="text-xs md:text-sm font-medium w-1/3">{item.time}</span>
                      <span className="text-xs md:text-sm text-gray-400 w-2/3 text-right">{item.activity}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="w-full md:w-[35%] h-1 bg-[#00050A] rounded mt-32 md:mt-6">
        <div
          className="h-full bg-Primary-600 rounded transition-all duration-50 "
          style={{ width: `${progress}%` }}
        ></div>
      </div>

      <div className="flex flex-row w-full md:w-[40%] justify-between mt-4 px-4">
        <button
          onClick={() => setIsPaused(!isPaused)}
          className="p-2 rounded-full hover:bg-white/10 transition-colors"
        >
          {isPaused ? (
                  <Play size="20" color="#A3A3A3" variant='Bold'/>
                ) : (
                  <Pause size="20" color="#A3A3A3" variant='Bold'/>
                )}
        </button>

        <div className="flex gap-4">
          <button
            onClick={goToPrev}
            className="p-2 rounded-full hover:bg-white/10 transition-colors"
          >
            <ArrowLeft2 size="20" color="#A3A3A3" variant='Bold'/>
          </button>
          <button
            onClick={goToNext}
            className="p-2 rounded-full hover:bg-white/10 transition-colors"
          >
            <ArrowRight2 size="20" color="#A3A3A3" variant='Bold'/>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Agenda;