import { useState } from 'react';

const RegistrationComplete = ({hasTeam, teamName,teamCode}) => {
  const [visible, setvisible] = useState(true); // État pour contrôler la visibilité du popup

  const handleClose = () => {
    setvisible(false); // Met à jour l'état pour masquer le popup
  };

  return (
    <>
      {visible && (
      <div className="flex items-center justify-center h-screen">
        <div><button onClick={handleClose} className="absolute top-8 right-8 sm:hidden">
            <img src="/images/close.svg" alt="close icon" />
          </button></div>
        <div className=" relative w-[1024px] h-[604px] bg-black flex items-center flex-col justify-center">
          {/*  progression */}
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#6F06C1] via-[#4EA4F9] to-[#36D9FF]"></div>
          {/* close button */}
          <button onClick={handleClose} className="absolute top-8 right-8 sm:hidden">
            <img src="/images/close.svg" alt="close icon" />
          </button>
          {/* check icon */}
          <img src="/images/tick-circle.svg" alt="check" className=" sm: pb-6" />
          {/* Title */}
          <div
            className="text-2xl font-semibold tracking-[0.015em] text-center bg-gradient-to-r from-[#6F06C1] via-[#4EA4F9] to-[#36D9FF] bg-clip-text text-transparent pt-8 pb-6"
            style={{ fontFamily: '"Hubot Sans", sans-serif' }}
          >
            Registration Complete
          </div>
          {/*  confirmation paragraphs */}
          <div className="text-[16px] font-normal text-neutral-300 px-8 pt-4 mb-16 sm:mb-2 text-center">
            Congratulations, You have successfully completed your registration!
          </div>
          <div className="text-[16px] text-left font-normal px-8  text-neutral-400 sm:text-neutral-300 pb-4 ">
            You will receive an email confirming whether your application has been accepted or declined.
          </div>
         
            <div className='font-normal text-[16px] text-left  px-8  text-neutral-400 sm:text-neutral-300   
            border  border-s   rounded-md p-3 mt-4'> 
            
             Your team name : <b className=' text-Primary-600'>{teamName}</b > , your team code : <b className=' text-Primary-600'>{teamCode}</b>
             
            </div>
        
        </div>
      </div>    
      )}
    </>
  );
};

export default RegistrationComplete;
