import React, { useState, useEffect } from 'react';
import '../styles/Navbar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Close mobile menu when clicking a link
  const handleLinkClick = () => {
    if (isMenuOpen) {
      setIsMenuOpen(false);
    }
  };

  // Add scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        <a href="#home" className="navbar-logo">
          Portfolio<span>.</span>
        </a>
        
        <div className={`navbar-menu ${isMenuOpen ? 'active' : ''}`}>
          <ul className="navbar-items">
            <li><a href="#home" className="navbar-link" onClick={handleLinkClick}>Home</a></li>
            <li><a href="#about" className="navbar-link" onClick={handleLinkClick}>About</a></li>
            <li><a href="#skills" className="navbar-link" onClick={handleLinkClick}>Skills</a></li>
            <li><a href="#projects" className="navbar-link" onClick={handleLinkClick}>Projects</a></li>
            <li><a href="#contact" className="navbar-link" onClick={handleLinkClick}>Contact</a></li>
          </ul>
        </div>
        
        <div className={`navbar-toggle ${isMenuOpen ? 'active' : ''}`} onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
