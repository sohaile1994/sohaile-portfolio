// src/components/Section.jsx
import React from 'react';

const Section = ({name, children, className = "" }) => {
  return <section id={`${name}-section`} className={`section ${name}-section ${className}`}>{children}</section>;
};



export default Section;