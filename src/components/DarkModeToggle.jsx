import { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import './DarkModeToggle.css';

function DarkModeToggle() {
  const { darkMode, toggleDarkMode } = useContext(ThemeContext);

  return (
    <button 
      className="dark-mode-toggle" 
      onClick={toggleDarkMode} 
      aria-label="Toggle Dark Mode"
    >
      <FontAwesomeIcon icon={darkMode ? faSun : faMoon} />
    </button>
  );
}

export default DarkModeToggle; 