import React, { useState } from 'react';
import './heroSection.css';

const HeroSection = () => {

  const handleWhatsAppClick = () => {
    // Replace with your actual WhatsApp Business link
    window.location.href = 'https://wa.me/yournumber';
  };

  return (
    <section className="hero">
      <div className="hero-content">
        <h1 className="hero-header">
          O funcionário que todo MEI deveria ter.
        </h1>
        <div className="whatsapp-button-container">
          <button className="whatsapp-button" onClick={handleWhatsAppClick}>
            Organize seu dia a dia agora no ZAP
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;