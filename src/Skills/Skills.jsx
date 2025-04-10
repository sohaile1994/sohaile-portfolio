import React from 'react';
import { FaReact, FaJs, FaDatabase, FaNodeJs, FaTools } from 'react-icons/fa';

const Skills = () => {
  const skills = [
    { name: "React", icon: <FaReact />, description: "Building robust and interactive UIs.", gradient: "bg-gradient-to-br from-teal-400 to-blue-500" },
    { name: "JavaScript", icon: <FaJs />, description: "Writing clean, maintainable code.", gradient: "bg-gradient-to-br from-yellow-400 to-red-500" },
    { name: "SQL", icon: <FaDatabase />, description: "Managing databases and data retrieval.", gradient: "bg-gradient-to-br from-purple-400 to-pink-500" },
    { name: "Node.js", icon: <FaNodeJs />, description: "Building scalable network applications.", gradient: "bg-gradient-to-br from-green-600 to-green-800" },
    { name: "Git", icon: <FaTools />, description: "Version control for collaboration.", gradient: "bg-gradient-to-br from-blue-600 to-blue-800" },
  ];
  
  return (
    <section id="skills" className="p-lg">
      <h2 className="text-xl font-bold mb-lg">Skills</h2>
      <div className="grid">
        {skills.map((skill, index) => (
          <div key={index} className="skill-card">
            <div className="icon">{skill.icon}</div>
            <h3>{skill.name}</h3>
            <p>{skill.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;