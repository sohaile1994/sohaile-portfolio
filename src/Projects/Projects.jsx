import React, { useState } from 'react';
import Project from './Project';
import Preview from './Preview';  // Import the Preview component
import "./Projects.css";
import Section from '../components/Section';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const projectData = [
    {
      title: "Evogene",
      description: "Game developed in Unity using C#",
      githubLink: "https://github.com/yourusername/project1",
      liveDemoLink: "https://project1.com",
      skills: ["Unity", "C#", "Game Design"],
      challenges: ["Balancing gameplay mechanics", "Optimizing performance"],
      solutions: ["Implemented game analytics to adjust difficulty", "Used object pooling to improve performance"],
    },
    {
      title: "JOA",
      description: "A touring website for those wishing to see the beauty of Morocco",
      githubLink: "https://github.com/yourusername/project2",
      liveDemoLink: "https://project2.com",
      skills: ["HTML", "CSS", "JavaScript"],
      challenges: ["Responsive design across devices", "SEO optimization"],
      solutions: ["Used media queries for responsive layouts", "Implemented SEO best practices"],
    },
    {
      title: "Math Practice",
      description: "Practice your math skills and compare yourself to others.",
      githubLink: "https://github.com/yourusername/project3",
      liveDemoLink: "https://project3.com",
      skills: ["JavaScript", "React", "CSS"],
      challenges: ["Creating an engaging user interface", "Implementing real-time score tracking"],
      solutions: ["Used React for dynamic rendering", "Implemented local storage for score tracking"],
    },
    {
      title: "Zenith Academy",
      description: "K-12 school specialized in teaching ESL kids. Enroll now!!",
      githubLink: "https://github.com/yourusername/project4",
      liveDemoLink: "https://project4.com",
      skills: ["HTML", "CSS", "JavaScript", "Node.js"],
      challenges: ["Managing user registrations and enrollments", "Creating a user-friendly dashboard"],
      solutions: ["Used Node.js for backend management", "Developed a responsive design for the dashboard"],
    },
  ];

  const handleProjectClick = (project) => {
    setSelectedProject(project);
  };

  return (
    <Section id="projects">
      <h2 className="text-xl font-bold">My Projects</h2>
      <div className='projects-content-container'>
       <div className="projects-container">
          {projectData.map((project, index) => (
            <div key={index} onClick={() => handleProjectClick(project)}>
              <Project project={project} />
           </div>
         ))}
        </div>
        <div className='preview-container'>
          <Preview project={selectedProject} /> {/* Use the Preview component */}
        </div>
      </div>
    </Section>
  );
};

export default Projects;