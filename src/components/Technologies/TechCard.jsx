import { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';

const TechCard = ({ title, technologies }) => {
  const { language } = useContext(ThemeContext);

  return (
    <div className="tech-card">
      <h3>{title[language]}</h3>
      <div className="tech-grid">
        {technologies.map((tech) => (
          <div key={tech.name} className="tech-item">
            <img src={tech.icon} alt={tech.name} className="tech-icon" />
            <span className="tech-name">{tech.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechCard;