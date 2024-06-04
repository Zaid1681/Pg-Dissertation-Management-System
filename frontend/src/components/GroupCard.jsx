import React, { useState } from 'react';

const GroupCard = ({ dissertation }) => {
  const [isApproved, setIsApproved] = useState(true);

  const handleApproved = () => {
    // Handle the "Approved" button click event
    setIsApproved(!isApproved);
    console.log('Project Approved!');
  };

  return (
    <div className="max-w-sm mx-auto bg-gradient-to-r from-blue-800 via-blue-700 to-blue-600 text-white rounded-md overflow-hidden shadow-md p-6">
      {/* Left Section */}
      <div className="text-2xl font-bold mb-4 text-gray-100">
        {dissertation.Title}
      </div>

      {/* Bottom Section */}
      <div className="flex justify-between items-center">
        <div className="flex flex-col">
          <h2 className="text-xl font-semibold mb-2 text-teal-300">
            {dissertation.Researcher}
          </h2>
        </div>
        <div>
          <button
            className={`py-2 px-4 rounded-md ${
              isApproved ? 'bg-green-500 text-white' : 'bg-red-500 text-white'
            }`}
            onClick={handleApproved}
          >
            {isApproved ? 'Approved' : 'Not Approved'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default GroupCard;
