import React, { useState } from 'react';
import RegistrationBasicDetails from './registrationBasicDetails';
import SkillsInterests from './skillinterest';
import Links from '../education_Links/links';
import InputFrame from './motivation/motivation';
import Team from './motivation/team';
import Education from '../education_Links/education';



const FormController = ({ onClose }) => {
  const [step, setStep] = useState(0);
  const [formData, setFormData] = useState({
   
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",

    skills: "",
    hackathonsAttended:0,
    hackathonsExperience: " ",

    university: "",
    major: "",
    degree: "",
    graduationYear: 2024,

    hearAboutUs: "",
    motivation: "",

    linkedIn: "",
    github: "",
    cv: "",
    kaggle: "",

    hasTeam: false,
    createTeam: true,
    teamName:"",
    teamCode: "" ,

    comment:"",
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
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80">
      <div className="relative w-full max-w-4xl h-3/4  overflow-y-auto">
        <div className="absolute right-0 cursor-pointer p-4 z-50" onClick={onClose}>
          <span className="text-white font-bold text-2xl">X</span>
        </div>

        {step === 0 && <RegistrationBasicDetails handleNext={handleNext} handleChange={handleChange} formData={formData} />}
        {step === 1 && <SkillsInterests handleBack={handleBack} handleNext={handleNext} handleChange={handleChange} formData={formData} />}
        {step === 2 && <Education handleBack={handleBack} handleNext={handleNext} handleChange={handleChange} formData={formData} />}
        {step === 3 && <Links handleBack={handleBack} handleNext={handleNext} handleChange={handleChange} formData={formData} />}
        {step === 4 && <InputFrame handleBack={handleBack} handleNext={handleNext} handleChange={handleChange} formData={formData} />}
        {step === 5 && <Team handleBack={handleBack} handleNext={handleNext} handleChange={handleChange} formData={formData} onClose={onClose} />}
 
      </div>
    </div>
  );
};

export default FormController;
