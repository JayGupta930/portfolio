import React, { useState } from 'react';
import '../styles/Projects.css';
import jsonEditorImage from '../assets/images/json_code_editor.jpeg';
import uropineAdminPortalImage from '../assets/images/uropine_admin_portal.png';
import hungryFoodImage from '../assets/images/hungry_food.png';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { SiFigma } from 'react-icons/si';

const Projects = () => {
  const [filter, setFilter] = useState('all');
  
  const projects = [
    {
      id: 1,
      title: "JSON Code Editor",
      category: "web",
      image: jsonEditorImage,
      description: "A fully responsive JSON Code Editor built with React",
      technologies: ["React", "Node.js", "MongoDB"],
      link: "https://json-code-editor.web.app/",
      sourceUrl: "https://github.com/JayGupta930/json_code_editor"
    },
    {
      id: 2,
      title: "Uropine Admin Portal",
      category: "web",
      image: uropineAdminPortalImage,
      description: "Admin dashboard for Uropine devices and customers",
      technologies: ["React", "Firebase", "Material UI"],
      link: "https://uropine-admin.web.app/admin-dashboard",
      sourceUrl: "https://github.com/JayGupta930/uropine-admin"
    },
    {
      id: 3,
      title: "Hungry Food",
      category: "design",
      image: hungryFoodImage,
      description: "A food delivery app design concept",
      technologies: ["Figma", "SVG Repo"],
      link: "https://www.figma.com/proto/RddOPPl6JTdGI8zmmw9VLB/Hungry-Food--food-delivery-app---Community-?node-id=8-2",
      sourceUrl: "https://www.figma.com/design/RddOPPl6JTdGI8zmmw9VLB/Hungry-Food--food-delivery-app---Community-?node-id=0-1&p=f&t=XMSzEKZZlm983nmi-0"
    },
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <section id="projects" className="projects">
      <div className="section-header">
        <h2>My Projects</h2>
        <div className="section-divider"></div>
      </div>
      
      <div className="project-filters">
        <button 
          className={filter === 'all' ? 'active' : ''} 
          onClick={() => setFilter('all')}
        >
          All
        </button>
        <button 
          className={filter === 'web' ? 'active' : ''} 
          onClick={() => setFilter('web')}
        >
          Web
        </button>
        {/* <button 
          className={filter === 'app' ? 'active' : ''} 
          onClick={() => setFilter('app')}
        >
          Apps
        </button> */}
        <button 
          className={filter === 'design' ? 'active' : ''} 
          onClick={() => setFilter('design')}
        >
          Design
        </button>
      </div>
      
      <div className="projects-grid">
        {filteredProjects.map(project => (
          <div className="project-card" key={project.id}>
            <div className="project-image">
              <img src={project.image || jsonEditorImage} alt={project.title} />
              <div className="project-overlay">
                <a href={project.link} 
                   className="project-link" 
                   target="_blank" 
                   rel="noopener noreferrer">
                  View Project <FaExternalLinkAlt style={{ marginLeft: '5px' }} />
                </a>
              </div>
            </div>
            <div className="project-info">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="project-tech">
                {project.technologies.map((tech, index) => (
                  <span key={index} className="tech-tag">{tech}</span>
                ))}
              </div>
              <div className="project-source">
                <a href={project.sourceUrl} 
                   target="_blank" 
                   rel="noopener noreferrer" 
                   className="source-link">
                  {project.category === 'design' ? <SiFigma className="source-icon" /> : <FaGithub className="source-icon" />}
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
