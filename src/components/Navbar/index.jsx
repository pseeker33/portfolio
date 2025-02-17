import { useContext, useState } from "react"
import { ThemeContext } from "../../context/ThemeContext"
import Switch from "react-switch"
import { VscColorMode } from "react-icons/vsc"
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import "./Navbar.css"

const Navbar = () => {
  const { toggleTheme, language, toggleLanguage } = useContext(ThemeContext)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId)
    const offset = document.querySelector(".navbar").offsetHeight
    const targetPosition = section.getBoundingClientRect().top + window.scrollY - offset
    const startPosition = window.scrollY
    const totalDistance = targetPosition - startPosition

    const easeDistance = 50
    const easeDuration = 500
    const remainingDistance = totalDistance - 2 * easeDistance
    const totalDuration = easeDuration * 2 + Math.abs(remainingDistance) / 2

    let startTime = null

    const customScroll = (currentTime) => {
      if (!startTime) startTime = currentTime
      const timeElapsed = currentTime - startTime

      let scrollValue

      if (timeElapsed < easeDuration) {
        const progress = timeElapsed / easeDuration
        scrollValue = startPosition + easeDistance * progress * progress
      } else if (timeElapsed < totalDuration - easeDuration) {
        const elapsedInMiddle = timeElapsed - easeDuration
        const middleDistance = remainingDistance * (elapsedInMiddle / (totalDuration - 2 * easeDuration))
        scrollValue = startPosition + easeDistance + middleDistance
      } else if (timeElapsed < totalDuration) {
        const elapsedInEaseOut = timeElapsed - (totalDuration - easeDuration)
        const progress = elapsedInEaseOut / easeDuration
        scrollValue = targetPosition - easeDistance + easeDistance * (1 - (1 - progress) * (1 - progress))
      } else {
        scrollValue = targetPosition
      }

      window.scrollTo(0, scrollValue)

      if (timeElapsed < totalDuration) {
        requestAnimationFrame(customScroll)
      }
    }

    requestAnimationFrame(customScroll)
    setIsMenuOpen(false); // Cerrar el menú después de hacer clic
  }

  const navButtons = [
    { id: "about-me", labelEn: "About Me", labelEs: "Sobre Mí" },
    { id: "projects", labelEn: "Projects", labelEs: "Proyectos" },
    { id: "technologies", labelEn: "Technologies", labelEs: "Tecnologías" },
    { id: "contact", labelEn: "Contact", labelEs: "Contacto" },
  ]

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <img src="/mi-rounded-avatar-light.jpg" alt="Logo" className="logo" />
        <span className="portfolio-label">Portfolio</span>
      </div>

      {/* Botón de menú hamburguesa */}
      <button 
        className="menu-toggle"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        aria-label="Toggle menu"
      >
        {isMenuOpen ? <RiCloseLine /> : <RiMenu3Line />}
      </button>

      {/* Menú principal */}
      <div className={`navbar-center ${isMenuOpen ? 'active' : ''}`}>
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
        
        {/* Controles para móvil */}
        <div className="mobile-controls">
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
      </div>

      {/* Controles para desktop */}
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
}

export default Navbar

