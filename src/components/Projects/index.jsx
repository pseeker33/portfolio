import { useState, useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';
import ProjectNav from './ProjectNav';
import ProjectCard from './ProjectCard';
import { projectCategories } from '../../data/projects';
import './Projects.css';

const Projects = () => {
  const { language } = useContext(ThemeContext);
  const [activeCategory, setActiveCategory] = useState(null);
  const [activeProject, setActiveProject] = useState(null);

  return (
    <section id="projects" className="projects">
      <h2>{language === 'en' ? 'Projects' : 'Proyectos'}</h2>
      <div className="projects-container">
        <ProjectNav 
          categories={projectCategories}
          activeCategory={activeCategory}
          setActiveCategory={setActiveCategory}
          activeProject={activeProject}
          setActiveProject={setActiveProject}
        />
        {activeProject && (
          <div className="project-display">
            <ProjectCard project={activeProject} />
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;