import { useContext, useState, useEffect } from 'react';
import { ThemeContext } from '../../context/ThemeContext';
import TypeWriter from './TypeWriter';
import { roles, descriptions } from '../../data/about';
import './AboutMe.css';

const AboutMe = () => {
  const { language } = useContext(ThemeContext);
  const [currentDesc, setCurrentDesc] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);

  
  useEffect(() => {
    if (isAutoPlay) {
      const timer = setInterval(() => {
        setCurrentDesc((prev) => (prev + 1) % 3);
      }, 11000);
      return () => clearInterval(timer);
    }
  }, [isAutoPlay]);

  return (
    <section id="about-me" className="about-me">
      <h1 className="name">Hoover Zavala</h1>
      <div className="roles">
        <TypeWriter 
          texts={roles[language]} 
          delay={50} 
          pauseBetweenTexts={1000} 
        />
      </div>
      <img 
        src="../../../public/images/profile.jpeg" 
        alt="Hoover Zavala" 
        className="profile-picture" 
      />
      <div className="description-container">
        <p className="description fade">{descriptions[language][currentDesc]}</p>
        <div className="description-controls">
          {[0, 1, 2].map((index) => (
            <button
              key={index}
              className={`control-dot ${currentDesc === index ? 'active' : ''}`}
              onClick={() => {
                setCurrentDesc(index);
                setIsAutoPlay(false);
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutMe;