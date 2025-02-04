import React from 'react';
export default function InputFrame() {
    return (
      <div className="w-full bg-transparent fixed top-0 left-0 p-8">
        <div className="flex flex-col items-start p-6 w-full max-w-3xl mx-auto">
          
          <label className="text-white text-xl mb-4">
            How did you hear about DATAHACK? 
            <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="info1"
            placeholder="Your answer here..."
            className="w-full h-12 px-6 py-3 mb-8 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
  
          <label className="text-white text-xl mb-4">
            What motivates you the most to participate in DATAHACK? 
            <span className="text-red-500">*</span>
          </label>
          <textarea
            id="info2"
            placeholder="Your answer here..."
            className="w-full h-28 px-6 py-3 mb-8 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          ></textarea>
        </div>
      </div>
    );
  }
  