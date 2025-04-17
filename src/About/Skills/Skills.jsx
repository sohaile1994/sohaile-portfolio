// Skills.jsx
import React, { useState } from "react";
import SkillCard from "./SkillCard";
import SkillPreview from "./SkillPreview";
import { FaReact, FaJs, FaDatabase, FaNodeJs, FaTools } from "react-icons/fa";
import "./Skills.css";
import SubSection from "../../components/SubSection";

const skills = [
  {
    name: "React",
    icon: <FaReact />,
    description: "A JavaScript library for building user interfaces, especially for single-page applications.",
    colorClass: "react",
    youtubeLink: "https://www.youtube.com/watch?v=Ke90Tje7VS0", // Example YouTube link
  },
  {
    name: "Git",
    icon: <FaTools />,
    description: "A version control system to track changes in source code during software development.",
    colorClass: "git",
    youtubeLink: "https://www.youtube.com/watch?v=RGOj5yH7evk",
  },
  {
    name: "JavaScript",
    icon: <FaJs />,
    description: "A versatile programming language used to create dynamic and interactive web content.",
    colorClass: "javascript",
    youtubeLink: "https://www.youtube.com/watch?v=RL3gh8Vt4rw",
  },
  {
    name: "SQL",
    icon: <FaDatabase />,
    description: "Structured Query Language for managing and querying relational databases.",
    colorClass: "sql",
    youtubeLink: "https://www.youtube.com/watch?v=LRQX0j-j3yQ",
  },
  {
    name: "Node.js",
    icon: <FaNodeJs />,
    description: "A runtime environment that allows running JavaScript server-side for scalable applications.",
    colorClass: "node",
    youtubeLink: "https://www.youtube.com/watch?v=RL3gh8Vt4rw",
  },
];

const Skills = () => {
  const [selectedSkill, setSelectedSkill] = useState(null);

  return (
    <SubSection id="skills" className="skills-section span-column-2">
      <h2>Skills</h2>
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <SkillCard key={index} skill={skill} onClick={setSelectedSkill} />
        ))}
      </div>
      <SkillPreview skill={selectedSkill} onClose={() => setSelectedSkill(null)} />
    </SubSection>
  );
};

export default Skills;
