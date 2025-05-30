import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/navbar';
import HeroSection from './sections/heroSection/heroSection';
import LoginHome from './sections/loginHome/loginHome';

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <Routes>
          <Route path="/" element={<HeroSection />} />
          <Route path="/login" element={<LoginHome />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;