import React from 'react'
import './Experience.css'
import { themeContext } from '../../Context';
import { useContext } from "react";


const Experience = () => {

  const theme =useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className='experience' id='Experience'>
     <div className='archivement'>
        <div className='circle' style={{color: darkMode?'var(--orange)':''}}>2+</div>
        <span style={{color: darkMode?'white':''}}>My</span>
        <span>Certificates</span>
     </div>
     <div className='archivement'>
        <div className='circle' style={{color: darkMode?'var(--orange)':''}}>10+</div>
        <span style={{color: darkMode?'white':''}}>Completed</span>
        <span>Projects</span>
     </div>
     <div className='archivement'>
        <div className='circle' style={{color: darkMode?'var(--orange)':''}}>5+</div>
        <span style={{color: darkMode?'white':''}}>Companies</span>
        <span>Work</span>
     </div>
    </div>
  )
}

export default Experience
