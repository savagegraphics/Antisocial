import React from 'react'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Contact from "./components/Contact";
import Cards from "./components/Cards";
import Home from "./pages/Home";
import About from "./pages/About";
import "./App.css";






function App() {
  return (
    <div className="main">

      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/navbar" element={<Navbar />} />
          <Route path="/contact" element={<Contact />} />
          <Route path='/cards' element={<Cards />} />
        </Routes>
      </Router>


    </div>
  );
}
export default App
