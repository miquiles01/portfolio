import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../css/Navbar.css';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setMenuOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <Link to="/">Thalita Miquiles</Link>
        </div>
        <button className="menu-toggle" onClick={toggleMenu}>
          ☰
        </button>
        <ul
          ref={menuRef}
          className={`navbar-links ${menuOpen ? 'active' : ''}`}
        >
          <li><Link to="/" onClick={toggleMenu}>Introdução</Link></li>
          <li><Link to="/aboutme" onClick={toggleMenu}>Sobre Mim</Link></li>
          <li><Link to="/education" onClick={toggleMenu}>Formação</Link></li>
          <li><Link to="/projects" onClick={toggleMenu}>Projetos</Link></li>
          <li><Link to="/contact" onClick={toggleMenu}>Contato</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
