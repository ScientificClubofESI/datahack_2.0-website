import React, { useState, useEffect, useRef } from 'react';
import { Pause, ArrowLeft2, ArrowRight2 , Play } from 'iconsax-react';

const AboutSlider = () => {
  const slides = [
    {
      id: 1,
      title: "About",
      subtitle: "//About CSE",
      description: "The CSE is one of Algeria's largest scientific clubs. Active since 2008, it aims to provide innovative content through hackathons, workshops, training, and social media, fostering a dynamic and engaging learning environment for all passionate about technology and innovation.",
      label: "CSE Club",
      images: ["/images/about/second.png", "/images/about/aboutcse_img_1.png"],
      type: "image"
    },
    {
      id: 2,
      title: "About",
      subtitle: "//About DATAHACK",
      description: "CSE, in partnership with the LMCS lab, hosted DataHack,  from March 7-9, 2024, at ESI. With 120+ participants, it aimed to build a data community. Teams had 48 hours to analyze real datasets and develop AI solutions, fostering innovation, collaboration, and knowledge sharing.",
      label: "DataHack 1",
      images: ["/images/about/aboutdatahack_img_1.png", "/images/about/aboutdatahack_img_2.png", "/images/about/aboutdatahack_img_3.png"],
      type: "image"
    }
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentSubSlide, setCurrentSubSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [progress, setProgress] = useState(0);
  const progressInterval = useRef(null);

  const SLIDE_DURATION = 5000;
  const HALF_SLIDE_DURATION = SLIDE_DURATION / 2;

  useEffect(() => {
    if (isPlaying) {
      progressInterval.current = setInterval(() => {
        setProgress(prev => {
          if (prev >= 100) {
            // Move to next slide when progress completes
            setCurrentSlide(current => (current + 1) % slides.length);
            setCurrentSubSlide(0);
            return 0;
          }

          const currentImages = slides[currentSlide].images;
          
          // Change sub-slide at midpoint
          if (prev >= 50 && currentImages.length > 1 && currentSubSlide === 0) {
            setCurrentSubSlide(1);
          }

          return prev + (100 / (SLIDE_DURATION / 16));
        });
      }, 16);
    } else {
      clearInterval(progressInterval.current);
    }

    return () => clearInterval(progressInterval.current);
  }, [isPlaying, currentSlide]);

  const handleSlideChange = (index) => {
    setCurrentSlide(index);
    setCurrentSubSlide(0);
    setProgress(0);
  };

  const togglePlayPause = () => setIsPlaying(!isPlaying);

  const progressBarStyle = {
    width: `${progress}%`,
  };

  return (
    <div className="w-full text-white p-4">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row">
        {/* Image Section */}
        <div className="w-full lg:w-[45%] mb-4 lg:mb-0">
          <img
            src={slides[currentSlide].images[currentSubSlide]}
            alt={slides[currentSlide].title}
            className="w-full h-auto object-cover border-solid border-4 border-Primary-700"
          />
        </div>

        {/* Content Section */}
        <div className="w-full lg:w-[55%] py-6 px-4 lg:px-16 gap-6 flex flex-col justify-between bg-gradient-to-l from-transparent to-[#03346620] backdrop-blur-md">
          {/* Title and Subtitle Container */}
          <div className="flex flex-col gap-1">
            <h2 className="font-hubotSans text-2xl lg:text-4xl font-semibold">{slides[currentSlide].title}</h2>
            <h3 className="text-Primary-300 text-xs lg:text-sm font-medium">{slides[currentSlide].subtitle}</h3>
          </div>

          {/* Description */}
          <div className="text-sm lg:text-base text-neutral-400 font-aspekta font-normal">
            <p>{slides[currentSlide].description}</p>
          </div>

          {/* Progress and Controls Container */}
          <div className="flex flex-col">
            {/* Progress Bar */}
            <div className="w-full bg-gray-700 h-1 rounded-full overflow-hidden">
              <div 
                className="bg-Primary-500 h-full transition-all duration-50 ease-linear"
                style={progressBarStyle}
              />
            </div>

            {/* Controls */}
            <div className="flex justify-between items-center mt-2">
              {/* Play/Pause and Label */}
              <div className="flex items-center gap-2">
                <button 
                  onClick={togglePlayPause}
                  className="p-2 rounded-full hover:bg-gray-800"
                >
                  {isPlaying ? <Pause size="20" color="#A3A3A3" variant='Bold'/> : <Play size="20" color="#A3A3A3" variant='Bold'/>}
                </button>
                <span className="text-xs lg:text-sm">{slides[currentSlide].label}</span>
              </div>

              {/* Navigation Buttons */}
              <div className="flex items-center gap-2">
                <span className="text-xs lg:text-sm">{`${currentSlide + 1}/${slides.length}`}</span>
                <div className="flex gap-1">
                  <button 
                    onClick={() => handleSlideChange((currentSlide - 1 + slides.length) % slides.length)}
                    className="p-2 rounded-full hover:bg-gray-800"
                  >
                    <ArrowLeft2 size="20" color="#A3A3A3" variant='Bold'/>
                  </button>
                  <button 
                    onClick={() => handleSlideChange((currentSlide + 1) % slides.length)}
                    className="p-2 rounded-full hover:bg-gray-800"
                  >
                    <ArrowRight2 size="20" color="#A3A3A3" variant='Bold'/>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSlider;