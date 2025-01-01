const BlueBox = ({ onClick }) => {
  return (
    <div 
      className="absolute top-0 left-0 w-full h-full bg-blue-500/20 backdrop-blur-sm z-10 flex items-center justify-center cursor-pointer"
      onClick={onClick}
    >
      <div className="bg-blue-600 p-8 rounded-lg shadow-xl">
        <h3 className="text-white text-2xl font-bold mb-4">Welcome to CSE</h3>
        <p className="text-blue-100">Click anywhere to continue</p>
      </div>
    </div>
  );
};

export default BlueBox;
