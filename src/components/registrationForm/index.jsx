import React, { useState } from 'react';
import axios from 'axios';
import Education from './education_Links/Education';
import Links from './education_Links/Links';
import RegistrationBasicDetails from './registrationBasicDetails';
import SkillsInterests from './skillinterest';
import InputFrame from './motivation/motivation_1';
import Team from './motivation/team_1';

const FormController = ({ onClose }) => {
  const [step, setStep] = useState(0);
  const [formData, setFormData] = useState({
   
    firstName: " ",
    lastName: " ",
    email: "yasmine@gmail.com",
    phoneNumber: " ",

    skills: " ",
    hackathonsAttended:0,
    hackathonsExperience: " ",

    university: " ",
    major: " ",
    degree: " ",
    graduationYear: 2024,

    hearAboutUs: " ",
    motivation: " ",

    linkedIn: " ",
    github: " ",
    cv: " ",
    kaggle: " ",

    hasTeam: true,
    createTeam:true,
    teamName:"yasou",
    teamCode: " " ,

    comment:" ",
  });

  const handleNext = () => setStep(step + 1);
  const handleBack = () => setStep(step - 1);
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  



  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto">
        <div className="absolute right-0 cursor-pointer p-4 z-50" onClick={onClose}>
          <span className="text-white font-bold text-2xl">X</span>
        </div>

        {step === 0 && <RegistrationBasicDetails handleNext={handleNext} handleChange={handleChange} formData={formData} />}
        {step === 1 && <SkillsInterests handleBack={handleBack} handleNext={handleNext} handleChange={handleChange} formData={formData} />}
        {step === 2 && <Education handleBack={handleBack} handleNext={handleNext} handleChange={handleChange} formData={formData} />}
        {step === 3 && <Links handleBack={handleBack} handleNext={handleNext} handleChange={handleChange} formData={formData} />}
        {step === 4 && <InputFrame handleBack={handleBack} handleNext={handleNext} handleChange={handleChange} formData={formData} />}
        {step === 5 && <Team handleBack={handleBack} handleNext={handleNext} handleChange={handleChange} formData={formData} />}
¨
 
      </div>
    </div>
  );
};

export default FormController;
