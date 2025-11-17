import React from 'react';

const Certificates = () => {
  return (
    <section id="certificates">
      <h2>Certificates</h2>
      <div className="cert-grid">
        <div className="cert-card">
          <h3>Web Design for Beginners E-Certificate</h3>
          <p>Issued by: University of Moratuwa | Feb, 2024</p>
          <a href="https://www.linkedin.com/in/channa-prasad-95a5322a5/overlay/1709301678041/single-media-viewer/?type=DOCUMENT&profileId=ACoAAEmVUdYBbjWml4NEhmvKkXkx0KDJ8slLfU0" 
          target="_blank" rel="noopener noreferrer">View Certificate</a>
        </div>
        <div className="cert-card">
          <h3>HTML, CSS, and JavaScript for Web Developers</h3>
          <p>Issued by: Coursera | March 30, 2024</p>
          <a href="https://www.coursera.org/account/accomplishments/verify/KGZPMKKXV92Q" target="_blank" rel="noopener noreferrer">View Certificate</a>
        </div>
        {/* Add more cert cards as needed */}
      </div>
    </section>
  );
};

export default Certificates;