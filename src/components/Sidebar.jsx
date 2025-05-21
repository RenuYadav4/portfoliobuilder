import React, { useState } from 'react';
import { FiFileText, FiBriefcase, FiBarChart2, FiDownload, FiLink, FiMenu } from 'react-icons/fi';

const Sidebar = ({ selected, onSelect }) => {
    const [isOpen, setIsOpen] = useState(true);

    const baseOptions = [
        { label: 'Build Resume', icon: <FiFileText /> },
        { label: 'Build Portfolio', icon: <FiBriefcase /> },
        { label: 'Analyze Your Resume', icon: <FiBarChart2 /> }
    ];

    const dynamicOptions = [];

    if (selected === 'Build Resume' || selected === 'Build Portfolio') {
        dynamicOptions.push({ label: 'Export as PDF', icon: <FiDownload /> });
    }

    if (selected === 'Build Portfolio') {
        dynamicOptions.push({ label: 'Get Link', icon: <FiLink /> });
    }

    return (
        <div className={`hidden md:flex min-h-screen  ${isOpen ? 'w-full' : 'w-0'} transition-all duration-300`}>
            {/* Sidebar content */}
            <div className={`bg-white  shadow-xl border-r min-h-screen flex flex-col justify-between sticky top-0 ${isOpen ? 'block' : 'hidden md:block'}`}>
                <div className="p-6">
                    <h2 className="text-2xl font-bold text-gray-800 mb-6">Dashboard</h2>
                    <div className="space-y-2">
                        {baseOptions.map((option) => (
                            <button
                                key={option.label}
                                onClick={() => onSelect(option.label)}
                                className={`flex items-center gap-3 w-full px-4 py-3 rounded-lg text-left font-medium transition-all ${selected === option.label
                                        ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg'
                                       : 'text-gray-700 hover:bg-gray-100'
                                    }`}
                            >
                                {option.icon}
                                {option.label}
                            </button>
                        ))}
                    </div>

                    {dynamicOptions.length > 0 && (
                        <div className="mt-6 pt-4 border-t border-gray-700 space-y-3">
                            {dynamicOptions.map((option) => (
                                <button
                                    key={option.label}
                                    className="group flex items-center justify-between w-full px-4 py-3 bg-gray-800 hover:bg-gray-700 text-gray-100 rounded-xl shadow-md transition-all duration-300 hover:shadow-lg active:scale-95"
                                >
                                    <span className="flex items-center gap-3 text-base font-medium">
                                        <span className="group-hover:animate-pulse text-gray-300">{option.icon}</span>
                                        {option.label}
                                    </span>
                                    <svg className="w-4 h-4 opacity-60 group-hover:translate-x-1 transition-transform duration-200 text-gray-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                        <path d="M9 5l7 7-7 7" />
                                    </svg>
                                </button>
                            ))}
                        </div>
                    )}
                </div>

                <div className="p-6 text-sm text-gray-400">
                    © 2025 Focushboard Inc.
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
