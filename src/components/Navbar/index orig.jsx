import { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';
import './Navbar.css';

const Navbar = () => {
  const { isDarkMode, toggleTheme, language, toggleLanguage } = useContext(ThemeContext);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    const offset = document.querySelector('.navbar').offsetHeight;
    const targetPosition = section.getBoundingClientRect().top + window.scrollY - offset;
    const startPosition = window.scrollY;
    const distance = targetPosition - startPosition;
  
    // Define el tiempo base por píxel
    const timePerPixel = 0.8; // 0.8 ms por cada píxel
    const duration = Math.abs(distance) * timePerPixel;
    let startTime = null;

    // Función de easing personalizada
    const customEase = (time, start, change, duration) => {
      const accelerationPhase = 0.45; // 40% del tiempo total se dedica a ease-in
      const decelerationPhase = 0.45; // 40% del tiempo total se dedica a ease-out
      const middlePhase = 1 - accelerationPhase - decelerationPhase; // Tiempo restante para movimiento rápido

      time /= duration;
      if (time < accelerationPhase) {
        // Ease-in
        const adjustedTime = time / accelerationPhase;
        return change * (adjustedTime * adjustedTime) * accelerationPhase + start;
      } else if (time < accelerationPhase + middlePhase) {
        // Movimiento rápido (linear)
        const adjustedTime = (time - accelerationPhase) / middlePhase;
        return change * (accelerationPhase + adjustedTime * middlePhase) + start;
      } else {
        // Ease-out
        const adjustedTime = (time - accelerationPhase - middlePhase) / decelerationPhase;
        return change * (1 - (1 - adjustedTime) * (1 - adjustedTime) * decelerationPhase) + start;
      }
    };
  
    const animationLoop = (currentTime) => {
      if (!startTime) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
      const scrollValue = customEase(timeElapsed, startPosition, distance, duration);
      window.scrollTo(0, scrollValue);
  
      if (timeElapsed < duration) {
        requestAnimationFrame(animationLoop);
      } else {
        window.scrollTo(0, targetPosition); // Asegurar posición final exacta
      }
    };
  
    requestAnimationFrame(animationLoop);
  };
  

/*   const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    const offset = document.querySelector('.navbar').offsetHeight;
    const targetPosition = section.getBoundingClientRect().top + window.pageYOffset - offset;
    
    window.scrollTo({
      top: targetPosition,
      behavior: 'smooth'  // Usa el scroll nativo del navegador
    });
  }; */

  /* const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    const start = window.pageYOffset;
    const target = section.offsetTop;
    const distance = target - start;
    const duration = 3000; // 3 seconds
    let startTime = null;

    function animation(currentTime) {
      if (startTime === null) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
      const progress = Math.min(timeElapsed / duration, 1);
      
      // Custom easing function for acceleration and deceleration
      let run = 0;
      if (progress <= 1/3) {
        // First second: Start moving (ease-in)
        run = progress * 3 * (progress * 3) / 2;
      } else if (progress <= 2/3) {
        // Second second: Move fast (linear)
        run = progress;
      } else {
        // Third second: Slow down (ease-out)
        const t = (progress - 2/3) * 3;
        run = 2/3 + (1 - (1 - t) * (1 - t)) / 3;
      }

      window.scrollTo(0, start + distance * run);

      if (timeElapsed < duration) {
        requestAnimationFrame(animation);
      }
    }

    requestAnimationFrame(animation);
  }; */

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
          <button 
            className={`language-toggle ${language === 'es' ? 'active' : ''}`}
            onClick={toggleLanguage}
          >
            <img 
              src={`/${language === 'en' ? 'en' : 'es'}-flag.svg`} 
              alt={language === 'en' ? 'English' : 'Español'} 
            />
          </button>
        </div>
        
        <div className="theme-selector">
          <button 
            className={`theme-toggle ${isDarkMode ? 'dark' : 'light'}`}
            onClick={toggleTheme}
          >
            <img 
              src={`/${isDarkMode ? 'moon' : 'sun'}.svg`} 
              alt={isDarkMode ? 'Dark Mode' : 'Light Mode'} 
            />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;