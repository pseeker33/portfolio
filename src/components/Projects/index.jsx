import { useState, useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';
import ProjectNav from './ProjectNav';
import ProjectCard from './ProjectCard';
import './Projects.css';

const Projects = () => {
  const { language } = useContext(ThemeContext);
  const [activeCategory, setActiveCategory] = useState(null);
  const [activeProject, setActiveProject] = useState(null);

  // Sample project data - Replace with your actual projects
  const projectCategories = {
    data: [
      {
        id: 'data1',
        title: {
          en: 'Data Analysis Project 1',
          es: 'Proyecto de Análisis de Datos 1'
        },
        description: {
          en: 'Description of data analysis project 1',
          es: 'Descripción del proyecto de análisis de datos 1'
        },
        image: '/placeholder-project.jpg',
        demo: 'https://demo.example.com',
        github: 'https://github.com/example'
      },
      // Add more data projects...
    ],
    webdev: [
      // Add web development projects...
    ],
    blockchain: [
      // Add blockchain projects...
    ],
    nocode: [
      // Add no-code projects...
    ]
  };

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