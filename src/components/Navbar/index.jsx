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