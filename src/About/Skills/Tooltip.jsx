import React from 'react';

const Tooltip = ({description }) => {
  return (
    <span className={`tooltip`}>
      {description}
    </span>
  );
};

export default Tooltip;