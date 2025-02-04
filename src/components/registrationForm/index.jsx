import React, { useState } from 'react';
import Education from './Education_Links/Education';
import Links from './Education_Links/Links';


const FormController = ({ onClose }) => {
  const [step, setStep] = useState(0);
  
  const handleNext = () => setStep(step + 1);
  const handleBack = () => setStep(step - 1);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto">
        <div 
          className="justify-center flex items-center absolute mt-2 md:mt-8 right-0 md:right-0 cursor-pointer p-4 z-50"
          onClick={onClose}
        >
          <span className="text-white text-xl">X</span>
        </div>

        {step === 0 && <Education handleNext={handleNext} />}
        {step === 1 && <Links handleBack={handleBack} handleNext={handleNext} />}
      </div>
    </div>
  );
};

export default FormController;