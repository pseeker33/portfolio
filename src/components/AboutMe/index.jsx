import { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';
import TypeWriter from './TypeWriter';
import './AboutMe.css';

const AboutMe = () => {
  const { language } = useContext(ThemeContext);

  const roles = {
    en: ["Data Analytics", "Blockchain Developer", "Web Developer"],
    es: ["Analista de Datos", "Desarrollador Blockchain", "Desarrollador Web"]
  };

  const description = {
    en: `Passionate about leveraging technology to solve complex problems. 
    With expertise in data analytics, blockchain development, and web development, 
    I bring a unique perspective to every project. My focus is on creating efficient, 
    scalable solutions that drive real-world impact.`,
    
    es: `Apasionado por utilizar la tecnología para resolver problemas complejos. 
    Con experiencia en análisis de datos, desarrollo blockchain y desarrollo web, 
    aporto una perspectiva única a cada proyecto. Mi enfoque está en crear soluciones 
    eficientes y escalables que generen impacto en el mundo real.`
  };

  return (
    <section id="about-me" className="about-me">
      <h1 className="name">Hoover Zavala</h1>
      <div className="roles">
        <TypeWriter 
          texts={roles[language]} 
          delay={100} 
          pauseBetweenTexts={2000} 
        />
      </div>
      <p className="description">{description[language]}</p>
    </section>
  );
};

export default AboutMe;