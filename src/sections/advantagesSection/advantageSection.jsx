import React from 'react';
import './advantageSection.css';

const AdvantageSection = () => {
  const handleWhatsAppClick = () => {
    // Replace with your actual WhatsApp Business link
    window.location.href = 'https://wa.me/yournumber';
  };

  return (
    <section className="advantage">
      <div className="advantage-content">
        <ul className="advantage-list">
          <li className="advantage-item">
            Organize seus horários
              <span className="advantage-emoji">🗓️</span>
          </li>
          <li className="advantage-item">
            Crie lembretes
              <span className="advantage-emoji">🔔</span>
          </li>
          <li className="advantage-item">
            E nunca mais esqueça de um cliente
              <span className="advantage-emoji">🤓</span>
          </li>
        </ul>
        <div className="free-button-container">
          <button className="free-button" onClick={handleWhatsAppClick}>
            É de graça. Começar!
          </button>
        </div>
      </div>
    </section>
  );
};

export default AdvantageSection;