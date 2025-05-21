import React from 'react';

const PortfolioForm = () => {
  return (
    <div className="bg-gray-800 p-6 rounded-xl shadow-lg w-full">
      <h2 className="text-2xl font-semibold mb-4">Portfolio Form</h2>
      <form className="space-y-4">
        <input type="text" placeholder="Full Name" className="w-full px-4 py-2 bg-gray-700 text-white rounded" />
        <input type="url" placeholder="Portfolio URL" className="w-full px-4 py-2 bg-gray-700 text-white rounded" />
        <textarea placeholder="About You" className="w-full px-4 py-2 bg-gray-700 text-white rounded h-24" />
        <button type="submit" className="bg-gray-600 hover:bg-gray-500 text-white px-6 py-2 rounded">
          Save Portfolio
        </button>
      </form>
    </div>
  );
};

export default PortfolioForm;
