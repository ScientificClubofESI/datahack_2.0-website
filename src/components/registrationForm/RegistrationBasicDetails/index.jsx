import React, { useState, useEffect } from 'react';

const RegistrationBasicDetails = ({ handleNext, handleBack , handleChange ,formData }) => {
  const [errors, setErrors] = useState({
    firstName: false,
    lastName: false,
    email: false,
    phoneNumber: false
  });
  const [showErrors, setShowErrors] = useState(false);
  

  const [isFormValid, setIsFormValid] = useState(false);
  const isFormComplete = () => {
    return formData.firstName.trim() !== '' &&
      formData.lastName.trim() !== '' &&
      formData.email.trim() !== ''&&
      formData.phoneNumber.trim() !== '';
  };
  
  useEffect(() => {
    const isValid = formData.firstName.trim() !== '' &&
                   formData.lastName.trim() !== '' &&
                   formData.email.trim() !== '' &&
                   formData.phoneNumber!== '';  // Added phoneNumber validation
    setIsFormValid(isValid);
  }, [formData]);

  const validateForm = () => {
    let newErrors = {};
  
    if (!formData.firstName.trim()) {
      newErrors.firstName = "Please enter your first name";
    }else if (!/^[a-zA-Z]+$/.test(formData.firstName)) {
      newErrors.firstName = "First name should only contain letters";
    }
  
    if (!formData.lastName.trim()) {
      newErrors.lastName = "Please enter your last name";
    }
    else if (!/^[a-zA-Z]+$/.test(formData.lastName)) {
      newErrors.lastName = "Last name should only contain letters";
    }
  
    if (!formData.phoneNumber.trim()) {
      newErrors.phoneNumber = "Please enter your phone number";
    }else if (!/^\d+$/.test(formData.phoneNumber)) {
      newErrors.phoneNumber = "Phone number should only contain digits";
    }
  
    if (!formData.email.trim()) {
      newErrors.email = "Please enter your email";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email (example@gmail.com)";
    }
  
    setErrors(newErrors);
    setShowErrors(true);
  
    return Object.keys(newErrors).length === 0; // Returns false if errors exist
  };
  

  const handleValidation = () => {
    const newErrors = {
      firstName: formData.firstName.trim() === '',
      lastName: formData.lastName.trim() === '',
      email: formData.email.trim() === '',
      phoneNumber: formData.phoneNumber=== ''  // Fixed phoneNumber validation
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
              {showErrors && errors.firstName && (
                                <span className="text-red-500 text-xs">{errors.firstName}</span>
          )}
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
              {showErrors && errors.lastName && (
                                <span className="text-red-500 text-xs">{errors.lastName}</span>
          )}
   
        </div>

<div className='w-full h-[72px] gap-2 flex flex-col max-sm:gap-1'>
          <label className='h-[24px] text-white font-aspekta max-sm:text-sm max-sm:mb-1'>
            Email <span className='text-red-500'>*</span>
          </label>
          <input
            className={`w-full h-[40px] rounded-md border p-4 font-aspekta ${showErrors && errors.email ? 'border-red-500' : 'border-gray-100'}
            max-sm:h-12 text-black max-sm:focus:border-violet-500 max-sm:focus:ring-1 max-sm:focus:ring-violet-500 max-sm:transition-colors`}
            type='email'
            name='email'
            value={formData.email}
            onChange={handleChange}
            placeholder='example@gmail.com'
          />
       {showErrors && errors.email && (
                                <span className="text-red-500 text-xs">{errors.email}</span>
          )}
        </div>

      

        <div className='w-full h-[72px] gap-2 flex flex-col max-sm:gap-1'>
          <label className='h-[24px] text-white font-aspekta max-sm:text-sm max-sm:mb-1'>
            phoneNumber Number <span className='text-red-500'>*</span>
          </label>
          <input
            className={`w-full h-[40px] rounded-md border p-4 font-aspekta ${errors.phoneNumber ? 'border-red-500' : 'border-gray-100'}
            max-sm:h-12 text-black max-sm:focus:border-violet-500 max-sm:focus:ring-1 max-sm:focus:ring-violet-500 max-sm:transition-colors`}
            type='text'
            name='phoneNumber'
            value={formData.phoneNumber}
            onChange={handleChange}
            placeholder='+213 xxxxxxx'
          />
              {showErrors && errors.phoneNumber && (
                                <span className="text-red-500 text-xs">{errors.phoneNumber}</span>
          )}
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