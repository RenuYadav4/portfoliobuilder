
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

import Signup from "./pages/Signup";
import Login from "./pages/Login";
import { isAuthenticated } from "./auth";
import DashboardLayout from "./components/Layout/DashboardLayout";
import PortfolioPreview from "./components/PortfolioPreview";
import Loader from "./components/Loader"; // Make sure this exists
import ResumeTemplate from "./components/ResumeTemplate";

function AppContent() {
  const location = useLocation();
  const [loading, setLoading] = useState(false);
  const loggedIn = isAuthenticated();

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      setLoading(false);
    }, 500); // Adjust as needed
    return () => clearTimeout(timer);
  }, [location]);

  return ( 
    <>
      {loading && <Loader />}

      <Routes>
        <Route path="/" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/template" element={<ResumeTemplate />} />
        <Route path="/preview" element={<PortfolioPreview />} />
        <Route
          path="/dashboard/*"
          element={
            loggedIn ? <DashboardLayout /> : <Navigate to="/login" replace />
          }
        />
      </Routes>
    </>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;

