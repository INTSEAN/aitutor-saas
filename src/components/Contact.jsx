import { useState } from 'react';
import './Contact.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';

function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Implement form submission logic
    setSubmitted(true);
  };

  return (
    <section id="contact" className="contact-section">
      <h2>Contact Us</h2>
      {!submitted ? (
        <form className="contact-form" onSubmit={handleSubmit} aria-label="Contact Form">
          <label htmlFor="name">Your Name</label>
          <input 
            type="text" 
            id="name" 
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name" 
            required 
            aria-required="true"
          />
          <label htmlFor="email">Your Email</label>
          <input 
            type="email" 
            id="email" 
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your Email" 
            required 
            aria-required="true"
          />
          <label htmlFor="message">Your Message</label>
          <textarea 
            id="message" 
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your Message" 
            required 
            aria-required="true"
          ></textarea>
          <button type="submit" className="submit-button" aria-label="Send Message">
            <FontAwesomeIcon icon={faPaperPlane} /> Send Message
          </button>
        </form>
      ) : (
        <div className="thank-you-message" role="status">
          <h3>Thank you for reaching out!</h3>
          <p>We will get back to you shortly.</p>
        </div>
      )}
    </section>
  );
}

export default Contact; 