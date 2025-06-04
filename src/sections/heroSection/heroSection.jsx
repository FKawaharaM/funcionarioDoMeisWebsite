import React, { useState } from 'react';
import './heroSection.css';

const HeroSection = () => {
  const [cnpj, setCnpj] = useState('');

  const handleCnpjChange = (e) => {
    let value = e.target.value;
    value = value.replace(/\D/g, '');
    if (value.length <= 14) {
      value = value.replace(/^(\d{2})(\d)/g, '$1.$2');
      value = value.replace(/^(\d{2})\.(\d{3})(\d)/g, '$1.$2.$3');
      value = value.replace(/\.(\d{3})(\d)/g, '.$1/$2');
      value = value.replace(/(\d{4})(\d)/g, '$1-$2');
    }
    setCnpj(value);
  };

  const handleSubmit = () => {
    const cleanCnpj = cnpj.replace(/\D/g, '');
    if (cleanCnpj.length === 14) {
      window.location.href = `/login?cnpj=${cleanCnpj}`;
    } else {
      alert('Por favor, insira um CNPJ válido');
    }
  };

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