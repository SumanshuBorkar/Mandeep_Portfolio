import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from "./Components/Header/Header";
import About from "./Components/About/About";
import Home from "./Components/Home/Home";
import ProjectDetails from './Components/ProjectDetails/ProjectDetails';
import PagesProject from './Components/PagesProject/PagesProject';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projectDetails" element={<ProjectDetails />} />
          <Route path="/projects" element={<PagesProject />} />
        </Routes>
        <div
        style={{
          "position": "absolute",
          "bottom": "50px",
          "width": "100%",
          "height": "20px",
          "textAlign": "center", /* Center text inside the div */
          "lineHeight": "100px",
        }}>
          (c) 2024
        </div>
      </div>
    </Router>
  );
}

export default App;