import React from 'react';


const Project = ({ project }) => {
  const { title, description, githubLink, liveDemoLink } = project;

  return (
    <div className="project-card">
      <h3 className="project-title">{title}</h3>
      <p className="project-description">{description}</p>
      <div className="project-buttons">
        <button className="project-button" onClick={() => window.open(githubLink, '_blank')}>
          GitHub
        </button>
        <button className="project-button" onClick={() => window.open(liveDemoLink, '_blank')}>
          Live Demo
        </button>
      </div>
    </div>
  );
};

export default Project;