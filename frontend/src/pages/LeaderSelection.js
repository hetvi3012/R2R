import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const LeaderSelection = () => {
  const navigate = useNavigate();
  const { state, constituency } = useLocation().state;

  const handleVote = (voteType) => {
    // Call API to register vote
    // Example: axios.post('/api/vote', { state, constituency, voteType });
    navigate('/optional-leader-selection', { state, constituency });
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl mb-6">Leader for {constituency}, {state}</h1>
      <img src="/leader-photo.jpg" alt="Leader" className="mb-4" />
      <h2 className="text-2xl mb-4">Leader Name</h2>
      <div className="flex space-x-4">
        <button
          className="bg-red-500 text-white p-2 rounded"
          onClick={() => handleVote('r2r')}
        >
          Right to Recall
        </button>
        <button
          className="bg-green-500 text-white p-2 rounded"
          onClick={() => handleVote('satisfied')}
        >
          Satisfied
        </button>
      </div>
    </div>
  );
};

export default LeaderSelection;
