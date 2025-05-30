import React from 'react';
import './navbar.css';
import meireMeirelesLogo from '../assets/meireMeirelesLogo.svg';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={meireMeirelesLogo} alt="Meire & Meireles Logo" />
      </div>
      <ul className="navbar-links">
        <li><a href="#sobre">Sobre nós</a></li>
        <li><a href="#time">Time</a></li>
        <li><a href="#contato">Contato</a></li>
        <li><a href="#cadastro">Cadastro</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;