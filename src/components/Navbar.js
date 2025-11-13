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
        <Link to="/" className="logo" onClick={closeMenu}>
          PRAKRUTHI NGO
        </Link>
        
        <button 
          className="mobile-menu-btn"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
        
        <ul className={`nav-links ${isMenuOpen ? 'nav-links-open' : ''}`}>
          <li><Link to="/" className={isActive('/') ? 'active' : ''} onClick={closeMenu}>Home</Link></li>
          <li><Link to="/about" className={isActive('/about') ? 'active' : ''} onClick={closeMenu}>About</Link></li>
          <li><Link to="/programs" className={isActive('/programs') ? 'active' : ''} onClick={closeMenu}>Programs</Link></li>
          <li><Link to="/events" className={isActive('/events') ? 'active' : ''} onClick={closeMenu}>Events</Link></li>
          <li><Link to="/volunteer" className={isActive('/volunteer') ? 'active' : ''} onClick={closeMenu}>Volunteer</Link></li>
          <li><Link to="/donate" className={isActive('/donate') ? 'active' : ''} onClick={closeMenu}>Donate</Link></li>
          <li><Link to="/contact" className={isActive('/contact') ? 'active' : ''} onClick={closeMenu}>Contact</Link></li>
          <li><Link to="/dashboard" className={isActive('/dashboard') ? 'active' : ''} onClick={closeMenu}>Dashboard</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;