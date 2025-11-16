import React from 'react';
import project1Image from '../assets/Reserch.png'; 
import project2Image from '../assets/FaceRec.png';
import project3Image from '../assets/ARG.png';
import project4Image from '../assets/NewLanka.png';
import project5Image from '../assets/Kensington.png';
import project6Image from '../assets/app.png';


const Projects = () => {
  return (
    <section id="projects">
      <h2>Projects</h2>
      <div className="project-grid">
        <div
          className="project-card"
          style={{
            backgroundImage: `url(${project1Image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <div className="card-overlay">
            <h3>Project 1</h3>
            <p>Automated detection and translation of pictorial symbols - Final Year Research Project</p>
            <a href="https://imagesnapgroup09.my.canva.site/" target="_blank" rel="noopener noreferrer">
              View Project
            </a>
          </div>
        </div>
        <div
          className="project-card"
          style={{
            backgroundImage: `url(${project2Image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <div className="card-overlay">
            <h3>Project 2</h3>
            <p>Face Recognition System - Group Project</p>
            <a href="https://www.linkedin.com/posts/channa-prasad-95a5322a5_attendancesystem-teamcollaboration-python-activity-7178844755290718209-1rhQ/?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEmVUdYBbjWml4NEhmvKkXkx0KDJ8slLfU0" target="_blank" rel="noopener noreferrer">
              View Project
            </a>
          </div>
        </div>
        <div
          className="project-card"
          style={{
            backgroundImage: `url(${project3Image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <div className="card-overlay">
            <h3>Project 3</h3>
            <p>ARG Workforce - Job Posting and Seeking Website</p>
            <a href="https://arg-workforce-9aq4.vercel.app/" target="_blank" rel="noopener noreferrer">
              View Project
            </a>
          </div>
        </div>
        <div
          className="project-card"
          style={{
            backgroundImage: `url(${project4Image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <div className="card-overlay">
            <h3>Project 4</h3>
            <p>New Lanka Gold House - E Commerce Platform Website</p>
            <a href="https://www.newlankagoldhouse.com/" target="_blank" rel="noopener noreferrer">
              View Project
            </a>
          </div>
        </div>
        <div
          className="project-card"
          style={{
            backgroundImage: `url(${project5Image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <div className="card-overlay">
            <h3>Project 5</h3>
            <p>Kensington - Website for apartments and houses for sale or rent</p>
            <a href="https://kensington.vercel.app/" target="_blank" rel="noopener noreferrer">
              View Project
            </a>
          </div>
        </div>
        <div
          className="project-card"
          style={{
            backgroundImage: `url(${project6Image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <div className="card-overlay">
            <h3>Project 6</h3>
            <p>Expense Master Application</p>
            <a href="https://www.linkedin.com/posts/channa-prasad-95a5322a5_flutter-flutterdevelopment-dart-activity-7178116131424018432-gwSw?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEmVUdYBbjWml4NEhmvKkXkx0KDJ8slLfU0" target="_blank" rel="noopener noreferrer">
              View Project
            </a>
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default Projects;