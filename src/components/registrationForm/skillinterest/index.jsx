import React, { useState, useEffect } from 'react';

const SkillsInterests = ({ handleNext, handleBack }) => {
  const [formData, setFormData] = useState({
    skills: '',
    hackathonsAttended: '',
    experience: ''
  });
  const [showErrors, setShowErrors] = useState(false);

  const [errors, setErrors] = useState({
    skills: false,
    hackathonsAttended: false
  });

  const [isFormValid, setIsFormValid] = useState(false);

  useEffect(() => {
    const isValid = formData.skills.trim() !== '' && 
                   formData.hackathonsAttended.trim() !== '';
    setIsFormValid(isValid);
  }, [formData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    
    if (value.trim() === '') {
      setErrors({ ...errors, [name]: true });
    } else {
      setErrors({ ...errors, [name]: false });
    }
  };
  const isFormComplete = () => {
    return formData.skills.trim() !== '' &&
    formData.hackathonsAttended.trim() !== '';
};
const validateForm = () => {
  let newErrors = {};

  // Validate firstName
  if (!formData.skills) {
    newErrors.skills = "Please enter your first Name";
  }

  // Validate major
  if (!formData.hackathonsAttended) {
    newErrors.hackathonsAttended = "Please enter your Last name";
  }

 
  setErrors(newErrors);
  setShowErrors(true);
  return Object.keys(newErrors).length === 0;
};



  return (
    <section className='bg-background-Dark h-screen w-full flex flex-col'>
      {/* Desktop Navigation */}
      <div className='w-full h-[60px] flex flex-row max-sm:hidden'>
        <div className='w-full h-full relative'>
          <div className='w-2/6 h-[4px] bg-gradient-to-r absolute top-0 left-0 from-purple-500 to-blue-500'></div>
          <div className='flex flex-row h-full'>
            <div className='flex flex-col w-60 justify-center items-center'>
              <p className='text-2xl py-3 font-bold font-aspekta text-purple-500'>
                Basic Details
              </p>
            </div>
            <div className='flex flex-col w-60 justify-center items-center'>
              <p className='text-2xl py-3 font-bold font-aspekta text-blue-500'>
                Skills & Interests
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Header */}
      <div className='hidden max-sm:block w-full bg-background-Dark'>
        <div className='w-full h-full relative'>
          <div className='w-2/6 h-[4px] bg-gradient-to-r absolute top-0 left-0 from-purple-500 to-blue-300'></div>
          <div className='flex justify-between items-center px-4 py-5 '>
            <p className='text-violet-500 text-lg font-medium'>
              Skills & Interests
            </p>
            <button className='text-white text-2xl'>&times;</button>
          </div>
        </div>
      </div>

      {/* Form Container */}
      <div className='w-full h-[500px] p-48 gap-8 flex flex-col justify-center items-center max-sm:p-4 max-sm:pt-10 max-sm:h-auto'>
        <div className='w-full gap-2 flex flex-col max-sm:gap-1 pt-5'>
          <label className='h-[24px] text-white font-aspekta max-sm:text-sm max-sm:mb-1 pt-2 '>
            Skills <span className='text-red-500'>*</span>
          </label>
          <p className='text-gray-400 text-sm mb-2 pb-1'>List up to 4 skills you consider yourself proficient at.</p>
          <input
            className={`w-full h-[40px] rounded-md border p-4 font-aspekta 
            max-sm:h-12 max-sm:text-black max-sm:focus:border-violet-500 max-sm:focus:ring-1 max-sm:focus:ring-violet-500 max-sm:transition-colors`}
            type='text'
            name='skills'
            value={formData.skills}
            onChange={handleChange}
            placeholder='Enter Your Skills'
          />
        </div>

        <div className='w-full gap-2 flex flex-col max-sm:gap-1'>
          <label className='h-[24px] text-white font-aspekta max-sm:text-sm max-sm:mb-1'>
            Number of hackathons attended <span className='text-red-500'>*</span>
          </label>
          <p className='text-gray-400 text-sm mb-2 pb-1'>Don't worry if this is your first hackathon; your motivation is what truly matters.</p>
          <input
            className={`w-full h-[40px] rounded-md border p-4 font-aspekta 
            max-sm:h-12 max-sm:text-black max-sm:focus:border-violet-500 max-sm:focus:ring-1 max-sm:focus:ring-violet-500 max-sm:transition-colors`}
            type='number'
            name='hackathonsAttended'
            value={formData.hackathonsAttended}
            onChange={handleChange}
            placeholder='Enter a number'
          />
        </div>

        <div className='w-full gap-2 flex flex-col max-sm:gap-1'>
          <label className='h-[24px] text-white font-aspekta max-sm:text-sm max-sm:mb-1 '>
            Tell us about your experience!
          </label>
          <p className='text-gray-400 text-sm mb-2 pb-1'>How was your hackathon experience? Did you find it meaningful?</p>
          <textarea
            className='w-full h-[120px] rounded-md border p-4 font-aspekta border-gray-100
            max-sm:text-black max-sm:focus:border-violet-500 max-sm:focus:ring-1 max-sm:focus:ring-violet-500 max-sm:transition-colors'
            name='experience'
            value={formData.experience}
            onChange={handleChange}
            placeholder='Let us know about your journey'
          />
        </div>
      </div>

      {/* Button Container */}
      <div className="flex justify-between pt-12 md:pt-0 md:mt-5 bg-black  ">
                    <button 
                        onClick={handleBack}
                        type="button" 
                        className="bg-purple-700 text-white px-6 py-2 rounded flex items-center justify-center ml-7 md:ml-0  w-16 h-7"
                    >
                        <span className="mr-2 text-sm rotate-[180deg] mt-2 flex  ">➜</span> 
                    </button>


  <button 
    type="button"
    onClick={() => {
        if (validateForm()) {
          handleNext();
        }
      }} 
    disabled={!isFormComplete()}
    className={`bg-purple-700 text-white flex px-6 py-2 rounded items-center justify-center h-7 w-16 md:w-44 ${!isFormComplete() ? 'opacity-50 cursor-not-allowed' : ''} mb-24 mr-7 md:mr-0`}
>    
    <span className='hidden md:flex'>Next</span>
    <span className="ml-2 text-sm">➜</span>
</button>
                   
                </div>
    </section>
  );
};

export default SkillsInterests;