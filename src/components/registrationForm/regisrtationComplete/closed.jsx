import { useState } from 'react';

const RegistrationClosed = () => {
  const [visible, setvisible] = useState(true); // État pour contrôler la visibilité du popup

  const handleClose = () => {
    setvisible(false); // Met à jour l'état pour masquer le popup
  };

  return (
    <>
      {visible && (
      <div className="flex items-center justify-center h-full">
      
        <div className="  bg-black flex items-center flex-col justify-center">
          {/*  progression */}
          {/* close button */}
         
          {/* check icon */}
          <img src="/images/tick-circle.svg" alt="check" className="" />
          {/* Title */}
          <div
            className="text-2xl font-semibold tracking-[0.015em] text-center bg-gradient-to-r from-[#6F06C1] via-[#4EA4F9] to-[#36D9FF] bg-clip-text text-transparent pt-8 pb-6"
            style={{ fontFamily: '"Hubot Sans", sans-serif' }}
          >
            Registration are closed
          </div>
          {/*  confirmation paragraphs */}
          <div className="md:text-base text-sm font-normal text-neutral-300  mb-16 sm:mb-2 text-center">
            Sorry , we closed the registrations ! Maybe next year inchAllah , stay tuned !
          </div>
        
         
           
        
        </div>
      </div>    
      )}
    </>
  );
};

export default RegistrationClosed;
