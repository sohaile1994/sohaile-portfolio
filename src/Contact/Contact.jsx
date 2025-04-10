import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaUser, FaEnvelope, FaLinkedin, FaGithub, FaPaperPlane } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    email: '',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (!formData.firstName || !formData.email || !formData.message) {
      setError('All fields are required.');
      return;
    }
    // Simulate a successful submission for now
    console.log('Message sent successfully!', formData);
    setIsSubmitted(true);
    setError(null);
    setFormData({ firstName: '', email: '', message: '' }); // Reset the form
  };

  return (
    <section id="contact" className="p-lg">
      <h2 className="text-xl font-bold mb-lg">Contact Me</h2>
      <form onSubmit={handleSubmit} className="contact-form mb-lg">
        <div className="mb-md">
          <label htmlFor="firstName">Your Name</label>
          <input
            type="text"
            name="firstName"
            id="firstName"
            value={formData.firstName}
            onChange={handleChange}
            placeholder="Your Name"
            required
          />
        </div>
        <div className="mb-md">
          <label htmlFor="email">Your Email</label>
          <input
            type="email"
            name="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your Email"
            required
          />
        </div>
        <div className="mb-md">
          <label htmlFor="message">Your Message</label>
          <textarea
            name="message"
            id="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your Message"
            required
            rows="4"
          />
        </div>
        {error && <p className="text-red-500 mb-md">{error}</p>}
        {isSubmitted && <p className="text-green-500 mb-md">Thank you for your message!</p>}
        <button type="submit" className="submit-button">
          Send Message
        </button>
      </form>
      <div className="contact-info">
        <p><FaEnvelope className="inline" /> Email: <a href={`mailto:your.email@example.com`}>your.email@example.com</a></p>
        <p><FaGithub className="inline" /> GitHub: <a href={`https://github.com/yourusername`} target="_blank" rel="noopener noreferrer">github.com/yourusername</a></p>
        <p><FaLinkedin className="inline" /> LinkedIn: <a href={`https://linkedin.com/in/yourprofile`} target="_blank" rel="noopener noreferrer">linkedin.com/in/yourprofile</a></p>
      </div>
    </section>
  );
};

export default Contact;