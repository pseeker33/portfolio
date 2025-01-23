import { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';
import { techStack } from '../../data/techstack';
import TechCard from './TechCard';
import './Technologies.css';

const Technologies = () => {
  const { language } = useContext(ThemeContext);

  return (
    <section id="technologies" className="technologies-container">
      <div className="technologies-wrapper">
        <h2 className="technologies-title">
          {language === 'en' ? 'Technologies' : 'Tecnologías'}
        </h2>
        <p className="technologies-description">
          {language === 'en'
            ? 'Here are some of the skills I have been working on over the past 3 years. 🎯'
            : 'Aquí están algunas de las habilidades en las que he estado trabajando durante los últimos 3 años. 🎯'}
        </p>
        <div className="technologies-cards-container">
          {techStack.map((category, index) => (
            <TechCard
              key={index}
              title={category.title}
              skills={category.skills}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Technologies;