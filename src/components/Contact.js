import React, { useState } from 'react';
import '../styles/Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <section id="contact" className="contact">
      <div className="section-header">
        <h2>Get In Touch</h2>
        <div className="section-divider"></div>
      </div>
      
      <div className="contact-container">
        <div className="contact-info">
          <h3>Let's talk about your project</h3>
          <p>Feel free to reach out if you're looking for a developer, have a question, or just want to connect.</p>
          
          <div className="info-item">
            <i className="fas fa-map-marker-alt"></i>
            <div>
              <h4>Location</h4>
              <p>Raipur, India</p>
            </div>
          </div>
          
          <div className="info-item">
            <i className="fas fa-envelope"></i>
            <div>
              <h4>Email</h4>
              <a href="mailto:jaygupta.works@gmail.com">
                <p>jaygupta.works@gmail.com</p>
              </a>
            </div>
          </div>
          
          <div className="info-item">
            <i className="fas fa-phone"></i>
            <div>
              <h4>Phone</h4>
              <a href="tel:+919302468900">
                <p>+91 9302468900</p>
              </a>
            </div>
          </div>
          
          <div className="social-links">
            <a href="https://github.com/JayGupta930" className="social-icon"><i className="fab fa-github"></i></a>
            <a href="www.linkedin.com/in/jaygupta930" className="social-icon"><i className="fab fa-linkedin"></i></a>
          </div>
        </div>
        
        <div className="contact-form">
          <form onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group floating">
                <input 
                  type="text" 
                  name="name" 
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  required 
                />
                <label htmlFor="name">Your Name</label>
              </div>
              <div className="form-group floating">
                <input 
                  type="email" 
                  name="email" 
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  required 
                />
                <label htmlFor="email">Your Email</label>
              </div>
            </div>
            <div className="form-group floating">
              <input 
                type="text" 
                name="subject" 
                id="subject"
                value={formData.subject}
                onChange={handleChange}
                required 
              />
              <label htmlFor="subject">Subject</label>
            </div>
            <div className="form-group floating">
              <textarea 
                name="message" 
                id="message"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
              <label htmlFor="message">Your Message</label>
            </div>
            <button type="submit" className="btn primary-btn">
              <span>Send Message</span>
              <i className="fas fa-paper-plane"></i>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;