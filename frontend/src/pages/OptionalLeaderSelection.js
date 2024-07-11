import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const OptionalLeaderSelection = () => {
  const navigate = useNavigate();
  const { state, constituency } = useLocation().state;

  const handleSelectLeader = (leader) => {
    // Call API to register optional leader selection
    // Example: axios.post('/api/select-leader', { state, constituency, leader });
    navigate('/results', { state, constituency });
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl mb-6">Select an Optional Leader</h1>
      <div className="flex space-x-4">
        <button
          className="bg-gray-500 text-white p-2 rounded"
          onClick={() => handleSelectLeader('Leader1')}
        >
          Leader 1
        </button>
        <button
          className="bg-gray-500 text-white p-2 rounded"
          onClick={() => handleSelectLeader('Leader2')}
        >
          Leader 2
        </button>
        {/* Add more leader options */}
      </div>
    </div>
  );
};

export default OptionalLeaderSelection;
