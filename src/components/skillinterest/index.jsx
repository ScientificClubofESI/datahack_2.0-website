import React, { useState, useEffect } from 'react';

const SkillsInterests = () => {
  const [formData, setFormData] = useState({
    skills: '',
    hackathonsAttended: '',
    experience: ''
  });

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

  const handleValidation = () => {
    const newErrors = {
      skills: formData.skills.trim() === '',
      hackathonsAttended: formData.hackathonsAttended.trim() === ''
    };
    setErrors(newErrors);
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
          <button className='absolute right-6 top-1/2 transform -translate-y-1/2 text-white text-3xl'>&times;</button>
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
      <div className='w-full h-screen flex justify-between items-center p-14 max-sm:p-4 max-sm:h-auto'> 
         <button
          className={`mr-auto w-[104px] h-[40px] text-white rounded-md p-2 gap-4 items-center justify-center flex flex-row font-size-20px font-semibold 
          max-sm:w-12 max-sm:h-12 max-sm:rounded-xl max-sm:transition-colors bg-purple-600`}
          onClick={handleValidation}
          disabled={!isFormValid}
        >
          <img src="/images/arrow-left.png" className='w-[24px] h-[24px]' alt="previous" />
        </button>
        
        <button
          className={`ml-auto w-[198px] h-[40px] text-white rounded-md p-2 gap-4 items-center justify-center flex flex-row font-size-20px font-semibold 
          max-sm:w-12 max-sm:h-12 max-sm:rounded-xl max-sm:transition-colors ${isFormValid ? 'bg-purple-600 hover:bg-violet-700' : 'bg-tritary-900 cursor-not-allowed'}`}
          onClick={handleValidation}
          disabled={!isFormValid}
        >
          <span className="max-sm:hidden">Next</span>
          <img src="/images/arrow-right.png" className='w-[24px] h-[24px]' alt="Next" />
        </button>
       
      </div>
    </section>
  );
};

export default SkillsInterests;