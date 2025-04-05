import React from 'react';
import '../styles/Hero.css';
import profileImage from '../assets/images/JAY.jpg'; // Import profile image

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <div className="hero-text">
          <h4>Hello, I'm</h4>
          <h1>Jay Gupta</h1>
          <h2>Frontend Developer</h2>
          <p>I create stunning web experiences with modern technologies</p>
          <div className="hero-buttons">
            <a href="#contact" className="btn primary-btn">Contact Me</a>
            <a href="#projects" className="btn secondary-btn">View Work</a>
          </div>
        </div>
        <div className="hero-image">
          <div className="image-container">
            <img 
              src={profileImage} 
              alt="Jay Gupta - Frontend Developer" 
              className="profile-img rounded"
            />
          </div>
        </div>
      </div>
      <div className="scroll-indicator">
        <div className="mouse"></div>
        <p>Scroll Down</p>
      </div>
    </section>
  );
};

export default Hero;
