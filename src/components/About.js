

// import React from 'react';
// import profileImage from '../assets/profile1.jpg';
// import resumeFile from '../assets/resume.pdf';
// import { FaDownload } from 'react-icons/fa6';

// const About = () => {
//   return (
//     <section id="about" data-aos="fade-up">
//       <h2>About Me</h2>
//       <div className="about-container">
//         <div className="about-text">
//           <p>
//             I am a graduate student specializing in Software Technology at the University of Sri
//             Jayewardenepura. Results-driven Full-Stack Developer with hands-on experience in both
//             frontend and backend development, specializing in React.js, Next.js, Node.js, MongoDB, and
//             Tailwind CSS. I am passionate about building scalable web applications, optimizing APIs,
//             improving user experiences, and using technology to solve real-world problems. I have
//             experience working in Agile environments and delivering high-quality, efficient solutions.
//           </p>
//           <a href={resumeFile} download="resume.pdf" className="resume-button">
//             <button>
//               <FaDownload style={{ color: '#ff0000c9', marginRight: '0.3rem' }} /> Resume
//             </button>
//           </a>
//         </div>
//         <div className="about-image">
//           <img
//             src={profileImage}
//             alt="Profile"
//             style={{
//               //width: '380px',
//               //height: '400px',
//               borderRadius: '20px', // Square with rounded corners
//               display: 'block',
//               border: '4px solid transparent',
//               background: 'linear-gradient(45deg, #ff6b6b, #4ecdc4) border-box',
//               boxShadow: '0 8px 24px rgba(0, 0, 0, 0.3)',
//             }}
//           />
//         </div>
//       </div>
//     </section>
//   );
// };

// export default About;


import React from 'react';
import profileImage from '../assets/profile1.jpg';
import resumeFile from '../assets/resume.pdf';
import { FaDownload } from 'react-icons/fa6';

const About = () => {
  return (
    <section id="about" data-aos="fade-up">
      <h2>About Me</h2>
      <div className="about-container">
        <div className="about-text">
          <p>
            I am a graduate student specializing in Software Technology at the University of Sri
            Jayewardenepura. Results-driven Full-Stack Developer with hands-on experience in both
            frontend and backend development, specializing in React.js, Next.js, Node.js, MongoDB, and
            Tailwind CSS. I am passionate about building scalable web applications, optimizing APIs,
            improving user experiences, and using technology to solve real-world problems. I have
            experience working in Agile environments and delivering high-quality, efficient solutions.
          </p>
          <a href={resumeFile} download="resume.pdf" className="resume-button">
            <button>
              <FaDownload style={{ color: '#ff0000c9', marginRight: '0.3rem' }} /> Resume
            </button>
          </a>
        </div>
        <div className="about-image">
          <img
            src={profileImage}
            alt="Profile"
            style={{
              //width: '380px',
              //height: '400px',
              borderRadius: '20px',
              display: 'block',
              border: '4px solid transparent',
              background: 'linear-gradient(45deg, #ff6b6b, #4ecdc4) border-box',
              boxShadow: '0 8px 24px rgba(0, 0, 0, 0.3)',
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default About;