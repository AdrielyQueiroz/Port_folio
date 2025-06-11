import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import './style.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="menu-icon" onClick={toggleMenu}>
        {menuOpen ? <FaTimes /> : <FaBars />}
      </div>
      <ul className={`list ${menuOpen ? 'open' : ''}`}>
        <li><a href="#" onClick={closeMenu}>Home</a></li>
        <li><a href="#about" onClick={closeMenu}>Sobre</a></li>
        <li><a href="#skills" onClick={closeMenu}>Habilidades</a></li>
        <li><a href="#projects" onClick={closeMenu}>Projetos</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;



