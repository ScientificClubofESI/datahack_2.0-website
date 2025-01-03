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
          <label className="text-white text-xl mb-4">
            Do you want to join your team or create a spot for your team?
            <span className="text-red-500">*</span>
          </label>
          <div className="flex space-x-4 mb-8">
            <button className="px-4 py-2 bg-gray-700 text-white rounded focus:outline-none focus:ring-2 focus:ring-blue-500 hover:bg-gray-600">
              Join Your Team
            </button>
            <button className="px-4 py-2 bg-blue-500 text-white rounded focus:outline-none focus:ring-2 focus:ring-blue-700 hover:bg-blue-400">
              Creatr a Team
            </button>
          </div>
          <label className="text-white text-xl">
            Team Name
            <span className="text-red-500">*</span>
          </label>
          <p className="text-sm text-gray-400">
            Please enter the team code that was sent to the person who created the team.
          </p>
          <input
            type="text"
            id="info1"
            placeholder="Your answer here..."
            className="w-full h-12 px-6 py-3 mb-8 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
          <label className="text-white text-xl mb-4">
            Anything to add? 
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
  