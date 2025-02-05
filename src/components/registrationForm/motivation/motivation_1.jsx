import React from 'react';
import { useState, useEffect } from 'react';

export default function InputFrame({ handleNext, handleBack,handleChange, formData }) {
  const [showErrors, setShowErrors] = useState(false);



  const [errors, setErrors] = useState({
    heard: false,
    motivation: false,
  });

  const validateForm = () => {
    let newErrors = {};

    // Validate heard
    if (!formData.heard) {
      newErrors.heard = "Please enter your response";
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
      formData.heard !== "" &&
      formData.motivation !== ""
    );
  };

  return (
    <div className="bg-background-Dark w-full flex flex-col max-w-5xl mx-auto md:pt-8 md:px-4">
      <div className="flex flex-col items-start p-6 w-full max-w-3xl mx-auto">
        <label className="text-white text-xl mb-4">
          How did you hear about DATAHACK? 
          <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          id="info1"
          name="heard"
          onChange={handleChange}
          value={formData.heard}
          placeholder="Your answer here..."
          className=" text-black w-full h-12 px-6 py-3 mb-8 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        />

        <label className="text-white text-xl mb-4">
          What motivates you the most to participate in DATAHACK? 
          <span className="text-red-500">*</span>
        </label>
        <textarea
          className=" text-black w-full h-28 px-6 py-3 mb-8 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          onChange={handleChange}
          id="info2"
          name="motivation"
          type="text"
          value={formData.motivation}
          placeholder="Your answer here..."
        ></textarea>
      </div>
      <div className="flex justify-between pt-12 md:pt-0 md:mt-5 bg-background-Dark">
        <button
          type="button"
          onClick={handleBack}
          className="bg-purple-700 text-white px-6 py-2 rounded flex items-center ml-7 md:ml-0 w-16 h-7"
        >
          <span className="mr-2 text-xl rotate-[180deg] mt-2">➜</span>
        </button>
        <button
          type="button"
          onClick={() => {
            if (validateForm()) {
              handleNext();
            }
          }}
          disabled={!isFormComplete()}
          className={`bg-purple-700 text-white flex px-6 py-2 rounded items-center justify-center h-7 w-16 md:w-44 ${
            !isFormComplete() ? "opacity-50 cursor-not-allowed" : ""
          } mb-24 mr-7 md:mr-0`}
        >
          <span className="hidden md:flex">Next</span>
          <span className="ml-2 text-xl">➜</span>
        </button>
      </div>
    </div>
  );
}