import React, { useState, useRef } from 'react';
import '../styles/Contact.css';
import emailjs from '@emailjs/browser';
import toast, { Toaster } from 'react-hot-toast';

const Contact = () => {
  const form = useRef();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const result = await emailjs.sendForm(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_EMAILJS_PUBLIC_KEY
      );

      if (result.text === 'OK') {
        toast.success('Message sent successfully! I will get back to you soon.');
        setFormData({ name: '', email: '', subject: '', message: '' });
      }
    } catch (error) {
      toast.error('Failed to send message. Please try again later.');
      console.error('Error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="contact">
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
          <form ref={form} onSubmit={handleSubmit}>
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
            <button 
              type="submit" 
              className="btn primary-btn"
              disabled={isSubmitting}
            >
              <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
              <i className="  fas fa-paper-plane"></i>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;