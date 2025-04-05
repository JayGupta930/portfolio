import React from 'react';
import '../styles/Skills.css';

const Skills = () => {
  const skillsData = [
    { name: "HTML", percentage: 90 },
    { name: "CSS", percentage: 85 },
    { name: "JavaScript", percentage: 80 },
    { name: "React", percentage: 85 },
    { name: "Node.js", percentage: 70 },
    { name: "UI/UX Design", percentage: 75 }
  ];

  return (
    <section id="skills" className="skills">
      <div className="section-header">
        <h2>My Skills</h2>
        <div className="section-divider"></div>
      </div>
      <div className="skills-content">
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
            <div className="skill-item" key={index}>
              <div className="skill-info">
                <span className="skill-name">{skill.name}</span>
                <span className="skill-percentage">{skill.percentage}%</span>
              </div>
              <div className="skill-bar">
                <div 
                  className="skill-progress" 
                  style={{ width: `${skill.percentage}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
