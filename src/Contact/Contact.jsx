import React, { useState } from 'react';
import { FaUser, FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa';
import "./Contact.css"
import Section from '../components/Section';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
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
    if (!formData.name || !formData.email || !formData.message) {
      setError('All fields are required.');
      return;
    }
    // Simulate a successful submission for now
    console.log('Message sent successfully!', formData);
    setIsSubmitted(true);
    setError(null);
    setFormData({ name: '', email: '', message: '' }); // Reset the form
  };

  return (
    <Section id="contact" >
      <h2 className="text-xl font-bold ">Contact Me</h2>
      <form onSubmit={handleSubmit} className="contact-form">
        <div >
          <input
            type="text"
            name="name"
            id="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Name"
            required
          />
        </div>
        <div>
          <input
            type="email"
            name="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
            required
          />
        </div>
        <div className="">
          <textarea
            name="message"
            id="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Message"
            required
            rows="4"
          />
        </div>
        {error && <p className="text-red-500 ">{error}</p>}
        {isSubmitted && <p className="text-green-500">Thank you for your message!</p>}
        <button type="submit" className="submit-button">
          Send Message
        </button>
      </form>
      <div className="contact-info">
        <p><FaEnvelope className="inline" /> Email: <a href={`mailto:your.email@example.com`}>your.email@example.com</a></p>
        <p><FaGithub className="inline" /> GitHub: <a href={`https://github.com/yourusername`} target="_blank" rel="noopener noreferrer">github.com/yourusername</a></p>
        <p><FaLinkedin className="inline" /> LinkedIn: <a href={`https://linkedin.com/in/yourprofile`} target="_blank" rel="noopener noreferrer">linkedin.com/in/yourprofile</a></p>
      </div>
    </Section>
  );
};

export default Contact;