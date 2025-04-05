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
    // Add form submission logic here
    console.log('Form submitted:', formData);
    // Reset form
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
              <p>Jay's City, Country</p>
            </div>
          </div>
          
          <div className="info-item">
            <i className="fas fa-envelope"></i>
            <div>
              <h4>Email</h4>
              <p>jayguptajaygupta8@gmail.com</p>
            </div>
          </div>
          
          <div className="info-item">
            <i className="fas fa-phone"></i>
            <div>
              <h4>Phone</h4>
              <p>+1 (123) 456-7890</p>
            </div>
          </div>
          
          <div className="social-links">
            <a href="https://github.com/JayGupta930" className="social-icon"><i className="fab fa-github"></i></a>
            <a href="www.linkedin.com/in/jaygupta930" className="social-icon"><i className="fab fa-linkedin"></i></a>
            {/* <a href="#" className="social-icon"><i className="fab fa-twitter"></i></a>
            <a href="#" className="social-icon"><i className="fab fa-dribbble"></i></a> */}
          </div>
        </div>
        
        <div className="contact-form">
          <form onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group">
                <input 
                  type="text" 
                  name="name" 
                  placeholder="Your Name" 
                  value={formData.name}
                  onChange={handleChange}
                  required 
                />
              </div>
              <div className="form-group">
                <input 
                  type="email" 
                  name="email" 
                  placeholder="Your Email" 
                  value={formData.email}
                  onChange={handleChange}
                  required 
                />
              </div>
            </div>
            <div className="form-group">
              <input 
                type="text" 
                name="subject" 
                placeholder="Subject" 
                value={formData.subject}
                onChange={handleChange}
                required 
              />
            </div>
            <div className="form-group">
              <textarea 
                name="message" 
                placeholder="Your Message" 
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <button type="submit" className="btn primary-btn">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
