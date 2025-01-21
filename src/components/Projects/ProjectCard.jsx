import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";

const ProjectCard = ({ project }) => {
  const { language } = useContext(ThemeContext);

  return (
    <div className="project-card">
      <img
        src={project.image}
        alt={project.title[language]}
        className="project-image"
      />
      <div className="project-info">
        <h3>{project.title[language]}</h3>
        <p>{project.description[language]}</p>
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
    </div>
  );
};

export default ProjectCard;
