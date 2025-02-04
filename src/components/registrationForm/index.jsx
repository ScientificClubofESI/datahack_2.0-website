import React, { useState } from 'react';
import Education from './Education_Links/Education';
import Links from './Education_Links/Links';


const FormController = ({ onClose }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({});

  const steps = [
    { component: Education, title: 'Education' },
    { component: Links, title: 'Links' }
  ];

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(prev => prev + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(prev => prev - 1);
    }
  };

  const CurrentStepComponent = steps[currentStep].component;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-lg shadow-xl">
        <div 
          onClick={onClose} 
          className="bg-black h-10 w-10 justify-center flex items-center absolute mt-2 md:mt-8 right-3 md:right-32 cursor-pointer p-4"
        >
          <span className="text-white text-xl w-9">X</span>
        </div>
        
        {currentStep === 0 && (
          <Education 
            handleNext={handleNext}
            handleBack={handleBack}
          />
        )}
        
        {currentStep === 1 && (
          <Links 
            handleNext={handleNext}
            handleBack={handleBack}
          />
        )}
      </div>
    </div>
  );
};

export default FormController;