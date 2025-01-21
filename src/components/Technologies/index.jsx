import { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';
import TechCard from './TechCard';
import './Technologies.css';

const Technologies = () => {
  const { language } = useContext(ThemeContext);

  const techCategories = [
    {
      title: {
        en: 'Data Analytics',
        es: 'Análisis de Datos'
      },
      technologies: [
        { name: 'Python', icon: '/icons/python.svg' },
        { name: 'R', icon: '/icons/r.svg' },
        { name: 'SQL', icon: '/icons/sql.svg' },
        { name: 'Tableau', icon: '/icons/tableau.svg' },
        { name: 'Power BI', icon: '/icons/powerbi.svg' },
        { name: 'Pandas', icon: '/icons/pandas.svg' },
        { name: 'NumPy', icon: '/icons/numpy.svg' },
        { name: 'Scikit-learn', icon: '/icons/scikit.svg' }
      ]
    },
    {
      title: {
        en: 'Frontend',
        es: 'Frontend'
      },
      technologies: [
        { name: 'HTML', icon: '/icons/html.svg' },
        { name: 'CSS', icon: '/icons/css.svg' },
        { name: 'JavaScript', icon: '/icons/javascript.svg' },
        { name: 'React', icon: '/icons/react.svg' },
        { name: 'TypeScript', icon: '/icons/typescript.svg' },
        { name: 'Tailwind', icon: '/icons/tailwind.svg' }
      ]
    },
    {
      title: {
        en: 'Backend',
        es: 'Backend'
      },
      technologies: [
        { name: 'Node.js', icon: '/icons/nodejs.svg' },
        { name: 'Express', icon: '/icons/express.svg' },
        { name: 'MongoDB', icon: '/icons/mongodb.svg' },
        { name: 'PostgreSQL', icon: '/icons/postgresql.svg' },
        { name: 'Django', icon: '/icons/django.svg' }
      ]
    },
    {
      title: {
        en: 'Blockchain',
        es: 'Blockchain'
      },
      technologies: [
        { name: 'Solidity', icon: '/icons/solidity.svg' },
        { name: 'Web3.js', icon: '/icons/web3.svg' },
        { name: 'Ethers.js', icon: '/icons/ethers.svg' },
        { name: 'Hardhat', icon: '/icons/hardhat.svg' },
        { name: 'IPFS', icon: '/icons/ipfs.svg' }
      ]
    },
    {
      title: {
        en: 'Tools',
        es: 'Herramientas'
      },
      technologies: [
        { name: 'Git', icon: '/icons/git.svg' },
        { name: 'Docker', icon: '/icons/docker.svg' },
        { name: 'AWS', icon: '/icons/aws.svg' },
        { name: 'Linux', icon: '/icons/linux.svg' },
        { name: 'VSCode', icon: '/icons/vscode.svg' }
      ]
    }
  ];

  return (
    <section id="technologies" className="technologies">
      <h2>{language === 'en' ? 'Technologies' : 'Tecnologías'}</h2>
      <div className="tech-cards-container">
        {techCategories.map((category, index) => (
          <TechCard
            key={index}
            title={category.title}
            technologies={category.technologies}
          />
        ))}
      </div>
    </section>
  );
};

export default Technologies;