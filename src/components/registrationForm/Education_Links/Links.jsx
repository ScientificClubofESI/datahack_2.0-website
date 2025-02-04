import React, { useState } from "react";
import { Upload } from "lucide-react";

const degrees = ["cp1/l1", "cp2/l2", "cs1/l3"];

const Links = ({ handleNext, handleBack }) => {
  const validateFile = (file) => {
    const validTypes = ["application/pdf", "application/msword", "application/vnd.openxmlformats-officedocument.wordprocessingml.document"];
    if (!file) {
      return "Please upload your CV";
    }
    if (!validTypes.includes(file.type)) {
      return "File type must be PDF or DOC/DOCX";
    }
    if (file.size > 10 * 1024 * 1024) {
      return "File size must be less than 10MB";
    }
    return "";
  };

  const [formData, setFormData] = useState({
    CV: "",
    Github: "",
    Kaggle: "",
    LinkedIn: "",
    cv: null,
  });

  const [errors, setErrors] = useState({});
  const [showErrors, setShowErrors] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: "",
    }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const fileError = validateFile(file);
      if (fileError) {
        setErrors((prevErrors) => ({
          ...prevErrors,
          cv: fileError,
        }));
        setShowErrors(true);
        return;
      }
      setFormData((prevState) => ({
        ...prevState,
        cv: file,
      }));
      setErrors((prevErrors) => ({
        ...prevErrors,
        cv: "",
      }));
    }
  };

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
      formData.cv !== null && // Ensure the CV is uploaded
      errors.cv === "" // Ensure there are no file errors
    );
  };

return (
    <div className=" bg-background-Dark min-h-screen text-white">
      
        <form className="max-w-5xl mx-auto md:pt-8 md:px-4">
            <div className="absolute w-1/2 md:w-5/12 h-1 bg-gradient-to-r from-[#6F06C1] via-[#4EA4F9] to-[#36D9FF] mt-0 z-10"></div>
            <div className="absolute z-10 mt-3 flex gap-14 mb-12 flex-center ml-8">
                <span className="hidden md:flex text-[#530490]">Basic Details</span>
                <span className="text-[#530490] hidden md:flex">Skills & Interests</span>
                <span className="text-[#530490] hidden md:flex">Education</span>
                <span className="text-xl bg-gradient-to-r from-[#6F06C1] via-[#4EA4F9] to-[#36D9FF] bg-clip-text text-transparent">
                    Links
                </span>
            </div>
            <div className="bg-black min-w-full px-5 md:px-28 pb-12 md:pb-20 pt-24">
                <div className="space-y-6">
                <label className="block text-md ">
                    CV <span className="text-red-500">*</span>
                    </label>
                    <div className="text-gray-400 text-sm mb-2">
                        Upload 1 compatible file: PDF or document. 10 MB max.
                    </div>

                    <div className="relative">
                        <input
                            type="file"
                            accept=".pdf,.doc,.docx"
                            name="cv"
                            onChange={handleFileChange}
                            className="hidden"
                            id="cv-upload"
                        />
                        <label
                            htmlFor="cv-upload"
                            className="w-44  flex items-center justify-center text-black bg-white hover:bg-gray-100 border border-gray-300 p-3 rounded cursor-pointer transition-colors"
                        > 
                            <Upload className="w-5 h-5 mr-2 text-[#075985]" />
                            <span className="truncate overflow-hidden  text-ellipsistext-[#075985]">
                                {formData.cv ? formData.cv.name : "Add a file"}
                            </span>
                        </label>
                    </div>
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
        </form>
    </div>
);
};

export default Links;
