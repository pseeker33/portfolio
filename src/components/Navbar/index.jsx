import { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';
import Switch from 'react-switch';
import { VscColorMode } from "react-icons/vsc";
import './Navbar.css';

const Navbar = () => {
  const { isDarkMode, toggleTheme, language, toggleLanguage } = useContext(ThemeContext);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    const offset = document.querySelector('.navbar').offsetHeight;
    const targetPosition = section.getBoundingClientRect().top + window.scrollY - offset;
    const startPosition = window.scrollY;
    const totalDistance = targetPosition - startPosition;
  
    const easeDistance = 50; // Distancia para las fases ease-in y ease-out
    const easeDuration = 500; // Duración fija de 1 segundo (en ms) para cada fase
    const remainingDistance = totalDistance - 2 * easeDistance; // Distancia central
    const totalDuration = easeDuration * 2 + Math.abs(remainingDistance) / 2; // Duración total dinámica
  
    let startTime = null;
  
    const customScroll = (currentTime) => {
      if (!startTime) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
  
      let scrollValue;
  
      if (timeElapsed < easeDuration) {
        // Fase 1: Inicio suave (ease-in)
        const progress = timeElapsed / easeDuration; // Normalizar el tiempo
        scrollValue = startPosition + easeDistance * progress * progress; // Movimiento cuadrático
      } else if (timeElapsed < totalDuration - easeDuration) {
        // Fase 2: Movimiento rápido (linear)
        const elapsedInMiddle = timeElapsed - easeDuration;
        const middleDistance = remainingDistance * (elapsedInMiddle / (totalDuration - 2 * easeDuration));
        scrollValue = startPosition + easeDistance + middleDistance;
      } else if (timeElapsed < totalDuration) {
        // Fase 3: Desaceleración suave (ease-out)
        const elapsedInEaseOut = timeElapsed - (totalDuration - easeDuration);
        const progress = elapsedInEaseOut / easeDuration; // Normalizar el tiempo
        scrollValue =
          targetPosition - easeDistance + easeDistance * (1 - (1 - progress) * (1 - progress)); // Movimiento cuadrático inverso
      } else {
        // Asegurar la posición final exacta
        scrollValue = targetPosition;
      }
  
      window.scrollTo(0, scrollValue);
  
      if (timeElapsed < totalDuration) {
        requestAnimationFrame(customScroll);
      }
    };
  
    requestAnimationFrame(customScroll);
  };
  
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <img src="/placeholder-logo.svg" alt="Logo" className="logo" />
        <span className="portfolio-label">Portfolio</span>
      </div>

      <div className="navbar-center">
        <button onClick={() => scrollToSection('about-me')}>
          {language === 'en' ? 'About Me' : 'Sobre Mí'}
        </button>
        <button onClick={() => scrollToSection('projects')}>
          {language === 'en' ? 'Projects' : 'Proyectos'}
        </button>
        <button onClick={() => scrollToSection('technologies')}>
          {language === 'en' ? 'Technologies' : 'Tecnologías'}
        </button>
        <button onClick={() => scrollToSection('contact')}>
          {language === 'en' ? 'Contact' : 'Contacto'}
        </button>
      </div>
      <div className="navbar-right">
        <div className="language-selector">
          <Switch
            onChange={toggleLanguage}
            checked={language === 'es'}
            offColor="#3D7ADD"
            onColor="#3D7ADD"
            onHandleColor="#ffffff"
            offHandleColor="#ffffff"
            handleDiameter={20}
            checkedIcon={
              <img 
                src="/images/en-flag.png" 
                alt="English" 
                style={{ 
                  width: 14, 
                  height: 14, 
                  position: 'absolute', 
                  top: '50%', 
                  left: '50%', 
                  transform: 'translate(-50%, -50%)' 
                }}  
              />
            }
            uncheckedIcon={
              <img 
                src="/images/es-flag.png" 
                alt="Español" 
                style={{ 
                  width: 14, 
                  height: 14, 
                  position: 'absolute', 
                  top: '50%', 
                  left: '50%', 
                  transform: 'translate(-50%, -50%)' 
                }} 
              />
            }
          />
        </div>
        <button
          onClick={toggleTheme}
          aria-label="color mode"
          className="theme-toggle"
        >
          <VscColorMode className="theme-icon" />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;