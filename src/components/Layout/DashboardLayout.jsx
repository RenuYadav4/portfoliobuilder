import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import ResumeForm from "../ResumeForm";
import PortfolioForm from "../PortfolioForm";
import { useState } from "react";
import MainContent from "../MainContent";

const DashboardLayout = () => {
  const [selected, setSelected] = useState(""); // no default selected = show Home

  return (
    <div className="flex flex-col h-screen min-h-0">
      <Navbar />
      <div className="flex flex-1 min-h-0">
        <Sidebar selected={selected} onSelect={setSelected} />
        <main className="flex-1 overflow-y-auto min-h-0">
          {selected === "Build Resume" && <ResumeForm />}
          {selected === "Build Portfolio" && <PortfolioForm />}
          {!selected && <MainContent selected={selected}/>}
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
