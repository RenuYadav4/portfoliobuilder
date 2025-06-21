import Sidebar from "./Sidebar";
// import ResumeForm from "../ResumeBuilder";
import MainContent from "../MainContent";

import { Routes, Route, useLocation, Navigate, Link } from "react-router-dom";
import Navbar from "./Navbar";
import ResumeBuilder from "../ResumeBuilder";
import PortfolioBuilder from "../PortfolioBuilder";
import { useState } from "react";


const DashboardLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const location = useLocation();

  // Determine the selected sidebar item based on URL path
  let selected = "";
  if (location.pathname.includes("build-resume")) selected = "Build Resume";
  else if (location.pathname.includes("build-portfolio")) selected = "Build Portfolio";
  else if (location.pathname.includes("analyze-resume")) selected = "Analyze Your Resume";

  return (
    <div className="flex flex-col h-screen min-h-0">
      <Navbar
        onToggleSidebar={() => setSidebarOpen(!sidebarOpen)}
        onOpenSidebar={() => setSidebarOpen(true)}
      />
      <div className="flex flex-1 min-h-0">
        {/* {sidebarOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
            onClick={() => setSidebarOpen(false)}
          />
        )} */}
        {sidebarOpen && (
          <div
            className="fixed inset-0  bg-opacity-40 z-40 md:hidden"
            onClick={() => setSidebarOpen(false)}
          />
        )}


        <Sidebar selected={selected} onSelect={() => setSidebarOpen(false)}
          className={`fixed z-50 top-0 left-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out 
            ${sidebarOpen ? "translate-x-0" : "-translate-x-full"} md:translate-x-0 md:static md:w-64`}

        />

        <main className="flex-1 overflow-y-auto min-h-0">
          <Routes>
            {/* Show MainContent when path is exactly /dashboard */}
            <Route path="/" element={<MainContent selected="" />} />
            {/* <Route path="build-resume" element={<ResumeForm />} /> */}
            <Route path="build-resume" element={<ResumeBuilder />} />
            <Route path="build-portfolio" element={<PortfolioBuilder />} />
            <Route path="analyze-resume" element={<div>Analyze Resume Component Here</div>} />

            {/* Redirect unknown paths back to /dashboard (main content) */}

            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>

        </main>
      </div>
    </div>

  );
};

export default DashboardLayout;
