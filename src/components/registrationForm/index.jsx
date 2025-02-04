import React, { useState } from 'react';
import Education from './education_Links/Education';
import Links from './education_Links/Links';
import RegistrationBasicDetails from './registrationBasicDetails';
import SkillsInterests from './skillinterest';
import InputFrame from './motivation/motivation_1';
import Team from './motivation/team_1';


const FormController = ({ onClose }) => {
  const [step, setStep] = useState(0);
  
  const handleNext = () => setStep(step + 1);
  const handleBack = () => setStep(step - 1);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto">
        <div 
          className="r absolute  right-0 md:right-0 cursor-pointer p-4 z-50"
          onClick={onClose}
        >
          <span className="text-white  font-bold text-2xl">X</span>
        </div>

       {/* {step === 0 && <RegistrationBasicDetails handleNext={handleNext} />}*/}
      
        {/*{step === 1 && <SkillsInterests handleBack={handleBack} handleNext={handleNext} />}*/}
        {step === 2 && <Education handleBack={handleBack} handleNext={handleNext} />}
        {step === 3 && <Links handleBack={handleBack} handleNext={handleNext} />}
        {step === 0 && <InputFrame handleBack={handleBack} handleNext={handleNext} />}
        {step === 1 && <Team handleBack={handleBack} handleNext={handleNext} />}
       
      </div>
    </div>
  );
};

export default FormController;

