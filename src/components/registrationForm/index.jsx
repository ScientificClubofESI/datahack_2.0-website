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
    
    <div className="fixed inset-0 z-50 p-2 flex md:flex-row  md:h-7/8 flex-col-reverse   justify-center  items-end md:items-start gap-0 bg-black bg-opacity-80 font-semibold ">

    <div className="relative w-full max-w-4xl  h-full  bg-black shadow-[0_0_15px_rgba(136,232,255,0.4)]  rounded-lg p-6 overflow-auto flex flex-col">


        {step === 0 && <RegistrationBasicDetails handleNext={handleNext} handleChange={handleChange} formData={formData} />}
        {step === 1 && <SkillsInterests handleBack={handleBack} handleNext={handleNext} handleChange={handleChange} formData={formData} />}
        {step === 2 && <Education handleBack={handleBack} handleNext={handleNext} handleChange={handleChange} formData={formData} />}
        {step === 3 && <Links handleBack={handleBack} handleNext={handleNext} handleChange={handleChange} formData={formData} />}
        {step === 4 && <InputFrame handleBack={handleBack} handleNext={handleNext} handleChange={handleChange} formData={formData} />}
        {step === 5 && <Team handleBack={handleBack} handleNext={handleNext} handleChange={handleChange} formData={formData} onClose={onClose} />}
 
      </div>
      <div className=" cursor-pointer  z-50 bg-black shadow-[0_0_15px_rgba(136,232,255,0.4)] rounded-lg justify-center items-center p-4  h-16" onClick={onClose}>
          <span className="text-white hover:text-Primary-700  font-bold text-2xl">X</span>
        </div>

    </div>
  );
};

export default FormController;
