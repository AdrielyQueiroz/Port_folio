import React from 'react';
import { FaLinkedin } from "react-icons/fa";
import './style.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="contact">
          <a
            href="https://www.linkedin.com/in/adriely-queiroz-b5b2481b2/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className='icon-li'/>
          </a>
        </div>
        <p className="footer-text">Todos os direitos reservados &copy; 2025</p>
      </div>
    </footer>
  );
};

export default Footer;
