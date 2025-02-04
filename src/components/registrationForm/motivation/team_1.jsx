import React from 'react';
import { useState, useEffect } from 'react';

export default function Team({ handleNext, handleBack }) {
  const [hasTeam, setHasTeam] = useState(true); 
  const [joinTeam, setjoinTeam] = useState(true); 
  const [chaine, setChaine] = useState('code'); 

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
      </div>
    );
  }
  