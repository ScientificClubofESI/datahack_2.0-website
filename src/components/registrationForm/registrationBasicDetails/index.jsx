import NavBar from '@/components/navbar';
import React, { useState, useEffect } from 'react';
import Navbar_popup from '../navbar_popup';

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
    <section className='bg-background-Dark  w-full flex flex-col'>
    
    

      {/* Form Container */}
      <div className='w-full   gap-8     md:text-base  text-sm flex flex-col justify-center items-center  '>
        <div className='w-full gap-2 flex flex-col max-sm:gap-1'>
          <label className=' text-white font-aspekta  '>
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
            phone Number <span className='text-red-500'>*</span>
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
}

export default RegistrationBasicDetails;