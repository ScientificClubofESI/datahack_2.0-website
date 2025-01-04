import React, { useState } from 'react';

const universities = [
    'University of Example',
    'Sample State University',
    'Tech Institute',
];

const degrees = [
    'cp1/l1',
    'cp2/l2',
    'cs1/l3',
];

const Education = () => {
    const [formData, setFormData] = useState({
        university: '',
        major: '',
        degree: '',
        graduationYear: ''
    });

    const [errors, setErrors] = useState({});
    const [showErrors, setShowErrors] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
        setErrors(prevErrors => ({
            ...prevErrors,
            [name]: ''
        }));
    };

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

    const handleNext = () => {
        if (validateForm()) {
            console.log('Form is valid, proceeding to next step');
            // Ajoutez ici la logique pour passer à l'étape suivante
        }
    };

    const isFormComplete = () => {
        return formData.university !== '' && formData.major !== '' && formData.degree !== '' && formData.graduationYear !== '';
    };

    return ( 
        <div className="bg-white min-h-screen text-white">
             <div className='bg-black h-10 w-10  justify-center flex items-center  absolute mt-2 md:mt-8 right-3 md:right-32  cursor-pointer p-4'> 
                <span className='text-white text-xl w-9   '>X</span>
             </div>
            <form className="max-w-5xl mx-auto md:pt-8 md:px-4">
               
                <div className=' absolute w-1/2 md:w-1/3 h-1 bg-gradient-to-r from-[#6F06C1] via-[#4EA4F9] to-[#36D9FF] mt-0 z-10'></div>
                <div className=" absolute z-10 mt-3  flex gap-14 mb-12 flex-center ml-8">
                        <span className=" hidden md:flex text-[#530490]">Basic Details</span>
                        <span className="text-[#530490]  hidden md:flex ">Skills & Interests</span>
                        <span className=" text-xl bg-gradient-to-r from-[#6F06C1] via-[#4EA4F9] to-[#36D9FF] bg-clip-text text-transparent">
                            Education
                        </span>
                    </div>
                <div className="bg-black min-w-full px-5 md:px-28 pb-12 md:pb-20 pt-24">
                   

                    <div className="space-y-6">
                        <div className="space-y-2">
                            <label className="block text-sm">
                                University <span className="text-red-500">*</span>
                            </label>
                            <select 
                                name="university"
                                value={formData.university}
                                onChange={handleChange}
                                className={`w-full p-2 rounded bg-white border ${showErrors && errors.university ? 'border-red-500' : 'border-gray-700'} text-black`}
                            >
                                <option value="">Select an option</option>
                                {universities.map((uni, index) => (
                                    <option key={index} value={uni}>{uni}</option>
                                ))}
                            </select>
                            {showErrors && errors.university && (
                                <span className="text-red-500 text-xs">{errors.university}</span>
                            )}
                        </div>

                        <div className="space-y-2">
                            <label className="block text-sm">
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
                            <label className="block text-sm">
                                Degree <span className="text-red-500">*</span>
                            </label>
                            <select 
                                name="degree"
                                value={formData.degree}
                                onChange={handleChange}
                                className={`w-full p-2 rounded bg-white border ${showErrors && errors.degree ? 'border-red-500' : 'border-gray-700'} text-black`}
                            >
                                <option value="">Select an option</option>
                                {degrees.map((unii, indexx) => (
                                    <option key={indexx} value={unii}>{unii}</option>
                                ))}
                            </select>
                        
                            {showErrors && errors.degree && (
                                <span className="text-red-500 text-xs">{errors.degree}</span>
                            )}
                        </div>

                        <div className="space-y-2">
                            <label className="block text-sm">
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

                <div className="flex justify-between pt-12 md:pt-0 md:mt-5 bg-black md:bg-white ">
                    <button 
                        type="button" 
                        className="bg-purple-700 text-white px-6 py-2 rounded flex items-center ml-7 md:ml-0  w-16 h-7"
                    >
                        <span className="mr-2 text-xl rotate-[180deg] mt-2">➜</span> 
                    </button>
                    <button 
                        type="button"
                        onClick={handleNext}
                        disabled={!isFormComplete()}
                        className={ `  bg-purple-700 text-white flex  px-6 py-2 rounded  items-center justify-center h-7 w-16 md:w-44 ${!isFormComplete() ? 'opacity-50 cursor-not-allowed' : ''} mb-24 mr-7 md:mr-0 `}
                    >    <span className='hidden md:flex' >Next</span>
                         <span className="ml-2 text-xl   ">➜</span>
                    </button>
                   
                </div>
            </form>
        </div>
    );
};

export default Education;