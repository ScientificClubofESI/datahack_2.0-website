import React, { useState, useEffect } from 'react';

const RegistrationBasicDetails = ({ handleNext, handleBack , handleChange ,formData }) => {



  const [errors, setErrors] = useState({
    firstName: false,
    lastName: false,
    email: false,
    phone: false
  });
  const [showErrors, setShowErrors] = useState(false);
  

  const [isFormValid, setIsFormValid] = useState(false);
  const isFormComplete = () => {
    return formData.firstName.trim() !== '' &&
    formData.lastName.trim() !== '' &&
    formData.email.trim() !== '' &&
    formData.phone.trim() !== '';
};
  useEffect(() => {
    const isValid = formData.firstName.trim() !== '' &&
                   formData.lastName.trim() !== '' &&
                   formData.email.trim() !== '' &&
                   formData.phone.trim() !== '';  // Added phone validation
    setIsFormValid(isValid);
  }, [formData]);
  const validateForm = () => {
    let newErrors = {};

    // Validate firstName
    if (!formData.firstName) {
      newErrors.firstName = "Please enter your first Name";
    }

    // Validate major
    if (!formData.lastName) {
      newErrors.lastName = "Please enter your Last name";
    }

    // Validate degree
    if (!formData.email) {
      newErrors.email = "Please enter an email";
    }

    // Validate graduation year
    if (!formData.phone) {
      newErrors.phone = "Please enter your phone number";
    } 
    setErrors(newErrors);
    setShowErrors(true);
    return Object.keys(newErrors).length === 0;
  };
 

  const handleValidation = () => {
    const newErrors = {
      firstName: formData.firstName.trim() === '',
      lastName: formData.lastName.trim() === '',
      email: formData.email.trim() === '',
      phone: formData.phone.trim() === ''  // Fixed phone validation
    };
    setErrors(newErrors);
  };

  return (
    <section className='bg-background-Dark h-screen w-full flex flex-col'>
      <div className='w-full h-[60px] justify-space-between flex flex-row max-sm:hidden'>
        <div className='w-full h-full relative flex justify-between items-center'>
          <div className='flex items-center'>
            <div className='w-1/6 h-[4px] bg-gradient-to-r absolute top-0 left-0 from-purple-500 to-blue-500'></div>
            <div className='flex flex-col w-60 justify-center items-center'>
              <p className='text-2xl py-3 font-bold font-aspekta text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-500'>
                Basic Details
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Header */}
      <div className='hidden max-sm:block w-full bg-background-Dark'>
        <div className='w-full h-full relative'>
          <div className='w-1/6 h-[4px] bg-gradient-to-r absolute top-0 left-0 from-purple-500 to-blue-300'></div>
          <div className='flex justify-between items-center px-4 py-5'>
            <p className='text-violet-500 text-lg font-medium'>
              Basic Details
            </p>
            <button className='text-white text-2xl'>&times;</button>
          </div>
        </div>
      </div>

      {/* Form Container */}
      <div className='w-full h-[500px] p-48 gap-8 flex flex-col justify-center items-center max-sm:p-4 max-sm:pt-10 max-sm:h-auto'>
        <div className='w-full h-[72px] gap-2 flex flex-col max-sm:gap-1'>
          <label className='h-[24px] text-white font-aspekta max-sm:text-sm max-sm:mb-1'>
            First name <span className='text-red-500'>*</span>
          </label>
          <input
            className={`w-full h-[40px] rounded-md border p-4 font-aspekta ${errors.firstName ? 'border-red-500' : 'border-gray-100'}
            max-sm:h-12 text-black max-sm:focus:border-violet-500 max-sm:focus:ring-1 max-sm:focus:ring-violet-500 max-sm:transition-colors`}
            type='text'
            name='firstName'
            value={formData.firstName}
            onChange={handleChange}
            placeholder='Your First name'
          />
        </div>

        <div className='w-full h-[72px] gap-2 flex flex-col max-sm:gap-1'>
          <label className='h-[24px] text-white font-aspekta max-sm:text-sm max-sm:mb-1'>
            Last name <span className='text-red-500'>*</span>
          </label>
          <input
            className={`w-full h-[40px] rounded-md border p-4 font-aspekta ${errors.lastName ? 'border-red-500' : 'border-gray-100'}
            max-sm:h-12 text-black max-sm:focus:border-violet-500 max-sm:focus:ring-1 max-sm:focus:ring-violet-500 max-sm:transition-colors`}
            type='text'
            name='lastName'
            value={formData.lastName}
            onChange={handleChange}
            placeholder='Your Last name'
          />
        </div>

        <div className='w-full h-[72px] gap-2 flex flex-col max-sm:gap-1'>
          <label className='h-[24px] text-white font-aspekta max-sm:text-sm max-sm:mb-1'>
            Email <span className='text-red-500'>*</span>
          </label>
          <input
            className={`w-full h-[40px] rounded-md border p-4 font-aspekta ${errors.email ? 'border-red-500' : 'border-gray-100'}
            max-sm:h-12 text-black max-sm:focus:border-violet-500 max-sm:focus:ring-1 max-sm:focus:ring-violet-500 max-sm:transition-colors`}
            type='email'
            name='email'
            value={formData.email}
            onChange={handleChange}
            placeholder='example@gmail.com'
          />
        </div>

        <div className='w-full h-[72px] gap-2 flex flex-col max-sm:gap-1'>
          <label className='h-[24px] text-white font-aspekta max-sm:text-sm max-sm:mb-1'>
            Phone Number <span className='text-red-500'>*</span>
          </label>
          <input
            className={`w-full h-[40px] rounded-md border p-4 font-aspekta ${errors.phone ? 'border-red-500' : 'border-gray-100'}
            max-sm:h-12 text-black max-sm:focus:border-violet-500 max-sm:focus:ring-1 max-sm:focus:ring-violet-500 max-sm:transition-colors`}
            type='text'
            name='phone'
            value={formData.phone}
            onChange={handleChange}
            placeholder='+213 xxxxxxx'
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
}

export default RegistrationBasicDetails;