import React from 'react';
import './App.css';
import Navbar from './components/navbar';
import HeroSection from './sections/heroSection/heroSection';
import AdvantageSection from './sections/advantagesSection/advantageSection';

function App() {
  return (
    <div className="app">
      <Navbar />
      <HeroSection />
      <AdvantageSection />
    </div>
  );
}

export default App;