import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Navbar from "./components/Navbar";
import ResumeForm from "./components/ResumeForm";
import PortfolioForm from "./components/PortfolioForm";
import TemplateSelector from "./components/TemplateSelector";


function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/resume" element={<ResumeForm/>}/>
        <Route path="/portfolio" element={<PortfolioForm/>}/>
        <Route path="/templates" element={<TemplateSelector/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
