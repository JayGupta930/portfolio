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
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vel tincidunt elit. Nulla facilisi. Cras accumsan nunc ut magna scelerisque, eget sagittis dui tincidunt. Donec auctor arcu in nulla suscipit, et pulvinar metus tincidunt.</p>
          <p>Nam vestibulum tristique metus, sit amet finibus felis placerat non. Nullam ultrices ante vel magna efficitur, ut tempus eros varius. Proin eget dui ac magna imperdiet ultricies.</p>
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
      </div>
    </section>
  );
};

export default About;
