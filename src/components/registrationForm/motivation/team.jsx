import React, { useState, useEffect } from 'react';
import axios from 'axios';
import RegistrationComplete from '../regisrtationComplete';

export default function Team({ handleNext, handleBack, handleChange, formData, onClose, setFormData }) {
  const [hasTeam, setHasTeam] = useState(formData.hasTeam);
  const [joinTeam, setJoinTeam] = useState(!formData.createTeam);
  const [chaine, setChaine] = useState(joinTeam ? 'teamCode' : 'teamName');
  const [errors, setErrors] = useState({});
  const [showErrors, setShowErrors] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [completed, setCompleted] = useState(false);
  const [teamName , setTeamName] = useState('');
  const [teamCode , setTeamCode] = useState('');


  useEffect(() => {
    handleChange({
      target: {
        name: 'hasTeam',
        value: hasTeam
      }
    });
  
    handleChange({
      target: {
        name: 'createTeam',
        value: !joinTeam
      }
    });
  
    handleChange({
      target: {
        name: 'teamName',
        value: !joinTeam ? formData.teamName : ''
      }
    });
  
    handleChange({
      target: {
        name: 'teamCode',
        value: joinTeam ? formData.teamCode : ''
      }
    });
  
  }, [hasTeam, joinTeam]); // Dépendances du useEffect
  

  const validateForm = () => {
    let newErrors = {};
    setErrors(newErrors);
    setShowErrors(true);
    
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async () => {
    try {
      if (isSubmitting) return;
      setIsSubmitting(true);
      setErrorMessage("");
     

      const response = await axios.post('https://datahack-form-backend.onrender.com/api/users', formData);
      
      setCompleted(true);
      setTeamName(response.data.teamName || '');
      setTeamCode(response.data.teamCode || '');

    } catch (error) {
      console.error('Error:', error.response?.data || error.message);
      if (error.code === "ECONNABORTED") {
        setErrorMessage("Request timed out. Please try again.");
       }else if (error.response?.status === 400 && error.response.data.message.includes("Team not found")) {
        setErrorMessage("Team code does not exist. Please enter a valid code.");
       }
        else {
        setErrorMessage(error.response?.data?.message || "An error occurred. Please try again.");
       }
    }
    finally {
      setIsSubmitting(false); // Re-enable button in case of failure
    }
  };

  const isFormComplete = () => {
    // Check if all required fields are filled
   
      if (hasTeam) {
        return formData.teamCode !== '' || formData.teamName !== '';
       }
       else{
        return true;
       }
    
  };
  const handleJoinTeam = () => {
    setJoinTeam(true);
    setChaine('teamCode');
  };
  const handleCreateTeam = () => {
    setJoinTeam(false);
    setChaine('teamName');
  }

  return completed ? (
    
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 ">

      <div className="relative w-full max-w-4xl overflow-y-auto">
        <div className="absolute right-0 cursor-pointer p-4 z-50" onClick={onClose}>
          <span className="text-white font-bold text-2xl">X</span>
        </div>
        <RegistrationComplete hasTeam={hasTeam} teamName={teamName} teamCode={teamCode} />
        <div>
          
        </div>
      </div>
    </div>
  ) : (
    <>
    <Popup message={errorMessage} type="error" onClose={() => setErrorMessage("")} />
    <div className="bg-black top-0 p-8 md:text-lg text-sm">
      <div className="flex flex-col items-start  w-full max-w-3xl mx-auto">
        <div className="flex md:flex-row flex-col justify-center gap-2 h-10 mb-8 ">
          <label className="text-white  ">
            Do you have a team?
            <span className="text-red-500"> * </span>
          </label>
          <div className='flex flex-row md:text-base  text-sm gap-4'>
            <button
              onClick={() => setHasTeam(true)}
              className={`py-1 px-5  ${hasTeam? "bg-white" : " bg-neutral-900"} ${hasTeam ? "text-Primary-800" : " text-neutral-600"} rounded-md ${hasTeam ? 'ring-2  ring-Primary-800 ' : ''}`}>
              YES
            </button>
            <button
              onClick={() => setHasTeam(false)}
              className={`px-5 py-2 ${!hasTeam? "bg-white" : " bg-neutral-900"} ${!hasTeam ? "text-Primary-800" : " text-neutral-600"} rounded-md ${!hasTeam ? 'ring-2  ring-Primary-800 ' : ''}`}>
              NO
            </button>
          </div>
        </div>

        {hasTeam && (
          <div className='flex flex-col   w-full max-w-3xl'>
            <label className="text-white  mb-4">
              Do you want to join your team or create a spot for your team?
              <span className="text-red-500">*</span>
            </label>
            <div className="flex space-x-4 mb-8 h-10 md:text-base text-sm">
              <button
                onClick={() => handleJoinTeam()}
                className={`  px-3 ${joinTeam? "bg-white" : " bg-neutral-900"} ${joinTeam ? "text-Primary-800" : " text-neutral-600"} rounded-md ${joinTeam ? 'ring-2  ring-Primary-800 ' : ''}`}>
                Join Your Team
              </button>
              <button
                onClick={() => handleCreateTeam()}
                className={` py-1  px-3 ${!joinTeam? "bg-white" : " bg-neutral-900"} ${!joinTeam ? "text-Primary-800" : " text-neutral-600"} rounded-md ${!joinTeam ? 'ring-2  ring-Primary-800 ' : ''}`}>
                Create a Team
              </button>
            </div>
            <div>
              <label className="text-white ">
                {chaine}
                <span className="text-red-500">*</span>
              </label>
              <p className="text-sm text-gray-400 py-2">
                Please enter the {chaine} that was sent to the person who created the team.
              </p>
              <input
                type="text"
                name={joinTeam ? "teamCode" : "teamName"}
                value={joinTeam ? formData.teamCode : formData.teamName}
                onChange={handleChange}
                placeholder="Your answer here..."
                className="w-full h-12 px-4 py-3 text-black mb-8 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
        )}
       
          <div className='flex flex-col w-full max-w-3xl'>
         
         <label className="text-white  mb-4">
          Anything to add ? 
       
        </label>
        <textarea
          className=" text-black w-full h-28 px-6 py-3 mb-8 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          onChange={handleChange}
          
          name="comment"
          type="text"
          value={formData.comment}
          placeholder="Your answer here..."
        ></textarea>
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
          handleSubmit();
        }
      }} 
    disabled={!isFormComplete()}
    className={`bg-purple-700 text-white flex px-6 py-2 rounded items-center justify-center  ${!isFormComplete() ? 'opacity-50 cursor-not-allowed' : ''} `}
>    
 <div className='flex flex-row gap-2 justify-center items-center'>
 <span className='hidden md:flex'> {isSubmitting ? 'Submitting...' : 'Submit'} </span>

 </div>
</button>
 </div>
    </div>
    </>
   
  );
}

const Popup = ({ message, type, onClose }) => {
  if (!message) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className={`bg-white p-6 rounded-lg shadow-lg max-w-sm text-center border ${type === 'error' ? 'border-red-500' : 'border-green-500'}`}>
        <h2 className={`text-xl font-semibold ${type === 'error' ? 'text-red-600' : 'text-green-600'}`}>
          {type === 'error' ? 'Error' : 'Success'}
        </h2>
        <p className="text-gray-700 mt-2">{message}</p>
        <button onClick={onClose} className={`mt-4 px-4 py-2 rounded-md text-white ${type === 'error' ? 'bg-red-500' : 'bg-green-500'}`}>
          Close
        </button>
      </div>
    </div>
  );
};
