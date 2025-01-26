import { useContext, useState } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import { categoryNames } from "../../data/projects";

const ProjectNav = ({
  categories,
  activeCategory,
  setActiveCategory,
  activeProject,
  setActiveProject,
}) => {
  const { language } = useContext(ThemeContext);
  const [hoveredProject, setHoveredProject] = useState(null);

  return (
    <nav className="project-nav">
      {Object.keys(categories).map((category) => (
        <div key={category} className="category-container">
          <button
            className={`category-button ${
              activeCategory === category ? "active" : ""
            }`}
            onClick={() => {
              setActiveCategory(activeCategory === category ? null : category);
              setActiveProject(null);
              setHoveredProject(null); // Limpiar el hover al cambiar de categoría
            }}
          >
            {categoryNames[category][language]}
          </button>

          {activeCategory === category && (
            <div className="project-list">
              {categories[category].map((project) => (
                <div
                  key={project.id}
                  className="project-button-container"
                  onMouseEnter={() => {
                    if (activeProject?.id !== project.id) {
                      setHoveredProject(project);
                    }
                  }}
                  onMouseLeave={() => setHoveredProject(null)}
                >
                  <button
                    // key={project.id}
                    className={`project-button ${
                      activeProject?.id === project.id ? "active" : ""
                    }`}
                    onClick={() => {
                      setActiveProject(project);
                      setHoveredProject(null);
                    }}
                  >
                    {project.title[language]}
                  </button>
                  {(hoveredProject?.id === project.id ||
                    (activeProject?.id === project.id && !hoveredProject)) && (
                    <div className="project-tooltip">
                      <p>{project.description[language]}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </nav>
  );
};

export default ProjectNav;
