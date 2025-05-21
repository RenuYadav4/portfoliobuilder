import React from 'react';
import resumeImage from '../assets/aboutbg.png';
import Features from './Features';

const MainContent = ({ selected }) => {
  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      {/* Background Image */}
      <img
        src={resumeImage}
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover opacity-30"
      />

      {/* Optional dark overlay for better text visibility */}
      <div className="absolute inset-0 bg-black/10" />

      {/* Overlay Content */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center p-10 md:p-20 h-full">
        <h1 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-pink-500 to-yellow-500 mb-6">
          {selected || 'Welcome!'}
        </h1>
        <p className="text-gray-800 text-lg md:text-xl font-medium max-w-2xl">
          {selected === '' && 'Choose an option from the sidebar to get started.'}
          {selected === 'Build Resume' && 'Craft a professional resume using our intuitive builder.'}
          {selected === 'Build Portfolio' && 'Showcase your work and achievements with a beautiful portfolio.'}
          {selected === 'Analyze Your Resume' && 'Get insights and improvements for your current resume.'}
        </p>
      </div>
      <Features/>
    </div>
  );
};

export default MainContent;
