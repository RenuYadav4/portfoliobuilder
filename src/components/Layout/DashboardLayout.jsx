import Sidebar from "./Sidebar";
// import ResumeForm from "../ResumeBuilder";
import MainContent from "../MainContent";

import { Routes, Route, useLocation, Navigate, Link } from "react-router-dom";
import Navbar from "./Navbar";
import ResumeBuilder from "../ResumeBuilder";
import PortfolioBuilder from "../PortfolioBuilder";

const DashboardLayout = () => {
  const location = useLocation();

  // Determine the selected sidebar item based on URL path
  let selected = "";
  if (location.pathname.includes("build-resume")) selected = "Build Resume";
  else if (location.pathname.includes("build-portfolio")) selected = "Build Portfolio";
  else if (location.pathname.includes("analyze-resume")) selected = "Analyze Your Resume";

  return (
    <div className="flex flex-col h-screen min-h-0">
      <Navbar />
      <div className="flex flex-1 min-h-0">
        <Sidebar selected={selected} onSelect={() => { }} />

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
