import React from 'react';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Certificates from './components/Certificates';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Education from './components/Education';
import Experience from './components/Experience';

function App() {
  return (
    <div className="App">
      <Header />
      <About />
      <Education/>
      <Experience/>
      <Projects />
      <Certificates />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;