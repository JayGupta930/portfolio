import React, { useState } from 'react';
import '../styles/Projects.css';

const Projects = () => {
  const [filter, setFilter] = useState('all');
  
  const projects = [
    {
      id: 1,
      title: "JSON Code Editor",
      category: "web",
      image: "https://via.placeholder.com/350x250",
      description: "A fully responsive JSON Code Editor built with React",
      technologies: ["React", "Node.js", "MongoDB"],
      link: "https://github.com/JayGupta930/json_code_editor"
    },
    {
      id: 2,
      title: "Uropine Admin Portal",
      category: "web",
      image: "https://via.placeholder.com/350x250",
      description: "Modern UI/UX design for a personal portfolio",
      technologies: ["React", "Firebase", "Material UI"],
      link: "https://uropine-admin.web.app/admin-dashboard"
    },
    {
      id: 3,
      title: "Task Management App",
      category: "app",
      image: "https://via.placeholder.com/350x250",
      description: "A productivity app for managing daily tasks",
      technologies: ["React Native", "Firebase"],
      link: "#"
    },
    {
      id: 4,
      title: "Company Website",
      category: "web",
      image: "https://via.placeholder.com/350x250",
      description: "Corporate website with modern design",
      technologies: ["HTML", "CSS", "JavaScript"],
      link: "#"
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
        <button 
          className={filter === 'app' ? 'active' : ''} 
          onClick={() => setFilter('app')}
        >
          Apps
        </button>
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
              <img src={project.image} alt={project.title} />
              <div className="project-overlay">
                <a href={project.link} className="project-link">View Project</a>
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
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
