import React from 'react';
import '../styles/About.css';
import profileImage from '../assets/images/JAY.jpg';
import resumePDF from '../assets/pdfs/Jay_Gupta_RESUME.pdf';
import toast, { Toaster } from 'react-hot-toast';

const About = () => {
  const handleDownloadResume = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(resumePDF);
      if (!response.ok) throw new Error('Failed to download resume');
      
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'Jay_Gupta_RESUME.pdf';
      document.body.appendChild(a);
      a.click();
      window.URL.revokeObjectURL(url);
      document.body.removeChild(a);
      
      toast.success('Resume downloaded successfully!');
    } catch (error) {
      toast.error('Failed to download resume. Please try again.');
    }
  };

  return (
    <section id="about" className="about">
      <Toaster position="bottom-right" toastOptions={{
        style: {
          background: '#333',
          color: '#fff',
        },
        success: {
          duration: 5000,
          iconTheme: {
            primary: '#4caf50',
            secondary: '#fff',
          },
        },
        error: {
          duration: 5000,
          iconTheme: {
            primary: '#f44336',
            secondary: '#fff',
          },
        },
      }} />
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
              <strong>Email:</strong> jaygupta.works@gmail.com
            </div>
            <div className="info-item">
              <strong>Location:</strong> India
            </div>
            <div className="info-item">
              <strong>Available:</strong> For Freelance/ Full-time
            </div>
          </div>
          <a href={resumePDF} className="btn primary-btn" onClick={handleDownloadResume}>Download RESUME</a>
        </div>
        
        <div className="timeline-section">
          <h4>Education</h4>
          <div className="timeline">
            {/* <div className="timeline-item">
              <div className="timeline-date">2022 - Present</div>
              <div className="timeline-title">Frontend Developer</div>
              <div className="timeline-place">Tech Innovations Inc.</div>
              <div className="timeline-description">Working on enterprise-level React applications, implementing modern UI/UX designs, and collaborating with cross-functional teams.</div>
            </div> */}
            {/* <div className="timeline-item">
              <div className="timeline-date">2019 - 2021</div>
              <div className="timeline-title">Junior Web Developer</div>
              <div className="timeline-place">Digital Solutions Ltd.</div>
              <div className="timeline-description">Developed responsive websites and implemented frontend features using HTML, CSS, and JavaScript.</div>
            </div> */}
            <div className="timeline-item">
              <div className="timeline-date">2022 - 2026</div>
              <div className="timeline-title">Bachelor of Technology - Computer Science & Engineering</div>
              <div className="timeline-place">Shri Shankaracharya Institute of Professional Management and Technology, Raipur</div>
              <div className="timeline-description">Computer Science major with focus on web technologies and software development.</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;