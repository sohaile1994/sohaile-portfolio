// Title.js
import React from 'react';

const Title = ({ subtitle, name }) => {
  return (
    <div className="title-section txt-center">
      <p className="about-subtitle">{subtitle}</p>
      <h2 className="about-title">Introducing: <span className="about-name text-xl">{name}</span></h2>
    </div>
  );
};

export default Title;