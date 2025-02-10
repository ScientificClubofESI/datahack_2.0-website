import React, { useState } from "react";
import { Upload } from "lucide-react";

const degrees = ["cp1/l1", "cp2/l2", "cs1/l3"];

const Links = ({ handleNext, handleBack,handleChange ,formData }) => {

    


  const [errors, setErrors] = useState({});
  const [showErrors, setShowErrors] = useState(false);


  const validateForm = () => {
    let newErrors = {};

    // Validate CV
    if (!formData.cv) {
      newErrors.cv = "Please upload your CV";
    }

    // Validate major
    if (!formData.Github) {
      newErrors.Github = "Please enter your Github";
    }

    // Validate degree
    if (!formData.Kaggle) {
      newErrors.Kaggle = "Please select your Kaggle";
    }

    // Validate graduation year
    if (!formData.LinkedIn) {
      newErrors.LinkedIn = "Please enter your LinkedIn profile";
    } 
    setErrors(newErrors);
    setShowErrors(true);
    return Object.keys(newErrors).length === 0;
  };



  const isFormComplete = () => {
    // Check if all required fields are filled and the CV is uploaded correctly
    return (
      formData.Github !== "" &&
      formData.Kaggle !== "" &&
      formData.LinkedIn !== "" &&
      formData.cv !== ""// Ensure the CV is uploaded
    
    );
  };

return (
    <div className=" bg-background-Dark h-full text-white">
      
        <form className="flex h-full  flex-col justify-between">
           
            <div className="bg-black min-w-full ">
      
            <div className="space-y-2">
                    <label className="block text-md ">
                    CV <span className="text-red-500">*</span>
                    </label>
                    <input
    type="text"
    name="cv"
    placeholder="Please upload your CV"
    value={formData.cv }
    onChange={handleChange}
    className={`w-full p-2 rounded bg-white border ${
        showErrors && errors.cv ? "border-red-500" : "border-gray-700"
    } text-black`}
/>


                    {showErrors && errors.cv && (
                        <span className="text-red-500 text-xs">{errors.cv}</span>
                    )}
                </div>

                <div className="space-y-2">
                    <label className="block text-md mt-5">
                    Github <span className="text-red-500">*</span>
                    </label>
                    <input
                        type="text"
                        name="Github"
                        placeholder="Link to your github"
                        value={formData.Github}
                        onChange={handleChange}
                        className={`w-full p-2 rounded bg-white border ${
                            showErrors && errors.Github ? "border-red-500" : "border-gray-700"
                        } text-black`}
                    />
                    {showErrors && errors.Github && (
                        <span className="text-red-500 text-xs">{errors.Github}</span>
                    )}
                </div>

                <div className="space-y-2">
                    <label className="block text-md mt-5">
                    Kaggle <span className="text-red-500">*</span>
                    </label>
                    <input
                        type="text"
                        name="Kaggle"
                        placeholder="Link to your kaggle"
                        value={formData.Kaggle}
                        onChange={handleChange}
                        className={`w-full p-2 rounded bg-white border ${
                            showErrors && errors.Kaggle ? "border-red-500" : "border-gray-700"
                        } text-black`}
                    />
                    {showErrors && errors.Kaggle && (
                        <span className="text-red-500 text-xs">{errors.Kaggle}</span>
                    )}
                </div>

                <div className="space-y-2">
                    <label className="block text-md mt-5">
                    LinkedIn profile <span className="text-red-500">*</span>
                    </label>
                    <div className="text-gray-400 text-sm mb-3">
                    Let us see your LinkedIn profile!
                    </div>
                    <input
                        type="text"
                        name="LinkedIn"
                        placeholder="Link to your linkedin profile"
                        value={formData.LinkedIn}
                        onChange={handleChange}
                        className={`w-full p-2 rounded bg-white border ${
                            showErrors && errors.LinkedIn}
                                ? "border-red-500"
                                : "border-gray-700"
                        } text-black`}
                    />
                    {showErrors && errors.LinkedIn} { (
                        <span className="text-red-500 text-xs">{errors.LinkedIn}</span>
                    )}
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

export default Links;
