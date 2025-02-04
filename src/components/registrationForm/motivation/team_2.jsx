
export default function Team() {
    return (
      <div className="w-full bg-transparent fixed top-0 left-0 p-8">
        <div className="flex flex-col items-start p-6 w-full max-w-3xl mx-auto">
          <div className="flex space-x-4 mb-8">
            <label className="text-white text-xl mb-4">
              Do you have a team? 
              <span className="text-red-500">*</span>
            </label>
            <button className="px-5 py-1 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 hover:bg-gray-600">
              YES
            </button>
            <button className="px-5 py-1 bg-blue-500 text-white rounded focus:outline-none focus:ring-2 focus:ring-blue-700 hover:bg-blue-400">
              NO
            </button>
          </div>

     
        </div>
      </div>
    );
  }
  