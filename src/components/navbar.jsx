import React from 'react';
import './navbar.css';
import meireMeirelesLogo from '../assets/funcionarioDoMeis_Logo.svg';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={meireMeirelesLogo} alt="Meire & Meireles Logo" />
      </div>
      <ul className="navbar-links">
        <li><a href="#sobre">Sobre</a></li>
        <li><a href="#time">Time</a></li>
        <li><a href="#contato">Contato</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;