import Signup from "./pages/Signup";
import Login from "./pages/Login";
import { BrowserRouter as Router, Route, Routes,Navigate } from "react-router-dom";
import { isAuthenticated } from "./auth";
import DashboardLayout from "./components/Layout/DashboardLayout";




function App() {
  const loggedIn = isAuthenticated();

  return (
    // <BrowserRouter>
    //   <Navbar />
    //   <Routes>
    //     <Route path="/" element={<Signup />} />
    //     <Route path="/login" element={<Login />} />
    //     <Route path="/home" element={<Home />} />
    //     <Route path="/resume" element={<ResumeForm/>}/>
    //     <Route path="/portfolio" element={<PortfolioForm/>}/>
    //     {/* <Route path="/templates" element={<TemplateSelector/>}/> */}
    //   </Routes>
    // </BrowserRouter>
    <Router>
    <Routes>
      {/* Default route renders Signup */}
      <Route path="/" element={<Signup />} />
      <Route path="/login" element={<Login />} />

      {/* Protected routes */}
      <Route
        path="/dashboard/*"
        element={
          loggedIn ? (
            <DashboardLayout />
          ) : (
            <Navigate to="/login" replace />
          )
        }
      />
    </Routes>
  </Router>
  );
 
}

export default App;
