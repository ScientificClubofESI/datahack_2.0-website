import React, { useState, useEffect } from 'react';
import axios from 'axios';
import RegistrationComplete from '../regisrtationComplete';

export default function Team({ handleNext, handleBack, handleChange, formData, onClose, setFormData }) {
  const [hasTeam, setHasTeam] = useState(formData.hasTeam);
  const [joinTeam, setJoinTeam] = useState(!formData.createTeam);
  const [chaine, setChaine] = useState(joinTeam ? 'teamCode' : 'teamName');
  const [errors, setErrors] = useState({});
  const [showErrors, setShowErrors] = useState(false);
  const [completed, setCompleted] = useState(false);


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
      await axios.post('http://localhost:3001/api/users', formData);
      setCompleted(true);
    } catch (error) {
      console.error('Error:', error.response?.data || error.message);
    }
  };

  const isFormComplete = () => {
    return formData.university !== '' && formData.major !== '' && formData.degree !== '' && formData.graduationYear !== '';
  };

  return completed ? (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto">
        <div className="absolute right-0 cursor-pointer p-4 z-50" onClick={onClose}>
          <span className="text-white font-bold text-2xl">X</span>
        </div>
        <RegistrationComplete hasTeam={hasTeam} teamName={formData.teamName} teamCode={formData.teamCode} />
      </div>
    </div>
  ) : (
    <div className="bg-black top-0 p-8">
      <div className="flex flex-col items-start p-6 w-full max-w-3xl mx-auto">
        <div className="flex md:flex-row flex-col justify-center space-x-4 mb-8">
          <label className="text-white text-xl mb-4">
            Do you have a team?
            <span className="text-red-500">*</span>
          </label>
          <div className='flex flex-row'>
            <button
              onClick={() => setHasTeam(true)}
              className={`px-5 py-1 bg-gray-700 text-white rounded-md ${hasTeam ? 'ring-2 ring-blue-500' : ''}`}>
              YES
            </button>
            <button
              onClick={() => setHasTeam(false)}
              className={`px-5 py-1 text-white rounded-md ${!hasTeam ? 'ring-2 ring-blue-500' : ''}`}>
              NO
            </button>
          </div>
        </div>

        {hasTeam && (
          <div className='flex flex-col w-full max-w-3xl'>
            <label className="text-white text-xl mb-4">
              Do you want to join your team or create a spot for your team?
              <span className="text-red-500">*</span>
            </label>
            <div className="flex space-x-4 mb-8">
              <button
                onClick={() => setJoinTeam(true)}
                className={`px-4 py-2 bg-gray-700 text-white rounded ${joinTeam ? 'ring-2 ring-blue-500' : ''}`}>
                Join Your Team
              </button>
              <button
                onClick={() => setJoinTeam(false)}
                className={`px-4 py-2 bg-blue-500 text-white rounded ${!joinTeam ? 'ring-2 ring-blue-700' : ''}`}>
                Create a Team
              </button>
            </div>
            <div>
              <label className="text-white text-xl">
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
                className="w-full h-12 px-4 py-3 mb-8 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
        )}

      </div>
      <div className="flex justify-between pt-12 md:pt-0 md:mt-5 bg-black">
        <button
          onClick={handleBack}
          type="button"
          className="bg-purple-700 text-white px-6 py-2 rounded flex items-center justify-center ml-7 md:ml-0 w-16 h-7">
          <span className="mr-2 text-sm rotate-[180deg] mt-2 flex">➜</span>
        </button>

        <button
          type="button"
          onClick={() => {
            if (validateForm()) {
              handleSubmit();
            }
          }}
          disabled={!isFormComplete()}
          className={`bg-purple-700 text-white flex px-6 py-2 rounded items-center justify-center h-7 w-16 md:w-44 ${!isFormComplete() ? 'opacity-50 cursor-not-allowed' : ''} mb-24 mr-7 md:mr-0`}
        >
          <span className='hidden md:flex'>Submit</span>
        </button>
      </div>
    </div>
  );
}
