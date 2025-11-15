import React from 'react';
import ReactDOM from 'react-dom/client';
import emailjs from '@emailjs/browser';
import './index.css';
import App from './App';
import AOS from 'aos'; // Add this
import 'aos/dist/aos.css';

emailjs.init({
  publicKey: 'l8aPEcFIgTJfvmyo8', // Replace with your EmailJS Public Key
});

AOS.init({
  duration: 800, // Animation duration in ms
  once: true, // Animate only once
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);