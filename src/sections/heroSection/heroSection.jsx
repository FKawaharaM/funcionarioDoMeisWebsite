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

  return (
    <section className="hero">
      <div className="hero-content">
        <h1 className="hero-header">
          Os funcionários que todo MEI deveria ter.
        </h1>
        <div className="hero-subheaders">
          <h2 className="hero-subheader-a">
            ✍️ MEIre vai organizar seu dia a dia.
          </h2>
          <h2 className="hero-subheader-b">
            🤝 MEIreles vai achar novos clientes.
          </h2>
        </div>
        <div className="cnpj-input-container">
          <input
            type="text"
            placeholder="Digite seu CNPJ"
            value={cnpj}
            onChange={handleCnpjChange}
            maxLength="18"
            className="cnpj-input"
          />
          <button className="submit-button" onClick={handleSubmit}>
            Começar
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;