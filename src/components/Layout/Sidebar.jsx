import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  FiFileText,
  FiBriefcase,
  FiBarChart2,
  FiDownload,
  FiLink,
} from "react-icons/fi";

const Sidebar = ({ selected, onSelect }) => {
  const [isOpen, setIsOpen] = useState(true);

  const baseOptions = [
    {
      label: "Build Resume",
      icon: <FiFileText />,
      path: "/dashboard/build-resume",
    },
    {
      label: "Build Portfolio",
      icon: <FiBriefcase />,
      path: "/dashboard/build-portfolio",
    },
    {
      label: "Analyze Your Resume",
      icon: <FiBarChart2 />,
      path: "/dashboard/analyze-resume",
    },
  ];

  const navLinkClass = ({ isActive }) =>
    `flex items-center gap-3 w-full px-4 py-3 rounded-lg text-left font-medium transition-all ${
      isActive
        ? "bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg"
        : "text-gray-700 hover:bg-gray-100"
    }`;

  return (
    <div
      className={`hidden md:flex min-h-full ${
        isOpen ? "w-64" : "w-0"
      } transition-all duration-300`}
    >

      <div
        className={`bg-white shadow-xl border-r h-full flex flex-col justify-between sticky top-0 ${
          isOpen ? "block" : "hidden md:block"
        }`}
      >
        <div className="p-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Dashboard</h2>

          <div className="space-y-2">
            {baseOptions.map((option) => (
              <NavLink
                key={option.label}
                to={option.path}
                className={navLinkClass}
                onClick={() => onSelect && onSelect(option.label)}
              >
                {option.icon}
                {option.label}
              </NavLink>
            ))}
          </div>

          {/* Conditionally render buttons */}
          {(selected === "Build Resume" || selected === "Build Portfolio") && (
            <div className="mt-6 pt-4 border-t border-gray-300 space-y-3">
              {/* Export PDF Button */}
              <button
                onClick={() => console.log("Export PDF clicked")}
                className="group flex items-center justify-between w-full px-4 py-3 bg-[#5b5a5a] hover:bg-[#a87b98] text-white rounded-xl shadow-md transition-all duration-300 hover:shadow-lg active:scale-95"
              >
                <span className="flex items-center gap-3 text-base font-medium">
                  <FiDownload className="text-white group-hover:animate-pulse" />
                  Export as PDF
                </span>
                <svg
                  className="w-4 h-4 opacity-80 group-hover:translate-x-1 transition-transform duration-200"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path d="M9 5l7 7-7 7" />
                </svg>
              </button>

              {/* Get Link Button - only if Build Portfolio */}
              {selected === "Build Portfolio" && (
                <button
                  onClick={() => console.log("Get Link clicked")}
                  className="group flex items-center justify-between w-full px-4 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-xl shadow-md transition-all duration-300 hover:shadow-lg active:scale-95"
                >
                  <span className="flex items-center gap-3 text-base font-medium">
                    <FiLink className="text-white group-hover:animate-pulse" />
                    Get Link
                  </span>
                  <svg
                    className="w-4 h-4 opacity-80 group-hover:translate-x-1 transition-transform duration-200"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              )}
            </div>
          )}
        </div>

        <div className="p-6 text-sm text-gray-400">© 2025 Focushboard Inc.</div>
      </div>
    </div>
  );
};

export default Sidebar;
