import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <nav className="navbar">
      <div className="nav-container">
        <Link to="/" className="nav-logo" onClick={closeMenu}>
          <img src="/Prakruthi_Logo.jpg" alt="Prakruthi Logo" />
          <span>Prakruthi NGO</span>
        </Link>
        
        <button className="nav-toggle" onClick={toggleMenu}>
          ☰
        </button>
        
        <ul className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
          <li className="nav-item">
            <Link 
              to="/" 
              className={`nav-link ${isActive('/') ? 'active' : ''}`}
              onClick={closeMenu}
            >
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link 
              to="/about" 
              className={`nav-link ${isActive('/about') ? 'active' : ''}`}
              onClick={closeMenu}
            >
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link 
              to="/programs" 
              className={`nav-link ${isActive('/programs') ? 'active' : ''}`}
              onClick={closeMenu}
            >
              Programs
            </Link>
          </li>
          <li className="nav-item">
            <Link 
              to="/gallery" 
              className={`nav-link ${isActive('/gallery') ? 'active' : ''}`}
              onClick={closeMenu}
            >
              Gallery
            </Link>
          </li>
          <li className="nav-item">
            <Link 
              to="/events" 
              className={`nav-link ${isActive('/events') ? 'active' : ''}`}
              onClick={closeMenu}
            >
              Events
            </Link>
          </li>
          <li className="nav-item">
            <Link 
              to="/volunteer" 
              className={`nav-link ${isActive('/volunteer') ? 'active' : ''}`}
              onClick={closeMenu}
            >
              Volunteer
            </Link>
          </li>
          <li className="nav-item">
            <Link 
              to="/donate" 
              className={`nav-link ${isActive('/donate') ? 'active' : ''}`}
              onClick={closeMenu}
            >
              Donate
            </Link>
          </li>
          <li className="nav-item">
            <Link 
              to="/contact" 
              className={`nav-link ${isActive('/contact') ? 'active' : ''}`}
              onClick={closeMenu}
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;