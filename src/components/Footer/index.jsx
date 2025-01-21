import { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';
import './Footer.css';

const Footer = () => {
  const { isDarkMode } = useContext(ThemeContext);

  return (
    <footer className="footer">
      <a 
        href="https://github.com/your-username" 
        target="_blank" 
        rel="noopener noreferrer"
        className="footer-link"
      >
        <img 
          src={`/icons/github-${isDarkMode ? 'light' : 'dark'}.svg`} 
          alt="GitHub" 
          className="github-icon"
        />
        <span>Created by Hoover Zavala</span>
      </a>
    </footer>
  );
};

export default Footer;