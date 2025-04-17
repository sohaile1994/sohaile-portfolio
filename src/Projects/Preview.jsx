// Preview.js
import React from 'react';

const Preview = ({ project }) => {
  if (!project) {
    return null;  // Return null if no project is selected
  }

  return (
    <div className="preview-content">
      <h3>{project.title}</h3>
      <h4>Skills Used:</h4>
      <ul>
        {project.skills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
      <h4>Challenges Faced:</h4>
      <ul>
        {project.challenges.map((challenge, index) => (
          <li key={index}>{challenge}</li>
        ))}
      </ul>
      <h4>Solutions Implemented:</h4>
      <ul>
        {project.solutions.map((solution, index) => (
          <li key={index}>{solution}</li>
        ))}
      </ul>
    </div>
  );
};

export default Preview;