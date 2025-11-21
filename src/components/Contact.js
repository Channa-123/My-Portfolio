import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import { FaInstagram, FaLinkedin, FaGithub, FaWhatsapp, FaFacebook } from 'react-icons/fa';

const Contact = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [showPopup, setShowPopup] = useState(false); // ← NEW

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsLoading(true);
    setMessage('');

    const form = event.target;
    const formData = new FormData(form);

    const templateParams = {
      name: formData.get('name'),
      email: formData.get('email'),
      message: formData.get('message'),
    };

    emailjs.send(
      'service_lphbm07', // Your EmailJS Service ID
      'template_s7251z8', // Your EmailJS Template ID
      templateParams
    ).then(
      (response) => {
        console.log('SUCCESS!', response.status, response.text);
        setMessage('Message sent successfully!');
        setShowPopup(true);                    // ← Show popup
        setIsLoading(false);
        form.reset();

        // Auto hide popup after 4 seconds
        setTimeout(() => setShowPopup(false), 4000);
      },
      (error) => {
        console.log('FAILED...', error);
        setMessage('Failed to send message. Please try again.');
        setIsLoading(false);
      }
    );
  };

  // Close popup when clicking outside or the × button
  const closePopup = () => setShowPopup(false);

  return (
    <section id="contact" data-aos="fade-up">
      <h2>Contact Me</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Your Name" required />
        <input type="email" name="email" placeholder="Your Email" required />
        <textarea name="message" placeholder="Your Message" rows="5" required></textarea>
        <button type="submit" disabled={isLoading}>
          {isLoading ? 'Sending...' : 'Send Message'}
        </button>
      </form>
      {message && !showPopup && (
        <p style={{ color: message.includes('Failed') ? '#ff6b6b' : '#4ecdc4' }}>{message}</p>
      )}

      {/* Popup Toast */}
      {showPopup && (
        <div className="popup-toast">
          <div className="popup-content">
            <span>Message sent successfully!</span>
            <button onClick={closePopup} className="popup-close">
              ×
            </button>
          </div>
        </div>
      )}

      <p>
        Or email me at:{' '}
        <a href="mailto:sadcprasad99@gmail.com">
          <u>sadcprasad99@gmail.com</u>
        </a>
      </p>
      <div className="social-icons" data-aos="fade-up" data-aos-delay="200">
        
        <a
          href="https://github.com/Channa-123" // Replace with your Instagram URL
          target="_blank"
          rel="noopener noreferrer"
          className="social-icon github"
          title="Github"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/channa-prasad-95a5322a5" // Replace with your LinkedIn URL
          target="_blank"
          rel="noopener noreferrer"
          className="social-icon linkedin"
          title="LinkedIn"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://wa.me/+788993341" // Replace with your WhatsApp number (e.g., +1234567890)
          target="_blank"
          rel="noopener noreferrer"
          className="social-icon whatsapp"
          title="WhatsApp"
        >
          <FaWhatsapp />
        </a>
        <a
          href="https://www.instagram.com/channa_prasad_" // Replace with your Instagram URL
          target="_blank"
          rel="noopener noreferrer"
          className="social-icon instagram"
          title="Instagram"
        >
          <FaInstagram />
        </a>
        <a
          href="https://www.facebook.com/channa.prasad.794" // Replace with your Facebook URL
          target="_blank"
          rel="noopener noreferrer"
          className="social-icon facebook"
          title="Facebook"
        >
          <FaFacebook />
        </a>
      </div>
    </section>
  );
};

export default Contact;