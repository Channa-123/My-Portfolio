import React from 'react';
import { FaLocationDot } from "react-icons/fa6";


const Experience = () => {
  return (
    <section id="experience" data-aos="fade-up">
      <h2>My Work Experience</h2>
      <div className="timeline">
        <div className="timeline-item" data-aos="fade-right" data-aos-delay="100">
          <div className="timeline-content">
            <h3>Intern Software Engineer</h3>
            <p>FagginApps Pvt Ltd. (NeuraIT)  | July 2024 - Feb 2025 <h4><FaLocationDot style={{ color: '#ff0000c9' }}  /> SLIIT Innovate, Malabe </h4></p>
            <ul>
              <li>Developed scalable web applications using React.js, Node.js, and MongoDB.</li>
              <li>Collaborated on software development tasks under the guidance of senior engineers, UI/UX,
                QA, PM and backend developers.</li>
              <li>Collaborated in Agile teams & team discussions to deliver high-quality features.</li>
            </ul>
          </div>
        </div>
        <div className="timeline-item" data-aos="fade-right" data-aos-delay="200">
          <div className="timeline-content">
            <h3></h3>
            <p></p>
            <ul>
              <li>Supported the improvement of software features through coding, debugging, testing
                activities and Developed frontend features.</li>
              <li>Gained practical experience using industry-standard tools and technologies to deliver clientfocused
                solutions.</li>
              <li>Contributed to code reviews and documentation.</li>
            </ul>
          </div>
        </div>
        {/* Add more timeline items as needed */}
      </div>
    </section>
  );
};

export default Experience;