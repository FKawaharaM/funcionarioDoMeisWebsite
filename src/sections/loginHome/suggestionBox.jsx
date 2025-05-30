import React from 'react';

const SuggestionBox = ({ emoji, title, content, isActive, onClick, position, view }) => {
  return (
    <div 
      className={`suggestion-box ${isActive ? 'active' : ''} ${view} ${position}`}
      onClick={onClick}
    >
      <div className="suggestion-header">
        <span className="suggestion-emoji">{emoji}</span>
        <h3 className="suggestion-title">{title}</h3>
      </div>
      {isActive && (
        <div className="suggestion-content">
          <p>{content}</p>
          {/* Add more content or chat interface here */}
        </div>
      )}
    </div>
  );
};

export default SuggestionBox;