import React from 'react';


const Projects = () => {
  const projectData = [
    {
      title: "Evogene",
      description: "Game developed in unity using C#",
      githubLink: "https://github.com/yourusername/project1",
      liveDemoLink: "https://project1.com",
    },
    {
      title: "JOA",
      description: "A Touring website for those wishing to see the beauty of Morocco",
      githubLink: "https://github.com/yourusername/project2",
      liveDemoLink: "https://project2.com",
    },
    {
      title: "Math Practice",
      description: "Practice your math skills and compare yourself to others.",
      githubLink: "https://github.com/yourusername/project1",
      liveDemoLink: "https://project1.com",
    },
    {
      title: "Zenith Academy",
      description: "School specialized in teaching ESL kids. Enroll now!!",
      githubLink: "https://github.com/yourusername/project2",
      liveDemoLink: "https://project2.com",
    },
  ];

  return (
    <section id="projects" className="p-lg">
      <h2 className="text-xl font-bold mb-lg">My Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {projectData.map((project, index) => (
          <div key={index} className="project-card">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div>
              <button
                onClick={() => window.open(project.githubLink, '_blank')}
                className="project-button"
              >
                GitHub
              </button>
              <button
                onClick={() => window.open(project.liveDemoLink, '_blank')}
                className="project-button"
              >
                Live Demo
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;