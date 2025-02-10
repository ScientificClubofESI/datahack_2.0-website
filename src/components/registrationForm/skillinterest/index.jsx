import React, { useState, useEffect } from 'react';

const SkillsInterests = ({ handleNext, handleBack,handleChange , formData}) => {

  const [showErrors, setShowErrors] = useState(false);

  const [errors, setErrors] = useState({
    skills: false,
    hackathonsAttended: false,
    hackathonsExperience:false
  });

  const [isFormValid, setIsFormValid] = useState(false);

  useEffect(() => {
    const isValid = formData.skills.trim() !== '' && 
                   formData.hackathonsAttended !== '';
    setIsFormValid(isValid);
  }, [formData]);

  const isFormComplete = () => {
    return formData.skills.trim() !== '' &&
    formData.hackathonsAttended !== '';
};
const validateForm = () => {
  let newErrors = {};

  // Validate skills
  if (!formData.skills) {
    newErrors.skills = "Please enter your first Name";
  }

 
  if (formData.hackathonsAttended === undefined || formData.hackathonsAttended === null) {
    newErrors.hackathonsAttended = "Please enter the number of hackathons attended";
  } else if (isNaN(formData.hackathonsAttended)) {
    newErrors.hackathonsAttended = "Number of hackathons attended must be a number";
  } else if (formData.hackathonsAttended < 0 || formData.hackathonsAttended > 100) {
    newErrors.hackathonsAttended = "Number of hackathons attended must be between 0 and 100";
  }

 
  setErrors(newErrors);
  setShowErrors(true);
  return Object.keys(newErrors).length === 0;
};



  return (
    <section className='justify-between  md:text-base  text-sm h-full  w-full flex flex-col'>


      {/* Form Container */}
      <div className='w-full     gap-8 flex flex-col justify-center items-center  max-sm:h-auto'>
        <div className='w-full gap-2 flex flex-col max-sm:gap-1 '>
          <label className='h-[24px] text-white font-aspekta  max-sm:mb-1  '>
            Skills <span className='text-red-500'>*</span>
          </label>
          <p className='text-gray-400 mb-2 pb-1'>List up to 4 skills you consider yourself proficient at.</p>
          <input
            className={`w-full rounded-md border p-2 font-aspekta 
             text-black max-sm:focus:border-violet-500 max-sm:focus:ring-1 max-sm:focus:ring-violet-500 max-sm:transition-colors ${errors.skills ? 'border-red-500' : 'border-gray-100'}`}
            type='text'
            name='skills'
            value={formData.skills}
            onChange={handleChange}
            placeholder='Enter Your Skills'
          />
           {showErrors && errors.skills && (
                                <span className="text-red-500 text-xs">{errors.skills}</span>
          )}
        </div>

        <div className='w-full gap-2 flex flex-col max-sm:gap-1'>
          <label className='h-[24px] text-white font-aspekta  max-sm:mb-1'>
            Number of hackathons attended <span className='text-red-500'>*</span>
          </label>
          <p className='text-gray-400 text-sm mb-2 pb-1'>Don't worry if this is your first hackathon; your motivation is what truly matters.</p>
          <input
            className={`w-full h-[40px] rounded-md border p-4 font-aspekta 
            max-sm:h-12 text-black max-sm:focus:border-violet-500 max-sm:focus:ring-1 max-sm:focus:ring-violet-500 
            max-sm:transition-colors ${errors.hackathonsAttended ? 'border-red-500' : 'border-gray-100'}`}
            type='number'
            min="0" max="100"
            name='hackathonsAttended'
            value={formData.hackathonsAttended}
            onChange={handleChange}
            placeholder='Enter a number'
          />
              {showErrors && errors.hackathonsAttended && (
                                <span className="text-red-500 text-xs">{errors.hackathonsAttended}</span>
          )}
        </div>

        <div className='w-full gap-2 flex flex-col max-sm:gap-1'>
          <label className='h-[24px] text-white font-aspekta  max-sm:mb-1 '>
            Tell us about your experience!
          </label>
          <p className='text-gray-400  mb-2 pb-1'>How was your hackathon experience? Did you find it meaningful?</p>
          <textarea
            className='w-full h-[120px] rounded-md border p-4 font-aspekta border-gray-100
            text-black max-sm:focus:border-violet-500 max-sm:focus:ring-1 max-sm:focus:ring-violet-500 max-sm:transition-colors'
            name='hackathonsExperience'
            value={formData.hackathonsExperience}
            onChange={handleChange}
            placeholder='Let us know about your journey'
          />
        </div>
      </div>

      <div className="flex justify-between  ">
                    <button 
                        onClick={handleBack}
                        type="button" 
                        className="bg-purple-700 px-4 text-white   rounded flex items-center justify-center  "
                    >
                        <span className=" text-sm rotate-[180deg]  flex  ">➜</span> 
                    </button>


  <button 
    type="button"
    onClick={() => {
        if (validateForm()) {
          handleNext();
        }
      }} 
    disabled={!isFormComplete()}
    className={`bg-purple-700 text-white flex px-6 py-2 rounded items-center justify-center  ${!isFormComplete() ? 'opacity-50 cursor-not-allowed' : ''} `}
>    
 <div className='flex flex-row gap-2 justify-center items-center'>
 <span className='hidden md:flex'>Next </span>
 <span className=" text-sm">➜</span>
 </div>
</button>
     </div>
    </section>
  );
};

export default SkillsInterests;