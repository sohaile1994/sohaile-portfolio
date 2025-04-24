import React, { useState } from "react";
import "./SkillCard.css"

const SkillCard = ({ skill, onClick }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleHover = (value)=>{
    setIsHovered(value);
    console.log(skill.name + " is hovered = " + value);
  } 
  const handleClick = () => {
    if (window.innerWidth < 600) {
      // On mobile, open the YouTube link directly
      window.open(skill.youtubeLink, "_blank");
    } else {
      // On larger screens, open the preview modal
      onClick(skill);
    }
  };

  return (
    <div
      className={`skill-card ${skill.colorClass}`}
      onClick={handleClick}
      onMouseEnter={() => handleHover(true)}
      onMouseLeave={() => handleHover(false)}
    >
      <div className={`skill-name`}>
        {skill.name}
      </div>
      <div className={`skill-icon`}>
        {skill.icon}
      </div>
      
      <div className="background" style={{ backgroundColor: skill.colorClass }}></div>
      
      <div className=" skill-description-container">
       {isHovered && 
        <p className="skill-description">{skill.description}</p>
      }
      </div>
    </div>
  );
};

export default SkillCard;
