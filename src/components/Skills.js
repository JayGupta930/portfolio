import React, { useEffect, useRef, useState } from 'react';
import '../styles/Skills.css';
// Icons import (assuming you have react-icons installed)
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs } from 'react-icons/fa';
import { MdDesignServices } from 'react-icons/md';

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const skillsRef = useRef(null);

  useEffect(() => {
    const targetElement = skillsRef.current;
    
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.2 }
    );

    if (targetElement) {
      observer.observe(targetElement);
    }

    return () => {
      if (targetElement) {
        observer.unobserve(targetElement);
      }
    };
  }, []);

  const skillsData = [
    { name: "HTML", percentage: 90, icon: <FaHtml5 className="skill-icon" /> },
    { name: "CSS", percentage: 85, icon: <FaCss3Alt className="skill-icon" /> },
    { name: "JavaScript", percentage: 80, icon: <FaJs className="skill-icon" /> },
    { name: "React", percentage: 85, icon: <FaReact className="skill-icon" /> },
    { name: "Node.js", percentage: 70, icon: <FaNodeJs className="skill-icon" /> },
    { name: "UI/UX Design", percentage: 75, icon: <MdDesignServices className="skill-icon" /> }
  ];

  return (
    <section id="skills" className="skills" ref={skillsRef}>
      <div className="section-header">
        <h2>My Skills</h2>
        <div className="section-divider"></div>
      </div>
      <div className={`skills-content ${isVisible ? 'animate-in' : ''}`}>
        <div className="skills-text">
          <h3>Technical Expertise & Creative Abilities</h3>
          <p>With several years of experience in web development, I've honed my skills in creating responsive, user-friendly interfaces and applications. My expertise includes:</p>
          <ul>
            <li>Frontend development with React.js</li>
            <li>Modern CSS frameworks and preprocessors</li>
            <li>JavaScript ES6+ and TypeScript</li>
            <li>Backend integration with RESTful APIs</li>
            <li>Responsive web design principles</li>
            <li>UI/UX design fundamentals</li>
          </ul>
        </div>
        <div className="skills-bars">
          {skillsData.map((skill, index) => (
            <div 
              className="skill-item" 
              key={index} 
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="skill-card">
                <div className="skill-icon-container">
                  {skill.icon}
                </div>
                <div className="skill-details">
                  <div className="skill-info">
                    <span className="skill-name">{skill.name}</span>
                    <span className="skill-percentage">{skill.percentage}%</span>
                  </div>
                  <div className="skill-bar">
                    <div 
                      className={`skill-progress ${isVisible ? 'animate' : ''}`} 
                      style={{ width: isVisible ? `${skill.percentage}%` : '0%' }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
