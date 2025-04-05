import React from 'react';
import '../styles/Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo">
          <h2>Portfolio<span>.</span></h2>
          <p>Creating modern web experiences</p>
        </div>
        
        <div className="footer-links">
          <div className="footer-link-group">
            <h3>Quick Links</h3>
            <ul>
              <li><a href="/home">Home</a></li>
              <li><a href="/about">About</a></li>
            </ul>
          </div>
          
          <div className="footer-link-group">
            <h3>Connect</h3>
            <ul>
              <li><a href="https://github.com/JayGupta930">GitHub</a></li>
              <li><a href="www.linkedin.com/in/jaygupta930">LinkedIn</a></li>
              {/* <li><a href="/">Twitter</a></li>
              <li><a href="/">Instagram</a></li> */}
            </ul>
          </div>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>&copy; {currentYear} Jay Gupta. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
