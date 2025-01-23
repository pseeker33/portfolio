import { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';
import { FaGithub } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  const { isDarkMode } = useContext(ThemeContext);

  return (
    <footer className="footer">
      <a 
        href="https://github.com/pseeker33" 
        target="_blank" 
        rel="noopener noreferrer"
        className="footer-link"
      >
        <FaGithub 
          size={24} 
          color={isDarkMode ? '#ffffff' : '#000000'} // Cambia de color según el modo oscuro
          className="github-icon" 
        />
        <span>Created by Hoover Zavala</span>
      </a>
    </footer>
  );
};

export default Footer;