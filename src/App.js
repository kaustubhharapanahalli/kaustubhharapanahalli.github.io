import React from "react";
import { Route, Routes } from "react-router-dom";
import Blogs from "./components/Blogs"; // Import your Blogs component
import Footer from "./components/Footer"; // Adjust the path to where you create the Footer component
import Home from "./components/Homepage";
import NavBar from "./components/Navbar";
import Projects from "./components/Projects"; // Import your Projects component
import Publications from "./components/Publications"; // Import your Publications component
import Resume from "./components/Resume"; // Import your Resume component

function App() {
  return (
    <div className="app-container">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/publications" element={<Publications />} />
        <Route path="/portfolio" element={<Resume />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
