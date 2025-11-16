// import React, { useState, useEffect } from 'react';

// const Header = () => {
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [isHidden, setIsHidden] = useState(false);
//   const [lastScrollY, setLastScrollY] = useState(0);

//   useEffect(() => {
//     const handleScroll = () => {
//       const currentScrollY = window.scrollY;

//       // Shrink header after 100px scroll
//       setIsScrolled(currentScrollY >10);

//       // Hide header when scrolling down, show when scrolling up
//       if (currentScrollY > lastScrollY && currentScrollY > 100) {
//         setIsHidden(true); // Hide on scroll down
//       } else if (currentScrollY < lastScrollY) {
//         setIsHidden(false); // Show on scroll up
//       }

//       setLastScrollY(currentScrollY);
//     };

//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll); // Cleanup
//   }, [lastScrollY]);

//   return (
//     <header className={`${isScrolled ? 'scrolled' : ''} ${isHidden ? 'hidden' : 'visible'}`}>
//       <h1>CHANNA PRASAD</h1>
//       <p>Web Developer | Full Stack Developer</p>
//       <nav>
//         <a href="#about">About</a> | <a href="#education">Education</a> | <a href="#experience"> Experience </a> | <a href="#projects">Projects</a> | <a href="#certificates">Certificates</a> | <a href="#contact">Contact</a>
//       </nav>
//     </header>
//   );
// };

// export default Header;



import React, { useState, useEffect } from 'react';
import { FaSun, FaMoon } from 'react-icons/fa6';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Toggle dark mode and update body class
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  // Apply/remove dark-mode class to body
  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }, [isDarkMode]);

  // Handle scroll behavior
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsScrolled(currentScrollY > 100);
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsHidden(true);
      } else if (currentScrollY < lastScrollY) {
        setIsHidden(false);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <header className={`${isScrolled ? 'scrolled' : ''} ${isHidden ? 'hidden' : 'visible'}`}>
      <h1>CHANNA PRASAD</h1>
      <p>Web Developer | Full-Stack Developer</p>
      <nav>
        <a href="#about">About</a> | <a href="#projects">Projects</a> | <a href="#certificates">Certificates</a> | 
        <a href="#education">Education</a> | <a href="#experience">Experience</a> | <a href="#contact">Contact</a>
      </nav>
      <button
        className="dark-mode-toggle"
        onClick={toggleDarkMode}
        title={isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
      >
        {isDarkMode ? <FaSun /> : <FaMoon />}
      </button>
    </header>
  );
};

export default Header;