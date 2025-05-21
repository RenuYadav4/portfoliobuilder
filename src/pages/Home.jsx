import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import MainContent from '../components/MainContent';

const Home = () => {
  const [selectedOption, setSelectedOption] = useState('');

  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-gray-100">
      {/* Sidebar */}
      <div className="w-full md:w-64">
        <Sidebar selected={selectedOption} onSelect={setSelectedOption} />
      </div>

      {/* Main content */}
      <div className="flex-1 overflow-auto">
        <MainContent selected={selectedOption} />
      </div>
    </div>
  );
};

export default Home;
