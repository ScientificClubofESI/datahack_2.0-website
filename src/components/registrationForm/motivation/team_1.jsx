import React from 'react';
import { useState, useEffect } from 'react';

export default function Team({ handleNext, handleBack }) {
  const [hasTeam, setHasTeam] = useState(true); 
  const [joinTeam, setjoinTeam] = useState(true); 
  const [chaine, setChaine] = useState('code'); 
  const [errors, setErrors] = useState({});
  const [showErrors, setShowErrors] = useState(false);

  const [formData, setFormData] = useState({
    team: "",
    join: "",
  });

 
  const validateForm = () => {
    let newErrors = {};
    
    setErrors(newErrors);
    setShowErrors(true);
    return Object.keys(newErrors).length === 0;
};



const isFormComplete = () => {
    return formData.university !== '' && formData.major !== '' && formData.degree !== '' && formData.graduationYear !== '';
};
  const handleYes = () => {
    setHasTeam(true);
  };

  const handleNo = () => {
    setHasTeam(false);
  };
  const handleJoin = () => {
    setjoinTeam(true);
    setChaine('code');
  };

  const handleNoJoin = () => {
    setjoinTeam(false);
    setChaine('name');
  };


    return (
      <div className=" bg-black  top-0  p-8">
        <div className="flex flex-col items-start p-6 w-full max-w-3xl mx-auto">
          <div className="flex md:flex-row flex-col  justify-center space-x-4 mb-8">
            <label className="text-white text-xl mb-4">
              Do you have a team? 
              <span className="text-red-500">*</span>
            </label>
             <div className='flex flex-row'>
             <button 
            onClick={handleYes}
            className="px-5 py-1 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 hover:bg-gray-600">
              YES
            </button>
            <button 
            onClick={handleNo}
            className="px-5 py-1  text-white rounded ">
              NO
            </button>
             </div>
          </div>
          {hasTeam === false && (
         <div className='flex flex-col items-start w-full max-w-3xl '>    
         <label className="text-white text-xl mb-4">
              Anything to add? 
              
            </label>
            <textarea
              id="info2"
              placeholder="Your answer here..."
              className="text-black w-full h-28 px-6 py-3 mb-8 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            ></textarea>
         </div>
      )}
               {hasTeam === true && (
         <div className='flex flex-col w-full max-w-3xl'>
            <label className="text-white text-xl mb-4">
            Do you want to join your team or create a spot for your team?
            <span className="text-red-500">*</span>
          </label>
          <div className="flex space-x-4 mb-8">
            <button 
            onClick={handleJoin}
            className="px-4 py-2 bg-gray-700 text-white rounded focus:outline-none focus:ring-2 focus:ring-blue-500 hover:bg-gray-600">
              Join Your Team
            </button>
            <button 
            onClick={handleNoJoin}
            className="px-4 py-2 bg-blue-500 text-white rounded focus:outline-none focus:ring-2 focus:ring-blue-700 hover:bg-blue-400">
              Create a Team
            </button>
          </div>
          <div>
                   <label className="text-white text-xl">
            Team {chaine}
            <span className="text-red-500">*</span>
          </label>
          <p className="text-sm text-gray-400 py-2">
            Please enter the team {chaine} that was sent to the person who created the team.
          </p>
          <input
            type="text"
            id="info1"
            placeholder="Your answer here..."
            className="w-full h-12  px-4 py-3 mb-8 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
          <label className="text-white text-xl mb-4 ">
            Anything to add? 
          </label>
          <textarea
            id="info2"
            placeholder="Your answer here..."
            className="w-full h-28 px-4 py-3 mb-8 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          ></textarea>
            </div>
         </div>
      )}
      
        </div>
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
      </div>
    );
  }
  