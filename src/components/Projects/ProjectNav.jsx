import { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';

const ProjectNav = ({ categories, activeCategory, setActiveCategory, activeProject, setActiveProject }) => {
  const { language } = useContext(ThemeContext);

  const categoryNames = {
    data: { en: 'Data', es: 'Datos' },
    webdev: { en: 'Web Dev', es: 'Desarrollo Web' },
    blockchain: { en: 'Blockchain', es: 'Blockchain' },
    nocode: { en: 'No Code', es: 'Sin Código' }
  };

  return (
    <nav className="project-nav">
      {Object.keys(categories).map(category => (
        <div key={category} className="category-container">
          <button 
            className={`category-button ${activeCategory === category ? 'active' : ''}`}
            onClick={() => {
              setActiveCategory(activeCategory === category ? null : category);
              setActiveProject(null);
            }}
          >
            {categoryNames[category][language]}
          </button>
          
          {activeCategory === category && (
            <div className="project-list">
              {categories[category].map(project => (
                <button
                  key={project.id}
                  className={`project-button ${activeProject?.id === project.id ? 'active' : ''}`}
                  onClick={() => setActiveProject(project)}
                >
                  {project.title[language]}
                </button>
              ))}
            </div>
          )}
        </div>
      ))}
    </nav>
  );
};

export default ProjectNav;