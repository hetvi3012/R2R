import React from 'react';
import Header from './components/Header.';
import './index.css'; // Ensure you import your Tailwind CSS styles

const App = () => {
  return (
    <div className="App">
      <Header />
      <main className="p-4">
        <p>Welcome to the Right to Recall application.</p>
      </main>
    </div>
  );
};

export default App;
