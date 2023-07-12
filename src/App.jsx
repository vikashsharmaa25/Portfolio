import React from "react";
import Home from "./components/Home";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Education from "./Pages/Education";
import Projects from "./Pages/Projects";
import Contact from "./Pages/Contact";

function App() {
  return (
    <>
      <div className="bg-[#1d1d1d]">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/education & certifications" element={<Education />} />
          <Route path="/project" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
