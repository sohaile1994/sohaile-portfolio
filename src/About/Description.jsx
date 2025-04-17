// Description.js
import React from 'react';

const Description = ({ role, description }) => {
  return (
    <>
        <div className="description-section">
            <div className="description-container">
                <p className="about-role">{role}</p>
                <p className="about-description">{description}</p>
            </div>
        </div>
    </>
  );
};

export default Description;