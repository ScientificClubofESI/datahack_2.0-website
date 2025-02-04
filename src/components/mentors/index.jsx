import { useState, useEffect, useRef } from 'react';
import { ArrowDown2, ArrowUp2, Pause, Play } from "iconsax-react";

const MentorsSection = () => {
  const mentors = [
    {
      id: 1,
      name: "Anfel MEFTAH",
      title: "Computer Science Student - ESI",
      role: "Data Scientist and Advanced Analytics",
      description: "Lorem ipsum dolor sit amet consectetur. Tortor tempor augue orci vulputate. Turpis quam nibh sit nullam maecenas viverra volutpat. Nec pretium odio tortor urna nibh condimentum est imperdiet. Eu nunc dui hendrerit convallis viverra eu quis. Pharetra consequat felis volutpat leo magna aliquam amet mauris dictumst.",
      image: "/images/mentors/mentor_pic.png", 
    },
    {
      id: 2,
      name: "Amine BENSACI",
      title: "Software Engineer - CSE",
      role: "Full-Stack Developer",
      description: "Passionate about building scalable web applications and creating interactive user experiences. Skilled in both front-end and back-end development.",
      image: "/images/mentors/mentor_pic-1.png", 
    },
    {
      id: 3,
      name: "Sarra ZOUBIR",
      title: "AI Engineer - Tech Corp",
      role: "Machine Learning Specialist",
      description: "Experienced in developing machine learning models and deploying AI solutions for various industries. Focused on innovation and problem-solving.",
      image: "/images/mentors/mentor_pic-2.png", 
    },
    {
      id: 4,
      name: "Yassine BENNANI",
      title: "Computer Science Student - ESI",
      role: "Software Developer",
      description: "Lorem ipsum dolor sit amet consectetur. Tortor tempor augue orci vulputate. Turpis quam nibh sit nullam maecenas viverra volutpat. Nec pretium odio tortor urna nibh cond imentum est imperdiet. Eu nunc dui hend ",
      image: "/images/mentors/mentor_pic-3.png",
    },
  ];

  const [currentMentor, setCurrentMentor] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [progress, setProgress] = useState(0);

  const SLIDE_DURATION = 7000;
  const progressInterval = useRef(null);

  useEffect(() => {
    if (isPlaying) {
      progressInterval.current = setInterval(() => {
        setProgress(prev => {
          if (prev >= 100) {
            setCurrentMentor((currentMentor + 1) % mentors.length);
            return 0;
          }
          return prev + (100 / (SLIDE_DURATION / 16));
        });
      }, 16);
    } else {
      clearInterval(progressInterval.current);
    }

    return () => clearInterval(progressInterval.current);
  }, [isPlaying, currentMentor]);

  const handleMentorChange = (index) => {
    setCurrentMentor(index);
    setProgress(0);
  };

  const togglePlayPause = () => setIsPlaying(!isPlaying);

  const progressBarStyle = {
    width: `${progress}%`,
  };

  return (
    <div className="flex flex-col w-full gap-16 py-[120px] 2lg:py-[120px] relative ">
      <div className="absolute inset-0 bg-Primary-500 opacity-[0.03]"></div>
      <h1 className="text-2xl 2lg:text-5xl font-semibold mx-auto text-white">Mentors</h1>

      <div className="flex flex-col-reverse 2lg:flex-row gap-10 px-4 2lg:px-20">
        {/* Info Section */}
        <div className="flex flex-col flex-1 gap-6 px-6 2lg:px-16 py-6 mb-8 2lg:mb-14 border-r-4 bg-gradient-to-r from-transparent to-[#03346620] border-Primary-500 backdrop-blur-md text-center 2lg:text-right items-center 2lg:items-end">
          <div className="flex-col gap-2 text-center hidden 2lg:flex 2lg:text-right items-center 2lg:items-end">
            <h2 className="text-xl 2lg:text-2xl w-fit font-semibold font-hubotSans bg-gradient-to-r from-[#6F06C1] via-[#4EA4F9] to-[#36D9FF] bg-clip-text text-transparent">
              {mentors[currentMentor].name}
            </h2>
            <h3 className="text-sm 2lg:text-base text-Primary-300 font-aspekta font-normal">
              {mentors[currentMentor].title}
            </h3>
            <h3 className="text-sm 2lg:text-base text-neutral-300 font-aspekta font-normal">
              {mentors[currentMentor].role}
            </h3>
          </div>
          <p className="text-sm text-neutral-400 font-aspekta font-light">
            {mentors[currentMentor].description}
          </p>
        </div>

        {/* Info Section (Mobile) */}
        <div className="flex-col order-10 gap-2 text-center flex 2lg:hidden items-center">
            <h2 className="text-xl w-fit font-semibold font-hubotSans bg-gradient-to-r from-[#6F06C1] via-[#4EA4F9] to-[#36D9FF] bg-clip-text text-transparent">
              {mentors[currentMentor].name}
            </h2>
            <h3 className="text-sm text-Primary-300 font-aspekta font-normal">
              {mentors[currentMentor].title}
            </h3>
            <h3 className="text-sm text-neutral-300 font-aspekta font-normal">
              {mentors[currentMentor].role}
            </h3>
        </div>

        {/* Mentor Image & Controls */}
        <div className="flex flex-col items-center gap-5  ">
          <div className="p-[1px] shadow-custom-glow w-[200px] 2lg:w-[256px] h-[200px] 2lg:h-[250px] bg-gradient-to-l from-[#6F06C1] via-[#4EA4F9] to-[#36D9FF] rounded-sm">
              <img 
                src={mentors[currentMentor].image}
                alt={mentors[currentMentor].name}
                className="w-full h-full object-cover rounded-sm"
              />
          </div>

          <div className="flex flex-col gap-3 w-full max-w-[200px] 2lg:max-w-full">
            {/* Progress Bar */}
            <div className="w-full h-1 bg-neutral-800 rounded-full">
              <div className="h-full bg-Primary-500 rounded-2xl" style={progressBarStyle} />
            </div>

            {/* Controls */}
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-1">
                <button 
                  onClick={() => handleMentorChange(currentMentor - 1 >= 0 ? currentMentor - 1 : mentors.length - 1)}
                  className="rounded-full hover:bg-neutral-800/50 transition-colors disabled:opacity-50"
                >
                  <ArrowUp2 size="20" color="#A3A3A3" variant='Bold'/>
                </button>
                
                <span className="text-sm font-aspekta font-semibold text-neutral-400 min-w-[40px] text-center">
                  {currentMentor + 1}/{mentors.length}
                </span>

                <button 
                  onClick={() => handleMentorChange((currentMentor + 1) % mentors.length)}
                  className="rounded-full hover:bg-neutral-800/50 transition-colors disabled:opacity-50"
                >
                  <ArrowDown2 size="20" color="#A3A3A3" variant='Bold'/>
                </button>
              </div>

              <button 
                onClick={togglePlayPause}
                className="rounded-full hover:bg-neutral-800/50 transition-colors"
              >
                {isPlaying ? (
                  <Pause size="20" color="#A3A3A3" variant='Bold'/>
                ) : (
                  <Play size="20" color="#A3A3A3" variant='Bold'/>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Desktop Thumbnails Column */}
        <div className="flex flex-row -order-first 2lg:-order-none justify-center 2lg:flex-col gap-4 2lg:mr-20 ">
          {mentors.map((mentor, index) => (
            <button
              key={mentor.id}
              onClick={() => {
                setCurrentMentor(index);
                setProgress(0);
              }}
              className={`w-16 h-16 rounded-sm overflow-hidden transition-all ${
                currentMentor === index 
                  ? 'ring-2 ring-Primary-500' 
                  : 'ring-1 ring-neutral-900 opacity-60 hover:opacity-100'
              }`}
            >
              <img 
                src={mentor.image}
                alt={mentor.name}
                className="w-full h-full object-cover"
              />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MentorsSection;