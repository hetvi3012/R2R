import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import { Pie } from 'react-chartjs-2';

const Results = () => {
  const location = useLocation();
  const { state, constituency } = location.state || {};
  const [data, setData] = useState({ r2r: 0, satisfied: 0, leaders: [] });

  useEffect(() => {
    if (state && constituency) {
      // Fetch vote data from the server
      axios.get(`/api/results?state=${state}&constituency=${constituency}`).then((response) => {
        setData(response.data);
      });
    }
  }, [state, constituency]);

  if (!state || !constituency) {
    return <div>Error: Missing state or constituency data</div>;
  }

  const pieData = {
    labels: ['Right to Recall', 'Satisfied'],
    datasets: [
      {
        data: [data.r2r, data.satisfied],
        backgroundColor: ['#FF6384', '#36A2EB'],
      },
    ],
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl mb-6">Results for {constituency}, {state}</h1>
      <Pie data={pieData} />
      <div className="mt-6">
        <h2 className="text-2xl mb-4">Optional Leaders</h2>
        <ul>
          {data.leaders.map((leader) => (
            <li key={leader.name}>{leader.name}: {leader.votes} votes</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Results;
