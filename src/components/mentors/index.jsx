import { useState, useEffect, useRef } from 'react';
import { ArrowDown2, ArrowUp2, Pause, Play } from "iconsax-react";

const MentorsSection = () => {
  const mentors = [
    {
      id: 1,
      name: "Anfel MEFTAH",
      title: "Computer Science Student - ESI",
      role: "Data Scientist and Advanced Analytics",
      description: "Lorem ipsum dolor sit amet consectetur. Tortor tempor augue orci vulputate.",
      image: "/images/mentors/mentor_pic.png",
    },
    {
      id: 2,
      name: "Amine BENSACI",
      title: "Software Engineer - CSE",
      role: "Full-Stack Developer",
      description: "Passionate about building scalable web applications and creating interactive user experiences.",
      image: "/images/mentors/mentor_pic-1.png",
    },
    {
      id: 3,
      name: "Sarra ZOUBIR",
      title: "AI Engineer - Tech Corp",
      role: "Machine Learning Specialist",
      description: "Experienced in developing machine learning models and deploying AI solutions for various industries.",
      image: "/images/mentors/mentor_pic-2.png",
    },
    {
      id: 4,
      name: "Yassine BENNANI",
      title: "Computer Science Student - ESI",
      role: "Software Developer",
      description: "Lorem ipsum dolor sit amet consectetur. Tortor tempor augue orci vulputate.",
      image: "/images/mentors/mentor_pic-3.png",
    },
  ];

  const [currentMentor, setCurrentMentor] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [progress, setProgress] = useState(0);

  const SLIDE_DURATION = 5000 * mentors.length; // Total time to complete progress bar
  const SEGMENT_DURATION = 5000; // Time per mentor
  const progressInterval = useRef(null);

  // Automatic Progress and Mentor Change
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

  // Switch Mentor Manually
  const handleMentorChange = (index) => {
    setCurrentMentor(index);
    setProgress((index / mentors.length) * 100);
  };

  // Pause/Play Handler
  const togglePlayPause = () => setIsPlaying(!isPlaying);

  // Progress Bar Styles
  const progressBarStyle = {
    width: `${progress}%`,
  };

  return (
    <div className="flex flex-col w-full gap-16 py-[120px] bg-[#020203] relative bg-image-mentors bg-no-repeat bg-center bg-cover">
      <h1 className="text-5xl font-semibold mx-auto text-white">Mentors</h1>

      <div className="flex gap-7 px-20">
        {/* Mentor Info Section */}
        <div className="flex-1 gap-6 px-16 py-6 text-right border-r-4 border-Primary-500 bg-opacity-20">
          <h2 className="text-2xl font-semibold text-transparent bg-gradient-to-r from-[#6F06C1] via-[#4EA4F9] to-[#36D9FF] bg-clip-text">
            {mentors[currentMentor].name}
          </h2>
          <h3 className="text-base text-Primary-300">{mentors[currentMentor].title}</h3>
          <h3 className="text-base text-neutral-300">{mentors[currentMentor].role}</h3>
          <p className="text-sm text-neutral-500">{mentors[currentMentor].description}</p>
        </div>

        {/* Mentor Image & Controls */}
        <div className="flex flex-col items-center gap-6">
          <div className="rounded-sm shadow-custom-glow">
            <img
              src={mentors[currentMentor].image}
              alt={mentors[currentMentor].name}
              className="w-[256px] h-[256px] object-cover"
            />
          </div>

          {/* Progress Bar */}
          <div className="w-full h-1 bg-neutral-800 rounded-full">
            <div className="h-full bg-gradient-to-r from-[#6F06C1] via-[#4EA4F9] to-[#36D9FF]" style={progressBarStyle} />
          </div>

          {/* Controls */}
          <div className="flex justify-between w-full">
            <button onClick={() => handleMentorChange(currentMentor - 1 >= 0 ? currentMentor - 1 : mentors.length - 1)}>
              <ArrowUp2 size="20" color="#A3A3A3" variant="Bold"/>
            </button>
            <button onClick={togglePlayPause}>
              {isPlaying ? <Pause size="20" color="#A3A3A3" variant="Bold"/> : <Play size="20" color="#A3A3A3" variant="Bold"/>}
            </button>
            <button onClick={() => handleMentorChange((currentMentor + 1) % mentors.length)}>
              <ArrowDown2 size="20" color="#A3A3A3" variant="Bold"/>
            </button>
          </div>
        </div>
         {/* Thumbnails Column */}
         <div className="flex flex-col gap-2 ml-8">
          {mentors.map((mentor, index) => (
            <button
              key={mentor.id}
              onClick={() => {
                setCurrentMentor(index);
                setProgress(0);
              }}
              className={`w-12 h-12 rounded-lg overflow-hidden transition-all ${
                currentMentor === index 
                  ? 'ring-2 ring-Primary-500' 
                  : 'opacity-60 hover:opacity-100'
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
