import React, { useState } from 'react';
import './loginHome.css';
import ViewSelector from './ViewSelector';
import SuggestionBox from './SuggestionBox';

const LoginHome = () => {
  const [activeView, setActiveView] = useState('single');
  const [activeMeireBox, setActiveMeireBox] = useState(null);
  const [activeMeirelesBox, setActiveMeirelesBox] = useState(null);

  const meireSuggestions = [
    { emoji: '📊', title: 'Organizar Finanças', content: 'Ajudo você a controlar receitas e despesas.' },
    { emoji: '📅', title: 'Agendar Clientes', content: 'Otimizo sua agenda e horários.' },
    { emoji: '📝', title: 'Gerar Relatórios', content: 'Crio relatórios personalizados do seu negócio.' },
    { emoji: '⏰', title: 'Lembretes', content: 'Mantenho você atualizado com prazos importantes.' }
  ];

  const meirelesSuggestions = [
    { emoji: '🤝', title: 'Networking', content: 'Encontro parceiros ideais para seu negócio.' },
    { emoji: '📢', title: 'Marketing Digital', content: 'Aumento sua presença online.' },
    { emoji: '🎯', title: 'Leads Qualificados', content: 'Identifico clientes potenciais.' },
    { emoji: '📈', title: 'Análise de Mercado', content: 'Avalio tendências e oportunidades.' }
  ];

  return (
    <div className="login-home">
      <div className="split-container">
        <div className="split-section meire-section">
          <h2 className="section-title">✍️ MEIre</h2>
          <ViewSelector activeView={activeView} setActiveView={setActiveView} />
          <div className={`suggestions-grid view-${activeView}`}>
            {meireSuggestions.map((suggestion, index) => (
              <SuggestionBox
                key={index}
                {...suggestion}
                isActive={activeMeireBox === index}
                onClick={() => setActiveMeireBox(index)}
                position="right"
                view={activeView}
              />
            ))}
          </div>
        </div>
        
        <div className="vertical-divider"></div>
        
        <div className="split-section meireles-section">
          <h2 className="section-title">🤝 MEIreles</h2>
          <ViewSelector activeView={activeView} setActiveView={setActiveView} />
          <div className={`suggestions-grid view-${activeView}`}>
            {meirelesSuggestions.map((suggestion, index) => (
              <SuggestionBox
                key={index}
                {...suggestion}
                isActive={activeMeirelesBox === index}
                onClick={() => setActiveMeirelesBox(index)}
                position="left"
                view={activeView}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginHome;