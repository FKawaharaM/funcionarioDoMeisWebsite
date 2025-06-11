import React, { useState, useEffect } from 'react';
import './App.css';
import Navbar from './components/navbar';
import LogoZAP from './assets/Logo-ZAP.svg';

const texts = [
  <div>
    <h1 className="hero-header">Os funcionários que todo <br /> MEI deveria ter.</h1>
    <p className="hero-subtitle">Comece a organizar o seu dia a dia hoje. É grátis!</p>
  </div>,
<div>
<h1 classname="hero-header">O funcionário digital que <br /> todo MEI precisa!</h1>
  <ul className="feature-list">
    <li>- Organize seus horários 🗓️</li>
    <li>- Crie lembretes 🔔</li>
    <li>- E nunca mais esqueça de um cliente! 🤓</li>
  </ul>
  </div>
];

function App() {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentTextIndex((prev) => (prev + 1) % texts.length);
        setIsAnimating(false);
      }, 500); // Half of the animation duration
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const handleWhatsAppClick = () => {
    window.location.href = 'https://wa.me/4915782719062?text=Olá%20Funcionário%20do%20MEIs%20Gostaria%20de%20saber%20mais%20sobre%20o%20funcionário%20digital.';
  };

  return (
    <div className="app">
      <Navbar />
      <section className="hero">
        <div className="hero-content">
          <div className="text-container">
            <div className={`${isAnimating ? 'slide-out' : 'slide-in'}`}>
              {texts[currentTextIndex]}
            </div>
          </div>
          <div className="whatsapp-button-container">
            <button className="whatsapp-button" onClick={handleWhatsAppClick}>
              <span className="whatsapp-icon">
                <img src={LogoZAP} alt="WhatsApp Logo" />
              </span>
              Faça um teste!
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;