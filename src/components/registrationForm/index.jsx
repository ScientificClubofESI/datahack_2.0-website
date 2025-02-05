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
    hasTeam: true,
    createTeam:true,
    teamName:"yasou",
    teamCode: " " 
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
  

  const handleSubmit = async () => {
    try {
      const response = await axios.post('http://localhost:3001/api/users', formData);
      console.log('Success:', response.data);
      alert('Registration successful!');
      onClose();
    } catch (error) {
      console.error('Error:', error.response?.data || error.message);
      alert('Error submitting form');
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto">
        <div className="absolute right-0 cursor-pointer p-4 z-50" onClick={onClose}>
          <span className="text-white font-bold text-2xl">X</span>
        </div>

        {step === 0 &&(<button onClick={handleSubmit} className="bg-blue-500 text-white px-4 py-2 rounded mt-4">
            Submit
          </button>
        )}
        {step === 1 && <SkillsInterests handleBack={handleBack} handleNext={handleNext} handleChange={handleChange} formData={formData} />}
       {step === 2 && <Education handleBack={handleBack} handleNext={handleNext} handleChange={handleChange} formData={formData} />}
        {step === 3 && <Links handleBack={handleBack} handleNext={handleNext} handleChange={handleChange} formData={formData} />}
        {step === 4 && <InputFrame handleBack={handleBack} handleNext={handleNext} handleChange={handleChange} formData={formData} />}
        {step === 5 && <Team handleBack={handleBack} handleNext={handleNext} handleChange={handleChange} formData={formData} />}
¨
        {step === 5 && (
          <button onClick={handleSubmit} className="bg-blue-500 text-white px-4 py-2 rounded mt-4">
            Submit
          </button>
        )}
      </div>
    </div>
  );
};

export default FormController;
