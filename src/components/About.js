import React from 'react';
import '../styles/About.css';
import profileImage from '../assets/images/JAY.jpg'; // Import the profile image

const About = () => {
  return (
    <section id="about" className="about">
      <div className="section-header">
        <h2>About Me</h2>
        <div className="section-divider"></div>
      </div>
      <div className="about-content">
        <div className="about-image">
          <img 
            src={profileImage} 
            alt="Jay Gupta - Frontend Developer" 
            className="profile-img" 
          />
        </div>
        <div className="about-text">
          <h3>I'm Jay Gupta, a passionate frontend developer based in India</h3>
          <p>I specialize in building modern, responsive web applications using React and related technologies. With a keen eye for detail and a passion for creating intuitive user experiences, I strive to deliver high-quality code that brings designs to life.</p>
          <p>My goal is to create web applications that not only look great but also perform exceptionally well. I'm constantly learning new technologies and methodologies to stay ahead in this ever-evolving field.</p>
          <div className="personal-info">
            <div className="info-item">
              <strong>Name:</strong> Jay Gupta
            </div>
            <div className="info-item">
              <strong>Email:</strong> jayguptajaygupta8@gmail.com
            </div>
            <div className="info-item">
              <strong>Location:</strong> India
            </div>
            <div className="info-item">
              <strong>Available:</strong> For Freelance / Full-time
            </div>
          </div>
          <a href="/resume/jay-gupta-cv.pdf" className="btn primary-btn" download>Download CV</a>
        </div>
        
        <div className="timeline-section">
          <h4>Education & Experience</h4>
          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-date">2021 - Present</div>
              <div className="timeline-title">Frontend Developer</div>
              <div className="timeline-place">Tech Innovations Inc.</div>
              <div className="timeline-description">Working on enterprise-level React applications, implementing modern UI/UX designs, and collaborating with cross-functional teams.</div>
            </div>
            <div className="timeline-item">
              <div className="timeline-date">2019 - 2021</div>
              <div className="timeline-title">Junior Web Developer</div>
              <div className="timeline-place">Digital Solutions Ltd.</div>
              <div className="timeline-description">Developed responsive websites and implemented frontend features using HTML, CSS, and JavaScript.</div>
            </div>
            <div className="timeline-item">
              <div className="timeline-date">2015 - 2019</div>
              <div className="timeline-title">Bachelor of Technology</div>
              <div className="timeline-place">Indian Institute of Technology</div>
              <div className="timeline-description">Computer Science major with focus on web technologies and software development.</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
