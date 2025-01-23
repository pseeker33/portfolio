import { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';

const TechCard = ({ title, skills }) => {
  const { language } = useContext(ThemeContext);

  return (
    <div className="technology-card">
      <h3 className="technology-card-title">
        {typeof title === 'object' ? title[language] : title}
      </h3>
      <div className="technology-skills-list">
        {skills.map((skill, index) => (
          <div key={index} className="technology-skill-item">
            <img 
              src={skill.image} 
              alt={skill.name} 
              className="technology-skill-icon" 
            />
            {skill.name}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechCard;