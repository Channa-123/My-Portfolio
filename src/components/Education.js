import React from 'react';
import { FaGraduationCap } from 'react-icons/fa';
import img from '../assets/img.png';


const Education = () => {
  return (
    <section id="education">
      <h2>Education</h2>
      <div className="edu-grid">
        <div className="edu-card">
            <FaGraduationCap style={{ fontSize: '5rem', marginBottom: '1rem' }} />
           <h3>Bachelor of Information and Communication Technology
          (Software Technology)</h3>
          <p>University of Sri Jayewardenepura | 2021 - 2025</p>
          <p>Relevant coursework: Web Development, Machine Learning, Data Structures, Artificial Intelligence</p>
        </div>
        <div className="edu-card">
          <img
                  src={img}
                  alt="Profile"
                  style={{
                    width: '80px',
                    height: '80px',
                    margin: '0 auto 1.5rem',
                    
                  }}
                />
          <h3>G. C. E Advanced Level Examination</h3>
          <p>WP/MT/ Mihindu Central college | 2016 - 2018</p>
          <p>Engineering Technology Scheme - 2019 A/L </p>
        </div>
        {/* Add more education cards as needed */}
      </div>
    </section>
  );
};

export default Education;