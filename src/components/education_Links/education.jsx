import React, { useState } from 'react';
const Education = ({ handleNext, handleBack,handleChange,formData }) => {


    const [errors, setErrors] = useState({});
    const [showErrors, setShowErrors] = useState(false);

  

    const validateForm = () => {
        let newErrors = {};

        // Vérifier université
        if (!formData.university) {
            newErrors.university = 'Please select a university';
        }

        // Vérifier major
        if (!formData.major) {
            newErrors.major = 'Please enter your major';
        }

        // Vérifier degree
        if (!formData.degree) {
            newErrors.degree = 'Please select your degree';
        }
        
        // Vérifier graduation year
        if (!formData.graduationYear) {
            newErrors.graduationYear = 'Please enter your graduation year';
        } else if (!/^\d{4}$/.test(formData.graduationYear)) {
            newErrors.graduationYear = 'Please enter a valid year (YYYY)';
        } 

        setErrors(newErrors);
        setShowErrors(true);
        return Object.keys(newErrors).length === 0;
    };

 

    const isFormComplete = () => {
        return formData.university !== '' && formData.major !== '' && formData.degree !== '' && formData.graduationYear !== '';
    };

    return ( 
        <div className=" bg-background-Dark  md:text-base  text-sm   text-white">
            
            
            <form className="">
       
                <div className="bg-black min-w-full   ">
                   

                    <div className="space-y-6 ">
                    <div className="space-y-2">
                            <label className="block ">
                                University  <span className="text-red-500">*</span>
                            </label>
                            <input
                                type="text"
                                name="university"
                                placeholder="Enter your University"
                                value={formData.university}
                                onChange={handleChange}
                                className={`w-full p-2 rounded bg-white border ${showErrors && errors.university ? 'border-red-500' : 'border-gray-700'} text-black`}
                            />
                            {showErrors && errors.university && (
                                <span className="text-red-500 text-xs">{errors.university}</span>
                            )}
                        </div>

                        <div className="space-y-2">
                            <label className="block ">
                                University Major <span className="text-red-500">*</span>
                            </label>
                            <input
                                type="text"
                                name="major"
                                placeholder="Enter your major"
                                value={formData.major}
                                onChange={handleChange}
                                className={`w-full p-2 rounded bg-white border ${showErrors && errors.major ? 'border-red-500' : 'border-gray-700'} text-black`}
                            />
                            {showErrors && errors.major && (
                                <span className="text-red-500 text-xs">{errors.major}</span>
                            )}
                        </div>

                        <div className="space-y-2">
                            <label className="block ">
                               Degree <span className="text-red-500">*</span>
                            </label>
                            <input
                                type="text"
                                name="degree"
                                placeholder="Enter your degree"
                                value={formData.degree}
                                onChange={handleChange}
                                className={`w-full p-2 rounded bg-white border ${showErrors && errors.degree ? 'border-red-500' : 'border-gray-700'} text-black`}
                            />
                            {showErrors && errors.degree && (
                                <span className="text-red-500 text-xs">{errors.degree}</span>
                            )}
                        </div>

                        <div className="space-y-2">
                            <label className="block ">
                                Expected graduation year <span className="text-red-500">*</span>
                            </label>
                            <input
                                type="text"
                                name="graduationYear"
                                placeholder="Enter your graduation year"
                                value={formData.graduationYear}
                                onChange={handleChange}
                                className={`w-full p-2 rounded bg-white border ${showErrors && errors.graduationYear ? 'border-red-500' : 'border-gray-700'} text-black`}
                            />
                            {showErrors && errors.graduationYear && (
                                <span className="text-red-500 text-xs">{errors.graduationYear}</span>
                            )}
                        </div>
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
            </form>
        </div>
    );
};

export default Education;