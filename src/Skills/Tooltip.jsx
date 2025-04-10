import React from 'react';

const Tooltip = ({ hovered, description }) => {
  return (
    <span className={`tooltip ${hovered ? 'visible' : 'hidden'}`}>
      {description}
    </span>
  );
};

export default Tooltip;