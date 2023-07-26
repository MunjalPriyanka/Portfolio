import React from 'react';
import { BsLinkedin } from 'react-icons/bs';
import './footer.css';

const Footer = () => {
  return (
    <footer>
      <a href="#home" className="footer__logo">Kalyani Selvarajah</a>
      <ul className="permalinks">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#publication">Publication</a></li>
        <li><a href="#courses">Courses</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <div className="footer__socials">
      <a href="https://www.linkedin.com/in/kalyanis28/" target="_blank" rel="noreferrer" ><BsLinkedin /></a>
      </div>
      <div className="footer__copyright">
        <small>&copy; ET 2023. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer