import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import LeaderSelection from './pages/LeaderSelection';
import OptionalLeaderSelection from './pages/OptionalLeaderSelection';
import Results from './pages/Results';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/leader-selection" element={<LeaderSelection />} />
        <Route path="/optional-leader-selection" element={<OptionalLeaderSelection />} />
        <Route path="/results" element={<Results />} />
      </Routes>
    </Router>
  );
}

export default App;
