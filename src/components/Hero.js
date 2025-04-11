import React, { useEffect, useRef } from 'react';
import '../styles/Hero.css';
import profileImage from '../assets/images/JAY.jpg'; 

// Typing effect component
const TypedText = ({ texts }) => {
  const textRef = useRef(null);
  
  useEffect(() => {
    const textElement = textRef.current;
    let currentTextIndex = 0;
    let currentCharIndex = 0;
    let isDeleting = false;
    let typingSpeed = 150;
    
    const type = () => {
      const currentText = texts[currentTextIndex];
      const displayText = currentText.substring(0, currentCharIndex);
      textElement.textContent = displayText;
      
      if (!isDeleting && currentCharIndex < currentText.length) {
        currentCharIndex++;
        typingSpeed = 150;
      } else if (isDeleting && currentCharIndex > 0) {
        currentCharIndex--;
        typingSpeed = 75;
      } else {
        isDeleting = !isDeleting;
        if (!isDeleting) {
          currentTextIndex = (currentTextIndex + 1) % texts.length;
        }
        typingSpeed = isDeleting ? 1000 : 1000;
      }
      
      setTimeout(type, typingSpeed);
    };
    
    setTimeout(type, 1000);
    
    return () => {
    };
  }, [texts]);
  
  return <span ref={textRef} className="typed-text"></span>;
};

const Hero = () => {
  return (
    <section id="home" className="hero">
      
      <div className="hero-content">
        <div className="hero-text">
          <h4 className="animated-entry">Hello, I'm</h4>
          <h1 className="animated-entry">Jay Gupta</h1>
          <h2 className="animated-entry">
            I'm a <TypedText texts={["Frontend Developer", "UI/UX Designer"]} />
          </h2>
          <p className="animated-entry">I create stunning web experiences with modern technologies</p>
          <div className="hero-buttons animated-entry">
            <a href="#contact" className="btn primary-btn">Contact Me</a>
            <a href="#projects" className="btn secondary-btn">View Work</a>
          </div>
        </div>
        
        <div className="hero-image animated-entry">
          <div className="image-container">
              <img 
                src={profileImage} 
                alt="Jay Gupta - Frontend Developer" 
                className="profile-img"
                style={{
                  borderRadius: "50%",
                  border: "6px solid white",
                  boxShadow: "0 0 20px rgba(var(--primary-rgb, 41, 98, 255), 0.3)"
                }}
              />
            </div>
          </div>
      </div>
      
      <div className="scroll-indicator animated-entry">
        <div className="scroll-icon">
          <div className="scroll-dot"></div>
        </div>
        <p>Scroll Down</p>
      </div>
    </section>
  );
};

export default Hero;