import React, { useState } from 'react';

const RegistrationBasicDetails = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: ''
  });

  const [errors, setErrors] = useState({
    firstName: false,
    lastName: false,
    email: false,
    phone: false
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    if (name !== 'phone' && value.trim() === '') {
      setErrors({ ...errors, [name]: true });
    } else {
      setErrors({ ...errors, [name]: false });
    }
  };

  const handleValidation = () => {
    const newErrors = {
      firstName: formData.firstName.trim() === '',
      lastName: formData.lastName.trim() === '',
      email: formData.email.trim() === '',
      phone: false // No validation for phone
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
          <button className='text-white text-3xl mr-6'>&times;</button>
        </div>
      </div>

      {/* Mobile Header */}
      <div className='hidden max-sm:block w-full bg-[#111111]'>
        <div className='w-full h-full relative'>
          <div className='w-1/6 h-[4px] bg-gradient-to-r absolute top-0 left-0 from-purple-500 to-blue-300'></div>
          <div className='flex justify-between items-center px-4 py-5 border-b border-[#2a2a2a]'>
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
            max-sm:h-12 max-sm:text-white max-sm:focus:border-violet-500 max-sm:focus:ring-1 max-sm:focus:ring-violet-500 max-sm:transition-colors`}
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
            max-sm:h-12 max-sm:text-white max-sm:focus:border-violet-500 max-sm:focus:ring-1 max-sm:focus:ring-violet-500 max-sm:transition-colors`}
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
            max-sm:h-12 max-sm:text-white max-sm:focus:border-violet-500 max-sm:focus:ring-1 max-sm:focus:ring-violet-500 max-sm:transition-colors`}
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
            className={`w-full h-[40px] rounded-md border p-4 font-aspekta border-gray-100
            max-sm:h-12 max-sm:text-white max-sm:focus:border-violet-500 max-sm:focus:ring-1 max-sm:focus:ring-violet-500 max-sm:transition-colors`}
            type='text'
            name='phone'
            value={formData.phone}
            onChange={handleChange}
            placeholder='+213 xxxxxxx'
          />
        </div>
      </div>

      {/* Button Container */}
      <div className='w-full h-screen flex justify-between items-center p-14 max-sm:p-4 max-sm:h-auto'> 
        <button
          className='ml-auto w-[198px] h-[40px] bg-purple-600 text-white rounded-md p-2 gap-4 items-center justify-center flex flex-row font-size-20px font-semibold 
          max-sm:w-12 max-sm:h-12 max-sm:bg-violet-600 max-sm:rounded-xl max-sm:hover:bg-violet-700 max-sm:transition-colors'
          onClick={handleValidation}
        >
          <span className="max-sm:hidden">Next</span>
          <img src="/images/arrow-right.png" className='w-[24px] h-[24px]' alt="Next" />
        </button>
      </div>
    </section>
  );
}

export default RegistrationBasicDetails;