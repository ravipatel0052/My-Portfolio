import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Home from "./pages/Home"
import Projects from './pages/Projects';
import Blogs from './pages/Blogs';
import Contacts from './pages/Contacts';
import About from './pages/About';
import Login from './pages/Resume';
import './App.css'
function App() {


  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/about" element={<About />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/resume" element={<Login />} />
        </Routes>
        <Footer/>
      </Router>
    </div>
  )
}

export default App




