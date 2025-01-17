import React from 'react';
import '../css/Project.css';

import todoListImage  from '../assets/todo.PNG';
import literaImage from '../assets/litera.png';
import estoqueImage from '../assets/estoque.jpeg';
import milkImage from '../assets/milkshake.PNG';


const projectsData = [
  {
    name: 'Todo List com React e Local Storage',
    image: todoListImage,
    github: 'https://github.com/miquiles01/ToDo-List-React',
    deploy: 'https://to-do-list-react-phi-eight.vercel.app/',
  },
  {
    name: 'Landing Page em React',
    image: literaImage,
    github: 'https://github.com/miquiles01/site-literario?tab=readme-ov-file',
    deploy: 'https://site-literario.vercel.app/',
  },
  {
    name: 'Sistema de Gestão de Estoque em Next com TS',
    image: estoqueImage,
    github: 'https://github.com/miquiles01/stock-management.git',
    deploy: 'https://stock-management-plum.vercel.app/',
  },
  {
    name: 'Landing Page em HTML e CSS',
    image: milkImage,
    github: 'https://github.com/miquiles01/Milk-Shakespeare',
    deploy: 'https://miquiles01.github.io/Milk-Shakespeare/',
  },
];

const Projects = () => {
  return (
    <section className="projects-section">
      <div className="container">
        <h1>Meus Projetos</h1>
        
        <div className="projects-list">
          {projectsData.map((project, index) => (
            <div className="project-card" key={index}>
              <h2>{project.name}</h2>
              <img src={project.image} alt={project.name} className="project-image" />
              <div className="project-links">
                <a href={project.github} target="_blank" rel="noopener noreferrer">Repositório no GitHub</a>
                <a href={project.deploy} target="_blank" rel="noopener noreferrer">Deploy</a>
              </div>
            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
};

export default Projects;
