import { useContext, useEffect, useState } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import { FaGithub, FaEye } from "react-icons/fa";

import Button from "../Contact/Button";

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
      <div className="contact-buttons">
        {project.demo && (
          <Button
            text={language === "en" ? "LIVE DEMO" : "VER DEMO"}
            link={project.demo}
            icon={<FaEye />}
            
          />
        )}
        {project.github && (
          <Button
            text="GITHUB"
            link={project.github}
            icon={<FaGithub />} 
          />
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
