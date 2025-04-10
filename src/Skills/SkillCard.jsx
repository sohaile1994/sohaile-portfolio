import React, { useState } from 'react';

const SkillCard = ({ skill }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div 
      className={`skill-card ${hovered ? 'hovered' : ''}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {hovered ? (
        <div className="skill-icon">
          {skill.icon}
        </div>
      ) : (
        <h3 className="skill-title">{skill.name}</h3>
      )}
      <p className="skill-description">
        {hovered ? skill.description : ''}
      </p>
    </div>
  );
};

export default SkillCard;