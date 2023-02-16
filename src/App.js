import React, { Component } from "react";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../src/css/main/style.css';
import '../src/css/mobile/media.css';

import Home from './Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Service from './pages/Service';
import History from './pages/History';
import Download from './pages/Download';
import Blog from './pages/Blog';
import Project from './pages/Project';
import BlogOneMain from './pages/BlogOneMain';
import BlogTwoMain from './pages/BlogTwoMain';
import BlogThreeMain from './pages/BlogThreeMain';

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
            <Route path="/history" element={<History />} />
            <Route path="/download" element={<Download />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/project" element={<Project />} />
            <Route path="/blogOneMain" element={<BlogOneMain />} />
            <Route path="/blogTwoMain" element={<BlogTwoMain />} />
            <Route path="/blogThreeMain" element={<BlogThreeMain />} />
          </Routes>
        </Router>      
    </div>
  );
}

export default App;
