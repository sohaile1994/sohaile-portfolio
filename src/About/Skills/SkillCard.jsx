import React, { useState } from "react";

const SkillCard = ({ skill, onClick }) => {
  const [isHovered, setIsHovered] = useState(false);

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
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className={`skill-name`}>
        {skill.name}
      </div>
      <div className={`skill-icon`}>
        {skill.icon}
      </div>
      {isHovered && (
        <div className="tooltip">
          {skill.description} {/* Tooltip shows the skill description */}
        </div>
      )}
    </div>
  );
};

export default SkillCard;
