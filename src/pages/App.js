import React, { Component } from "react";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../src/css/main/style.css';


import Home from './Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Service from './pages/Service';
import Download from "./pages/Download";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";



function App() {
  return (
    <div>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/service" element={<Service />} />
            <Route path="/Download" element={<Download />} />
          </Routes>
        </Router>      
    </div>
  );
}

export default App;
