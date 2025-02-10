import React, { useState, useEffect, useCallback , useRef } from 'react';
import { Pause, ChevronLeft, ChevronRight, Play } from 'lucide-react';

const About = () => {
  const slides = [
    {
      id: 1,
      title: "About",
      subtitle: "//About CSE",
      description: "The Computer Science & Engineering Department at IIT Patna stands as a beacon of technological innovation and academic excellence. Our department fosters a dynamic learning environment where students are encouraged to push the boundaries of what's possible in the digital realm.",
      label: "CSE Club",
      images: ["/images/logoDatahack.svg", "/images/img4.svg", "/images/img5.svg"],
      type: "image"
    },
    {
      id: 2,
      title: "About",
      subtitle: "//About DATAHACK",
      description: "Throughout the year, we organize cutting-edge technical events, workshops, and hackathons. From coding competitions to AI workshops, our events provide hands-on experience and networking opportunities with industry experts.",
      label: "Activities",
      images: ["/images/img.svg", "/images/img2.svg", "/images/img3.svg"],
      type: "image"
    },
    {
      id: 3,
      title: "About",
      subtitle: "//Teaser",
      description: "Our department is at the forefront of groundbreaking research in areas like Artificial Intelligence, Machine Learning, Cybersecurity, and Cloud Computing. Students work alongside faculty on real-world projects that shape the future of technology.",
      label: "Research Wing",
      images: ["https://www.youtube.com/watch?v=dQw4w9WgXcQ"], // Replace YOUR_VIDEO_ID with actual Google Drive video ID
      type: "video"
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentSubSlide, setCurrentSubSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const videoRef = React.useRef(null);
  const [isVisible, setIsVisible] = useState(false); // Visibility state
  const elementRef = useRef(null); // Ref to track the element
  
  useEffect(() => {  
    const observer = new IntersectionObserver(
      ([entry]) => {
        console.log("Is element in view?", entry.isIntersecting);
        setIsVisible(entry.isIntersecting); // Update visibility state
      },
      {
        root: null, // Use the viewport
        rootMargin: "0px", // No additional margins
        threshold: 0.1, // Trigger when 10% of the element is visible
      }
    );
  
    const currentElement = elementRef.current;
    console.log(currentElement);
    if (currentElement) {
      console.log("dela3aaaaa");
      observer.observe(currentElement); // Start observing the element
    }
  
    return () => {
      if (currentElement) {
        observer.unobserve(currentElement); // Cleanup observer on unmount
      }
    };
  }, []); // Re-run when imagesLoaded changes
    

  const nextSubSlide = useCallback(() => {
    const currentImages = slides[currentSlide].images;
    if (currentSubSlide < currentImages.length - 1) {
      setCurrentSubSlide(prev => prev + 1);
    } else {
      setCurrentSubSlide(0);
      setCurrentSlide(prev => (prev + 1) % slides.length);
    }
  }, [currentSlide, currentSubSlide, slides]);

  const nextSlide = useCallback(() => {
    setCurrentSlide(prev => (prev + 1) % slides.length);
    setCurrentSubSlide(0);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentSlide(prev => (prev - 1 + slides.length) % slides.length);
    setCurrentSubSlide(0);
  }, [slides.length]);

  const toggleAutoSwitch = () => {
    setIsPaused(prev => !prev);
  };

  useEffect(() => {

    let timer;
    if (!isPaused && isVisible) {
      console.log("visiv=bllle");
      timer = setTimeout(() => {
        nextSubSlide();
      }, 3000); // 3 seconds delay for both images and videos
    }
    return () => clearTimeout(timer);
  }, [currentSlide, currentSubSlide, isPaused, isVisible, nextSubSlide]);

  // Reset video state when changing slides
  useEffect(() => {
    setIsVideoPlaying(false);
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
    }
  }, [currentSlide]);

  const calculateProgress = () => {
    const currentImages = slides[currentSlide].images;
    const progressPerImage = 100 / currentImages.length;
    return (currentSubSlide + 1) * progressPerImage;
  };

  const isFirstSlideFirstImage = currentSlide === 0 && currentSubSlide === 0;

  const ArrowButton = ({ direction, onClick }) => (
    <button
      onClick={onClick}
      className="p-2 hover:bg-gray-800 rounded-full group transition-colors"
      aria-label={direction === 'left' ? 'Previous slide' : 'Next slide'}
    >
      <svg 
        width="10" 
        height="12" 
        viewBox="0 0 10 12" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        className={`${direction === 'right' ? 'rotate-180' : ''} transition-colors`}
      >
        <path 
          d="M0.5 6.13397C-0.166667 5.73205 -0.166667 4.76795 0.5 4.36603L8 0.133975C8.66667 -0.267949 9.5 0.232051 9.5 1.01603V9.48397C9.5 10.2679 8.66667 10.7679 8 10.366L0.5 6.13397Z" 
          className={`fill-Neutral-400 group-hover:fill-Primary-500 transition-colors`}
        />
      </svg>
    </button>
  );

   const ContentSection = () => (
    <div className={`lg:w-1/2 w-full lg:py-0 py-5 flex flex-col justify-between ${
      slides[currentSlide].images[currentSubSlide].includes('logoDatahack') && 'lg:pl-20 lg:relative lg:before:absolute lg:before:left-0 lg:before:top-0 lg:before:bottom-0 lg:before:w-[4px] lg:before:bg-Primary-500'
    }`}>
      <div className="space-y-3 lg:space-y-4">
        <h2 className="text-xl lg:text-[36px] font-hubotSans font-semibold leading-tight lg:leading-[48px] tracking-[0.54px] text-Monotone-White">
          {slides[currentSlide].title}
        </h2>
        <h3 className="text-xs lg:text-[14px] font-aspekta font-medium leading-[20px] text-Primary-300 pb-1 lg:pb-4">
          {slides[currentSlide].subtitle}
        </h3>
        <p className="text-sm lg:text-[16px] font-aspekta font-normal leading-relaxed lg:leading-[24px] tracking-[0.16px] text-Neutral-400">
          {slides[currentSlide].description}
        </p>
      </div>

      <div className="space-y-3 mt-3 lg:space-y-4 lg:mt-0">
        <div className="w-full bg-gray-700 h-1 rounded-full">
          <div 
            className="bg-Primary-500 h-full rounded-full transition-all duration-300 ease-linear"
            style={{ width: `${calculateProgress()}%` }}
          />
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1.5 lg:gap-3">
            <button 
              className="p-1 lg:p-2 rounded-full hover:bg-gray-800"
              onClick={toggleAutoSwitch}
              aria-label={isPaused ? "Resume auto-switch" : "Pause auto-switch"}
            >
              {isPaused ? <Play className="w-3 h-3 lg:w-5 lg:h-5 text-Neutral-400" /> : <Pause className="w-3 h-3 lg:w-5 lg:h-5 text-Neutral-400" />}
            </button>
            <span className="text-xs lg:text-[16px] font-aspekta font-semibold leading-[24px] tracking-[0.16px] text-Monotone-White">
              {slides[currentSlide].label}
            </span>
          </div>

          <div className="flex items-center gap-1.5 lg:gap-2">
            <span className="text-xs lg:text-base text-gray-300">
              {currentSlide + 1}/{slides.length}
            </span>
            <div className="flex gap-0.5 lg:gap-1">
              <ArrowButton direction="left" onClick={prevSlide} />
              <ArrowButton direction="right" onClick={nextSlide} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const getYouTubeVideoId = (url) => {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);
    return (match && match[2].length === 11) ? match[2] : null;
  };

  const MediaSection = () => (
    <div className="lg:w-1/2 w-full">
      <div className={`relative rounded-lg overflow-hidden mx-auto
        ${!slides[currentSlide].images[currentSubSlide].includes('logoDatahack') 
          ? 'border-2 border-cyan-400' 
          : ''
        }
        w-full h-[180px] sm:h-[220px] md:h-[250px] lg:h-[300px]
        lg:w-[530px]`}>
        {slides[currentSlide].type === 'video' ? (
          <div className="w-full h-full">
            {/* YouTube Embed */}
            <iframe
              className="w-full h-full"
              src={`https://www.youtube.com/embed/${getYouTubeVideoId(slides[currentSlide].images[currentSubSlide])}?autoplay=0&rel=0`}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        ) : (
          <img
            key={`${currentSlide}-${currentSubSlide}`}
            src={slides[currentSlide].images[currentSubSlide]}
            alt={slides[currentSlide].title}
            className={`${
              slides[currentSlide].images[currentSubSlide].includes('logoDatahack') 
              ? 'w-1/2 h-1/2 mx-auto my-auto object-contain' 
              : 'w-full h-full object-cover'
            }`}
          />
        )}
      </div>
    </div>
  );

  return (
    <div ref={elementRef} className="w-full bg-gray-900 text-white p-4 lg:p-8">
      <div  className="max-w-6xl mx-auto flex flex-col lg:flex-row  lg:gap-8">
        {/* Mobile: Container with blue line */}
        <div className="lg:hidden relative pl-4 before:absolute gap-12 before:left-0 before:top-0 before:bottom-0 before:w-[2px] before:bg-Primary-500">
          <MediaSection />
          <ContentSection />
        </div>
        
        {/* Desktop: Conditional ordering without mobile line */}
        <div className="hidden lg:flex lg:flex-row">
          {!isFirstSlideFirstImage ? (
            <>
              <MediaSection />
              <ContentSection />
            </>
          ) : (
            <>
              <ContentSection />
              <MediaSection />
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default About;