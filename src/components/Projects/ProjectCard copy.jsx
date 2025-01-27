import { useContext, useEffect, useState } from "react";
import { ThemeContext } from "../../context/ThemeContext";

const ProjectCard = ({ project }) => {
  const { language } = useContext(ThemeContext);
  const [key, setKey] = useState(0);

  // Actualizar key cuando cambia el proyecto para forzar re-render
  useEffect(() => {
    setKey(prev => prev + 1);
  }, [project.id]);

  return (
    <div key={key} className="project-card">
      <img
        className="project-image"
        src={project.image}
        alt={project.title[language]}
      />
      <div className="project-technologies">
        {project.technologies.map((tech, index) => (
          <span key={index} className="tech-tag">{tech}</span>
        ))}
      </div>
      <div className="project-links">
        {project.demo && (
          <a href={project.demo} target="_blank" rel="noopener noreferrer">
            {language === "en" ? "Live Demo" : "Demo en Vivo"}
          </a>
        )}
        {project.github && (
          <a href={project.github} target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
