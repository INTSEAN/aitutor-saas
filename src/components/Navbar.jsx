import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes, faBrain, faHome, faDollarSign, faComments, faEnvelope, faUsers } from '@fortawesome/free-solid-svg-icons';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar" aria-label="Main Navigation">
      <h1 className="logo">
        <FontAwesomeIcon icon={faBrain} /> AI Tutor
      </h1>
      <button className="menu-toggle" onClick={toggleMenu} aria-label="Toggle menu">
        <FontAwesomeIcon icon={isOpen ? faTimes : faBars} />
      </button>
      <ul className={`nav-links ${isOpen ? 'open' : ''}`}>
        <li>
          <NavLink to="/" end onClick={toggleMenu}>
            <FontAwesomeIcon icon={faHome} /> Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/pricing" onClick={toggleMenu}>
            <FontAwesomeIcon icon={faDollarSign} /> Pricing
          </NavLink>
        </li>
        <li>
          <NavLink to="/chat" onClick={toggleMenu}>
            <FontAwesomeIcon icon={faComments} /> Chat
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact" onClick={toggleMenu}>
            <FontAwesomeIcon icon={faEnvelope} /> Contact
          </NavLink>
        </li>
        <li>
          <NavLink to="/team" onClick={toggleMenu}>
            <FontAwesomeIcon icon={faUsers} /> Team
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar; 