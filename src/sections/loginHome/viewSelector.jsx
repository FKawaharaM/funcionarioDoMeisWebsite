import React from 'react';

const ViewSelector = ({ activeView, setActiveView }) => {
  return (
    <div className="view-selector">
      <button 
        className={`view-button ${activeView === 'all' ? 'active' : ''}`}
        onClick={() => setActiveView('all')}
      >
        <span>⊞</span>
      </button>
      <button 
        className={`view-button ${activeView === 'dual' ? 'active' : ''}`}
        onClick={() => setActiveView('dual')}
      >
        <span>⫼</span>
      </button>
      <button 
        className={`view-button ${activeView === 'single' ? 'active' : ''}`}
        onClick={() => setActiveView('single')}
      >
        <span>☰</span>
      </button>
      <button 
        className={`view-button ${activeView === 'none' ? 'active' : ''}`}
        onClick={() => setActiveView('none')}
      >
        <span>−</span>
      </button>
    </div>
  );
};

export default ViewSelector;