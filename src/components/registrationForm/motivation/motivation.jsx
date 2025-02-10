import React from 'react';
import { useState, useEffect } from 'react';

export default function InputFrame({ handleNext, handleBack,handleChange, formData }) {
  const [showErrors, setShowErrors] = useState(false);



  const [errors, setErrors] = useState({
    hearAboutUs:false,
    motivation: false,
  });

  const validateForm = () => {
    let newErrors = {};

    // Validate heard
    if (!formData.hearAboutUs) {
      newErrors.hearAboutUs = "Please enter your response";
    }

    // Validate motivation
    if (!formData.motivation) {
      newErrors.motivation = "Please enter your motivation";
    }

    setErrors(newErrors);
    setShowErrors(true);
    return Object.keys(newErrors).length === 0;
  };


  const isFormComplete = () => {
    // Check if all required fields are filled
    return (
      formData.hearAboutUs !== "" &&
      formData.motivation !== ""
    );
  };

  return (
    <div className="bg-background-Dark w-full h-full  justify-between flex flex-col  md:text-base  text-sm    ">
      <div className="flex flex-col items-start w-full space-y-5">
        <label className="text-white  space-y-1 ">
          How did you hear about DATAHACK? 
          <span className="text-red-500"> *</span>
        </label>
        <input
          type="text"
          id="info1"
          name="hearAboutUs"
          onChange={handleChange}
          value={formData.hearAboutUs}
          placeholder="Your answer here..."
          className=" text-black w-full  p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        />

        <label className="text-white  ">
          What motivates you the most to participate in DATAHACK ? 
          <span className="text-red-500"> *</span>
        </label>
        <textarea
          className=" text-black w-full h-28 px-6 py-3  border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          onChange={handleChange}
          id="info2"
          name="motivation"
          type="text"
          value={formData.motivation}
          placeholder="Your answer here..."
        ></textarea>
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
 <span className='hidden md:flex'>Next</span>
 <span className=" text-sm">➜</span>
 </div>
</button>
 </div>
    </div>
  );
}